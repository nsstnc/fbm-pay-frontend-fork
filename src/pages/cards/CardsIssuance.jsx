import style from "./cardsIssuance.module.css"
import appStyle from "../../app.module.css"
import Menu from "../../generic/menu/Menu.jsx"
import Footer from "../../generic/footer/Footer.jsx"
import HeaderItems from "../../generic/headerItem/HeaderItems.jsx"
import plusGreen from "../../image/plusGreen.svg"
import cards from "../../image//menuIcons/cards.svg"
import { CARDS_ALL_ROUTE, CARDS_ISSUANCE_ROUTE } from "../../routing/consts.js"
import Plates from "./plate/Plates.jsx"
import Input from "../../generic/input/Input.jsx"
import Preloader from "../../components/Preloader/preloader.jsx"
import React, { useState, useEffect } from "react"
import icon from "../../image/search.svg"
import masterCard from "../../image/cards/icons/masterCard.svg"
import cardDarkOne from "../../image/cards/oneBlackCard.svg"
import unionPay from "../../image/cards/icons/inionPay.svg"
import cardGreenOne from "../../image/cards/onegreenCard.svg"
import visa from "../../image/cards/icons/visa.svg"
import cardGreen2One from "../../image/cards/oneGreenCard2.svg"
import { handleWidth } from "../../generic/handleWidth/handleWidth.js"

const plates = [
  {
    bin: 567638,
    icon: masterCard,
    payment_system: "Mastercard",
    type_of_use: "For advertising and services",
    cardimg: cardDarkOne,
    card_style_classname: "card-dark",
    currency: "EURO",
    declined_payments: 0,
    non_currency_payments: "No comission",
    all_currency_payments: "No comission",
    from_1_to_5_cost: 4.5,
    from_6_to_9_cost: 3.5,
    from_10_cost: 2.5,
  },
  {
    bin: 464574,
    icon: unionPay,
    payment_system: "Union Pay",
    type_of_use: "For advertising and services",
    cardimg: cardGreenOne,
    card_style_classname: "card-green",
    currency: "EURO",
    declined_payments: 0,
    non_currency_payments: "No comission",
    all_currency_payments: "No comission",
    from_1_to_5_cost: 4.5,
    from_6_to_9_cost: 3.5,
    from_10_cost: 2.5,
  },
  {
    bin: 890865,
    icon: visa,
    payment_system: "VISA",
    type_of_use: "For advertising and services",
    cardimg: cardGreen2One,
    card_style_classname: "card-green2",
    currency: "EURO",
    declined_payments: 0,
    non_currency_payments: "No comission",
    all_currency_payments: "No comission",
    from_1_to_5_cost: 4.5,
    from_6_to_9_cost: 3.5,
    from_10_cost: 2.5,
  },
]

