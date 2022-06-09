import './comicsList.scss';
import useMarvelService from "../../services/MarvelService";
import {useEffect, useState} from "react";
import ErrorMassage from "../errorMassage/ErrorMassage";
import Spinner from "../spinner/Spinner";
import {Link} from "react-router-dom";

const ComicsList = (props) => {

    const {loading, error, getAllComics}= useMarvelService()
    const [comicsList, setComicsList] = useState([]);
    const [offset, setOffset] = useState(210)
    const [newItemLoading, setnewItemLoading] = useState(false);
    const [comicsEnded, setComicsEnded] = useState(false)


    useEffect(() => {
        updateComics(offset,true)
    }, [])

    const updateComics = (offset, initial)=>{
        setnewItemLoading(!initial);
        getAllComics(offset)
            .then(onCharListLoaded)
    }

    const onCharListLoaded = (newComicsList) => {
        let ended = newComicsList.length < 8

        setComicsList(comicsList => [...comicsList, ...newComicsList])
        setComicsList([...comicsList, ...newComicsList]);
        setnewItemLoading(false)
        setOffset(offset => offset + 8)
        setComicsEnded(comicsEnded => ended)
    }

    let content = comicsList.map(comics => <View comics={comics} key={comics.id.toString()} props={props}/>)
    const errorMessage = error ? <ErrorMassage/> : null
    const spinner = loading && !newItemLoading? <Spinner/> : null

    return (
        <div className="comics__list">
            <ul className="comics__grid">
                {errorMessage}
                {spinner}
                {content}
            </ul>
            <button
                disabled={newItemLoading}
                style={{'display' : comicsEnded ? 'none' : 'block'}}
                className="button button__main button__long"
                onClick={() => updateComics(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

const View = (props)=>{
    const {id,key,title,thumbnail,price}=props.comics
    return(
        <li className="comics__item" key={key}>
            <Link to={`/comics/${id}`}>
                <img src={thumbnail} alt={title} className="comics__item-img"/>
                <div className="comics__item-name">{title}</div>
                <div className="comics__item-price">{price}</div>
            </Link>
        </li>
    )
}

export default ComicsList;
