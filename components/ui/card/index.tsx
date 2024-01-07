import { cn } from '@spline/lib'
import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  classname?: string
  size?: 'sm' | 'base'
  variant?: 'submisson' | 'submitted'
}

const theme = {
  submisson: 'border-[#D9D9D9] bg-[#F9F7F2]',
  submitted: 'border-[#D2EAE1',
  size: {
    sm: 'h-2.5 w-2.5',
    base: 'h-3.5 w-3.5',
  },
}

export default function Card({ children, classname, size = 'base', variant = 'submisson' }: IProps) {
  return (
    <div className={cn('relative border p-3', { [theme[variant]]: variant }, classname)}>
      <div
        className={cn(
          'absolute z-50 border bg-[#F8FCFA]',
          { [theme[variant]]: variant },
          {
            [theme.size[size]]: size,
          },
          {
            '-right-2 -top-2': size === 'base',
            '-right-1.5 -top-1.5': size === 'sm',
          },
        )}
      />
      <div
        className={cn(
          'absolute z-50 border bg-[#F8FCFA]',
          { [theme[variant]]: variant },
          {
            [theme.size[size]]: size,
          },
          {
            '-left-2 -top-2': size === 'base',
            '-left-1.5 -top-1.5': size === 'sm',
          },
        )}
      />
      <div
        className={cn(
          'absolute z-50 border bg-[#F8FCFA]',
          { [theme[variant]]: variant },
          {
            [theme.size[size]]: size,
          },
          {
            '-bottom-2 -left-2': size === 'base',
            '-bottom-1.5 -left-1.5': size === 'sm',
          },
        )}
      />
      <div
        className={cn(
          'absolute z-50 border bg-[#F8FCFA]',
          { [theme[variant]]: variant },
          {
            [theme.size[size]]: size,
          },
          {
            '-bottom-2 -right-2': size === 'base',
            '-bottom-1.5 -right-1.5': size === 'sm',
          },
        )}
      />
      {children}
    </div>
  )
}
