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
import ProductList from "./Props/BaiTapProps/ProductList";
import BaiTapXemChiTiet from "./Props/BaiTapXemChiTiet/BaiTapXemChiTiet";
import DemoProps from "./Props/DemoProps/DemoProps";
import ExcerciseCarStore from "./Props/ExerciseCarStore/ExcerciseCarStore";
import BaiTapRenderMap from "./RenderWithMap/BaiTapRenderMap";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaiTapState from "./State/BaiTapState";
import DemoState from "./State/DemoState";
import StyleRender from "./StyleRender/StyleRender";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/home">
          Cybersoft
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            {/* <li className="nav-item active">
              <NavLink className={({isActive})=> isActive ? "bg-light text-dark nav-link":'nav-link'} to="/home">
                Home <span className="visually-hidden">(current)</span>
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? "bg-light text-dark nav-link":'nav-link'} to="/login">
                Login
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? "bg-light text-dark nav-link":'nav-link'} to="/register">
                Register
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? "bg-light text-dark nav-link":'nav-link'} to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? "bg-light text-dark nav-link":'nav-link'} 
              style={({isActive})=> isActive ?  {borderRadius:'5px'}:{}}
              to="/about">
                About
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? "bg-light text-dark nav-link":'nav-link'} 
              style={({isActive})=> isActive ?  {borderRadius:'5px'}:{}}
              to="/reactform">
                React Form
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? "bg-light text-dark nav-link":'nav-link'} 
              style={({isActive})=> isActive ?  {borderRadius:'5px'}:{}}
              to="/lifecycle">
                Lifecycle
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? "bg-light text-dark nav-link":'nav-link'} 
              style={({isActive})=> isActive ?  {borderRadius:'5px'}:{}}
              to="/demoredex">
                Demo Redux 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? "bg-light text-dark nav-link":'nav-link'} 
              style={({isActive})=> isActive ?  {borderRadius:'5px'}:{}}
              to="/changecolor">
                ChangeCarColor
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? "bg-light text-dark nav-link":'nav-link'} 
              style={({isActive})=> isActive ?  {borderRadius:'5px'}:{}}
              to="/quanlySV">
                DemoQLSV
              </NavLink>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Action 1
                </a>
                <a className="dropdown-item" href="#">
                  Action 2
                </a>
              </div>
            </li> */}
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div style={{ minHeight: 800 }}>
        <Outlet />
      </div>

      <footer className="bg-dark text-white text-center p-5">Footer</footer>
    </div>
  );
}

export default App;
