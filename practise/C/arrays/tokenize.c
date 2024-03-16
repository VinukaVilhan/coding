#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void main()
{
    char *s;
    printf("Enter string: \n");
    s= malloc(1024 * sizeof(char));
    scanf("%[^\n]", s);
    s = realloc(s, strlen(s) + 1);

    //tokenizing strings
    char *tokens = strtok(s, " ");

    while (tokens != NULL)
    {
        printf("%s\n", tokens);
        tokens = strtok(NULL, " ");
    }

    free(s);
}

