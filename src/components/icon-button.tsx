import type { ComponentProps } from "react"

type IconButtonProps  = ComponentProps<'button'>

export function IconButton(props:IconButtonProps){
  return (
    <button className="justify-between items-center bg-gray-500 hover:bg-blue p-1.5 rounded-md font-semibold text-blue hover:text-gray-900 transition-colors duration-300 cursor-pointer"
    {...props}/>
    )
}