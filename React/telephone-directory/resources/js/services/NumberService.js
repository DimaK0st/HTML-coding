import {value} from "lodash/seq";

const usePhoneService = (phone, state, setState) => {
    let result = phone.replace(/(380|)/, '')
    const _apiBase = 'http://127.0.0.1:8000/api/v1/'


    const postRequest = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin',
            'Access-Control-Allow-Origin': '*',

            mode: 'no-cors',
            credentials: 'same-origin',
        },

    };

    const getNumberRating = (navigate) => {
        if (result.length !== 9) {
            navigate("/404");
        }

        return axios.post(_apiBase + 'get-all-info-about-phone', {number: result}, {
            headers: {
                ...postRequest.headers
            }
        })
            .then(res => {
                return res.data
            })
    }

    const getNumberRatingPaginate = (url) => {

        return axios.post(url, {number: result}, {
            headers: {
                ...postRequest.headers
            }
        })
            .then(res => {
                return res.data.review
            }).then(review=>{
                setState({
                    ...state,
                    'review': {
                        'value': [...state.review.value, ...review.value],
                        'total': review.total,
                        'nextPage': review.nextPage,
                    }
                })

            })

    }

    return {
        getNumberRating,getNumberRatingPaginate,
    }
}

export default usePhoneService
