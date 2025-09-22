import { useState } from "react";

export default function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("")
  const [op, setOp] = useState("+")
  const [wynik, setWynik] = useState("")

  const Obliczenia = () =>{
    const x = parseFloat(a.replace(",", "."));
    const y = parseFloat(b.replace(",", "."));
    if (Number.isNaN(x) || Number.isNaN(y)){
      setWynik("Podaj liczby")
      return;
    }
    let r;
    switch (op){
      case "+" : r = x+y; break;
      case "-" : r = x-y; break;c 
      case "*" : r = x*y; break;
      case "/" : r = y === 0 ? "Dzielenie przez 0" : x / y; break; /* Instrukcja warunkowa*/ 
      default: r = "nieznany operator"
    }
    setWynik(String(r));

    const onKeydown = (e) => {
      if (e.key === 'Enter') Obliczenia();
    }
  }
  function clear() {
    setA("");
    setB("");
    setOp("+");
    setWynik("");
  }

  
 

  return (
  <div>
    <h1>Kalkulator</h1>
    <input
    value={a}
    onChange={(e) => setA(e.target.value)}
    placeholder="A"
    ></input>

    <select value={op} onChange={(e) => setOp(e.target.value)}>
      <option value={"+"}>+</option>
      <option value={"-"}>-</option>
      <option value={"*"}>*</option>
      <option value={"/"}>/</option>

    </select>

    <input
    value={b}
    onChange={(e) => setB(e.target.value)}
    placeholder="B"
    ></input>
    <button onClick={Obliczenia}>Oblicz</button>
    <button onClick={clear}>Wyczysc</button>
    <h2>Wynik : {wynik}</h2>
    
  </div>
  );
}
