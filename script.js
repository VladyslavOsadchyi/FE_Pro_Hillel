// ДЗ № 16 - Конструктор сутності "Студент"
function Student(name, surname, birthYear, grades) {
  this.name = name;
  this.surname = surname;
  this.birthYear = birthYear;
  this.grades = grades;
  this.attendance = new Array(25).fill(undefined);
  this.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  };
  this.getAverageGrade = function () {
    if (this.grades.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    return sum / this.grades.length;
  };
  this.present = function () {
    const index = this.attendance.indexOf(undefined);
    if (index !== -1) {
      this.attendance[index] = true;
    }
  };
  this.absent = function () {
    const index = this.attendance.indexOf(undefined);
    if (index !== -1) {
      this.attendance[index] = false;
    }
  };
  this.summary = function () {
    const averageGrade = this.getAverageGrade();
    let presentCount = 0;
    let totalClasses = 0;
    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] !== undefined) {
        totalClasses++;
        if (this.attendance[i] === true) {
          presentCount++;
        }
      }
    }
    const attendanceRate = totalClasses === 0 ? 0 : presentCount / totalClasses;
    if (averageGrade > 90 && attendanceRate > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  };
}

const student1 = new Student("Іван", "Петренко", 2002, [95, 96, 94, 98, 97]);
for (let i = 0; i < 23; i++) {
  student1.present();
}
student1.absent();
student1.absent();

const student2 = new Student("Олена", "Іванова", 2001, [95, 88, 90, 88]);
for (let i = 0; i < 7; i++) {
  student2.present();
}
for (let i = 0; i < 3; i++) {
  student2.absent();
}

const student3 = new Student("Петро", "Сидоренко", 2000, [60, 65, 70]);
for (let i = 0; i < 2; i++) {
  student3.present();
}
for (let i = 0; i < 8; i++) {
  student3.absent();
}

console.log(
  student1.name,
  student1.surname,
  student1.getAge(),
  "років,",
  "Середній бал:",
  student1.getAverageGrade(),
  student1.summary()
);
console.log(
  student2.name,
  student2.surname,
  student2.getAge(),
  "років,",
  "Середній бал:",
  student2.getAverageGrade(),
  student2.summary()
);
console.log(
  student3.name,
  student3.surname,
  student3.getAge(),
  "років,",
  "Середній бал:",
  student3.getAverageGrade(),
  student3.summary()
);
