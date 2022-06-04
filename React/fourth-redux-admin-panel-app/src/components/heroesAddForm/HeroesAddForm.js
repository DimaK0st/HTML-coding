import {useEffect, useState} from "react";
import {addNewHero, filtersFetched, filtersFetching, filtersFetchingError} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {useHttp} from "../../hooks/http.hook";
import data from "bootstrap/js/src/dom/data";
import { v4 as uuidv4 } from 'uuid';

const HeroesAddForm = () => {
    const [name,setName]=useState()
    const [description,setDescription]=useState()
    const [element,setElement]=useState()

    const {filters, filtersLoadingStatus} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(filtersFetching());
        request("http://localhost:3001/filters")
            .then(data => dispatch(filtersFetched(data)))
            .catch(() => dispatch(filtersFetchingError()))

        // eslint-disable-next-line
    }, []);

    const contentOption = filters.map((item)=>(
        <option value={item}>{item}</option>
    ))


    const onSubmitHandler=(e)=>{
        e.preventDefault()

        const newHero = {
            id: uuidv4(),
            name: name,
            description: description,
            element:element,
        }

            request("http://localhost:3001/heroes", 'POST', JSON.stringify(newHero))
                .then(res =>console.log(res))
                .then(() => dispatch(addNewHero(newHero)))
                .catch(() => dispatch(filtersFetchingError()))

        setName('')
        setDescription('')
        setElement('')
    }

    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitHandler}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                value={description}
                onChange={(e)=>setDescription(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={element}
                    onChange={(e)=>setElement(e.target.value)}>
                    <option >Я владею элементом...</option>
                    {contentOption}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;
