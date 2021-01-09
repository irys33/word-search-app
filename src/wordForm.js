
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


function WordForm(props) {
    
    const [value, setValue] = React.useState('Controlled');
    
    return (
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Word List"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
        />
      </div>
    );
}

export default WordForm;
