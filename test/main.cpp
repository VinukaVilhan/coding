#include "bank.h"
#include "customer.h"

int main()
{
    //heap
    bank commercial(1, "Commercial", "Negombo", true);
    commercial.BankIntro();

    //heap
    customer customer1("Vinuka", 21, 12213, 5000);
    customer1.deposit(10);
    customer1.withdraw(50);
    customer1.displayAccountInfo();

    //stack
    bank* hnb = new bank(2, "HNB", "Colombo", true);
    hnb->BankIntro();
    customer* customer2= new customer("sithuka", 15, 12324, 60000);
    customer2->deposit(100);
    customer2->withdraw(50);
    customer2->displayAccountInfo();


    return 0;
}
