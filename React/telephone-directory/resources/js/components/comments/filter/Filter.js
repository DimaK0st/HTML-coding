import React, {useEffect, useLayoutEffect, useState} from 'react';
import './filter.scss'
import order from '/assets/order.svg'

function Filter(props) {
    const {review}=props.data
    const [time, setTime] = useState(true)

    const filterList = [
        {
            'key': 'all',
            'name': 'Всі'
        },
        {
            'key': 'positive',
            'name': 'Позитивні',
        },
        {
            'key': 'negative',
            'name': 'Негативні',
        },
        {
            'key': '1',
            'name': '1 ★',
        },
        {
            'key': '2',
            'name': '2 ★',
        },
        {
            'key': '3',
            'name': '3 ★',
        },
        {
            'key': '4',
            'name': '4 ★',
        },
        {
            'key': '5',
            'name': '5 ★',
        },
    ]

    const filterComments = (type) => {
        switch (type) {
            case 'all':
                props.setData({...props.data, sortedList: sortNewOrOld(time, review.value), sortedBy: type})
                break

            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
                props.setData({
                    ...props.data,
                    sortedList: sortNewOrOld(time, review.value.filter((item) => {
                        return item.rating === parseInt(type)
                    })),
                    sortedBy: type
                })
                break

            case 'positive':
                props.setData({
                    ...props.data, sortedList: sortNewOrOld(time, review.value.filter((item) => {
                        return item.rating === parseInt('5') || item.rating === parseInt('4')
                    })), sortedBy: type
                })
                break

            case 'negative':
                props.setData({
                    ...props.data, sortedList: sortNewOrOld(time, review.value.filter((item) => {
                        return item.rating === parseInt('1') || item.rating === parseInt('2') || item.rating === parseInt('3')
                    })), sortedBy: type
                })
                break
        }
    }

    useEffect(() => {
        filterComments(props.data.sortedBy)
    }, [time,review])

    useEffect(() => {
        filterComments('all')
    }, [])

    const sortNewOrOld = (sort, arr) => {
        if (sort) {
            return arr.sort(function (a, b) {
                return (new Date(b.created_at)) - (new Date(a.created_at));
            })
        } else {
            return arr.sort(function (a, b) {
                return (new Date(a.created_at)) - (new Date(b.created_at));
            })
        }
    }

    return (
        <div className={'filter'}>

            {console.error('Filter')}
            {console.error(review)}

            {filterList.map((item) => {
                return <button className={'filter-item'} onClick={() => filterComments(item.key)}>{item.name}</button>
            })}

            {time ?
                <button className={'filter-item right'} onClick={() => setTime(false)}>З найновіших<img src={order}/></button> :
                <button className={'filter-item right'} onClick={() => setTime(true)}>З найдавніших<img className={'rotate'} src={order}/></button>
            }

        </div>
    )


}

export default Filter;
