// // 190225
// // 1교시 산술연산자
// var r = 2;
// console.log(`\nr = ${r}`);
// console.log();
//
// //r++ -> 후위 연산자
// var r1 = r++ + r++;
// console.log(`r1 = ${r1}`);
// console.log(`r = ${r}`);
// console.log();
//
// //++r -> 전위 연산자
// var r2 = ++r + ++r;
// console.log(`r2 = ${r2}`);
// console.log(`r = ${r}`);
// console.log();
//
// var r3 = r++ + ++r;
// console.log(`r3 = ${r3}`);
// console.log(`r = ${r}`);
// console.log();
//
// var r4 = ++r + r++;
// console.log(`r4 = ${r4}`);
// console.log(`r = ${r}`);
// console.log();
//
// console.log("----------------------------------------------------- " );
//
// r = 10;
// console.log(`r = ${r}`);
// console.log();
//
// var r5 = r-- + r--;
// console.log(`r5 = ${r5}`);
// console.log(`r = ${r}`);
// console.log();
//
// var r6 = --r + --r;
// console.log(`r6 = ${r6}`);
// console.log(`r = ${r}`);
// console.log();
//
// var r7 = r-- + --r;
// console.log(`r7 = ${r7}`);
// console.log(`r = ${r}`);
// console.log();
//
// var r8 = --r + r--;
// console.log(`r8 = ${r8}`);
// console.log(`r = ${r}`);
// console.log();
//
// console.log("----------------------------------------------------- " );
//
// x = 3;
// y = null;
// x += y = 6 * 5 / 2;
// console.log(`\nx = ${x}     y = ${y}`);
// console.log();
//
// console.log("----------------------------------------------------- " );

// // 2교시 관계연산자
// var n = 5;
// s = "5";
// console.log(`n === "5" ==> ` + (n===s));
// console.log(`n !== "5" ==> ` + (n!==s));
// console.log(`n === Number("5") ==> ` + (n === Number(s)));
// console.log(`n !== Number("5") ==> ` + (n !== Number(s)));
// console.log(`n == "5" ==> `+(n == s));
// console.log(`n != "5" ==> `+(n != s));
// console.log();
//
// var a = {name : "an object"};
// var b = {name : "an object"};
// console.log(`${a} === ${b} ==>`);
// console.log(a === b);
// console.log(`${a} !== ${b} ==>`);
// console.log(a !== b);
// console.log(`${a} == ${b} ==>`);
// console.log(a == b);
// console.log(`${a} != ${b} ==>`);
// console.log(a != b);
// console.log();
//
// console.log("----------------------------------------------------- " );

// // 비교연산자
// console.log(3   >   5);
// console.log(3   >=  5);
// console.log(3   <   5);
// console.log(3   <=  5);
// console.log(5   >   5);
// console.log(5   >=  5);
// console.log(5   <   5);
// console.log(5   <=  5);
// console.log();
//
// n = 0;
// while ( true )
// {
//     n += 0.1;
//     // if ( n == 0.3)
//     // {
//     //     break;
//     // }    // 실수에다가 동등연사자를 사용하여 while문에 갇혀버린다..
//     if ( Math.abs (n - 0.3) < Number.EPSILON)
//     {
//         break;
//     }
// }
//
//
// console.log(`Stopedat at ${n}`);
// console.log();
//
// console.log("----------------------------------------------------- " );


// // 3교시
// console.log( 3 + 5 + "8" );
// console.log( "3" + 5 + 8 );
//
// var skipit = true;
// x = 0;
// var result = skipit || x++;
// console.log(`skipit = ${skipit}`);
// console.log(`x = ${x}`);
// console.log(`result = ${result}`);
// console.log(`x = ${x}`);
// console.log();
//
// var doit = false;
// result = doit && x++;
// console.log(`doit = ${doit}`);
// console.log(`x = ${x}`);
// console.log(`result = ${result}`);
// console.log(`x = ${x}`);
// console.log();
//
// console.log("----------------------------------------------------- " );

// var suppiedoptions  =   {};
// var options =   suppiedoptions || {name : "Default"};
// console.log("options = " + options);
// console.log();
//
// suppiedoptions  =    null;
// options =   suppiedoptions || {name: "Default"}
// console.log("options = " + options);
// console.log();
//
// doit = false;
// result = doit ? "Did it!" : "Didn`t do it";     // 3항연산자? (if 문 대체용)
// console.log(`result = ${result}`);
// console.log();
//
// var x = 0;
// var y = 10;
// var z;
// z = (x++ , y++);
// console.log(`x = ${x}`);
// console.log(`y = ${y}`);
// console.log(`z = ${z}`);
// console.log();
// console.log("----------------------------------------------------- " );


// // 4교시
// n = 22;
// console.log(`${n}>>1`);
// console.log(n >> 1);
// console.log(`${n}>>>1`);
// console.log(n >>> 1);
// console.log();
//
// console.log(`${n} = ~${n}`);
// n = ~n;
// console.log(`${n} = ~${n}`);
// console.log();
//
// n++;
// console.log(`${n}++`);
// console.log();
//
// console.log(`${n} >> 1`);
// console.log(n >> 1);
// console.log();
//
// console.log(`${n} >>> 1`);
// console.log(n >>> 1);
// console.log();
//
// console.log("----------------------------------------------------- " );

