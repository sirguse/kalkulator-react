import { useState } from "react";
import NumberInput from "./NumberInput"
import OperatorSelect from "./OperatorSelect"
import "../css/style.css"
export default function Calculator(){
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
    const onKeyDown = (e) => {
        if (e.key === "Enter") Obliczenia()
    }
  return(
    <div onKeyDown={onKeyDown} className="container">
        <div className="container-second">
            <NumberInput label="a" value={a} onChange={setA}></NumberInput>
            <OperatorSelect value={op} onChange={setOp}></OperatorSelect>
            <NumberInput label="b" value={b} onChange={setB}></NumberInput>
        </div>
        <div>
            <button onClick={Obliczenia}>Oblicz</button>
            <button onClick={Clear}>Wyczyść</button>
        </div>
        <h2>Wynik: {wynik}</h2>
      
    </div>
  )

}