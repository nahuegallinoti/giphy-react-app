import { useContext } from 'react'
import GifsContextProvider from 'context/GifsContext'

export default function useGlobalGifs() {
    return useContext(GifsContextProvider).gifs

    // otra forma
    //   const {gifs} = useContext(GifsContextProvider)
    //   return gifs
}