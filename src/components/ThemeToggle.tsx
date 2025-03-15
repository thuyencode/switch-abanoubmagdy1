import { Container } from './Container.tsx'
import { MoonIcon, SunIcon } from './icons/index.ts'
import { Switch } from './Switch.tsx'

// @ts-types="@types/react"
import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    switch (checked) {
      case true:
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
        break

      default:
        document.documentElement.classList.add('light')
        document.documentElement.classList.remove('dark')
        break
    }
  }, [checked])

  const toggle = () => {
    setChecked((prev) => !prev)
  }

  return (
    <Container className='gap-3'>
      <SunIcon className='dark:invert' />
      <Switch checked={checked} toggle={toggle} />
      <MoonIcon className='dark:invert' />
    </Container>
  )
}
