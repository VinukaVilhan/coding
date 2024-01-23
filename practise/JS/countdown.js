// recursive function
function countDown(number)
{

    if (number <= 0)
    {
        console.log("All done!");
        return;
    }
    console.log(number);
    number--;
    countDown(number);

}

countDown(4);