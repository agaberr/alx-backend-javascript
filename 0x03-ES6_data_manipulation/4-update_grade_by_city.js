export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.city === city)
    .map((student) => {
      const newGrade = newGrades.find(({ studentId }) => studentId === student.id);
      if (newGrade) {
        return { ...student, grade: newGrade.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}
