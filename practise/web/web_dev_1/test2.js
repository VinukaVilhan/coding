var students = [];
function create()
{
    var numStudents = document.getElementById("number").value;
    var container = document.getElementById("fields");
    container.innerHTML='';
    for(var x=0; x < numStudents; x++)
    {
        container.innerHTML+='<p>Enter the name and marks of the student '+(x+1)+':</p>';
        container.innerHTML+='<input type="text" id="name'+ x +'" name="name '+x+'" placeholder="Name" >';
        container.innerHTML+='<input type="number" id="marks'+x+'" name="marks '+x+'" placeholder="marks">';
        container.innerHTML+='<button type="submit" id="btn'+x+'" >Calculate Grade</button>';
        container.innerHTML+='<p id ="grade'+ x +'"></p>';

        // Add event listener to the button
        (function(x) {
            document.getElementById("btn"+x).addEventListener("click", function() {
                calculateGrade(x);
                alert("Grade has been calculated");
            });
        })(x);
    }
}

function calculateGrade(x)
{
    var marks = document.getElementById("marks"+x).value;
    var name = document.getElementById("name"+x).value;
    var grade;
    if (marks >=90)
    {
        grade='A';
    }
    else if(marks>=65)
    {
        grade='B';
    }
    else if(marks>=55)
    {
        grade='C';
    }
    else if(marks>=35)
    {
        grade='S';
    }
    else
    {
        grade='F';
    }
    document.getElementById("grade"+x).innerHTML = 'Grade: <span style ="color: '+ getColor(grade)+';" >' + grade+ '</span>';

    // storing the name, grade, and marks in a table. 
    students[x] = {name:name, marks:marks, grade:grade};
    createTable();
}

function getColor(grade)
{
    switch(grade)
    {
        case'A':return 'green';
        case'B':return 'purple';
        case 'C': return 'orange';
        case'S': return 'pink';
        default: return 'red';
    }
}

function createTable()
{
    var table = '<table><tr><th>Name</th><th>Marks</th><th>Grade</th></tr>';
    for(var i=0; i < students.length; i++ )
    {
        table+= '<tr><td>' + students[i].name + '</td>' + '<td>'+ students[i].marks + '</td>' + '<td>' + students[i].grade + '<td/><tr/>';
    }
    table += '</table>';

    document.getElementById("fields").innerHTML += table;
}
