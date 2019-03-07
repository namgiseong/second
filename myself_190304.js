///// 190228 /////
let student_array = new Array;

function register(student_name , student_first_score , student_second_score , student_third_score)
{
    student_array.push
    (
        {
            name :  student_name ,
            first_score : student_first_score,
            second_score : student_second_score,
            third_score : student_third_score
        }
    );

    document.write(student_array);

}
