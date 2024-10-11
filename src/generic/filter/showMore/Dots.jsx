import style from './showMore.module.css'
import appStyle from '../../../app.module.css'
import showMore from '../../../image/showMore.svg'
import dots from '../../../image/dots.svg'
import { USER_MANAGEMENT_REDACT_ROUTE } from "../../../routing/consts.js"
import { Link } from 'react-router-dom';
import "rsuite/dist/rsuite.min.css";
import {
    Popover, Whisper, Dropdown,
    Button
} from "rsuite/";
import {useEffect, useState} from "react";
// eslint-disable-next-line react/prop-types

const RenderMenu = ({left, top, className}, ref, id) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    console.log(id)
    const fetchUser = async () => {
        const url = `/api/users/${parseInt(id, 10)}`
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
                const userData = result.data


                setName(userData.name)
                setEmail(userData.email)
                console.log(userData)
            } else {
                const errorText = await response.text()
                console.error(
                    "Ошибка при получении данных пользователя:",
                    response.status,
                    response.statusText,
                    errorText
                )
            }
        } catch (error) {
            console.error("Ошибка при получении данных пользователя:", error)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [id])


    return (
        <Popover ref={ref}
                 className={className}
                 style={{left, top, marginLeft: '-50px'}}>
            <Dropdown.Menu title="Edit">
                <Dropdown.Item as={Link} to={{
                    pathname: `${USER_MANAGEMENT_REDACT_ROUTE}`,
                    search: `?name=${name}&email=${email}`
                    }} eventKey={1}>
                    Edit
                </Dropdown.Item>
                <Dropdown.Item eventKey={2}>
                    Block
                </Dropdown.Item>
            </Dropdown.Menu>
        </Popover>
    );
};


const Dots = ({text = "", subText = "", id}) => {
    return (
        <Whisper placement="left"
                 trigger="click"
                 speaker={(props, ref) => RenderMenu(props, ref, id)}>


            <div style={{width: '1rem'}}><a href="#" className={`dots`}><img src={dots}/></a></div>


        </Whisper>
    )
}

export default Dots