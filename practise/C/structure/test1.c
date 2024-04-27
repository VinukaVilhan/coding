#include <stdio.h>
#include <string.h>

//a template, this has no memory allocated
struct student 
{
    int id;//4byte
    char name[20];//1byte
    float marks;//4byte
};

//structure variable can be declared inside or outside the main function
struct student s1,s2;

void main()
{
    // struct student s2 = {2, "vinuka", 23.5};
    // printf("%d",s2.id);

    // s1.id = 5;
    // printf("%d\n", s1.id);
    // strcpy(s1.name, "Vinuka");
    // printf("%s", s1.name);

    printf("Enter info for s1: ");
    printf("Enter the ID: ");
    scanf("%d", &s1.id);
    //character arrays inherently hold the memory address of the first element in the array
    printf("Enter the name: ");
    scanf("%s", s1.name);
    printf("Enter the marks: ");
    scanf("%f", &s1.marks);


    printf("Enter info for s2: ");
    printf("Enter the ID: ");
    scanf("%d", &s2.id);
    //character arrays inherently hold the memory address of the first element in the array
    printf("Enter the name: ");
    scanf("%s", s2.name);
    printf("Enter the marks : ");
    scanf("%f", &s2.marks);

    printf("Id of s1: %d", s1.id);
    printf("Name of s1: %s", s1.name);
    printf("Marks of s1: %f", s1.marks);

    printf("Id of s2: %d", s2.id);
    printf("Name of s2: %s", s2.name);
    printf("Marks of s2: %f", s2.marks);

}