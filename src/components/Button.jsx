
function Button({onClick, children, className}) {
    return (
      <button className={`${className} px-4 py-1.5 text-base rounded-md text-center text-white`} onClick={onClick}>
          {children}
      </button>
    )
  }
  
  export default Button