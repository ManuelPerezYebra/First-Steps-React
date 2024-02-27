import style from './contentText.module.css'
const ContentTex =({children, color, type})=>{
    return <p className={`${style.text} ${style[color]} ${style[type]}`}>{children}</p>
}
export default ContentTex