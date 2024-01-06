import Image from 'next/image'

export default function Submitted() {
  return (
    <main
      dir="rtl"
      className="flex h-dvh w-full items-center justify-center bg-gradient-to-b from-[#EAF6F1] to-[#F8FCFA]"
    >
      <div className="flex flex-col items-center space-y-8">
        <Image width={89} height={89} src="/submitted/success-badge.svg" alt="success" />
        <div className="flex w-[573px] flex-col items-center space-y-4 text-center text-[#232323]">
          <h1 className="font-[yekan-bold] text-4xl">شما در لیست انتظار هستید</h1>
          <p className="font-[yekan-regular] text-2xl">
            از اینکه به لیست انتظار پیوستید متشکریم. لطفا منتظر دعوت نامه برای شروع باشید.
          </p>
        </div>
      </div>
    </main>
  )
}
