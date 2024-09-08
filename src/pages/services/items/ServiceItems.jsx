import appStyle from '../../../app.module.css'
import style from './serviceItems.module.css'

import globus from '../../../image/globus.svg'
import tgIcon from '../../../image/tgIcon.svg'
import ServiceItem from "./ServiceItem.jsx";
import agencyAccountsIcon from '../../../image/services/agencyAccounts.svg'
import landingsIcon from '../../../image/services/landings.svg'
import videoCreativesIcon from '../../../image/services/videoCreatives.svg'
import tgBotsIcon from '../../../image/services/tgBots.svg'
import mediaBuyingIcon from '../../../image/services/mediaBuying.svg'
import ASOIcon from '../../../image/services/ASO.svg'
import boostSocialMediaIcon from '../../../image/services/boostSocialMedia.svg'
import shopSellingIcon from '../../../image/services/shop.svg'
import videoReviewsIcon from '../../../image/services/videoReviews.svg'
import jobsIcon from '../../../image/services/jobsArbitage.svg'
import freeBulletinBoardIcon from '../../../image/services/freeBulletinBoard.svg'
import marketingMemesIcon from '../../../image/services/marketingMemes.svg'
import redMediaIcon from '../../../image/services/redMedia.svg'
import ecosystemTgIcon from '../../../image/services/ecosystemTg.svg'
import tgChatIcon from '../../../image/services/tgChat.svg'
import newsFeedIcon from '../../../image/services/newsFeed.svg'

