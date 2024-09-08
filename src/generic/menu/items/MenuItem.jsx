import style from "./menuItem.module.css";
import appStyle from "../../../app.module.css";
import { Link, useLocation } from "react-router-dom";
import React from "react";
// eslint-disable-next-line react/prop-types,no-unused-vars
const MenuItem = ({
  title,
  hint = "",
  link = "",
  image = <></>,
  imageHover = <></>,
}) => {
  const location = useLocation().pathname.split("/")[1];

  if (hint !== "") {
    // eslint-disable-next-line react/prop-types
    if (location === link.split("/")[1]) {
      return (
        <Link to={link}>
          <button className={`${style.activeItem} ${style.button}`}>
            {React.cloneElement(imageHover, {
              // style: { width: "23px", height: "23px", marginTop: "-1px" },
            })}
            <div className={style.text} style={{ gap: "5px" }}>
              <p className={`${style.activeText} ${appStyle.titleText}`}>
                {title}
              </p>
              <p
                className={`${style.activeText} ${appStyle.mainText} ${appStyle.hint}`}
              >
                {hint}
              </p>
            </div>
          </button>
        </Link>
      );
    } else {
      return (
        <Link to={link}>
          <button className={style.button}>
            {image}
            <div className={style.text} style={{ gap: "5px" }}>
              <p className={`${appStyle.titleText}`}>{title}</p>
              <p
                className={`${appStyle.mainText} ${appStyle.hint}`}
                style={{ margin: "0!important;" }}
              >
                {hint}
              </p>
            </div>
          </button>
        </Link>
      );
    }
  } else {
    // eslint-disable-next-line react/prop-types
    if (location === link.split("/")[1]) {
      return (
        <Link to={link}>
          <button className={`${style.activeItem} ${style.button}`}>
            {imageHover}
            <div className={style.text} style={{ gap: "5px" }}>
              <p className={`${style.activeText} ${appStyle.titleText}`}>
                {title}
              </p>
            </div>
          </button>
        </Link>
      );
    } else {
      return (
        <Link to={link}>
          <button className={style.button}>
            {image}
            <div className={style.text} style={{ gap: "5px" }}>
              <p className={`${appStyle.titleText}`}>{title}</p>
            </div>
          </button>
        </Link>
      );
    }
  }
};

export default MenuItem;
