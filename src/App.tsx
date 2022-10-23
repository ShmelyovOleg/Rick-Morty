import React from "react";
import { Button } from "./components";
import "./components/Button/button.scss";

function App() {
  const some = () => {
    console.log("click");
  };
  return (
    <div className="App">
      <header className="App-header">
        <Button
          type="button"
          onClick={some}
          action="delete"
          children="Delete"
        />
        <Button type="button" onClick={some} action="edit" children="Edit" />
        <Button type="button" onClick={some} action="save" children="Save" />
        <Button
          type="button"
          onClick={some}
          action="cancel"
          children="Cancel"
        />
      </header>
    </div>
  );
}

export default App;
