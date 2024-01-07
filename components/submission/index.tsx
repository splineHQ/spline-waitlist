import Image from 'next/image'
import { Card } from '..'
import SocialLinks from '../social-links'
import SubmissionForm from './submisson-form'

export default function Submission() {
  return (
    <main className="flex h-dvh w-full flex-col items-center justify-center bg-[#F9F7F2]">
      <div className="flex h-full w-full justify-between space-x-[30px] pb-[30px]">
        <div className="relative h-full w-full border-b border-r border-[#D9D9D9]">
          <Card size="sm" classname="w-fit h-fit p-1 absolute -right-[31.5px] -bottom-[30px]">
            <Image width={20} height={20} src="/submisson/bezier.svg" alt="" />
          </Card>
        </div>
        <div className="h-full w-[65rem] flex-shrink-0 border-x border-b border-[#D9D9D9]" />
        <div className="relative h-full w-full border border-b border-l border-[#D9D9D9]">
          <Card size="sm" classname="w-fit h-fit p-1 absolute -left-[31.5px] -bottom-[30px]">
            <Image width={20} height={20} src="/submisson/pentool.svg" alt="" />
          </Card>
        </div>
      </div>
      <div className="flex h-full w-full justify-between space-x-[30px]">
        <div className="relative h-full w-full border-b border-r border-t border-[#D9D9D9]">
          <Card size="sm" classname="w-fit h-fit p-1 absolute -right-[31.5px] -bottom-[30px]">
            <Image width={20} height={20} src="/submisson/color-palette.svg" alt="" />
          </Card>
        </div>
        <div className="flex min-h-[40rem] w-[65rem] flex-shrink-0 items-center justify-center border border-[#D9D9D9]">
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
        </div>
        <div className="relative h-full w-full border-b border-l border-t border-[#D9D9D9]">
          <Card size="sm" classname="w-fit h-fit p-1 absolute -left-[31.5px] -bottom-[30px]">
            <Image width={20} height={20} src="/submisson/cursor.svg" alt="" />
          </Card>
        </div>
      </div>
      <div className="flex h-full w-full justify-between space-x-[30px] pt-[30px]">
        <div className="h-full w-full border-r border-t border-[#D9D9D9]" />
        <div className="flex h-full w-[65rem] flex-shrink-0 items-center justify-center border border-[#D9D9D9]">
          <div className="flex h-[180px] w-full items-center justify-center">
            <SocialLinks />
          </div>
        </div>
        <div className="h-full w-full border-b border-l border-t border-[#D9D9D9]" />
      </div>
    </main>
  )
}
