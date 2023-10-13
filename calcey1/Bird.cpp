#include "Bird.h"

Animal *tempAnimal;

void Bird::setlengthsOfWing(double length)
{
    this->lengthOfWings=length;   
} 
double Bird::getlengthsOfWing()
{
    return this->lengthOfWings;
}

Bird::Bird(string name,int noOfLegs,string sound,double lengthOfWings):Animal(name,noOfLegs,sound)//Set and initiate the parent const
{
    this->lengthOfWings=lengthOfWings;
}
Animal Bird::getAnimalDetails(string name,int noOfLegs,string sound)
{
    tempAnimal=new Animal(); 
    cout<<this->lengthOfWings<<endl;
    return *tempAnimal;
}
void Bird::talk() //method overriding
{
    cout<<"The bird is talking "<<this->lengthOfWings<<" with wing size";
}

Bird::~Bird()
{
    delete tempAnimal;
    cout<<"Destructor has been called"<<endl;
}

