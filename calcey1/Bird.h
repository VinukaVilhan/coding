#include "animal.h"

class Bird : public Animal
{
   private:
        double lengthOfWings;

   public:
        void setlengthsOfWing(double length);
        double getlengthsOfWing();
        Bird(string name,int noOfLegs,string sound,double lengthOfWings);
        Animal getAnimalDetails(string name,int noOfLegs,string sound);        
        ~Bird();
        void talk();

        






};