import style from './button.module.css'

const Button = ({children, color})=>{
    return <button className={`${style.button} ${style[color]}`}>{children}</button>
}
export default Button;