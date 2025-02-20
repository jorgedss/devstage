import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type IconButtonProps = ComponentProps<'button'>

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        'justify-between items-center bg-gray-500 hover:bg-blue p-1.5 rounded-md font-semibold text-blue hover:text-gray-900 transition-colors duration-300 cursor-pointer',
        className
      )}
      {...props}
    />
  )
}
