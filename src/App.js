import './App.scss';
import {useState } from 'react'
import Countries from './components/Countries/Countries';
import CountryDetail from './components/CountryDetail/CountryDetail';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [countries, setCountries] = useState([]);
  const [countriesCopy, setCountriesCopy] = useState([]);

  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Countries  countries={countries} setCountries={setCountries} countriesCopy={countriesCopy} setCountriesCopy={setCountriesCopy}/>}/>
      <Route index   path="/country/:name" element={<CountryDetail  countries={countries} countriesCopy={countriesCopy}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
