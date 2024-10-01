import style from "./paymentsCards.module.css"
import appStyle from "../../../app.module.css"
import Menu from "../../../generic/menu/Menu.jsx"
import HeaderItems from "../../../generic/headerItem/HeaderItems.jsx"
import {
    PAYMENTS_ACCOUNTS_ROUTE,
    PAYMENTS_CARDS_ROUTE,
} from "../../../routing/consts.js"
import Filter from "../../../generic/filter/Filter.jsx"
import Footer from "../../../generic/footer/Footer.jsx"
import Input from "../../../generic/input/Input.jsx"
import Result from "../../../generic/filter/result/Result.jsx"
import Status from "../../../generic/status/Status.jsx"
import statusStyle from "../../../generic/status/status.module.css"
import Card from "../../../generic/filter/result/card/Card.jsx"
import mastercard from "../../../image/cards/icons/masterCard.svg"
import FilterTransactions from "./filterTransactions/FilterTransactions.jsx"
import transactions from "./filterTransactions/transactions.js"
import handleChange from "./handleChange/handleChange.js"
import {useContext, useEffect, useState} from "react"
// import handleClickFilter from "../handleClick/handleClickFilter.js";
import {useValue} from "../../../generic/model/value.jsx"
import {$isMenuOpened} from "../../../generic/model/menuModel.js"
import {AccountsContext} from "../../context/AccountsContext.jsx";
import {CardsContext} from "../../context/CardsContext.jsx";
import NoDataMessage from "../../../generic/noDataMessage/NoDataMessage.jsx";

