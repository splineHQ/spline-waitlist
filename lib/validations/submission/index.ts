import { z } from 'zod'

export const submissionSchema = z.object({
  name: z.string().min(3, { message: 'لطفا نام خود را وارد کنی.' }),
  email: z.string().min(1, { message: 'لطفا ایمیل خود را وارد کنید.' }).email('ایمیل نا معتبر میباشد.'),
})
