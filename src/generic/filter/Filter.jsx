import style from "./filter.module.css"
import appStyle from "../../app.module.css"
import filter from "../../image/filter.svg"
import refresh from "../../image/refreshIcon.svg"
import WhiteButton from "../buttons/WhiteButton.jsx"
import downloadIcon from "../../image/downloadIcon.svg"
import TextButton from "../buttons/TextButton.jsx"
import ShowMore from "./showMore/ShowMore.jsx"
import showMore from "../../image/showMore.svg"
import Inputs from "./inputs/Inputs.jsx"
import Results from "./result/Results.jsx"
import React, { useEffect, useState } from "react"
import { handleWidth } from "../../generic/handleWidth/handleWidth"

import Result from "./result/Result.jsx"

// eslint-disable-next-line react/prop-types
const Filter = ({
  onClick,
  preload,
  onApply,
  onCancel,
  title = "",
  inputs = [],
  results = [],
  something = [],
}) => {
  const [showBlock, setShowBlock] = useState(false)
  const [itemsToShow, setItemsToShow] = useState(25) // состояние для количества элементов

  const toggleBlock = () => {
    setShowBlock(!showBlock)
  }

  const handleShowMoreChange = (value) => {
    setItemsToShow(value)
  }

  //handleWidth
  let isWidth = handleWidth()

  return (
    <div className={style.content}>
      <div className={style.header}>
        <div className={style.title}>
          <p className={appStyle.titleText}>{title}</p>
          <div className={style.block_filter_refresh}>
            <div className={style.buttonFilter} onClick={toggleBlock}>
              {isWidth && (
                <TextButton
                  text="Filters"
                  link={""}
                  img={<img alt="Filter" src={filter} />}
                />
              )}
            </div>
            <div className={style.refresh}>
              <a onClick={onClick} href={"#"}>
                {preload ? (
                  <div className={style.spinner}></div>
                ) : (
                  <img className={style.refreshIcon} src={refresh} />
                )}
              </a>
            </div>
          </div>
        </div>
        {!isWidth ? (
          <div className={style.filter_download}>
            <TextButton
              text="Filters"
              link={""}
              img={<img alt="Filter" src={filter} />}
            />
            <div className={style.buttonExcel}>
              <WhiteButton
                text={<p>EXCEL</p>}
                link={""}
                img={<img alt="Download" src={downloadIcon} />}
              />
            </div>
          </div>
        ) : (
          <div className={style.buttonExcel}>
            <WhiteButton
              text={<p>EXCEL</p>}
              link={""}
              img={<img alt="Download" src={downloadIcon} />}
            />
          </div>
        )}
      </div>
      {showBlock && (
        <div className={style.filter}>
          <p className={appStyle.titleText}>FILTERS</p>

          <Inputs inputs={inputs} onApply={onApply} onCancel={onCancel} />
        </div>
      )}
      {something}

      {/* Отображаем только выбранное количество результатов */}
      <Results results={results.slice(0, itemsToShow + 1)} preload={preload} />

      <ShowMore
        text="Show 25"
        img={<img alt="Show more" src={showMore} />}
        subText={`${itemsToShow} of ${results.length}`}
        onShowMoreChange={handleShowMoreChange}
      />
    </div>
  )
}

export default Filter
