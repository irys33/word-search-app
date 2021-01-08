
import WordTable from './wordTable';

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
        <p>
            Hello Micropig！
        </p>
        <WordTable name="TestProps" />
      </div>
    </div>
  );
}

export default App;
