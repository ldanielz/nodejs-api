import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";


export function createCourse(req: Request, res: Response) {
  const course = CreateCourseService;

  course.execute({
    name: "NodeJs",
    duration: 10,
    educator: "Daniel"
  })

  return res.send()
}