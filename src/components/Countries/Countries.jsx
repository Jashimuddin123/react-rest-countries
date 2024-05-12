import { useEffect } from "react";
import { useState } from "react";

import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    //  1st step create a state and hold data
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

  
    // 2nd step create useEffect for feathing data 
    useEffect(()=>{
             fetch('https://restcountries.com/v3.1/all')
             .then(res=> res.json())
             .then(data=> setCountries(data))
    }, [])

      // handle visited arro function
      const handleVisitedCountry= country =>{
           const newVisitedCountry = [...visitedCountries, country];
           setVisitedCountries(newVisitedCountry);
    }
    // flags handle 
    const handleFlags = flags =>{
         const newVisitedFlags = [...visitedFlags, flags]
         setVisitedFlags(newVisitedFlags);
    }
    return (
        <div>
            <h1>All Countries : {countries.length}</h1>
            <h2>Visited Country{visitedCountries.length}</h2>
        
            <div>
                {
                   visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
                }
            </div>
            {/* ADDING DISPLY FLAG */}
            <div className="flag-container">
                {/* <h5>ADING FLAGS</h5> */}
                {
                    visitedFlags.map(flag=><img src={flag} alt="" /> )
                }
            </div>
            <div className="countries-container">
                {
                    countries.map(country=><Country 
                          key={country.cca3}
                          
                          handleVisitedCountry ={handleVisitedCountry}
                          handleFlags={handleFlags}
                        country ={country}></Country>)
                }
            </div>


        </div>
    );
};

export default Countries;