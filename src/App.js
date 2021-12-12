import ContextProvider from "./context/Contex";
import Bill from "./components/Bill";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import NumPeople from "./components/NumPeople";



function App() {
  return (
    <ContextProvider>
    <div className="container__wrapper">
      <h1 className="text__h1">S P L I<br/>T T E R</h1>
      <div className="container__main">  
          <div>
            <Bill />
            <Buttons />
            <NumPeople />
          </div>
          <div className="container__display">
            <Display />
          </div>
      </div>
    </div>
    </ContextProvider>
  );
}

export default App;
