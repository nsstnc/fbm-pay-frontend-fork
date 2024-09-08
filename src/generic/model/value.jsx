import { useState, useEffect } from "react"

export const createValue = (initialValue) => {
  let value = initialValue
  const listeners = new Set()

  const get = () => value

  const set = (newValue) => {
    value = newValue
    listeners.forEach((listener) => listener(newValue))
  }

  const removeListener = (listener) => {
    listeners.delete(listener)
  }

  const addListener = (listener) => {
    listeners.add(listener)
    return removeListener
  }

  return {
    get,
    set,
    addListener,
    removeListener,
  }
}

export const useValue = (value) => {
  const [state, setState] = useState(value.get())
  useEffect(() => {
    value.addListener(setState)
  }, [value])
  return [state, value.set]
}
