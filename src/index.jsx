import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { store } from "./store"
import WebFont from "webfontloader"
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
