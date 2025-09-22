export default function NumberInput({label, value, onChange}) {
    return (
        <input
        placeholder="label"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        inputMode="decimal"
        ></input>
    );
};