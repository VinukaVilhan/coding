#include "bank.h"

bank::bank(int bank_id, string bank_name, string location, bool open)
{
    this->bank_id = bank_id;
    this->bank_name = bank_name;
    this->location = location;
    this->open = open;
}

void bank::BankIntro()
{
    cout<<"The bank "<<bank_name<<" has the bank ID of "<<bank_id<<" and it's located on "<<location<<" and it's now "<<open<<endl;
}
