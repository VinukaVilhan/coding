#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    //pointer to store the array of names
    char **names = NULL;
    int capacity = 0, size = 0;

    while(1)
    {
        char name[20];
        printf("Enter the student name: \n");

        //read input until newline character is encountered
        if(scanf("%[^\n]%*c", name) == 0 || name[0] == '\0')
        {
            break;
        }

        //reallocate memory if necessary
        if(size == capacity)
        {
            capacity = (capacity == 0) ? 1 : capacity * 2;
            names = realloc(names, capacity * sizeof(char *));
        }

        //allocate memory for name and copy it to the array
        names[size] = malloc((strlen(name) + 1) * sizeof(char));
        strcpy(names[size], name);
        size++;
    }

    // Print the names
    printf("Entered names:\n");
    for (int i = 0; i < size; i++) {
        printf("%s\n", names[i]);
    }
    
    //free the memory
    for(int x = 0; x < size; x++)
    {
        free(names[x]);
    }

    free(names);
    return 0; 
}