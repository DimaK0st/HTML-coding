import {value} from "lodash/seq";

const usePhoneService = (phone, state, setState) => {
    let result = phone.replace(/(380|)/, '')
    const _apiBase = 'http://127.0.0.1:8000/api/v1/'
    let varState = state
    let varSetState = setState

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
                setLastVisitedNumbers(res.data.idPhone)
                return res.data
            })
    }


    const getComments = (sort, order) => {

        return axios.post(_apiBase + 'get-comments-phone', {number: result, sort: sort, order: order}, {
            headers: {
                ...postRequest.headers
            }
        })
            .then(res => {

                return res.data.review

            }).then((value) => {
                varSetState({
                    ...varState,
                    loaded: true,
                    ...value,
                })
            })
    }


    const getCommentsByPaginate = (type, url) => {

        return axios.post(url, {number: result, sort: type}, {
            headers: {
                ...postRequest.headers
            }
        })
            .then(res => {
                return res.data.review
            }).then((value) => {

                varSetState({
                    ...varState,
                    loaded: true,
                    ...value,
                    'comments': [...varState.comments, ...value.comments],
                })
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
            }).then(review => {
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

    const setLastVisitedNumbers = (phoneId) => {
        let getItem = JSON.parse(localStorage.getItem('lastVisitedNumbers'))

        if (typeof getItem === 'object' && getItem?.length > 0) {
            if (getItem.filter((item) => item === phoneId).length) {
                return
            }

            localStorage.setItem('lastVisitedNumbers', JSON.stringify([phoneId, ...getItem]));
        } else {
            localStorage.setItem('lastVisitedNumbers', JSON.stringify([phoneId]));
        }
    }

    const getLastVisitedNumbers = () => {

        let getItem = JSON.parse(localStorage.getItem('lastVisitedNumbers'))
        return axios.post(_apiBase + 'get-last-phones', {phones: getItem}, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            return res.data
        }).then((value) => {
            console.log('value', value)
            varSetState({data: value, sortBy: getItem})
            console.log('varState', varState)
        })
    }

    const addRating = (reloadComponent) => {

        return axios.post(_apiBase + 'add-rating', {...varState}, {
            headers: {
                ...postRequest.headers
            }
        }).then(res => {
            reloadComponent()
            // return res.data
        }).then((value) => {

        })
    }


    return {
        getNumberRating, getNumberRatingPaginate, getCommentsByPaginate, getComments, getLastVisitedNumbers,addRating,
    }
}

export default usePhoneService
