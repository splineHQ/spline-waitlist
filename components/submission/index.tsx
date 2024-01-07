import Image from 'next/image'
import Layout from './layout'
import SubmissionForm from './submisson-form'

export default function Submission() {
  return (
    <main className="flex h-dvh w-full flex-col items-center justify-center bg-[#F9F7F2]">
      <Layout>
        <div className="flex flex-col items-center justify-center">
          <div
            dir="rtl"
            className="flex flex-col space-y-3 font-[yekan-bold] text-[22px] text-[#232323] sm:text-[38px] md:text-[38px] lg:text-[38px] xl:text-[38px]"
          >
            <div className="flex items-center justify-center">
              <h1>با اسپلاین به راحتی</h1>
              <Image
                className="pointer-events-none mx-2.5 w-[28px] select-none sm:w-[40px] md:w-[40px] lg:w-[40px] xl:w-[40px]"
                src="/submisson/union.svg"
                alt="union"
                width={39}
                height={39}
              />
              <h1>طرح های</h1>
            </div>
            <div className="flex items-center justify-center">
              <h1>گرافیکی</h1>
              <Image
                className="pointer-events-none mx-2.5 w-[28px] select-none sm:w-[40px] md:w-[40px] lg:w-[40px] xl:w-[40px]"
                src="/submisson/group.svg"
                alt="union"
                width={39}
                height={39}
              />
              <h1>حرفه‌ای بسازید</h1>
            </div>
          </div>
          <h3 className="mt-3 font-[yekan-bold] text-lg text-[#4C43F9] sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl">
            پیوستن به لیست انتظار
          </h3>
          <SubmissionForm />
        </div>
      </Layout>
    </main>
  )
}
