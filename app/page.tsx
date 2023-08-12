 import Header from '@/components/Header'
 import prismadb from '@/lib/prismadb'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'

const Home =async() => {
  const user=await currentUser()
 
  
  const hasProfile=await prismadb.profile.findFirst( { 
    where: { 
      userId:user?.id
     } 
   } )
   console.log(hasProfile)
    if(hasProfile) redirect (`/profile/${hasProfile.id}`)

    return( 
    <div>
    <Header title='Home' />
    <div className="flex flex-col">
      m
    </div>

 
     
   


    </div>
  )
}

export default Home