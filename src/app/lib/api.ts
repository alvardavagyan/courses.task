import Database from "better-sqlite3"

const db=new Database("courses.db")

export interface ICourse{
    id:number
    price:number
    duration:number
    name:string
    cover:string
}

export type InputCourse=Omit<ICourse,'id'>

export const getAllCourses=():ICourse[]=>{

    return db.prepare(`SELECT * FROM courses`).all() as ICourse[]

}

export const addCourse=(course:InputCourse)=>{

    db.prepare(`INSERT INTO courses(price,duration, name,cover)
        VALUES(@price,@duration,@name,@cover)  
        `).run(course)
}

export const getCourseById=(id:number):ICourse=>{
    return db.prepare(`
        SELECT * FROM courses WHERE id=?
        `).get(id) as ICourse

}

export const deleteCourseById=(id:number)=>{
     db.prepare(`
        DELETE  FROM courses WHERE id=?
        `).run(id) 

}

export const editCourseById=(id:number,body:Partial<InputCourse>)=>{

    return db.prepare(`
        UPDATE courses
        SET name=?,  price=?,  duration=? WHERE id=?
        `).run(body.name,body.price,body.duration,id)

}