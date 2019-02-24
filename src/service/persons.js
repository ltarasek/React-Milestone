


export function getPerson() {
    const BASE_URL = 'https://us-central1-react-mspm.cloudfunctions.net/api/people';

    return fetch(BASE_URL)
        .then(resp => resp.json())

}