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
  