const CardsIssuance = () => {
  const [searchBin, setSearchBin] = useState("")
  const [selectedPaymentSystem, setSelectedPaymentSystem] = useState("All")
  const [selectedCurrency, setSelectedCurrency] = useState("All")
  const [selectedTypeOfUse, setSelectedTypeOfUse] = useState("1") // '1' соответствует "All types"

  const filteredPlates = plates.filter((plate) => {
    const binMatches = plate.bin.toString().includes(searchBin)
    const paymentSystemMatches =
      selectedPaymentSystem === "All" ||
      plate.payment_system === selectedPaymentSystem
    const currencyMatches =
      selectedCurrency === "All" || plate.currency === selectedCurrency
    const typeOfUseMatches =
      selectedTypeOfUse === "1" || plate.type_of_use === selectedTypeOfUse

    return (
      binMatches && paymentSystemMatches && currencyMatches && typeOfUseMatches
    )
  })

  const [bins, setBins] = useState([])
  const fetchBins = async () => {
    const url = "/api/cards/bins"
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
      Accept: "application/json",
    }

    try {
      const response = await fetch(url, {
        method: "GET",
        headers,
      })

      if (response.ok) {
        const result = await response.json()
        const binData = result.data

        setBins(binData)
        console.log(binData)
      } else {
        const errorText = await response.text()
        console.error(
          "Ошибка при получении бинов:",
          response.status,
          response.statusText,
          errorText
        )
      }
    } catch (error) {
      console.error("Ошибка при получении бинов:", error)
    }
  }

  fetchBins()

  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Array of image URLs or objects with `src` property
    const imageUrls = [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
      // Add more image URLs as needed
    ]

    const loadImages = () => {
      const loadedImages = []

      const handleImageLoad = () => {
        loadedImages.push(1)
        if (loadedImages.length === imageUrls.length) {
          setLoading(false)
        }
      }

      imageUrls.forEach((url) => {
        const img = new Image()
        img.src = url
        img.onload = handleImageLoad
        img.onerror = handleImageLoad // Handle error cases as well
      })
    }

    loadImages()
  }, [])

  //handleWidth
  let isWidth = handleWidth()

  if (loading) {
    return (
      <div className={appStyle.page}>
        <Menu />
        <div className={appStyle.main}>
          <h1 className={appStyle.pageTitle}>Сards</h1>

          <HeaderItems
            texts={[
              <>
                <img alt="Card issuance" src={plusGreen} />
                <p>Card Issuance</p>
              </>,
              <>
                <img alt="All cards" src={cards} />
                <p>All cards</p>
              </>,
            ]}
            links={[CARDS_ISSUANCE_ROUTE, CARDS_ALL_ROUTE]}
          />

          <div className={style.pageContent}>
            <Preloader />

            <div className={style.search}>
              <label>
                <Input label="Search" placeholder="Search by BIN" type="text" />
              </label>

              <div>
                <p className={appStyle.mainText}>Payment system</p>

                <div className={style.chooseParams}>
                  <div className={style.checked}>
                    <p className={appStyle.mainText}>All</p>
                  </div>
                  <div className={style.border}>
                    <p className={appStyle.mainText}>Mastercard</p>
                  </div>
                  <div className={style.border}>
                    <p className={appStyle.mainText}>VISA</p>
                  </div>
                  <div className={style.border}>
                    <p className={appStyle.mainText}>Union Pay</p>
                  </div>
                </div>
              </div>

              <div>
                <p className={appStyle.mainText}>Currency</p>

                <div className={style.chooseParams}>
                  <div className={style.checked}>
                    <p className={appStyle.mainText}>All</p>
                  </div>
                  <div className={style.border}>
                    <p className={appStyle.mainText}>€</p>
                  </div>
                </div>
              </div>

              <div className={style.radioButtons}>
                <p className={appStyle.mainText}>Types of use</p>

                <label className={style.radio}>
                  <input type="radio" value="1" />
                  <p className={appStyle.mainText}>All types</p>
                </label>
                <label className={style.radio}>
                  <input type="radio" value="2" />
                  <p className={appStyle.mainText}>For advertising</p>
                </label>
                <label className={style.radio}>
                  <input type="radio" value="3" />
                  <p className={appStyle.mainText}>For any purchase</p>
                </label>
                <label className={style.radio}>
                  <input type="radio" value="4" />
                  <p className={appStyle.mainText}>
                    For advertising and services
                  </p>
                </label>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    )
  }
  return (
    <div className={appStyle.page}>
      <Menu />
      <div className={appStyle.main}>
        <h1 className={appStyle.pageTitle}>Сards</h1>

        <HeaderItems
          texts={[
            <>
              <img alt="Card issuance" src={plusGreen} />
              <p>Card Issuance</p>
            </>,
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.62477 16.5C5.21055 16.5 4.87487 16.1642 4.875 15.75C4.87513 15.3358 5.21102 15 5.62523 15H7.12523C7.53945 15 7.87515 15.3358 7.875 15.75C7.87485 16.1642 7.539 16.5 7.12477 16.5H5.62477Z"
                  fill="#232323"
                />
                <path
                  d="M8.625 15.75C8.62485 16.1642 8.96055 16.5 9.37477 16.5H10.8748C11.289 16.5 11.6249 16.1642 11.625 15.75C11.6251 15.3358 11.2895 15 10.8752 15H9.37523C8.961 15 8.62515 15.3358 8.625 15.75Z"
                  fill="#232323"
                />
                <path
                  d="M13.1248 16.5C12.7106 16.5 12.3749 16.1642 12.375 15.75C12.3752 15.3358 12.711 15 13.1252 15H14.6252C15.0394 15 15.3751 15.3358 15.375 15.75C15.3749 16.1642 15.039 16.5 14.6248 16.5H13.1248Z"
                  fill="#232323"
                />
                <path
                  d="M16.125 15.75C16.1249 16.1642 16.4606 16.5 16.8748 16.5H18.3748C18.789 16.5 19.1249 16.1642 19.125 15.75C19.1251 15.3358 18.7894 15 18.3752 15H16.8752C16.461 15 16.1252 15.3358 16.125 15.75Z"
                  fill="#232323"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.375 6.75C14.3395 6.75 13.5 7.58948 13.5 8.625V9.375C13.5 10.4105 14.3395 11.25 15.375 11.25H17.625C18.6605 11.25 19.5 10.4105 19.5 9.375V8.625C19.5 7.58948 18.6605 6.75 17.625 6.75H15.375ZM15 8.625C15 8.41793 15.1679 8.25 15.375 8.25H17.625C17.8321 8.25 18 8.41793 18 8.625V9.375C18 9.58208 17.8321 9.75 17.625 9.75H15.375C15.1679 9.75 15 9.58208 15 9.375V8.625Z"
                  fill="#232323"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.625 3.75C3.34682 3.75 1.5 5.59682 1.5 7.875V16.125C1.5 18.4032 3.34682 20.25 5.625 20.25H18.375C20.6532 20.25 22.5 18.4032 22.5 16.125V7.875C22.5 5.59682 20.6532 3.75 18.375 3.75H5.625ZM3 7.875C3 6.42525 4.17525 5.25 5.625 5.25H18.375C19.8248 5.25 21 6.42525 21 7.875V16.125C21 17.5747 19.8248 18.75 18.375 18.75H5.625C4.17525 18.75 3 17.5747 3 16.125V7.875Z"
                  fill="#232323"
                />
              </svg>
              <p>All cards</p>
            </>,
          ]}
          links={[CARDS_ISSUANCE_ROUTE, CARDS_ALL_ROUTE]}
        />

        <div className={style.pageContent}>
          <div className={style.search} style={{ position: "relative" }}>
            <div className={`${style.password}`}>
              {!isWidth && (
                <p className={`${appStyle.mainText} ${style.mainText}`}>
                  search
                </p>
              )}
              <input
                className="password-input"
                type="text"
                placeholder="Search BIN"
                value={searchBin}
                onChange={(e) => setSearchBin(e.target.value)}
              />
              <div
                className={`${"password-control"} ${
                  !isWidth ? style.password_control : ""
                } `}
              >
                <img alt="View password" src={icon} />
              </div>
            </div>

            <div className={style.params}>
              <p className={appStyle.mainText}>Payment system</p>
              <div className={style.chooseParams}>
                <div
                  className={`${style.border} ${
                    selectedPaymentSystem === "All" ? style.checked : ""
                  }`}
                  style={{ borderRadius: ".35rem 0 0 .35rem" }}
                  onClick={() => setSelectedPaymentSystem("All")}
                >
                  <p className={appStyle.mainText}>All</p>
                </div>
                <div
                  className={`${style.border} ${
                    selectedPaymentSystem === "Mastercard" ? style.checked : ""
                  }`}
                  onClick={() => setSelectedPaymentSystem("Mastercard")}
                >
                  <p className={appStyle.mainText}>Mastercard</p>
                </div>
                <div
                  className={`${style.border} ${
                    selectedPaymentSystem === "VISA" ? style.checked : ""
                  }`}
                  onClick={() => setSelectedPaymentSystem("VISA")}
                >
                  <p className={appStyle.mainText}>VISA</p>
                </div>
                <div
                  className={`${style.border} ${
                    selectedPaymentSystem === "Union Pay" ? style.checked : ""
                  }`}
                  style={{ borderRadius: "0 .35rem .35rem 0" }}
                  onClick={() => setSelectedPaymentSystem("Union Pay")}
                >
                  <p className={appStyle.mainText}>Union Pay</p>
                </div>
              </div>
            </div>

            <div>
              <p className={appStyle.mainText}>Currency</p>
              <div className={style.chooseParams}>
                <div
                  className={`${style.border} ${
                    selectedCurrency === "All" ? style.checked : ""
                  }`}
                  style={{ borderRadius: ".35rem 0 0 .35rem" }}
                  onClick={() => setSelectedCurrency("All")}
                >
                  <p className={appStyle.mainText}>All</p>
                </div>
                <div
                  className={`${style.border} ${
                    selectedCurrency === "EURO" ? style.checked : ""
                  }`}
                  onClick={() => setSelectedCurrency("EURO")}
                >
                  <p className={appStyle.mainText}>€</p>
                </div>
                <div
                  className={`${style.border} ${
                    selectedCurrency === "USD" ? style.checked : ""
                  }`}
                  style={{ borderRadius: "0 .35rem .35rem 0" }}
                  onClick={() => setSelectedCurrency("USD")}
                >
                  <p className={appStyle.mainText}>$</p>
                </div>
              </div>
            </div>

            <div className={style.radioButtons}>
              {isWidth ? (
                <>
                  <p className={appStyle.mainText}>Types of use</p>
                  <label className={style.radio}>
                    <input
                      type="radio"
                      value="1"
                      checked={selectedTypeOfUse === "1"}
                      onChange={() => setSelectedTypeOfUse("1")}
                    />
                    <p className={appStyle.mainText}>All types</p>
                  </label>
                  <label className={style.radio}>
                    <input
                      type="radio"
                      value="For advertising"
                      checked={selectedTypeOfUse === "For advertising"}
                      onChange={() => setSelectedTypeOfUse("For advertising")}
                    />
                    <p className={appStyle.mainText}>For advertising</p>
                  </label>
                  <label className={style.radio}>
                    <input
                      type="radio"
                      value="For any purchase"
                      checked={selectedTypeOfUse === "For any purchase"}
                      onChange={() => setSelectedTypeOfUse("For any purchase")}
                    />
                    <p className={appStyle.mainText}>For any purchase</p>
                  </label>
                  <label className={style.radio}>
                    <input
                      type="radio"
                      value="For advertising and services"
                      checked={
                        selectedTypeOfUse === "For advertising and services"
                      }
                      onChange={() =>
                        setSelectedTypeOfUse("For advertising and services")
                      }
                    />
                    <p className={appStyle.mainText}>
                      For advertising and services
                    </p>
                  </label>
                </>
              ) : (
                <>
                  <p className={appStyle.mainText}>Types of use</p>
                  <select name="" id="types">
                    <option value={"all"}>
                      {" "}
                      <label className={style.radio}>
                        <input
                          type="radio"
                          value="1"
                          checked={selectedTypeOfUse === "1"}
                          onChange={() => setSelectedTypeOfUse("1")}
                        />
                        <p className={appStyle.mainText}>All types</p>
                      </label>
                    </option>
                    <option value="forAdvertising">
                      <label className={style.radio}>
                        <input
                          type="radio"
                          value="For advertising"
                          checked={selectedTypeOfUse === "For advertising"}
                          onChange={() =>
                            setSelectedTypeOfUse("For advertising")
                          }
                        />
                        <p className={appStyle.mainText}>For advertising</p>
                      </label>
                    </option>
                    <option value="forAnyPurchase">
                      <label className={style.radio}>
                        <input
                          type="radio"
                          value="For any purchase"
                          checked={selectedTypeOfUse === "For any purchase"}
                          onChange={() =>
                            setSelectedTypeOfUse("For any purchase")
                          }
                        />
                        <p className={appStyle.mainText}>For any purchase</p>
                      </label>
                    </option>
                    <option value="forAdvertisingAndService">
                      <label className={style.radio}>
                        <input
                          type="radio"
                          value="For advertising and services"
                          checked={
                            selectedTypeOfUse === "For advertising and services"
                          }
                          onChange={() =>
                            setSelectedTypeOfUse("For advertising and services")
                          }
                        />
                        <p className={appStyle.mainText}>
                          For advertising and services
                        </p>
                      </label>
                    </option>
                  </select>
                </>
              )}
            </div>
          </div>

          <div className={style.plates}>
            <Plates plates={filteredPlates} />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default CardsIssuance
