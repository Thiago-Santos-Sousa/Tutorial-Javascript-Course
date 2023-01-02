// have to acess to studants from data.js

const updateStudents = students.map(function (student) {
  //console.log(student);

  student.role = 'student';
  return student;
});

//console.log(updateStudents);

const highScores = students.filter(function (student) {
  /*if (student.score >= 90) {
    return student;
  }*/

  //if (student.score >= 80) return student;

  return student.score >= 80;
});

//console.log(highScores);

const especificId = students.find(function (item) {
  return item.id === 3;
});

//console.log(especificId);

//

const fruits = ['banana', 'orange'];

const random = fruits.find(function (fruit) {
  return fruit === 'orange';
});

//console.log(random);

const averageScore =
  students.reduce(function (scoresTotal, student) {
    //console.log(scoresTotal);
    return scoresTotal + student.score;
  }, 0) / students.length;
//console.log(averageScore);

//

const survey = students.reduce(function (survey, student) {
  //console.log(student.favoriteSubject);
  const favSubject = student.favoriteSubject;
  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1;
  } else {
    survey[favSubject] = 1;
  }
  return survey;
});

console.log(survey);
