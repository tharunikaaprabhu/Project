import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

const Confirm = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <Card className="w-[450px] shadow-lg">
        <CardHeader className="bg-green-100">
          <CardTitle className="text-green-700 text-center">Payment Successful!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="flex flex-col items-center">
            <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5-1a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p className="text-xl font-semibold">Thank you for your booking!</p>
            <p className="mt-2 text-gray-700">Your payment has been processed successfully.</p>
            <p className="mt-4">We appreciate your trust in us. Your event is now booked.</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="bg-green-500 hover:bg-green-700 text-white" onClick={() => navigate('/')}>Go to Home</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Confirm;
