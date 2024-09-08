import { useState, useEffect } from "react"

export const handleWidth = () => {
  const [isWidth, setIsWidth] = useState()
  const [width, setWidth] = useState()

  useEffect(() => {
    const handleResize = () => {
      let maxWidthMobile = 500
      setWidth(window.innerWidth)
      setIsWidth(width > maxWidthMobile)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [width])

  return isWidth
}
