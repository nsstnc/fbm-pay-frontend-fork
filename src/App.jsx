import {BrowserRouter} from "react-router-dom";
import AppRouter from './routing/AppRouter'
import {AuthProvider} from './pages/context/AuthContext.jsx';
import {AccountsProvider} from './pages/context/AccountsContext';
import {CardsProvider} from './pages/context/CardsContext.jsx';
import './index.css'
/*import {useEffect, useState} from "react";
import {refreshToken} from "./api/userApi";
import {useDispatch} from "react-redux";
import {setAuthAction} from "./store/userReducers";*/
import WebFont from 'webfontloader';

function App() {

    /*const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
    WebFont.load({
      google: {
        families: ['Noto Sans']
      }
    });
   }, []);
    useEffect(() => {
      const token = localStorage.getItem("token")
      if (token) {
        refreshToken().then(data => {
          dispatch(setAuthAction(data))
          setLoading(false)
        })
          .catch(() => {
            localStorage.clear()
            window.location.reload();
          })
      } else {
        setLoading(false)
      }
    }, [])

    if (loading) {
      return <div></div>
    }
    */

    return (
        <div>
            <AuthProvider>
                <AccountsProvider>
                <CardsProvider>
                    <BrowserRouter>
                        <AppRouter/>
                    </BrowserRouter>
                </CardsProvider>
                </AccountsProvider>
            </AuthProvider>
        </div>
    )
}

export default App
