
import React from 'react';
import TextField from '@material-ui/core/TextField';


function WordForm(props) {
    return (
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Word List"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
          value={props.value}
          onChange={props.handleChange}
        />
      </div>
    );
}

export default WordForm;
