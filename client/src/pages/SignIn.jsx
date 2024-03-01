import React, { useState } from 'react';
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
import { useDispatch} from 'react-redux';
import { signInFailure, signInStart, signInSuccess } from '@/redux/user/userSlice';
  
export default function SignIn() {
    const [formData, setFormData]= useState({});
  // const {loading, error: errorMessage} = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e)=>{
    setFormData({...formData, [e.target.id]:e.target.value});
  }
  console.log(formData);
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if (!formData.email || !formData.password){
      return dispatch(signInFailure('Please fill all the fields!!'));
    }
    try {
      dispatch(signInStart());
        const res = await fetch('/server/auth/signup',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if(data.success === false){
          dispatch(signInFailure(data.message));
        }
        if(res.ok){
          dispatch(signInSuccess(data));
          navigate('/');
        }
    } catch (error) {
        dispatch(signInFailure(error.message));
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
                <CardDescription>Enter your username and password to login</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='max-w-4xl w-full'>
                    <form onSubmit={handleSubmit}>
                        <div className='flex gap-4 mx-auto justify-evenly w-full'>
                            <Button variant='outline' className='border-blue-500 hover:bg-blue-500 hover:text-white'><span className='text-xl font-semibold mr-2'>G</span>Google</Button>
                            <Button variant='outline' className='border-blue-500 hover:bg-blue-500 hover:text-white'><span className='text-xl font-semibold mr-2'>f</span>Facebook</Button>
                        </div>
                        <p className='uppercase text-xs text-slate-500 m-3'>or continue with</p>
                        <div className='flex flex-col gap-2 mx-auto max'>
                            <Label className='text-lg self-start'>Username</Label>
                            <Input type='username' placeholder='Username' onChange={handleChange}/>
                            <Label className='text-lg self-start'>Password</Label>
                            <Input type='password' placeholder='Password' onChange={handleChange}/>
                        </div>
                        <div className='pt-5'>
                            <Button className='w-full uppercase text-md p-3 rounded-xl' type='submit'>Sign In</Button>
                        </div>
                    </form>
                </div>
            </CardContent>
            <CardFooter className='flex gap-2'>
                <p className='text-slate-500 text-sm'>Don't have an account?</p>
                <Link to='/sign-up' className='text-blue-500 font-semibold text-sm hover:underline'>SignUp</Link>
            </CardFooter>
        </Card>
    </div>
    </>

  )
}
