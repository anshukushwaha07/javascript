
const course={

    courseName:"JavaScript",
    price:"999",
    courseInstructor:"Hitesh"


}

//course.courseInstructor // if we want to print multiple times to be written multiple times this statement 

const {courseInstructor :instructor }=course  // this is call object destructure 
//console.log(courseInstructor);
console.log(instructor);