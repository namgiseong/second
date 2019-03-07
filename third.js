///// 190226 /////
///// 오전 /////
// // 1교시
// console.log( "##################################################" );
// console.log();
//
// function sayHello()                                                             // 함수 정의
// {   console.log( "Hello world" ); }
//
// sayHello();
// console.log( "--------------------------------------------------" );                                                              // 함수 호출(호출을 해야 함수가 동작을 함, 반드시 괄호를 써야함)
// console.log();
//
// function getgreeting()
// {   return "Hello world"   }
// console.log( getgreeting() );
//
// var message    =   getgreeting();
// console.log( message );
// console.log( "--------------------------------------------------" );
// console.log();
//
// getgreeting();                                                                  // 함수 호출
// var f = getgreeting;                                                            // 함수 참조(reference) , object
// console.log( f() );
// console.log( "--------------------------------------------------" );
// console.log();
//
// var o = {};
// o.f = getgreeting;                                                              // o 라는 객체에 f 라는 메소드(method)
// console.log( o.f() );
// console.log( "--------------------------------------------------" );
// console.log();
//
// var arr = [ 1, 2, 3 ];  // 배열 안에 각각의 요소는 같은 형태일 필요는 없다.
// arr[1] = getgreeting;
// for (var item of arr)
// {   console.log( typeof item);  }
// console.log();
//
// console.log( arr[1]() );
// console.log( "--------------------------------------------------" );
//
// console.log();
// console.log( "##################################################" );



// // 2교시
// console.log( "##################################################" );
// console.log();
//
// function average( a , b )
// {   console.log( `a = ${a}\tb = ${b}` );
//     return ( a + b ) / 2;   }
//
// console.log( average ( 5 , 10 ) );
// console.log( "--------------------------------------------------" );
// console.log();
//
// var a = 5 , b = 10;
// console.log( average( a , b ) );
// console.log( "--------------------------------------------------" );
// console.log();
//
// average( 5 );                                                                   // 인수를 두개 받아야 정상인데 하나만 받아도 동작은 함
// average();                                                                      // 인수를 두개 받아야 정상인데 하나도 안 받아도 동작은 함
// console.log( "--------------------------------------------------" );
// console.log();
//
// function func( x )
// {
//     console.log( `func 내부 : x = ${x}`);
//     x = 5;
//     console.log( `func 내부 : x = ${x} ( 할당 후 )`);
// }
//
// var x = 3;                                                                      // call by value (원시타입)
// console.log( `func를 호출하기 전 : x = ${x}`);
// func(x);
// console.log( `func를 호출한 후 : x = ${x}`);
// console.log( "--------------------------------------------------" );
// console.log();
//
// function func2( o )
// {
//     console.log( o );
//     o.message = `func2 안에서 수정함 ( 이전 값 : ${o.message})`;
//     console.log( o );
// }
//
// var o2 = {  message : " 초기 값 "  };                                            // call by reference (reference 타입) (object)
//
// console.log( `func2 를 호출하기 전 : "${o2.message}"` );
// func2( o2 );
// console.log( `func2 를 호출한 후 : "${o2.message}"` );
// console.log( "--------------------------------------------------" );
//
// console.log();
// console.log( "##################################################" );



