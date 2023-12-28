#include <stdio.h>

void main() {
    int a, b;
    a = 15; // 將變數 a 設定為整數 15
    b = 1;  // 將變數 b 設定為整數 1

    // 印出 a OR b 的結果
    printf("%d \n", a | b ); // 用位元 OR 運算印出 a OR b 的結果

    // 印出 a AND b 的結果
    printf("%d \n", a & b ); // 用位元 AND 運算印出 a AND b 的結果

    // 印出 a XOR b 的結果
    printf("%d \n", a ^ b ); // 用位元 XOR 運算印出 a XOR b 的結果

    // 印出 a 位元左移 1 位的結果
    printf("%d \n", a << 1 ); // 將 a 左移 1 位後印出結果

    // 印出 a 位元右移 1 位的結果
    printf("%d \n", a >> 1 ); // 將 a 右移 1 位後印出結果

    // 印出 a 的補數運算結果
    printf("%d \n", ~a ); // 印出 a 的補數運算結果

}