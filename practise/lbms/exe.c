#include <stdio.h>
#include <stdlib.h>
#include <string.h>

//struct
struct Book
{
    char title[100];
    char author[30];
    int year;
    int pages;
};

int main()
{
    int choice, numBooks = 0, max = 5;

    //memory allocation for books struct
    struct Book* library = (struct Book*) malloc(max * sizeof(struct Book));
    
    if(library == NULL)
    {
        printf("Memory allocation failed");
        return 1;
    }

    printf("What do you need to do?\n 1. Add a new book\n 2. Display all books\n 3. Search for a book\n 4. Remove a book\n ");
    printf("Enter your answer: ");
    scanf("%d", &choice);

    switch(choice)
    {
        //add a new book
        case 1:
            printf("You are adding a new book\n");

            printf("Enter the title of the book: ");
            scanf(" %[^\n]", library[numBooks].title);
            printf("Enter the author:");
            scanf(" %[\n]", library[numBooks].author);
            printf("Enter the publication year:");
            scanf("%d", &library[numBooks].year);
            printf("Enter the number of pages:");
            scanf("%d", &library[numBooks].pages);

            numBooks++;

            printf("Book added sucessfully!\n");
            break;

        //display all the books
        case 2: 
            printf("All the books are displayed here: \n");
            for(int x = 0; x < numBooks; x++)
            {
                printf("The title of the book: %s", library[x].title);
                printf("The name of the author: %s", library[x].author);
                printf("The publication year: %d", library[x].year);
                printf("The number of pages: %d", library[x].pages);
            }
            break;

    //     //search for a book        
    //     case 3:

    //         break;
        
    //     //remove a book
    //     case 4:

    //         break;
    }

    free(library);
    
    return 0;
}
