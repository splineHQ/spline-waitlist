'use client'

import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge as twMergeOriginal } from 'tailwind-merge'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string | undefined
  children: ReactNode
  disabled?: boolean
  loading?: boolean
  outline?: boolean
  transparent?: boolean
  fullSized?: boolean
  rtl?: boolean
  lucid?: boolean
  spanClassname?: string
}

function Button({
  children,
  className,
  disabled = false,
  loading = false,
  outline = false,
  transparent = false,
  fullSized = false,
  rtl = false,
  lucid = false,
  ...rest
}: IButtonProps) {
  return (
    <button
      disabled={disabled}
      type="button"
      className={twMergeOriginal(
        clsx(
          'flex flex-row-reverse items-center justify-center space-x-1 rounded-xl border border-[#D9D9D9] bg-[#232323] px-2 py-1.5 font-[yekan-regular] text-xl text-white shadow-[0px_-4px_0px_0px_#424457_inset] transition-all',
          { 'flex-row space-x-reverse': rtl },
          { 'bg-transparent': outline },
          { 'w-full': fullSized },
          { 'bg-opacity-25 hover:bg-opacity-40': lucid },
          { 'border-transparent bg-transparent hover:bg-inherit': transparent },
          className,
        ),
      )}
      {...rest}
    >
      {children}
      {loading && (
        <div>
          <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}
    </button>
  )
}

export default Button
