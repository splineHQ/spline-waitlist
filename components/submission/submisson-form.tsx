'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { postSubmisson } from '@spline/api'
import { Button, Input, toast } from '@spline/components'
import { submissionSchema } from '@spline/lib/validations/submission'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

type ValidationSchema = z.infer<typeof submissionSchema>

export default function SubmissionForm() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(submissionSchema),
  })

  const onSubmit: SubmitHandler<ValidationSchema> = async (formData: ValidationSchema) => {
    try {
      setLoading(true)
      await postSubmisson(formData).then(res => {
        if (res.data.status === 'success') {
          setLoading(false)
          router.push('/submitted')
        }
      })
    } catch (error) {
      setLoading(false)
      toast({ title: 'متاسفانه یک خطا رخ داده است', status: 'error' })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-[62px] flex w-[430px] flex-col space-y-[21px]">
        <Input
          {...register('name')}
          id="name"
          type="text"
          name="name"
          autoCapitalize="none"
          autoCorrect="off"
          placeholder="نام"
          leftContent="علی"
          error={errors.name?.message}
        />
        <Input
          {...register('email')}
          id="email"
          type="email"
          name="email"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
          placeholder="ایمیل"
          leftContent="ali@spline.ir"
          error={errors.email?.message}
        />
        <Button type="submit" loading={loading}>
          پیوستن
        </Button>
      </div>
    </form>
  )
}
