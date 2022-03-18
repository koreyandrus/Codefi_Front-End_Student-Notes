// Classes & Interfaces
var Student = /** @class */ (function () {
    function Student(first, last, courses) {
        this.first = first;
        this.last = last;
        this.courses = courses;
    }
    Student.prototype.enroll = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        console.log("this.courses:", this.courses);
        return this.courses.slice();
    };
    return Student;
}());
var studentOne = new Student("Will", "Wilder", ["Codefi Front-End Bootcamp"]);
studentOne.listCourses();
studentOne.enroll("Codefi Back-End Bootcamp");
studentOne.listCourses();
