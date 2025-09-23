import { useState } from "react";
import Calculator from "./components/Calculator";
import "../src/css/style.css"
export default function App(){
 return(
  <div className="cont">
    <h1>Kalkulator</h1>
    <Calculator></Calculator>
  </div>
 )
}