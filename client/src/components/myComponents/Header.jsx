import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BellIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toggleTheme } from '@/redux/theme/themeSlice'


export default function Header() {
  const dispatch = useDispatch();
  const {currentUser} = useSelector((state)=> state.user);
  const {theme} = useSelector((state)=> state.theme);
  console.log(theme);
  return (
    <>
        <nav className='border-b-2 flex justify-between sm:px-10 px-3'>
        <div className='flex gap-10 m-3'>
          <Link to='/home'className='self-center whitespace-nowrap text-md sm:text-2xl font-semibold dark:text-white font-paci uppercase flex-1'>Amicizia</Link>
          <form>
          <Input type='text' placeholder='Search...' className='hidden lg:inline flex-1 w-60 border-blue-500'/>
        </form>
        </div>
        <div className='flex items-center gap-4'>
          <div className='flex gap-4 items-center'>
            <Button variant='ghost' className='hover:bg-blue-500 hover:text-white rounded-full hidden sm:inline' onClick={()=>dispatch(toggleTheme())}>
              {theme === 'light' ? <MoonIcon className='font-bold w-5 h-5'/> : <SunIcon className='font-bold w-5 h-5'/>}</Button>
            <Button variant='ghost' className='hover:bg-blue-500 hover:text-white rounded-full'><BellIcon className='font-bold w-5 h-5'/></Button>
          </div>
          <Avatar>
            <AvatarImage src={currentUser.profilePicture}/>
            <AvatarFallback>User</AvatarFallback>
        </Avatar>
        </div>
      </nav>
    </>
  )
}
