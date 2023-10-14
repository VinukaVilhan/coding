#pragma once
#include<iostream>
#include<string>
using namespace std;

class civillian
{
    public:
        string name;
        int age;
        void introduce();
        civillian (const string& n, int& a)  : name(n), age(a){} 
};
