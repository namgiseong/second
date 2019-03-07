///// 190228 /////
function printDOM( node , prefix )
{
    console.log( prefix + node.nodeName + '-' + node.nodeType );
    for ( let i = 0; i < node.childNodes.length; ++i)
    {
        printDOM( node.childNodes[i] , prefix + '\t' );
    }
}
//printDOM( document,'');

console.log(document.getElementById('content'));

const callouts = document.getElementsByClassName('callout')
console.log(callouts);

const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

document.write("<p><b>document</b> object - write() method</p>");

const paral = document.getElementsByTagName('p')[0];
console.log(paral.textContent);
console.log(paral.innerHTML);
//paral.textContent = "Modified HTML file";
paral.innerHTML = "Modified <i>HTML</i> file";


const p1 = document.createElement('p');
const p2 = document.createElement('p');
p1.innerHTML = "I was <b><i>created</i> dynamically</b>!";
p2.textContent = "I was <b><i>also created</i> dynamically</b>!";

console.log(document.getElementById('content'));
const parent = document.getElementById('content');
const firstChild = parent.childNodes[0];
parent.insertBefore(p1 , firstChild);
parent.appendChild(p2);
console.log(document.getElementById('content'));



///// 190304 /////
// 2 교시 //
function highlightParas(containing)
{
    if (typeof containing == 'string')
    {   containing = new RegExp(`\\b${containing}\\b` , 'i');   }
    const paras = document.getElementsByTagName('p');
    console.log(paras);
    for (let p of paras)
    {
        if ( !containing.test(p.textContent))
        {   continue;   }
        p.classList.add('highlight');
    }
}

//highlightParas('unique');


function removeParaHighlights()
{
    const paras = document.querySelectorAll('p.highlight');
    for (let p of paras)
    {   p.classList.remove('highlight');    }
}


const highlightActions = document.querySelectorAll('[data-action = "highlight"]');
console.log(highlightActions);
console.log(highlightActions[0].dataset);
highlightActions[0].dataset.containing = "giraffe";
highlightActions[0].dataset.caseSensitive = "true";                             // = 대문자로 하겠다~

for (let a of highlightActions)
{
    a.addEventListener('click', evt =>                                          // 화살표 표기법 사용
        {
            evt.preventDefault();                                               // 항상 먼저 호출해줘야 함!!!
            //highlightParas(a.dataset.containing);//변경
            highlightParas('unique');
        });
}

const removeHighlightActions = document.querySelectorAll('[data-action = "removeHighlights"]');
for (let a of removeHighlightActions)
{
    a.addEventListener('click',evt =>
        {
            evt.preventDefault();
            removeParaHighlights();
        });
}
