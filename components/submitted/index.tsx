import Image from 'next/image'
import Layout from './layout'

export default function Submitted() {
  return (
    <main className="flex h-dvh w-full flex-col items-center justify-center bg-gradient-to-b from-[#EAF6F1] to-[#F8FCFA]">
      <Layout>
        <div dir="rtl" className="flex flex-col items-center space-y-8">
          <Image width={89} height={89} src="/submitted/success-badge.svg" alt="success" />
          <div className="flex w-full flex-col items-center space-y-4 text-center text-[#232323] sm:w-[573px] md:w-[573px] lg:w-[573px] xl:w-[573px]">
            <h1 className="font-[yekan-bold] text-4xl">شما در لیست انتظار هستید</h1>
            <p className="font-[yekan-regular] text-2xl">
              از اینکه به لیست انتظار پیوستید متشکریم. لطفا منتظر دعوت نامه برای شروع باشید.
            </p>
          </div>
        </div>
      </Layout>
    </main>
  )
}
