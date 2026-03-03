let student = {
    name: 'can',
    age: 29,
    email: 'canboz@hotmail.com',
    lesson: ['maths', 'chemical', 'physical'],
    login: function () {
        console.log("Student signed in successfully.");
    },

    logout: function () {
        console.log("Student logged out successfully.");
    },
    printLessons(){
     // console.log(lesson);
        console.log(this.lesson);
    }
}

student.printLessons();

student.login();

console.log(student);

student.logout();
