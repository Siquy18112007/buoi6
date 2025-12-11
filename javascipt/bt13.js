let stocks = [true, false, true];
let hetHang = stocks.some(hetHang => hetHang === false);
let conHang = stocks.every(conHang => conHang === true);
console.log("some = ", hetHang);
console.log("every = ", conHang);