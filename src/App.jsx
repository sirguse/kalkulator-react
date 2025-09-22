import { useState } from "react";
export default function App(){
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [op, setOp] = useState("+")
  const [wynik, setWynik] = useState()


const Obliczenia = () => {
  const x = parseFloat(a.replace(",", "."))
  const y = parseFloat(b.replace(",", "."))
  if (Number.isNaN(x) || Number.isNaN(y)){
    setWynik("Podaj liczby")
    return
  }
  let r;
  switch (op) {
    case "+" : r = x+y; break;
    case "-" : r = x-y; break;
    case "*" : r = x*y; break;
    case "/" : r = x/y; break;
    default: "Nie ma"
  
  }
  setWynik(String(r))
  
  }
  const Clear = () =>{
    setA("")
    setB("")
    setOp("+")
    setWynik("")
  }
  return(
    <div>
      <h1>Kalkulator</h1>
      <input value={a} placeholder="a" onChange={(e) => setA(e.target.value)}></input>
      <select value={op} onChange={(e) => setOp(e.target.value)}>
        <option value={"+"}>+</option>
        <option value={"-"}>-</option>
        <option value={"*"}>*</option>
        <option value={"/"}>/</option>
      </select>
      <input value={b} placeholder="b" onChange={(e) => setB(e.target.value)}></input>
      <button onClick={Obliczenia}>Oblicz</button>
      <button onClick={Clear}>wyczysc</button>
      <h2>Wynik: {wynik}</h2>
    </div>
  )
}