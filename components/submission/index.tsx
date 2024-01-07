import Image from 'next/image'
import Layout from './layout'
import SubmissionForm from './submisson-form'

export default function Submission() {
  return (
    <main className="flex h-dvh w-full flex-col items-center justify-center bg-[#F9F7F2]">
      <Layout>
        <div className="flex flex-col items-center justify-center">
          <div dir="rtl" className="flex flex-col space-y-3 font-[yekan-bold] text-[#232323]">
            <div className="flex items-center justify-center">
              <h1 className="text-[38px]">با اسپلاین به راحتی</h1>
              <Image
                className="pointer-events-none mx-2.5 w-[40px] select-none"
                src="/submisson/union.svg"
                alt="union"
                width={39}
                height={39}
              />
              <h1 className="text-[38px]">طرح های</h1>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-[38px]">گرافیکی</h1>
              <Image
                className="pointer-events-none mx-2.5 w-[40px] select-none"
                src="/submisson/group.svg"
                alt="union"
                width={39}
                height={39}
              />
              <h1 className="text-[38px]">حرفه‌ای بسازید</h1>
            </div>
          </div>
          <h3 className="mt-3 font-[yekan-bold] text-2xl text-[#4C43F9]">پیوستن به لیست انتظار</h3>
          <SubmissionForm />
        </div>
      </Layout>
    </main>
  )
}
