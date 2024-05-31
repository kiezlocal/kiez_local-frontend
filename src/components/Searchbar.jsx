import {useEffect, useState} from 'react';
// import axios from 'axios';
import "../App.css";



export default function SearchBar({activateSearch}){
    const [searchInfo, setSearch] = useState({category: '', kiez: '', time: ''});


function handleSubmitSearch(e) {
    e.preventDefault();
    activateSearch(searchInfo)
  }

function handleInputCategory(e) {
    setSearch(prevState => ({ ...prevState, category: e.target.value }));
}

function handleInputKiez(e) {
    setSearch(prevState => ({ ...prevState, kiez: e.target.value }));
}

function handleInputTime(e) {
    setSearch(prevState => ({ ...prevState, time: e.target.value }));
}

return(
    <form onSubmit={handleSubmitSearch}>
            <div id="filter-search-options">
                <label htmlFor="category-select">Category</label>
                <select id="category-select" value={searchInfo.category} onChange={handleInputCategory}>
                    <option value="">All</option>
                    <option value="Music">Music</option>
                    <option value="Art">Art</option>
                    <option value="Local markets">Local markets</option>
                    <option value="Sport">Sport</option>
                    <option value="Food&Drinks">Food&Drinks</option>
                    <option value="Events for kids">Events for kids</option>
                    <option value="Tours">Tours</option>
                    <option value="Social gatherings">Social gatherings</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <button type="submit">Search</button>

            <div id="filter-search-options">
                <label htmlFor="kiez-select">Neighbourhood</label>
                <select id="kiez-select" value={searchInfo.kiez} onChange={handleInputKiez}>
                    <option value="">All</option>
                    <option value="Pankow">Pankow</option>
                    <option value="Mitte">Mitte</option>
                    <option value="Reinkendorf">Reinkendorf</option>
                    <option value="Spandau">Spandau</option>
                    <option value="Charlottenburg-Wilmersdorf">Charlottenburg-Wilmersdorf</option>
                    <option value="Steglitz-Zehlendorf">Steglitz-Zehlendorf</option>
                    <option value="Tempelhof-Schöneberg">Tempelhof-Schöneberg</option>
                    <option value="Neukölln">Neukölln</option>
                    <option value="Friedrichshain-Kreuzberg">Friedrichshain-Kreuzberg</option>
                    <option value="Lichtenberg">Lichtenberg</option>
                    <option value="Marzahn-Hellersdorf">Marzahn-Hellersdorf</option>
                    <option value="Treptow-Köpenick">Treptow-Köpenick</option>
                </select>
            </div>

            <div id="filter-search-options">
                <label htmlFor="time-select">Time</label>
                <select id="time-select" value={searchInfo.time} onChange={handleInputTime}>
                <option value="">All</option>
                <option value="Next 3 days">Next 3 days</option>
                <option value="Next 7 days">Next 7 days</option>
                <option value="Next month">Next month</option>
                </select>
            </div>
            <button type='submit'>Search</button>


        </form>

    
)

}