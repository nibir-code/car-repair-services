import './App.css';
import Services from "./Pages/Home/Services/Services";
import Banner from "./Pages/Home/Banner/Banner";
import Experts from "./Pages/Home/Experts/Experts";

function App() {
  return (
    <div className="App">
        <Banner></Banner>
        <Services></Services>
        <Experts></Experts>
    </div>
  );
}

export default App;
