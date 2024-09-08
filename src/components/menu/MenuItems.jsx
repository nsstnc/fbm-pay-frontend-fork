import MenuItem from "./MenuItem.jsx"
import dashboard from "../../image/menuIcons/dashboard.png"
import accounts from "../../image/menuIcons/accounts.png"
import userManagement from "../../image/menuIcons/userManagement.png"
import cards from "../../image/menuIcons/cards.png"
import payments from "../../image/menuIcons/payments.png"
import metapay from "../../image/menuIcons/metapay.png"
import services from "../../image/menuIcons/services.png"
import profile from "../../image/menuIcons/profile.png"
import support from "../../image/menuIcons/support.png"
import style from "../../style/menuItems.module.css"
import dashboardHover from "../../image/menuIcons/dashboardHover.png"
import accountsdHover from "../../image/menuIcons/accountsHover.png"
import userManagementHover from "../../image/menuIcons/userManagementHover.png"
import cardsHover from "../../image/menuIcons/cardsHover.png"
import paymentsHover from "../../image/menuIcons/paymentsHover.png"
import metapayHover from "../../image/menuIcons/metapayHover.png"
import profileHover from "../../image/menuIcons/profileHover.png"
import supportHover from "../../image/menuIcons/supportHover.png"
import {
  ALL_ACCOUNTS_ROUTE,
  DASHBOARD_ROUTE,
  SERVICES_ROUTE,
  USER_MANAGEMENT_ROUTE,
} from "../../routing/consts.js"

