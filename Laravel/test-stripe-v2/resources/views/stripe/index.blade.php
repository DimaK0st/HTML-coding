<!DOCTYPE html>
<html>
<head>
    <title>Stripe Pricing Table Example</title>
    <script src="https://cdn.pricingtable.io/embed.js"></script>
</head>
<body>
<div id="pricing-table"></div>
<ul id="subscriptions-list"></ul>
{{dd($plans)}}

<script>
    // Заполнение таблицы цен
    {{--pricingtable.embed({--}}
    {{--    selector: '#pricing-table',--}}
    {{--    plans: {!! $plans->toJson() !!},--}}
    {{--});--}}
    // Заполнение списка подписок
    var subscriptionsList = document.getElementById('subscriptions-list');
    @foreach ($subscriptions as $subscription)
    var subscriptionItem = document.createElement('li');
    subscriptionItem.innerHTML = '{{ $subscription->plan->name }} - {{ $subscription->status }}';
    subscriptionsList.appendChild(subscriptionItem);
    @endforeach
</script>
</body>
</html>
