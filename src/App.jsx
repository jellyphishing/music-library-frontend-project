import "./App.css";
import Header from "./Components/Header/Header";
//import axios from "axios";

function App() {
  const fetchSongs = async () => {
    // try {
    //   const response = await axios.get("https://localhost:7197/api/Songs");
    //   console.log(response);
    // } catch (error) {
    //   console.warn("Error in fetch Songs request", error);
    // }
  };

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
