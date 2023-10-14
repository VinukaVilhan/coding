#include "libraries.h"
#include "Car.h"
#define SizeArray 5
int main()
{
   // Car carlist[5];//car array created in stack
   // Array created in the heap
    Car* myList=static_cast<Car*>(malloc(SizeArray*sizeof(Car)));
    int sizeNew=SizeArray;
    int elementsAdded=0;
    char choice='y';
    do{
        if(elementsAdded==0)
        {
            for(int i=0;i<sizeNew;i++)
            {
                new(&myList[i])Car();// idea
                cout<<"Enter the Model Name for car No "<<(i+1)<<endl;
                getline(cin,myList[i].model);
                elementsAdded++;      
            }
        }else{
            for(int i=elementsAdded-1;i<sizeNew;i++)
            {
                new(&myList[i])Car();// idea
                cout<<"Enter the Model Name for car No "<<(i+1)<<endl;
                getline(cin,myList[i].model);
                elementsAdded++;      
            }

        }
       
        cout<<"Array is Full Do you want to double the size y/n?"<<endl;
        cin>>choice;
        if(choice=='y')
        {
            sizeNew*=2;
            myList=static_cast<Car*>(realloc(myList,sizeNew*sizeof(Car)));
        }
   
    }while (choice=='y');    
    
    delete myList;

   
    return 0;
}