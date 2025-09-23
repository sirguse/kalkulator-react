import "../css/style.css"
export default function NumberInput({label, value, onChange}) {
    return (
        <input
        className="inputNumber"
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        inputMode="decimal"
        ></input>
    );
};