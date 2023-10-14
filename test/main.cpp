#include "bank.h"
#include "customer.h"

int main()
{
    bank commercial(1, "Commercial", "Negombo", true);
    commercial.BankIntro();

    customer customer1("Vinuka", 21, 12213, 5000);
    customer1.deposit(10);
    customer1.withdraw(50);
    customer1.displayAccountInfo();

    return 0;
}
