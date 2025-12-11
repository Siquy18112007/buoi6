let students = [{name: "An", score: 8}, {name: "Bình", score: 7}];
students.push({name: "An", score: 9});
students.push({name: "Đức", score: 6});
students.push({name: "Huỳnh", score: 10});
students.push({name: "Thoại", score: 5});
students.push({name: "Phước", score: 8});
let removedStudent = students.pop();
console.log("Sinh viên bị xóa:", removedStudent);
students.sort((a, b) => b.score - a.score);
console.log("Danh sách sinh viên sau khi sắp xếp:");
for (let student of students) {
    console.log(student);
}