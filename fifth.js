///// 190228 /////
//// 오전 /////

// // 2교시 //
// console.log( "##################################################" );
// console.log();
//
//
// let foo = new Object();
//
// foo.name = 'foo';
// foo.age = 30;
// foo.gender = 'male';
//
// console.log(typeof foo);
// console.log(foo);
// console.log( "--------------------------------------------------" );
// console.log();
//
//
// let foo1 =
// {
//     name : 'foo' ,
//     age : 30 ,
//     gender : 'male' ,
//     print : function() {   console.log(`${this.name} : ${this.age} : ${this.gender}`);  }
// };
//
// console.log(typeof foo1);
// console.log(foo1);
// console.log(foo1.print());
// console.log(foo1.toString());
// console.log( "--------------------------------------------------" );
// console.log();
//
//
// let Person = function(name) {   this.name = name;   };
// foo = new Person('foo');
// console.log(foo.name);
// console.log( "--------------------------------------------------" );
//
// function Person2(name , age , gender , position)
// {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }
//
// console.log(typeof Person2);
//
// let bar = new Person2('bar' , 33 , 'woman');
// console.dir(bar);
// console.log(typeof bar);
// console.log( "--------------------------------------------------" );
//
// let baz = new Person2('baz' , 25 , 'woman');
// console.dir(baz);
// console.log(typeof baz);
// console.log( "--------------------------------------------------" );
// console.log();
//
// console.log( "##################################################" );


// // 3교시 //
// console.log( "##################################################" );
// console.log();
//
// class Person3
// {
//     constructor(name , age , gender)
//     {
//         this.name = name;
//         this.age = age;
//         this.gener = gender;
//     }
// }
//
// bar = new Person3('bar' , 33 , 'woman');
// baz = new Person3('baz' , 25 , 'woman');
// console.dir(bar);
// console.dir(baz);
//
// console.log( "--------------------------------------------------" );
// console.log();
//
//
// class Car{
//     constructor(make , model)                                                   // 생성자 instance 생성시 자동 호출
//     {
//         this.make = make;
//         this.model = model;
//         this._usergears = ['p' , 'n' , 'r' , 'd'];
//         this._usergear = this._usergears[0];
//     }
//     get_usergear() {    return this._usergear;  }                               // getter = 읽기(리턴이 있으면 된다)
//     set_usergear(gear)                                                          // setter = 쓰기(인수만 전달받으면 된다.)
//     {
//         if (this._usergears.indexOf(gear) < 0)
//         {   console.log(`error : invalid gear ${value}`);   }
//         this._usergear = gear;
//     }
//     /*
//     //변경 (1)
//     shift(gear)                                                             // 일반 method
//     {
//         if (this._usergears.indexOf(gear) < 0)
//         {   console.log(`error : invalid gear ${gear}`);    }
//         this._usergear = gear;
//     }
//     */
//     //변경 (2)
//     shift(gear)
//     {
//         this.set_usergear(gear);
//     }
// }
//
// let car1 = new Car("tesla" , "model s");
// let car2 = new Car("Mazda" , "3i");
//
// car1.shift('d');
// car2.shift('r');
//
// console.log(car1.get_usergear());
// console.log(car2.get_usergear());
//
// console.log( "--------------------------------------------------" );
// console.log();
//
// console.log( "##################################################" );



//// 오후 /////

// 4교시 //
console.log( "##################################################" );
console.log();
/*3교시에 필기했던거-->*/
class Car{
    constructor(make , model)                                                   // 생성자 instance 생성시 자동 호출
    {
        this.make = make;
        this.model = model;
        this._usergears = ['p' , 'n' , 'r' , 'd'];
        this._usergear = this._usergears[0];
    }
    get_usergear() {    return this._usergear;  }                               // getter = 읽기(리턴이 있으면 된다)
    set_usergear(gear)                                                          // setter = 쓰기(인수만 전달받으면 된다.)
    {
        if (this._usergears.indexOf(gear) < 0)
        {   console.log(`error : invalid gear ${value}`);   }
        this._usergear = gear;
    }
    /*
    //변경 (1)
    shift(gear)                                                                 // 일반 method
    {
        if (this._usergears.indexOf(gear) < 0)
        {   console.log(`error : invalid gear ${gear}`);    }
        this._usergear = gear;
    }
    */
    //변경 (2)
    shift(gear)
    {
        this.set_usergear(gear);
    }

    toString(str)
    {   return `|${this.make}|${this.model}|`;   }
}

let car1 = new Car("tesla" , "model s");
let car2 = new Car("Mazda" , "3i");

car1.shift('d');                                                                // message 전달(주체가 확실해야함)
car2.shift('r');

console.log(car1.get_usergear());
console.log(car2.get_usergear());

/*--->3교시에 필기했던거*/

console.log(car1.toString());
console.log(car2.toString());
console.log( "--------------------------------------------------" );
console.log();

console.log( "##################################################" );


// 5교시 //
console.log( "##################################################" );
console.log();

function create_object(o)
{
    function F(){}
    F.prototype = o;

    return new F;
}

person =
{
    name : "zzoon" ,
    getName : function() {  return this.name; },
    setName : function(arg) {this.name = arg;}
};

var student = create_object(person);

student.age = 28;
student.getage = function() {   return this.age };

console.log(student);
console.log(student.getName());
console.log(student.getage());
console.log( "--------------------------------------------------" );
console.log();

student.setName("me");
student.toString = function() { return `|${this.name}|` };
console.log(student);
console.log(student.toString());
console.log( "--------------------------------------------------" );
console.log();


class Bus extends Car
{
    constructor(make , model , personnel)
    {
        super(make , model);
        this.personnel = personnel;
        console.log("bus created!!");
    }

    toString()
    {
        let str = super.toString();
        str += `${this.personnel}|`;
        return str;
    }
}

let bus = new Bus("hyundai" , "bus" , 40);
console.log(bus);
console.log(bus.toString());
console.log( "--------------------------------------------------" );
console.log();

console.log( "##################################################" );


// 6교시 //
console.log( "##################################################" );
console.log();


console.log( "--------------------------------------------------" );
console.log();

console.log( "##################################################" );
