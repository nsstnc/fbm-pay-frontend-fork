import style from "./headerItem.module.css";
import appStyle from "../../app.module.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const HeaderItem = ({ text, link = "" }) => {
  const location = useLocation().pathname.split("/")[2];
  const this_link = link.split("/")[2];

  if (location === this_link) {
    return (
      <Link to={link}>
        <div className={`${style.headerAccountsItem} ${style.active}`}>
          {text}
        </div>
      </Link>
    );
  } else {
    return (
      <Link to={link}>
        <div className={`${style.headerAccountsItem} ${style.noActive}`}>
          {text}
        </div>
      </Link>
    );
  }
};

export default HeaderItem;
