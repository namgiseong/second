// 1. 5개의 품목 정보가 .....  20개의 판매 정보가 .... 있고 입력순 품목순 팜매금액 순으로 출력하라.
let products =
[
    {product :  "tv"        ,   price : 5000    }   ,   {product :  "vtr"       ,   price : 25000   }   ,
    {product :  "camera"    ,   price : 1500    }   ,   {product :  "computer"  ,   price : 4000    }   ,
    {product :  "keyboard"  ,   price : 300     }
];

let sales =
[
    {product :  "tv"        , sale : 21 }   ,   {product :  "vtr"         , sale : 6  } ,
    {product :  "phone"     , sale : 10 }   ,   {product :  "computer"    , sale : 31 } ,
    {product :  "battery"   , sale : 9  }   ,   {product :  "beam"        , sale : 1  } ,
    {product :  "cable"     , sale : 1  }   ,   {product :  "scaner"      , sale : 1  } ,
    {product :  "mouse"     , sale : 32 }   ,   {product :  "memory"      , sale : 68 } ,
    {product :  "moniter"   , sale : 11 }   ,   {product :  "harddisk"    , sale : 36 } ,
    {product :  "camera"    , sale : 28 }   ,   {product :  "chocolate"   , sale : 77 } ,
    {product :  "chair"     , sale : 31 }   ,   {product :  "candy"       , sale : 91 } ,
    {product :  "keyboard"  , sale : 31 }   ,   {product :  "chip"        , sale : 8  } ,
    {product :  "sensor"    , sale : 63 }   ,   {product :  "pad"         , sale : 52 } ,
];

console.log(products);
console.log();
console.log(sales);
console.log("--------------------------------------------------");

for (let count = 0; count < products.length; ++count)
{
    products[count].sale = sales.find(o => o.product === products[count].product).sale;
    products[count].sell_price = products[count].price * products[count].sale;
}

let sum = 0;
for (let x = 0; x < products.length; ++x)
{
    sum += products[x].sell_price;
}
products.push(`총매출액 : ${sum}`)

console.log(" 입력순 ");
console.log(products);
// 다르게 출력하기
for (let line = 0; line < products.length - 1; ++line)
{
    console.log(`상품명 : ${products[line].product}\t가격 : ${products[line].price}\t판매량 : ${products[line].sale}\t매출액 : ${products[line].sell_price}`);
}
console.log(products[products.length-1]);

console.log("--------------------------------------------------");
console.log();


let products_name_rank = products.sort((front , back) => front.product > back.product);
console.log(" 품목순 ");
console.log(products_name_rank);
console.log("--------------------------------------------------");
console.log();


let products_price_rank = products.sort((front , back) => front.sell_price > back.sell_price);
console.log(" 판매금액순 ");
console.log(products_price_rank);
console.log("--------------------------------------------------");
console.log();
