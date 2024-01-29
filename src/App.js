import { useState } from "react";
import "./App.css";
import { Name } from "./components/Name";
import { ProductList } from "./components/ProductList";

function App() {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const handleBackClick = () => setDisplayName("");
  return (
    <div className="App">
      {displayName ? (
        <div>
          <h1>Welcome, {displayName}!</h1>
          <button onClick={handleBackClick}>Go back</button>
        </div>
      ) : (
        <Name name={name} setName={setName} setDisplayName={setDisplayName} />
      )}
      <hr />
      <ProductList />
    </div>
  );
}

export default App;
