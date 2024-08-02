import Image from "next/image";
import { deleteCourseById, getAllCourses } from "../lib/api";
import { Course } from "../lib/components/course";
import styles from "../page.module.css"
import Link from "next/link";




export default function Home() {

    const items = getAllCourses()
    console.log(items)


    return (
        <div className={styles.row}>
            <p className="is-size-3">Choose course for you</p>
            {
                items.map(course => (
                    <div key={course.id}>
                        <div>
                            <Link href={`/courses/details/${course.id}`}>
                                <Course item={course} />
                                details
                            </Link>
                        </div>
                            <Link href={`/courses/edit/${course.id}`}>
                            edit
                            </Link>
                        <div>
                            <Link href={`/courses/delete/${course.id}`}>
                            delete
                            </Link>
                        </div>

                    </div>
                ))}
        </div>
    );
}
