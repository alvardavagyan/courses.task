"use server"

import { createWriteStream } from "fs"
import { addCourse, editCourseById, InputCourse,deleteCourseById } from "../api"
import { redirect } from "next/navigation"


export const handleAdd=async (data:FormData)=>{
    let photo=data.get("cover") as File

    const filename=Date.now()+"."+photo.type.split("/").at(-1)
    const stream=createWriteStream("public/images/"+filename)

    const bufferedImage= await photo.arrayBuffer()
    stream.write(Buffer.from(bufferedImage))

    const course:InputCourse={
        name:data.get("name") as string,
        price:+(data.get("price") as string),
        duration:+(data.get("duration") as string),
        cover:"images/" + filename
    }
    addCourse(course)
    redirect("/courses")

}


export const handleEdit=async(id:number,data:FormData)=>{
   
    const course:Partial<InputCourse>={
        name:data.get("name") as string,
        price:+(data.get("price") as string),
        duration:+(data.get("duration") as string),
    }
    editCourseById(id,course)
    redirect("/courses")

}

export const handleDelete=async(id:number,data:FormData)=>{

    const course:Partial<InputCourse>={
        name:data.get("name") as string,
        price:+(data.get("price") as string),
        duration:+(data.get("duration") as string),
    }
    deleteCourseById(id)
    redirect("/courses")
}