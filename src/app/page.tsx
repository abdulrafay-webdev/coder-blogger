import Navbar from "./components/uiComponents/Navbar";
import Footer from "./components/uiComponents/Footer";
import HomePage from "./components/uiComponents/Home";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="w-full py-4">
        <HomePage/>
      </div>
      <Footer/>
    </div>
  );
}
