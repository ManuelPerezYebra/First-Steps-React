import style from './tittle.module.css'

const Tittle =({children, color})=>{
  return  <h2 className={`${style.tittle} ${style[color]}`}>{children}</h2>
}
export default Tittle