export default function getStudentIdsSum(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  return getListStudents.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
