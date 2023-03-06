import { useState } from "react";

// Components
import { CustomForm } from "./components/CustomForm";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="Container">
      <header>
        <h1 className="">My Task List</h1>
      </header>
      <CustomForm />
    </div>
  );
}

export default App;
