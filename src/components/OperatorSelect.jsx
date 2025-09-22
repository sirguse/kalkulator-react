export default function OperatorSelect({value, onChange}) {
    return(
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
    );

};