// // 3교시
// console.log( "##################################################" );
// console.log();
//
// function func3( o )
// {
//     o.message = `func3에서 수정함`;
//     o = { message : "새로운 객체" };
//     console.log( `func3 내부 : o.message = "${o.message}" (할당 후)` );
// }
//
// var o3 = { message : "초기값" };
// console.log( `func3를 호출하기 전 :o.message = "${o3.message}"` );
// func3( o3 );
// console.log( `func3를 호출한 후 : ,o.message = "${o3.message}"` );
// console.log( "--------------------------------------------------" );
// console.log();
//
// function func4( o )
// {
//     o = { message : "새로운 객체" };
//     return o;
// }
//
// var o4 = { message : "초기값" };
// console.log( `func4를 호출하기 전 : o.message = "${o4.message}"` );
// o4 = func4( o4 );
// console.log(`func4를 호출한 후 : o.message = "${o4.message}"` );
// console.log( "--------------------------------------------------" );
// console.log();
//
// function getsentence({ subject , verb , object })
// {   return `${subject} ${verb} ${object}`;  }
//
// var o5 = {  subject : "I" , verb : "love" , object : "Javascript"   };
// console.log( getsentence( o5 ) );
// console.log( "--------------------------------------------------" );
// console.log();
//
// function getsentencearray( [ subject , verb , object ] )
// {   return `${subject} ${verb} ${object}`;  }
//
// var arr2 = [ "I" , "love" , "Javascript" ];
// console.log( getsentencearray( arr2 ) );
// console.log( "--------------------------------------------------" );
// console.log();
//
// function addprefix( prefix, ...words )
// {
//     var prefixwords = [];
//     for ( var i = 0; i < words.length; ++i)
//     {   prefixwords[i] = prefix + words[i]; }
//     return prefixwords;
// }
//
// console.log( addprefix( "con" , "verse" , "vex" ) );
// console.log( "--------------------------------------------------" );
// console.log();
//
// console.log( "##################################################" );


///// 오후 /////

// // 4교시
// console.log( "##################################################" );
// console.log();
//
// function f3( a , b = "default" , c = 3 )
// {   return `${a} - ${b} - ${c}`;    }
//
// console.log( f3( 5 , 6 , 7 ) );
// console.log( f3( 5 , 6 ) );
// console.log( f3( 5 ) );
// console.log( f3() );
// console.log( "--------------------------------------------------" );
// console.log();
//
// var o6  =
// {   name : "hong" , bark : function() {  return    "woof!";  }   }
//
// console.log( o6.name + " " + o5.bark() );
//
// var o7  =
// {   name : "kim" , bark() {  return " WooF!";    }    }
//
// console.log( o7.name + " " + o6.bark() );
// console.log( "--------------------------------------------------" );
// console.log();
//
// var o8  =
// {   name : "park" , speak() {  return `my name is ${this.name}`;   }   }        // this. 는 객체변수를 이용해서 호출할 때만 사용 ...?
//
// console.log( o8.speak() );                                                      // 차이를 봐주세요 (에오)
//
// var speak   =   o8.speak;                                                       // o7의 메소드 안에서 this. 를 사용하지 못하고 undefined 됨
//
// console.log( speak == o8.speak );
// console.log( speak() );                                                         // 차이를 봐주세요 (에오)
// console.log( "--------------------------------------------------" );
// console.log();
//
// var o9 =
// {
//     name : 'julie' ,
//     greetbackwards : function()
//     {
//         // 변경 전
//         /*
//         function getreversename()
//         {
//             var namebackwards = '';
//             for ( var i = this.name.length - 1; i >= 0; --i)
//             {   namebackwards += this.name[i];  }
//             return namebackwards;
//         }
//         return  `${getreversename()} si eman ym, olleh`;
//         */
//         // 변경 후
//         const self = this;
//
//         function getreversename()
//         {
//             var namebackwards = '';
//             for ( var i = self.name.length - 1; i >= 0; --i)
//             {   namebackwards += self.name[i];  }
//             return namebackwards;
//         }
//         return  `${getreversename()} si eman ym, olleh --> name reverse`;
//     }
// };
//
// console.log( o9.greetbackwards() );
// console.log( "--------------------------------------------------" );
// console.log();
//
// console.log( "##################################################" );



