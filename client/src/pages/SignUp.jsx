import React, { useState} from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '@/components/myComponents/OAuth';
  
export default function SignUp() {
    const [formData, setFormData]= useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e)=>{
    setFormData({...formData, [e.target.id]:e.target.value});
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password){
      return setErrorMessage('Please fill all the fields!!');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
        const res = await fetch('/server/auth/signup',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if(data.success === false){
          setErrorMessage(data.message);
        }
        setLoading(false);
        if(res.ok){
          navigate('/');
        }
    } catch (error) {
        setErrorMessage(error.message);
        setLoading(false);
    }
  }
  return (
    <>
    <div className='flex justify-center items-center my-10 mx-auto max-w-6xl'>
        <div className='flex-auto w-72'>
            <img src='../images/SignIn_Image.png' alt="image" className='h-full w-full'/>
        </div>
        <Card className='flex-auto w-24 text-center'>
            <CardHeader>
                <CardTitle className='font-semibold text-4xl uppercase font-paci m-5'>Amicizia</CardTitle>
                <CardDescription>Enter your email, username and password to create an account</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='max-w-4xl w-full'>
                    <form onSubmit={handleSubmit}>
                        <OAuth/>
                        <p className='uppercase text-xs text-slate-500 m-3'>or continue with</p>
                        <div className='flex flex-col gap-2 mx-auto max'>
                            <Label className='text-lg self-start'>Email</Label>
                            <Input type='email' placeholder='Email' id='email' onChange={handleChange}/>
                            <Label className='text-lg self-start'>Username</Label>
                            <Input type='username' placeholder='Username' id='username' onChange={handleChange}/>
                            <Label className='text-lg self-start'>Password</Label>
                            <Input type='password' placeholder='Password' id='password' onChange={handleChange}/>
                        </div>
                        <div className='pt-5'>
                            <Button className='w-full uppercase text-md p-3 rounded-xl' type="submit">Sign Up</Button>
                        </div>
                    </form>
                </div>
            </CardContent>
            <CardFooter className='flex gap-2 items-center'>
                <p className='text-slate-500 text-sm'>Already have an account?</p>
                    <Link to='/' className='text-blue-500 font-semibold text-sm hover:underline'>SignIn</Link>
            </CardFooter>
        </Card>
      </div>
        {
          errorMessage && (
            <p>{errorMessage}</p>
          )
        }
    </>

  )
}
