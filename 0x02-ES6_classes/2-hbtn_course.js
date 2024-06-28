class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * @param {String} name - The course title
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Course title must be a text string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  /**
   * @param {Number} length - Duration of the course
   */
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Course duration must be a numerical value');
    }
    this._length = length;
  }

  get length() {
    return this._length;
  }

  /**
   * @param {Array} students - List of enrolled students
   */
  set students(students) {
    if (students instanceof Array) {
      this._students = students;
    } else {
      throw new TypeError('Student list must be an array of names');
    }
  }

  get students() {
    return this._students;
  }
}
export default HolbertonCourse;
