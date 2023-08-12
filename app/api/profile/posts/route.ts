import prismadb from "@/lib/prismadb"
import { currentUser } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export async function POST(req:Request){
    const reqbody=await req.json()
    try {
        const user=currentUser()
        const {body,image,userId}=reqbody
        const post=await prismadb.post.create({
             //@ts-ignore
            data:{body,image,userId:user?.id}
       } )
       return NextResponse.json(post, {status:201})
        
    } catch (error) {
        return NextResponse.json("failed to create a post", {status:500})


        
    }
}