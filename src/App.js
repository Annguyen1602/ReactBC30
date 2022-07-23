// import logo from './logo.svg';
// import './App.css';

import DemoClass from "./Components/DemoClass";
import DemoFunction from "./Components/DemoFunction";
import Content from "./Components/Home/Content";
import Footer from "./Components/Home/Footer";
import Header from "./Components/Home/Header";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Home/Navigation";
import Databinding from "./Databinding/Databinding";
import HandelEvent from "./HandleEvent/HandelEvent";
import DemoProps from "./Props/DemoProps/DemoProps";
import BaiTapRenderMap from "./RenderWithMap/BaiTapRenderMap";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaiTapState from "./State/BaiTapState";
import DemoState from "./State/DemoState";
import StyleRender from "./StyleRender/StyleRender";

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Header />
      <Navigation/>
      <Content/>
      <Footer/> */}
      {/* <Databinding/> */}
      {/* <HandelEvent/> */}
      {/* <DemoState /> */}
      
      {/* <BaiTapState/> */}
      {/* <RenderWithMap/> */}
      {/* <BaiTapRenderMap/> */}
      <DemoProps/>
    </div>
  );
}

export default App;
