import React, { useState, useEffect } from "react"
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab/';

 const AutoComplete = ({options,onAutoComplete,onInputSearch})=>{
  return(  
    <Autocomplete
    autoHighlight={true}
    onChange={(e, newValue) => {
      onAutoComplete(newValue); 
    }}
    onInputChange={(e, newInputValue) => {
      onInputSearch(newInputValue); 
    }}
    id="controllable-states-demo"
    options={options}
    renderInput={(params) => (
      <div className="d-flex justify-content-space-between align-items-center">
        <TextField
          {...params}
           placeholder="Where are you going?"
          variant="outlined"
        />
      </div>
    )
    }
  />
  )
}

export default AutoComplete
