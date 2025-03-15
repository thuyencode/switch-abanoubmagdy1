import { Switch } from './Switch.tsx'

// @ts-types="@types/react"
import { useState } from 'react'

export const SwitchDefaultController = () => {
  const [checked, setChecked] = useState(false)

  const toggle = () => {
    setChecked((prev) => !prev)
  }

  return <Switch checked={checked} toggle={toggle} />
}
