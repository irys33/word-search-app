import React, { memo } from 'react';
import Button from '@material-ui/core/Button';

import WordTable from './wordTable';
import WordForm from './wordForm';

function App() {
  var appHeaderStyle = {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  }
  const [value, setValue] = React.useState('Word List');
  const [table, setTable] = React.useState('Table');

  const handleChange = (event) => {
      setValue(event.target.value);
  };


  return (
    <div style={{textAlign: "center"}}>
      <div style={appHeaderStyle}>
        <WordForm value={value} handleChange={handleChange} />
        <Button variant="contained" onClick={() => setTable(value)}>生成</Button>
        {/* <Button variant="contained">生成</Button> */}
        <WordTable tableList={table} />
      </div>
    </div>
  );
}

export default App;

// memo setValue({...array, props.newValue})　などで値をコピーした新しいオブジェクトを生成してstateに保存すると再描画されます。
