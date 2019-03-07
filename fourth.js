// /// 190227 /////
//
// /// 오전 /////
//
// // 1교시 //
// console.log( "##################################################" );
// console.log();
//
// let arr1    =   [1 , 2 , 3];
// let arr2    =   ["one" , 2 , "three"];
// let arr3    =   [[1 , 2 , 3] , ["one" , 2 , "three"]];
// let arr4    =
// [
//     {name : "fred" , thpe : "object" , luckynumber : [5 , 7 , 13]},
//     [
//         {name : "susan" , type : "object"},
//         {name : "anthony" , type : "object"},
//     ],/*  1 , function() { return "arrays can contain functions too";}, "three"*///변경 (a1)
//     1 , () => "arrays can contain functions too" , "three" //변경 (a2)
// ];
//
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// console.log( "--------------------------------------------------" );
// console.log();
//
// console.log(arr1[0]);
// console.log(arr1[2]);
// console.log(arr3[1]);
// console.log(arr4[1][0]);
// console.log(arr4[3]());
// console.log( "--------------------------------------------------" );
// console.log();
//
// console.log(arr1.length);
// console.log(arr4.length);
// console.log(arr4[1].length);
// console.log( "--------------------------------------------------" );
// console.log();
//
// arr1[4] = 5;                                                                    //현재 배열의 범위를 벗어남-->배열의 요소 추가 (동적 배열)
// console.log(arr1);
// console.log(arr1.length);
// console.log( "--------------------------------------------------" );
// console.log();
//
// console.log(arr2[10]);
// console.log(arr2.length);
// console.log( "--------------------------------------------------" );
// console.log();
//
// let arr5    =   new Array();
// let arr6    =   new Array(1 , 2 , 3);
// let arr7    =   new Array(2);
// let arr8    =   new Array("2");
//
// console.log(arr5);
// console.log(arr5.length);
// console.log(arr6);
// console.log(arr6.length);
// console.log(arr7);          //차이 비교...1
// console.log(arr7.length);
// console.log(arr8);          //차이 비교...1
// console.log(arr8.length);
// console.log( "--------------------------------------------------" );
// console.log();
//
// console.log( "##################################################" );
//
//
//
// // 2교시 //
// console.log( "##################################################" );
// console.log();
//
// let arr9    =   ["b" , "c" , "d"];
// console.log(arr9);
// console.log( "--------------------------------------------------" );
//
// console.log(arr9.push("e"));
// console.log(arr9);
// console.log( "--------------------------------------------------" );
//
// console.log(arr9.pop());
// console.log(arr9);
// console.log( "--------------------------------------------------" );
//
// console.log(arr9.unshift("a"));
// console.log(arr9);
// console.log( "--------------------------------------------------" );
//
// console.log(arr9.shift());
// console.log(arr9);
// console.log( "--------------------------------------------------" );
// console.log();
//
//
// let arr10   =   [1 , 2 , 3];
// console.log(arr10);
// console.log( "--------------------------------------------------" );
//
// console.log(arr10.concat(4 , 5 , 6));
// console.log(arr10);
// console.log( "--------------------------------------------------" );
//
// console.log(arr10.concat([4 , 5 , 6]));
// console.log(arr10);
// console.log( "--------------------------------------------------" );
//
// console.log(arr10.concat([4 , 5] , 6));
// console.log(arr10);
// console.log( "--------------------------------------------------" );
//
// console.log(arr10.concat([4 , [5 , 6]]));
// console.log(arr10);
// console.log( "--------------------------------------------------" );
//
// console.log(arr10.concat('a' , 'b' , 'c')[arr10.length - 1]);
// console.log(arr10.concat('a' , 'b' , 'c'));
// console.log( "--------------------------------------------------" );
// console.log();
//
//
// let arr11   =   [1 , 2 , 3 , 4 , 5];
// console.log(arr11);
// console.log( "--------------------------------------------------" );
//
// console.log(arr11.slice(3));                                                    // slice(a,b)-> a번째부터 b번째까지 잘라냄 (default = 끝까지)
// console.log(arr11);
// console.log( "--------------------------------------------------" );
//
// console.log(arr11.slice(2 , 4));
// console.log(arr11);
// console.log( "--------------------------------------------------" );
//
// console.log(arr11.slice(-2));                                                   //-a는 뒤쪽부터 세는거 시작
// console.log(arr11);
// console.log( "--------------------------------------------------" );
//
// console.log(arr11.slice(1 , -2));
// console.log(arr11);
// console.log( "--------------------------------------------------" );
//
// console.log(arr11.slice(-2 , -1));
// console.log(arr11);
// console.log( "--------------------------------------------------" );
// console.log();
//
//
// let arr12   =   [1 , 5 , 7];
// console.log(arr12);
// console.log( "--------------------------------------------------" );
//
// arr12.splice(1 , 0 , 2 , 3 , 4);                                                //splice()정해진위치의 데이터를 추가하거나 삭제가능 splice(a , b , ...)==> a : 자리 , b>0 : 삭제 , b=0 : 추가
// console.log(arr12);
// console.log( "--------------------------------------------------" );
//
// arr12.splice(5 , 0 , 6);                                                        //splice(a , b , ...) a자리에서 ...을 추가(b=0이므로)
// console.log(arr12);
// console.log( "--------------------------------------------------" );
//
// arr12.splice(1 , 2);                                                            //splice(a,b) a자리부터 b개 삭제
// console.log(arr12);
// console.log( "--------------------------------------------------" );
//
// arr12.splice(2 , 1 , 'a' , 'b');                                                //splice(a,b, ...) a자리에수 b개를 ...로 수정한다
// console.log(arr12);
// console.log( "--------------------------------------------------" );
// console.log();
//
// console.log( "##################################################" );
//
//
// // 3교시 //
// console.log( "##################################################" );
// console.log();
//
// let arr13   =   [1 , 2 , 3 , 4];
// console.log(arr13);
// console.log( "--------------------------------------------------" );
//
// arr13.copyWithin(1 , 2);                                                        //copyWithin(a,b,c) a위치에 삽입, b위치부터 데이터를 복사, c가 없으므로 끝까지
// console.log(arr13);
// console.log( "--------------------------------------------------" );
//
// arr13.copyWithin(2 , 0 , 2);
// console.log(arr13);
// console.log( "--------------------------------------------------" );
//
// arr13.copyWithin(0 , -3 , -1);
// console.log(arr13);
// console.log( "--------------------------------------------------" );
// console.log();
//
//
// let arr14   =   new Array(5).fill(1);
// console.log(arr14);
// console.log( "--------------------------------------------------" );
//
// arr14.fill("a");                                                                //fill(a , b , c) --> a를 채운다, b는 시작위치, c위치까지(b,c가 없으면 처음부터 끝까지 , c가 없으면 끝까지)
// console.log(arr14);
// console.log( "--------------------------------------------------" );
//
// arr14.fill("b" , 1);
// console.log(arr14);
// console.log( "--------------------------------------------------" );
//
// arr14.fill("c" , 2 , 4);
// console.log(arr14);
// console.log( "--------------------------------------------------" );
//
// arr14.fill(5.5 , -4);
// console.log(arr14);
// console.log( "--------------------------------------------------" );
//
// arr14.fill(0 , -3 , -1);
// console.log(arr14);
// console.log( "--------------------------------------------------" );
// console.log();
//
// let arr15   =   [1 , 2 , 3 , 4 , 5];
// console.log(arr15);
// console.log( "--------------------------------------------------" );
//
// arr15.reverse();
// console.log(arr15);
// console.log( "--------------------------------------------------" );
//
// arr15   =   [5 , 3 , 2 , 4 , 1];
// console.log(arr15);
// console.log( "--------------------------------------------------" );
//
// arr15.sort();
// console.log(arr15);
// console.log( "--------------------------------------------------" );
//
// arr15   =
// [
//     {   name : "suzanne"    },
//     {   name : "jim"        },
//     {   name : "trevor"     },
//     {   name : "amanda"     }
// ];
// console.log(arr15);
// console.log( "--------------------------------------------------" );
//
// arr15.sort();                                                                   // 반응없음
// console.log(arr15);
// console.log( "--------------------------------------------------" );
//
// arr15.sort((a , b) => a.name > b.name);                                         // sort(a,b) --> a : sort할 대상 , b : 비교대상 ==> 이름의 첫번째 글자가 작은것부터 큰순서로
// console.log(arr15);
// console.log( "--------------------------------------------------" );
//
// arr15.sort((a , b) => a.name[1] < b.name[1]);                                   // 이름의 두번째 글자가 큰것부터 작은순서로
// console.log(arr15);
// console.log( "--------------------------------------------------" );
// console.log();
//
// console.log( "##################################################" );
//
//
// /// 오후 /////
//
// // 4교시 //
// console.log( "##################################################" );
// console.log();
//
// const o = {name : "jerry"};
// let arr16 = [1 , 5 , "a" , o , true , 5 , [1 , 2] , "9"];
// console.log(o);
// console.log(arr16);
// console.log( "--------------------------------------------------" );
//
// console.log(arr16.indexOf(5));
// console.log(arr16.lastIndexOf(5));
// console.log(arr16.indexOf("a"));
// console.log(arr16.lastIndexOf("a"));
// console.log(arr16.indexOf({name : "jerry"}));
// console.log(arr16.indexOf(o));
// console.log(arr16.indexOf([1 , 2]));
// console.log(arr16.indexOf("9"));
// console.log(arr16.indexOf(9));
// console.log( "--------------------------------------------------" );
//
// console.log(arr16.indexOf("a" , 5));        //indexOf(a , b) --> a : 찾을것 , b : 찾을 위치 시작지점
// console.log(arr16.indexOf(5 , 5));
// console.log(arr16.lastIndexOf(5 , 4));
// console.log(arr16.lastIndexOf(true , 3));
// console.log( "--------------------------------------------------" );
// console.log();
//
// // 5의 위치의 자리 값을 새로운 배열에 삽입해보기
// let array = [1 , 5 , 2 , 5 , 4 , 3 , 5 , 7 , 6 , 9 , 10 , 11];
// let search_result = new Array();
// var a = -1;
// while (array.indexOf(5 , a+1) != -1)
// {
//     if (array.indexOf(5 , a+1) >= 0)
//     {
//         a = array.indexOf(5 , a+1);
//         search_result.push(a);
//     }
// }
//
// console.log(search_result);
// console.log(search_result.length);
// console.log( "--------------------------------------------------" );
// console.log();
//
// // 강사님이 하신거
// let array = [1 , 5 , 2 , 5 , 4 , 3 , 5 , 7 , 6 , 9 , 10 , 11];
// let search_result = new Array();
// let search;
//
// search = array.indexOf(5,0);
// while(search !== -1){
//     search_result.push(search);
//     search = array.indexOf(5,search+1);
// }
//
// if (search_result.length > 0){
//     console.log(search_result);
// }
// else {
//     console.log("data not found!!");
// }
// console.log( "--------------------------------------------------" );
// console.log();
// // 강사님이 하신거
//
//
// console.log( "##################################################" );
//
//
// // 5교시 //
// console.log( "##################################################" );
// console.log();
//
// let arr17 = [{id : 5 , name : "judith"} , {id : 7 , name : "francis"}];
// console.log(arr17);
// console.log( "--------------------------------------------------" );
//
// console.log(arr17.findIndex(o => o.id === 5));                                  // id가 5인 것은 배열의 0번쨰에 위치함 ==> 0
// console.log(arr17.findIndex(o => o.name === "francis"));                        // name 이 "francis"인 것은 배열의 1번째에 위치함 ==> 1
// console.log(arr17.findIndex(o => o === 3));                                     // 일치하지 않음 ==> -1
// console.log(arr17.findIndex(o => o.id === 17));                                 // id가 17인 것은 존재하지 않음 ==> -1
// console.log( "--------------------------------------------------" );
//
// console.log(arr17.find(o => o.id === 5));
// console.log(arr17.find(o => o.id === 2));
// console.log( "--------------------------------------------------" );
//
// let arr18 = [1 , 17 , 16 , 5 , 4 , 16 , 10 , 3 , 49];
// console.log(arr18.find((x , i) => i > 2 && Number.isInteger(Math.sqrt(x))));    // sqrt--> 제곱근이 x인 값 ..아하!!
// console.log( "--------------------------------------------------" );
// console.log();
//
// console.log((x , i) => i > 2 && Number.isInteger(Math.sqrt(x)));
//
// let arr19 = [5 , 7 , 12 , 15 , 17];
// console.log(arr19.some(x => x % 2 === 0));
// console.log(arr19.some(x => Number.isInteger(Math.sqrt(x))));
// console.log( "--------------------------------------------------" );
//
// let arr20 = [4 , 6 , 16 , 36];
// console.log(arr20.every(x => x % 2 === 0));
// console.log(arr20.every(x => Number.isInteger(Math.sqrt(x))));
// console.log( "--------------------------------------------------" );
// console.log();
//
//
// let cart = [{name : "widget" , price : 9.95} , {name : "gadget" , price : 22.95}];
// console.log(cart);
// let names = cart.map(x => x.name);
// console.log(names);
// let prices = cart.map(x => x.price);
// console.log(prices);
// let discountprices = prices.map(x => x * 0.8);
// console.log(discountprices);
// console.log( "--------------------------------------------------" );
//
// let items = ["widget" , "gadget"];
// let prices2 = [9.95 , 22.95];
// console.log(items);
// console.log(prices2);
// console.log( "--------------------------------------------------" );
//
// let cart2 = items.map((x , i) => ({name : x , price : prices2[i]}));
// console.log(cart2);
// console.log( "--------------------------------------------------" );
// console.log();
//
// console.log( "##################################################" );
//
//
// // 6교시 //
// console.log( "##################################################" );
// console.log();
//
// let cards = [];
// for (let suit of ['h' , 'c' , 'd' , 's'])
// {
//     for ( let value = 1; value <= 13; ++value)
//     {   cards.push({suit,value});   }
// }
//
// console.log(cards);
// console.log( "--------------------------------------------------" );
//
// console.log(cards.filter(c => c.value === 2));
// console.log( "--------------------------------------------------" );
//
// console.log(cards.filter(c => c.suit === 'd'));
// console.log( "--------------------------------------------------" );
//
// console.log(cards.filter(c => c.value > 10));
// console.log( "--------------------------------------------------" );
//
// console.log(cards.filter(c => c.value >10 && c.suit === 'h'));
// console.log( "--------------------------------------------------" );
// console.log();
//
//
// let arr21 = [5 , 7 , 2 , 4];
// let sum = arr21.reduce((a , x) => a += x , 0);
// // let sum = arr21.reduce((a + x) => a += x); ==> 대신 사용 가능(자동으로 맨 처음 요소가 들어가므로 가능)
//
// console.log(arr21);
// console.log(sum);
// console.log( "--------------------------------------------------" );
//
// let words = ["beachball" , "rodeo" , "angel" , "avrdvark" , "xylophone" , "november" , "chocolate"];
// let alphabetical = words.reduce((a , x) =>
// {
//     if (!a[x[0]]) a[x[0]] = [];
//     a[x[0]].push(x);
//     return a;
// } , {});
// console.log(words);
// console.log(alphabetical);
// console.log( "--------------------------------------------------" );
//
// let longwords = words.reduce((a , w) => w.length > 6 ? a + " " + w : a , "").trim();
// console.log(longwords);
// console.log( "--------------------------------------------------" );
// console.log();
//
//
// let data = [3.3 , 5 , 7.2 , 12 , 4 , 6 , 10.3];
// let stats = data.reduce((a , x) =>
// {
//     a.N++;
//     let delta = x - a.mean;
//     a.mean += delta / a.N;
//     return a;
// } , {   N : 0 , mean : 0 , M2 : 0});
//
// if ( stats.N > 2)
// {
//     stats.variance = stats.M2 / (stats.N - 1);
//     stats.stdev = Math.sqrt(stats.variance);
// }
//
// console.log(stats);
// console.log( "--------------------------------------------------" );
// console.log();
//
// console.log( "##################################################" );
