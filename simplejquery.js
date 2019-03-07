//필요할때 쓰려고 미리 만들어놓기는 함ㅋ
///// 1903051505 /////

// ///// 5교시 /////
// $(document).ready(function()
// {
//     $(".callout").css("border","solid 1px rgba(28,245,152,0.5)");
//     $(".code").css("background","rgba(228,45,52,0.5)");
//     $(".code").css("margin","1px 2px")
//     $(".code").css("padding" , "1px 4px");
//     $(".code").css("font-family" , "monospace");
//     //$(".highlight").css("background" , "rgba(128,245,152,0.7)");
//     //$(".highlight").css("font-family" , "italic");
//     $(".sing").css("color","rgba(128,245,152,0.5)");
//     $(".sing").css("background","rgba(28,45,52,0.7)");
//
//     $("div > a[target]").css("background" , "rgba(178,175,82,0.4)");            //a태그안에 속성을 지정하여 css적용
//     $("div > a[href='http://www.daum.net']").css("background" , "rgba(78,175,222,0.4)");        // a태그안에 html주소를 지정하여 css 적용
//     $("div > a[href!='http://www.daum.net']").css("background" , "rgba(278,175,222,0.8)");      // !를 이용하여 지정주소를 제외한 나머지에 css 적용
//     $("div[id^='high']").css("backgound","rgba(278,75,222,0.6)");
//     $("span[class$='de']").css("font-style" , "italic");
//     $("div[id*='o']").css("font-style" , "italic")
// });


// ///// 6교시 /////
// $(document).ready(function()
// {
//     $("ul.url > li").css("border" , "2px solid rgba(28,245,152,0.5)");
//     $(".url2  li").css("border" , "2px solid rgba(228,145,52,0.5)");
//     $("label + input").css("border" , "1px solid rgba(28,145,252,0.5)");
//     $("#info ~ input").css("background" , "rgba(8,5,252,0.2)");
//
//
// });


///// 7교시 /////
// $(document).ready(function()
// {
//     $("tr:eq(0) > td:eq(7)").css("background" , "rgba(28,45,152,0.5)");         // tr 0번째에서 td 7번째의 요소
//     $("tr:eq(1) > td:gt(2)").css("background" , "rgba(28,95,152,0.5)");         // tr 1번째에서 td 2번째보다 뒤~애들
//     $("tr:eq(2) > td:odd").css("background" , "rgba(28,145,152,0.5)");          // tr 2번째에서 td 홀수번째의 애들
//     $("tr:eq(3) > td:first").css("background" , "rgba(28,195,152,0.5)");        // tr 3번째에서 td 첫번쨰의 아이
//     $("tr:eq(3) > td:last").css("background" , "rgba(28,245,152,0.5)");         // tr 3번째에서 td 마지막번쨰의 아이
// });

// $(document).ready(function()
// {
//     $("tr:even").css("background" , "rgba(28,45,152,0.5)");                     // tr 짝수번째의 요소를 선택, css 적용
// });

// $(document).ready(function()
// {
//     $("tr:not(.no)").css("background" , "rgba(228,45,152,0.5)");                     // tr 에서 no클래스가 아닌 요소를 선택, css 적용
// });

// $(document).ready(function()
// {
//     $("#txt:focus").css("background" , "rgba(228,145,52,0.5)");                     // tr 에서 no클래스가 아닌 요소를 선택, css 적용
// });


///// 8교시 /////
// $(document).ready(function()
// {
//     $("li").css("margin" , "5px");
//     $(":checked,:selected").css("border" , "2px solid rgba(28,45,252,0.5)");    // tr 에서 no클래스가 아닌 요소를 선택, css 적용
//     $(":selected").css("background" , "rgba(28,245,152,0.5)");
// });

// $(document).ready(function()
// {
//     $("td:first").css("background" , "rgba(28,245,152,0.5)");
//     $("td:first-child").css("background" , "rgba(228,45,252,0.5)");
//     $("td:last-child").css("background" , "rgba(228,245,52,0.5)");
// });

// $(document).ready(function()
// {
//     $("td:nth-child(2n+1)").css("background" , "rgba(28,245,152,0.5)");
// });

// $(document).ready(function()
// {
//     $("td").filter(function(index)
//     {   return index % 3 == 0;  }).css("background" , "rgba(28,245,152,0.5)");
// });



///// 190306 /////

///// 1교시 /////
// $(document).ready(function()
// {
//     $("td").not(function(index)
//     {   return index % 5 == 2;  }).css("background" , "rgba(28,245,152,0.5)");
// });

// $(document).ready(function()
// {
//     $("li").has("ul").css("background" , "rgba(228,45,152,0.5)");
// });

// $(document).ready(function()
// {
//     $("*").each(function()
//     {
//         if ($(this).is("li"))
//         {   $(this).css("border" , "1px solid rgba(28,245,152,0.5)");  }
//     }
// });

// $(document).ready(function()
// {
//     var litext = $("li").map(function(index)
//     {   return "[(" + index + ")" + $(this).text() + "]";   }).get().join(',');
//     $("#result").text(litext);
// });



///// 2교시 /////
// function colorem()
// {
//     var $div = $("div");
//     var start = Math.floor(Math.random()*$div.length);
//     var end = Math.floor(Math.random()*($div.length-start))+start+1;
//
//     if(end===$div.length)
//     {   end=undefined;  }
//     $div.css("background","");
//     if(end)
//     {
//         $div.slice(start,end).css("background","rgba(228,45,152,0.5)");
//         $("span").text("$('div').slice("+start+(end?","+end:"")+").css('background','rgba(228,45,152,0.5)');");
//     }
//     else
//     {
//         $div.slice(start).css("background","rgba(28,45,252,0.5)");
//         $("span").text("$('div').slice("+start+(end?","+end:"")+").css('background','rgba(28,45,252,0.5)');");
//     }
//
// }
//
// $("button").click(colorem);

// $(document).ready(function()
// {
//     $("li").add("div>p").css("border","1px solid rgba(28,45,252,0.5)");
// });

// $(document).ready(function()
// {
//     $("ul").find("li").contents().remove("ul");
// });




///// 3교시 /////
// $(document).ready(function()
// {   $("div").filter("p").css("border","1px solid rgba(228,45,52,0.5)"); });

// $(document).ready(function()
// {   $("div").filter(".my").css("border","1px solid rgba(228,45,52,0.5)"); });

// $(document).ready(function()
// {   $("div").find("p").css("border","3px solid rgba(228,45,52,0.5)"); });

// $(document).ready(function()
// {
//     $("li").each(function()
//     {
//         $(this).click(function()
//         {
//             $(this).addClass("selected");
//             $(this).siblings().removeClass("selected");
//         });
//     });
// });

$(document).ready(function()
{   $("td").css("background",function(index,value)
    {
        if (value=="rgba(28,115,152,0.5)")
            {    return "red";   }
    });
});
