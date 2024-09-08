import style from './notFound.module.css';
import {Link} from "react-router-dom";
import { LOGIN_ROUTE} from "../../routing/consts.js";
import '../../index.css';

const NotFound = () => {
  return (
    <div className={style.notFound}>
      <h1>404 Page Not Found</h1>
      <p>Sorry, this page does not exist.</p>

      <Link to={LOGIN_ROUTE} className="link">
        <p>Return to Login</p>
      </Link>
    </div>
  )
}

export default NotFound