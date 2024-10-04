import {NEW_PAGE_ROUTE} from "../../../routing/consts.js"
import NewsItem from "./NewsItem.jsx"
import style from "./newsItems.module.css"
import {useEffect, useState} from "react";
import appStyle from "../../../app.module.css";
import arrow from "../../../image/arrow.svg";
import NoDataMessage from "../../../generic/noDataMessage/NoDataMessage.jsx";

const NewsItems = () => {
    const [payNew, setPayNew] = useState([])
    const fetchNews = async () => {
        const url = "/api/news"
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
                console.log(result.data)
                setPayNew(result.data)
            } else {
                const errorText = await response.text()
                console.error(
                    "Ошибка при получении данных новостей:",
                    response.status,
                    response.statusText,
                    errorText
                )
            }
        } catch (error) {
            console.error("Ошибка при получении данных новостей:", error)
        }
    }
    useEffect(() => {
        fetchNews()
    }, [])


    return (
        <div className={style.itemList}>
            {payNew.length > 0 ?
                payNew.map((title, index) => (
                    <NewsItem
                        key={title.id}
                        title={title.title}
                        number=""
                        text={title.content}
                        date={new Date(title.updated_at).toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                        // link={`${NEW_PAGE_ROUTE}/${title.id}`}
                        link={`/new/${title.id}`}
                    />
                ))
                : <NoDataMessage/>}
        </div>
    )
}

export default NewsItems
