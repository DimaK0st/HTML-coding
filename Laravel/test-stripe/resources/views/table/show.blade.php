@extends('layouts.app')

@section('content')
    <script async src="https://js.stripe.com/v3/pricing-table.js"></script>

    <stripe-pricing-table
        pricing-table-id="prctbl_1Mc5wXFqOuXRHkowrmQJ6jAW"
        publishable-key="{{config('app.stripe.key')}}"
        client-reference-id='{{\Illuminate\Support\Facades\Auth::user()->stripe_id}}'
    >    </stripe-pricing-table>

@endsection

@section('scripts')

@endsection
