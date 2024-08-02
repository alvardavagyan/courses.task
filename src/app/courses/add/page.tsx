import { handleAdd } from "@/app/lib/actions/course-actions";
import { ImagePicker } from "@/app/lib/components/image-picker";


export default function Page() {
     return <>
        <p className="is-size-4">Add Course</p>

        <div className="columns">
            <div className="column is-two-fifths">
                <form className="box my-5" action={handleAdd} >
                    <div className="field my-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="enter a name"
                            className="input is-dark"
                        />
                    </div>

                    <div className="field my-4">
                        <input
                            type="text"
                            name="price"
                            placeholder="enter a price"
                            className="input is-dark"
                        />
                    </div>

                    <div className="field my-4">
                        <input
                            type="text"
                            name="duration"
                            placeholder="enter a duration"
                            className="input is-dark"
                        />
                    </div>

                    <div className="field my-4">
                        <ImagePicker/>
                    </div>


                    <div className="field my-4">
                        <button className="button is-success">add</button>
                    </div>

                </form>
            </div >
        </div >
    </>
}