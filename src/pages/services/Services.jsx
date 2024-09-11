import Menu from "../../generic/menu/Menu.jsx"
import appStyle from "../../app.module.css"
import Footer from "../../generic/footer/Footer.jsx"
import ServiceItems from "./items/ServiceItems.jsx"
import Preloader from "../../components/Preloader/preloader.jsx"
import React, { useState, useEffect } from "react"
import { useValue } from "../../generic/model/value.jsx"
import { $isMenuOpened } from "../../generic/model/menuModel.js"

const Services = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Array of image URLs or objects with `src` property
    const imageUrls = [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
      // Add more image URLs as needed
    ]

    const loadImages = () => {
      const loadedImages = []

      const handleImageLoad = () => {
        loadedImages.push(1)
        if (loadedImages.length === imageUrls.length) {
          setLoading(false)
        }
      }

      imageUrls.forEach((url) => {
        const img = new Image()
        img.src = url
        img.onload = handleImageLoad
        img.onerror = handleImageLoad // Handle error cases as well
      })
    }

    loadImages()
  }, [])

  //handleToggle
  const [opened] = useValue($isMenuOpened)

  if (loading) {
    return (
      <div className={appStyle.page}>
        <Menu />

        <div className={appStyle.main}>
          <h1 className={appStyle.pageTitle}>[FBM] Ecosystem Services</h1>
          <Preloader />

          <ServiceItems />

          <Footer />
        </div>
      </div>
    )
  }
  return (
    <div className={appStyle.page}>
      <Menu />

      <div className={`${appStyle.main} ${opened ? appStyle.active : ""}`}>
        <h1 className={appStyle.pageTitle}>[FBM] Ecosystem Services</h1>

        <ServiceItems />

        <Footer />
      </div>
    </div>
  )
}

export default Services