const MenuItems = () => {
  return (
    <div className={style.menuItems}>
      <MenuItem
        text="Dashboard"
        link={DASHBOARD_ROUTE}
        image={<img alt="Dashboard" src={dashboard} />}
        imageHover={<img alt="Dashboard" src={dashboardHover} />}
      />
      <MenuItem
        text={"Accounts - €442,536"}
        subText="Top-up and history"
        link={ALL_ACCOUNTS_ROUTE}
        image={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.5 14.8125C17.0177 14.8125 17.4375 14.3927 17.4375 13.875C17.4375 13.3572 17.0177 12.9375 16.5 12.9375C15.9822 12.9375 15.5625 13.3572 15.5625 13.875C15.5625 14.3927 15.9822 14.8125 16.5 14.8125Z"
              fill="#232323"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.0581 2.34869C14.5339 2.22275 15 2.58152 15 3.07373V4.5C15 4.91421 15.3358 5.25 15.75 5.25C16.1642 5.25 16.5 4.91421 16.5 4.5V3.07373C16.5 1.59711 15.1017 0.520785 13.6742 0.898637L4.76136 3.25793C3.281 3.64979 2.25 4.98922 2.25 6.52056V18.375C2.25 20.239 3.76104 21.75 5.625 21.75H18.375C20.239 21.75 21.75 20.239 21.75 18.375V17.0493C22.1984 16.79 22.5 16.3052 22.5 15.75V12C22.5 11.4448 22.1984 10.9601 21.75 10.7007V9.375C21.75 7.51103 20.239 6 18.375 6H6C5.58579 6 5.25 6.33578 5.25 6.75C5.25 7.16421 5.58579 7.5 6 7.5H18.375C19.4105 7.5 20.25 8.33948 20.25 9.375V10.5H16.125C14.261 10.5 12.75 12.011 12.75 13.875C12.75 15.739 14.261 17.25 16.125 17.25H20.25V18.375C20.25 19.4105 19.4105 20.25 18.375 20.25H5.625C4.58947 20.25 3.75 19.4105 3.75 18.375V6.52056C3.75 5.66981 4.32278 4.92569 5.1452 4.70799L14.0581 2.34869ZM16.125 12H21V15.75H16.125C15.0895 15.75 14.25 14.9105 14.25 13.875C14.25 12.8395 15.0895 12 16.125 12Z"
              fill="#232323"
            />
          </svg>
        }
        imageHover={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.5 14.8125C17.0177 14.8125 17.4375 14.3927 17.4375 13.875C17.4375 13.3572 17.0177 12.9375 16.5 12.9375C15.9822 12.9375 15.5625 13.3572 15.5625 13.875C15.5625 14.3927 15.9822 14.8125 16.5 14.8125Z"
              fill="#232323"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.0581 2.34869C14.5339 2.22275 15 2.58152 15 3.07373V4.5C15 4.91421 15.3358 5.25 15.75 5.25C16.1642 5.25 16.5 4.91421 16.5 4.5V3.07373C16.5 1.59711 15.1017 0.520785 13.6742 0.898637L4.76136 3.25793C3.281 3.64979 2.25 4.98922 2.25 6.52056V18.375C2.25 20.239 3.76104 21.75 5.625 21.75H18.375C20.239 21.75 21.75 20.239 21.75 18.375V17.0493C22.1984 16.79 22.5 16.3052 22.5 15.75V12C22.5 11.4448 22.1984 10.9601 21.75 10.7007V9.375C21.75 7.51103 20.239 6 18.375 6H6C5.58579 6 5.25 6.33578 5.25 6.75C5.25 7.16421 5.58579 7.5 6 7.5H18.375C19.4105 7.5 20.25 8.33948 20.25 9.375V10.5H16.125C14.261 10.5 12.75 12.011 12.75 13.875C12.75 15.739 14.261 17.25 16.125 17.25H20.25V18.375C20.25 19.4105 19.4105 20.25 18.375 20.25H5.625C4.58947 20.25 3.75 19.4105 3.75 18.375V6.52056C3.75 5.66981 4.32278 4.92569 5.1452 4.70799L14.0581 2.34869ZM16.125 12H21V15.75H16.125C15.0895 15.75 14.25 14.9105 14.25 13.875C14.25 12.8395 15.0895 12 16.125 12Z"
              fill="#232323"
            />
          </svg>
        }
      />
      <MenuItem
        text="User management"
        link={USER_MANAGEMENT_ROUTE}
        image={<img alt="User management" src={userManagement} />}
        imageHover={<img alt="Dashboard" src={userManagementHover} />}
      />
      <MenuItem
        text="Cards"
        image={<img alt="Cards" src={cards} />}
        imageHover={<img alt="Dashboard" src={cardsHover} />}
      />
      <MenuItem
        text="Payments"
        image={<img alt="Payments" src={payments} />}
        imageHover={<img alt="Dashboard" src={paymentsHover} />}
      />
      <MenuItem
        text="3DS & METAPAY"
        subText="Codes"
        image={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M7.00067 7C7.00067 6.44772 6.55295 6 6.00067 6C5.44838 6 5.00067 6.44772 5.00067 7V25C5.00067 25.5523 5.44838 26 6.00067 26C6.55295 26 7.00067 25.5523 7.00067 25V7Z"
              fill="white"
            />
            <path
              d="M10.0005 6C10.5528 6 11.0005 6.44772 11.0005 7V21.9143C11.0005 22.4665 10.5528 22.9143 10.0005 22.9143C9.44819 22.9143 9.00049 22.4665 9.00049 21.9143V7C9.00049 6.44772 9.44819 6 10.0005 6Z"
              fill="white"
            />
            <path
              d="M15.0005 7C15.0005 6.44772 14.5528 6 14.0005 6C13.4483 6 13.0005 6.44772 13.0005 7V21.9143C13.0005 22.4665 13.4483 22.9143 14.0005 22.9143C14.5528 22.9143 15.0005 22.4665 15.0005 21.9143V7Z"
              fill="white"
            />
            <path
              d="M18.0005 6C18.5528 6 19.0005 6.44772 19.0005 7V25C19.0005 25.5523 18.5528 26 18.0005 26C17.4483 26 17.0005 25.5523 17.0005 25V7C17.0005 6.44772 17.4483 6 18.0005 6Z"
              fill="white"
            />
            <path
              d="M23.0006 7C23.0006 6.44772 22.5528 6 22.0006 6C21.4483 6 21.0005 6.44772 21.0005 7V21.9143C21.0005 22.4665 21.4483 22.9143 22.0006 22.9143C22.5528 22.9143 23.0006 22.4665 23.0006 21.9143V7Z"
              fill="white"
            />
            <path
              d="M27.0005 7C27.0005 6.44772 26.5528 6 26.0005 6C25.4483 6 25.0005 6.44772 25.0005 7V25C25.0005 25.5523 25.4483 26 26.0005 26C26.5528 26 27.0005 25.5523 27.0005 25V7Z"
              fill="white"
            />
          </svg>
        }
        imageHover={<img alt="Dashboard" src={metapayHover} />}
      />
      <MenuItem
        text="[FBM] Services"
        subText="Creo, Landings, etc."
        image={<img alt="Services" src={services} />}
        imageHover={<img alt="Dashboard" src={services} />}
        link={SERVICES_ROUTE}
      />
      <MenuItem
        text="Profile"
        subText="1234567@gmail.com"
        image={<img alt="Profile" src={profile} />}
        imageHover={<img alt="Dashboard" src={profileHover} />}
      />
      <MenuItem
        text="Support"
        image={<img alt="Support" src={support} />}
        imageHover={<img alt="Dashboard" src={supportHover} />}
      />
    </div>
  )
}

export default MenuItems