// const FLAG_EXECUTE  =   1;
// const FLAG_WRITE    =   2;
// const FLAG_READ     =   4;
//
// var p   =   FLAG_READ   |   FLAG_WRITE;
// var haswrite    =   p & FLAG_WRITE;
// var hasexecute  =   p & FLAG_EXECUTE;
// console.log(`p = ${p}`);
// console.log(`haswrite = ${haswrite}`);
// console.log(`hasexecute = ${hasexecute}`);
// //토글~
// p   =   p ^ FLAG_WRITE;
// console.log(`p = ${p}`);
// p   =   p ^ FLAG_WRITE;
// console.log(`p = ${p}`);
// //~토글

// // 5교시
// const   hasreadorexecute    =   p & (FLAG_READ | FLAG_EXECUTE);
// const   hasreadandexecute   =   p & (FLAG_READ | FLAG_EXECUTE)  === FLAG_READ | FLAG_EXECUTE;
// console.log(`hasreadorexecute = ${hasreadorexecute}`);
// console.log(`hasreadandexecute = ${hasreadandexecute}`);
// console.log(`hasreadandexecute = ${hasreadandexecute}`);
// console.log();
//
// console.log("----------------------------------------------------- " );
//
// console.log("typeof undefined => " + ( typeof undefined));
// console.log(" typeof null => " + ( typeof null));
// console.log(" typeof {} => " + (typeof {}));
// console.log(" typeof [] => " + (typeof []));
// console.log(" typeof ture => " + (typeof true));
// console.log(" typeof 1 => " + ( typeof 1));
// console.log(' typeof "" => ' + (typeof ""));
// console.log(" typeof Symbol() => " + (typeof Symbol()));
// console.log(" typeof function() {} => " + (typeof function() {}));
// console.log();
//
// var v, v2;
// v = v2 = 9.8;
// console.log(`v = ${v}`);
// console.log(`v2 = ${v2}`);
// var nums = [3,5,15,6,4];
// var i = 0;
// while((n = nums[i])<10 && i++ < nums.length)
// {
//     console.log(`${i}`);
//     console.log(`Number less than 10 : ${n}`);
// }
//
// console.log(`Number greater than 10 found: ${n}`);
// console.log(`${nums.length - i - 1} numbers remain`);
// console.log();
//
// console.log("----------------------------------------------------- " );
//
// var obj =   {b1: 2, c1:4, d1:4};
// var { a1, b1, c1 } = obj;       // 변수선언 및 초기화 -해체할당
// console.log(`a1 = ${a1} \tb1 = ${b1} \ta3 = ${c1}`);
//
// var obj2 = {b2:2, c2:3 , d2:4};
// var a2, b2, c2              // 변수 선언
// ({a2, b2 , c2} = obj2)      // 값 치환 -해체할당
//
// console.log(`a2 = ${a2} + ab = ${b2} `);
//
// var arr = [1,2,3];
// var [x5,y5] = arr;
// console.log(`x5 = ${x5}\ty5= ${y5}`);
// var arr2 = [1,2,3,4,5];
// var [x6,y6,...rest] = arr2;
// console.log(`x6 = ${x6}\ty6 = ${y6}\trest = ${rest}`);
//
// var a5 = 5, b5 = 10;
// console.log(`a5 = ${a5}\tb5 = ${b5}`);
// [a5, b5] = [b5 , a5];
// console.log(`a5 = ${a5}\tb5 = ${b5}`);
// console.log();
//
// console.log("----------------------------------------------------- " );


//6교시
// var totalvet;
// if( new Date().getDay() ===3 )
// {   totalvet = 1;   }
// else
// {   totalvet = 2;   }
//
// console.log( `totalvet : ${totalvet}` );
// for( var temp, i = 0, j = 1; j < 30; temp = i, i = j, j = i + temp )
// {   console.log(j); }
// console.log();
//
// var s = '3';
// for( ; s.length < 10; s = '' + s );
// console.log(s);
//
// for( var x = 0.2; x < 3.0; x += 0.2 )
// {   console.log(x); }
// console.log();

var player = { name: 'thomas', rank: 'midshipman', age: 25 };
for (let prop in player)
{
    if (!player.hasOwnProperty(prop))
    {
        continue;
    }
    console.log(prop + ':' + player[prop]);
}
console.log();

var hand = [5,6,7,8];

for (var ii = 0; ii < hand.length; ++ii)
{   console.log(`face: ${hand[ii]}`);   }
console.log();

for (var face of hand)
{   console.log(`face: ${face}`);   }
console.log();

var select = 1;
if ( select ===1)
{   console.log("first");   }
else if ( select === 2 )
{   console.log("second");  }
else
{   console.log("other...");    }
console.log();

switch ( select )
{
    case 1:
    console.log("first");
    break;

    case 2:
    console.log("second");
    break;

    default:
    console.log("other...");
    break;
}
console.log();

console.log("----------------------------------------------------- " );
