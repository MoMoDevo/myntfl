import prismadb from '@/lib/prismadb'
import { currentUser } from '@clerk/nextjs'
 import Link from "next/link"
import Image from 'next/image'
import { format } from "date-fns";
import { useMemo } from 'react'
import moment from "moment"
 

const Profile =async({ params }:{   params: { id: string } } ) => {
   
  const user=currentUser()
 
  const myUser=await prismadb.profile.findFirst({ 
    where:{ 
      id:params?.id

     }
   })
    
   

 
  
   
  return (
    <div className='w-full h-full flex flex-col '>
      <div className='w-full h-2/6 overflow-hidden'  style={{ backgroundImage: `url(${myUser?.image})` }}  >
      {myUser?.username}

   

      </div>
      <div className="flex w-full justify-between border-t-2 border-b-2">

      <div className="flex relative flex-col h-28">
        <div className="rounded-full w-12 h-12 absolute left-4 -top-4 pl-3 " style={{ backgroundImage: `url(${myUser?.profileImage})` }}>
        <p className='absolute '>{myUser?.name}</p>
        </div>
        <div className="flex flex-col mt-7 gap-3">
        <p >bio:{myUser?.bio}</p>
        <p >joined: {moment(myUser?.createdAt).format(
                              "MMMM Do YYYY"
                            )}</p>
        

        </div>


       
         
      </div>
      <div className="fle">
      <Link href={`/profile/${myUser?.id}/posts/nwe`} className='border-solid-'>new</Link>

      </div>


         
      </div>
      <div className="flex">
        <Link href={`/profile/${myUser?.id}/create`}>Create Post</Link>

      </div>

     
       
    </div>
  )
}

export default Profile