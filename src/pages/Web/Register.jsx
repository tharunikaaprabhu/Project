import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const Register = () => {
  return (
      <div className="h-full w-full flex justify-center items-center">

<Card className="w-[350px]">
<CardHeader>
 <CardTitle>Register</CardTitle>
</CardHeader>
<CardContent>
 <form>
   <div className="grid w-full items-center gap-4">
     <div className="flex flex-col space-y-1.5">
       <Label htmlFor="name">Name</Label>
       <Input id="name" placeholder="Enter name" required/>
     </div>
     <div className="flex flex-col space-y-1.5">
       <Label htmlFor="framework">Email</Label>
       <Input id="email" placeholder="Enter email" required />

     </div>
     <div className="flex flex-col space-y-1.5">
       <Label htmlFor="password">Password</Label>
       <Input id="password" placeholder="Enter password"/>
     </div>
     <div className="flex flex-col space-y-1.5">
       <Label htmlFor="password">Confirm Password</Label>
       <Input id="password" placeholder="Enter password" />
     </div>

   </div>
 </form>
</CardContent>
<CardFooter className="flex justify-between">
 <Button>Register</Button>
</CardFooter>
</Card>
    </div>
  )
}

export default Register


