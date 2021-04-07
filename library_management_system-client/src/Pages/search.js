
import React from 'react';
import "../App.css";
import SearchBar from "material-ui-search-bar";
const Search =()=>{

    return(
        <div className="Display">
                <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
    />
          </div>
    );
}

export default Search;