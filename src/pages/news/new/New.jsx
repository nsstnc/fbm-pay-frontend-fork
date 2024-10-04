import Menu from "../../../generic/menu/Menu.jsx"
import appStyle from "../../../app.module.css"
import NewsItem from "../items/NewsItem.jsx"
import style from "../items/newsItem.module.css"
import Button from "../../../generic/buttons/Button.jsx"
import TextButton from "../../../generic/buttons/TextButton.jsx"

import Footer from "../../../generic/footer/Footer.jsx"
import {useNavigate} from "react-router-dom";
import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import arrow from "../../../image/arrow.svg";
import NoDataMessage from "../../../generic/noDataMessage/NoDataMessage.jsx";

const New = () => {
    const {id} = useParams();

    const navigate = useNavigate();
    const [title, setTitle] = useState(null)


    const fetchNew = async () => {
        const url = `/api/news/${id}`
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
                setTitle(result.data)
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
        fetchNew()
    }, [])

    return (
        <div className={appStyle.page}>
            <Menu/>
            <div className={appStyle.main}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignContent: "center",
                        alignItems: "center",
                    }}
                >
                    <span style={{fontSize: "30px", fontWeight: "700"}}>News</span>{" "}
                    <div style={{marginLeft: "50px"}}>
                        <TextButton
                            text="Go Back"
                            img={<img alt="Go back" src="/src/image/arrowBack.svg"/>}
                            onClick={() => navigate(-1)}
                        />
                    </div>
                </div>
                {title ?
                    (

                        <div>
                            <div className={style.header} style={{marginTop: "2rem"}}>
                                <h1
                                    className={appStyle.titleText}
                                    style={{fontSize: "30px", fontWeight: "700"}}
                                >
                                    {title.title}
                                    {/*<span*/}
                                    {/*  className={`${appStyle.titleText} ${appStyle.span}`}*/}
                                    {/*  style={{*/}
                                    {/*    fontSize: "30px",*/}
                                    {/*    fontWeight: "700",*/}
                                    {/*    color: "#21A038",*/}
                                    {/*  }}*/}
                                    {/*>*/}
                                    {/*  */}
                                    {/*</span>*/}
                                </h1>
                                <div></div>
                            </div>

                            <div className={style.text}>
                                <p className={appStyle.mainText}
                                   dangerouslySetInnerHTML={{__html: title.content}}/>
                            </div>

                            <div className={style.date}>
                                <p className={`${appStyle.smallerText} ${appStyle.hint}`}>
                                    Published: {new Date(title.updated_at).toLocaleDateString('ru-RU', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric'
                                })}
                                </p>
                            </div>
                        </div>


                    )
                    : <NoDataMessage/>}

                <Footer/>
            </div>
        </div>
    )
}

export default New
