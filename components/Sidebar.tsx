 "use client"
import { SignOutButton, currentUser, useAuth } from '@clerk/nextjs'
import { Bell, Twitter, Menu, Baby, JapaneseYen, User as LucideIcon, User, Home, LogOut } from 'lucide-react'
import Link from 'next/link'
import { useParams, usePathname } from "next/navigation"
const Sidebar = () => {
  const { userId }=useAuth()
  const pathname=usePathname()
  const params=useParams()
   const items=[
    {label:"Notifications",href:"/notifications",icon:Bell,active:pathname==="/notifications"},
     {label:"Profile",href: `/profile/${params.profileId}`,active:pathname=== `/profile/${params.profileId}`,icon:User}, {label:"Home",href:"/",active:pathname==="/",icon:Home}

  ]
  return (
    <div className='justify-center m-x-auto w-full'>
    <Twitter color='blue' size={40} className='text-center mx-auto'/>
    <div className="flex flex-col">
    {items.map((item)=>(
      
      
        <Link className={item.active? "underline":""} key={item.label} href={item.href}>
       <div className=" mx-auto mr-4 flex w-3/5">
        <item.icon/>
        {item.label}

       </div>
         </Link>
       
      
        
        
 
    ))}
    <div className="mr-4 w-3/5 mx-auto">
     

    { userId &&  <SignOutButton><LogOut/></SignOutButton> }
    </div>

   


    </div>

    </div>
  )
}

export default Sidebar