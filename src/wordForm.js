
import React from 'react';
import TextField from '@material-ui/core/TextField';


function WordForm(props) {
    
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    
    return (
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Word List"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
          value={value}
          onChange={handleChange}
        />
        <p>{value}</p>
      </div>
    );
}

export default WordForm;
