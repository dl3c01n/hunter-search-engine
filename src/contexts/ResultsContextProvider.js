import React, { createContext, useContext, useState } from "react"

const ResultsContext = createContext()
const baseUrl = "https://google-search1.p.rapidapi.com/google-search"

export const ResultsContextProvider = ({ children }) => {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchItem, setSearchItem] = useState("")

  const getResults = async (item) => {
    setIsLoading(true)

    const response = await fetch(`${baseUrl}/${item}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6a0ee1f374msh88852c7fbf99460p14079djsn9d6ae86ef4ac",
        "X-RapidAPI-Host": "google-search1.p.rapidapi.com",
      },
    })
    const data = await response.json()
    setResults(data)
    setIsLoading(false)
  }

  return (
    <ResultsContext.Provider
      value={{ getResults, results, searchItem, setSearchItem, isLoading }}
    >
      {children}
    </ResultsContext.Provider>
  )
}

export const useResultsContext = () => useContext(ResultsContext)
