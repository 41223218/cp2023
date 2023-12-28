var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite  \n', 'tags': '', 'url': 'About.html'}, {'title': 'w5', 'text': '// 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit \n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n\n// 主函式\nint main() {\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n\n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");\n    fprintf(gnuplotPipe, "plot sin(x)");\n    // Close popen\n    pclose(gnuplotPipe);\n\n    return 0;\n} \n clear \n cd downloads \n cc gnuplot_ex1.c \n ./a.out \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue);\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    int height = (int)(width*2.0 / 3.0);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_roc_flag(img);\n\n    FILE *outputFile = fopen("./roc_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    int sun_radius = (int)(width/8);\n\n    // Colors for the flag\n    red = gdImageColorAllocate(img, 242, 0, 0); // Red color\n    white = gdImageColorAllocate(img, 255, 255, 255); // White stripes\n    blue = gdImageColorAllocate(img, 0, 41, 204); // Blue\n\n    // 繪製紅色矩形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n\n    // 繪製藍色矩形區域\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n\n    // 繪製太陽\n    draw_white_sun(img, center_x, center_y, sun_radius, white, red, blue);\n}\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue) {\n    float angle = 0;\n    int numRays = 12; // 光芒的數量\n\n    gdPoint points[3]; // 三個頂點的陣列\n\n    for (int i = 0; i < numRays; i++) {\n        angle = i * (2 * M_PI / numRays);\n        float x1 = center_x + cos(angle) * sun_radius;\n        float y1 = center_y + sin(angle) * sun_radius;\n\n        // 調整兩個底邊頂點的位置\n      float x2 = center_x + cos(angle + 0.35) * (sun_radius * 0.5);\n      float y2 = center_y + sin(angle + 0.35) * (sun_radius * 0.5);\n      float x3 = center_x + cos(angle - 0.35) * (sun_radius * 0.5);\n      float y3 = center_y + sin(angle - 0.35) * (sun_radius * 0.5);\n\n        // 設定多邊形的三個頂點\n        points[0].x = (int)x1;\n        points[0].y = (int)y1;\n        points[1].x = (int)x2;\n        points[1].y = (int)y2;\n        points[2].x = (int)x3;\n        points[2].y = (int)y3;\n\n        gdImageFilledPolygon(img, points, 3, white);\n    }\n  //外圈\n  gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.2, sun_radius * 1.2, blue);\n\n    // 繪製太陽內部\n    gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.1, sun_radius * 1.1, white);\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nint main() {\n    int width = 800;\n    int height = (int)(width / 1.9);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_usa_flag(img);\n\n    FILE *outputFile = fopen("./../images/usa_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n}\n\nvoid draw_usa_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 国旗颜色\n    red = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹\n    blue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形\n\n    int stripe_height = height / 13;\n    int stripe_width = width;\n    int star_size = (int)(0.0308 * height); // 星星大小\n\n    for (int y = 0; y < height; y += stripe_height) {\n        if (y / stripe_height % 2 == 0) {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n        } else {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n        }\n    }\n\n    gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n\n    int star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距\n    int star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距\n    int star_start_x = (int)(0.125 * height); // 星星的起始X位置\n    int star_start_y = (int)(0.0485 * height); // 星星的起始Y位置\n\n    for (int row = 0; row < 9; row++) {\n        int starsPerRow = (row % 2 == 0) ? 6 : 5;\n\n        // 计算2、4、6和8排星星的偏移量\n        int offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n\n        for (int star = 0; star < starsPerRow; star++) {\n            int x = star_start_x + star * star_spacing_x + offset_x;\n\n            // 旋转角度（以弧度为单位）\n            double rotation_angle = M_PI / 5; // 忘記多少度的旋转\n\n            int y = star_start_y + row * star_spacing_y;\n            draw_star(img, x, y, star_size, white, rotation_angle);\n        }\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n\n    for (int i = 0; i < 10; i++) {\n        double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;\n        int radius = (i % 2 == 0) ? size : size / 2;\n        points[i].x = x + radius * cos(angle);\n        points[i].y = y + radius * sin(angle);\n    }\n\n    // 用指定的颜色填充星星\n    gdImageFilledPolygon(img, points, 10, color);\n} \n \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '\n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red );\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    int height = 2 * width / 3;\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_japan_flag(img);\n\n    FILE *outputFile = fopen("./../images/japan_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_japan_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white ;\n    int center_x =  0.5 * width;\n    int center_y =  0.5 * height;\n    int sun_radius = 145 ;\n\n    // Colors for the flag\n    red = gdImageColorAllocate(img, 242, 0, 0); // Red color\n    white = gdImageColorAllocate(img, 255, 255, 255); // White stripes\n\n\n    // 繪製白色矩形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n\n\n    // 繪製太陽內部\n    gdImageFilledEllipse(img, center_x, center_y, sun_radius * 3, sun_radius * 3, red);\n} \n \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_chinese_flag(gdImagePtr img);\n\nint main() {\n    int width = 300; // 國旗寬度\n    int height = 200; // 國旗高度\n\n    gdImagePtr im = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(im, 0);\n\n    draw_chinese_flag(im);\n\n    FILE *outputFile = fopen("./../images/proc_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n\n    gdImagePngEx(im, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(im);\n\n    return 0;\n}\n\n// 声明 draw_star 函数\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nvoid draw_chinese_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, yellow;\n\n    // 國旗顏色\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色背景\n    yellow = gdImageColorAllocate(img, 255, 255, 0); // 黃色星星\n\n    // 畫紅色背景\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n\n    // 設置星星的大小和位置\n    int star_size = (int)(0.28 * height);\n    int star_x = (int)(0.165 * width);\n    int star_y = (int)(0.265 * height);\n\n    // 畫大星星\n    draw_star(img, star_x, star_y, star_size, yellow, 11.0);\n\n    // 繪製小星星，位置根據實際國旗比例計算\n    double radius = 0.15 * height;\n    double angle = 360 / 7 * M_PI / 179.0;\n    double rotation = -M_PI / 7.5;\n    int cx = (int)(0.32 * width);\n    int cy = (int)(0.27 * height);\n\n    for (int i = -1; i < 3; i++) {\n        int x = (int)(cx + radius * cos(i * angle + rotation));\n        int y = (int)(cy + radius * sin(i * angle + rotation));\n        draw_star(img, x, y, 19, yellow, M_PI / 5.0);\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n\n    // 计算星形的五个外点和五个内点\n    double outer_radius = size / 2;\n    double inner_radius = size / 6;\n    double angle = M_PI / 5.0;\n\n    for (int i = 0; i < 10; i++) {\n        double radius = (i % 2 == 0) ? outer_radius : inner_radius;\n        double theta = rotation_angle + i * angle;\n        points[i].x = x + radius * cos(theta);\n        points[i].y = y + radius * sin(theta);\n    }\n\n    // 使用 gdImageFilledPolygon 绘制星形\n    gdImageFilledPolygon(img, points, 10, color);\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_uk_flag(gdImagePtr img);\nvoid fillTriangle(gdImagePtr img, int x1, int y1, int x2, int y2, int x3, int y3, int color);\n\nint main() {\n    // 设置国旗的宽和高\n    int width = 1200;\n    int height = width / 2;\n\n    // 创建图像\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    // 绘制英国国旗\n    draw_uk_flag(img);\n\n    // 将图像保存到文件\n    FILE *outputFile = fopen("./../images/uk_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时发生错误。\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\n\n\nvoid draw_uk_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n\n    int red, white, blue;\n    red = gdImageColorAllocate(img, 204, 0, 0);       // 红色\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n    blue = gdImageColorAllocate(img, 0, 0, 153);      // 蓝色\n\n    gdImageFilledRectangle(img, 0, 0, width, height, blue);\n\n\n  int x1, y1, x2, y2, x3, y3;\n  {\n    int line_thickness = 100;\n    gdImageSetThickness(img, line_thickness);\n\n    int x1, y1, x2, y2, x3, y3;\n\n    // 绘制白色斜线\n    x1 = 0;\n    y1 = 600;\n    x2 = 1200;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, white);\n\n    x1 = 0;\n    y1 = 0;\n    x2 = 1200;\n    y2 = 600;\n    gdImageLine(img, x1, y1, x2, y2, white);\n}\n  {\n    int line_thickness = 33;\n    gdImageSetThickness(img, line_thickness);\n\n\n    // 绘制红色斜线\n    x1 = 566;\n    y1 = 300;\n    x2 = 1166;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, red);\n\n    x1 = 1233;\n    y1 = 600;\n    x2 = 633;\n    y2 = 300;\n    gdImageLine(img, x1, y1, x2, y2, red);\n\n    x1 = 566;\n    y1 = 300;\n    x2 = -33;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, red);\n\n    x1 = 600;\n    y1 = 316.5;\n    x2 = 0;\n    y2 = 616.5;\n    gdImageLine(img, x1, y1, x2, y2, red);\n  }\n  {\n  int line_thickness = 33;\n  gdImageSetThickness(img, line_thickness);\n\n  int x1, y1, x2, y2, x3, y3;\n\n  // 绘制  斜线\n  x1 = 0;\n  y1 = 600;\n  x2 = 1200;\n  y2 = 0;\n  gdImageLine(img, x1, y1, x2, y2, red );\n\n\n  x1 = 1200;\n    y1 = 16.5;\n    x2 = 600;\n    y2 = 316.5;\n    gdImageLine(img, x1, y1, x2, y2, white);\n\n\n  x1 = 0;\n    y1 = 583.5;\n    x2 = 600;\n    y2 = 283.5;\n    gdImageLine(img, x1, y1, x2, y2, white);\n\n\n  }\n\n    // 绘制白色十字\n    int cross_width = width / 32;\n    int cross_arm_width = width / 32;\n    int center_x = width / 2;\n    int center_y = height / 2;\n\n    gdImageFilledRectangle(img, center_x + 2.7 * cross_width, 0, center_x - 2.7 * cross_width, height, white);\n    gdImageFilledRectangle(img, 0, center_y + 2.7 * cross_arm_width, width, center_y - 2.7 * cross_arm_width, white);\n\n    // 绘制红色十字\n    gdImageFilledRectangle(img, center_x + 1.5 * cross_width, 0, center_x - 1.5 * cross_width, height, red);\n    gdImageFilledRectangle(img, 0, center_y + 1.5 * cross_arm_width, width, center_y - 1.5 * cross_arm_width, red);\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \n#define WIDTH 900\n#define HEIGHT 600\n#define FILENAME "south_korea_flag.png"\n \nint main() {\n    gdImagePtr im;\n    FILE *pngout;\n    int white, black, red, blue;\n \n    im = gdImageCreate(WIDTH, HEIGHT);\n \n    white = gdImageColorAllocate(im, 255, 255, 255);\n    black = gdImageColorAllocate(im, 0, 0, 0);\n    red = gdImageColorAllocate(im, 205, 0, 0);\n    blue = gdImageColorAllocate(im, 0, 56, 168);\n \n    // Background (white)\n    gdImageFilledRectangle(im, 0, 0, WIDTH, HEIGHT , white);\n \n    // Blue Circle (Yin-Yang Symbol)\n    gdImageFilledArc(im, WIDTH / 2, HEIGHT / 2, WIDTH / 3, HEIGHT / 2, 210, 30, red, gdArc);\n \n    // Red Circle (Yin-Yang Symbol)\n    gdImageFilledArc(im, WIDTH / 2, HEIGHT / 2, WIDTH / 3, HEIGHT / 2, 30, 210, blue, gdArc);\n \n  int circleX = 385;    // 圓心的 X 座標\n  int circleY = 262.5;   // 圓心的 Y 座標\n  int circleRadius = 75;     \n \n  // 繪製圓形\n  gdImageFilledEllipse(im, circleX, circleY, circleRadius * 2, circleRadius * 2, red);\n \n  int circleX2 = 515;    // 圓心的 X 座標\n \n int circleY2 = 337.5;\n \n  // 繪製圓形\n  gdImageFilledEllipse(im, circleX2, circleY2, circleRadius * 2, circleRadius * 2, blue);\n \n  {\n \n \n  // 起點和終點位置\n \n  int startX = 340;    \n  // 線的起點 X 座標\n \n  int startY = 90;   \n  // 線的起點 Y 座標\n \n  int endX = 200;     \n  // 線的終點 X 座標\n \n  int endY = 260;     \n  // 線的終點 Y 座標\n \n  int lineWidth = 23;  // 線的寬度\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX, startY, endX, endY, black);\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -35, startY -10, endX -35, endY -10, black);\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -70, startY -20, endX -70, endY -20, black);\n \n  int startX2 = 213;    \n  // 線的起點 X 座標\n \n  int startY2 = 270;   \n  // 線的起點 Y 座標\n \n  int endX2 = 133;     \n  // 線的終點 X 座標\n \n  int endY2 = 210;     \n  // 線的終點 Y 座標\n \n  int lineWidth2 = 25;  // 線的寬度\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX2 +3, startY2, endX2 +3, endY2, white);\n \n  gdImageSetThickness(im, lineWidth +10);\ngdImageLine(im, startX2 -17, startY2 +9 , endX2 -17, endY2 +9 , white);\n \n  gdImageSetThickness(im, lineWidth );\ngdImageLine(im, startX2 +115, startY2 -145, endX2 +115, endY2 -145, white);\n \n  gdImageSetThickness(im, lineWidth);\ngdImageLine(im, startX2 +120, startY2 -155, endX2 +120, endY2 -155, white);\n \n  gdImageSetThickness(im, lineWidth +12);\ngdImageLine(im, startX2 +145, startY2 -155, endX2 +145, endY2 -155, white);\n}\n  {\n    // 起點和終點位置\n \n  int startX = 330;    \n  // 線的起點 X 座標\n \n  int startY = 520;   \n  // 線的起點 Y 座標\n \n  int endX = 190;     \n  // 線的終點 X 座標\n \n  int endY = 350;     \n  // 線的終點 Y 座標\n \n  int lineWidth = 23;  // 線的寬度\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX, startY, endX, endY, black);\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -35, startY +10, endX -35, endY +10, black);\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -70, startY +20, endX -70, endY +20, black);\n \n  int startX2 = 213;    \n  // 線的起點 X 座標\n \n  int startY2 = 330;   \n  // 線的起點 Y 座標\n \n  int endX2 = 133;     \n  // 線的終點 X 座標\n \n  int endY2 = 390;     \n  // 線的終點 Y 座標\n \n  int lineWidth2 = 25;  // 線的寬度\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth +8);\n  gdImageLine(im, startX2 -11, startY2, endX2 -11, endY2, white);\n \n  gdImageSetThickness(im, lineWidth +10);\ngdImageLine(im, startX2 -30, startY2 -9 , endX2 -30, endY2 -9 , white);\n \n  gdImageSetThickness(im, lineWidth );\ngdImageLine(im, startX2 +100, startY2 +150, endX2 +100, endY2 +150, white);\n \n  gdImageSetThickness(im, lineWidth);\ngdImageLine(im, startX2 +120, startY2 +155, endX2 +120, endY2 +155, white);\n \n  gdImageSetThickness(im, lineWidth +14);\ngdImageLine(im, startX2 +145, startY2 +157, endX2 +145, endY2 +157, white);\n \n    gdImageSetThickness(im, lineWidth -10);\ngdImageLine(im, 232, 426, 206, 448, white);\n \n  }\n \n  {\n    // 起點和終點位置\n \n  int startX = 564;    \n  // 線的起點 X 座標\n \n  int startY = 520;   \n  // 線的起點 Y 座標\n \n  int endX = 704;     \n  // 線的終點 X 座標\n \n  int endY = 350;     \n  // 線的終點 Y 座標\n \n  int lineWidth = 23;  // 線的寬度\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX +70, startY +20, endX +70, endY +20, black);\n \n    // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX, startY, endX, endY, black);\n \n    // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX +35, startY +10, endX +35, endY +10, black);\n \ngdImageSetThickness(im, lineWidth -10);\ngdImageLine(im, 624, 400, 734, 490, white);\n \n  int startX2 = 553;    \n  // 線的起點 X 座標\n \n  int startY2 = 330;   \n  // 線的起點 Y 座標\n \n  int endX2 = 633;     \n  // 線的終點 X 座標\n \n  int endY2 = 390;     \n  // 線的終點 Y 座標\n \n  int lineWidth2 = 25;  // 線的寬度\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth +8);\n  gdImageLine(im, startX2 +139, startY2, endX2 +139, endY2, white);\n \n  gdImageSetThickness(im, lineWidth +10);\ngdImageLine(im, startX2 +157, startY2 -9 , endX2 +157, endY2 -9 , white);\n \n  gdImageSetThickness(im, lineWidth);\ngdImageLine(im, startX2 +25, startY2 +155, endX2 +25, endY2 +155, white);\n \n  gdImageSetThickness(im, lineWidth +30);\ngdImageLine(im, startX2 -3, startY2 +170, endX2 , endY2 +170, white);\n  }\n  {\n    // 起點和終點位置\n \n  int startX = 330;    \n  // 線的起點 X 座標\n \n  int startY = 520;   \n  // 線的起點 Y 座標\n \n  int endX = 190;     \n  // 線的終點 X 座標\n \n  int endY = 350;     \n  // 線的終點 Y 座標\n \n  int lineWidth = 23;  // 線的寬度\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX, startY, endX, endY, black);\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -35, startY +10, endX -35, endY +10, black);\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -70, startY +20, endX -70, endY +20, black);\n \n  int startX2 = 213;    \n  // 線的起點 X 座標\n \n  int startY2 = 330;   \n  // 線的起點 Y 座標\n \n  int endX2 = 133;     \n  // 線的終點 X 座標\n \n  int endY2 = 390;     \n  // 線的終點 Y 座標\n \n  int lineWidth2 = 25;  // 線的寬度\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth +8);\n  gdImageLine(im, startX2 -11, startY2, endX2 -11, endY2, white);\n \n  gdImageSetThickness(im, lineWidth +10);\ngdImageLine(im, startX2 -30, startY2 -9 , endX2 -30, endY2 -9 , white);\n \n  gdImageSetThickness(im, lineWidth );\ngdImageLine(im, startX2 +100, startY2 +150, endX2 +100, endY2 +150, white);\n \n  gdImageSetThickness(im, lineWidth);\ngdImageLine(im, startX2 +120, startY2 +155, endX2 +120, endY2 +155, white);\n \n  gdImageSetThickness(im, lineWidth +14);\ngdImageLine(im, startX2 +145, startY2 +157, endX2 +145, endY2 +157, white);\n \n    gdImageSetThickness(im, lineWidth -10);\ngdImageLine(im, 232, 426, 206, 448, white);\n \n  }\n  {\n    // 起點和終點位置\n \n  int startX = 564;    \n  // 線的起點 X 座標\n \n  int startY = 97;   \n  // 線的起點 Y 座標\n \n  int endX = 704;     \n  // 線的終點 X 座標\n \n  int endY = 267;     \n  // 線的終點 Y 座標\n \n  int lineWidth = 23;  // 線的寬度\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX +70, startY -20, endX +70, endY -20, black);\n \n    // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX, startY, endX, endY, black);\n \n    gdImageSetThickness(im, lineWidth -10);\ngdImageLine(im, 624, 212, 734, 118, white);\n \n    // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX +35, startY -10, endX +35, endY -10, black);\n \n  int startX2 = 553;    \n  // 線的起點 X 座標\n \n  int startY2 = 277;   \n  // 線的起點 Y 座標\n \n  int endX2 = 633;     \n  // 線的終點 X 座標\n \n  int endY2 = 217;     \n  // 線的終點 Y 座標\n \n  int lineWidth2 = 25;  // 線的寬度\n \n  // 繪製線段\n  gdImageSetThickness(im, lineWidth +8);\n  gdImageLine(im, startX2 +134, startY2, endX2 +134, endY2, white);\n \n  gdImageSetThickness(im, lineWidth +10);\ngdImageLine(im, startX2 +157, startY2 +9 , endX2 +157, endY2 +9 , white);\n \n  gdImageSetThickness(im, lineWidth);\ngdImageLine(im, startX2 +25, startY2 -155, endX2 +25, endY2 -155, white);\n \n    gdImageSetThickness(im, lineWidth +30);\ngdImageLine(im, startX2 -5, startY2 -155, endX2 -5, endY2 -155, white);\n \n  }\n \n    // Save image\nFILE *outputFile = fopen("./../images/korea_flag.png", "wb");\nif (outputFile == NULL) {\n    fprintf(stderr, "Error opening the output file.\\n");\n    return 1;\n}\n  gdImagePngEx(im, outputFile, 9);\n      fclose(outputFile);\n      gdImageDestroy(im);\n      return 0;\n  } \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w12', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nint main() {\n    int width = 800;\n    int height = 600;\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    FILE *outputFile = fopen("hellogd.png", "wb");\n    if (outputFile == NULL) {\n\nfprintf(stderr, "Error opening the output file.\\n");\n\nreturn 1;\n    }\n\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int blue = gdImageColorAllocate(img, 0, 0, 255);\n    int black = gdImageColorAllocate(img, 0, 0, 0);\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n    // 長方形塗色\n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n    gdImageFilledRectangle(img, 0, 0, (int)width/4, (int)height/4, blue);\n    // 橢圓形塗色\n    gdImageFilledEllipse(img, (int)width*3/4, (int)height/4, (int)width/4, (int)width/4, red);\n    // 橢圓形畫線\n    gdImageEllipse(img, (int)width*3/4, (int)height*3/4, (int)width/4, (int)width/4, red);\n    // 畫直線\n    gdImageLine(img, (int)width/2, (int)height/2, (int)width/2, (int)height/2 + 100, blue);\n\n    // 多邊形畫線\n    gdPoint points[4];\n    points[0].x = (int)width/4;\n    points[0].y = (int)height*3/4;\n    points[1].x = points[0].x + 100;\n    points[1].y = points[0].y;\n    points[2].x = points[1].x;\n    points[2].y = points[1].y + 100;\n    points[3].x = points[2].x - 100;\n    points[3].y = points[2].y;\n    gdImagePolygon(img, points, 4, black);\n\n    // 多邊形塗色\n    gdPoint points2[4];\n    points2[0].x = (int)width/3;\n    points2[0].y = (int)height/2;\n    points2[1].x = points2[0].x + 100;\n    points2[1].y = points2[0].y;\n    points2[2].x = points2[1].x;\n    points2[2].y = points2[1].y + 100;\n    points2[3].x = points2[2].x - 150;\n    points2[3].y = points2[2].y;\n    gdImageFilledPolygon(img, points2, 4, red);\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n} \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '// 包含標準輸出入程式庫的標頭文件\n#include <stdio.h>\n\n// 主函式\nint main() {\n    // Open a file to write displacement and velocity data\n    FILE *outputFile = fopen("motion_data.txt", "w");\n    if (!outputFile) {\n        fprintf(stderr, "Failed to create data file.\\n");\n        return 1;\n    }\n\n    // Simulate motion for 10 seconds and calculate displacement and velocity, while writing data to the file\n    double x = 0.2;  // Initial displacement\n    double v = 0.0;  // Initial velocity\n    double dt = 0.01; // Time step\n    double t = 0.0;  // Time\n\n    while (t <= 10.0) {\n        double acceleration = (-10.0 * x - 0.5 * v) / 1.0; // Modified system parameters here\n        v += acceleration * dt;\n        x += v * dt;\n\n        fprintf(outputFile, "%lf %lf %lf\\n", t, x, v);\n\n        t += dt;\n    }\n\n    // Close the data file\n    fclose(outputFile);\n\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n\n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal pngcairo enhanced font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/motion_plot.png\'\\n");\n    fprintf(gnuplotPipe, "set title \'Displacement and Velocity vs. Time\'\\n");\n    fprintf(gnuplotPipe, "set xlabel \'Time (s)\'\\n");\n    fprintf(gnuplotPipe, "set ylabel \'Displacement (m)\'\\n");\n    fprintf(gnuplotPipe, "plot \'motion_data.txt\' using 1:2 with lines lw 2 title \'Displacement\', \\\n                             \'motion_data.txt\' using 1:3 with lines lw 2 title \'Velocity\'\\n");\n\n    // Close the Gnuplot process\n    fprintf(gnuplotPipe, "exit\\n");\n    pclose(gnuplotPipe);\n\n    return 0;\n} \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w15', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nvoid draw_roc_flag(gdImagePtr img);\n \nint main() {\n    int width = 1200;\n    int height = (int)(width * 2.0 / 3.0);\n \n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n \n    draw_roc_flag(img);\n \n    FILE *outputFile = fopen("roc_flag_in_gd.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n \nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    int center_x = (int)(width / 4);\n    int center_y = (int)(height / 4);\n    int sun_radius = (int)(width / 8);\n    int white_circle_dia = sun_radius;\n    int blue_circle_dia = white_circle_dia + white_circle_dia * 2 / 15;\n \n    red = gdImageColorAllocate(img, 255, 0, 0);\n    white = gdImageColorAllocate(img, 255, 255, 255);\n    blue = gdImageColorAllocate(img, 0, 0, 149);\n \n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n    gdImageFilledRectangle(img, 0, 0, (int)(width / 2.0), (int)(height / 2.0), blue);\n \n    // 利用一個藍色大圓與白色小圓畫出藍色環狀\n    gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\n    gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n \n    // 不含太陽的部分\n \n    // 連接第二組ABED的白線\n    int ax = 429;\n    int ay = 125;\n    int bx = 279;\n    int by = 165;\n    int ex = 170;\n    int ey = 274;\n    int dx = 170;\n    int dy = 274;\n \n    gdImageLine(img, ax, ay, bx, by, white);\n    gdImageLine(img, bx, by, ex, ey, white);\n    gdImageLine(img, ex, ey, dx, dy, white);\n    gdImageLine(img, dx, dy, ax, ay, white);\n}\n \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'ANSIC', 'text': '', 'tags': '', 'url': 'ANSIC.html'}, {'title': '1編寫一個 C 程式來列印您的姓名、出生日期和手機號碼。', 'text': '#include <stdio.h>\n \nint main()  \n{\n    // Print Name\n    printf("Name   :Zhenlin LU\\n"); \n \n    // Print Date of Birth\n    printf("DOB    : September 24 2004\\n"); \n \n    // Print Mobile Number\n    printf("Mobile : 09-9999999999\\n"); \n \n    // Indicate successful execution\n    return(0); \n} \n \n', 'tags': '', 'url': '1編寫一個 C 程式來列印您的姓名、出生日期和手機號碼。.html'}, {'title': '2編寫一個 C 程式來取得您正在使用的 C 版本。', 'text': '#include <stdio.h>\n\nint main(int argc, char** argv) {\n    // Check for C standard version\n    #if __STDC_VERSION__ >=  201710L\n        printf("We are using C18!\\n");\n    #elif __STDC_VERSION__ >= 201112L\n        printf("We are using C11!\\n");\n    #elif __STDC_VERSION__ >= 199901L\n        printf("We are using C99!\\n");\n    #else\n        printf("We are using C89/C90!\\n");\n    #endif\n\n    // Indicate successful execution\n    return 0;\n} \n \n', 'tags': '', 'url': '2編寫一個 C 程式來取得您正在使用的 C 版本。.html'}, {'title': '3寫一個 C 程序，逆向列印下列字元。', 'text': '#include <stdio.h>\n\nint main() \n{\n    // Declare and initialize character variables\n    char char1 = \'P\';\n    char char2 = \'M\';\n    char char3 = \'L\';\n\n    // Print the original and reversed characters\n    printf("The reverse of %c%c%c is %c%c%c\\n",\n        char1, char2, char3,\n        char3, char2, char1);\n\n    return(0);\n} \n \n', 'tags': '', 'url': '3寫一個 C 程序，逆向列印下列字元。.html'}, {'title': '4寫一個 C 程式來計算高 7 英吋、寬 5 英吋的矩形的周長和面積。', 'text': '#include <stdio.h> \n\n/* \n   Variables to store the width and height of a rectangle in inches \n*/\nint width;          \nint height;         \n\nint area;           /* Variable to store the area of the rectangle */\nint perimeter;      /* Variable to store the perimeter of the rectangle */\n\nint main() {\n    /* Assigning values to height and width */\n  height = 7;\n  width = 5;\n\n    /* Calculating the perimeter of the rectangle */\n    perimeter = 2*(height + width);\n  printf("Perimeter of the rectangle = %d inches\\n", perimeter);\n\n    /* Calculating the area of the rectangle */\n  area = height * width;\n  printf("Area of the rectangle = %d square inches\\n", area);\n\n    return(0);\n} \n \n', 'tags': '', 'url': '4寫一個 C 程式來計算高 7 英吋、寬 5 英吋的矩形的周長和面積。.html'}, {'title': '5寫一個 C 程式來計算給定半徑的圓的周長和面積。', 'text': '#include <stdio.h>\n\nint main() {\n   int radius;      /* Variable to store the radius of the circle */\n   float area, perimeter;    /* Variables to store the area and perimeter of the circle */ \n   radius = 6;      /* Assigning a value to the radius */\n\n   /* Calculating the perimeter of the circle */\n   perimeter = 2 * 3.14 * radius;\n   printf("Perimeter of the Circle = %f inches\\n", perimeter);\n\t\n   /* Calculating the area of the circle */\n   area = 3.14 * radius * radius;\n   printf("Area of the Circle = %f square inches\\n", area);\n\n   return(0);\n} \n \n', 'tags': '', 'url': '5寫一個 C 程式來計算給定半徑的圓的周長和面積。.html'}, {'title': '6寫一個 C 程式將指定的日期轉換為年、週和日。', 'text': '#include <stdio.h>\n\nint main()\n{\n    int days, years, weeks;\n\n    days = 1329; // Total number of days\n\n    // Converts days to years, weeks and days\n    years = days/365; // Calculate years\n    weeks = (days % 365)/7; // Calculate weeks\n    days = days - ((years*365) + (weeks*7)); // Calculate remaining days\n\n    // Print the results\n    printf("Years: %d\\n", years);\n    printf("Weeks: %d\\n", weeks);\n    printf("Days: %d \\n", days);\n\n    return 0;\n} \n \n', 'tags': '', 'url': '6寫一個 C 程式將指定的日期轉換為年、週和日。.html'}, {'title': '7受三個整數並找出三個整數中的最大值。', 'text': '#include <stdio.h>\n#include <stdlib.h>\nint main()\n{\n    int x, y, z, result, max; // Declare variables\n    \n    // Prompt user for the first integer and store in \'x\'\n    printf("\\nInput the first integer: "); \n    scanf("%d", &x);\n    \n    // Prompt user for the second integer and store in \'y\'\n    printf("\\nInput the second integer: ");\n    scanf("%d", &y);\n    \n    // Prompt user for the third integer and store in \'z\'\n    printf("\\nInput the third integer: ");\n    scanf("%d", &z);\n    \n    // Calculate the result\n    result = (x + y + abs(x - y)) / 2;\n    \n    // Calculate the maximum value\n    max = (result + z + abs(result - z)) / 2;\n    \n    // Print the maximum value\n    printf("\\nMaximum value of three integers: %d", max);\n\tprintf("\\n");\n    \n    return 0;\n} \n \n', 'tags': '', 'url': '7受三個整數並找出三個整數中的最大值。.html'}, {'title': '8找出1到199之間的質數為', 'text': '#include <stdio.h>\nint main() {\n    int i, j, flag, ip = 0;\n\n    // Print a message indicating the purpose of the program\n    printf("The prime numbers between 1 and 199 are:\\n");\n\n    // Loop to check prime numbers from 2 to 198\n    for (i = 2; i < 199; i++) {\n        flag = 1;\n\n        // Loop to check if i is divisible by any number other than 1 and itself\n        for (j = 2; j <= i / 2 && flag == 1; j++) {\n            if (i % j == 0) {\n                flag = 0;\n            }\n        }\n\n        // If i is prime, print it\n        if (flag == 1) {\n            printf("%5d ", i);\n            ip++;\n\n            // Print a newline character after every 10 prime numbers\n            if (ip % 10 == 0) {\n                printf("\\n");\n            }\n        }\n    }\n\n    printf("\\n");\n\n    return 0;\n} \n \n', 'tags': '', 'url': '8找出1到199之間的質數為.html'}, {'title': '9編寫一個 C 程式來建立並列印以下範例的序列。', 'text': '#include <stdio.h>\n \nint main ()\n{\n    int a, b;\n \n    // Loop to execute statements with changing values of \'a\' and \'b\'\n    for (a = 1, b = 100; a <= 37, b >= 0; a += 5, b -= 10)\n        printf("a=%d \\t b=%d\\n", a, b);\n} \n \n', 'tags': '', 'url': '9編寫一個 C 程式來建立並列印以下範例的序列。.html'}, {'title': '10編寫一個C程序，讀取1到12之間的整數並用英語列印一年中的月份。', 'text': '#include <stdio.h>\nint main() {\n    int mno; // Declare variable for month number\n \n    // Prompt user for a number between 1 to 12\n    printf("\\nInput a number between 1 to 12 to get the month name: ");\n    scanf("%d", &mno);\n \n    switch(mno) {\n        case 1 : printf("January\\n"); break; // Print the name of the month for each case\n        case 2 : printf("February\\n"); break;\n        case 3 : printf("March\\n"); break;\n        case 4 : printf("April\\n"); break;\n        case 5 : printf("May\\n"); break;\n        case 6 : printf("June\\n"); break;\n        case 7 : printf("July\\n"); break;\n        case 8 : printf("August\\n"); break;\n        case 9 : printf("September\\n"); break;\n        case 10 : printf("October\\n"); break;\n        case 11 : printf("November\\n"); break;\n        case 12 : printf("December\\n"); break;\n        default : printf("Input a number between 1 to 12."); // Print a message for an invalid input\n    }\n \n    return 0;\n}\n \n \n', 'tags': '', 'url': '10編寫一個C程序，讀取1到12之間的整數並用英語列印一年中的月份。.html'}, {'title': 'C_ex', 'text': '1 \n /* ====================\n Say Hello World!.\n==================== */\n#include <stdio.h>\nvoid main()\n{\n /* 印出 Hello */\nprintf("Hello World!");\n} \n \n 2 \n /* ====================\n Say Hello World! Bye Bye.\n==================== */\n#include <stdio.h>\nint main()\n{\n/* 印出 Hello World! Bye Bye */\nprintf("Hello World! "); printf("Bye "); printf("Bye");\nreturn 0;\n} \n \n 3 \n #include <stdio.h>\nint main()\n{\nint a = 1;\nint A = 8;\nint b = 2, c;\nc = A - a + b;\n/* 輸出 a, A, b, c 到螢幕 */\nprintf( "a = %d, A = %d, b = %d, c = %d ", a, A, b, c );\nreturn 0;\n} \n \n 4 \n #include <stdio.h>\nvoid main()\n{\nfloat a = 0.5;\ndouble b = 1.2;\nint c = 3;\nb = b + a + c;\n/* 輸出 a, b, c 到螢幕 */\nprintf( " a = %3.1f, b = %3.1f, c = %d ", a ,b, c );\n} \n \n 5 \n #include <stdio.h>\nint main()\n{\nchar x, y;\nx = \'a\';\ny = (char)97;\n/* 輸出 x, y, x, 最後一個是以 ASCII 值顯示 y */\nprintf( " x = %c, y = %c, ASCII of y = %d", x, y, y );\nreturn 0;\n} \n \n 6 \n #include <stdio.h>\n\nint main() {\n    int a = 64;\n    int b = 0x40;\n    long c = 64L;\n    printf("%d,%d,%ld", a, b, c);\n    return 0;\n} \n \n 7 \n #include <stdio.h>\n\nint main() {\n    char ch;\n    printf("輸入一個字元：");\n    if (scanf("%c", &ch) == 1) {\n        printf("你輸入的字元是：%c\\n", ch); // 輸出用戶輸入的字元\n    } else {\n        printf("讀取失敗！\\n");\n    }\n    return 0;\n} \n \n 8 \n', 'tags': '', 'url': 'C_ex.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};