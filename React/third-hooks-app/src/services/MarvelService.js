import {useHttp} from "../hook/http.hook";

const useMarvelService=()=> {
    const {loading,request,error,clearError} = useHttp()

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    const _apiKey = 'apikey=d8d91bcae31f6e159f05936ba0ff51d4'
    const _baseOffset = 210



    const  getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`)
        return res.data.results.map(_transformCharacter)
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`)
        return _transformCharacter(res.data.results[0])
    }

    const _transformCharacter = (res) => {
        res.description = !res.description ? 'No description :)' : res.description

        if (res.description.length > 200) {
            res.description = res.description.slice(0, 197) + '...'
        }

        return {
            id: res.id,
            name: res.name,
            description: res.description,
            thumbnail: res.thumbnail.path + '.' + res.thumbnail.extension,
            homepage: res.urls[0].url,
            wiki: res.urls[1].url,
            comics: res.comics.items
        }
    }

    return {loading, error,clearError, getAllCharacters, getCharacter}
}

export default useMarvelService
