import style from '../style/previewCard.module.css';

const PreviewCard = () => {
  return (
    <>
      <img className={style.previewCard}
           src='/public/previesCard.png'
           alt="FBM pay preview card"/>
    </>
  )
}

export default PreviewCard