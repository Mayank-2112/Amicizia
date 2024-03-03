import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '@/firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '@/redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

export default function OAuth() {
    const auth = getAuth(app);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () =>{
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: 'select_account' })
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider)
            const res = await fetch('/server/auth/google', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    googlePhotoUrl: resultsFromGoogle.user.photoURL,
                }),
                });
            const data = await res.json()
            if (res.ok){
                dispatch(signInSuccess(data))
                navigate('/')
            }
        } catch (error) {
            console.log(error);
        }
    } 
  return (
    <Button type='button' variant='outline' className='border-blue-500 hover:bg-blue-500 hover:text-white w-full rounded-xl' onClick={handleGoogleClick}><span className='mr-2 font-bold text-md'>G</span>Continue with Google
    </Button>
  )
}