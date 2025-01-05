
function InputBox({ label, placeholder, onChange, type }) {
    return (
        <>
            <div className="text-md font-semibold text-slate-800 text-left mb-2 mt-3"><p>{label}</p></div>
            <input className="w-full px-2 py-1.5 border border-slate-400 rounded-md shadow-sm"  placeholder={placeholder} onChange={onChange} type={type}/>
        </>
    )
}

export default InputBox