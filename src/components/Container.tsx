// @ts-types="@types/react"
import { type PropsWithChildren } from 'react'

export const Container = ({ children }: PropsWithChildren) => (
  <div className='flex h-dvh w-dvw flex-col items-center justify-center gap-5'>
    {children}
  </div>
)
