"use client"

import * as z from "zod"
import axios from "axios"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { Trash } from "lucide-react"
import { Post } from "@prisma/client"
import { useParams, useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

 
import ImageUpload from "./ImageUpload"

const formSchema = z.object({
  name: z.string().min(1),
  username: z.string().min(1),
  bio: z.string().min(1),
  email: z.string().min(1),

  profileImage: z.string().min(1),
  image: z.string().min(1),
  
});

 
 

 const BillboardForm = ({
  
}) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

 

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      bio: "",
      email: "",
      profileImage:"",
      image:"",
   
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      
  
    setLoading(true)
   
    
        await axios.post("/api/profile", values);
        setLoading(false)
      } catch (error) {

      
      }
      
    
  };

  

  return (
    <>
     
 
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          <FormField
              control={form.control}
              name="profileImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>profile Image</FormLabel>
                  <FormControl>
                    <ImageUpload 
                      value={field.value ? [field.value] : []} 
                      disabled={loading} 
                      onChange={(url) => field.onChange(url)}
                      onRemove={() => field.onChange('')}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
               <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>image</FormLabel>
                  <FormControl>
                    <ImageUpload 
                      value={field.value ? [field.value] : []} 
                      disabled={loading} 
                      onChange={(url) => field.onChange(url)}
                      onRemove={() => field.onChange('')}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ttile</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>username</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>bio</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Bio" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>email</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
         
          <Button   className="ml-auto" type="submit">
            Create Profile
          </Button>
        </form>
      </Form>
    </>
  );
};
export default  BillboardForm