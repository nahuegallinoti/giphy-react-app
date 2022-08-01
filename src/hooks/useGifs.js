import { useEffect, useState, useContext } from 'react'
import getGifs from 'services/getGifs'
import GifsContextProvider from 'context/GifsContext'

export function useGifs({ keyword } = { keyword: null }) {
    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifsContextProvider)    

    useEffect(function () {
        setLoading(true)
        const keyToUse = keyword || localStorage.getItem('lastKeyword')

        getGifs({ keyword: keyToUse })
            .then(resp => {
                setGifs(resp)
                setLoading(false)
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, setGifs])

    return { loading, gifs }
}