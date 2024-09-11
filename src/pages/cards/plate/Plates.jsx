import style from "./plates.module.css"
import Plate from "./Plate.jsx"
import masterCard from "../../../image/cards/icons/masterCard.svg"
import visa from "../../../image/cards/icons/visa.svg"
import unionPay from "../../../image/cards/icons/inionPay.svg"
import cardDark from "../../../image/cards/cardDark.svg"
import cardGreen from "../../../image/cards/cardGreen.svg"
import cardGreen2 from "../../../image/cards/cardGreen2.svg"
import appStyle from "../../../app.module.css"
import cardDarkOne from "../../../image/cards/oneBlackCard.svg"
import cardGreenOne from "../../../image/cards/onegreenCard.svg"
import cardGreen2One from "../../../image/cards/oneGreenCard2.svg"
import NoDataMessage from "../../../generic/noDataMessage/NoDataMessage.jsx"
import { handleWidth } from "../../../generic/handleWidth/handleWidth.js"

const Plates = ({ plates }) => {
  //handleWIdth
  let isWidth = handleWidth()

  return (
    <div className={style.plates}>
      {plates.length > 0
        ? plates.map((plate, index) => (
            <Plate
              key={index}
              title={`BIN ${plate.bin}`}
              img={
                <img
                  className={style.icon_bin}
                  alt={plate.payment_system}
                  src={plate.icon}
                />
              }
              cardImg={
                <div className={`card-html ${plate.card_style_classname}`}>
                  <div className={`flex`} style={{ marginTop: "-1.5rem" }}>
                    {isWidth ? (
                      <>
                        <h2>
                          {plate.bin
                            .toString()
                            .replace(/(\d{4})(\d{2})/, "$1 $2")}{" "}
                          ••{" "}
                        </h2>{" "}
                        <h2 style={{ marginLeft: "1rem" }}> ••••</h2>{" "}
                        <h2 style={{ marginLeft: "1rem" }}> ••••</h2>{" "}
                      </>
                    ) : (
                      <>
                        {/* className={style.point_card} */}
                        {/* className={style.number_card} */}
                        <h2 className={style.point_card}>
                          {plate.bin
                            .toString()
                            .replace(/(\d{4})(\d{2})/, "$1 $2")}{" "}
                        </h2>
                        <h2
                          style={{ marginLeft: "1rem" }}
                          className={style.point_card}
                        >
                          {" "}
                          ••{" "}
                        </h2>
                        <h2
                          className={style.point_card}
                          style={{ marginLeft: "1rem" }}
                        >
                          {" "}
                          ••••
                        </h2>{" "}
                        <h2
                          className={style.point_card}
                          style={{ marginLeft: "1rem" }}
                        >
                          {" "}
                          ••••
                        </h2>{" "}
                      </>
                    )}
                  </div>
                </div>
              }
              isWidth={isWidth}
              oneCardImg={<img alt="Card" src={plate.cardimg} />}
              plate={plate}
            />
          ))
        : [<NoDataMessage key={-1} />]}
      <p
        className={`${appStyle.smallerText} ${appStyle.hint} ${style.smallerText}`}
      >
        More BINs soon
      </p>
    </div>
  )
}

export default Plates
