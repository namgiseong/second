// var a=10;
// let b=20;
//
// console.log("hello,world!!")
// console.log("a="+a);
// console.log("b="+b);
// console.log(a+b);
//
// a=30;
// console.log("a="+a);
//
// const x=10;
// console.log("x="+x);
//
// //x=100;
// console.log("x="+x);
//
//
// var count=10;       //정수 표현
// var blue=0x0000ff;  //16진수 표현
// var umask=0o0022;   //8진수 표현
// var roomtemp=21.5;  //실수 표현
// var c=3.0e6;
// var e=-1.6e-19;
// var inf=Infinity;
// var ninf=-Infinity;
// var nan=NaN;
//
// console.log(count);
// console.log(blue);
// console.log(umask);
// console.log(roomtemp);
// console.log(c);
// console.log(e);
// console.log(inf);
// console.log(ninf);
// console.log(nan);

// //Number는 라이브러리
// var small   =   Number.EPSILON;             //가장 1과 근첩한 최솟값
// var bigInt  =   Number.MAX_SAFE_INTEGER;    //정수형의 최댓값
// var max     =   Number.MAX_VALUE;           //실수형의 최댓값
// var minInt  =   Number.MIN_SAFE_INTEGER;
// var min     =   Number.MIN_VALUE;
// var nInf    =   Number.NEGATIVE_INFINITY;
// var nan2    =   Number.NaN;
// var inf2    =   Number.POSITIVE_INFINITY;
//
// console.log(small);
// console.log(bigInt);
// console.log(max);
// console.log(minInt);
// console.log(min);
// console.log(nInf);
// console.log(nan2);
// console.log(inf2);

// var dialog = 'sam looked up, and said "hello, old friend",as max walked in.';
// var imperative = "don`t do that!";
// console.log(dialog);
// console.log(imperative);
//
// var dialog1 = "he looked up and said \"don`t do that!\" to max.";
// var dialog2 = 'he looked up and said "don\`t do  that!" to max.';
//
// console.log(dialog1);
// console.log(dialog2);
// console.log("hello,\nworld!!!");

// var currenttemp = 19.5 ;
// const message = "the current temperature is " +currenttemp + "\u00b0c";
// const message2 = 'the current temperature is  ${currenttemp} \u00b0c';      //ES6
// console.log(message);
// console.log(message2);
// const multiline = "line1\
// line2";
// const multiline2 = "line1\n\
// line2";
// const multiline3 = "line1\
// line2\
// line3";
// const multiline4 = "line1\n" + "line2\n" + "line3";
// const multiline5 = 'current temperature:\n' + `\t${currenttemp}\u00b0c\n`+
// "don`t worry... the heat is on!";
// console.log(multiline);
// console.log(multiline2);
// console.log(multiline3);
// console.log(multiline4);
// console.log(multiline5);

// const result = 3+'30';
// const result2 = 3*'30';
// console.log(result);
// console.log(result2);

// const   heating =   true;
// const   cooling =   false;
// console.log(heating);
// console.log(cooling);
//
// const RED       =   Symbol("the color of a sunset!");       //Symbol은 유일한 값을 가지도록 하는 객체
// const ORANGE    =   Symbol("the color of a sunset!");
// console.log(RED);
// console.log(ORANGE);
// console.log(RED===ORANGE);
//
// var currenttemp2;
// var targettemp2 =   null;
// //currenttemp2    =   19.5;
// console.log(currenttemp2);
// console.log(targettemp2);
// currenttemp2    =   undefined;
// console.log(currenttemp2);

// var obj={};
// console.log(obj);
// console.log("----------------------------------------------------- " );
// obj.color="yellow";
// console.log(obj);
// console.log("----------------------------------------------------- " );
// obj["not an identifier"]=3;  //["not an identifier"] 는 key , 3은 data
// console.log(obj);
// console.log("----------------------------------------------------- " );
// console.log(obj["not an identifier"]);
// console.log("----------------------------------------------------- " );
// console.log(obj["color"]);
// console.log("----------------------------------------------------- " );
// const SIZE = Symbol();
// obj[SIZE] = 8;
// console.log(obj);
// console.log("----------------------------------------------------- " );

// var sam1 = {name: 'sam', age:4};
// var sam2 = {name: 'sam', age:4};
// var sam3 = {
//             name: 'sam',
//                 classification:
//                 {
//                     kingdom: 'anamalia',
//                     phylum: 'chordata',
//                     class:'mamalia',
//                     order: 'carnivoria',
//                     family: 'felidas',
//                     sumfamily: 'felinae',
//                     genus: 'felis',
//                     species: 'catus'
//                 }
//             };
//
// console.log(sam1);
// console.log("----------------------------------------------------- " );
// console.log(sam2);
// console.log("----------------------------------------------------- " );
// console.log(sam3);
// console.log("----------------------------------------------------- " );
// console.log(sam1===sam2);
// console.log("----------------------------------------------------- " );
// console.log(sam3.classification.family);
// console.log("----------------------------------------------------- " );
// console.log(sam3["classification"].family);
// console.log("----------------------------------------------------- " );
// console.log(sam3.classification["family"]);
// console.log("----------------------------------------------------- " );
// console.log(sam3["classification"]["family"]);
// console.log("----------------------------------------------------- " );
//
// sam3.speak = function() {return "meow!"};
// console.log(sam3);
// console.log("----------------------------------------------------- " );
// console.log(sam3.speak());
// console.log("----------------------------------------------------- " );
//
// delete sam3.classification;
// console.log(sam3);
// console.log("----------------------------------------------------- " );
//
// delete sam3.speak;
// console.log(sam3);
// console.log("----------------------------------------------------- " );

