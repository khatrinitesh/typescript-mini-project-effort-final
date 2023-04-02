
// let uname = new String("Hello avaTpoint");  
// console.log("Message: " + uname);  
// console.log("Length: "+uname.length);

// var studentName:string = 'sameet khatri is student name'
// console.log(studentName)

// const obj = { width: 10, height: 15 };
// console.log(obj)

// // types | number | string 
// var a = 10
// console.log(a)

// let b:number = 10
// console.log(b)

// const area = obj.width * obj.height;
// console.log(area)

// interface User{
//     name:string;
//     id:number;
// }

// class UserAccount{
//     name:string;
//     id:number;

//     constructor(name:string,id:number){
//         this.name = name;
//         this.id = id;
//     }
// }
// let abc:number = 10.11
// console.log(abc)

// let data:string[] = ['nitesh','sameet','arvind',10,100]
// data[3] = true
// console.warn(data)

// let users = {
//     name:'nitesh',
//     age:33,
//     address:'amir house, grant road east, mumbai, india'
// }
// console.warn(users);

// users.name = 'sameet'
// users.age = 40
// users.address = 'pingrove chicago IL, USA'
// console.log(users)

// interface usersTyped {
//     name:string;
//     age:number;
//     address:string;
// }

// let users:usersTyped = {
//     name:'nitesh',
//     age:33,
//     address:'amir huse'
// }
// console.log(users)

// interface jobtitle{
//     teamname:string,
//     empid:number
// }
// let company:jobtitle[] = [
//     {
//         teamname:'nitesh',
//         empid:1,
//     },
//     {
//         teamname:'vishal',
//         empid:2,
//     },
//     {
//         teamname:'sameet',
//         empid:3,
//     },
// ]
// console.log(company)

// let person:any=[
//     {
//         name:'vishal',
//         country:"india"
//     },
//     {
//         name:'sonal',
//         country:"india"
//     },
//     {
//         name:'nilesh',
//         country:"india"
//     },
// ]

// person.name='sameet'
// person.country='usa'
// console.log(person)

// let data:string= 'nitesh khatri'
// console.warn(data)

// let data:string|number|boolean = 'nitesh khatri'
// console.warn(data)

// interface userType {
//     name:string;
//     age:number;
//     getName:() => string
// }
// let users:userType = {
//     name:'nitesh khatri',
//     age:30,
//     getName:function(){
//         return 'sameet khatri'
//     }
// }
// console.warn(users.getName())

// function Calc(a:number,b:number):number{
//     return b?a+b:a;
// }
// console.warn(Calc(100,200))

// class App{
//     name:'nitesh'
//     getName(){
//         console.log(this.name)
//     }
// }
// let a1 = new App('sameet khatri')
// a1.getName();


// class Parent{
//     name:string;
//     setName(name):void{
//         this.name = name;
//     }
// }

// class Child extends Parent{
//     name:"nitesh khatri";
//     getName():string{
//         return this.name;
//     }
// }
// let c1 = new Child();
// c1.setName('sameet')
// console.log(c1.getName());

// class ParentTwo{
//     fname:string;
//     lname:string;
//     setName(fname,lname):void{
//         this.fname = fname;
//         this.lname = lname;
//     }
// }

// class Childtwo extends ParentTwo{
//     fname:'arvind';
//     lname:'khatri';
//     getName():string{
//         return this.fname + this.lname;
//     }
// }
// let c2 = new Childtwo()
// c2.setName('urvashi ','khatri')
// console.warn(c2.getName());

// namespace UserUtils{
//     export class Users{
//         getName(){
//             return 'nitesh khatri'
//         }
//     }
// }

// let u1 = new UserUtils.Users();
// console.warn(u1.getName());

// import Teacher from "./teacher";
// import Students from "./students";

// let teacher = new Teacher();
// console.warn(teacher.data)

// let student = new Students();
// console.warn(student)

//  GENERICS
// function users<T>(data:T):T{
//     return data 
// }
// console.warn(users({name:'nitesh',age:34,jobtitle:'front-end developer'}))

