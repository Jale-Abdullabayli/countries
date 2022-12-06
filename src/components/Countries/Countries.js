import React, { useEffect,useState } from 'react'
import './Countries.scss';
import { BsSearch } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import axios from 'axios';
import { baseUrl } from '../../api';
import Country from '../Country/Country';

function Countries({setCountries,countries,countriesCopy,setCountriesCopy}) {

    useEffect(() => {
        axios.get(`${baseUrl}all`)
            .then(res => {
                setCountries(res.data);
                setCountriesCopy(res.data);
            })
    }, []);

    function filterByRegion(region){
        setCountries(countriesCopy.filter((el)=>{
           return el.region==region;
        }))
    }

    function search(e){
        setCountries(countriesCopy.filter((el)=>{
            return el.name.common.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
         }))
    }
    return (
        <div className='countries'>
            <div className='title'>
                <div className='inputControl'>
                    <BsSearch />
                    <input onChange={(e)=>search(e)}  placeholder='Search for a country' />
                </div>
                <div className='filter'>
                    <span>Filter by Region</span>
                    <MdKeyboardArrowDown />
                    <div className="regions">
                        <span onClick={()=>filterByRegion('Africa')}>Africa</span>
                        <span onClick={()=>filterByRegion('Americas')}>Americas</span>
                        <span onClick={()=>filterByRegion('Asia')}>Asia</span>
                        <span onClick={()=>filterByRegion('Europe')}>Europe</span>
                        <span onClick={()=>filterByRegion('Oceania')}>Oceania</span>
                    </div>
                </div>

            </div>
            <div className='countryList'>
                {countries.map((country,index) => {
                    return <Country key={index} country={country} />
                })}
            </div>
        </div>
    )
}

export default Countries