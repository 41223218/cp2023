#include <stdio.h>

int main() {
    char ch;
    printf("輸入一個字元：");
    if (scanf("%c", &ch) == 1) {
        printf("你輸入的字元是：%c\n", ch); // 輸出用戶輸入的字元
    } else {
        printf("讀取失敗！\n");
    }
    return 0;
}