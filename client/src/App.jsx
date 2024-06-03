import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  return (
    <Router> {}
      <div>
        <Header />
        <div className="App">
          <h1>Movie List</h1>
        </div>
      </div>
    </Router>
  );
}

export default App;
