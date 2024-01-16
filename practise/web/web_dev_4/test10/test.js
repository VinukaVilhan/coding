window.onload = init;

var menu, menuIsVisible;

function init()
{
    menu = document.querySelector('#context-menu');
    menuIsVisible = false;

    //attach the conext menu to the first div
    var div1 = document.querySelector('#div1');
    attachContextMenu(div1);

    //clicking anywhere on the menu toggle the menu off
    window.addEventListener('click', toggleMenuOff);
}

//activate the toggle menu
function attachContextMenu (parameter)
{
    parameter.addEventListener('contextmenu', function(e)
    {
        e.preventDefault();

        toggleMenuOn();
        positionMenu(e);

    });
}

function toggleMenuOn()
{
    if(!menuIsVisible)
    {
        menuIsVisible = true;
        menu.classList.add("context-menu--active");
    }
}

function toggleMenuOff()
{
    if(menuIsVisible)
    {
        menuIsVisible = false;
        menu.classList.remove("context-menu--active");
    }
}

//postioningn of the menu
function positionMenu(e)
{
    var clickCoordsX = e.pageX;
    var clickCoordsY = e.pageY;

    var menuWidth = menu.offsetWidth + 1;
    var menuHeight = menu.innerHeight + 1;

    var elementWidth = e.target.offsetWidth;
    var elementHeight = e.target.offsetHeight;

    if ((elementWidth - clickCoordsX) < menuWidth)
    {
        menu.style.left = elementWidth - menuWidth + 'px';
    }
    else
    {
        menu.style.left = clickCoordsX + 'px';
    }

    if((elementHeight - clickCoordsY) < menuHeight)
    {
        menu.style.top = elementHeight - menuHeight + 'px';
    }
    else
    {
        menu.style.top = clickCoordsY + 'px';
    }
}

function menuItem1()
{
    console.log('shoot');
    toggleMenuOff();
}

function menuItem2()
{
    console.log('blast');
    toggleMenuOff();
}