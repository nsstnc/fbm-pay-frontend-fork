import HeaderAccountItem from "./HeaderAccountItem.jsx";
import style from '../../style/headerAccountsItems.module.css'
import {ACCOUNTS_BALANCE_HISTORY_ROUTE, ACCOUNTS_FUNDING_ROUTE, ALL_ACCOUNTS_ROUTE} from "../../routing/consts.js";

const HeaderAccountsItems = () => {
  return (
    <div className={style.headerItems}>
      <HeaderAccountItem text="All Accounts" link={ALL_ACCOUNTS_ROUTE}/>
      <HeaderAccountItem text="Account Funding" link={ACCOUNTS_FUNDING_ROUTE}/>
      <HeaderAccountItem text="Balance History" link={ACCOUNTS_BALANCE_HISTORY_ROUTE}/>
    </div>
  )
}

export default HeaderAccountsItems