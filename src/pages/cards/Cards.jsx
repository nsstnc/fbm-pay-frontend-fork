import style from './cards.module.css'
import appStyle from '../../app.module.css'
import Menu from "../../generic/menu/Menu.jsx";
import Footer from "../../generic/footer/Footer.jsx";
import HeaderItems from "../../generic/headerItem/HeaderItems.jsx";
import plusGreen from '../../image/plusGreen.svg'
import cards from '../../image//menuIcons/cards.svg'
import {CARDS_ISSUANCE_ROUTE, CARDS_ROUTE} from "../../routing/consts.js";
import Plates from "./plate/Plates.jsx";
import Input from "../../generic/input/Input.jsx";

import "./Astrolab.ttf";

const Cards = () => {
  return (
    <div className={appStyle.page}>
      <Menu/>

      <div className={appStyle.main}>
        <h1 className={appStyle.pageTitle}>Сard Issuance</h1>

        <HeaderItems texts={[
          <div>
            <img alt="Card issuance" src={plusGreen}/>
            <p>Card Issuance</p>
          </div>,
          <div>
            <img alt="All cards" src={cards}/>
            <p>All cards</p>
          </div>,
        ]} links={[
          CARDS_ISSUANCE_ROUTE, CARDS_ROUTE,
        ]}/>

        <div className={style.pageContent}>
          <div>
            <label>
              Search
              <Input label="Search"
                     placeholder="Search by BIN"
                     type="text"
              />
            </label>

            <div>
              <p>Payment system</p>

              <div>
              <div>
                <a href="#"><p>All</p> </a>
              </div>
              <div>
                <a href="#"><p>Mastercard</p> </a>
              </div>
              <div>
                <a href="#"> <p>VISA</p> </a>
              </div>
              <div>
                <a href="#"><p>Union Pay</p> </a>
              </div>
              </div>
            </div>

            <div>
              <p>Currency</p>

              <div>
              <div>
                <p>All</p>
              </div>
              <div>
                <p>€</p>
              </div>
              </div>
            </div>
          </div>

          <div>
            <p>Types of use</p>

<div class="form_radio_btn">
	<input id="radio-1" type="radio" name="radio" value="1" checked>
	<label for="radio-1">All types</label>
</div>
 
<div class="form_radio_btn">
	<input id="radio-2" type="radio" name="radio" value="2">
	<label for="radio-2">For advertising</label>
</div>
 
<div class="form_radio_btn">
	<input id="radio-3" type="radio" name="radio" value="3">
	<label for="radio-3">For any purchase</label>
</div>          
<div class="form_radio_btn">
        <input id="radio-4" type="radio" name="radio" value="4">
        <label for="radio-4">For advertising and services</label>
</div>
</div>

          <Plates/>
        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default Cards
