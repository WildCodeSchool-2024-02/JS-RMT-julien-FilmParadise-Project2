import { Link } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="home">
        <div className="home-box box">
          <h1>Welcome to Film Paradise !!</h1>
          <div>
            <p>You are looking for the bests movies on earth and beyond ?</p>
            <p>This is the right place !</p>
          </div>
          <Link to="/movies" className="box">
            Go see our movie library !
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
