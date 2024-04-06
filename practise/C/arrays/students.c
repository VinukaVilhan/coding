#include <stdio.h>
#include <string.h>

#define MAX_STUDENTS 10
#define MAX_NAME_LENGTH 50

void main()
{
    char students [MAX_STUDENTS][MAX_NAME_LENGTH];
    // Loop to get input for 10 students
    for (int i = 0; i < MAX_STUDENTS; i++) 
    {
        printf("Enter the name of student %d: ", i + 1);
        fgets(students[i], MAX_NAME_LENGTH, stdin);

        // Remove trailing newline character (if present)
        students[i][strcspn(students[i], "\n")] = '\0';
    }

    // Print the array of names
    printf("\nArray of student names:\n");
    for (int i = 0; i < MAX_STUDENTS; i++) 
    {
        printf("%d.%s ", i + 1, students[i]);
    }   
}


