import Menu from "../components/menu/Menu.jsx";
import Footer from "../generic/Footer.jsx";
import style from "../style/allAccounts.module.css";
import HeaderAccountsItems from "../components/headerAccounts/HeaderAccountsItems.jsx";
import appStyle from "../app.module.css";
import ContentCard from "../components/ContentCard.jsx";
import filterIcon from "../image/filter.png";
import ShowMore from "../generic/ShowMore.jsx";
import downloadIcon from "../image/downloadIcon.png";
import Input from "../generic/Input.jsx";
import FilterAllAccounts from "../components/FilterAllAccounts.jsx";
import Button from "../generic/Button.jsx";
import plusIcon from "../image/plus.png";
import showMoreIcon from "../image/showMore.png";
import changeBlackIcon from "../image/changeBlack.png";
import arrowDownIcon from "../image/arrowDown.png";
import plusAddIcon from "../image/plusAdd.png";
import BlackButton from "../generic/BlackButton.jsx";
import WhiteButton from "../generic/WhiteButton.jsx";
import contentCardStyle from "../style/contentCard.module.css";

const AllAccounts = () => {
  return (
    <div className={appStyle.page}>
      <Menu />

      <div className={appStyle.main}>
        <h1 className={appStyle.pageTitle}>Accounts</h1>

        <HeaderAccountsItems />

        <div className={style.pageContent}>
          <div className={style.cards}>
            <div>
              <ContentCard
                title={
                  <div className={contentCardStyle.cardHeader}>
                    <p className={appStyle.titleText}>
                      <span
                        className={`${appStyle.titleText} ${appStyle.span}`}
                      >
                        TOTAL
                      </span>{" "}
                      DEPOSIT SUM
                    </p>
                  </div>
                }
                content={<p className={appStyle.pageTitle}>€6728.00</p>}
              />
            </div>
            <div>
              <ContentCard
                title={
                  <div className={contentCardStyle.cardHeader}>
                    <p className={appStyle.titleText}>
                      <span
                        className={`${appStyle.titleText} ${appStyle.span}`}
                      >
                        TOTAL
                      </span>{" "}
                      AMOUNT CREDITED
                    </p>
                  </div>
                }
                content={<p className={appStyle.pageTitle}>€6000.00</p>}
              />
            </div>
            <div>
              <ContentCard
                title={
                  <div className={contentCardStyle.cardHeader}>
                    <p className={appStyle.titleText}>
                      <span
                        className={`${appStyle.titleText} ${appStyle.span}`}
                      >
                        FREE AMOUNT
                      </span>{" "}
                      FOR THE WHOLE SUM
                    </p>
                  </div>
                }
                content={<p className={appStyle.pageTitle}>€728</p>}
              />
            </div>
            <div>
              <ContentCard
                title={
                  <div className={contentCardStyle.cardHeader}>
                    <p className={appStyle.titleText}>
                      <span
                        className={`${appStyle.titleText} ${appStyle.span}`}
                      >
                        NUMBER
                      </span>{" "}
                      OF ALL DEPOSITES
                    </p>
                  </div>
                }
                content={<p className={appStyle.pageTitle}>2</p>}
              />
            </div>
          </div>

          <div className={style.div5}>
            <div className={style.filter__header}>
              <div className={style.filter__title}>
                <h1 className={appStyle.titleText}>ALL ACCOUNTS</h1>
                <div className={style.filter__icon}>
                  <p>Filters</p>
                  <img
                    alt="Filter icon"
                    src={filterIcon}
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
              <ShowMore
                text="EXCEL"
                img={
                  <img
                    alt="Show more icon"
                    src={downloadIcon}
                    style={{
                      width: "1.2rem",
                      height: "1.2rem",
                    }}
                  />
                }
              />
            </div>

            <div className={style.filters}>
              <h1 className={appStyle.titleText}>FILTERS</h1>
              <div className={style.input}>
                <div
                  style={{
                    width: "60%",
                  }}
                >
                  <Input label="IBAN" text="text" placeholder="All" />
                </div>

                <div className={style.colorButton}>
                  <BlackButton text="Apply" />
                </div>
                <div className={style.colorButton}>
                  <WhiteButton text="Cansel" />
                </div>
              </div>
            </div>

            <div>
              <FilterAllAccounts
                account={<p className={appStyle.mainText}>ACCOUNT NUMBER</p>}
                users={
                  <div className={style.addUsers}>
                    <p className={appStyle.mainText}>USERS</p>
                    <div>
                      <Button
                        text={
                          <p
                            className={appStyle.hintText}
                            style={{
                              color: "white",
                            }}
                          >
                            Add Users
                          </p>
                        }
                        img={<img alt="Plus icon" src={plusIcon} />}
                      />
                    </div>
                  </div>
                }
                notification={<p className={appStyle.mainText}>NOTIFICATION</p>}
                balance={<p className={appStyle.mainText}>AVAILABLE BALANCE</p>}
                isHeader="header"
              />

              <FilterAllAccounts
                account={
                  <div className={style.account}>
                    <p className={appStyle.titleText}>IVAN NEW BALANCE</p>
                    <div className={style.input}>
                      <p className={appStyle.mainText}>
                        GB16GUAV00993200022188
                      </p>
                      <img
                        alt="Edit icon"
                        src={changeBlackIcon}
                        style={{
                          width: "1.2rem",
                          height: "1.2rem",
                        }}
                      />
                    </div>
                  </div>
                }
                users={
                  <div className={style.users}>
                    <p className={appStyle.span}>4</p>
                    <img alt="Down arrow icon" src={arrowDownIcon} />
                  </div>
                }
                notification={
                  <p className={appStyle.mainText}>Top-Up your balance</p>
                }
                balance={
                  <div className={style.balance}>
                    <p>€123,999.00</p>
                    <img alt="Add icon" src={plusAddIcon} />
                  </div>
                }
              />

              <FilterAllAccounts
                account={
                  <div className={style.account}>
                    <p className={appStyle.titleText}>
                      OWS1690 OWS1690, Main Balance
                    </p>
                    <div className={style.input}>
                      <p className={appStyle.mainText}>
                        GB16GUAV00993200022188
                      </p>
                      <img
                        alt="Edit icon"
                        src={changeBlackIcon}
                        style={{
                          width: "1.2rem",
                          height: "1.2rem",
                        }}
                      />
                    </div>
                  </div>
                }
                users={
                  <div className={style.users}>
                    <p className={appStyle.span}>0</p>
                    <img alt="Down arrow icon" src={arrowDownIcon} />
                  </div>
                }
                notification={<p className={appStyle.mainText}>-</p>}
                balance={
                  <div className={style.balance}>
                    <p>€3,999.00</p>
                    <img alt="Add icon" src={plusAddIcon} />
                  </div>
                }
              />

              <ShowMore
                text={<p>Show 25</p>}
                subText="6 of 67"
                img={<img alt={"Show more icon"} src={showMoreIcon} />}
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AllAccounts;
