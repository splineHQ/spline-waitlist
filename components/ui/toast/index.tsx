import { cn } from '@spline/lib'

import { ToastOptions as _ToastOptions, toast as hotToast } from 'react-hot-toast'

export type ToastStatus = 'error' | 'warning' | 'success' | 'info'

export type ToastOptions = {
  status?: ToastStatus
  duration?: _ToastOptions['duration']
  position?: _ToastOptions['position']
  title: string
}

const toastTheme = {
  error: 'text-rose-200',
  success: 'text-green-200',
  warning: 'text-amber-200',
  info: 'text-white',
}

export const toast = (options: ToastOptions) => {
  const { title, duration, position, status = 'info' } = options

  return hotToast.custom(
    t => (
      <div
        className={cn(
          'max-w-md rounded-xl border border-[#D9D9D9] bg-[#232323] p-2 font-[yekan-regular]  text-white shadow-[0px_-4px_0px_0px_#424457_inset]',
          {
            'animate-enter': t.visible,
          },
          {
            'animate-leave': !t.visible,
          },
          { [toastTheme[status]]: status },
        )}
      >
        <div className="flex flex-row items-center space-x-2">
          <div className="flex flex-col space-y-1 pl-4 pr-2">
            <p className="text-lg font-medium">{title}</p>
          </div>
        </div>
      </div>
    ),
    {
      duration,
      position,
    },
  )
}
