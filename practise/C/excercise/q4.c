#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Employee {
    int id;
    char nic[50];
    char name[20];
    char address[30];
    struct Date {
        int year;
        int month;
        int date;
    } dateOfBirthday;
    int department;
};

int main() {
    struct Employee* emp = NULL;
    char temp[100];
    int count = 0, number;
    int max_emp = 1;

    //allocate memory for the struct
    emp = (struct Employee*)calloc(max_emp, sizeof(struct Employee));

    if(emp == NULL)
    {
        printf("The memory allocation has failed");
        return 1;
    }

    while (1) {

        printf("Enter 0 to terminate: ");
        scanf("%d", &number);

        if (number == 0)
        {
            break;
        }
        emp[count].id = count;
        printf("Employee number %d\n", count + 1);

        if(count >= max_emp)
        {
            max_emp *= 2;
            //reallocate the memory
            emp = (struct  Employee*)realloc(emp, max_emp * sizeof(struct Employee));
            if (emp == NULL) {
                printf("Memory reallocation failed.\n");
                return 1;
            }
        }
        

        printf("Enter the NIC number: ");
        fgets(emp[count].nic, sizeof(emp[count].nic), stdin);
        emp[count].nic[strcspn(emp[count].nic, "\n")] = '\0';

        printf("Enter the name: ");
        fgets(emp[count].name, sizeof(emp[count].name), stdin);
        emp[count].name[strcspn(emp[count].name, "\n")] = '\0';

        printf("Enter the address: ");
        fgets(emp[count].address, sizeof(emp[count].address), stdin);
        emp[count].address[strcspn(emp[count].address, "\n")] = '\0';

        printf("Enter the DOB\n");
        printf("Enter year of birth: ");
        scanf("%d", &emp[count].dateOfBirthday.year);

        // Clear input buffer
        while((temp[0] = getchar()) != '\n' && temp[0] != EOF){}

        printf("Enter month of birth: ");
        scanf("%d", &emp[count].dateOfBirthday.month);

        // Clear input buffer
        while((temp[0] = getchar()) != '\n' && temp[0]){}

        printf("Enter day of birth: ");
        scanf("%d", &emp[count].dateOfBirthday.date);

        // Clear input buffer
        while ((temp[0] = getchar()) != '\n' && temp[0] != EOF) {}
        count++;
    }

    free(emp);

    return 0;
}