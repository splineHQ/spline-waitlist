import Image from 'next/image'
import { Card } from '..'
import SocialLinks from '../../shared/social-links'

export default function Submitted() {
  return (
    <main className="flex h-dvh w-full flex-col items-center justify-center bg-gradient-to-b from-[#EAF6F1] to-[#F8FCFA]">
      <div className="flex h-full w-full justify-between space-x-[30px] pb-[30px]">
        <div className="relative h-full w-full border-b border-r border-[#D2EAE1]">
          <Card
            variant="submitted"
            size="sm"
            classname="w-fit h-fit p-1 absolute border-[#D2EAE1] -right-[31.5px] -bottom-[30px]"
          >
            <Image width={20} height={20} src="/submisson/bezier.svg" alt="" />
          </Card>
        </div>
        <div className="h-full w-[65rem] flex-shrink-0 border-x border-b border-[#D2EAE1]" />
        <div className="relative h-full w-full border border-b border-l border-[#D2EAE1]">
          <Card
            variant="submitted"
            size="sm"
            classname="w-fit h-fit p-1 absolute border-[#D2EAE1] -left-[31.5px] -bottom-[30px]"
          >
            <Image width={20} height={20} src="/submisson/pentool.svg" alt="" />
          </Card>
        </div>
      </div>
      <div className="flex h-full w-full justify-between space-x-[30px]">
        <div className="relative h-full w-full border-b border-r border-t border-[#D2EAE1]">
          <Card
            variant="submitted"
            size="sm"
            classname="w-fit h-fit p-1 absolute border-[#D2EAE1] -right-[31.5px] -bottom-[30px]"
          >
            <Image width={20} height={20} src="/submisson/color-palette.svg" alt="" />
          </Card>
        </div>
        <div className="flex min-h-[34rem] w-[65rem] flex-shrink-0 items-center justify-center border border-[#D2EAE1]">
          <div dir="rtl" className="flex flex-col items-center space-y-8">
            <Image width={89} height={89} src="/submitted/success-badge.svg" alt="success" />
            <div className="flex w-[573px] flex-col items-center space-y-4 text-center text-[#232323]">
              <h1 className="font-[yekan-bold] text-4xl">شما در لیست انتظار هستید</h1>
              <p className="font-[yekan-regular] text-2xl">
                از اینکه به لیست انتظار پیوستید متشکریم. لطفا منتظر دعوت نامه برای شروع باشید.
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full border-b border-l border-t border-[#D2EAE1]">
          <Card
            variant="submitted"
            size="sm"
            classname="w-fit h-fit p-1 absolute border-[#D2EAE1] -left-[31.5px] -bottom-[30px]"
          >
            <Image width={20} height={20} src="/submisson/cursor.svg" alt="" />
          </Card>
        </div>
      </div>
      <div className="flex h-full w-full justify-between space-x-[30px] pt-[30px]">
        <div className="h-full w-full border-r border-t border-[#D2EAE1]" />
        <div className="flex h-full w-[65rem] flex-shrink-0 items-center justify-center border border-[#D2EAE1]">
          <div className="flex h-[180px] w-full items-center justify-center">
            <SocialLinks variant="submitted" />
          </div>
        </div>
        <div className="h-full w-full border-b border-l border-t border-[#D2EAE1]" />
      </div>
    </main>
  )
}
