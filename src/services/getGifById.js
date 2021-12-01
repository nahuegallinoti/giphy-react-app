const apiKey = 'dbadWQDBwro1bWYoSIPu9P9U33dzGac4';

export default function getGifById({
    id = 'h7cKe9Af6Kr3YEmios'
} = {}) {

    const apiURL = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`;

    return fetch(apiURL)
        .then(response => response.json())
        .then(response => {
            const {
                data
            } = response;
            return data;
        });

}