// // 5교시
// console.log( "##################################################" );
// console.log();
//
// var f11 = function() {  return "hello!!!";  }                                   // 이름이 없는 함수 = 익명함수
// var f11_r = () => "hello!!!!";                                                  // 익명함수...다른방법
// console.log( f11_r() );
//
// var f12 = function( name ) {    return `hello ${name}`; }                       // 익명함수
// var f12_r = name => `hello! ${name}`;                                           // 인수가 하나일 때는 괄호 생략 가능
// console.log( f12_r( "hog" ) );
//
// const f13 = function( a , b ) { return a + b;   }                               // 익명함수
// const f13_r = ( a , b ) => a + b;                                               // 인수가 두개 이상일때는 괄호 꼭!
// console.log( f13_r( 5 , 10 ) );
//
// var o9 =
// {
//     name : 'julie' ,
//     greetbackwards : function()
//     {
//         const getreversename = () =>
//         {
//             var namebackwards = '';
//             for ( var i = this.name.length - 1; i >= 0; --i)
//             {   namebackwards += this.name[i];  }
//             return namebackwards;
//         }
//         return  `${getreversename()} si eman ym, olleh --> name reverse`;
//     }
// };
//
// console.log( o9.greetbackwards() );
// console.log( "--------------------------------------------------" );
// console.log();
//
// var bruce = { name : "brace" };
// var madeline = { name : "madeline" };
//
// function greet()
// {   return `hello, i'm ${this.name}`;   }
//
// console.log( greet() );
// console.log( greet.call( bruce ) );                                             // 외부에서 this로 사용할 객체를 괄호안에 적어주기
// console.log( greet.call( madeline ) );
// console.log( "--------------------------------------------------" );
// console.log();
//
// function update( birthyear , occupation )
// {
//     this.birthyear  =   birthyear;
//     this.occupation =   occupation;
// }
//
// update.call( bruce , 1949 , 'singer' );                                         // 원래는 propery가 name만 있었음. .call 을 이용하여 메소드 추가함. 첫번째는 this.로 사용될 객체, 그 뒤의 property들은 bruce의 메소드가 됨
// console.log( bruce );
// update.call( madeline , 1984 , 'actress' );
// console.log( madeline );
//
// update.apply( bruce , [ 1978 , 'delivery' ]);                                   // apply 는 뒤에가 배열 형식으로 되어잇음
// console.log( bruce );
// update.apply( madeline , [ 1995 , 'model' ]);
// console.log( madeline );
// console.log( "--------------------------------------------------" );
// console.log();
//
// console.log( "##################################################" );



// // 6교시
// console.log( "##################################################" );
// console.log();
//
// var xx;
// function fs( xx )       //
// {   return xx + 3;  }
//
// console.log( fs( 5 ) );
// console.log( xx );
// console.log( "--------------------------------------------------" );
// console.log();
//
// function fs1()
// {   console.log( 'one' );   }
//
// function fs2()
// {   console.log( 'two' );   }
//
// fs2();
// fs1();
// fs2();
// console.log( "--------------------------------------------------" );
// console.log();
//
// const xxx = 3;                                                                  // 선언 후 부터는 어느부분에서든 사용 가능 , 전역 scope
// function fs3()
// {
//     console.log( xxx );
//     console.log( yyy );
// }
// {                                                                               // 블록 지정(b1 start)
//     /* 변경 (a1)
//     const yyy = 5;                                                              // 블록 안에서만 사용 가능 , 지역 scope?
//     */
//     /* 변경 (a2) */
//     var yyy = 5;
//
//     /* 변경 (a3)
//     let yyy = 5;
//     */
//     fs3();
//
// }                                                                               // 블록 지정(b1 end)
// console.log( "--------------------------------------------------" );
// console.log();
//
// let globalfunc;
// {
//     let blockvar = 'a';
//     globalfunc = function()
//     {   console.log( blockvar );    }
// }
//
// console.log( typeof globalfunc );
// globalfunc();
// console.log( "--------------------------------------------------" );
// console.log();
//
// let fs4;
// {
//     let o = { note: 'safe' };
//     fs4 = function() {  return o;   }                                           // --> 함수 closure ..범위를 벗어났는데 함수closure형식으로 만들어서 범위 밖이어도 적용 가능하도록 함
// }
//
// console.log( typeof fs4 );
// console.log( fs4() );
// let oref = fs4();
// console.log( typeof oref );
// console.log( oref );
// oref.note = "not so safe after all";
// console.log( oref );
// console.log( "--------------------------------------------------" );
// console.log();
//
// console.log( "##################################################" );
