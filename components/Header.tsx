"use client"

import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { boolean } from "zod"
interface HeaderProps{ 
    showbackarrow?:boolean;
    title:string

 }

const Header = ({ title,showbackarrow }:HeaderProps) => {
    const router=useRouter()
    const handelBakc=useCallback(()=>{ 
        router.back()
     },[router])
  return (
    <div className="flex gap-3 items-center h-8 shadow-sm">
        {showbackarrow &&  <div className="arrow">

<ArrowBigLeft onClick={()=>handelBakc()}/>
</div>}
       
        <div className="flex">

        <p>{ title }</p>
        </div>

    </div>
  )
}

export default Header