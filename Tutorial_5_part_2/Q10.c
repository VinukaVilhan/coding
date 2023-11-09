#include <stdio.h>

int main() {
    int sum, notes;

    printf("Enter the sum of money: ");
    scanf("%d", &sum);

    notes = sum / 1000;
    printf("1000 Rupee notes: %d\n", notes);
    sum %= 1000;

    notes = sum / 500;
    printf("500 Rupee notes: %d\n", notes);
    sum %= 500;

    notes = sum / 200;
    printf("200 Rupee notes: %d\n", notes);
    sum %= 200;

    notes = sum / 100;
    printf("100 Rupee notes: %d\n", notes);
    sum %= 100;

    notes = sum / 50;
    printf("50 Rupee notes: %d\n", notes);
    sum %= 50;

    notes = sum / 20;
    printf("20 Rupee notes: %d\n", notes);
    sum %= 20;

    notes = sum / 10;
    printf("10 Rupee notes: %d\n", notes);
    sum %= 10;

    notes = sum / 5;
    printf("5 Rupee coins: %d\n", notes);
    sum %= 5;

    notes = sum / 2;
    printf("2 Rupee coins: %d\n", notes);
    sum %= 2;

    notes = sum / 1;
    printf("1 Rupee coins: %d\n", notes);

    return 0;
}
