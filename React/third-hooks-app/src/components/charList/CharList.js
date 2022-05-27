import './charList.scss';
import {useEffect, useState} from "react";
import MarvelService from "../../services/MarvelService";
import ErrorMassage from "../errorMassage/ErrorMassage";
import Spinner from "../spinner/Spinner";

const CharList = (props) => {
    const [charList, setCharList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [newItemLoading, setNewItemLoading] = useState(false)
    const [offset, setOffset] = useState(210)
    const [charEnded, setCharEnded] = useState(false)

    const marvelService = new MarvelService()

    useEffect(() => {
        updateChar()
    }, [])

    const updateChar = (offset) => {
        onCharListLoading()
        marvelService.getAllCharacters(offset)
            .then(onCharListLoaded)
            .catch(onError)
    }

    const onCharListLoading = () => {
        setNewItemLoading(true)
    }


    const onCharListLoaded = (newCharList) => {
        let ended = newCharList.length < 9


        setCharList(charList => [...charList, ...newCharList])
        setLoading(false)
        setNewItemLoading(false)
        setOffset(offset => offset + 9)
        setCharEnded(charEnded => ended)

    }

    const onError = () => {
        setError(true)
        setLoading(false)
    }

    let content

    const errorMessage = error ? <ErrorMassage/> : null
    const spinner = loading ? <Spinner/> : null
    if (!(loading || error)) {
        content = charList.map(char => <View char={char} key={char.id.toString()} props={props}/>)
    }


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
    const {name, thumbnail, id} = char
    let imgStyle = null

    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit': 'unset'};
    }

    return (
        <li className="char__item" key={id.toString()} onClick={() => props.onCharSelected(id)}>
            <img src={thumbnail} alt="abyss" style={imgStyle}/>
            <div className="char__name">{name}</div>
        </li>
    )
}

export default CharList;
