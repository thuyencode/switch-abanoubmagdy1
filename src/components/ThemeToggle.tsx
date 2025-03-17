import { Switch } from './Switch.tsx'

// @ts-types="@types/react"
import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (checked) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [checked])

  const toggle = () => {
    setChecked((prev) => !prev)
  }

  return <Switch checked={checked} toggle={toggle} />
}
