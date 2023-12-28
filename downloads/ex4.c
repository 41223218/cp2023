#include <stdio.h>

void main() {
    float a = 0.5;       // 宣告一個浮點數變數 a，並將其值設置為 0.5
    double b = 1.2;      // 宣告一個雙精度浮點數變數 b，並將其值設置為 1.2
    int c = 3;           // 宣告一個整數變數 c，並將其值設置為 3

    b = b + a + c;       // 將變數 b 的值增加 a 和 c 的值

    // 使用 printf 函數輸出變數 a、b 和 c 的值到螢幕上
    printf(" a = %3.1f, b = %3.1f, c = %d ", a, b, c);
}