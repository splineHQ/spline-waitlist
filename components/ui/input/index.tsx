'use client'

import { Case, Switch, cn } from '@spline/lib'
import React, { InputHTMLAttributes, ReactNode, forwardRef, useState } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  leftContent?: ReactNode | undefined
  error?: string | undefined
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void
}

const Input = forwardRef<HTMLInputElement, IProps>(
  ({ leftContent, error, type, onInput: parentOnInput, ...rest }: IProps, ref) => {
    const [leftContentVisibility, setLeftContentVisibility] = useState<boolean>(false)

    const handleOnInput = (event: React.FormEvent<HTMLInputElement>) => {
      const inputElement = event.target as HTMLInputElement
      // Add your additional logic here
      if (!inputElement.value.length) {
        setLeftContentVisibility(false)
      } else {
        setLeftContentVisibility(true)
      }

      // Call the parent's onInput event handler
      if (parentOnInput) {
        parentOnInput(event)
      }
    }

    return (
      <div dir="rtl" className="group font-[yekan-regular] text-xl">
        <div className="relative">
          <input
            ref={ref}
            autoComplete="true"
            className={cn(
              'w-full rounded-xl border border-[#D9D9D9] bg-[#FFFFFF] px-3 py-2 text-[#A7A7A7] shadow-[0px_-3px_0px_0px_#E0E0E0_inset] outline-none transition-all group-hover:bg-[#f8fafc]',
              { 'border-[#FB7185] shadow-[0px_3px_0px_0px_#FB7185]': error },
            )}
            type={type}
            onInput={handleOnInput}
            {...rest}
          />

          <div
            className={cn(
              'pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-[#BCBCBC]',
              {
                hidden: leftContentVisibility,
              },
            )}
          >
            {leftContent}
          </div>
        </div>
        <Switch>
          <Case condition={Boolean(error?.length)}>
            <p className="mt-2 text-end text-sm font-normal text-[#FB7185]">{error}</p>
          </Case>
        </Switch>
      </div>
    )
  },
)

export default Input
