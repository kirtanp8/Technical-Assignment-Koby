import React from "react";
import { Data } from "./Data";
import { useState } from 'react'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [searchType, setSearchType] = useState('')
  const [results, setResults] = useState([])
  const setSearchTypeToLocation = () => setSearchType('location')
  const setSearchTypeToName = () => setSearchType('name')
  let filteredSearch = []  


  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    filteredSearch = []
      if (searchType === 'location') {
      for (let i = 0; i < Data.length; i++) {
        if (Data[i].location.toLowerCase() === search.toLowerCase()) {
          filteredSearch.push(Data[i].name)
        } 
      } 
    } else {
      for (let i = 0; i < Data.length; i++) {
        if (Data[i].name.toLowerCase() === search.toLowerCase()) {
          filteredSearch.push(Data[i].location)
        } 
      } 
    }
    setResults(filteredSearch)
  }

  return ( 
    <div className="search-bar">
      <h1>How to Test:</h1>
      <p>use the drop down and select <strong>location</strong>, search: Springfield</p>
      <p>use the drop down and select <strong>name</strong>, search: Homer Simpson</p>
    <div>
    <form data-testid="form" onSubmit={handleSubmit}>
      <select data-testid="select" name='type' onChange={handleChange}>
        <option placeholder=''>Search By</option>
        <option onClick={setSearchTypeToLocation} value={search} placeholder="Search By Location">Search By Location</option>
        <option onClick={setSearchTypeToName} value={search} placeholder="Search By Name">Search By Name</option>
        </select>
      <input className="search-bar"
        data-testid="search-input"
        type="search"
        value={search}
        onChange={handleChange}
        />
      <button onClick={handleSubmit} >Search</button>
    </form>
    </div>
    <div>
      <ul>
      {results.map((val, index) => (
        <li data-testid='result' key={index}>{val}</li>
      ))
      }
      </ul>
    </div>
    </div>
  )
  };

export default SearchBar;
