import {Link} from 'react-router-dom'
import {useState} from 'react'
import DatePicker from 'react-datepicker';  
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Book = () => {
  const [startDate, setStartDate] = useState(null);

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-black-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Booking Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Full name"/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email address</Label>
                <Input id="email"/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="number">Phone Number</Label>
                <Input id="number"/>
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="event-type">Choose Event Type</Label>
                <Select>
                  <SelectTrigger id="event-type">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="exhibition">Exhibition</SelectItem>
                    <SelectItem value="concert">Concert</SelectItem>
                    <SelectItem value="marriage">Marriage Events</SelectItem>
                    <SelectItem value="parties">Parties</SelectItem>
                    <SelectItem value="festival">Festival</SelectItem>
                    <SelectItem value="disco">Disco</SelectItem>
                    <SelectItem value="disco">Conference</SelectItem>
                    <SelectItem value="disco">Game Events</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="date">Event Date</Label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  placeholderText="Select date"
                  customInput={<Input id="calendar" placeholder="Select date"/>}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="number">No of people</Label>
                <Input id="number"/>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>
            <Link to='/Payment'>Book</Link>
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Book;
