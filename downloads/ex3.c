#include <stdio.h>

int main() {
    int a = 1;    // 宣告一個整數變數 a，並將其值設置為 1
    int A = 8;    // 宣告一個整數變數 A，並將其值設置為 8
    int b = 2, c; // 宣告整數變數 b 和 c

    c = A - a + b; // 將變數 c 設置為 A 減去 a 加上 b 的結果

    // 使用 printf 函數輸出變數 a、A、b 和 c 的值到螢幕上
    printf("a = %d, A = %d, b = %d, c = %d ", a, A, b, c);

    return 0;    // 返回 0 表示程式正常結束
}