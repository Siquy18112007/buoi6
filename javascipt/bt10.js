let users = [{name: "An", age: 25}
     ,{name: "Bình", age: 30}
     , {name: "Cường", age: 28}];
let ten = users.find(ten => ten.name === "Bình");
let tuoi = users.findIndex(tuoi => tuoi.age === 28);
console.log("Đối tượng = ", ten);
console.log("Chỉ số = ", tuoi);