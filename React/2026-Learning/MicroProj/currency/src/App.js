import React, {useEffect, useRef, useState} from 'react';
import {Block} from './Block';
import './index.scss';

function App() {
    const [fromCurrency, setFromCurrency] = useState('PLN')
    const [toCurrency, setToCurrency] = useState('USD')
    const [fromPrice, setFromPrice] = useState(0)
    const [toPrice, setToPrice] = useState(1)

    const ratesRef = useRef({})

    useEffect(
        () => {
            fetch('https://api.frankfurter.app/latest')
                .then((res) => res.json())
                .then((data) => {
                    ratesRef.current = data.rates;
                    onChangeToPrice(1)
                })
                .catch((err => {
                    console.warn('Error fetching exchange rates:', err);
                }));
        },
        []
    )

    const onChangeFromPrice = (value) => {
        console.log(ratesRef.current)
        const price = value / ratesRef.current[fromCurrency];
        const result = price * ratesRef.current[toCurrency];

        console.log(price, result);
        setToPrice(result.toFixed(2));
        setFromPrice(value);
    }

    const onChangeToPrice = (value) => {
        const price1 =  (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
        setFromPrice(price1.toFixed(2));
        setToPrice(value);
    }


    useEffect(() => {
        setFromCurrency(fromCurrency)
        onChangeFromPrice(fromPrice);
        }, [fromCurrency]);

    useEffect(() => {
        setToCurrency(toCurrency)
        onChangeToPrice(toPrice);
        }, [toCurrency]);

    return (
        <div className="App">
            <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice}/>
            <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue={onChangeToPrice}/>
        </div>
    );
}

export default App;
