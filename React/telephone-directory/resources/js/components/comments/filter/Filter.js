import React, {useEffect, useLayoutEffect, useState} from 'react';
import './filter.scss'

function Filter(props) {

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

    const timeList=[
        {
            'key': 'З найдавніших',
            'name': 'З найдавніших',
        },
        {
            'key': '5',
            'name': '5 ★',
        },
    ]

    const filterComments = (type) => {
        switch (type) {
            case 'all':
                props.setData({...props.data, sortedList: sortNewOrOld(time,props.data.allReview),sortedBy:type})
                break

            case '1':
            case '2':
            case '3':
            case '4':
            case '5':

                break

            case 'positive':
                setTime(true)
                props.setData({...props.data, sortedList: sortNewOrOld(true,props.data.allReview),sortedBy:type})
                break

            case 'negative':
                setTime(false)
                props.setData({...props.data, sortedList: sortNewOrOld(false,props.data.allReview),sortedBy:type})
                break
        }
    }

    useEffect(() => {
        filterComments(props.data.sortedBy)
    },[time])

        const sortNewOrOld= (sort, arr)=>{
        if (sort){
            return arr.sort(function (a, b) {
                return (new Date(b.created_at)) - (new Date(a.created_at));
            })
        }else {
            return arr.sort(function (a, b) {
                return (new Date(a.created_at)) - (new Date(b.created_at));
            })
        }
    }

    return (
        <div className={'filter'}>
            {filterList.map((item) => {
                return <button className={'filter-item'} onClick={()=>filterComments(item.key)}>{item.name}</button>
            })}

            {time?
                <button className={'filter-item'} onClick={()=>setTime(false)}>З найновіших</button>:
                <button className={'filter-item'} onClick={()=>setTime(true)}>З найдавніших</button>
            }

        </div>
    )


}

export default Filter;
