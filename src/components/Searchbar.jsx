import {useEffect, useState} from 'react';
import axios from 'axios';
import "../App.css";



export default function SearchBar({activateSearch}){
    const [searchInfo, setSearch] = useState({category: ''});


function handleSubmitSearch(e) {
    e.preventDefault();
    activateSearch(searchInfo)
  }

function handleInputCategory(e) {
    setSearch({ category: e.target.value });
}

return(
    <form onSubmit={handleSubmitSearch}>
            <div id="filter-search-options">
                <label htmlFor="category-select">Category</label>
                <select id="category-select" value={searchInfo.category} onChange={handleInputCategory}>
                    <option value="">Select a category</option>
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
        </form>
)

}