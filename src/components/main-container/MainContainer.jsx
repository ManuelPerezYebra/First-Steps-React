import BigTittle from '../big-tittle/BigTittle'
import style from './mainContainer.module.css'
import ContentTex from '../content/ContentText'
import Tittle from '../tittle/Tittle'
import Button from '../button/Button'

const SingleContainer =()=>{
    return <>
    <div className={style.container}>


     <div className={`${style.content}  ${style.white}`}>
        <BigTittle></BigTittle>
        <Tittle color='green'>30-day, hassle-free money back guarantee</Tittle>
        <ContentTex>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</ContentTex>
     </div>
     <div className={`${style.content} ${style.item2} ${style.blue}`}>
        <Tittle color='white'>Monthly Subscription</Tittle>
        <ContentTex type='price'>$29<span className={`${style.span}`}>per month</span></ContentTex>
        <ContentTex color='white'>Full access for less than $1 a day</ContentTex>
        <Button>Sign Up</Button>
        
     </div>
     <div className={`${style.content} ${style.item3} ${style.lightblue}`}>
     
        <Tittle color='white'>Why Us</Tittle>
        <ContentTex color='grey'>Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week</ContentTex>
     </div>
    </div>

    </>
   
}
export default SingleContainer