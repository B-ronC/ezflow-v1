import './searchbar.css';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import User from '../user/User';

function Searchbar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([])

    // filters user names with search word
    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data?.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase())
        })
        if (searchWord === '') {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
    }

  return (
    <div className='search'>
        <div className='searchInputs'>
            <input type={'text'} placeholder={placeholder} onChange={handleFilter}/>
            <div className='searchIcon'>
                <SearchIcon />
            </div>
        </div>
        <div className='data'>
            {filteredData.length !== 0 &&
                <div className='dataResult'>
                    {filteredData.slice(0, 15).map((item) => {
                        return (
                            <User key={item.id} user={item}/>
                        )
                    })}
                </div>
            }
        </div>
    </div>
  )
}

export default Searchbar