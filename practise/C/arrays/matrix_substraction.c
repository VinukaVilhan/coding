#include <stdio.h>


void printMatrix(int rows, int columns, int array[rows][columns]);
void substractMatrix(int rows1, int columns1, int rows2, int columns2, int firstArray[rows1][columns1], int secondArray[rows2][columns2], int resultArray[rows1][columns1]);


int main()
{
    //prompt1
    printf("Enter rows and columns for 1st matrix\n");
    int rows1 = 0, columns1 =0;
    printf("Enter the number of Rows: ");
    scanf("%d", &rows1);
    printf("Enter the number of Columns: ");
    scanf("%d", &columns1);

    //prompt2
    printf("Enter rows and columns for 2nd matrix\n");
    int rows2 = 0, columns2 =0;
    printf("Enter the number of Rows: ");
    scanf("%d", &rows2);
    printf("Enter the number of Columns: ");
    scanf("%d", &columns2);

    //initialize the 2d array
    int firstArray[rows1][columns1];
    int secondArray[rows2][columns2];
    int resultArray[rows1][columns1];
    //input values for each cell in the array
    
    //first matrix
    //each row
    printf("Enter the values for the 1st matrix\n");
    for(int x = 0; x < rows1; x++)
    {
        //each column
        for(int y = 0; y < columns1; y++)
        {
            printf("Value for %d row %d column: ", x , y);
            scanf("%d", &firstArray[x][y]);
        }
    }

    //second matrix
    //each row
    printf("Enter the values for the 2nd matrix\n");
    for(int x = 0; x < rows2; x++)
    {
        //each column
        for(int y = 0; y < columns2; y++)
        {
            printf("Value for %d row %d column: ", x , y);
            scanf("%d", &secondArray[x][y]);
        }
    }

    //substract the matrices if the matrices match
    if(columns1 == columns2 && rows1 == rows2)
    {
        substractMatrix(rows1, columns1, rows2, columns2, firstArray, secondArray, resultArray);
        printMatrix(rows1, columns1, resultArray);
    }
    else
    {
        printf("Matrix dimension do not match. Additions can not be performed. \n");
    }
    
    // //print the matrix
    // printMatrix(rows1, columns1, firstArray);
   
    return 0;
}

void printMatrix(int rows, int columns, int array[rows][columns])
{
    //each row
    for(int x = 0; x < rows; x++)
    {
        //each column
        for(int y = 0; y < columns; y++)
        {
            printf("%d ", array[x][y]);
        }
        printf("\n");
    }
    printf("\n");
}

void substractMatrix(int rows1, int columns1, int rows2, int columns2, int firstArray[rows1][columns1], int secondArray[rows2][columns2], int resultArray[rows1][columns1])
{
    //each row
    for(int x = 0; x < rows1; x++)
    {
        //each column
        for(int y = 0; y < columns1; y++)
        {
            resultArray[x][y] = firstArray[x][y] - secondArray[x][y];
        }
        printf("\n");
    }
}
