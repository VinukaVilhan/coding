
#include "Bird.h"
int main() //only one main method per project
{
    //Stack is Automatic Storage 
   // Animal obj1("Tom",4,"Meeew");
   // Animal obj2("Jerry",4,"Meek");
    //Heap is Dynamic Storage
   // Animal* obj3=new Animal("Killer",4,"Woof Woof");
   // delete obj3;

   // obj3->setName("Killer");
    //obj3->setNofLegs(4);
   // obj3->setSound("Woof Woof");
   // obj3->talk();

  
    /*obj1.name="Tom";
    obj1.noOfLegs=4;
    obj1.sound="Meeew";

    obj2.name="Jerry";
    obj2.noOfLegs=4;
    obj2.sound="Sqeek";

    obj1.talk();
    obj2.talk();*/

    //Bird b1("crow",2,"Creek Creek",25.6);//Stack

   // b1.talk();
   

    Bird *b2=new Bird("pigen",2,"Errrrr",75.6);//heap

    b2->talk();

    Animal *b3=new Bird("cow",2,"mmmm",24.6);//heap

    Bird *b4=new Bird("cow",2,"mmmm",24.6);//heap

    b3->talk();//parent class talk method
    b4->talk();//child class talk method

    //cout<<b3->getlengthsOfWing()<<endl;//not allowed

    delete b2;

    delete b3;   
 
    return 0;
}