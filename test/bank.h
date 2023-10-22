#pragma once
#include <iostream>
#include<string>

using namespace std;

class bank
{
    public:
        string bank_name;
        int bank_id;
        string location;
        bool open;

        //getter
        void getAccNum(int a_n)
        {
            account_numbers = a_n;
        }

        //setter
        int setAccNum()
        {
            return account_numbers;
        }

        //constructor
        bank(int bank_id, string bank_name, string location, bool open);

        //method
        void BankIntro();


    private:
        int account_numbers;
        

    protected:
        int security_cameras;
        string safe_location; //floor

};

class security
{
    string name;
    double salary;

};