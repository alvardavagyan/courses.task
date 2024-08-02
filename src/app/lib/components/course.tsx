"use client"

import Image from "next/image"
import { ICourse } from "../api"

interface Props{
    item:ICourse
}

export const   Course=({item}:Props)=>{
    if(item){
        return <div>
            <Image 
            src={`/${item.cover}`}
            alt={item.name}
            width={100}
            height={100}
            />
            
            <p>COURSE: {item.name}</p>
            <p>{item.price} AMD</p>
            <p>for {item.duration} month</p>
        </div>
    }

}