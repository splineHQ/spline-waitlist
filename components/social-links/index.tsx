import { cn } from '@spline/lib'
import Image from 'next/image'
import { ReactNode } from 'react'

export default function SocialLinks() {
  return (
    <div dir="ltr" className="flex flex-row">
      <a href="https://x.com/spline_ir" target="_blank">
        <Card classname="pl-12 pr-5 hover:opacity-70 transition-all">
          <div className="flex flex-row space-x-2">
            <div className="text-right font-[yekan-regular] text-xl">
              <h3 className="text-[#575757]">اینستاگرام</h3>
              <p className="text-[#57575761]">@spline_ir</p>
            </div>
            <Image width={48} height={48} src="/instagram.svg" alt="instagram.com" />
          </div>
        </Card>
      </a>
      <a href="https://www.instagram.com/spline_ir/" target="_blank">
        <Card classname="pl-12 pr-5 hover:opacity-70 transition-all">
          <div className="flex flex-row space-x-2">
            <div className="text-right font-[yekan-regular] text-xl">
              <h3 className="text-[#575757]">توییتر</h3>
              <p className="text-[#57575761]">@spline_ir</p>
            </div>
            <Image width={48} height={48} src="/x.svg" alt="x.com" />
          </div>
        </Card>
      </a>
    </div>
  )
}

function Card({ children, classname }: { children: ReactNode; classname?: string }) {
  return (
    <div className={cn('relative border border-[#D9D9D9] p-3', classname)}>
      <div className="absolute -right-2 -top-2 h-3.5 w-3.5 border border-[#D9D9D9] bg-[#F9F7F2]" />
      <div className="absolute -left-2 -top-2 h-3.5 w-3.5 border border-[#D9D9D9] bg-[#F9F7F2]" />
      <div className="absolute -bottom-2 -left-2 h-3.5 w-3.5 border border-[#D9D9D9] bg-[#F9F7F2]" />
      <div className="absolute -bottom-2 -right-2 h-3.5 w-3.5 border border-[#D9D9D9] bg-[#F9F7F2]" />
      {children}
    </div>
  )
}
