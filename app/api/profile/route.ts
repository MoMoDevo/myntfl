import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs";
  

export async function POST(
    req: Request,
  ) {
    const {name,username,bio,email,image,profileImage}=await req.json()
    try {
        const user=await currentUser()
        
         const profile=await prismadb.profile.create({
              //@ts-ignore
            
            data:{name,username,bio,email,image,profileImage,userId:user?.id}
         } )
         
        
    } catch (error) {
        
    }
 }