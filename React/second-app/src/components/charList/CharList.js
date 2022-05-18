import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';
import {Component} from "react";
import MarvelService from "../../services/MarvelService";
import ErrorMassage from "../errorMassage/ErrorMassage";
import Spinner from "../spinner/Spinner";

class CharList extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        charList: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
        loading: true,
        error: false,
    }

    componentDidMount() {
        this.updateChar()
    }

    updateChar = () => {
        this.setState({loading: true})
        this.marvelService.getAllCharacters()
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    marvelService = new MarvelService()

    onCharListLoaded = (char) => {
        this.setState({charList:char, loading: false})
    }

    render() {
        const {charList, loading, error} = this.state
        let content

        const errorMessage = error ? <ErrorMassage/> : null
        const spinner = loading ? <Spinner/> : null
        if (!(loading || error)){
            content = charList.map(char=><View char={char}/>)
        }


        return (
            <div className="char__list">
                <ul className="char__grid">
                    {errorMessage}
                    {spinner}
                    {content}


                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

const View = ({char}) => {
    const {name, thumbnail, wiki, id} = char
    let imgStyle = null

    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'unset'};
    }

    return (
        <li className="char__item" src={wiki} key={id}>
            <img src={thumbnail} alt="abyss" style={imgStyle}/>
            <div className="char__name">{name}</div>
        </li>
    )
}

export default CharList;
