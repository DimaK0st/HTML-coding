@extends('layouts.app')

@section('content')
    <input id="card-holder-name" type="text">

    <!-- Stripe Elements Placeholder -->
    <div id="card-element"></div>

    <button id="card-button" data-secret="{{ $intent->client_secret }}">
        Update Payment Method
    </button>
@endsection

@section('scripts')
    <script src="https://js.stripe.com/v3/"></script>

    <script>
        console.log('hui1')
        const stripe = Stripe('{{config('app.stripe.key')}}');
        console.log('hui2')
        const elements = stripe.elements();
        const cardElement = elements.create('card');

        cardElement.mount('#card-element');

        const cardHolderName = document.getElementById('card-holder-name');
        const cardButton = document.getElementById('card-button');
        console.log(cardButton)
        const clientSecret = cardButton.dataset.secret;

        cardButton.addEventListener('click', async (e) => {
            console.log('hui')
            const { setupIntent, error } = await stripe.confirmCardSetup(
                clientSecret, {
                    payment_method: {
                        card: cardElement,
                        billing_details: { name: cardHolderName.value }
                    }
                }
            );

            if (error) {
                alert(error.message)
                // Display "error.message" to the user...
            } else {

                alert(setupIntent)
                // The card has been verified successfully...
            }
        });
    </script>
@endsection
