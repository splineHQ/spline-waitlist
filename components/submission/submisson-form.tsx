'use client'

import { useForm as useFormCarry } from '@formcarry/react'
import { Button, Input } from '@spline/components'
import { redirect } from 'next/navigation'

export default function SubmissionForm() {
  const { state, submit } = useFormCarry({
    id: process.env.NEXT_PUBLIC_FORMCARRY_ID as string,
    debug: false,
  })

  if (state.submitted) {
    redirect('/submitted')
  }

  return (
    <form onSubmit={submit}>
      <div className="mt-[62px] flex w-[430px] flex-col space-y-[21px]">
        <Input
          id="name"
          type="text"
          name="name"
          autoCapitalize="none"
          autoCorrect="off"
          placeholder="نام"
          leftContent="علی"
        />
        <Input
          id="email"
          type="email"
          name="email"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
          placeholder="ایمیل"
          leftContent="ali@spline.ir"
        />
        <Button type="submit" loading={state.submitting}>
          پیوستن
        </Button>
      </div>
    </form>
  )
}