const ServiceItems = () => {
  return (<div className={style.serviceItems}>
    <div className={style.item1}>
      <ServiceItem
        img={<img alt="Agency accounts" src={agencyAccountsIcon}/>}
        title="Agency accounts"
        text={<p className={appStyle.mainText}>Official Facebook, Google, Tik Tok, Taboola agency accounts with credit
          line. <span>We allow to put traffic on WH / GH / BH.</span> Fast issuing, lowest commission.</p>}
        buttonText="Start Now"
        link=""
        textLink={<div className={style.linkContainer}>
          <p className={`${appStyle.span}`}>fbm.agency</p>
          <img alt="Globus" src={globus}/>
        </div>}
      />
    </div>

    <div className={style.item2}>
      <ServiceItem
        img={<img alt="Landings and pre-landings" src={landingsIcon}/>}
        title="Landings and pre-landings"
        text={<p className={appStyle.mainText}>Landing pages of any complexity for the desired offer and native
          selling
          pre-landings with stories on ‘em. <span>In our portfolio more than 300 sites done.</span></p>}
        buttonText="Order Now"
        link=""
        textLink={<div className={style.linkContainer}>
          <p className={`${appStyle.span}`}>fbm.landings</p>
          <img alt="Globus" src={globus}/>
        </div>}
      />
    </div>

    <div className={style.item3}>
      <ServiceItem
        img={<img alt="Static and video creatives" src={videoCreativesIcon}/>}
        title="Static and video creatives"
        text={<p className={appStyle.mainText}>The best service for creating static banners and video ads on the
          market.
          We made over <span>3000 creos</span> for FB, Google, TT, etc, <span>so you won’t have any troubles with moderation.</span>
        </p>}
        buttonText="Order Now"
        link=""
        textLink={<div className={style.linkContainer}>
          <p className={`${appStyle.span}`}>fbm.creo</p>
          <img alt="Globus" src={globus}/>
        </div>}
      />
    </div>

    <div className={style.item4}>
      <ServiceItem
        img={<img alt="Developing Telegram bots" src={tgBotsIcon}/>}
        title="Developing Telegram bots"
        text={<p className={appStyle.mainText}>Our team will fast and professionally develop TG bot for your
          needs. <span>Best quality, good price.</span>
        </p>}
        buttonText="Order Now"
        link=""
        textLink={<div className={style.linkContainer}>
          <p className={`${appStyle.span}`}>fbm.code</p>
          <img alt="Globus" src={globus}/>
        </div>}
      />
    </div>

    <div className={style.item5}>
      <ServiceItem
        img={<img alt="In-house Media Buying" src={mediaBuyingIcon}/>}
        title="In-house Media Buying"
        text={<p className={appStyle.mainText}>We will put any volumes of traffic for your offer or business. We take
          over all the processes, all we need from you is spend. <span>Detailed conditions at the link below.</span>
        </p>}
        buttonText="Start Now"
        link=""
        textLink={<div className={style.linkContainer}>
          <p className={`${appStyle.span}`}>fbm.buying</p>
          <img alt="Globus" src={globus}/>
        </div>}
      />
    </div>

    <div className={style.item6}>
      <ServiceItem
        img={<img alt="[FBM] ASO" src={ASOIcon}/>}
        title="[FBM] ASO"
        text={<p className={appStyle.mainText}>Any volumes of downloads in Google Play and App store. Highest quality of
          motivated traffic and lowest CPD. <span>Price starts from 0,12$.</span></p>}
        buttonText="Start Now"
        link=""
        textLink={<div className={style.linkContainer}>
          <p className={`${appStyle.span}`}>fbm.aso</p>
          <img alt="Globus" src={globus}/>
        </div>}
      />
    </div>

    <div className={style.item7}>
      <ServiceItem
        img={<img alt="Boost for social media" src={boostSocialMediaIcon}/>}
        title="Boost for social media"
        text={<p className={appStyle.mainText}>We are working with such social medias like Facebook, Instagram, Tik Tok
          and
          so on. <span>Become more popular with us.</span></p>}
        buttonText="Start Now"
        link=""
        textLink={<div className={style.linkContainer}>
          <p className={`${appStyle.span}`}>fbm.boost</p>
          <img alt="Globus" src={globus}/>
        </div>}
      />
    </div>

    <div className={style.item8}>
      <ServiceItem
        img={<img alt="Shop selling consumables" src={shopSellingIcon}/>}
        title="Shop selling consumables"
        text={<p className={appStyle.mainText}>Trusted & farmed FB accounts, proxy and a lot more things <span>to buy traffic in FB easily.</span>
        </p>}
        buttonText="Buy Now"
        link=""
        textLink={<div className={style.linkContainer}>
          <p className={`${appStyle.span}`}>@fbm_ibot</p>
          <img alt="Telegram" src={tgIcon}/>
        </div>}
      />
    </div>

    <div className={style.item9}>
      <ServiceItem
        img={<img alt="Video reviews for your needs" src={videoReviewsIcon}/>}
        title="Video reviews for your needs"
        text={<p className={appStyle.mainText}>With the help of this service you can order <span>video reviews with our actors for any project and niche.</span>
        </p>}
        buttonText="Order Now"
        link=""
        textLink={<div className={style.linkContainer}>
          <p className={`${appStyle.span}`}>@fbm_reviews</p>
          <img alt="Telegram" src={tgIcon}/>
        </div>}
      />
    </div>

    <div className={style.item10}>
      <ServiceItem
        img={<img alt="Jobs in traffic arbitage" src={jobsIcon}/>}
        title="Jobs in traffic arbitage"
        text={<p className={appStyle.mainText}>Telegram channel suitable for those <span>who looking for work</span> in
          traffic arbitrage and for <span>companies looking for employees.</span></p>}
        buttonText="Start Now"
        link=""
        textLink={<div className={style.linkContainer}>
          <p className={`${appStyle.span}`}>@fbm_work</p>
          <img alt="Telegram" src={tgIcon}/>
        </div>}
      />
    </div>

    <div className={style.item11}>
      <ServiceItem
        img={<img alt="Free bulletin board" src={freeBulletinBoardIcon}/>}
        title="Free bulletin board"
        text={<p className={appStyle.mainText}>Place where everyone can post anything they need for <span>absolutely free.</span>
        </p>}
        buttonText="Subscribe"
        link=""
        textLink={<div className={style.linkContainer}>
          <p className={`${appStyle.span}`}>@fbm_board_fb</p>
          <img alt="Telegram" src={tgIcon}/>
        </div>}
      />
    </div>

    <div className={style.item12}>
      <ServiceItem
        img={<img alt="Marketing memes" src={marketingMemesIcon}/>}
        title="Marketing memes"
        text={<p className={appStyle.mainText}><span>Actual memes</span> about marketing, traffic arbitrage and ads
          stuff.</p>}
        buttonText="Subscribe"
        link=""
        textLink={<div className={style.linkContainer}>
          <p className={`${appStyle.span}`}>@arbitrazh_mem</p>
          <img alt="Telegram" src={tgIcon}/>
        </div>}
      />
    </div>

    <div className={style.item13}>
      <ServiceItem
        img={<img alt="[FBM] RED MEDIA" src={redMediaIcon}/>}
        title="[FBM] RED MEDIA"
        text={<p className={appStyle.mainText}><span>Official media from [FBM] Ecosystem.</span> There we publish
          articles on a variety of topics: bug fixes, life hacks, reviews of new products and much more.</p>}
        buttonText="Go to website"
        link=""
        textLink={<div className={style.linkContainer}>
          <p className={`${appStyle.span}`}>@fbm.red</p>
          <img alt="Globus" src={globus}/>
        </div>}
      />
    </div>

    <div className={style.item14}>
      <ServiceItem
        img={<img alt="[FBM] Ecosystem TG" src={ecosystemTgIcon}/>}
        title="[FBM] Ecosystem TG"
        text={<p className={appStyle.mainText}>Our telegram channel where we are
          posting <span>ONLY useful information</span>: ways to escape of bugs, to make your ads more profit and so on.
        </p>}
        buttonText="Subscribe"
        link=""
        textLink={<div className={style.linkContainer}>
          <p className={`${appStyle.span}`}>@fbm_red</p>
          <img alt="Telegram" src={tgIcon}/>
        </div>}
      />
    </div>

    <div className={style.item15}>
      <ServiceItem
        img={<img alt="[FBM] Telegram chat" src={tgChatIcon}/>}
        title="[FBM] Telegram chat"
        text={<p className={appStyle.mainText}>In our free private chat <span>anyone can receive answer</span> on their
          question about traffic, Facebook and all this stuff.</p>}
        buttonText="Join"
        link=""
        textLink={<div className={style.linkContainer}>
          <p className={`${appStyle.span}`}>@fbm_ichat</p>
          <img alt="Telegram" src={tgIcon}/>
        </div>}
      />
    </div>

    <div className={style.item16}>
      <ServiceItem
        img={<img alt="News feed" src={newsFeedIcon}/>}
        title="News feed"
        text={<p className={appStyle.mainText}>News feed in which we collect the latest events from the world of traffic
          arbitrage.</p>}
        buttonText="Subscribe"
        link=""
        textLink={<div className={style.linkContainer}>
          <p className={`${appStyle.span}`}>@fbm_lenta</p>
          <img alt="Telegram" src={tgIcon}/>
        </div>}
      />
    </div>

  </div>)
}

export default ServiceItems