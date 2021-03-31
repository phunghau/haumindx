console.log('hello from inside js foder');
// console.log(hihi)

//Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả. (2đ)
// Đầu vào: str_input 
// Đầu ra: đảo ngược chuỗi và in ra kết quả
// Ví dụ:
// Cho: str_input = "program"; in ra: "margorp"
// Cho: str_input = "data"; in ra: "atad"
// Lưu ý: không sử dụng hàm reverse()

// let input = prompt('Nguoi dung nhap vao');
// let str = "";
// for(let i = input.length - 1;i >= 0;i--){
//     str = str + input[i];
// }
// console.log(str)

// Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. (2đ)
// Đầu vào: str
// Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
// Ví dụ
// Cho "this is Test"; In ra "This is Test"
// Cho "hello a"; In ra "Hello A”

// let input = prompt('Nguoi dung nhap chuoi bat ki');
// const arr = input.split(" ");
// let str = "";
// for(let word of arr){
//     let newWord = word[0].toUpperCase() + word.substr(1)
//     str = str + " " + newWord

// }
// console.log(str)


// Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả. (2đ)
// Đầu vào: 1 mảng
// Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
// Ví dụ
// Cho Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”five”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
// Cho Arr=[1,2,3,3,4,5,4,4,4,5,5]; In ra Arr=[1,2,3,4,5]

// const useInput = prompt("Nguoi dung nhap chuoi (a,b,c,d...)")
// const arr = useInput.split(",")
// const result = [];
// for(let item of arr){
//     if(!result.includes(item)){
//         result.push(item)
//     }
// }
// console.log(result)


//4.
// Tạo dữ liệu của 3 nhân viên mindX (gồm tên, tuổi, mức lương, chức vụ)
// Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete). (2đ)

let person1 = {
    name : 'Hau',
    Age : 28,
    Salary : '10.000.000',
    Job : 'Nhan Vien',
}

let person2 = {
    name : 'Thao',
    Age : 22,
    Salary  : '12.000.000',
    Job : 'Nhan Vien',
}

let person3 = {
    name : 'Dung',
    Age : 24,
    Salary : '11.000.000',
    Job : 'Nhan Vien',
}
let personArr = ['person1','person2','person3'];

while(true){
    let useInput = prompt('Please input C/R/D/U/E')
    if (useInput === 'c'){
        let newName = prompt('Please input new name')
        let newAge = Number (prompt('Please input new age'));
        let newSalary = prompt('Please input new Salary');
        let newJob = prompt('Please input new job')
        let newPerson = {
            name : newName,
            Age : newAge,
            Salary : newSalary,

        };
        
    }
}
personArr.push(newPerson);
for (let newPerson of personArr){
    

}

