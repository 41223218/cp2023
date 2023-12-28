#include <stdio.h>

int main() {
    char x, y;   // 宣告兩個字符變數 x 和 y

    x = 'a';     // 將變數 x 的值設置為字符 'a'
    y = (char)97; // 將變數 y 的值設置為 ASCII 碼為 97 的字符，使用顯式的型別轉換

    // 使用 printf 函數輸出變數 x、y 的值以及 y 的 ASCII 值
    printf(" x = %c, y = %c, ASCII of y = %d", x, y, y);

    return 0;    // 返回 0 表示程式正常結束
}