// var s = "hello";
// console.log(s.toUpperCase());
// console.log("----------------------------------------------------- " );
//
// s.rating = 3;
// console.log(s.rating);
// console.log("----------------------------------------------------- " );

// var a1 = [1,2,3,4];
// var a2 = [1,'two',3,null];
// var a3 = ["what the hummer? what the chain?", "in what furnace was thy brain?",
//             "what the anvil? what dread grasp", "dare its deadly terrors clasp?" ];
//
// var a4 = [{name:"루비",hardness:9}, {name:"다이아몬드" , hardness:10},{name:"토파즈" , hardness:8} ];
// var a5 = [[1,3,5],[2,4,6]];
//
// console.log(a1);
// console.log("----------------------------------------------------- " );
// console.log(a2);
// console.log("----------------------------------------------------- " );
// console.log(a3);
// console.log("----------------------------------------------------- " );
// console.log(a4);
// console.log("----------------------------------------------------- " );
// console.log(a5);
// console.log("----------------------------------------------------- " );
//
// var arr = ['a','b','c'];
//
// console.log(arr);
// console.log("----------------------------------------------------- " );
// console.log(arr.length);
// console.log("----------------------------------------------------- " );
// console.log(arr[0]);
// console.log("----------------------------------------------------- " );
// console.log(arr[arr.length-1]);
// console.log("----------------------------------------------------- " );
//
// var arr2 = [1,2,'c',4,5];
// console.log(arr2);
// console.log("----------------------------------------------------- " );
//
// arr2[2] = 3;
// console.log(arr2);
// console.log("----------------------------------------------------- " );

// var now = new Date();
// console.log(now);
// console.log("----------------------------------------------------- " );
//
// var halloween = new Date(2019,2,22);
// console.log(halloween);
// console.log("----------------------------------------------------- " );
//
// var halloweenParty = new Date(2019,9,31,19,0);
// console.log(halloweenParty);
// console.log("----------------------------------------------------- " );
//
// console.log(halloweenParty.getFullYear());
// console.log(halloweenParty.getMonth());
// console.log(halloweenParty.getDate());
// console.log(halloweenParty.getDay());
// console.log(halloweenParty.getHours());
// console.log(halloweenParty.getMinutes());
// console.log(halloweenParty.getSeconds());
// console.log(halloweenParty.getMilliseconds());

// var numStr = "33.3";
// var num = Number(numStr);           //문자열 숫자를 숫자형태로 저장
// console.log(numStr);
// console.log(num);
// console.log("----------------------------------------------------- " );
//
// var a = parseInt("16 volts",10);    //10진수 정수만 뽑아내기
// var b = parseInt("3a",16);          //16진수 정수만 뽑아내기
// var c2 = parseFloat("15.5 kph");    //실수만 뽑아내기
// console.log(a);
// console.log(b);
// console.log(c2);
// console.log("----------------------------------------------------- " );
//
// var d = new Date();
// var ts = d.valueOf();
// console.log(d);
// console.log(ts);
// console.log("----------------------------------------------------- " );
//
// d2 = true;
// var n2 = b ? 1 : 0;
// console.log(d2);
// console.log(n2);
// console.log("----------------------------------------------------- " );

// var v = 33.5;
// var v2 = v.toString();
// console.log(v);
// console.log(v2);
// console.log("----------------------------------------------------- " );
//
// var arr9 = [1,true,"hello"];
// console.log(arr9);
// console.log(arr9.toString());
// console.log("----------------------------------------------------- " );
//
// var n9 = 0;
// var b9 = !!n9;
// var b10 = Boolean(n9);
// console.log(n9);
// console.log(b9);
// console.log(b10);
// console.log("----------------------------------------------------- " );

var xx = 5;
var yy = 3 - -xx;
console.log(`xx = ${xx}, yy = ${yy}`);
console.log("----------------------------------------------------- " );

var ss = "5";
var yyy = 3 + +ss;
console.log(`ss = ${ss}, yyy = ${yyy}`);
console.log("----------------------------------------------------- " );

var xx1 = 0, xx2 = 2, xx3 = -1.5, xx4 = -6.33;
var p1 = -xx1 * 1;
var p2 = +xx2 * 2;
var p3 = +xx3 * 3;
var p4 = -xx4 * 4;
console.log(`xx1 = ${xx1}, xx2 = ${xx2}, xx3 = ${xx3}, xx4 = ${xx4}`);
console.log(`p1 = ${p1}, p2 = ${p2}, p3 = ${p3}, p4 = ${p4}`);
console.log("----------------------------------------------------- " );
