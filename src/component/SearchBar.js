import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {FaSearch} from 'react-icons/fa';
import styles from './SearchBar.module.css';

function SearchBar() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    useEffect(()=>{
      rawData();
    },[])

    const rawData= async ()=>{
      try{
      const response= await axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states')
      const states= response.data.states;
      setData(states);
      } catch(error){
        console.log(error);
      }
    }
  

    function handleSearch(searchedItem){
      setSearch(searchedItem);
    }

  return (
    <div className={styles.main}>
      <div className={styles.SearchBar}>
        <input className={styles.input} type='text' value={search} placeholder='Search Indian States...' onChange={(e)=>setSearch(e.target.value)} />
        <button className={styles.button} ><FaSearch/></button>
      </div>
        <div className={styles.suggestions}>
          {
            data.filter((states)=>{
              const searchedItem = search.toLowerCase();
              const state = states.state_name.toLowerCase();
              return searchedItem && state.startsWith(searchedItem) && state !== searchedItem
            }).map((states)=> <div className={styles.list} key={states.state_id} onClick={()=>handleSearch(states.state_name)}>
              {states.state_name}
              </div>)
          }
        </div>
    </div>
  )
}

export default SearchBar;