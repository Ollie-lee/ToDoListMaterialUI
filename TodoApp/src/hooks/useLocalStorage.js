import React, { useState, useEffect } from 'react'

export default function useLocalStorage(key, defaultVal) {
  // functionality: useState + sync localStorage

  // make peace of state based off value in localStorage or default
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key)
        || String(defaultVal)
      )
    } catch (error) {
      val = defaultVal
    }
    return val;
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, setState]
}