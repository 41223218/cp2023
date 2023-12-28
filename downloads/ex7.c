#include <stdio.h>

int main() {
    char ch; // 宣告一個名為 ch 的字符變數

    printf("輸入一個字元："); // 使用 printf 函數輸出提示文字，要求用戶輸入一個字元

    // 使用 scanf 函數讀取用戶輸入的字元，檢查返回值是否為 1，代表成功讀取一個項目
    if (scanf("%c", &ch) == 1) {
        printf("你輸入的字元是：%c\n", ch); // 如果成功讀取字元，使用 printf 函數輸出用戶輸入的字元
    } else {
        printf("讀取失敗！\n"); // 如果 scanf 函數返回值不是 1，則使用 printf 函數輸出讀取失敗的訊息
    }

    return 0; // 結束 main 函數並返回 0，表示程式執行完畢並正常結束
}