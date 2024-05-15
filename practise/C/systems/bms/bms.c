#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

//the struct definition
struct Bus
{
    int number;
    char from[10];
    char to[10];
    int seats;
    int price;
};

void reservation(int seats, int number, int* total, struct Bus* buses, bool discount, int num_buses);
bool validity(int number, int num_buses, struct Bus* buses);

int main()
{
    struct Bus buses[] = {
        {1, "Matara", "Colombo", 10, 200},
        {2, "Galle", "Kandy", 13, 350},
        {3, "Jaffna", "Hambantota", 15, 420},
        {4, "Kandy", "Colombo", 20, 230}
    };
    
    int num_buses = 4;

    char letter;
    int number, seats, total = 0;
    bool discount = false;

    do
    {

        printf("Bus Name\tSeats Available");
        //iterate the number of buses
        for(int x = 0; x < num_buses; x++)
        {
            printf("\n%d\t\t%d", buses[x].number, buses[x].seats);
        }

        printf("\n");

        do
        {
            printf("Enter the number of the bus: ");
            scanf("%d", &number);
            //check if the number is valid
        } while (!validity(number, num_buses, buses));

        printf("Enter number of seats: ");
        scanf("%d", &seats);

        //discount
        if(seats  > 3)
        {
            printf("10% discount is available");
            discount = true;
        }

        reservation(seats, number, &total, buses, discount, num_buses);

        printf("Do you want to continue reserving seats (y or n)?\n");
        scanf(" %c", &letter);
    }while(letter != 'n');

    printf("Total payment: Rs.%d", total);
    
    return 0;
}


bool validity(int number, int num_buses, struct Bus* buses)
{
    for(int x = 0; x < num_buses; x++)
    {
        if (number == buses[x].number)
        {
            return true;
        }
    }
    return false;
}

void reservation(int seats, int number, int* total, struct Bus* buses, bool discount, int num_buses)
{
    for(int x = 0; x < num_buses; x++)
    {
        if(buses[x].number == number)
        {
            *total += seats * buses[x].price;
            if(discount)
            {
                *total -=  *total * 10/100;
            }
            buses[x].seats = buses[x].seats - seats;
            break;
        }
    }
}