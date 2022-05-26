import tokenService from './tokenService';

const BASE_URL = '/api';

export function create(review, businessId) {
    return fetch(`${BASE_URL}/businesses/${businessId}/reviews`, {
        method: 'POST',
        body: review,
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if(res.ok) return res.json();
        throw new Error('Create function in the REVIEW API.');
    })
}

export function deleteReview(reviewId) {
    return fetch(`${BASE_URL}/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if(res.ok) return res.json()
        throw new Error('Delete review function in the REVIEW API.')
    })
}

// export function index() {
//     return fetch(`${BASE_URL}/reviews`, {
//         headers: {
//             'Authorization': 'Bearer ' + tokenService.getToken()
//         }
//     }).then(res => {
//         if(res.ok) return res.json();
//         throw new Error('Index function in the REVIEW API.')
//     })
// }