// 1. 10명의 학생 성적을 출력하는 프로그램(함수 사용)
const student =
[
    {   name    :  "자갈치"    ,   first_test : "75"   ,   second_test : "81"  ,   third_test : "70"   },
    {   name    :  "포카칩"    ,   first_test : "26"   ,   second_test : "24"  ,   third_test : "15"   },
    {   name    :  "오감자"    ,   first_test : "87"   ,   second_test : "96"  ,   third_test : "84"   },
    {   name    :  "홈런볼"    ,   first_test : "33"   ,   second_test : "48"  ,   third_test : "34"   },
    {   name    :  "포스틱"    ,   first_test : "66"   ,   second_test : "77"  ,   third_test : "67"   },
    {   name    :  "새우깡"    ,   first_test : "51"   ,   second_test : "69"  ,   third_test : "59"   },
    {   name    :  "감자깡"    ,   first_test : "70"   ,   second_test : "54"  ,   third_test : "48"   },
    {   name    :  "꼬북칩"    ,   first_test : "91"   ,   second_test : "100" ,   third_test : "92"   },
    {   name    :  "수미칩"    ,   first_test : "24"   ,   second_test : "35"  ,   third_test : "23"   },
    {   name    :  "스윙칩"    ,   first_test : "45"   ,   second_test : "18"  ,   third_test : "06"   },
];

function update( test_sum , test_average , test_rating )
{
    this.test_sum  =   test_sum;
    this.test_average =   test_average;
    this.test_rating = test_rating;
}

function test_result(student_one)
{
    // 합계
    test_sum        =   Number(student_one.first_test) + Number(student_one.second_test) + Number(student_one.third_test);
    // 평균
    test_average    =   parseInt(test_sum / 3);
    // 등급
    if      (test_average >90)      test_rating = "A";
    else if (test_average >80)      test_rating = "B";
    else if (test_average >70)      test_rating = "C";
    else if (test_average >60)      test_rating = "D";
    else                            test_rating = "F";

    update.call( student_one, test_sum , test_average , test_rating )
}

// 점수 계산하기
for (var array = 0; array<student.length; array++)
{
    test_result(student[array]);
}

// 등수 매기기
for (var x = 0; x<student.length; x++)
{
    var rank_val = 1;
    for (var y = 0; y<student.length; y++)
    {
        if (student[x].test_sum<student[y].test_sum)
        {   ++rank_val; }
    }
    student[x].test_rank = rank_val;
}

// 전부 출력
// for (var array = 0; array<student.length; array++)
// {
//     console.log(`${student[array].name}\n첫번째 시험: ${student[array].first_test}\n두번째 시험: ${student[array].second_test}\n세번째 시험: ${student[array].third_test}\n합계 : ${student[array].test_sum}\t평균 : ${student[array].test_average}\t등급 : ${student[array].test_rating}\t등수 : ${student[array].test_rank}`);
//     console.log( "--------------------------------------------------" );
//     console.log();
// }

// 등수별로 출력
for (var x = 0; x < student.length; x++)
{
    for (var array = 0; array<student.length; array++)
    {
        if (student[array].test_rank == x+1)
        {
            console.log(`${student[array].name}\n첫번째 시험: ${student[array].first_test}\n두번째 시험: ${student[array].second_test}\n세번째 시험: ${student[array].third_test}\n합계 : ${student[array].test_sum}\t평균 : ${student[array].test_average}\t등급 : ${student[array].test_rating}\t등수 : ${student[array].test_rank}`);
            console.log( "--------------------------------------------------" );
            console.log();
        }
    }
}
