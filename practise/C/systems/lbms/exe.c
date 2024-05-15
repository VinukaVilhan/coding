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
    char book_name[50];

    //memory allocation for ann array to store a struct
    struct Book* library = (struct Book*) malloc(max * sizeof(struct Book));
    
    if(library == NULL)
    {
        printf("Memory allocation failed");
        return 1;
    }
    
    do
    {
        printf("What do you need to do?\n 1. Add a new book\n 2. Display all books\n 3. Search for a book\n 4. Remove a book\n 5. Exit\n");
        printf("Enter your answer: ");
        scanf("%d", &choice);

        switch(choice)
        {
            //add a new book
            case 1:
                printf("You are adding a new book\n");
                if(numBooks == max)
                {
                    max *= 2;
                    library = (struct Book*) realloc(library, max * sizeof(struct Book));
                    printf("New memory have been allocated.\n");
                }

                printf("Enter the title of the book: ");
                scanf(" %[^\n]", library[numBooks].title);
                printf("Enter the author:");
                scanf(" %[^\n]", library[numBooks].author);
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
                    printf("The title of the book: %s\n", library[x].title);
                    printf("The name of the author: %s\n", library[x].author);
                    printf("The publication year: %d\n", library[x].year);
                    printf("The number of pages: %d\n", library[x].pages);
                }
                break;

            //search for a book        
            case 3:
                printf("Enter the name of the book you want to search: ");
                scanf(" %[^\n]", book_name);

                
                for(int x = 0; x < numBooks; x++)
                {
                    if(strcmp(library[x].title, book_name) == 0)
                    {
                        printf("The book is found.\n");    
                    }
                    else
                    {
                        printf("The book is not found\n");
                    }
                }
                break;
            
             //remove a book
             case 4:
                printf("You are removing a book\n");
                printf("Enter the name of the book: ");
                scanf(" %[^\n]", book_name);

                int book_idx = -1;
                for(int x = 0; x < numBooks; x++)
                {
                    if(strcmp(library[x].title, book_name) == 0)
                    {
                        book_idx = x;    
                    }
                    else
                    {
                        printf("The book is not found\n");
                    }
                }

                //shift the books
                for(int x = book_idx; x < numBooks - 1; x++)
                {
                    library[x] = library[x+1];
                }

                numBooks--;
                printf("Book was removed sucessfully.\n");
                break;
        }
    }while(choice!=5);

    free(library);
    
    return 0;
}