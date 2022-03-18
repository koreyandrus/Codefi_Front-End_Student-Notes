// Classes & Interfaces
interface IStudent {
  first: string;
  last: string;
  enroll: (courseName: string) => void;
  listCourses: () => string[];
}

class Student {
  constructor(
    public first: string,
    public last: string,
    private courses: string[]
  ) {}

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    console.log("this.courses:", this.courses);
    return this.courses.slice();
  }
}

const studentOne = new Student("Will", "Wilder", ["Codefi Front-End Bootcamp"]);
studentOne.listCourses();
studentOne.enroll("Codefi Back-End Bootcamp");
studentOne.listCourses();
