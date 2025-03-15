// @ts-types="@types/react"
import { type ComponentProps, type PropsWithChildren } from 'react'
import { cn } from '../lib/utils.ts'

type Props = PropsWithChildren<Pick<ComponentProps<'div'>, 'className'>>

export const Container = ({ className, children }: Props) => (
  <div className={cn('flex items-center justify-center', className)}>
    {children}
  </div>
)
