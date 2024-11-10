import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit, Plus, TrashIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const AdminUser = () => {
  const [open, setOpen] = useState(false);
  const [events, setEvents] = useState([
    {
      eventID: 'EVT001',
      eventName: 'Conference 2024',
      eventStatus: 'Scheduled',
      eventDate: '2024-08-01',
      attendees: 150,
    },
    {
      eventID: 'EVT002',
      eventName: 'Music Festival',
      eventStatus: 'Completed',
      eventDate: '2024-07-15',
      attendees: 500,
    },
    {
      eventID: 'EVT003',
      eventName: 'Art Expo',
      eventStatus: 'Cancelled',
      eventDate: '2024-09-10',
      attendees: 0,
    },
    {
      eventID: 'EVT004',
      eventName: 'Tech Meetup',
      eventStatus: 'Scheduled',
      eventDate: '2024-08-20',
      attendees: 200,
    },
    {
      eventID: 'EVT005',
      eventName: 'Food Fair',
      eventStatus: 'Completed',
      eventDate: '2024-06-30',
      attendees: 300,
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    eventID: '',
    eventName: '',
    eventStatus: '',
    eventDate: '',
    attendees: 0,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewEvent({ ...newEvent, [id]: value });
  };

  const handleAddEvent = () => {
    setEvents([...events, { ...newEvent, eventID: `EVT${(events.length + 1).toString().padStart(3, '0')}` }]);
    setNewEvent({
      eventID: '',
      eventName: '',
      eventStatus: '',
      eventDate: '',
      attendees: 0,
    });
    setOpen(false);
  };

  const handleDeleteEvent = (eventID) => {
    setEvents(events.filter((event) => event.eventID !== eventID));
  };

  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Events</CardTitle>
          <Button onClick={() => setOpen(!open)}>
            <Plus className='h-5 w-5 mr-2' /> Add Event
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>Event ID</TableHead>
                <TableHead>Event Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Attendees</TableHead>
                <TableHead className='flex justify-center'>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.eventID}>
                  <TableCell className='font-medium'>{event.eventID}</TableCell>
                  <TableCell>{event.eventName}</TableCell>
                  <TableCell>{event.eventStatus}</TableCell>
                  <TableCell>{event.eventDate}</TableCell>
                  <TableCell>{event.attendees}</TableCell>
                  <TableCell>
                    <span className='w-full h-full flex justify-center items-center gap-3'>
                      <Edit className='h-8 w-8 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-background rounded-md' />
                      <TrashIcon
                        className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md'
                        onClick={() => handleDeleteEvent(event.eventID)}
                      />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={open}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add Event</SheetTitle>
          </SheetHeader>
          <div className='grid gap-4 py-4'>
            <div className='flex flex-col items-start gap-4'>
              <Label htmlFor='eventName' className='text-right'>
                Event Name
              </Label>
              <Input id='eventName' value={newEvent.eventName} onChange={handleInputChange} className='col-span-3' />
            </div>
            <div className='flex flex-col items-start gap-4'>
              <Label htmlFor='eventDate' className='text-right'>
                Event Date
              </Label>
              <Input id='eventDate' type='date' value={newEvent.eventDate} onChange={handleInputChange} className='col-span-3' />
            </div>
            <div className='flex flex-col items-start gap-4'>
              <Label htmlFor='eventStatus' className='text-right'>
                Event Status
              </Label>
              <Input id='eventStatus' value={newEvent.eventStatus} onChange={handleInputChange} className='col-span-3' />
            </div>
            <div className='flex flex-col items-start gap-4'>
              <Label htmlFor='attendees' className='text-right'>
                Attendees
              </Label>
              <Input id='attendees' type='number' value={newEvent.attendees} onChange={handleInputChange} className='col-span-3' />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1 gap-4'>
            <Button className='w-1/2 outline bg-red-400/90 hover:bg-red-400' onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button className='w-1/2' onClick={handleAddEvent}>
              Save changes
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminUser;
