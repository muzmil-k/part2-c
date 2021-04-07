import axios from "axios";
import React, { useState, useEffect } from "react";
import SearchCountry from "./SearchCountry";
import Country from "./Country";
import Countries from "./Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [showCountries, setShowCountries] = useState("");

  //getting data

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  //setting a new filter value
  const addNewFilter = (event) => {
    setNewFilter(event.target.value);
  };

  //filter function
  const filterItems = (arr, query) => {
    return arr.filter(
      (el) => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  };

  //effect hook for setting filtered countries list

  useEffect(() => {
    const newCountries = filterItems(countries, newFilter);
    setFilteredCountries(newCountries);
  }, [countries, newFilter]);

  //effect hook for rendering desired data

  useEffect(() => {
    filteredCountries.length > 10
      ? setShowCountries(<p>Too many matches, specify another filter</p>)
      : filteredCountries.length === 1
      ? setShowCountries(<Country data={filteredCountries[0]} />)
      : setShowCountries(<Countries data={filteredCountries} />);
  }, [filteredCountries, newFilter]);

  return (
    <>
      <SearchCountry
        text="find countries "
        value={newFilter}
        handleChange={addNewFilter}
      />
      <div>{showCountries}</div>
    </>
  );
};

export default App;
