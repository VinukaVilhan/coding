function validateName(event)
{
    //part 1
    var name = event.value;

    var output = document.querySelector('#nameTyped');  

    output.innerHTML = ('Valid Name');

    if (name.length < 5 )
    {
        output.innerHTML = ('<br> The name is too short');
    }

    //part 2

output.innerHTML += "<br> Key: " + name;

if (name.includes("!"))
{
    output.innerHTML += '<br> The ! mark is not valid';

    // Remove the forbidden character
    // Use the substring JavaScript function to remove the last character
    // First parameter = start index, second = last index
    event.value = name.replace("!", "");
}

}