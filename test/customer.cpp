#include "customer.h"

customer::customer(const string& n, int a, int acc_num, double initial_balance)
    : name(n), age(a), account_number(acc_num), balance(initial_balance) {}

void customer::deposit(double amount) {
    if (amount > 0) {
        balance += amount;
        cout << "Deposited " << amount << " to the account. New balance: " << balance << endl;
    } else {
        cout << "Invalid deposit amount." << endl;
    }
}

void customer::withdraw(double amount) {
    if (amount > 0 && balance >= amount) {
        balance -= amount;
        cout << "Withdrawn " << amount << " from the account. New balance: " << balance << endl;
    } else {
        cout << "Invalid withdrawal amount or insufficient balance." << endl;
    }
}

void customer::displayAccountInfo() {
    cout << "Account Holder: " << name << ", Account Number: " << account_number << ", Age: " << age
         << ", Balance: " << balance << endl;
}