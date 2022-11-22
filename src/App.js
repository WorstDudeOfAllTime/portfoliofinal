import "./App.css";
import Layout from "./components/Layout";
import ProjectDisplay from "./components/ProjectDisplay";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<ProjectDisplay />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="https://drive.google.com/file/d/1D8__GuYFWGnNwuUs9oK_IIr9ZdPzcMh5/view"/>
        </Routes>
      </Layout>
    </div>
  );
}
export default App;
//<Route path="/resume"></Route>
//<Route path="/about"></Route>
