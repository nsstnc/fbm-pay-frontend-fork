import Menu from "../../../generic/menu/Menu.jsx";
import appStyle from "../../../app.module.css";
import NewsItem from "../items/NewsItem.jsx";
import style from '../items/newsItem.module.css'
import Button from "../../../generic/buttons/Button.jsx";
import TextButton from "../../../generic/buttons/TextButton.jsx";


import Footer from "../../../generic/footer/Footer.jsx";

const New = () => {
  return (
    <div className={appStyle.page}>
      <Menu/>

<div className={appStyle.main}>

<div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', alignContent:'center', alignItems: 'center'}}><span style={{fontSize: '30px', fontWeight: '700'}}>News</span> <div style={{marginLeft:'50px'}}><TextButton text="Go Back" img={<img alt='Go back' src='/src/image/arrowBack.svg'/>} link='#'/></div> </div>

      <div>
        <div className={style.header} style={{marginTop:'2rem'}}>
          <h1 className={appStyle.titleText} style={{fontSize: '30px', fontWeight:'700'}}>TECHNICAL MAINTENANCE FOR BIN NUMBER <span
            className={`${appStyle.titleText} ${appStyle.span}`} style={{fontSize: '30px', fontWeight:'700', color:"#21A038"}} >436797</span></h1>
          <div>
            
          </div>
        </div>

        <div className={style.text}>
          <p className={appStyle.mainText} style={{paddingTop: '1rem'}}>BIN 436797 is undergoing technical maintenance on the bank partner's side, expected to be completed by 13.05.2024. Card issuance, payment processing, and balance updates may experience disruptions. Any fees charged by the bank for declined transactions will be reversed.
<br></br></p><p style={{paddingTop: '2rem'}}>
BINs 533428 and 534204 are functioning normally.
<br></br></p><p style={{paddingTop: '2rem'}}>
We apologize for any inconvenience caused.</p>
        </div>

        <div className={style.date}>
          <p className={`${appStyle.smallerText} ${appStyle.hint}`}>Published: 13.05.2024</p>
        </div>
      </div>

        
                <Footer/>
</div>
      
    </div>
  )
}

export default New