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

    const getNumberRating =  (number,setData,navigate) => {
        let result = number.replace(/(380|)/, '')
        console.log('---------------------------')
        if (result.length !== 9){
            navigate("/404");
        }
        console.log('+++++++++++++++++++++++++++')

        // number.match('/(\+380|)(\d{9}$)/')

          axios.post(_apiBase + 'get-all-info-about-phone', { number: result }, {headers: {
            'Content-Type':  'application/json',
            'Accept':        'application/json',
            'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin',
            'Access-Control-Allow-Origin': '*',

            mode: 'no-cors',
            credentials: 'same-origin',
        }})
        .then(res => {
            console.log(res.data)
            setData(res.data);
            return res.data
        })

    }
    return {
        getNumberRating,
    }
}

export default usePhoneService
