import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import FavoryDetails from "../components/FavoryDetails/FavoryDetails";

function FavoryPage() {
  return (
    <div className="container">
      <Header />
      <main>
        <FavoryDetails />
      </main>
      <Footer />
    </div>
  );
}

export default FavoryPage;
