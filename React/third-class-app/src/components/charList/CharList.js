import './charList.scss';
import {Component} from "react";
import MarvelService from "../../services/MarvelService";
import ErrorMassage from "../errorMassage/ErrorMassage";
import Spinner from "../spinner/Spinner";

class CharList extends Component {

    state = {
        charList: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 210,
        charEnded: false,
    }

    componentDidMount() {
        this.updateChar()
    }

    updateChar = (offset) => {
        this.onCharListLoading()
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    marvelService = new MarvelService()

    onCharListLoaded = (newCharList) => {
        let ended = newCharList.length < 9

        this.setState(({offset, charList}) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended,
        }))
    }

    render() {
        const {charList, loading, error, newItemLoading, offset, charEnded} = this.state
        let content

        const errorMessage = error ? <ErrorMassage/> : null
        const spinner = loading ? <Spinner/> : null
        if (!(loading || error)) {
            content = charList.map(char => <View char={char} key={char.id.toString()} props={this.props}/>)
        }


        return (
            <div className="char__list">
                <ul className="char__grid">
                    {errorMessage}
                    {spinner}
                    {content}
                </ul>
                <button className="button button__main button__long" disabled={newItemLoading}
                        onClick={() => this.updateChar(offset)}
                        style={{'display': charEnded ? 'none' : 'block'}}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
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
