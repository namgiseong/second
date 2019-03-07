// // 1. 1~10000 사이의 3의 배수와 5의 배수 개수를 출력하는 프로그램
// var value, count_3 = 0 , count_5 = 0 , count_15 = 0;
//
// for (value = 1; value <=10000; value++)
// {
//     if ( value % 3 == 0 )
//     {   count_3++;  }
//
//     if ( value % 5 == 0 )
//     {   count_5++;  }
//
//     if (value % 15 == 0)
//     {   count_15++; }
// }
// console.log(`1~10000 사이에 3의 배수는 ${count_3}개이고 5의 배수는 ${count_5} 개가 있습니다.\n총 ${count_3 + count_5 - count_15}개가 있습니다.`);


// // 2. 20개의 data를 배열에 저장한 후 양수/음수, 양수일 때 짝수/ 홀수 개수를 출력하는 프로그램(배열사용)
// var data = [10 , -217 , 58 , 74 , 0 , -99 , -998 , -65 , 49 , 849 , -849 , 84 , 0 , -98 , 0 , 49 , -80 , 59 , -887 , 10];
// var count_odd_number = 0 , count_even_number = 0 , count_positive_number = 0 , count_negative_number = 0 , count_zero = 0;
// for (var state = 0; state < data.length; state++)
// {
//     if ( data[state] > 0 )
//     {
//         count_positive_number++;
//         if ( data[state] % 2 == 0 )
//         {   count_even_number++;   }
//         else
//         {   count_odd_number++;    }
//     }
//     else if ( data[state] < 0 )
//     {   count_negative_number++;    }
//     else
//     {   count_zero++;   }
// }
// console.log(`음수의 갯수는 ${count_negative_number} 개 이고, 양수의 갯수는 ${count_positive_number} 개 이며,\n그 중에서 홀수의 갯수는 ${count_odd_number}개 이고, 짝수의 갯수는 ${count_even_number}개 입니다.\n0의 갯수는 ${count_zero}개 입니다.`);


// // 3. 구구단을 출력하는 프로그램(2단 ~ 9단)
// var gugudan_x, gugudan_y;
//
// for (gugudan_x = 2; gugudan_x <10; ++gugudan_x)
// {
//     console.log(`${gugudan_x} 단 시작 `);
//     for (gugudan_y = 1; gugudan_y <10; ++gugudan_y)
//     {
//         console.log(`${gugudan_x} x ${gugudan_y} = ${gugudan_x*gugudan_y}`);
//     }
//     console.log(`${gugudan_x} 단 끝`);
//     console.log();
// }


// 4. 10명의 학생 성적을 출력하는 프로그램(object 사용)
var student =
[
    {   name    :  "꼬북칩"    ,   first_test : "95"   ,   second_test : "100" ,   third_test : "99"   },
    {   name    :  "오감자"    ,   first_test : "85"   ,   second_test : "90"  ,   third_test : "88"   },
    {   name    :  "자갈치"    ,   first_test : "75"   ,   second_test : "80"  ,   third_test : "77"   },
    {   name    :  "포스틱"    ,   first_test : "65"   ,   second_test : "70"  ,   third_test : "66"   },
    {   name    :  "새우깡"    ,   first_test : "55"   ,   second_test : "60"  ,   third_test : "55"   },
    {   name    :  "감자깡"    ,   first_test : "45"   ,   second_test : "50"  ,   third_test : "44"   },
    {   name    :  "홈런볼"    ,   first_test : "35"   ,   second_test : "40"  ,   third_test : "33"   },
    {   name    :  "수미칩"    ,   first_test : "25"   ,   second_test : "30"  ,   third_test : "22"   },
    {   name    :  "포카칩"    ,   first_test : "15"   ,   second_test : "20"  ,   third_test : "11"   },
    {   name    :  "스윙칩"    ,   first_test : "5"    ,   second_test : "10"  ,   third_test : "00"   },
];

var test_sum = 0 , test_average = 0 , test_estimation = "";
for (var array = 0; array<student.length; array++)
{
    test_sum        =   Number(student[array].first_test) + Number(student[array].second_test) + Number(student[array].third_test);
    test_average    =   parseInt(test_sum / 3);
    if  (test_average >80)   test_estimation = "A";
    else if (test_average >60)   test_estimation = "B";
    else if (test_average >40)   test_estimation = "C";
    else if (test_average >20)   test_estimation = "D";
    else                    test_estimation = "F";
    console.log(`${student[array].name}\t${student[array].first_test}\t${student[array].second_test}\t${student[array].third_test}\n합계 : ${test_sum}\t평균 : ${test_average}\t등급 : ${test_estimation}`);
}
