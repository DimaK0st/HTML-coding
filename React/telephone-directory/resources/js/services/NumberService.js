const usePhoneService = () => {
    const _apiBase = 'http://127.0.0.1:8000/api/v1/'
    const _apiKey = 'apikey=d8d91bcae31f6e159f05936ba0ff51d4'
    const _baseOffset = 210

    const postRequest = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        },

    };

    const getNumberRating = (number) => {
        // fetch(_apiBase + 'number-rating', {...postRequest,mode: 'no-cors', body: {number: number}})
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             console.log(result)
        //             // setIsLoaded(true);
        //             // setItems(result);
        //         },
        //         // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        //         // чтобы не перехватывать исключения из ошибок в самих компонентах.
        //         (error) => {
        //         }
        //     )
    axios.post(_apiBase + 'number-rating', { number: number }, {headers: {
            'Content-Type':  'application/json',
            'Accept':        'application/json',
            'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin',
            'Access-Control-Allow-Origin': '*',

            mode: 'no-cors',
            credentials: 'same-origin',
        }})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })

    }
    return {
        getNumberRating,
    }
}

export default usePhoneService
