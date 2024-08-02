import { getCourseById } from "@/app/lib/api"
import Image from "next/image"

interface IProps {
    params: { id: number }
}

export default function DetailsPage({params}: IProps) {

    const item = getCourseById(params.id)
    return <>
        <p> Course No. {item.id} </p>
        <Image
            src={`/${item.cover}`}
            alt={item.name}
            width={100}
            height={100}
        />
        <p>COURSE: {item.name}</p>
        <p>{item.price} AMD</p>
        <p>for {item.duration} month</p>
    </>
}