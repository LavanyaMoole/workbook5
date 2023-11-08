let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git", Location: "Classroom 7",
        StartDate: "09/08/22", Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript", Location: "Classroom 9",
        StartDate: "11/22/22", Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java", Location: "Classroom 1", StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases", Location: "Classroom 7",
        StartDate: "03/16/23", Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular", Location: "Classroom 1", StartDate: "04/25/23",
        Fee: "50.00",
    }
];

function getCourse(Course){
    return Course.CourseId=="PROG200";
}
function getTitle(Course){
return Course.CourseId=="PROJ500";
}
function feeLessthan50(Course){
let fee=Number(Course.Fee);
return fee<=50;
}
function getClassroom1Classes(Course){
    return Course.Location=="Classroom 1"
}
// let Course=courses.find(getCourse);

let Course=courses.find(Course=>Course.CourseId=="PROJ500")
console.log(Course)
let courseStartdate=Course.StartDate;
console.log(`course ${Course.CourseId} starts in ${courseStartdate}`);

let title=courses.find(getTitle).Title;
console.log(`course Title of PROJ5OO ${title}`);
let courseFeeLessthan50=courses.filter(feeLessthan50);
console.log(`classes with fee of 50 or less`)
console.table(courseFeeLessthan50);

let classroom1Classes=courses.filter(getClassroom1Classes);
console.log(`classroom 1 classes`);
console.table(classroom1Classes);