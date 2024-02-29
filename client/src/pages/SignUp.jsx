import React from 'react';
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
import { Link } from 'react-router-dom';
  
export default function SignUp() {
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
                    <div className='flex gap-4 mx-auto justify-evenly w-full'>
                        <Button variant='outline' className='border-blue-500 hover:bg-blue-500 hover:text-white'><span className='text-xl font-semibold mr-2'>G</span>Google</Button>
                        <Button variant='outline' className='border-blue-500 hover:bg-blue-500 hover:text-white'><span className='text-xl font-semibold mr-2'>f</span>Facebook</Button>
                    </div>
                    <p className='uppercase text-xs text-slate-500 m-3'>or continue with</p>
                    <div className='flex flex-col gap-2 mx-auto max'>
                        <Label className='text-lg self-start'>Email</Label>
                        <Input type='email' placeholder='Email'/>
                        <Label className='text-lg self-start'>Username</Label>
                        <Input type='username' placeholder='Username'/>
                        <Label className='text-lg self-start'>Password</Label>
                        <Input type='password' placeholder='Password'/>
                    </div>
                    <div className='pt-5'>
                        <Button className='w-full uppercase text-md p-3 rounded-xl'>Sign Up</Button>
                    </div>
                </div>
            </CardContent>
            <CardFooter className='flex gap-2 items-center'>
                <p className='text-slate-500 text-sm'>Already have an account?</p>
                    <Link to='/' className='text-blue-500 font-semibold text-sm hover:underline'>SignIn</Link>
            </CardFooter>
        </Card>
    </div>
    </>

  )
}
