import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
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
const Payment = () => {
  const location = useLocation();
  const bookingDetails = location.state;
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Here you would typically send paymentData to a payment gateway API
    console.log('Booking Details:', bookingDetails);
    console.log('Payment Details:', paymentData);
    alert('Payment Successful!');
    navigate('/booking-details', { state: { ...bookingDetails, ...paymentData } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Payment Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePayment}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" value={paymentData.cardNumber} onChange={handleChange} placeholder="Card Number"/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input id="expiryDate" value={paymentData.expiryDate} onChange={handleChange} placeholder="MM/YY"/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" value={paymentData.cvv} onChange={handleChange} placeholder="CVV"/>
              </div>
            </div>
            <CardFooter className="flex justify-between mt-4">
              <Button variant="outline" type="button" onClick={() => navigate('/book', { state: bookingDetails })}>Back</Button>
              <Button type="submit">
                <NavLink to='/Confirm'>Pay</NavLink>
                </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payment;
