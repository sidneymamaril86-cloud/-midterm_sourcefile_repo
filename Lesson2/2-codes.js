
class Student {
  constructor(name, scores) {
    this.name = name;
    this.scores = scores;
  }

 
  getAverage() {
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++) {
      sum += this.scores[i];
    }
    return sum / this.scores.length;
  }

 
  getLetterGrade() {
    const avg = this.getAverage();
    if (avg >= 90) {
      return "A";
    } else if (avg >= 80) {
      return "B";
    } else if (avg >= 70) {
      return "C";
    } else if (avg >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
}


function analyzeClass(students) {
  console.log("------- STUDENT REPORT -------");

  let totalClassAverageSum = 0;
  let topStudent = null;
  let highestAverage = -1;

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const avg = student.getAverage();
    const letterGrade = student.getLetterGrade();

    
    console.log(`${student.name} - Average: ${avg.toFixed(1)} | Grade: ${letterGrade}`);

   
    totalClassAverageSum += avg;

   
    if (avg > highestAverage) {
      highestAverage = avg;
      topStudent = student;
    }
  }

  const classAverage = totalClassAverageSum / students.length;

  console.log("------------------------------");
  console.log(`Class Average: ${classAverage.toFixed(1)}`);
  if (topStudent) {
    console.log(`Top Student: ${topStudent.name} with ${highestAverage.toFixed(1)}`);
  }
}


const studentData = [
  { name: "Lany", scores: [85, 90, 92] },
  { name: "Bongbung", scores: [70, 75, 68] },
  { name: "Dutherthe", scores: [95, 98, 92] },
  { name: "Pico", scores: [55, 60, 58] }
];

const studentInstances = studentData.map(data => new Student(data.name, data.scores));
analyzeClass(studentInstances);