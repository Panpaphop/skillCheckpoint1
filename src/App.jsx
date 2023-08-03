import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyProfile from "./components/MyProfile";
import WhyHireMe from "./components/WhyHireMe";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <FirstPage /> */}
      <MyProfile />
      <WhyHireMe/>
      <Portfolio />
      <Footer/>
    </>
  );
}

export default App;
