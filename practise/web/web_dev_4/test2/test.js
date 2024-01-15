function firstLiClassRedInUl()
{
    var first = document.querySelector('ul li.red');

    first.style.color = 'red'; 
}

function allLisInUlOfClassNav()
{
    var lis = document.querySelectorAll("ul.nav > li");

    lis.forEach(function(li)
    {
        li.style.textDecoration = 'underline';
    });
}