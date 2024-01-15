function init()
{
    var p = document.getElementById('msg2');
    p.innerHTML ="Page loaded";
}

function changeBackGroundOfPs(id) {
    var para = document.querySelectorAll("#" + id + " p");

    para.forEach(function (p1) {
        p1.style.backgroundColor = 'red';
    });
}

addEventListener('click', function (event) {
    this.document.body.innerHTML += 'button clicked<br>';
});

var btnClick = document.querySelector('#btn1');

// Keep a reference to the function
var alertDisplayFunction = function () {
    alert('Button 1 clicked');
    btnClick.removeEventListener('click', alertDisplayFunction);
};

btnClick.addEventListener('click', alertDisplayFunction);

function alertDisplay1(event) {
    alert("Button 2 clicked");
}
