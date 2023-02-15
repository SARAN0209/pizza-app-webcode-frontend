import "./App.css";
import Navigation from "./Components/Header/Navigation";
import Context from "./Context/Context";

const App = () => {
  return (
    <Context>
    <section>
      <Navigation />
    </section>
    </Context>
  );
};

export default App;
