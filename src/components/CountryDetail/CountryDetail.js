import React, { useState, useEffect } from 'react'
import './CountryDetail.scss';
import axios from 'axios';
import { baseUrl } from '../../api';
import { useParams } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function CountryDetail({ countries, countriesCopy }) {
    let { name } = useParams();
    const [countryName, setCountryName] = useState(useParams().name);
    const [country, setCountry] = useState({});
    const [borders, setBorders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${baseUrl}name/${countryName}`)
            .then(res => {
                setCountry(res.data[0]);
                console.log(res.data[0])
                if (res.data[0]?.borders?.length !== undefined) {
                    setBorders(countriesCopy.filter((el) => {
                        if (res.data[0].borders.includes(el.cca3)) {
                            return true;
                        }
                    }))
                }
            })
    }, [countryName]);

    useEffect(() => {
        setCountryName(name);
    }, [name]);
    function border(el) {
        navigate('/country/' + el.name.common);

    }
    return (
        <>
            {country?.name?.common &&
                <div className='countryDetail'>
                    <div className='back' onClick={() => navigate(-1)}>
                        <BiArrowBack />
                        <span>Back</span>
                    </div>

                    <div className='detail'>
                        <div className="column">
                            <img src={country.flags.png} alt={country.name.common} />
                        </div>
                        <div className="column">
                            <div className='content'>
                                <h3 className='name'>{country.name.common}</h3>
                                <div className="properties">
                                    <div className="left">
                                        <ul>
                                            <li>
                                                <span className='key'>Native Name:</span>

                                                <span className='value'>{country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}</span>
                                            </li>
                                            <li>
                                                <span className='key'>Population:</span>
                                                <span className='value'>{country.population}</span>
                                            </li>
                                            <li>
                                                <span className='key'>Region:</span>
                                                <span className='value'>{country.region}</span>
                                            </li>
                                            <li>
                                                <span className='key'>Sub Region:</span>
                                                <span className='value'>{country.subregion}</span>
                                            </li>
                                            <li>
                                                <span className='key'>Capital:</span>
                                                <span className='value'>{country.capital}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="right">
                                        <ul>
                                            <li>
                                                <span className='key'>Top Level Domain:</span>
                                                <span className='value'>{country.tld}</span>
                                            </li>

                                            <li>
                                                <span className='key'>Currencies:</span>
                                                <span className='value'>{
                                                    country.currencies &&

                                                    Object.keys(country.currencies).map((el, index) => {
                                                        return `${country.currencies[el].name}${index < Object.keys(country.currencies).length - 1 ? ", " : ""}`

                                                    })
                                                }</span>
                                            </li>

                                            <li>
                                                <span className='key'>Languages:</span>

                                                <span className='value'> {
                                                    Object.keys(country.languages).map((el, index) => {
                                                        return `${country.languages[el]}${index < Object.keys(country.languages).length - 1 ? ", " : ""}`
                                                    })
                                                }</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {borders.length !== 0 &&
                                    <div className="borders">
                                        <h5>Border Countries:</h5>
                                        {
                                            borders.map((el, index) => <span key={index} onClick={() => border(el)}>{el.name.common}</span>)
                                        }
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CountryDetail