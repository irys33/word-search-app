
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
  return (
    <div style={{textAlign: "center"}}>
      <div style={appHeaderStyle}>
        <WordTable name="TestProps" />
        <WordForm value="DefaultValue" />
      </div>
    </div>
  );
}

export default App;
