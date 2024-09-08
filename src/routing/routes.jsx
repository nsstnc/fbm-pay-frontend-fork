import {
  ACCOUNTS_BALANCE_HISTORY_ROUTE,
  ACCOUNTS_FUNDING_ROUTE,
  ACCOUNTS_WALLET_DETAILS_ROUTE,
  ACCOUNTS_WITHDRAW_ACCOUNT_ROUTE,
  ACCOUNTS_WITHDRAW_CRYPTOWALLET_ROUTE,
  ALL_ACCOUNTS_ROUTE,
  CARDS_ALL_ROUTE,
  CARDS_DETAILS_ROUTE,
  CARDS_ISSUANCE_ROUTE,
  CREATE_TICKET_ROUTE,
  DASHBOARD_ROUTE,
  DS3_ROUTE,
  LOGIN_ROUTE,
  METAPAY_ROUTE,
  NEWS_ROUTE,
  NOT_FOUND_ROUTE,
  PASSWORD_CHANGE_ROUTE,
  PAYMENTS_ACCOUNTS_ROUTE,
  PAYMENTS_CARDS_ROUTE,
  PROFILE_CHANGE_EMAIL_ROUTE,
  PROFILE_CHANGE_PASSWORD_ROUTE,
  PROFILE_CHANGE_PROFILE_ROUTE,
  PROFILE_LIMITS_ROUTE,
  PROFILE_SETTINGS_ROUTE,
  SERVICES_ROUTE,
  SUPPORT_ROUTE,
  TICKET_ID_ROUTE,
  TWO_FACTOR_AUTHENTICATION_ROUTE,
  USER_MANAGEMENT_ADD_ROUTE,
  USER_MANAGEMENT_REDACT_ROUTE,
  USER_MANAGEMENT_ROUTE,
  NEW_PAGE_ROUTE,
} from "./consts";
import Login from "../pages/login/Login.jsx";
import NotFound from "../pages/notFound/NotFound.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import AccountsAll from "../pages/accounts/all/AccountsAll.jsx";
import UserManagement from "../pages/userManagement/UserManagement.jsx";
import TwoFactorAuthentication from "../pages/login/2fa/TwoFactorAuthentication.jsx";
import UserManagementAdd from "../pages/userManagement/add/UserManagementAdd.jsx";
import UserManagementRedact from "../pages/userManagement/redact/UserManagementRedact.jsx";
import AccountFunding from "../pages/accounts/funding/AccountFunding.jsx";
import AccountBalanceHistory from "../pages/accounts/balanceHistory/AccountBalanceHistory.jsx";
import News from "../pages/news/News.jsx";
import Services from "../pages/services/Services.jsx";
import PaymentsCards from "../pages/payments/cards/PaymentsCards.jsx";
import PaymentsAccounts from "../pages/payments/accounts/PaymentsAccounts.jsx";
import CardsIssuance from "../pages/cards/CardsIssuance.jsx";
import CardsAll from "../pages/cards/all/CardsAll.jsx";
import Metapay from "../pages/metapay/Metapay.jsx";
import Ds3 from "../pages/metapay/3ds/Ds3.jsx";
import Support from "../pages/support/Support.jsx";
import CreateTicket from "../pages/support/createTicket/CreateTicket.jsx";
import Ticket from "../pages/support/ticket/Ticket.jsx";
import Settings from "../pages/profile/settings/Settings.jsx";
import Limits from "../pages/profile/limits/Limits.jsx";
import Profile from "../pages/profile/change/profile/Profile.jsx";
import Password from "../pages/profile/change/password/Password.jsx";
import Email from "../pages/profile/change/email/Email.jsx";
import CardDetails from "../pages/cards/details/CardDetails.jsx";
import PasswordChange from "../pages/login/passwordChange/PasswordChange.jsx";
import WithdrawAccount from "../pages/accounts/funding/withdraw/WithdrawAccount.jsx";
import WithdrawCryptowallet from "../pages/accounts/funding/withdraw/WithdrawCryptowallet.jsx";
import WalletDetails from "../pages/accounts/funding/details/WalletDetails.jsx";
import New from "../pages/news/new/New.jsx";

export const authRoutes = [];

export const publicRoutes = [
  {
    path: NOT_FOUND_ROUTE,
    Element: <NotFound />,
  },
  {
    path: LOGIN_ROUTE,
    Element: <Login />,
  },
  {
    path: TWO_FACTOR_AUTHENTICATION_ROUTE,
    Element: <TwoFactorAuthentication />,
  },
  {
    path: PASSWORD_CHANGE_ROUTE,
    Element: <PasswordChange />,
  },
  {
    path: DASHBOARD_ROUTE,
    Element: <Dashboard />,
  },
  {
    path: USER_MANAGEMENT_ROUTE,
    Element: <UserManagement />,
  },
  {
    path: USER_MANAGEMENT_ADD_ROUTE,
    Element: <UserManagementAdd />,
  },
  {
    path: USER_MANAGEMENT_REDACT_ROUTE,
    Element: <UserManagementRedact />,
  },
  {
    path: ALL_ACCOUNTS_ROUTE,
    Element: <AccountsAll />,
  },
  {
    path: ACCOUNTS_FUNDING_ROUTE,
    Element: <AccountFunding />,
  },
  {
    path: ACCOUNTS_WITHDRAW_ACCOUNT_ROUTE,
    Element: <WithdrawAccount />,
  },
  {
    path: ACCOUNTS_WITHDRAW_CRYPTOWALLET_ROUTE,
    Element: <WithdrawCryptowallet />,
  },
  {
    path: ACCOUNTS_WALLET_DETAILS_ROUTE,
    Element: <WalletDetails />,
  },
  {
    path: ACCOUNTS_BALANCE_HISTORY_ROUTE,
    Element: <AccountBalanceHistory />,
  },
  {
    path: PAYMENTS_CARDS_ROUTE,
    Element: <PaymentsCards />,
  },
  {
    path: PAYMENTS_ACCOUNTS_ROUTE,
    Element: <PaymentsAccounts />,
  },
  {
    path: SERVICES_ROUTE,
    Element: <Services />,
  },
  {
    path: NEWS_ROUTE,
    Element: <News />,
  },
  {
    path: CARDS_ISSUANCE_ROUTE,
    Element: <CardsIssuance />,
  },
  {
    path: CARDS_ALL_ROUTE,
    Element: <CardsAll />,
  },
  {
    path: CARDS_DETAILS_ROUTE,
    Element: <CardDetails />,
  },
  {
    path: METAPAY_ROUTE,
    Element: <Metapay />,
  },
  {
    path: DS3_ROUTE,
    Element: <Ds3 />,
  },
  {
    path: SUPPORT_ROUTE,
    Element: <Support />,
  },
  {
    path: CREATE_TICKET_ROUTE,
    Element: <CreateTicket />,
  },
  {
    path: TICKET_ID_ROUTE,
    Element: <Ticket />,
  },
  {
    path: PROFILE_SETTINGS_ROUTE,
    Element: <Settings />,
  },
  {
    path: PROFILE_CHANGE_PROFILE_ROUTE,
    Element: <Profile />,
  },
  {
    path: PROFILE_CHANGE_PASSWORD_ROUTE,
    Element: <Password />,
  },
  {
    path: PROFILE_CHANGE_EMAIL_ROUTE,
    Element: <Email />,
  },
  {
    path: PROFILE_LIMITS_ROUTE,
    Element: <Limits />,
  },
  {
    path: NEW_PAGE_ROUTE,
    Element: <New />,
  },
];
