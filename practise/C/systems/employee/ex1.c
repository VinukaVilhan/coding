#include <stdio.h>
#include <stdlib.h>
#include <string.h>

//struct
struct Employee
{
    char name[30];
    int age;
    double salary;
    struct Employee* next;
};

// Function to add a new employee to the list
struct Employee* addEmployee(struct Employee* head);

// Function to remove an employee from the list by name
struct Employee* removeEmployee(struct Employee* head);

// Recursive function to print the list of employees in ascending order of age
void printEmployeesByAge(struct Employee* head);

// Function to calculate the total salary budget
double calculateTotalSalaryBudget(struct Employee* head);

void printEmployeeDetails(struct Employee* head);

//must be used before usign fgets() becuase scanf leaves \n charater in the input buffer
void clearInputBuffer();

//function to sort the ages of the employees in ascending order
struct Employee* sortedAges(struct Employee* head);

struct Employee* mergeSort(struct Employee* head);

struct Employee* findMiddle(struct Employee* head);

struct Employee* merge(struct Employee* left, struct Employee* right);

int main()
{
    int input;
    struct Employee* head = NULL;
    int number, count = 0;

    while(1)
    {
        printf("\n");
        printf("Welcome to the employee management system!\n");
        printf("Enter 1: To add a new employee.\n");
        printf("Enter 2: To remove an employee.\n");
        printf("Enter 3: To print employess by age in an ascending order.\n");
        printf("Enter 4: To print employess details.\n");
        printf("Enter 5: To get the total salary of employees.\n");
        printf("Enter 6: To exit the programme.\n");
        printf("Your answer: ");
        scanf("%d", &input);

        switch(input)
        {
            case 1:
                clearInputBuffer();
                while(1)
                {
                    printf("\n");
                    printf("Enter the number of employees you want to enter:");
                    if(scanf("%d", &number) == 1)
                    {
                        break;
                    }
                    else
                    {
                        printf("The input is invalid enter the number\n");
                        clearInputBuffer();
                    }
                }
                
                
                while( count < number)
                {
                    head = addEmployee(head);
                    count++;
                }
                break;

            case 2:
                printf("\n");
                removeEmployee(head);
                break;
            
            case 3:
                printf("\n");
                printEmployeesByAge(head);
                break;

            case 4:
                printf("\n");
                printEmployeeDetails(head);
                break;

            case 5:
                printf("\n");
                calculateTotalSalaryBudget(head);
                break;
            case 6:
                printf("\n");
                printf("Exiting the programme.\n");
                return 0;
        }
    }
    
    return 0;
}


struct Employee* addEmployee(struct Employee* head)
    {
        //allocate memory of an employee
        struct Employee* newEmployee = (struct Employee*) malloc(sizeof(struct Employee));

        //check if memory allocation succeeded
        if(newEmployee == NULL)
        {
            printf("memory allocation failed");
            return head;
        }

        printf("\n");

        printf("Enter the name of the employee: ");
        clearInputBuffer();
        fgets(newEmployee->name, sizeof(newEmployee->name), stdin);
        newEmployee->name[strcspn(newEmployee->name, "\n")] = '\0';

        printf("Enter the age of the emp: ");
        scanf("%d", &(newEmployee->age));

        printf("Enter the salary of the emp: ");
        scanf("%lf", &(newEmployee->salary));

        //set the newxt pointer of the new emp to null
        newEmployee->next  = NULL;

        //if the head is empty the new head is the employee
        if(head == NULL)
        {
            head = newEmployee;
        }
        else
        {
            //traverse to the end of the list and add the emp
            struct Employee* current = head;
            while(current-> next != NULL)
            {
                current = current->next;
            }

            //assign the new emp to the next to last emp
            current-> next = newEmployee;
        }

        return head;
    }

struct Employee* removeEmployee(struct Employee* head)
{
    struct Employee* current = head;
    struct Employee* prev = NULL;

    char empName [30];
    printf("Enter the name of the employee");
    clearInputBuffer();
    fgets(empName, sizeof(empName), stdin);
    empName[strcspn(empName, "\n")] = '\0';

    //if the head is empty nothing to remove
    if(head == NULL)
    {
        printf("No employees to remove");
        return head;
    }

    //removing the head node
    if(strcmp(head->name, empName)==0)
    {
        struct Employee* temp = head;
        head  = head->next;
        free(temp);
        return head;
    }
    
    //traverse and find the correct employee
    while(current!= NULL)
    {
        
        if(strcmp(current->name, empName)==0)
        {
            //delete 
            prev->next  = current->next;
            struct Employee* temp = current;
            current = current->next;
            free(temp);
            return head;
        }
        prev = current;
        current = current->next;
    }

    printf("Employee not found");
    return head;
}


void clearInputBuffer()
{
    int x;
    while((x=getchar())!='\n' && x!=EOF);
}

void printEmployeeDetails(struct Employee* head)
{
    int count = 0;
    struct Employee* temp = head;
    while(temp != NULL)
    {
        count++;
        printf("Name of %d Employee is: %s\n", count, temp->name);
        printf("Age of %d Employee is: %d\n", count, temp->age);
        printf("Salary of %d Employee is: %lf\n", count, temp->salary);
        temp = temp->next;
    }
}

void printEmployeesByAge(struct Employee* head)
{
    //temp array to store employeee structs
    struct Employee* temp = mergeSort(head);

    while(temp != NULL)
    {
        printf("The employee %s is %d years old.\n", temp->name, temp->age);
        temp = temp->next;
    }
}


struct Employee* mergeSort(struct Employee* head)
{
    if(head == NULL || head->next == NULL)
    {
        return head;
    }

    //splitting the list into two halves
    struct Employee* middle = findMiddle(head);
    struct Employee* left = head;
    struct Employee* right = middle->next;
    //break the link between two halves
    middle->next = NULL;

    //recursively sort two halves
    left = mergeSort(left);
    right = mergeSort(right);

    //merge the sorted halves
    return merge(left,right);
}

struct Employee* findMiddle(struct Employee* head)
{
    //check the head node
    if(head == NULL || head->next == NULL)
    {
        return head;
    }

    struct Employee* slow = head;
    struct Employee* fast = head->next;

    while(fast->next != NULL && fast!=NULL)
    {
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;
}

struct Employee* merge(struct Employee* left, struct Employee* right)
{
    //dummy node to store the merged list
    struct Employee* temp = (struct Employee*)malloc(sizeof(struct Employee));
    struct Employee* tail = temp;

    //merge the 2 lists
    while(left != NULL && right != NULL)
    {
        if(left->age <= right->age)
        {
            //merge the element to the new list
            tail->next = left;
            //move the left pointer to the next node
            left = left->next;
        }
        else
        {
            tail->next = right;
            right = right->next;
        }
        //tailpoints to the last node added to the merged list
        tail = tail->next;
    }

    //merge the remaining nodes to the non-empty list
    if(left != NULL)
    {
        tail->next = left;
    }
    else
    {
        tail->next = right;
    }
    
    //returning the tail of the merged list
    struct Employee*head = temp->next;
    free(temp);
    return head;

}

double calculateTotalSalaryBudget(struct Employee* head)
{
    double total = 0;
    //iterate over the employee structs
    struct Employee* current = head;

    while(current != NULL)
    {
        total += current->salary;
        current = current->next;
    }
    printf("The total salary is: %.2lf\n", total);
}