#include "libraries.h"
class Shape
{
    public:
    virtual void Shape::draw(){
        cout<<"Drawing a shape"<<endl;
    }
};
class Square : public Shape { 

public:
    void Square::draw() override{ 
    cout<<"Drawing a square"<<endl;
    }
};
class Circle : public Shape { 

public:
    void Circle::draw() override{ 
    cout<<"Drawing a circle"<<endl;
    }
};
int main()
{
    Shape *shapePtr;
    Square square;    
    Circle circle;

    shapePtr = &square;
    shapePtr->draw();
    shapePtr = &circle;
    shapePtr->draw();

    return 0;
}