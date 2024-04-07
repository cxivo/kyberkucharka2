//import axios from "axios";
import "./App.css";

//data will be the string we send from our server
const apiCall = () => {
  /*axios.get("http://localhost:8080").then((data) => {
    //this console.log will be in our frontend console
    console.log(data);
  });*/

  return fetch("http://localhost:8080/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error getting messages");
      }
      return response.json();
    })
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      // Better way would be to throw error here and let the client handle (e.g. show error message)
      // Returning empty array for simplicity only!
      console.log("Error getting messages");
      return [];
    });
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={apiCall}>Make API Call</button>
      </header>
    </div>
  );
}

export default App;
