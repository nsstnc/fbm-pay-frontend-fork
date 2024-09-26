import { createContext, useState } from "react"

export const CardsContext = createContext()

export const CardsProvider = ({ children }) => {
  const [cardsList, setCards] = useState([])

  return (
    <CardsContext.Provider value={{ cardsList, setCards }}>
      {children}
    </CardsContext.Provider>
  )
}
