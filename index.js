console.log('Hello,word');


//1.Khai báo biến
//var/ let/ const
// Từ khóa+ (tên biến) = Giá trị khởi tạo

// var name = "Hau";
// console.log(name);
// name = "Duc Hau";
// console.log(name);

// var/ let/ const (hằng số)

// const age = 27;
// console.log(age);
// age = 28;
// console.log(age);

// var/ let

//2. Nhận input từ bàn phím
// let userInput = prompt("câu hỏi định hướng người dùng sử dụng");
// console.log(userInput);

// let a = Number(prompt("nhập giá trị a"));

// let b = Number(prompt("nhập giá trị b"));

// let sum = a + b;
// console.log(sum);

//3. Data type (String, Numer) - Primitive type (kiểu dữ liệu nguyên thủy)
// String
// template string : dấu `

//Numer (số) 
// const age = 1;
// const a = 10;
// const b = 20;
// console.log('age');

// //Toán từ(+ - * /)
// console.log (a * b);

//Câu lệnh If/else

// 
// 
// if (condition) {
//     //logic
// } else if (condition1) {
//     //logic2
// }

// //Boolean (true/false)
// let status = false;
// console.log(status);

// //Mệnh đề so sánh
// // == (so sánh bằng), != (so sánh khác),> ,<=, <, <=
// console.log(1 ==1);
// console.log(1 != "1");

// console.log(1>=1);

// // && (And), || (Or)
// console.log(1 > 3 || 1 <=1);

//Ex: Cho người dùng nhập vào chiều cao (cm), cân nặng(kg)
// tính chỉ số BMI
// Nếu BMI  < 18,in ra màn hình console- gầy


// let weight = Number( prompt ('nhập cân nặng(kg)'));
// let height = Number( prompt ("nhập chiều cao(cm)"));
// height = height / 100;
// let BMI = weight/(height**2);
// console.log(BMI)
// if (BMI < 18) {
// console.log('Quá gầy');
// } else if (BMI >= 18 && BMI <=25) {
//     console.log('Béo');
// }


// 5.Loop (Vòng lặp) - (while/for)
// while -cho phép lặp lại 1 đoạn logic code nào dó số lần lặp ko biết trước

// for -cho phép lặp lại 1 đoạn logic code nào dó số lần lặp biết trước

// while(condition){
//     // logic
// }

// while (1 === 1) {
//     console.log("Hello world");
// }

// let i = 0;
// while( i < 5){
//     console.log("Hello world");
//     i = i + 1;

// lần lặp 1;i = 0, 0 < 5(true) ,In ra lần 1 ,i = 0 + 1 = 1;
// lần lặp 2:i = 1, 1 < 5(true) ,In ra lần 2 ,i= 1 + 1 = 2;
// lần lặp 3:i = 2. 2 < 5(true) ,In ra lần 3 ,i= 2 + 1 = 3;
// Lần lặp 6 : i =5 (false), ko thực hiên logic;

//EX: Sử dụng vòng lặp + if.esle
// in ra các số từ 1 đến 10
// Số lẻ in ra là (1 - số lẻ ,3 - số lẻ...)
// số chẵn thì in ra là (2 - số chăn, 4 - số chăn)

// let i = 1;
// while (i <=10){
//     console.log (i);
//     i = i + 1;
// }

// let i = 1;
// while (i <=10){
//     console.log (i);
//     i = i + 1;

//     if (i % 2 == 0){
//         console.log(i + '-sô chẵn');
//     } else {
//             console.log(i + '-số lẻ');
//         }

// let n = Number(prompt("Người dùng nhập giá trị n"));
// console.log(n);
// let A = 0;
// let i = 1;

// while (i <= n) {
//     A = A + i;
//     i = i + 1;

// }
// console.log('A = ' + A)
// let n = Number(prompt("Người dùng nhập giá trị n"));
// console.log(n);
// let A = 1;
// let i = 1;

// while (i <= n) {
//     A = A * i;
//     i = i + 1;

// }
// console.log ('A = ' + A)

// let n = Number(prompt("Người dùng nhập giá trị n"));
// console.log(n);
// let A = 0;
// let i = 1;
// while (i <= n) {
//     A = A + (i**2);
//     i = i + 1;
// }
// console.log ('A = ' + A)

// let n = Number(prompt("Người dùng nhập giá trị n"));
// console.log(n);
// let A = 0;
// let i = 1;
// while (i <= n){
//     A = A + 1 / i;
//     i++;

// }
// console.log ('A = ' + A);

// let secret = 50;
// let guess = Number(prompt('Nhap so cua ban(1-100): '));

// let loop = true;

// while(loop === true){
//     if(guess === secret){
//         alert('Chuc mung');
//         loop = false;
//         // break;
    
//     } else if(guess > secret){
//         guess = Number(prompt('Lon hon,hay thu lai'));

//     } else{
//         guess = Number(prompt('Nho hon,hay thu lai'));
//     }
// }

// for(let i = 0; i < 10; i = i + 1){
//     console.log(i + 'Hello world');
// }

// let j = 1;
// while (j < 10) {
//     console.log(j + " " + 'Hello world');
//     j = j + 1;
// }
let a = Number(prompt)








