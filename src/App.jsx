import { useState } from "react";
import Demo from "./components/Admin/Demo/Demo";
import DemoUser from "./components/Site/DemoUser/DemoUser";

function App() {
  const [loginAdmin, setLoginAdmin] = useState(false);
  return <DemoUser setLoginAdmin={setLoginAdmin}></DemoUser>;
}

export default App;
