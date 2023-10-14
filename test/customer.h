#pragma once
#include <iostream>
#include<string>

using namespace std;
class customer {
public:
    string name;
    int age;
    int account_number;
    double balance;

    customer(const string& n, int a, int acc_num, double initial_balance);

    void deposit(double amount);
    void withdraw(double amount);
    void displayAccountInfo();
};