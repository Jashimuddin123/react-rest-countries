
import { useState } from 'react';
import './Country.css'
import Countries from '../Countries/Countries';
const Country = ({country,  handleVisitedCountry,handleFlags}) => {
    // console.log(country);
     const {name,flags,population,area} = country;
    //  useState 
    const [visited, setVisted] = useState(false)

    const handleVisited = ()=>{
        setVisted(!visited);
        console.log('i am wev developer');
    }


    
    return (
        <div className={`country ${visited ? 'bg' : 'non vistd'}`}>
               <h2 style={{color: visited ? 'blue' : 'green'}}>Name:{name.common}</h2>
               <img src={flags.png} alt="" />
               <p><small>Population:{population}</small></p>
               <p><small>Area: {area}</small></p>
                <button onClick={() =>handleVisitedCountry(country)} style={{background:'green', color:'white', marginBottom:'15px'}}>Mark Visited</button> <br /> 
                <button onClick={() =>handleFlags(country.flags.png)} style={{background:'blue', marginRight:'10px', color:'white' }} >Add Flag</button>
               <button style={{background:'black', color:'white' }} onClick={handleVisited }>{visited ? 'Visited' : 'Going'}</button>
               {visited ?' I have visited ': 'i want visted'}
       
        </div>
    );
};

export default Country;