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
          {children}
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
    </>
  )
}
