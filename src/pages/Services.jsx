import Menu from "../components/menu/Menu.jsx";
import appStyle from "../app.module.css";
import Footer from "../generic/Footer.jsx";
import ServiceItems from "../components/services/ServiceItems.jsx";

const Services = () => {
  return (
    <div className={appStyle.page}>
      <Menu/>

      <div className={appStyle.main}>
        <h1 className={appStyle.pageTitle}>News</h1>

        <ServiceItems/>

        <Footer/>
      </div>
    </div>
  )
}

export default Services