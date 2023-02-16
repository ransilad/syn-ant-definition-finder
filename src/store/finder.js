import { getAntonymsData, getDefinitionsData, getSynonymsData } from '@/services/api'
import { create } from 'zustand'

export const useFinderStore = create((set, get) => ({
  synonyms: '',
  antonyms: '',
  definition: '',
  isSearching: false,
  setFinder: (searchText) => {
    set({
      synonyms: '',
      antonyms: '',
      definition: '',
      isSearching: true
    })
    getSynonymsData(searchText).then((data) => {
      set({
        synonyms: data.response,
        isSearching: false
      })
    }).catch((e) => {
      set({
        synonyms: 'Error al obtener resultados',
        isSearching: false
      })
    })
    getAntonymsData(searchText).then((data) => {
      set({
        antonyms: data.response,
        isSearching: false
      })
    }).catch((e) => {
      set({
        antonyms: 'Error al obtener resultados',
        isSearching: false
      })
    })
    getDefinitionsData(searchText).then((data) => {
      set({
        definition: data.response,
        isSearching: false
      })
    }).catch((e) => {
      set({
        definition: 'Error al obtener resultados',
        isSearching: false
      })
    })
  }
}))
