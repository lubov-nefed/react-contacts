//import { useState } from "react";
import { Button } from "./components/Button/Button.jsx";
import { MyComponent } from "./components/MyComponent/MyComponent.jsx";

function App() {
  return (
    <>
      <Button className="primary-button">Button</Button>
      <Button className="secondary-button">Button</Button>

      <MyComponent />
    </>
  );
}

export default App;
