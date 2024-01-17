function changeCSSStyle()
{
    //para1
    var p1 = document.querySelector('#p1');
    p1.innerHTML = 'style.color was used to change the color';
    p1.style.color = 'red';

    //para2
    var p2 = document.querySelector('#p2');
    p2.innerHTML = 'style.backgroundColor';
    p2.style.backgroundColor = 'blue';

    //para3
     var p3 = document.querySelector('#p3');
     p3.innerHTML = "style.marginLeft is used";
     p3.style.marginLeft = '100px';

     //para4
     var p4 = document.querySelector('#p4');
     p4.innerHTML = 'style.border and style.padding is used';
     p4.style.border = '4px solid black';
     p4.style.padding = '20px';

     var p5 = document.querySelector('#p5');
     p5.innerHTML = 'style.textAlign, style.border, style.bowShadow used';
     p5.style.textAlign = 'center';
     p5.style.border = '2px dashed red';
     p5.style.boxShadow = '2px 2px 5px 0px grey';
}