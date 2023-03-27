import Cards from "./cards";
import Head from "./header";
import Background from "./background";
import Terminal from "./terminal";
import './App.css';
import Experience from "./experience";
import Contact from "./contact";
export default function App() {
  return (
    
    <div className="App">
      <Head />
      <Cards />
      <Terminal/>
      <Experience />
      <Background />
    </div>
  );
}


