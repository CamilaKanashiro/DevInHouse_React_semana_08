const Button = ({
    title,
    color,
    background
}) => {

     return (
        <button 
        className = "componentButton"
        style = {{
            color: color,
            background: background
        }}>{title}</button>
     )
}


export default Button;