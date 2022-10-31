import React from 'react';
import order from '/assets/order.svg'

function Filter(props) {
    const {data} = props

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

    const filterComments = (sort, order) => {

        props.setData({...data, sort: sort, order: order})
    }


    return (
        <div className={'filter'}>

            {filterList.map((item,index) => {
                return <button key={index} className={'filter-item'}
                               onClick={() => filterComments(item.key, data.order)}>{item.name}</button>
            })}

            {data.order ?
                <button className={'filter-item right'} onClick={() => filterComments(data.sort, 0)}>З найновіших<img
                    src={order}/></button> :
                <button className={'filter-item right'} onClick={() => filterComments(data.sort, 1)}>З найдавніших<img
                    className={'rotate'} src={order}/></button>
            }

        </div>
    )


}

export default Filter;
