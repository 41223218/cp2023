#include <stdio.h>

int main() {
    int a, b;          // 宣告整數變數 a 和 b
    float c;           // 宣告浮點數變數 c

    a = b = 5 + 1;     // 將 5 + 1 的結果（即 6）同時賦值給 a 和 b

    c = (float)a + 0.1;  // 將整數變數 a 轉換為浮點數，並加上 0.1，結果賦給浮點數變數 c

    printf("a = %d\n", a);  // 輸出整數變數 a 的值，並換行
    printf("b = %d\n", b);  // 輸出整數變數 b 的值，並換行
    printf("c = %.2f\n", c);  // 輸出浮點數變數 c 的值，只顯示兩位小數，並換行

    return 0;          // 返回 0 表示程式執行完畢並正常結束
}