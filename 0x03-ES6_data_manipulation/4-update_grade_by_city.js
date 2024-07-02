/**
 * Updates grades for students in a specific city.
 * @param {Array} studentList - List of all students.
 * @param {string} targetCity - The city to filter students by.
 * @param {Array} newGrades - List of new grades with student IDs.
 * @returns {Array} List of students in the target city with updated grades.
 */
function updateStudentGradeByCity(studentList, targetCity, newGrades) {
  return studentList
    .filter((student) => student.location === targetCity)
    .map((student) => {
      const matchingGrades = newGrades.filter(
        (grade) => grade.studentId === student.id,
      );

      return {
        ...student,
        grade: matchingGrades.length > 0 ? matchingGrades[0].grade : 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
