import Image from 'next/image'
import { Card } from '../../components'

interface IProps {
  variant?: 'submisson' | 'submitted'
}

export default function SocialLinks({ variant = 'submisson' }: IProps) {
  return (
    <div dir="ltr" className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row">
      <a href="https://www.instagram.com/spline_ir/" target="_blank">
        <Card variant={variant} classname="pl-12 pr-5 hover:opacity-70 transition-all">
          <div className="flex flex-row space-x-2">
            <div className="text-right font-[yekan-regular] text-xl">
              <h3 className="text-[#575757]">اینستاگرام</h3>
              <p className="text-[#57575761]">@spline_ir</p>
            </div>
            <Image width={48} height={48} src="/instagram.svg" alt="instagram.com" />
          </div>
        </Card>
      </a>
      <a href="https://x.com/spline_ir" target="_blank">
        <Card variant={variant} classname="pl-12 pr-5 hover:opacity-70 transition-all">
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
