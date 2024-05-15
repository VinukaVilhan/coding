#include <stdio.h>
#include <stdlib.h>
#include <string.h>


int main()
{
    char name[20];
    int number;
    
    printf("Enter the number of students: ");
    scanf("%d", &number);

    //allocate memory for a array to store dynamically allocated memory addresses for each name
    char** store = (char**)malloc(number * sizeof(char*));

    printf("Enter student names:\n");
    for(int x = 0; x < number; x++)
    {
        printf("Name of the student %d:\n", x);
        scanf(" %[^\n]", name);

        //dynamically allocate memory for each name and store them in an array
        store[x] = (char*) malloc((strlen(name)+1) * sizeof(char));
        strcpy(store[x], name);
    }

    printf("The students are: \n");
    
    for(int x = 0; x < number; x++)
    {
        printf("Name: %s\n", store[x]);
    }
    return 0;
}