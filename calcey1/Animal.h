#include "libraries.h"
class Animal
{
    public:
        void talk();
        Animal();//default constructor
        Animal(string n,int legs,string so);
        //overloaded constructor
        //Destructor
        ~Animal();//destructor
        string getName();//getter
        void setName(string name);//setter
        int getNofLegs();//getter
        void setNofLegs(int legs);//setter 
        string getSound();//getter
        void setSound(string sound);//setter
    protected:
        string type;
        string name;
        int noOfLegs;
        string sound;

};
