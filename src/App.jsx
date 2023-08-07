import "./App.css";

// component
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import News from "./components/News";


function App() {

  return (
    <div className="overflow-x-hidden font-inter xl:w-10/12 w-11/12 my-0 mx-auto py-12">
      <Navbar/>
      <Hero/>
      <News/>
    </div>
  );
}

export default App;
