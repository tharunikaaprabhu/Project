import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@/context/AuthContext';
import authService from '@/services/AuthService';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await authService.login(usernameOrEmail, password);
      setAuth(data);
      toast.success('Login successful!');
      
      if (data.role === 'ADMIN') {
        navigate('/admin/dashboard');
      } else {
        navigate('/user/dashboard');
      }
    } catch (error) {
      toast.error('Invalid credentials');
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <Toaster position="bottom-right" />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="usernameOrEmail">Username or Email</Label>
                <Input 
                  id="usernameOrEmail" 
                  placeholder="Enter username or email" 
                  value={usernameOrEmail}
                  onChange={(e) => setUsernameOrEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  placeholder="Enter password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <CardFooter className="flex justify-between mt-4">
              <Button type="submit">Login</Button>
            </CardFooter>
            <p>Already have an account? 
              <Link to='/register'> Register</Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
