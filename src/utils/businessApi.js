import tokenService from './tokenService';

const BASE_URL = '/api/businesses';

export function create(business) {
    console.log('create function')
    console.log(business, 'business model')
    return fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(business),
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken(),
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if(res.ok) return res.json();
        throw new Error('BUSINESS API ERROR');
    })
}

export function getAll() {
    return fetch(BASE_URL, {
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    })
    .then(res => {
        if(res.ok) return res.json();
        throw new Error('getAll function in business controller')
    })
}

export function removeBusiness(businessId) {
    return fetch(`${BASE_URL}/${businessId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if(res.ok) return res.json()
        throw new Error('Check express terminal!')
    })
}

export function show(businessId) {
    return fetch(`${BASE_URL}/${businessId}`, {
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if(res.ok) return res.json();
        throw new Error('Check businessAPI.')
    })

}
  