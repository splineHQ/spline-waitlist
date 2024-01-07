import { Card } from '@spline/components'
import { SocialLinks } from '@spline/shared'
import Image from 'next/image'
import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export default function Layout({ children }: IProps) {
  return (
    <>
      <div className="flex h-full w-full justify-between pb-[30px] lg:space-x-[30px] xl:space-x-[30px]">
        <div className="relative hidden h-full w-full border-b border-r border-[#D2EAE1] sm:hidden md:hidden lg:flex xl:flex">
          <Card variant="submitted" size="sm" classname="w-fit h-fit p-1 absolute -right-[31.5px] -bottom-[30px]">
            <Image width={20} height={20} src="/submisson/bezier.svg" alt="" />
          </Card>
        </div>
        <div className="hidden h-full w-full flex-shrink-0 border-x border-b border-[#D2EAE1] sm:hidden sm:w-full md:hidden md:w-full lg:flex lg:w-[50rem] xl:flex xl:w-[65rem]" />
        <div className="relative hidden h-full w-full border-b border-l border-[#D2EAE1] sm:hidden md:hidden lg:flex xl:flex">
          <Card variant="submitted" size="sm" classname="w-fit h-fit p-1 absolute -left-[31.5px] -bottom-[30px]">
            <Image width={20} height={20} src="/submisson/pentool.svg" alt="" />
          </Card>
        </div>
      </div>
      <div className="flex h-full w-full justify-between lg:space-x-[30px] xl:space-x-[30px]">
        <div className="relative hidden h-full w-full border-b border-r border-t border-[#D2EAE1] sm:hidden md:hidden lg:flex xl:flex">
          <Card variant="submitted" size="sm" classname="w-fit h-fit p-1 absolute -right-[31.5px] -bottom-[30px]">
            <Image width={20} height={20} src="/submisson/color-palette.svg" alt="" />
          </Card>
        </div>
        <div className="flex min-h-[40rem] w-full flex-shrink-0 items-center justify-center border-[#D2EAE1] sm:w-full md:w-full lg:w-[50rem] lg:border xl:w-[65rem] xl:border">
          {children}
        </div>
        <div className="relative hidden h-full w-full border-b border-l border-t border-[#D2EAE1] sm:hidden md:hidden lg:flex xl:flex">
          <Card variant="submitted" size="sm" classname="w-fit h-fit p-1 absolute -left-[31.5px] -bottom-[30px]">
            <Image width={20} height={20} src="/submisson/cursor.svg" alt="" />
          </Card>
        </div>
      </div>
      <div className="flex h-full w-full justify-between sm:pt-[30px] md:pt-[30px] lg:space-x-[30px] lg:pt-[30px] xl:space-x-[30px] xl:pt-[30px]">
        <div className="hidden h-full w-full border-r border-t border-[#D2EAE1] sm:hidden md:hidden lg:flex xl:flex" />
        <div className="flex h-full w-full flex-shrink-0 items-center justify-center border-[#D2EAE1] sm:w-full md:w-full lg:w-[50rem] lg:border xl:w-[65rem] xl:border">
          <div className="flex h-[180px] w-full items-center justify-center">
            <SocialLinks variant="submitted" />
          </div>
        </div>
        <div className="hidden h-full w-full border-b border-l border-t border-[#D2EAE1] sm:hidden md:hidden lg:flex xl:flex" />
      </div>
    </>
  )
}
