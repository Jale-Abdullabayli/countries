import React from 'react'
import './Country.scss';
import { Link } from 'react-router-dom';


function Country({ country }) {
    return (
        <div className='country'>
            <Link  to={'/country/' + country.name.common} className='card'>
                <img src={country.flags.png} alt={country.name.common} />
                <div className='cardBody'>
                    <h4 className='name'>{country.name.common}</h4>
                    <ul>
                        <li>
                            <span className='key'>Population:</span>
                            <span className='value'>{country.population}</span>
                        </li>
                        <li>
                            <span className='key'>Region:</span>
                            <span className='value'>{country.region}</span>
                        </li>
                        <li>
                            <span className='key'>Capital:</span>
                            <span className='value'>{country.capital}</span>
                        </li>
                    </ul>
                </div>
            </Link>
        </div>
    )
}

export default Country