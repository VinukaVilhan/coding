#include "header.h"
#include "civillians.h"

using namespace std;
class my
{
    public: //access specifier
        int id;
        string name;
        string speech; 
        float height;
        float weight;

    
        void say_hello()//inside methods
        {
            cout<<"hello i am here to speak about myself" <<endl;
        }

        //constructor inside the class
        my(int id_num , string name_of_person)
        {
            id = id_num;
            name = name_of_person ;
        }

        //deconstuctor
        ~my()
        {
            cout << "My destructor called for " << name << endl;
        }

        string speak(string speech_name);//outside method
 
};

string my::speak(string speech_name)//outside method
{
    cout<<"I would like to speak about "<<speech_name<< endl;   
    return speech_name;
}

class enemy
{
    public://access specifier
        string name;
        string power;
        int range;
        float height;
        float weight;

        enemy(string enemy_name, string enemy_power, int enemy_range, float enemy_height, float enemy_weight);

        virtual void attack()
        {
            cout<<power<<" with "<<" range of "<<range<<endl;
        }

        //setter of code_to_activate
        void setCode(string code)
        {
            code_to_deactivate = code;
        }

        //getter of the code_to_activate
        string getCode()
        {
            return code_to_deactivate;
        }

    private:
        string code_to_deactivate;     

    protected:
        int inhertited_amount_of_power;   

};

//outside constructor of enemy
enemy::enemy(string enemy_name, string enemy_power, int enemy_range, float enemy_height, float enemy_weight)
{
    name = enemy_name;
    power = enemy_power;
    range = enemy_range;
    height = enemy_height;
    weight = enemy_weight;
}

//multi level inheritance
class superEnemy : public enemy
{
    public:
        superEnemy(string enemy_name, string enemy_power, int enemy_range, float enemy_height, float enemy_weight)
            : enemy(enemy_name, enemy_power, enemy_range, enemy_height, enemy_weight) {
        }
        void superAttack() {
            cout << "Super " << power << " with range " << range << " and additional superpowers!" << endl;
        }
};

class ultimateEnemy : public superEnemy {
    public:
        ultimateEnemy(string enemy_name, string enemy_power, int enemy_range, float enemy_height, float enemy_weight)
            : superEnemy(enemy_name, enemy_power, enemy_range, enemy_height, enemy_weight) {
        }
        void ultimateAttack() {
            cout << "Ultimate " << power << " with range " << range << " and even more destructive superpowers!" << endl;
        }

        void setInheritedPower(int iPower)
        {
            inhertited_amount_of_power = iPower;
        }

        int getInheritedPower()
        {
            return inhertited_amount_of_power;
        }
};

class superHero : public my, public enemy
{
    public:
        string heroName;

        superHero(int id_num , string name_of_person, string enemy_name, string enemy_power, int enemy_range, float enemy_height, float enemy_weight, string superHeroName): my( id_num ,  name_of_person), enemy( enemy_name,  enemy_power,  enemy_range,  enemy_height,  enemy_weight)
        {
            heroName = superHeroName;

        }

        // Override the virtual function for attack
        void attack() override {
            cout << heroName << " (Superhero) uses " << power << " with a range of " << range << endl;
        }
        
        void displaySuperHeroInfo();
       
};



//outside method of superhero
void superHero::displaySuperHeroInfo()
{
     {
            cout << "Superhero name: " <<heroName << endl;
            cout << "Superhero's power: " << enemy::power << " with a range of " << range << endl;
            cout << "Enemy's name: " << enemy::name << endl;
            cout << "Superhero's real name: " << my::name << endl;
        }
}



int main()
{
    //create object 1
    my person1 (1, "vinuka");

    //access attributes and set values

    person1.say_hello();
    person1.speak("Animal rights");

    //printing
    cout<<"My name is: "<<person1.name<<endl;
    cout<<"My Id is: "<<person1.id<<endl;
    cout<<""<<endl;//empty space

    //create obj 2
    my person2(2, "sithuka");

    person2.say_hello();
    person2.speak("Art industry");
    

     //printing
    cout<<"My name is: "<<person2.name<<endl;
    cout<<"My Id is "<<person2.id<<endl;
    cout<<" "<<endl;


    //enemy
    enemy enemy1("hasith", "laser eyes", 12, 100.5, 600.9);
    cout<<"I am "<<enemy1.name<<". My power is "<<enemy1.power<<", That goes to a range of "<<enemy1.range<<". Height is "<<enemy1.height<<"m. Weight is "<<enemy1.weight<<"kg."<<endl;
    cout<<""<<endl;

    enemy1.setCode("23Rthsfi&9929");
    cout<<"Deactivation code of "<<enemy1.name<<" is "<<enemy1.getCode();
    cout<<""<<endl;

    //ultimate enemy
    ultimateEnemy uenemy1("Griffith", "Saber tooth", 90, 78.82, 96.3);
    uenemy1.setInheritedPower(10000);
    cout << "I am the ultimate enemy " << uenemy1.name << ". My power is " << uenemy1.power << ". Height is " << uenemy1.height << "m. Weight is " << uenemy1.weight << "kg. And I have inherited "<<uenemy1.getInheritedPower()<<" amount of power from my descenders" << endl;
    cout<<""<<endl;

    uenemy1.superAttack();
    cout<<""<<endl;
    uenemy1.ultimateAttack();
    cout<<""<<endl;

    //superhero
    superHero superVinuka(2,"Vilhan", "griffith",  "Super strength", 45, 67.5, 89.4, "Cold eye's");
    superVinuka.displaySuperHeroInfo();
    superVinuka.say_hello();
    superVinuka.speak("Human rights");
    cout<<""<<endl;

    //virtual function (polymorphism)
    enemy* enemyPtr = &superVinuka;  // Pointer to the superhero, treated as an enemy
    enemyPtr->attack();  // Calls the superhero's overridden attack function
    cout<<""<<endl;

    int size = 5;
    int elementsAdded = 0;
    civillian* civillians = static_cast<civillian*>(malloc(size* sizeof(civillian)));

    char choice = 'y';

    do {
        if (elementsAdded >= size) {
            size *= 3;
            civillian* newCivillians = static_cast<civillian*>(realloc(civillians, size* sizeof(civillian)));
            if (newCivillians == nullptr) 
            {
                cerr << "Memory reallocation failed." << endl;
                break;
            }
            civillians = newCivillians;
        }

        string name;
        int age;
        cout << "Enter the name for civillian No " << (elementsAdded + 1) << ": ";
        cin >> name;
        cout << "Enter the age for civillian No " << (elementsAdded + 1) << ": ";
        cin>>age;
        civillians[elementsAdded] = civillian(name,age);
        elementsAdded++;

        cout << "Array is Full. Do you want to add another civillian? (y/n): ";
        cin >> choice;
    } while (choice == 'y');

    cout << "Civillians:" << endl;
    for (int i = 0; i < elementsAdded; i++) 
    {
        civillians[i].introduce();
        
    }

    
    

    delete[] civillians;   // Clean up dynamically allocated memory

    return 0;
}