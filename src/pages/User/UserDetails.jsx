import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit, Plus, TrashIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const UserDetails = () => {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [users, setUsers] = useState([
    {
      userID: 'USR001',
      email: 'user1@example.com',
      eventType: 'Conference',
      password: 'password1',
    },
    {
      userID: 'USR002',
      email: 'user2@example.com',
      eventType: 'Festival',
      password: 'password2',
    },
    {
      userID: 'USR003',
      email: 'user3@example.com',
      eventType: 'Expo',
      password: 'password3',
    },
  ]);

  const [newUser, setNewUser] = useState({
    userID: '',
    email: '',
    eventType: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewUser({ ...newUser, [id]: value });
  };

  const handleAddUser = () => {
    setUsers([...users, { ...newUser, userID: `USR${(users.length + 1).toString().padStart(3, '0')}` }]);
    setNewUser({
      userID: '',
      email: '',
      eventType: '',
      password: '',
    });
    setOpen(false);
  };

  const handleEditUser = (user) => {
    setNewUser(user);
    setCurrentUserId(user.userID);
    setEditMode(true);
    setOpen(true);
  };

  const handleSaveChanges = () => {
    setUsers(users.map((user) => (user.userID === currentUserId ? newUser : user)));
    setNewUser({
      userID: '',
      email: '',
      eventType: '',
      password: '',
    });
    setEditMode(false);
    setOpen(false);
  };

  const handleDeleteUser = (userID) => {
    setUsers(users.filter((user) => user.userID !== userID));
  };

  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>User Details</CardTitle>
          <Button onClick={() => { setOpen(!open); setEditMode(false); }}>
            <Plus className='h-5 w-5 mr-2' /> Add User
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>User ID</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Event Type</TableHead>
                <TableHead>Password</TableHead>
                <TableHead className='flex justify-center'>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.userID}>
                  <TableCell className='font-medium'>{user.userID}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.eventType}</TableCell>
                  <TableCell>{user.password}</TableCell>
                  <TableCell>
                    <span className='w-full h-full flex justify-center items-center gap-3'>
                      <Edit
                        className='h-8 w-8 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-background rounded-md'
                        onClick={() => handleEditUser(user)}
                      />
                      <TrashIcon
                        className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md'
                        onClick={() => handleDeleteUser(user.userID)}
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
            <SheetTitle>{editMode ? 'Edit User' : 'Add User'}</SheetTitle>
          </SheetHeader>
          <div className='grid gap-4 py-4'>
            <div className='flex flex-col items-start gap-4'>
              <Label htmlFor='email' className='text-right'>
                Email
              </Label>
              <Input id='email' value={newUser.email} onChange={handleInputChange} className='col-span-3' />
            </div>
            <div className='flex flex-col items-start gap-4'>
              <Label htmlFor='eventType' className='text-right'>
                Event Type
              </Label>
              <Input id='eventType' value={newUser.eventType} onChange={handleInputChange} className='col-span-3' />
            </div>
            <div className='flex flex-col items-start gap-4'>
              <Label htmlFor='password' className='text-right'>
                Password
              </Label>
              <Input id='password' type='password' value={newUser.password} onChange={handleInputChange} className='col-span-3' />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1 gap-4'>
            <Button className='w-1/2 outline bg-red-400/90 hover:bg-red-400' onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button className='w-1/2' onClick={editMode ? handleSaveChanges : handleAddUser}>
              {editMode ? 'Save changes' : 'Add User'}
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default UserDetails;
