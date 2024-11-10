import { Facebook, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <div className='absolute bottom-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center bg-primary/5 border t-2 border-primary  bg-gradient-to-r from-primary via-secondary to-tertiary shadow-lg'>
    <div className='h-full w-1/4 flex flex-row justify-center items-center text-xl font-bold text-primary'>
      © 2024
    </div>
    <div className='h-full w-2/4 flex flex-row justify-end items-center text-xl font-bold text-primary gap-8'>
      <a href='google.com' target='_blank' className='h-8 w-8 rounded-md text-primary hover:bg-primary/20 flex justify-end items-center'>
        <Facebook className='h-6 w-6'/>
      </a>

      <a href='google.com' target='_blank' className='h-8 w-8 rounded-md text-primary hover:bg-primary/20 flex justify-end items-center'>
        <Twitter className='h-6 w-6'/>
      </a>
    </div>
    </div>
  )
}

export default Footer