#include <stdio.h>


void printMatrix(int rows, int columns, int array[rows][columns]);
void transposeMatrix(int rows, int columns, int array[rows][columns]);

int main()
{
    int rows = 0, columns =0;
    printf("Enter the number of Rows: ");
    scanf("%d", &rows);
    printf("Enter the number of Columns: ");
    scanf("%d", &columns);

    //initialize the 2d array
    int array[rows][columns];

    //input values for each cell in the array
    
    //each row
    for(int x = 0; x < rows; x++)
    {
        //each column
        for(int y = 0; y < columns; y++)
        {
            printf("Value for %d row %d column: ", x , y);
            scanf("%d", &array[x][y]);
        }
    }

    //print the matrix
    printMatrix(rows, columns, array);

    transposeMatrix(rows, columns, array);

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
}

void transposeMatrix(int rows, int columns, int array[rows][columns])
{
    //each column
     for(int x = 0; x < columns; x++)
    {
        //each row
        for(int y = 0; y < rows; y++)
        {
            printf("%d ", array[y][x]);
        }
        printf("\n");
    }
}