import Menu from "../../generic/menu/Menu.jsx";
import appStyle from "../../app.module.css";
import NewsItems from "./items/NewsItems.jsx";
import Footer from "../../generic/footer/Footer.jsx";

const News = () => {
  return (
    <div className={appStyle.page}>
      <Menu/>

      <div className={appStyle.main}>
        <h1 className={appStyle.pageTitle}>News</h1>

        <NewsItems/>

        <Footer/>
      </div>
    </div>
  )
}

export default News