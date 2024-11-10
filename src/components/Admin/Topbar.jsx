import { ModeToggle } from "../mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const Topbar = () => {
  return (
    <div className='h-[8vh] w-full bg-primary/5 flex justify-center items-center'>
            <div className='w-[90%] flex items-center justify-end gap-4'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcxn.png" alt="@shadcn" />
                    <AvatarFallback>EO</AvatarFallback>
                </Avatar>
                <ModeToggle/>
            </div>
        </div>
  )
}

export default Topbar