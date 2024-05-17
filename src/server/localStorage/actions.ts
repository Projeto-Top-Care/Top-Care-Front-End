'use client'
export const getLocalStorageArray = (pesquisa: string) =>{
    const items = window.localStorage.getItem(`${pesquisa}`)!
    return (items != null ? JSON.parse(items) : [])
}
export const getLocalStorageItem = (pesquisa: string) =>{
    return localStorage.getItem(pesquisa);
}