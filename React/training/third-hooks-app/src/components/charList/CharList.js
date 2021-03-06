import './charList.scss';
import {useEffect, useState} from "react";
import MarvelService from "../../services/MarvelService";
import ErrorMassage from "../errorMassage/ErrorMassage";
import Spinner from "../spinner/Spinner";
import useMarvelService from "../../services/MarvelService";

const CharList = (props) => {
    const [charList, setCharList] = useState([])
    const [newItemLoading, setNewItemLoading] = useState(false)
    const [offset, setOffset] = useState(210)
    const [charEnded, setCharEnded] = useState(false)

    const {loading,error,getAllCharacters, clearError} = useMarvelService()

    useEffect(() => {
        updateChar(offset,true)
    }, [])

    const updateChar = (offset, initial) => {
        clearError()
        setNewItemLoading(!initial)
        getAllCharacters(offset)
            .then(onCharListLoaded)
    }

    const onCharListLoaded = (newCharList) => {
        let ended = newCharList.length < 9

        setCharList(charList => [...charList, ...newCharList])
        setNewItemLoading(false)
        setOffset(offset => offset + 9)
        setCharEnded(charEnded => ended)
    }

    let content = charList.map(char => <View char={char} key={char.id.toString()} props={props}/>)
    const errorMessage = error ? <ErrorMassage/> : null
    const spinner = loading && !newItemLoading? <Spinner/> : null


    return (
        <div className="char__list">
            <ul className="char__grid">
                {errorMessage}
                {spinner}
                {content}
            </ul>
            <button className="button button__main button__long" disabled={newItemLoading}
                    onClick={() => updateChar(offset)}
                    style={{'display': charEnded ? 'none' : 'block'}}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

const View = ({char, props}) => {
    const {title, thumbnail, id} = char
    let imgStyle = null

    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit': 'unset'};
    }

    return (
        <li className="char__item" key={id.toString()} onClick={() => props.onCharSelected(id)}>
            <img src={thumbnail} alt="abyss" style={imgStyle}/>
            <div className="char__name">{title}</div>
        </li>
    )
}

export default CharList;
