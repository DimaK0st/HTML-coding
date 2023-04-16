@extends('layouts.app')

@section('content')
<div class="container">
    <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
    <stripe-pricing-table pricing-table-id="prctbl_1MdXI7FqOuXRHkowAJpUiRY7"
                          publishable-key="pk_test_51MZAYVFqOuXRHkowsZndBfCXHN4Nklvhg28Qc9V5qu9ARTgrdUYBLtVyMPiNXtAB4w63jlNSh7WE7cTR003wOEyz00kCFUGbbW"
                          client-reference-id='{{\Illuminate\Support\Facades\Auth::user()->stripe_id}}'>
    </stripe-pricing-table>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}

                        </div>
                    @endif

                    {{ __('You are logged in!') }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
