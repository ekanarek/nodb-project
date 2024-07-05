import "./App.css";
import GridContainer from "./components/GridContainer/GridContainer.jsx";

function App({ initialData }) {
  return (
    <>
      <header>
        <h1>My Reading Tracker</h1>
      </header>
      <GridContainer initialData={initialData} />;
    </>
  );
}

export default App;
