import tokenService from './tokenService';

const BASE_URL = '/api'

export function create(review, businessId) {
    console.log(review.get('text'), 'create review function!')
    return fetch(`${BASE_URL}/businesses/${businessId}/reviews`, {
        method: 'POST',
        body: review,
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if(res.ok) return res.json();
        throw new Error('REVIEWS API ERROR');
    })
}

export function deleteReview(reviewId) {
    console.log(reviewId, 'delete review function')
    return fetch(`${BASE_URL}/comments/${reviewId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if(res.ok) return res.json()
        throw new Error('Check express terminal!')
    })
}