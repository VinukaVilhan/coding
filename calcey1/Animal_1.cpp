#include "Animal.h"

void Animal::talk()
{
    cout<<"The "+Animal::name+"Speak like "+Animal::sound<<endl;
}

Animal::Animal()//default constructor
{
    this->name="";
    this->noOfLegs=0;
    this->sound="";
    cout<<"Default Constructor working"<<endl;
}
/*Animal::Animal(string n,int legs,string so)//overloaded
{
    this->name=n;
    this->noOfLegs=legs;
    this->sound=so;
    cout<<"Overloaded Constructor working"<<endl;
}*/
Animal::Animal(string n,int legs,string so)
:name(n),noOfLegs(legs),sound(so)
{   
    cout<<"Overloaded Constructor working"<<endl;
}
Animal::~Animal()//destructor use for cleanup codes
{
    this->name="";
    this->noOfLegs=0;
    this->sound="";    
    cout<<"Deleting the object"<<endl;
}
string Animal::getName(){
    return this->name;
}
void Animal::setName(string name)
{
    this->name=name;
}
int Animal::getNofLegs(){
    return this->noOfLegs;
}
void Animal::setNofLegs(int legs)
{
    this->noOfLegs=legs;
}string Animal::getSound(){
    return this->sound;
}
void Animal::setSound(string so)
{
    this->sound=so;
}
