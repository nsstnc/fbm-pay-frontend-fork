import {NEWS_ROUTE} from "../../routing/consts.js";
import NewsItem from "./NewsItem.jsx";
import style from '../../style/newsItems.module.css'


const NewsItems = () => {
  return (
    <div className={style.itemList}>
      <NewsItem
        title="TECHNICAL MAINTENANCE FOR BIN NUMBER"
        number="436797"
        text="Technical maintenance for bin number 436797"
        date="13.05.2024"
        link={NEWS_ROUTE}
      />
      <NewsItem
        title="TECHNICAL MAINTENANCE FOR BIN NUMBER"
        number="436797"
        text="Some more text for big news example. Some more text for big news example. Some more text for big news example. Some more text for big news example. Some more text for big news example. Some more text for big news example. "
        date="13.05.2024"
        link={NEWS_ROUTE}
      />
      <NewsItem
        title="TECHNICAL MAINTENANCE FOR BIN NUMBER"
        number="436797"
        text="Technical maintenance for bin number 436797"
        date="13.05.2024"
        link={NEWS_ROUTE}
      />
      <NewsItem
        title="TECHNICAL MAINTENANCE FOR BIN NUMBER"
        number="436797"
        text="Technical maintenance for bin number 436797"
        date="13.05.2024"
        link={NEWS_ROUTE}
      />
    </div>
  )
}

export default NewsItems