import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./screens/AboutUs";
import Admission from "./screens/Admission/Admision";
function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
