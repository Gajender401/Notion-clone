'use client'
import { useUserAuth } from "../src/context/UserAuthContext";
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader/Loader';

export default function Main() {

  const router = useRouter();
  const { user } = useUserAuth();


  if (user===undefined) {
    return <div><Loader /></div>
  }

  if (!user) {
    router.push("/login")    
    return <div><Loader /></div>
  } else {
    if (!user.emailVerified) {
      router.push("/signup/verify")
      return <div><Loader /></div>
    } else {
      router.push('/hghjnjg')
      return <div><Loader /></div>
    }

  }
}