const PaymentsCards = () => {
    const [onClick, setOnClick] = useState()
    const [isToggled, setIsToggled] = useState(true)
    const {accounts, setAccounts} = useContext(AccountsContext)
    const [payments, setPayments] = useState([])
    const [filteredPayments, setFilteredPayments] = useState([])

    const [accountNumberFilter, setAccountNumberFilter] = useState("")
    const [periodFilter, setPeriodFilter] = useState("")
    const [transactionTypeFilter, setTransactionTypeFilter] = useState("")
    const [cardNumberFilter, setCardNumberFilter] = useState("")


    const handleClick = (e) => {
        console.log(e)
        e.preventDefault()
        setIsToggled(true)
        fetchAccounts()
    }


    const handleApplyFilter = () => {
        const filtered = payments.filter(payment =>
            payment.cardNumber.toLowerCase().includes(cardNumberFilter.toLowerCase()) &&
            payment.accountNumber.toLowerCase().includes(accountNumberFilter.toLowerCase())
        );
        setFilteredPayments(filtered)
    }

    const handleCancelFilter = () => {
        setCardNumberFilter("")
        setAccountNumberFilter("")
        setPeriodFilter("")
        setTransactionTypeFilter("")
        setFilteredPayments(payments)
    }


    // useEffect(() => {
    //   if (isToggled) {
    //     const timer = setTimeout(() => {
    //       setIsToggled(false)
    //     }, 2000)
    //
    //     return () => clearTimeout(timer)
    //   }
    // }, [isToggled])

    const [opened] = useValue($isMenuOpened)
    console.log(payments)

    const {cardsList, setCards} = useContext(CardsContext)

    const fetchCardDetails = async (cardId) => {
        const url = `/api/cards/${cardId}`
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
                return result.data
            } else {
                const errorText = await response.text()
                console.error(
                    "Ошибка при получении данных карты:",
                    response.status,
                    response.statusText,
                    errorText
                )
                return null
            }
        } catch (error) {
            console.error("Ошибка при получении данных карты:", error)
            return null
        }
    }

    const fetchCards = async () => {
        const url = "/api/cards"
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
                const cardsData = result.data

                // Получение деталей для каждой карты
                const cardsWithDetails = await Promise.all(
                    cardsData.map(async (card) => {
                        const cardDetails = await fetchCardDetails(card.id)
                        return {
                            ...card,
                            details: cardDetails,
                        }
                    })
                )

                setCards(cardsWithDetails)

                console.log(cardsWithDetails)
            } else {
                const errorText = await response.text()
                console.error(
                    "Ошибка при получении данных карт:",
                    response.status,
                    response.statusText,
                    errorText
                )
            }
        } catch (error) {
            console.error("Ошибка при получении данных карт:", error)
        }
    }


    const fetchAccountUsers = async (accountId) => {
        const url = `/api/accounts/${accountId}/users`
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
                if (result.success) {
                    return result.data // Возвращаем список пользователей, если запрос успешен
                } else {
                    console.error(
                        `Ошибка при получении пользователей аккаунта ${accountId}:`,
                        result.data
                    )

                    return [] // Возвращаем пустой массив, если success === false
                }
            } else {
                const errorText = await response.text()
                console.error(
                    `Ошибка при получении пользователей аккаунта ${accountId}:`,
                    response.status,
                    response.statusText,
                    errorText
                )
                return []
            }
        } catch (error) {
            console.error(
                `Ошибка при получении пользователей аккаунта ${accountId}:`,
                error
            )
            return []
        }
    }

    const fetchPayments = async (accountId) => {
        const url = `/api/accounts/${accountId}/transactions`
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

                let paymentsData = result.data.transactions
                // ПРИМЕР
                // let paymentsData = [{
                //     "cardId": "XZGMHTWXB88457BQ",
                //     "utrnNo": Math.floor(10000000 + Math.random() * 90000000),
                //     "reversal": 0,
                //     "cardNumber": Math.floor(10000000000000000 + Math.random() * 90000000000000000).toString(),
                //     "terminalPid": 657,
                //     "tnxCode": 680,
                //     "txnName": "EPOS Purchase",
                //     "amount": 1,
                //     "txnCurrencyCode": 978,
                //     "txnCurrency": "EUR",
                //     "responseId": -1,
                //     "response": "Approve Transaction",
                //     "issAuthId": "2A94YX",
                //     "rrn": "5YFLEO8CHSK0",
                //     "terminalId": "30360528",
                //     "accountNumber": Math.floor(10000000 + Math.random() * 90000000).toString(), // "GB58GUAV00993200006300",
                //     "accountAmount": 1,
                //     "accountCurrency": "EUR",
                //     "mcc": "7311",
                //     "merchantId": "303605280000490",
                //     "merchantName": "FACEBK ADS ",
                //     "merchantCountry": "US",
                //     "acqInstId": "30360528",
                //     "netRespCode": "000",
                //     "terminalTypeCode": 8,
                //     "terminalTypeName": "E-Pos terminal",
                //     "date": "2023-11-14T06:38:21"
                // }]

                // // если элемента еще нет, то добавляем его
                paymentsData.forEach(paymentData => {
                    // Если элемента с таким же utnNo нет в payments, добавляем его
                    if (!payments.some(payment => payment.utrnNo === paymentData.utrnNo)) {
                        payments.push(paymentData);
                    }
                });

                // setPayments([...payments, paymentsData]);

                setFilteredPayments(payments) // Изначально показываем все аккаунты
            } else {
                const errorText = await response.text()
                console.error(
                    "Ошибка при получении данных о транзакция аккаунта:",
                    response.status,
                    response.statusText,
                    errorText
                )
            }
        } catch (error) {
            console.error("Ошибка при получении данных о транзакция аккаунта:", error)
        }
    }


    const fetchAccounts = async () => {
        const url = "/api/accounts"
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
                const accountsData = result.data

                // Получаем список пользователей для каждого аккаунта
                const accountsWithUsers = await Promise.all(
                    accountsData.map(async (account) => {
                        await fetchPayments(account.id)
                        const users = await fetchAccountUsers(account.id)
                        return {
                            ...account,
                            users: users,
                        }
                    })
                )
                fetchCards()
                setAccounts(accountsWithUsers)
                console.log(accountsWithUsers)
            } else {
                const errorText = await response.text()
                console.error(
                    "Ошибка при получении данных аккаунтов:",
                    response.status,
                    response.statusText,
                    errorText
                )
            }
        } catch (error) {
            console.error("Ошибка при получении данных аккаунтов:", error)
        } finally {

            // Функция сортировки
            filteredPayments.sort((a, b) => {
                // Сначала сортируем по дате
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);

                if (dateA < dateB) return -1;
                if (dateA > dateB) return 1;

                // Если даты одинаковые, сортируем по последним шести цифрам accountNumber
                const lastSixA = a.accountNumber.slice(-6);  // последние 6 символов
                const lastSixB = b.accountNumber.slice(-6);

                return lastSixA.localeCompare(lastSixB);  // сортировка строк
            });


            // Устанавливаем isToggled в false после завершения всех операций
            setIsToggled(false)
        }
    }

    useEffect(() => {
        fetchAccounts()
    }, [])


    return (
        <div className={appStyle.page}>
            <Menu/>

            <div className={`${appStyle.main} ${opened ? appStyle.active : ""}`}>
                <h1 className={appStyle.pageTitle}>Payments</h1>

                <HeaderItems texts={["All payments"]} links={[PAYMENTS_CARDS_ROUTE]}/>

                <div className={style.pageContent}>
                    <Filter
                        onClick={handleClick}
                        onApply={handleApplyFilter}
                        onCancel={handleCancelFilter}
                        preload={isToggled}
                        title="ALL PAYMENTS"
                        inputs={[
                            [
                                <Input
                                    label="Payments of account:"
                                    type="text"
                                    placeholder="GB16GUAV00993200022188"
                                    value={accountNumberFilter}
                                    onChange={(e) => setAccountNumberFilter(e.target.value)}
                                />,
                                <Input
                                    label="Period"
                                    type="text"
                                    placeholder="For today"
                                    value={periodFilter}
                                    onChange={(e) => setPeriodFilter(e.target.value)}
                                />,
                                <Input
                                    label="Transaction Type:"
                                    type="text"
                                    placeholder="Debit and Credit"
                                    value={transactionTypeFilter}
                                    onChange={(e) => setTransactionTypeFilter(e.target.value)}
                                />,

                                <Input
                                    label="Payments of card"
                                    type="text"
                                    placeholder="3215654798878654"
                                    value={cardNumberFilter}
                                    onChange={(e) => setCardNumberFilter(e.target.value)}
                                />,
                            ],
                        ]}
                        results={
                            filteredPayments.length > 0
                                ? [
                                    <Result
                                        preload={isToggled}
                                        content={[
                                            // eslint-disable-next-line react/jsx-key
                                            <p className={appStyle.hint} style={{width: "8rem"}}>
                                                DOCUMENT
                                            </p>,
                                            <p className={appStyle.hint} style={{width: "8rem"}}>
                                                DATE
                                            </p>,
                                            <p className={appStyle.hint} style={{width: "8rem"}}>
                                                TIME
                                            </p>,
                                            <p className={appStyle.hint} style={{width: "8rem"}}>
                                                STATUS
                                            </p>,
                                            <p className={appStyle.hint} style={{width: "10rem"}}>
                                                STATUS CHANGE DATE
                                            </p>,
                                            <p className={appStyle.hint} style={{width: "10rem"}}>
                                                TRANSACTION AMOUNT
                                            </p>,
                                            <p className={appStyle.hint} style={{width: "10rem"}}>
                                                ACCOUNT AMOUNT
                                            </p>,

                                            <p className={appStyle.hint}>PAYMENT DETAILS</p>,
                                            <p className={appStyle.hint} style={{width: "10rem"}}>
                                                ACCOUNT #
                                            </p>,
                                            <p className={appStyle.hint} style={{width: "10rem"}}>
                                                ACCOUNT NAME
                                            </p>,
                                            <p className={appStyle.hint} style={{width: "10rem"}}>
                                                USERS
                                            </p>,
                                            <p className={appStyle.hint}>CARD NUMBER</p>,
                                            <p className={appStyle.hint} style={{paddingLeft: "50px"}}>
                                                CARD NAME
                                            </p>,
                                        ]}
                                    />,
                                    ...filteredPayments.map((payment, index) => (
                                        <Result
                                            key={index}
                                            // preload={isToggled}
                                            content={[
                                                // eslint-disable-next-line react/jsx-key
                                                <p
                                                    className={appStyle.mainText}
                                                    style={{width: "8rem"}}
                                                >
                                                    {payment.utrnNo}
                                                </p>,
                                                <p
                                                    className={appStyle.mainText}
                                                    style={{width: "8rem"}}
                                                >
                                                    {payment.date.split("T")[0]}
                                                </p>,
                                                <p
                                                    className={appStyle.mainText}
                                                    style={{width: "8rem"}}
                                                >
                                                    {payment.date.split("T")[1]}
                                                </p>,
                                                <div style={{width: "8rem"}}>
                                                    <Status
                                                        className={statusStyle.Pending}
                                                        text={payment.status}
                                                    />
                                                </div>,
                                                <p
                                                    className={appStyle.mainText}
                                                    style={{width: "10rem"}}
                                                >
                                                    {payment.status_date_update}
                                                </p>,
                                                <p
                                                    className={appStyle.mainText}
                                                    style={{width: "10rem"}}
                                                >
                                                    {payment.amount}
                                                </p>,
                                                <p
                                                    className={appStyle.mainText}
                                                    style={{width: "10rem"}}
                                                >
                                                    {payment.accountAmount}
                                                </p>,
                                                <p className={appStyle.mainText}>{payment.merchantName}</p>,
                                                <div style={{width: "10rem"}}>
                                                    <div className={style.refillMethod}>
                                                        <p
                                                            className={`${appStyle.hint} ${appStyle.smallerText}`}
                                                        >
                                                            #{payment.accountNumber.slice(-6)}
                                                        </p>
                                                    </div>
                                                </div>,
                                                <p
                                                    className={appStyle.mainText}
                                                    style={{width: "10rem"}}
                                                >
                                                    {accounts.find(account => account.iban === payment.accountNumber)?.name}
                                                </p>,
                                                <p
                                                    className={appStyle.mainText}
                                                    style={{width: "10rem"}}
                                                >
                                                    {accounts.find(account => account.iban === payment.accountNumber)?.users.length}
                                                </p>,
                                                <div className={style.flex}>
                                                    <Card
                                                        card={<img alt="Mastercard" src={mastercard}/>}
                                                        number={payment.cardNumber}
                                                        cardData={cardsList.find(card => card.card_number === payment.cardNumber)}
                                                    />
                                                </div>,
                                                <div
                                                    className={style.flex}
                                                    style={{paddingLeft: "50px"}}
                                                >
                                                    <div className={style.accountId}>
                                                        <p
                                                            className={`${appStyle.green} ${appStyle.mainText}`}
                                                        >
                                                            {cardsList.find(card => card.card_number === payment.cardNumber)?.card_name}
                                                        </p>
                                                    </div>
                                                </div>,
                                            ]}
                                        />
                                    )),
                  ]
                : [<NoDataMessage key={-1} />]
            }
          />
                            </div>

                            <Footer/>
                            </div>
                            </div>
                            )
                        }

export default PaymentsCards
