import { handleDelete } from "@/app/lib/actions/course-actions"
import { getCourseById } from "@/app/lib/api"

interface IProps {
    params: { id: number }
}
export default function DelPage({ params }: IProps) {
    const course = getCourseById(params.id)

    return <>
       <div className="columns">
            <div className="column is-two-fifths">
                <form className="box my-5" action={handleDelete.bind(null,params.id)}  >
                    <div className="field my-4">
                        <input
                            type="text"
                            name="name"
                            className="input is-dark"
                            defaultValue={course.name}
                        />
                    </div>

                    <div className="field my-4">
                        <input
                            type="text"
                            name="price"
                            className="input is-dark"
                            defaultValue={course.price}

                        />
                    </div>

                    <div className="field my-4">
                        <input
                            type="text"
                            name="duration"
                            className="input is-dark"
                            defaultValue={course.duration}

                        />
                    </div>

                    <div className="field my-4">
                        <button className="button is-success">delete course</button>
                    </div>

                </form>
            </div >
        </div >

    </>
}