#include <stdio.h>
#include <string.h>

int main()
{
    char string[50], string2[50];
    char name [] = "vinuka";
    printf("enter string: \n");
    fgets(string,sizeof(string),stdin);

    string[strcspn(string, "\n")] = '\0';
    
    printf("before: %s\n", name);

    strcpy(name, string);

    printf("after: %s\n", name);

    printf("enter string 2: \n");
    fgets(string2,sizeof(string2),stdin);

    strcat(string, " ");
    strcat(string, string2);
    printf("after concatenation: %s\n", string);

    if(strcmp(string, name) == 0)
    {
        printf("strings are same");
    }
    else if(strcmp(string, name) > 0)
    {
        printf("string is longer");
    }
    else
    {
        printf("Name is longer");
    }

    return 0;
}