// enum
// enum Days{
//     mon="mon",tue="tue",wed="wed",thu="thu",fri="fri",sat="sat",sun="sun"
// }
// console.warn(Days)
// // let whichDay:Days;
// // whichDay=Days.wed;
// console.warn(whichDay)
// console.warn(whichDay === 'wed')
// function whichDay(day:Days){
//     return day 
// }
// console.warn(whichDay(Days.mon))

// SYMBOL
// let s1 = Symbol('n')
// let s2 = Symbol('s')
// console.warn(s1,s2)
// console.warn(s1.toString())
// console.warn(s1 === s2)
// let data = {
//     [s1]:'some data'
// }
// let data2 = {
//     [s2]: 'learning is fun'
// }
// console.warn(data[s1])
// console.warn(data[s2]) 
// class Demo{
//     demoF1(){
//         return 'some data'
//     }
// }
// let example = new Demo();
// console.warn(example.demoF1())


// number
// const result:number = 10
// const result2:string = 'abc'
// const result3:boolean= true
// console.warn(result)
// console.warn(result2)
// console.warn(result3)

// function add(n1:number,n2:number){
//     return n1 + n2 
// }
// console.warn(add(10,20))

// function dummy(a:string){
//     return a 
// }
// console.warn(dummy('Consectetur enim id in eu esse aliqua adipisicing incididunt incididunt culpa nisi est enim.'))

// function sum(num1:number,num2:number){
//     if(typeof num1 === 'number' && typeof num2 === 'number'){
//         return num1 + num2 
//     }
//     else{
//         return new Error('values are not number')
//     }
// }
// console.warn(sum(10,20))

// tuple type 
// let role:string[] | number[] | boolean[] = ['admin',10,true]
// console.log(role);
// let zipcodes: string[] = ['03255', '02134', '08002', '03063'];
// console.log(zipcodes)
// let zipcodes:Array<string> = ['03255', '02134', '08002', '03063'];
// console.warn(zipcodes)
// let friends:Array<string> = ['vijay','rahul','dipti','mayur','sonal']
// console.warn(friends)
// let zipcodesNH: string[] = ['03255', '03050', '03087', '03063'];
// let zipcodesMA: string[] = ['02334', '01801'];
// let zipcodes:string[] [] = [zipcodesNH]
// zipcodes.push(zipcodesMA)
// console.warn(zipcodes)
// let axis:string[] = [];
// let coordinates:number[] [] = [];
// axis.push('asdad')
// console.log(axis);
// coordinates.push([3,44,44])
// coordinates.push([7])
// console.warn(coordinates)
// let header: string[] = ['Name', 'Age', 'Smoking', 'Salary'];
// console.log(header);

// literls
// function combine(a:number |string,b:string | number){
//     if(typeof a === "number" && typeof b === "number"){
//         return a + b 
//     }
//     else{
//         return a.toString() + b.toString()
//     }
// }
// console.warn(combine(10,20));
// console.warn(combine('nitesh','sameet'));

// let a :string|number|undefined =10;
// let b :string|number|undefined =20;
// let c :string|number|undefined =undefind;
// console.warn(a)
// console.warn(b)
// console.warn(c)

// type varType = string | number | undefined;
// let a:varType = 'adadsdad'
// let b:varType = 20
// let c:varType = undefined
// console.warn(a,b,c)



// type example = string | number | undefined | boolean | any
// let a1:example = 'nitesh'
// let b1:example = 'sameet'
// let c1:example = undefined 
// let d1:example = true
// let e1:example = ['friend','vijay','fruits','vegetables']
// console.warn(a1,b1,c1,d1,e1)

// function apiError(msg:any,code:any):never{
//     throw {
//         message:msg,
//         code:codings 
//     }
// }
// console.warn(apiError('server side error',500))

// function apple(data:string){
//     switch(data){
//         case "fruit": console.warn('this is fruit');
//         case "pineapple": console.warn('this is pineapple');
//         case "mango": console.warn('this is mango');
//         default:console.warn('this is default')
//     }
// }
// apple("fruit");