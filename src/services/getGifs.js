const apiKey = 'dbadWQDBwro1bWYoSIPu9P9U33dzGac4';

const fromApiResponseToGifs = apiResponse => {
    const {
        data = []
    } = apiResponse
    if (Array.isArray(data)) {
        const gifs = data.map(image => {
            const { images, title, id } = image
            const { url } = images.downsized_medium
            return { title, id, url }
        })
        return gifs
    }
    return []
}

export default function getGifs({ keyword = 'caballo' } = {}) {

    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

    return fetch(apiURL)
        .then(response => response.json())
        .then(fromApiResponseToGifs)

}