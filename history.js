document.querySelectorAll('.ScoreTable td').forEach(cell => {
    cell.addEventListener('mouseenter', function () {
        const table = document.querySelector('.ScoreTable');
        const cellIndex = this.cellIndex; // Get the column index of the hovered cell
        
        // Find the corresponding header cell in the top row
        const headerCell = table.querySelector(`tr.row_-1 th:nth-child(${cellIndex + 1})`);
        
        if (headerCell) {
            headerCell.classList.add('ColumnHeaderHover'); // Add highlight class
        }
    });

    cell.addEventListener('mouseleave', function () {
        const table = document.querySelector('.ScoreTable');
        const cellIndex = this.cellIndex; // Get the column index of the hovered cell
        
        // Find the corresponding header cell in the top row
        const headerCell = table.querySelector(`tr.row_-1 th:nth-child(${cellIndex + 1})`);
        
        if (headerCell) {
            headerCell.classList.remove('ColumnHeaderHover'); // Remove highlight class
        }
    });
});

var slider = document.getElementById("YearRange");
var output = document.getElementById("Year");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = "2024"
    output.innerHTML = this.value;

    //1869 Scorigami
    if (output.innerHTML == "1869") {
        const _8_0_ = document.getElementById("8-0"); _8_0_.className = "Scorigami";
        const _6_4_ = document.getElementById("6-4"); _6_4_.className = "Scorigami";
    }
    if (output.innerHTML > "1869") {
        const _8_0_ = document.getElementById("8-0"); _8_0_.className = "PastScorigami";
        const _6_4_ = document.getElementById("6-4"); _6_4_.className = "PastScorigami";
    }

    //1870 Scorigami
    if (output.innerHTML == "1870") {
        const _6_2_ = document.getElementById("6-2"); _6_2_.className = "Scorigami";
        const _6_3_ = document.getElementById("6-3"); _6_3_.className = "Scorigami";
    }
    if (output.innerHTML > "1870") {
        const _6_2_ = document.getElementById("6-2"); _6_2_.className = "PastScorigami";
        const _6_3_ = document.getElementById("6-3"); _6_3_.className = "PastScorigami";
    }
    if (output.innerHTML < "1870") {
        const _6_2_ = document.getElementById("6-2"); _6_2_.className = "Blank";
        const _6_3_ = document.getElementById("6-3"); _6_3_.className = "Blank";
    }

    //1871 Scorigami
    //There was no 1871 season.

    //1872 Scorigami
    if (output.innerHTML == "1872") {
        const _0_0_ = document.getElementById("0-0"); _0_0_.className = "Scorigami";
        const _3_0_ = document.getElementById("3-0"); _3_0_.className = "Scorigami";
        const _6_0_ = document.getElementById("6-0"); _6_0_.className = "Scorigami";
        const _4_1_ = document.getElementById("4-1"); _4_1_.className = "Scorigami";
        const _7_5_ = document.getElementById("7-5"); _7_5_.className = "Scorigami";
    }
    if (output.innerHTML > "1872") {
        const _0_0_ = document.getElementById("0-0"); _0_0_.className = "PastScorigami";
        const _3_0_ = document.getElementById("3-0"); _3_0_.className = "PastScorigami";
        const _6_0_ = document.getElementById("6-0"); _6_0_.className = "PastScorigami";
        const _4_1_ = document.getElementById("4-1"); _4_1_.className = "PastScorigami";
        const _7_5_ = document.getElementById("7-5"); _7_5_.className = "PastScorigami";
    }
    if (output.innerHTML < "1872") {
        const _0_0_ = document.getElementById("0-0"); _0_0_.className = "Blank";
        const _3_0_ = document.getElementById("3-0"); _3_0_.className = "Blank";
        const _6_0_ = document.getElementById("6-0"); _6_0_.className = "Blank";
        const _4_1_ = document.getElementById("4-1"); _4_1_.className = "Blank";
        const _7_5_ = document.getElementById("7-5"); _7_5_.className = "Blank";
    }

    //1873 Scorigami
    if (output.innerHTML == "1873") {
        const _2_1_ = document.getElementById("2-1"); _2_1_.className = "Scorigami";
        const _3_1_ = document.getElementById("3-1"); _3_1_.className = "Scorigami";
        const _6_1_ = document.getElementById("6-1"); _6_1_.className = "Scorigami";
        const _4_3_ = document.getElementById("4-3"); _4_3_.className = "Scorigami";
        const _5_4_ = document.getElementById("5-4"); _5_4_.className = "Scorigami";
    }
    if (output.innerHTML > "1873") {
        const _2_1_ = document.getElementById("2-1"); _2_1_.className = "PastScorigami";
        const _3_1_ = document.getElementById("3-1"); _3_1_.className = "PastScorigami";
        const _6_1_ = document.getElementById("6-1"); _6_1_.className = "PastScorigami";
        const _4_3_ = document.getElementById("4-3"); _4_3_.className = "PastScorigami";
        const _5_4_ = document.getElementById("5-4"); _5_4_.className = "PastScorigami";
    }
    if (output.innerHTML < "1873") {
        const _2_1_ = document.getElementById("2-1"); _2_1_.className = "Blank";
        const _3_1_ = document.getElementById("3-1"); _3_1_.className = "Blank";
        const _6_1_ = document.getElementById("6-1"); _6_1_.className = "Blank";
        const _4_3_ = document.getElementById("4-3"); _4_3_.className = "Blank";
        const _5_4_ = document.getElementById("5-4"); _5_4_.className = "Blank";
    }

    //1874 Scorigami
    if (output.innerHTML == "1874") {
        const _5_1_ = document.getElementById("5-1"); _5_1_.className = "Scorigami";
        const _4_2_ = document.getElementById("4-2"); _4_2_.className = "Scorigami";
    }
    if (output.innerHTML > "1874") {
        const _5_1_ = document.getElementById("5-1"); _5_1_.className = "PastScorigami";
        const _4_2_ = document.getElementById("4-2"); _4_2_.className = "PastScorigami";
    }
    if (output.innerHTML < "1874") {
        const _5_1_ = document.getElementById("5-1"); _5_1_.className = "Blank";
        const _4_2_ = document.getElementById("4-2"); _4_2_.className = "Blank";
    }

    //1875 Scorigami
    if (output.innerHTML == "1875") {
        const _1_0_ = document.getElementById("1-0"); _1_0_.className = "Scorigami";
        const _4_0_ = document.getElementById("4-0"); _4_0_.className = "Scorigami";
        const _5_0_ = document.getElementById("5-0"); _5_0_.className = "Scorigami";
        const _1_1_ = document.getElementById("1-1"); _1_1_.className = "Scorigami";
        const _3_2_ = document.getElementById("3-2"); _3_2_.className = "Scorigami";
    }
    if (output.innerHTML > "1875") {
        const _1_0_ = document.getElementById("1-0"); _1_0_.className = "PastScorigami";
        const _4_0_ = document.getElementById("4-0"); _4_0_.className = "PastScorigami";
        const _5_0_ = document.getElementById("5-0"); _5_0_.className = "PastScorigami";
        const _1_1_ = document.getElementById("1-1"); _1_1_.className = "PastScorigami";
        const _3_2_ = document.getElementById("3-2"); _3_2_.className = "PastScorigami";
    }
    if (output.innerHTML < "1875") {
        const _1_0_ = document.getElementById("1-0"); _1_0_.className = "Blank";
        const _4_0_ = document.getElementById("4-0"); _4_0_.className = "Blank";
        const _5_0_ = document.getElementById("5-0"); _5_0_.className = "Blank";
        const _1_1_ = document.getElementById("1-1"); _1_1_.className = "Blank";
        const _3_2_ = document.getElementById("3-2"); _3_2_.className = "Blank";
    }

    //1876 Scorigami
    if (output.innerHTML == "1876") {
        const _2_0_ = document.getElementById("2-0"); _2_0_.className = "Scorigami";
        const _5_3_ = document.getElementById("5-3"); _5_3_.className = "Scorigami";
    }
    if (output.innerHTML > "1876") {
        const _2_0_ = document.getElementById("2-0"); _2_0_.className = "PastScorigami";
        const _5_3_ = document.getElementById("5-3"); _5_3_.className = "PastScorigami";
    }
    if (output.innerHTML < "1876") {
        const _2_0_ = document.getElementById("2-0"); _2_0_.className = "Blank";
        const _5_3_ = document.getElementById("5-3"); _5_3_.className = "Blank";
    }

    //1877 Scorigami
    if (output.innerHTML == "1877") {
        const _7_0_ = document.getElementById("7-0"); _7_0_.className = "Scorigami";
        const _13_0_ = document.getElementById("13-0"); _13_0_.className = "Scorigami";
        const _8_4_ = document.getElementById("8-4"); _8_4_.className = "Scorigami";
    }
    if (output.innerHTML > "1877") {
        const _7_0_ = document.getElementById("7-0"); _7_0_.className = "PastScorigami";
        const _13_0_ = document.getElementById("13-0"); _13_0_.className = "PastScorigami";
        const _8_4_ = document.getElementById("8-4"); _8_4_.className = "PastScorigami";
    }
    if (output.innerHTML < "1877") {
        const _7_0_ = document.getElementById("7-0"); _7_0_.className = "Blank";
        const _13_0_ = document.getElementById("13-0"); _13_0_.className = "Blank";
        const _8_4_ = document.getElementById("8-4"); _8_4_.className = "Blank";
    }

    //1878 Scorigami
    if (output.innerHTML == "1878") {
        const _9_0_ = document.getElementById("9-0"); _9_0_.className = "Scorigami";
    }
    if (output.innerHTML > "1878") {
        const _9_0_ = document.getElementById("9-0"); _9_0_.className = "PastScorigami";
    }
    if (output.innerHTML < "1878") {
        const _9_0_ = document.getElementById("9-0"); _9_0_.className = "Blank";
    }

    //1879 Scorigami
    if (output.innerHTML == "1879") {
        const _3_3_ = document.getElementById("3-3"); _3_3_.className = "Scorigami";
    }
    if (output.innerHTML > "1879") {
        const _3_3_ = document.getElementById("3-3"); _3_3_.className = "PastScorigami";
    }
    if (output.innerHTML < "1879") {
        const _3_3_ = document.getElementById("3-3"); _3_3_.className = "Blank";
    }

    //1880 Scorigami
    //There was zero Scorigami in the 1880 season.

    //1881 Scorigami
    if (output.innerHTML == "1881") {
        const _10_0_ = document.getElementById("10-0"); _10_0_.className = "Scorigami";
        const _9_1_ = document.getElementById("9-1"); _9_1_.className = "Scorigami";
        const _2_2_ = document.getElementById("2-2"); _2_2_.className = "Scorigami";
    }
    if (output.innerHTML > "1881") {
        const _10_0_ = document.getElementById("10-0"); _10_0_.className = "PastScorigami";
        const _9_1_ = document.getElementById("9-1"); _9_1_.className = "PastScorigami";
        const _2_2_ = document.getElementById("2-2"); _2_2_.className = "PastScorigami";
    }
    if (output.innerHTML < "1881") {
        const _10_0_ = document.getElementById("10-0"); _10_0_.className = "Blank";
        const _9_1_ = document.getElementById("9-1"); _9_1_.className = "Blank";
        const _2_2_ = document.getElementById("2-2"); _2_2_.className = "Blank";
    }

    //1882 Scorigami
    if (output.innerHTML == "1882") {
        const _11_0_ = document.getElementById("11-0"); _11_0_.className = "Scorigami";
    }
    if (output.innerHTML > "1882") {
        const _11_0_ = document.getElementById("11-0"); _11_0_.className = "PastScorigami";
    }
    if (output.innerHTML < "1882") {
        const _11_0_ = document.getElementById("11-0"); _11_0_.className = "Blank";
    }

    //1883 Scorigami
    if (output.innerHTML == "1883") {
        const _12_0_ = document.getElementById("12-0"); _12_0_.className = "Scorigami";
        const _14_0_ = document.getElementById("14-0"); _14_0_.className = "Scorigami";
        const _18_0_ = document.getElementById("18-0"); _18_0_.className = "Scorigami";
        const _19_0_ = document.getElementById("19-0"); _19_0_.className = "Scorigami";
        const _20_0_ = document.getElementById("20-0"); _20_0_.className = "Scorigami";
        const _21_0_ = document.getElementById("21-0"); _21_0_.className = "Scorigami";
        const _24_0_ = document.getElementById("24-0"); _24_0_.className = "Scorigami";
        const _25_0_ = document.getElementById("25-0"); _25_0_.className = "Scorigami";
        const _30_0_ = document.getElementById("30-0"); _30_0_.className = "Scorigami";
        const _37_0_ = document.getElementById("37-0"); _37_0_.className = "Scorigami";
        const _39_0_ = document.getElementById("39-0"); _39_0_.className = "Scorigami";
        const _49_0_ = document.getElementById("49-0"); _49_0_.className = "Scorigami";
        const _59_0_ = document.getElementById("59-0"); _59_0_.className = "Scorigami";
        const _60_0_ = document.getElementById("60-0"); _60_0_.className = "Scorigami";
        const _61_0_ = document.getElementById("61-0"); _61_0_.className = "Scorigami";
        const _64_0_ = document.getElementById("64-0"); _64_0_.className = "Scorigami";
        const _92_0_ = document.getElementById("92-0"); _92_0_.className = "Scorigami";
        const _93_0_ = document.getElementById("93-0"); _93_0_.className = "Scorigami";
        const _94_0_ = document.getElementById("94-0"); _94_0_.className = "Scorigami";
        const _14_1_ = document.getElementById("14-1"); _14_1_.className = "Scorigami";
        const _23_1_ = document.getElementById("23-1"); _23_1_.className = "Scorigami";
        const _35_1_ = document.getElementById("35-1"); _35_1_.className = "Scorigami";
        const _11_2_ = document.getElementById("11-2"); _11_2_.className = "Scorigami";
        const _23_2_ = document.getElementById("23-2"); _23_2_.className = "Scorigami";
        const _54_2_ = document.getElementById("54-2"); _54_2_.className = "Scorigami";
        const _14_4_ = document.getElementById("14-4"); _14_4_.className = "Scorigami";
        const _44_4_ = document.getElementById("44-4"); _44_4_.className = "Scorigami";
        const _40_5_ = document.getElementById("40-5"); _40_5_.className = "Scorigami";
        const _6_6_ = document.getElementById("6-6"); _6_6_.className = "Scorigami";
        const _14_6_ = document.getElementById("14-6"); _14_6_.className = "Scorigami";
        const _18_6_ = document.getElementById("18-6"); _18_6_.className = "Scorigami";
        const _26_6_ = document.getElementById("26-6"); _26_6_.className = "Scorigami";
        const _39_6_ = document.getElementById("39-6"); _39_6_.className = "Scorigami";
        const _26_7_ = document.getElementById("26-7"); _26_7_.className = "Scorigami";
        const _38_7_ = document.getElementById("38-7"); _38_7_.className = "Scorigami";
        const _54_7_ = document.getElementById("54-7"); _54_7_.className = "Scorigami";
        const _14_11_ = document.getElementById("14-11"); _14_11_.className = "Scorigami";
    }
    if (output.innerHTML > "1883") {
        const _12_0_ = document.getElementById("12-0"); _12_0_.className = "PastScorigami";
        const _14_0_ = document.getElementById("14-0"); _14_0_.className = "PastScorigami";
        const _18_0_ = document.getElementById("18-0"); _18_0_.className = "PastScorigami";
        const _19_0_ = document.getElementById("19-0"); _19_0_.className = "PastScorigami";
        const _20_0_ = document.getElementById("20-0"); _20_0_.className = "PastScorigami";
        const _21_0_ = document.getElementById("21-0"); _21_0_.className = "PastScorigami";
        const _24_0_ = document.getElementById("24-0"); _24_0_.className = "PastScorigami";
        const _25_0_ = document.getElementById("25-0"); _25_0_.className = "PastScorigami";
        const _30_0_ = document.getElementById("30-0"); _30_0_.className = "PastScorigami";
        const _37_0_ = document.getElementById("37-0"); _37_0_.className = "PastScorigami";
        const _39_0_ = document.getElementById("39-0"); _39_0_.className = "PastScorigami";
        const _49_0_ = document.getElementById("49-0"); _49_0_.className = "PastScorigami";
        const _59_0_ = document.getElementById("59-0"); _59_0_.className = "PastScorigami";
        const _60_0_ = document.getElementById("60-0"); _60_0_.className = "PastScorigami";
        const _61_0_ = document.getElementById("61-0"); _61_0_.className = "PastScorigami";
        const _64_0_ = document.getElementById("64-0"); _64_0_.className = "PastScorigami";
        const _92_0_ = document.getElementById("92-0"); _92_0_.className = "PastScorigami";
        const _93_0_ = document.getElementById("93-0"); _93_0_.className = "PastScorigami";
        const _94_0_ = document.getElementById("94-0"); _94_0_.className = "PastScorigami";
        const _14_1_ = document.getElementById("14-1"); _14_1_.className = "PastScorigami";
        const _23_1_ = document.getElementById("23-1"); _23_1_.className = "PastScorigami";
        const _35_1_ = document.getElementById("35-1"); _35_1_.className = "PastScorigami";
        const _11_2_ = document.getElementById("11-2"); _11_2_.className = "PastScorigami";
        const _23_2_ = document.getElementById("23-2"); _23_2_.className = "PastScorigami";
        const _54_2_ = document.getElementById("54-2"); _54_2_.className = "PastScorigami";
        const _14_4_ = document.getElementById("14-4"); _14_4_.className = "PastScorigami";
        const _44_4_ = document.getElementById("44-4"); _44_4_.className = "PastScorigami";
        const _40_5_ = document.getElementById("40-5"); _40_5_.className = "PastScorigami";
        const _6_6_ = document.getElementById("6-6"); _6_6_.className = "PastScorigami";
        const _14_6_ = document.getElementById("14-6"); _14_6_.className = "PastScorigami";
        const _18_6_ = document.getElementById("18-6"); _18_6_.className = "PastScorigami";
        const _26_6_ = document.getElementById("26-6"); _26_6_.className = "PastScorigami";
        const _39_6_ = document.getElementById("39-6"); _39_6_.className = "PastScorigami";
        const _26_7_ = document.getElementById("26-7"); _26_7_.className = "PastScorigami";
        const _38_7_ = document.getElementById("38-7"); _38_7_.className = "PastScorigami";
        const _54_7_ = document.getElementById("54-7"); _54_7_.className = "PastScorigami";
        const _14_11_ = document.getElementById("14-11"); _14_11_.className = "PastScorigami";
    }
    if (output.innerHTML < "1883") {
        const _12_0_ = document.getElementById("12-0"); _12_0_.className = "Blank";
        const _14_0_ = document.getElementById("14-0"); _14_0_.className = "Blank";
        const _18_0_ = document.getElementById("18-0"); _18_0_.className = "Blank";
        const _19_0_ = document.getElementById("19-0"); _19_0_.className = "Blank";
        const _20_0_ = document.getElementById("20-0"); _20_0_.className = "Blank";
        const _21_0_ = document.getElementById("21-0"); _21_0_.className = "Blank";
        const _24_0_ = document.getElementById("24-0"); _24_0_.className = "Blank";
        const _25_0_ = document.getElementById("25-0"); _25_0_.className = "Blank";
        const _30_0_ = document.getElementById("30-0"); _30_0_.className = "Blank";
        const _37_0_ = document.getElementById("37-0"); _37_0_.className = "Blank";
        const _39_0_ = document.getElementById("39-0"); _39_0_.className = "Blank";
        const _49_0_ = document.getElementById("49-0"); _49_0_.className = "Blank";
        const _59_0_ = document.getElementById("59-0"); _59_0_.className = "Blank";
        const _60_0_ = document.getElementById("60-0"); _60_0_.className = "Blank";
        const _61_0_ = document.getElementById("61-0"); _61_0_.className = "Blank";
        const _64_0_ = document.getElementById("64-0"); _64_0_.className = "Blank";
        const _92_0_ = document.getElementById("92-0"); _92_0_.className = "Blank";
        const _93_0_ = document.getElementById("93-0"); _93_0_.className = "Blank";
        const _94_0_ = document.getElementById("94-0"); _94_0_.className = "Blank";
        const _14_1_ = document.getElementById("14-1"); _14_1_.className = "Blank";
        const _23_1_ = document.getElementById("23-1"); _23_1_.className = "Blank";
        const _35_1_ = document.getElementById("35-1"); _35_1_.className = "Blank";
        const _11_2_ = document.getElementById("11-2"); _11_2_.className = "Blank";
        const _23_2_ = document.getElementById("23-2"); _23_2_.className = "Blank";
        const _54_2_ = document.getElementById("54-2"); _54_2_.className = "Blank";
        const _14_4_ = document.getElementById("14-4"); _14_4_.className = "Blank";
        const _44_4_ = document.getElementById("44-4"); _44_4_.className = "Blank";
        const _40_5_ = document.getElementById("40-5"); _40_5_.className = "Blank";
        const _6_6_ = document.getElementById("6-6"); _6_6_.className = "Blank";
        const _14_6_ = document.getElementById("14-6"); _14_6_.className = "Blank";
        const _18_6_ = document.getElementById("18-6"); _18_6_.className = "Blank";
        const _26_6_ = document.getElementById("26-6"); _26_6_.className = "Blank";
        const _39_6_ = document.getElementById("39-6"); _39_6_.className = "Blank";
        const _26_7_ = document.getElementById("26-7"); _26_7_.className = "Blank";
        const _38_7_ = document.getElementById("38-7"); _38_7_.className = "Blank";
        const _54_7_ = document.getElementById("54-7"); _54_7_.className = "Blank";
        const _14_11_ = document.getElementById("14-11"); _14_11_.className = "Blank";
    }

    //1884 Scorigami
    if (output.innerHTML == "1884") {
        const _15_0_ = document.getElementById("15-0"); _15_0_.className = "Scorigami";
        const _16_0_ = document.getElementById("16-0"); _16_0_.className = "Scorigami";
        const _23_0_ = document.getElementById("23-0"); _23_0_.className = "Scorigami";
        const _26_0_ = document.getElementById("26-0"); _26_0_.className = "Scorigami";
        const _29_0_ = document.getElementById("29-0"); _29_0_.className = "Scorigami";
        const _31_0_ = document.getElementById("31-0"); _31_0_.className = "Scorigami";
        const _33_0_ = document.getElementById("33-0"); _33_0_.className = "Scorigami";
        const _35_0_ = document.getElementById("35-0"); _35_0_.className = "Scorigami";
        const _42_0_ = document.getElementById("42-0"); _42_0_.className = "Scorigami";
        const _46_0_ = document.getElementById("46-0"); _46_0_.className = "Scorigami";
        const _50_0_ = document.getElementById("50-0"); _50_0_.className = "Scorigami";
        const _51_0_ = document.getElementById("51-0"); _51_0_.className = "Scorigami";
        const _52_0_ = document.getElementById("52-0"); _52_0_.className = "Scorigami";
        const _57_0_ = document.getElementById("57-0"); _57_0_.className = "Scorigami";
        const _58_0_ = document.getElementById("58-0"); _58_0_.className = "Scorigami";
        const _63_0_ = document.getElementById("63-0"); _63_0_.className = "Scorigami";
        const _67_0_ = document.getElementById("67-0"); _67_0_.className = "Scorigami";
        const _96_0_ = document.getElementById("96-0"); _96_0_.className = "Scorigami";
        const _113_0_ = document.getElementById("113-0"); _113_0_.className = "Scorigami";
        const _140_0_ = document.getElementById("140-0"); _140_0_.className = "Scorigami";
        const _22_2_ = document.getElementById("22-2"); _22_2_.className = "Scorigami";
        const _18_4_ = document.getElementById("18-4"); _18_4_.className = "Scorigami";
        const _24_4_ = document.getElementById("24-4"); _24_4_.className = "Scorigami";
        const _34_4_ = document.getElementById("34-4"); _34_4_.className = "Scorigami";
        const _23_5_ = document.getElementById("23-5"); _23_5_.className = "Scorigami";
        const _35_5_ = document.getElementById("35-5"); _35_5_.className = "Scorigami";
        const _43_5_ = document.getElementById("43-5"); _43_5_.className = "Scorigami";
        const _20_6_ = document.getElementById("20-6"); _20_6_.className = "Scorigami";
        const _36_6_ = document.getElementById("36-6"); _36_6_.className = "Scorigami";
        const _76_10_ = document.getElementById("76-10"); _76_10_.className = "Scorigami";
        const _14_12_ = document.getElementById("14-12"); _14_12_.className = "Scorigami";
        const _36_12_ = document.getElementById("36-12"); _36_12_.className = "Scorigami";
        const _16_16_ = document.getElementById("16-16"); _16_16_.className = "Scorigami";
    }
    if (output.innerHTML > "1884") {
        const _15_0_ = document.getElementById("15-0"); _15_0_.className = "PastScorigami";
        const _16_0_ = document.getElementById("16-0"); _16_0_.className = "PastScorigami";
        const _23_0_ = document.getElementById("23-0"); _23_0_.className = "PastScorigami";
        const _26_0_ = document.getElementById("26-0"); _26_0_.className = "PastScorigami";
        const _29_0_ = document.getElementById("29-0"); _29_0_.className = "PastScorigami";
        const _31_0_ = document.getElementById("31-0"); _31_0_.className = "PastScorigami";
        const _33_0_ = document.getElementById("33-0"); _33_0_.className = "PastScorigami";
        const _35_0_ = document.getElementById("35-0"); _35_0_.className = "PastScorigami";
        const _42_0_ = document.getElementById("42-0"); _42_0_.className = "PastScorigami";
        const _46_0_ = document.getElementById("46-0"); _46_0_.className = "PastScorigami";
        const _50_0_ = document.getElementById("50-0"); _50_0_.className = "PastScorigami";
        const _51_0_ = document.getElementById("51-0"); _51_0_.className = "PastScorigami";
        const _52_0_ = document.getElementById("52-0"); _52_0_.className = "PastScorigami";
        const _57_0_ = document.getElementById("57-0"); _57_0_.className = "PastScorigami";
        const _58_0_ = document.getElementById("58-0"); _58_0_.className = "PastScorigami";
        const _63_0_ = document.getElementById("63-0"); _63_0_.className = "PastScorigami";
        const _67_0_ = document.getElementById("67-0"); _67_0_.className = "PastScorigami";
        const _96_0_ = document.getElementById("96-0"); _96_0_.className = "PastScorigami";
        const _113_0_ = document.getElementById("113-0"); _113_0_.className = "PastScorigami";
        const _140_0_ = document.getElementById("140-0"); _140_0_.className = "PastScorigami";
        const _22_2_ = document.getElementById("22-2"); _22_2_.className = "PastScorigami";
        const _18_4_ = document.getElementById("18-4"); _18_4_.className = "PastScorigami";
        const _24_4_ = document.getElementById("24-4"); _24_4_.className = "PastScorigami";
        const _34_4_ = document.getElementById("34-4"); _34_4_.className = "PastScorigami";
        const _23_5_ = document.getElementById("23-5"); _23_5_.className = "PastScorigami";
        const _35_5_ = document.getElementById("35-5"); _35_5_.className = "PastScorigami";
        const _43_5_ = document.getElementById("43-5"); _43_5_.className = "PastScorigami";
        const _20_6_ = document.getElementById("20-6"); _20_6_.className = "PastScorigami";
        const _36_6_ = document.getElementById("36-6"); _36_6_.className = "PastScorigami";
        const _76_10_ = document.getElementById("76-10"); _76_10_.className = "PastScorigami";
        const _14_12_ = document.getElementById("14-12"); _14_12_.className = "PastScorigami";
        const _36_12_ = document.getElementById("36-12"); _36_12_.className = "PastScorigami";
        const _16_16_ = document.getElementById("16-16"); _16_16_.className = "PastScorigami";
    }
    if (output.innerHTML < "1884") {
        const _15_0_ = document.getElementById("15-0"); _15_0_.className = "Blank";
        const _16_0_ = document.getElementById("16-0"); _16_0_.className = "Blank";
        const _23_0_ = document.getElementById("23-0"); _23_0_.className = "Blank";
        const _26_0_ = document.getElementById("26-0"); _26_0_.className = "Blank";
        const _29_0_ = document.getElementById("29-0"); _29_0_.className = "Blank";
        const _31_0_ = document.getElementById("31-0"); _31_0_.className = "Blank";
        const _33_0_ = document.getElementById("33-0"); _33_0_.className = "Blank";
        const _35_0_ = document.getElementById("35-0"); _35_0_.className = "Blank";
        const _42_0_ = document.getElementById("42-0"); _42_0_.className = "Blank";
        const _46_0_ = document.getElementById("46-0"); _46_0_.className = "Blank";
        const _50_0_ = document.getElementById("50-0"); _50_0_.className = "Blank";
        const _51_0_ = document.getElementById("51-0"); _51_0_.className = "Blank";
        const _52_0_ = document.getElementById("52-0"); _52_0_.className = "Blank";
        const _57_0_ = document.getElementById("57-0"); _57_0_.className = "Blank";
        const _58_0_ = document.getElementById("58-0"); _58_0_.className = "Blank";
        const _63_0_ = document.getElementById("63-0"); _63_0_.className = "Blank";
        const _67_0_ = document.getElementById("67-0"); _67_0_.className = "Blank";
        const _96_0_ = document.getElementById("96-0"); _96_0_.className = "Blank";
        const _113_0_ = document.getElementById("113-0"); _113_0_.className = "Blank";
        const _140_0_ = document.getElementById("140-0"); _140_0_.className = "Blank";
        const _22_2_ = document.getElementById("22-2"); _22_2_.className = "Blank";
        const _18_4_ = document.getElementById("18-4"); _18_4_.className = "Blank";
        const _24_4_ = document.getElementById("24-4"); _24_4_.className = "Blank";
        const _34_4_ = document.getElementById("34-4"); _34_4_.className = "Blank";
        const _23_5_ = document.getElementById("23-5"); _23_5_.className = "Blank";
        const _35_5_ = document.getElementById("35-5"); _35_5_.className = "Blank";
        const _43_5_ = document.getElementById("43-5"); _43_5_.className = "Blank";
        const _20_6_ = document.getElementById("20-6"); _20_6_.className = "Blank";
        const _36_6_ = document.getElementById("36-6"); _36_6_.className = "Blank";
        const _76_10_ = document.getElementById("76-10"); _76_10_.className = "Blank";
        const _14_12_ = document.getElementById("14-12"); _14_12_.className = "Blank";
        const _36_12_ = document.getElementById("36-12"); _36_12_.className = "Blank";
        const _16_16_ = document.getElementById("16-16"); _16_16_.className = "Blank";
    }

    //1885 Scorigami
    if (output.innerHTML == "1885") {
        const _54_0_ = document.getElementById("54-0"); _54_0_.className = "Scorigami";
        const _55_0_ = document.getElementById("55-0"); _55_0_.className = "Scorigami";
        const _71_0_ = document.getElementById("71-0"); _71_0_.className = "Scorigami";
        const _76_0_ = document.getElementById("76-0"); _76_0_.className = "Scorigami";
        const _80_0_ = document.getElementById("80-0"); _80_0_.className = "Scorigami";
        const _86_0_ = document.getElementById("86-0"); _86_0_.className = "Scorigami";
        const _162_0_ = document.getElementById("162-0"); _162_0_.className = "Scorigami";
        const _20_4_ = document.getElementById("20-4"); _20_4_.className = "Scorigami";
        const _6_5_ = document.getElementById("6-5"); _6_5_.className = "Scorigami";
        const _10_5_ = document.getElementById("10-5"); _10_5_.className = "Scorigami";
        const _53_5_ = document.getElementById("53-5"); _53_5_.className = "Scorigami";
        const _68_6_ = document.getElementById("68-6"); _68_6_.className = "Scorigami";
        const _24_8_ = document.getElementById("24-8"); _24_8_.className = "Scorigami";
        const _23_9_ = document.getElementById("23-9"); _23_9_.className = "Scorigami";
        const _54_10_ = document.getElementById("54-10"); _54_10_.className = "Scorigami";
        const _80_10_ = document.getElementById("80-10"); _80_10_.className = "Scorigami";
        const _16_12_ = document.getElementById("16-12"); _16_12_.className = "Scorigami";
        const _23_18_ = document.getElementById("23-18"); _23_18_.className = "Scorigami";
        const _25_18_ = document.getElementById("25-18"); _25_18_.className = "Scorigami";
        const _30_22_ = document.getElementById("30-22"); _30_22_.className = "Scorigami";
    }
    if (output.innerHTML > "1885") {
        const _54_0_ = document.getElementById("54-0"); _54_0_.className = "PastScorigami";
        const _55_0_ = document.getElementById("55-0"); _55_0_.className = "PastScorigami";
        const _71_0_ = document.getElementById("71-0"); _71_0_.className = "PastScorigami";
        const _76_0_ = document.getElementById("76-0"); _76_0_.className = "PastScorigami";
        const _80_0_ = document.getElementById("80-0"); _80_0_.className = "PastScorigami";
        const _86_0_ = document.getElementById("86-0"); _86_0_.className = "PastScorigami";
        const _162_0_ = document.getElementById("162-0"); _162_0_.className = "PastScorigami";
        const _20_4_ = document.getElementById("20-4"); _20_4_.className = "PastScorigami";
        const _6_5_ = document.getElementById("6-5"); _6_5_.className = "PastScorigami";
        const _10_5_ = document.getElementById("10-5"); _10_5_.className = "PastScorigami";
        const _53_5_ = document.getElementById("53-5"); _53_5_.className = "PastScorigami";
        const _68_6_ = document.getElementById("68-6"); _68_6_.className = "PastScorigami";
        const _24_8_ = document.getElementById("24-8"); _24_8_.className = "PastScorigami";
        const _23_9_ = document.getElementById("23-9"); _23_9_.className = "PastScorigami";
        const _54_10_ = document.getElementById("54-10"); _54_10_.className = "PastScorigami";
        const _80_10_ = document.getElementById("80-10"); _80_10_.className = "PastScorigami";
        const _16_12_ = document.getElementById("16-12"); _16_12_.className = "PastScorigami";
        const _23_18_ = document.getElementById("23-18"); _23_18_.className = "PastScorigami";
        const _25_18_ = document.getElementById("25-18"); _25_18_.className = "PastScorigami";
        const _30_22_ = document.getElementById("30-22"); _30_22_.className = "PastScorigami";
    }
    if (output.innerHTML < "1885") {
        const _54_0_ = document.getElementById("54-0"); _54_0_.className = "Blank";
        const _55_0_ = document.getElementById("55-0"); _55_0_.className = "Blank";
        const _71_0_ = document.getElementById("71-0"); _71_0_.className = "Blank";
        const _76_0_ = document.getElementById("76-0"); _76_0_.className = "Blank";
        const _80_0_ = document.getElementById("80-0"); _80_0_.className = "Blank";
        const _86_0_ = document.getElementById("86-0"); _86_0_.className = "Blank";
        const _162_0_ = document.getElementById("162-0"); _162_0_.className = "Blank";
        const _20_4_ = document.getElementById("20-4"); _20_4_.className = "Blank";
        const _6_5_ = document.getElementById("6-5"); _6_5_.className = "Blank";
        const _10_5_ = document.getElementById("10-5"); _10_5_.className = "Blank";
        const _53_5_ = document.getElementById("53-5"); _53_5_.className = "Blank";
        const _68_6_ = document.getElementById("68-6"); _68_6_.className = "Blank";
        const _24_8_ = document.getElementById("24-8"); _24_8_.className = "Blank";
        const _23_9_ = document.getElementById("23-9"); _23_9_.className = "Blank";
        const _54_10_ = document.getElementById("54-10"); _54_10_.className = "Blank";
        const _80_10_ = document.getElementById("80-10"); _80_10_.className = "Blank";
        const _16_12_ = document.getElementById("16-12"); _16_12_.className = "Blank";
        const _23_18_ = document.getElementById("23-18"); _23_18_.className = "Blank";
        const _25_18_ = document.getElementById("25-18"); _25_18_.className = "Blank";
        const _30_22_ = document.getElementById("30-22"); _30_22_.className = "Blank";
    }

    //1886 Scorigami
    if (output.innerHTML == "1886") {
        const _22_0_ = document.getElementById("22-0"); _22_0_.className = "Scorigami";
        const _28_0_ = document.getElementById("28-0"); _28_0_.className = "Scorigami";
        const _34_0_ = document.getElementById("34-0"); _34_0_.className = "Scorigami";
        const _38_0_ = document.getElementById("38-0"); _38_0_.className = "Scorigami";
        const _44_0_ = document.getElementById("44-0"); _44_0_.className = "Scorigami";
        const _47_0_ = document.getElementById("47-0"); _47_0_.className = "Scorigami";
        const _62_0_ = document.getElementById("62-0"); _62_0_.className = "Scorigami";
        const _65_0_ = document.getElementById("65-0"); _65_0_.className = "Scorigami";
        const _70_0_ = document.getElementById("70-0"); _70_0_.className = "Scorigami";
        const _75_0_ = document.getElementById("75-0"); _75_0_.className = "Scorigami";
        const _82_0_ = document.getElementById("82-0"); _82_0_.className = "Scorigami";
        const _84_0_ = document.getElementById("84-0"); _84_0_.className = "Scorigami";
        const _91_0_ = document.getElementById("91-0"); _91_0_.className = "Scorigami";
        const _136_0_ = document.getElementById("136-0"); _136_0_.className = "Scorigami";
        const _158_0_ = document.getElementById("158-0"); _158_0_.className = "Scorigami";
        const _15_2_ = document.getElementById("15-2"); _15_2_.className = "Scorigami";
        const _28_2_ = document.getElementById("28-2"); _28_2_.className = "Scorigami";
        const _16_4_ = document.getElementById("16-4"); _16_4_.className = "Scorigami";
        const _22_4_ = document.getElementById("22-4"); _22_4_.className = "Scorigami";
        const _26_4_ = document.getElementById("26-4"); _26_4_.className = "Scorigami";
        const _29_4_ = document.getElementById("29-4"); _29_4_.className = "Scorigami";
        const _33_4_ = document.getElementById("33-4"); _33_4_.className = "Scorigami";
        const _24_5_ = document.getElementById("24-5"); _24_5_.className = "Scorigami";
        const _11_6_ = document.getElementById("11-6"); _11_6_.className = "Scorigami";
        const _28_6_ = document.getElementById("28-6"); _28_6_.className = "Scorigami";
        const _61_6_ = document.getElementById("61-6"); _61_6_.className = "Scorigami";
        const _76_6_ = document.getElementById("76-6"); _76_6_.className = "Scorigami";
        const _96_6_ = document.getElementById("96-6"); _96_6_.className = "Scorigami";
        const _18_8_ = document.getElementById("18-8"); _18_8_.className = "Scorigami";
        const _26_8_ = document.getElementById("26-8"); _26_8_.className = "Scorigami";
        const _55_9_ = document.getElementById("55-9"); _55_9_.className = "Scorigami";
        const _20_10_ = document.getElementById("20-10"); _20_10_.className = "Scorigami";
        const _26_10_ = document.getElementById("26-10"); _26_10_.className = "Scorigami";
        const _18_11_ = document.getElementById("18-11"); _18_11_.className = "Scorigami";
        const _20_12_ = document.getElementById("20-12"); _20_12_.className = "Scorigami";
        const _14_14_ = document.getElementById("14-14"); _14_14_.className = "Scorigami";
    }
    if (output.innerHTML > "1886") {
        const _22_0_ = document.getElementById("22-0"); _22_0_.className = "PastScorigami";
        const _28_0_ = document.getElementById("28-0"); _28_0_.className = "PastScorigami";
        const _34_0_ = document.getElementById("34-0"); _34_0_.className = "PastScorigami";
        const _38_0_ = document.getElementById("38-0"); _38_0_.className = "PastScorigami";
        const _44_0_ = document.getElementById("44-0"); _44_0_.className = "PastScorigami";
        const _47_0_ = document.getElementById("47-0"); _47_0_.className = "PastScorigami";
        const _62_0_ = document.getElementById("62-0"); _62_0_.className = "PastScorigami";
        const _65_0_ = document.getElementById("65-0"); _65_0_.className = "PastScorigami";
        const _70_0_ = document.getElementById("70-0"); _70_0_.className = "PastScorigami";
        const _75_0_ = document.getElementById("75-0"); _75_0_.className = "PastScorigami";
        const _82_0_ = document.getElementById("82-0"); _82_0_.className = "PastScorigami";
        const _84_0_ = document.getElementById("84-0"); _84_0_.className = "PastScorigami";
        const _91_0_ = document.getElementById("91-0"); _91_0_.className = "PastScorigami";
        const _136_0_ = document.getElementById("136-0"); _136_0_.className = "PastScorigami";
        const _158_0_ = document.getElementById("158-0"); _158_0_.className = "PastScorigami";
        const _15_2_ = document.getElementById("15-2"); _15_2_.className = "PastScorigami";
        const _28_2_ = document.getElementById("28-2"); _28_2_.className = "PastScorigami";
        const _16_4_ = document.getElementById("16-4"); _16_4_.className = "PastScorigami";
        const _22_4_ = document.getElementById("22-4"); _22_4_.className = "PastScorigami";
        const _26_4_ = document.getElementById("26-4"); _26_4_.className = "PastScorigami";
        const _29_4_ = document.getElementById("29-4"); _29_4_.className = "PastScorigami";
        const _33_4_ = document.getElementById("33-4"); _33_4_.className = "PastScorigami";
        const _24_5_ = document.getElementById("24-5"); _24_5_.className = "PastScorigami";
        const _11_6_ = document.getElementById("11-6"); _11_6_.className = "PastScorigami";
        const _28_6_ = document.getElementById("28-6"); _28_6_.className = "PastScorigami";
        const _61_6_ = document.getElementById("61-6"); _61_6_.className = "PastScorigami";
        const _76_6_ = document.getElementById("76-6"); _76_6_.className = "PastScorigami";
        const _96_6_ = document.getElementById("96-6"); _96_6_.className = "PastScorigami";
        const _18_8_ = document.getElementById("18-8"); _18_8_.className = "PastScorigami";
        const _26_8_ = document.getElementById("26-8"); _26_8_.className = "PastScorigami";
        const _55_9_ = document.getElementById("55-9"); _55_9_.className = "PastScorigami";
        const _20_10_ = document.getElementById("20-10"); _20_10_.className = "PastScorigami";
        const _26_10_ = document.getElementById("26-10"); _26_10_.className = "PastScorigami";
        const _18_11_ = document.getElementById("18-11"); _18_11_.className = "PastScorigami";
        const _20_12_ = document.getElementById("20-12"); _20_12_.className = "PastScorigami";
        const _14_14_ = document.getElementById("14-14"); _14_14_.className = "PastScorigami";
    }
    if (output.innerHTML < "1886") {
        const _22_0_ = document.getElementById("22-0"); _22_0_.className = "Blank";
        const _28_0_ = document.getElementById("28-0"); _28_0_.className = "Blank";
        const _34_0_ = document.getElementById("34-0"); _34_0_.className = "Blank";
        const _38_0_ = document.getElementById("38-0"); _38_0_.className = "Blank";
        const _44_0_ = document.getElementById("44-0"); _44_0_.className = "Blank";
        const _47_0_ = document.getElementById("47-0"); _47_0_.className = "Blank";
        const _62_0_ = document.getElementById("62-0"); _62_0_.className = "Blank";
        const _65_0_ = document.getElementById("65-0"); _65_0_.className = "Blank";
        const _70_0_ = document.getElementById("70-0"); _70_0_.className = "Blank";
        const _75_0_ = document.getElementById("75-0"); _75_0_.className = "Blank";
        const _82_0_ = document.getElementById("82-0"); _82_0_.className = "Blank";
        const _84_0_ = document.getElementById("84-0"); _84_0_.className = "Blank";
        const _91_0_ = document.getElementById("91-0"); _91_0_.className = "Blank";
        const _136_0_ = document.getElementById("136-0"); _136_0_.className = "Blank";
        const _158_0_ = document.getElementById("158-0"); _158_0_.className = "Blank";
        const _15_2_ = document.getElementById("15-2"); _15_2_.className = "Blank";
        const _28_2_ = document.getElementById("28-2"); _28_2_.className = "Blank";
        const _16_4_ = document.getElementById("16-4"); _16_4_.className = "Blank";
        const _22_4_ = document.getElementById("22-4"); _22_4_.className = "Blank";
        const _26_4_ = document.getElementById("26-4"); _26_4_.className = "Blank";
        const _29_4_ = document.getElementById("29-4"); _29_4_.className = "Blank";
        const _33_4_ = document.getElementById("33-4"); _33_4_.className = "Blank";
        const _24_5_ = document.getElementById("24-5"); _24_5_.className = "Blank";
        const _11_6_ = document.getElementById("11-6"); _11_6_.className = "Blank";
        const _28_6_ = document.getElementById("28-6"); _28_6_.className = "Blank";
        const _61_6_ = document.getElementById("61-6"); _61_6_.className = "Blank";
        const _76_6_ = document.getElementById("76-6"); _76_6_.className = "Blank";
        const _96_6_ = document.getElementById("96-6"); _96_6_.className = "Blank";
        const _18_8_ = document.getElementById("18-8"); _18_8_.className = "Blank";
        const _26_8_ = document.getElementById("26-8"); _26_8_.className = "Blank";
        const _55_9_ = document.getElementById("55-9"); _55_9_.className = "Blank";
        const _20_10_ = document.getElementById("20-10"); _20_10_.className = "Blank";
        const _26_10_ = document.getElementById("26-10"); _26_10_.className = "Blank";
        const _18_11_ = document.getElementById("18-11"); _18_11_.className = "Blank";
        const _20_12_ = document.getElementById("20-12"); _20_12_.className = "Blank";
        const _14_14_ = document.getElementById("14-14"); _14_14_.className = "Blank";
    }

    //1887 Scorigami
    if (output.innerHTML == "1887") {
        const _36_0_ = document.getElementById("36-0"); _36_0_.className = "Scorigami";
        const _66_0_ = document.getElementById("66-0"); _66_0_.className = "Scorigami";
        const _68_0_ = document.getElementById("68-0"); _68_0_.className = "Scorigami";
        const _69_0_ = document.getElementById("69-0"); _69_0_.className = "Scorigami";
        const _72_0_ = document.getElementById("72-0"); _72_0_.className = "Scorigami";
        const _74_0_ = document.getElementById("74-0"); _74_0_.className = "Scorigami";
        const _95_0_ = document.getElementById("95-0"); _95_0_.className = "Scorigami";
        const _98_0_ = document.getElementById("98-0"); _98_0_.className = "Scorigami";
        const _106_0_ = document.getElementById("106-0"); _106_0_.className = "Scorigami";
        const _110_0_ = document.getElementById("110-0"); _110_0_.className = "Scorigami";
        const _5_2_ = document.getElementById("5-2"); _5_2_.className = "Scorigami";
        const _4_4_ = document.getElementById("4-4"); _4_4_.className = "Scorigami";
        const _10_4_ = document.getElementById("10-4"); _10_4_.className = "Scorigami";
        const _12_4_ = document.getElementById("12-4"); _12_4_.className = "Scorigami";
        const _32_4_ = document.getElementById("32-4"); _32_4_.className = "Scorigami";
        const _76_4_ = document.getElementById("76-4"); _76_4_.className = "Scorigami";
        const _12_6_ = document.getElementById("12-6"); _12_6_.className = "Scorigami";
        const _16_6_ = document.getElementById("16-6"); _16_6_.className = "Scorigami";
        const _22_6_ = document.getElementById("22-6"); _22_6_.className = "Scorigami";
        const _31_6_ = document.getElementById("31-6"); _31_6_.className = "Scorigami";
        const _32_6_ = document.getElementById("32-6"); _32_6_.className = "Scorigami";
        const _52_6_ = document.getElementById("52-6"); _52_6_.className = "Scorigami";
        const _17_8_ = document.getElementById("17-8"); _17_8_.className = "Scorigami";
        const _29_8_ = document.getElementById("29-8"); _29_8_.className = "Scorigami";
        const _13_10_ = document.getElementById("13-10"); _13_10_.className = "Scorigami";
        const _38_10_ = document.getElementById("38-10"); _38_10_.className = "Scorigami";
        const _24_15_ = document.getElementById("24-15"); _24_15_.className = "Scorigami";
    }
    if (output.innerHTML > "1887") {
        const _36_0_ = document.getElementById("36-0"); _36_0_.className = "PastScorigami";
        const _66_0_ = document.getElementById("66-0"); _66_0_.className = "PastScorigami";
        const _68_0_ = document.getElementById("68-0"); _68_0_.className = "PastScorigami";
        const _69_0_ = document.getElementById("69-0"); _69_0_.className = "PastScorigami";
        const _72_0_ = document.getElementById("72-0"); _72_0_.className = "PastScorigami";
        const _74_0_ = document.getElementById("74-0"); _74_0_.className = "PastScorigami";
        const _95_0_ = document.getElementById("95-0"); _95_0_.className = "PastScorigami";
        const _98_0_ = document.getElementById("98-0"); _98_0_.className = "PastScorigami";
        const _106_0_ = document.getElementById("106-0"); _106_0_.className = "PastScorigami";
        const _110_0_ = document.getElementById("110-0"); _110_0_.className = "PastScorigami";
        const _5_2_ = document.getElementById("5-2"); _5_2_.className = "PastScorigami";
        const _4_4_ = document.getElementById("4-4"); _4_4_.className = "PastScorigami";
        const _10_4_ = document.getElementById("10-4"); _10_4_.className = "PastScorigami";
        const _12_4_ = document.getElementById("12-4"); _12_4_.className = "PastScorigami";
        const _32_4_ = document.getElementById("32-4"); _32_4_.className = "PastScorigami";
        const _76_4_ = document.getElementById("76-4"); _76_4_.className = "PastScorigami";
        const _12_6_ = document.getElementById("12-6"); _12_6_.className = "PastScorigami";
        const _16_6_ = document.getElementById("16-6"); _16_6_.className = "PastScorigami";
        const _22_6_ = document.getElementById("22-6"); _22_6_.className = "PastScorigami";
        const _31_6_ = document.getElementById("31-6"); _31_6_.className = "PastScorigami";
        const _32_6_ = document.getElementById("32-6"); _32_6_.className = "PastScorigami";
        const _52_6_ = document.getElementById("52-6"); _52_6_.className = "PastScorigami";
        const _17_8_ = document.getElementById("17-8"); _17_8_.className = "PastScorigami";
        const _29_8_ = document.getElementById("29-8"); _29_8_.className = "PastScorigami";
        const _13_10_ = document.getElementById("13-10"); _13_10_.className = "PastScorigami";
        const _38_10_ = document.getElementById("38-10"); _38_10_.className = "PastScorigami";
        const _24_15_ = document.getElementById("24-15"); _24_15_.className = "PastScorigami";
    }
    if (output.innerHTML < "1887") {
        const _36_0_ = document.getElementById("36-0"); _36_0_.className = "Blank";
        const _66_0_ = document.getElementById("66-0"); _66_0_.className = "Blank";
        const _68_0_ = document.getElementById("68-0"); _68_0_.className = "Blank";
        const _69_0_ = document.getElementById("69-0"); _69_0_.className = "Blank";
        const _72_0_ = document.getElementById("72-0"); _72_0_.className = "Blank";
        const _74_0_ = document.getElementById("74-0"); _74_0_.className = "Blank";
        const _95_0_ = document.getElementById("95-0"); _95_0_.className = "Blank";
        const _98_0_ = document.getElementById("98-0"); _98_0_.className = "Blank";
        const _106_0_ = document.getElementById("106-0"); _106_0_.className = "Blank";
        const _110_0_ = document.getElementById("110-0"); _110_0_.className = "Blank";
        const _5_2_ = document.getElementById("5-2"); _5_2_.className = "Blank";
        const _4_4_ = document.getElementById("4-4"); _4_4_.className = "Blank";
        const _10_4_ = document.getElementById("10-4"); _10_4_.className = "Blank";
        const _12_4_ = document.getElementById("12-4"); _12_4_.className = "Blank";
        const _32_4_ = document.getElementById("32-4"); _32_4_.className = "Blank";
        const _76_4_ = document.getElementById("76-4"); _76_4_.className = "Blank";
        const _12_6_ = document.getElementById("12-6"); _12_6_.className = "Blank";
        const _16_6_ = document.getElementById("16-6"); _16_6_.className = "Blank";
        const _22_6_ = document.getElementById("22-6"); _22_6_.className = "Blank";
        const _31_6_ = document.getElementById("31-6"); _31_6_.className = "Blank";
        const _32_6_ = document.getElementById("32-6"); _32_6_.className = "Blank";
        const _52_6_ = document.getElementById("52-6"); _52_6_.className = "Blank";
        const _17_8_ = document.getElementById("17-8"); _17_8_.className = "Blank";
        const _29_8_ = document.getElementById("29-8"); _29_8_.className = "Blank";
        const _13_10_ = document.getElementById("13-10"); _13_10_.className = "Blank";
        const _38_10_ = document.getElementById("38-10"); _38_10_.className = "Blank";
        const _24_15_ = document.getElementById("24-15"); _24_15_.className = "Blank";
    }

    //1888 Scorigami
    if (output.innerHTML == "1888") {
        const _40_0_ = document.getElementById("40-0"); _40_0_.className = "Scorigami";
        const _48_0_ = document.getElementById("48-0"); _48_0_.className = "Scorigami";
        const _53_0_ = document.getElementById("53-0"); _53_0_.className = "Scorigami";
        const _102_0_ = document.getElementById("102-0"); _102_0_.className = "Scorigami";
        const _104_0_ = document.getElementById("104-0"); _104_0_.className = "Scorigami";
        const _105_0_ = document.getElementById("105-0"); _105_0_.className = "Scorigami";
        const _50_2_ = document.getElementById("50-2"); _50_2_.className = "Scorigami";
        const _42_4_ = document.getElementById("42-4"); _42_4_.className = "Scorigami";
        const _45_4_ = document.getElementById("45-4"); _45_4_.className = "Scorigami";
        const _30_6_ = document.getElementById("30-6"); _30_6_.className = "Scorigami";
        const _44_6_ = document.getElementById("44-6"); _44_6_.className = "Scorigami";
        const _12_8_ = document.getElementById("12-8"); _12_8_.className = "Scorigami";
        const _20_9_ = document.getElementById("20-9"); _20_9_.className = "Scorigami";
        const _12_10_ = document.getElementById("12-10"); _12_10_.className = "Scorigami";
        const _24_10_ = document.getElementById("24-10"); _24_10_.className = "Scorigami";
        const _18_12_ = document.getElementById("18-12"); _18_12_.className = "Scorigami";
        const _18_18_ = document.getElementById("18-18"); _18_18_.className = "Scorigami";
    }
    if (output.innerHTML > "1888") {
        const _40_0_ = document.getElementById("40-0"); _40_0_.className = "PastScorigami";
        const _48_0_ = document.getElementById("48-0"); _48_0_.className = "PastScorigami";
        const _53_0_ = document.getElementById("53-0"); _53_0_.className = "PastScorigami";
        const _102_0_ = document.getElementById("102-0"); _102_0_.className = "PastScorigami";
        const _104_0_ = document.getElementById("104-0"); _104_0_.className = "PastScorigami";
        const _105_0_ = document.getElementById("105-0"); _105_0_.className = "PastScorigami";
        const _50_2_ = document.getElementById("50-2"); _50_2_.className = "PastScorigami";
        const _42_4_ = document.getElementById("42-4"); _42_4_.className = "PastScorigami";
        const _45_4_ = document.getElementById("45-4"); _45_4_.className = "PastScorigami";
        const _30_6_ = document.getElementById("30-6"); _30_6_.className = "PastScorigami";
        const _44_6_ = document.getElementById("44-6"); _44_6_.className = "PastScorigami";
        const _12_8_ = document.getElementById("12-8"); _12_8_.className = "PastScorigami";
        const _20_9_ = document.getElementById("20-9"); _20_9_.className = "PastScorigami";
        const _12_10_ = document.getElementById("12-10"); _12_10_.className = "PastScorigami";
        const _24_10_ = document.getElementById("24-10"); _24_10_.className = "PastScorigami";
        const _18_12_ = document.getElementById("18-12"); _18_12_.className = "PastScorigami";
        const _18_18_ = document.getElementById("18-18"); _18_18_.className = "PastScorigami";
    }
    if (output.innerHTML < "1888") {
        const _40_0_ = document.getElementById("40-0"); _40_0_.className = "Blank";
        const _48_0_ = document.getElementById("48-0"); _48_0_.className = "Blank";
        const _53_0_ = document.getElementById("53-0"); _53_0_.className = "Blank";
        const _102_0_ = document.getElementById("102-0"); _102_0_.className = "Blank";
        const _104_0_ = document.getElementById("104-0"); _104_0_.className = "Blank";
        const _105_0_ = document.getElementById("105-0"); _105_0_.className = "Blank";
        const _50_2_ = document.getElementById("50-2"); _50_2_.className = "Blank";
        const _42_4_ = document.getElementById("42-4"); _42_4_.className = "Blank";
        const _45_4_ = document.getElementById("45-4"); _45_4_.className = "Blank";
        const _30_6_ = document.getElementById("30-6"); _30_6_.className = "Blank";
        const _44_6_ = document.getElementById("44-6"); _44_6_.className = "Blank";
        const _12_8_ = document.getElementById("12-8"); _12_8_.className = "Blank";
        const _20_9_ = document.getElementById("20-9"); _20_9_.className = "Blank";
        const _12_10_ = document.getElementById("12-10"); _12_10_.className = "Blank";
        const _24_10_ = document.getElementById("24-10"); _24_10_.className = "Blank";
        const _18_12_ = document.getElementById("18-12"); _18_12_.className = "Blank";
        const _18_18_ = document.getElementById("18-18"); _18_18_.className = "Blank";
    }

    //1889 Scorigami
    if (output.innerHTML == "1889") {
        const _32_0_ = document.getElementById("32-0"); _32_0_.className = "Scorigami";
        const _41_0_ = document.getElementById("41-0"); _41_0_.className = "Scorigami";
        const _56_0_ = document.getElementById("56-0"); _56_0_.className = "Scorigami";
        const _124_0_ = document.getElementById("124-0"); _124_0_.className = "Scorigami";
        const _130_0_ = document.getElementById("130-0"); _130_0_.className = "Scorigami";
        const _10_2_ = document.getElementById("10-2"); _10_2_.className = "Scorigami";
        const _67_2_ = document.getElementById("67-2"); _67_2_.className = "Scorigami";
        const _28_4_ = document.getElementById("28-4"); _28_4_.className = "Scorigami";
        const _39_4_ = document.getElementById("39-4"); _39_4_.className = "Scorigami";
        const _58_4_ = document.getElementById("58-4"); _58_4_.className = "Scorigami";
        const _72_4_ = document.getElementById("72-4"); _72_4_.className = "Scorigami";
        const _12_5_ = document.getElementById("12-5"); _12_5_.className = "Scorigami";
        const _18_5_ = document.getElementById("18-5"); _18_5_.className = "Scorigami";
        const _63_5_ = document.getElementById("63-5"); _63_5_.className = "Scorigami";
        const _42_6_ = document.getElementById("42-6"); _42_6_.className = "Scorigami";
        const _51_6_ = document.getElementById("51-6"); _51_6_.className = "Scorigami";
        const _54_6_ = document.getElementById("54-6"); _54_6_.className = "Scorigami";
        const _56_6_ = document.getElementById("56-6"); _56_6_.className = "Scorigami";
        const _60_6_ = document.getElementById("60-6"); _60_6_.className = "Scorigami";
        const _10_8_ = document.getElementById("10-8"); _10_8_.className = "Scorigami";
        const _10_9_ = document.getElementById("10-9"); _10_9_.className = "Scorigami";
        const _10_10_ = document.getElementById("10-10"); _10_10_.className = "Scorigami";
        const _16_10_ = document.getElementById("16-10"); _16_10_.className = "Scorigami";
        const _11_11_ = document.getElementById("11-11"); _11_11_.className = "Scorigami";
        const _12_12_ = document.getElementById("12-12"); _12_12_.className = "Scorigami";
        const _24_12_ = document.getElementById("24-12"); _24_12_.className = "Scorigami";
        const _41_15_ = document.getElementById("41-15"); _41_15_.className = "Scorigami";
        const _17_16_ = document.getElementById("17-16"); _17_16_.className = "Scorigami";
        const _20_17_ = document.getElementById("20-17"); _20_17_.className = "Scorigami";
    }
    if (output.innerHTML > "1889") {
        const _32_0_ = document.getElementById("32-0"); _32_0_.className = "PastScorigami";
        const _41_0_ = document.getElementById("41-0"); _41_0_.className = "PastScorigami";
        const _56_0_ = document.getElementById("56-0"); _56_0_.className = "PastScorigami";
        const _124_0_ = document.getElementById("124-0"); _124_0_.className = "PastScorigami";
        const _130_0_ = document.getElementById("130-0"); _130_0_.className = "PastScorigami";
        const _10_2_ = document.getElementById("10-2"); _10_2_.className = "PastScorigami";
        const _67_2_ = document.getElementById("67-2"); _67_2_.className = "PastScorigami";
        const _28_4_ = document.getElementById("28-4"); _28_4_.className = "PastScorigami";
        const _39_4_ = document.getElementById("39-4"); _39_4_.className = "PastScorigami";
        const _58_4_ = document.getElementById("58-4"); _58_4_.className = "PastScorigami";
        const _72_4_ = document.getElementById("72-4"); _72_4_.className = "PastScorigami";
        const _12_5_ = document.getElementById("12-5"); _12_5_.className = "PastScorigami";
        const _18_5_ = document.getElementById("18-5"); _18_5_.className = "PastScorigami";
        const _63_5_ = document.getElementById("63-5"); _63_5_.className = "PastScorigami";
        const _42_6_ = document.getElementById("42-6"); _42_6_.className = "PastScorigami";
        const _51_6_ = document.getElementById("51-6"); _51_6_.className = "PastScorigami";
        const _54_6_ = document.getElementById("54-6"); _54_6_.className = "PastScorigami";
        const _56_6_ = document.getElementById("56-6"); _56_6_.className = "PastScorigami";
        const _60_6_ = document.getElementById("60-6"); _60_6_.className = "PastScorigami";
        const _10_8_ = document.getElementById("10-8"); _10_8_.className = "PastScorigami";
        const _10_9_ = document.getElementById("10-9"); _10_9_.className = "PastScorigami";
        const _10_10_ = document.getElementById("10-10"); _10_10_.className = "PastScorigami";
        const _16_10_ = document.getElementById("16-10"); _16_10_.className = "PastScorigami";
        const _11_11_ = document.getElementById("11-11"); _11_11_.className = "PastScorigami";
        const _12_12_ = document.getElementById("12-12"); _12_12_.className = "PastScorigami";
        const _24_12_ = document.getElementById("24-12"); _24_12_.className = "PastScorigami";
        const _41_15_ = document.getElementById("41-15"); _41_15_.className = "PastScorigami";
        const _17_16_ = document.getElementById("17-16"); _17_16_.className = "PastScorigami";
        const _20_17_ = document.getElementById("20-17"); _20_17_.className = "PastScorigami";
    }
    if (output.innerHTML < "1889") {
        const _32_0_ = document.getElementById("32-0"); _32_0_.className = "Blank";
        const _41_0_ = document.getElementById("41-0"); _41_0_.className = "Blank";
        const _56_0_ = document.getElementById("56-0"); _56_0_.className = "Blank";
        const _124_0_ = document.getElementById("124-0"); _124_0_.className = "Blank";
        const _130_0_ = document.getElementById("130-0"); _130_0_.className = "Blank";
        const _10_2_ = document.getElementById("10-2"); _10_2_.className = "Blank";
        const _67_2_ = document.getElementById("67-2"); _67_2_.className = "Blank";
        const _28_4_ = document.getElementById("28-4"); _28_4_.className = "Blank";
        const _39_4_ = document.getElementById("39-4"); _39_4_.className = "Blank";
        const _58_4_ = document.getElementById("58-4"); _58_4_.className = "Blank";
        const _72_4_ = document.getElementById("72-4"); _72_4_.className = "Blank";
        const _12_5_ = document.getElementById("12-5"); _12_5_.className = "Blank";
        const _18_5_ = document.getElementById("18-5"); _18_5_.className = "Blank";
        const _63_5_ = document.getElementById("63-5"); _63_5_.className = "Blank";
        const _42_6_ = document.getElementById("42-6"); _42_6_.className = "Blank";
        const _51_6_ = document.getElementById("51-6"); _51_6_.className = "Blank";
        const _54_6_ = document.getElementById("54-6"); _54_6_.className = "Blank";
        const _56_6_ = document.getElementById("56-6"); _56_6_.className = "Blank";
        const _60_6_ = document.getElementById("60-6"); _60_6_.className = "Blank";
        const _10_8_ = document.getElementById("10-8"); _10_8_.className = "Blank";
        const _10_9_ = document.getElementById("10-9"); _10_9_.className = "Blank";
        const _10_10_ = document.getElementById("10-10"); _10_10_.className = "Blank";
        const _16_10_ = document.getElementById("16-10"); _16_10_.className = "Blank";
        const _11_11_ = document.getElementById("11-11"); _11_11_.className = "Blank";
        const _12_12_ = document.getElementById("12-12"); _12_12_.className = "Blank";
        const _24_12_ = document.getElementById("24-12"); _24_12_.className = "Blank";
        const _41_15_ = document.getElementById("41-15"); _41_15_.className = "Blank";
        const _17_16_ = document.getElementById("17-16"); _17_16_.className = "Blank";
        const _20_17_ = document.getElementById("20-17"); _20_17_.className = "Blank";
    }

    //1890 Scorigami
    if (output.innerHTML == "1890") {
        const _27_0_ = document.getElementById("27-0"); _27_0_.className = "Scorigami";
        const _43_0_ = document.getElementById("43-0"); _43_0_.className = "Scorigami";
        const _77_0_ = document.getElementById("77-0"); _77_0_.className = "Scorigami";
        const _85_0_ = document.getElementById("85-0"); _85_0_.className = "Scorigami";
        const _115_0_ = document.getElementById("115-0"); _115_0_.className = "Scorigami";
        const _38_4_ = document.getElementById("38-4"); _38_4_.className = "Scorigami";
        const _46_4_ = document.getElementById("46-4"); _46_4_.className = "Scorigami";
        const _82_4_ = document.getElementById("82-4"); _82_4_.className = "Scorigami";
        const _20_5_ = document.getElementById("20-5"); _20_5_.className = "Scorigami";
        const _8_6_ = document.getElementById("8-6"); _8_6_.className = "Scorigami";
        const _34_6_ = document.getElementById("34-6"); _34_6_.className = "Scorigami";
        const _48_6_ = document.getElementById("48-6"); _48_6_.className = "Scorigami";
        const _66_6_ = document.getElementById("66-6"); _66_6_.className = "Scorigami";
        const _74_6_ = document.getElementById("74-6"); _74_6_.className = "Scorigami";
        const _14_10_ = document.getElementById("14-10"); _14_10_.className = "Scorigami";
        const _18_10_ = document.getElementById("18-10"); _18_10_.className = "Scorigami";
        const _34_10_ = document.getElementById("34-10"); _34_10_.className = "Scorigami";
        const _12_11_ = document.getElementById("12-11"); _12_11_.className = "Scorigami";
        const _17_14_ = document.getElementById("17-14"); _17_14_.className = "Scorigami";
        const _20_16_ = document.getElementById("20-16"); _20_16_.className = "Scorigami";
        const _33_16_ = document.getElementById("33-16"); _33_16_.className = "Scorigami";
    }
    if (output.innerHTML > "1890") {
        const _27_0_ = document.getElementById("27-0"); _27_0_.className = "PastScorigami";
        const _43_0_ = document.getElementById("43-0"); _43_0_.className = "PastScorigami";
        const _77_0_ = document.getElementById("77-0"); _77_0_.className = "PastScorigami";
        const _85_0_ = document.getElementById("85-0"); _85_0_.className = "PastScorigami";
        const _115_0_ = document.getElementById("115-0"); _115_0_.className = "PastScorigami";
        const _38_4_ = document.getElementById("38-4"); _38_4_.className = "PastScorigami";
        const _46_4_ = document.getElementById("46-4"); _46_4_.className = "PastScorigami";
        const _82_4_ = document.getElementById("82-4"); _82_4_.className = "PastScorigami";
        const _20_5_ = document.getElementById("20-5"); _20_5_.className = "PastScorigami";
        const _8_6_ = document.getElementById("8-6"); _8_6_.className = "PastScorigami";
        const _34_6_ = document.getElementById("34-6"); _34_6_.className = "PastScorigami";
        const _48_6_ = document.getElementById("48-6"); _48_6_.className = "PastScorigami";
        const _66_6_ = document.getElementById("66-6"); _66_6_.className = "PastScorigami";
        const _74_6_ = document.getElementById("74-6"); _74_6_.className = "PastScorigami";
        const _14_10_ = document.getElementById("14-10"); _14_10_.className = "PastScorigami";
        const _18_10_ = document.getElementById("18-10"); _18_10_.className = "PastScorigami";
        const _34_10_ = document.getElementById("34-10"); _34_10_.className = "PastScorigami";
        const _12_11_ = document.getElementById("12-11"); _12_11_.className = "PastScorigami";
        const _17_14_ = document.getElementById("17-14"); _17_14_.className = "PastScorigami";
        const _20_16_ = document.getElementById("20-16"); _20_16_.className = "PastScorigami";
        const _33_16_ = document.getElementById("33-16"); _33_16_.className = "PastScorigami";
    }
    if (output.innerHTML < "1890") {
        const _27_0_ = document.getElementById("27-0"); _27_0_.className = "Blank";
        const _43_0_ = document.getElementById("43-0"); _43_0_.className = "Blank";
        const _77_0_ = document.getElementById("77-0"); _77_0_.className = "Blank";
        const _85_0_ = document.getElementById("85-0"); _85_0_.className = "Blank";
        const _115_0_ = document.getElementById("115-0"); _115_0_.className = "Blank";
        const _38_4_ = document.getElementById("38-4"); _38_4_.className = "Blank";
        const _46_4_ = document.getElementById("46-4"); _46_4_.className = "Blank";
        const _82_4_ = document.getElementById("82-4"); _82_4_.className = "Blank";
        const _20_5_ = document.getElementById("20-5"); _20_5_.className = "Blank";
        const _8_6_ = document.getElementById("8-6"); _8_6_.className = "Blank";
        const _34_6_ = document.getElementById("34-6"); _34_6_.className = "Blank";
        const _48_6_ = document.getElementById("48-6"); _48_6_.className = "Blank";
        const _66_6_ = document.getElementById("66-6"); _66_6_.className = "Blank";
        const _74_6_ = document.getElementById("74-6"); _74_6_.className = "Blank";
        const _14_10_ = document.getElementById("14-10"); _14_10_.className = "Blank";
        const _18_10_ = document.getElementById("18-10"); _18_10_.className = "Blank";
        const _34_10_ = document.getElementById("34-10"); _34_10_.className = "Blank";
        const _12_11_ = document.getElementById("12-11"); _12_11_.className = "Blank";
        const _17_14_ = document.getElementById("17-14"); _17_14_.className = "Blank";
        const _20_16_ = document.getElementById("20-16"); _20_16_.className = "Blank";
        const _33_16_ = document.getElementById("33-16"); _33_16_.className = "Blank";
    }


    //1891 Scorigami
    if (output.innerHTML == "1891") {
        const _17_0_ = document.getElementById("17-0"); _17_0_.className = "Scorigami";
        const _73_0_ = document.getElementById("73-0"); _73_0_.className = "Scorigami";
        const _78_0_ = document.getElementById("78-0"); _78_0_.className = "Scorigami";
        const _79_0_ = document.getElementById("79-0"); _79_0_.className = "Scorigami";
        const _100_0_ = document.getElementById("100-0"); _100_0_.className = "Scorigami";
        const _16_2_ = document.getElementById("16-2"); _16_2_.className = "Scorigami";
        const _24_2_ = document.getElementById("24-2"); _24_2_.className = "Scorigami";
        const _23_4_ = document.getElementById("23-4"); _23_4_.className = "Scorigami";
        const _62_4_ = document.getElementById("62-4"); _62_4_.className = "Scorigami";
        const _70_4_ = document.getElementById("70-4"); _70_4_.className = "Scorigami";
        const _28_5_ = document.getElementById("28-5"); _28_5_.className = "Scorigami";
        const _10_6_ = document.getElementById("10-6"); _10_6_.className = "Scorigami";
        const _15_6_ = document.getElementById("15-6"); _15_6_.className = "Scorigami";
        const _27_6_ = document.getElementById("27-6"); _27_6_.className = "Scorigami";
        const _38_6_ = document.getElementById("38-6"); _38_6_.className = "Scorigami";
        const _36_10_ = document.getElementById("36-10"); _36_10_.className = "Scorigami";
        const _21_12_ = document.getElementById("21-12"); _21_12_.className = "Scorigami";
        const _32_12_ = document.getElementById("32-12"); _32_12_.className = "Scorigami";
        const _34_12_ = document.getElementById("34-12"); _34_12_.className = "Scorigami";
        const _51_12_ = document.getElementById("51-12"); _51_12_.className = "Scorigami";
        const _58_12_ = document.getElementById("58-12"); _58_12_.className = "Scorigami";
        const _16_14_ = document.getElementById("16-14"); _16_14_.className = "Scorigami";
        const _24_14_ = document.getElementById("24-14"); _24_14_.className = "Scorigami";
        const _32_16_ = document.getElementById("32-16"); _32_16_.className = "Scorigami";
        const _22_18_ = document.getElementById("22-18"); _22_18_.className = "Scorigami";
        const _30_18_ = document.getElementById("30-18"); _30_18_.className = "Scorigami";
    }
    if (output.innerHTML > "1891") {
        const _17_0_ = document.getElementById("17-0"); _17_0_.className = "PastScorigami";
        const _73_0_ = document.getElementById("73-0"); _73_0_.className = "PastScorigami";
        const _78_0_ = document.getElementById("78-0"); _78_0_.className = "PastScorigami";
        const _79_0_ = document.getElementById("79-0"); _79_0_.className = "PastScorigami";
        const _100_0_ = document.getElementById("100-0"); _100_0_.className = "PastScorigami";
        const _16_2_ = document.getElementById("16-2"); _16_2_.className = "PastScorigami";
        const _24_2_ = document.getElementById("24-2"); _24_2_.className = "PastScorigami";
        const _23_4_ = document.getElementById("23-4"); _23_4_.className = "PastScorigami";
        const _62_4_ = document.getElementById("62-4"); _62_4_.className = "PastScorigami";
        const _70_4_ = document.getElementById("70-4"); _70_4_.className = "PastScorigami";
        const _28_5_ = document.getElementById("28-5"); _28_5_.className = "PastScorigami";
        const _10_6_ = document.getElementById("10-6"); _10_6_.className = "PastScorigami";
        const _15_6_ = document.getElementById("15-6"); _15_6_.className = "PastScorigami";
        const _27_6_ = document.getElementById("27-6"); _27_6_.className = "PastScorigami";
        const _38_6_ = document.getElementById("38-6"); _38_6_.className = "PastScorigami";
        const _36_10_ = document.getElementById("36-10"); _36_10_.className = "PastScorigami";
        const _21_12_ = document.getElementById("21-12"); _21_12_.className = "PastScorigami";
        const _32_12_ = document.getElementById("32-12"); _32_12_.className = "PastScorigami";
        const _34_12_ = document.getElementById("34-12"); _34_12_.className = "PastScorigami";
        const _51_12_ = document.getElementById("51-12"); _51_12_.className = "PastScorigami";
        const _58_12_ = document.getElementById("58-12"); _58_12_.className = "PastScorigami";
        const _16_14_ = document.getElementById("16-14"); _16_14_.className = "PastScorigami";
        const _24_14_ = document.getElementById("24-14"); _24_14_.className = "PastScorigami";
        const _32_16_ = document.getElementById("32-16"); _32_16_.className = "PastScorigami";
        const _22_18_ = document.getElementById("22-18"); _22_18_.className = "PastScorigami";
        const _30_18_ = document.getElementById("30-18"); _30_18_.className = "PastScorigami";
    }
    if (output.innerHTML < "1891") {
        const _17_0_ = document.getElementById("17-0"); _17_0_.className = "Blank";
        const _73_0_ = document.getElementById("73-0"); _73_0_.className = "Blank";
        const _78_0_ = document.getElementById("78-0"); _78_0_.className = "Blank";
        const _79_0_ = document.getElementById("79-0"); _79_0_.className = "Blank";
        const _100_0_ = document.getElementById("100-0"); _100_0_.className = "Blank";
        const _16_2_ = document.getElementById("16-2"); _16_2_.className = "Blank";
        const _24_2_ = document.getElementById("24-2"); _24_2_.className = "Blank";
        const _23_4_ = document.getElementById("23-4"); _23_4_.className = "Blank";
        const _62_4_ = document.getElementById("62-4"); _62_4_.className = "Blank";
        const _70_4_ = document.getElementById("70-4"); _70_4_.className = "Blank";
        const _28_5_ = document.getElementById("28-5"); _28_5_.className = "Blank";
        const _10_6_ = document.getElementById("10-6"); _10_6_.className = "Blank";
        const _15_6_ = document.getElementById("15-6"); _15_6_.className = "Blank";
        const _27_6_ = document.getElementById("27-6"); _27_6_.className = "Blank";
        const _38_6_ = document.getElementById("38-6"); _38_6_.className = "Blank";
        const _36_10_ = document.getElementById("36-10"); _36_10_.className = "Blank";
        const _21_12_ = document.getElementById("21-12"); _21_12_.className = "Blank";
        const _32_12_ = document.getElementById("32-12"); _32_12_.className = "Blank";
        const _34_12_ = document.getElementById("34-12"); _34_12_.className = "Blank";
        const _51_12_ = document.getElementById("51-12"); _51_12_.className = "Blank";
        const _58_12_ = document.getElementById("58-12"); _58_12_.className = "Blank";
        const _16_14_ = document.getElementById("16-14"); _16_14_.className = "Blank";
        const _24_14_ = document.getElementById("24-14"); _24_14_.className = "Blank";
        const _32_16_ = document.getElementById("32-16"); _32_16_.className = "Blank";
        const _22_18_ = document.getElementById("22-18"); _22_18_.className = "Blank";
        const _30_18_ = document.getElementById("30-18"); _30_18_.className = "Blank";
    }
    

    //1892 Scorigami
    if (output.innerHTML == "1892") {
        const _30_2_ = document.getElementById("30-2"); _30_2_.className = "Scorigami";
        const _40_6_ = document.getElementById("40-6"); _40_6_.className = "Scorigami";
        const _16_8_ = document.getElementById("16-8"); _16_8_.className = "Scorigami";
        const _20_8_ = document.getElementById("20-8"); _20_8_.className = "Scorigami";
        const _21_8_ = document.getElementById("21-8"); _21_8_.className = "Scorigami";
        const _30_8_ = document.getElementById("30-8"); _30_8_.className = "Scorigami";
        const _60_8_ = document.getElementById("60-8"); _60_8_.className = "Scorigami";
        const _22_10_ = document.getElementById("22-10"); _22_10_.className = "Scorigami";
        const _28_10_ = document.getElementById("28-10"); _28_10_.className = "Scorigami";
        const _30_10_ = document.getElementById("30-10"); _30_10_.className = "Scorigami";
        const _32_10_ = document.getElementById("32-10"); _32_10_.className = "Scorigami";
        const _58_10_ = document.getElementById("58-10"); _58_10_.className = "Scorigami";
        const _22_12_ = document.getElementById("22-12"); _22_12_.className = "Scorigami";
        const _28_12_ = document.getElementById("28-12"); _28_12_.className = "Scorigami";
        const _44_12_ = document.getElementById("44-12"); _44_12_.className = "Scorigami";
        const _46_12_ = document.getElementById("46-12"); _46_12_.className = "Scorigami";
        const _48_12_ = document.getElementById("48-12"); _48_12_.className = "Scorigami";
        const _20_14_ = document.getElementById("20-14"); _20_14_.className = "Scorigami";
        const _18_15_ = document.getElementById("18-15"); _18_15_.className = "Scorigami";
        const _18_16_ = document.getElementById("18-16"); _18_16_.className = "Scorigami";
        const _26_24_ = document.getElementById("26-24"); _26_24_.className = "Scorigami";
        const _40_24_ = document.getElementById("40-24"); _40_24_.className = "Scorigami";
    }
    if (output.innerHTML > "1892") {
        const _30_2_ = document.getElementById("30-2"); _30_2_.className = "PastScorigami";
        const _40_6_ = document.getElementById("40-6"); _40_6_.className = "PastScorigami";
        const _16_8_ = document.getElementById("16-8"); _16_8_.className = "PastScorigami";
        const _20_8_ = document.getElementById("20-8"); _20_8_.className = "PastScorigami";
        const _21_8_ = document.getElementById("21-8"); _21_8_.className = "PastScorigami";
        const _30_8_ = document.getElementById("30-8"); _30_8_.className = "PastScorigami";
        const _60_8_ = document.getElementById("60-8"); _60_8_.className = "PastScorigami";
        const _22_10_ = document.getElementById("22-10"); _22_10_.className = "PastScorigami";
        const _28_10_ = document.getElementById("28-10"); _28_10_.className = "PastScorigami";
        const _30_10_ = document.getElementById("30-10"); _30_10_.className = "PastScorigami";
        const _32_10_ = document.getElementById("32-10"); _32_10_.className = "PastScorigami";
        const _58_10_ = document.getElementById("58-10"); _58_10_.className = "PastScorigami";
        const _22_12_ = document.getElementById("22-12"); _22_12_.className = "PastScorigami";
        const _28_12_ = document.getElementById("28-12"); _28_12_.className = "PastScorigami";
        const _44_12_ = document.getElementById("44-12"); _44_12_.className = "PastScorigami";
        const _46_12_ = document.getElementById("46-12"); _46_12_.className = "PastScorigami";
        const _48_12_ = document.getElementById("48-12"); _48_12_.className = "PastScorigami";
        const _20_14_ = document.getElementById("20-14"); _20_14_.className = "PastScorigami";
        const _18_15_ = document.getElementById("18-15"); _18_15_.className = "PastScorigami";
        const _18_16_ = document.getElementById("18-16"); _18_16_.className = "PastScorigami";
        const _26_24_ = document.getElementById("26-24"); _26_24_.className = "PastScorigami";
        const _40_24_ = document.getElementById("40-24"); _40_24_.className = "PastScorigami";
    }
    if (output.innerHTML < "1892") {
        const _30_2_ = document.getElementById("30-2"); _30_2_.className = "Blank";
        const _40_6_ = document.getElementById("40-6"); _40_6_.className = "Blank";
        const _16_8_ = document.getElementById("16-8"); _16_8_.className = "Blank";
        const _20_8_ = document.getElementById("20-8"); _20_8_.className = "Blank";
        const _21_8_ = document.getElementById("21-8"); _21_8_.className = "Blank";
        const _30_8_ = document.getElementById("30-8"); _30_8_.className = "Blank";
        const _60_8_ = document.getElementById("60-8"); _60_8_.className = "Blank";
        const _22_10_ = document.getElementById("22-10"); _22_10_.className = "Blank";
        const _28_10_ = document.getElementById("28-10"); _28_10_.className = "Blank";
        const _30_10_ = document.getElementById("30-10"); _30_10_.className = "Blank";
        const _32_10_ = document.getElementById("32-10"); _32_10_.className = "Blank";
        const _58_10_ = document.getElementById("58-10"); _58_10_.className = "Blank";
        const _22_12_ = document.getElementById("22-12"); _22_12_.className = "Blank";
        const _28_12_ = document.getElementById("28-12"); _28_12_.className = "Blank";
        const _44_12_ = document.getElementById("44-12"); _44_12_.className = "Blank";
        const _46_12_ = document.getElementById("46-12"); _46_12_.className = "Blank";
        const _48_12_ = document.getElementById("48-12"); _48_12_.className = "Blank";
        const _20_14_ = document.getElementById("20-14"); _20_14_.className = "Blank";
        const _18_15_ = document.getElementById("18-15"); _18_15_.className = "Blank";
        const _18_16_ = document.getElementById("18-16"); _18_16_.className = "Blank";
        const _26_24_ = document.getElementById("26-24"); _26_24_.className = "Blank";
        const _40_24_ = document.getElementById("40-24"); _40_24_.className = "Blank";
    }

    //1893 Scorigami
    if (output.innerHTML == "1893") {
        const _36_4_ = document.getElementById("36-4"); _36_4_.className = "Scorigami";
        const _60_5_ = document.getElementById("60-5"); _60_5_.className = "Scorigami";
        const _46_6_ = document.getElementById("46-6"); _46_6_.className = "Scorigami";
        const _72_6_ = document.getElementById("72-6"); _72_6_.className = "Scorigami";
        const _46_8_ = document.getElementById("46-8"); _46_8_.className = "Scorigami";
        const _48_8_ = document.getElementById("48-8"); _48_8_.className = "Scorigami";
        const _30_12_ = document.getElementById("30-12"); _30_12_.className = "Scorigami";
        const _33_12_ = document.getElementById("33-12"); _33_12_.className = "Scorigami";
        const _22_14_ = document.getElementById("22-14"); _22_14_.className = "Scorigami";
        const _26_16_ = document.getElementById("26-16"); _26_16_.className = "Scorigami";
        const _34_18_ = document.getElementById("34-18"); _34_18_.className = "Scorigami";
        const _42_18_ = document.getElementById("42-18"); _42_18_.className = "Scorigami";
        const _34_20_ = document.getElementById("34-20"); _34_20_.className = "Scorigami";
        const _38_22_ = document.getElementById("38-22"); _38_22_.className = "Scorigami";
        const _34_24_ = document.getElementById("34-24"); _34_24_.className = "Scorigami";
        const _26_26_ = document.getElementById("26-26"); _26_26_.className = "Scorigami";
        const _36_30_ = document.getElementById("36-30"); _36_30_.className = "Scorigami";
    }
    if (output.innerHTML > "1893") {
        const _36_4_ = document.getElementById("36-4"); _36_4_.className = "PastScorigami";
        const _60_5_ = document.getElementById("60-5"); _60_5_.className = "PastScorigami";
        const _46_6_ = document.getElementById("46-6"); _46_6_.className = "PastScorigami";
        const _72_6_ = document.getElementById("72-6"); _72_6_.className = "PastScorigami";
        const _46_8_ = document.getElementById("46-8"); _46_8_.className = "PastScorigami";
        const _48_8_ = document.getElementById("48-8"); _48_8_.className = "PastScorigami";
        const _30_12_ = document.getElementById("30-12"); _30_12_.className = "PastScorigami";
        const _33_12_ = document.getElementById("33-12"); _33_12_.className = "PastScorigami";
        const _22_14_ = document.getElementById("22-14"); _22_14_.className = "PastScorigami";
        const _26_16_ = document.getElementById("26-16"); _26_16_.className = "PastScorigami";
        const _34_18_ = document.getElementById("34-18"); _34_18_.className = "PastScorigami";
        const _42_18_ = document.getElementById("42-18"); _42_18_.className = "PastScorigami";
        const _34_20_ = document.getElementById("34-20"); _34_20_.className = "PastScorigami";
        const _38_22_ = document.getElementById("38-22"); _38_22_.className = "PastScorigami";
        const _34_24_ = document.getElementById("34-24"); _34_24_.className = "PastScorigami";
        const _26_26_ = document.getElementById("26-26"); _26_26_.className = "PastScorigami";
        const _36_30_ = document.getElementById("36-30"); _36_30_.className = "PastScorigami";
    }
    if (output.innerHTML < "1893") {
        const _36_4_ = document.getElementById("36-4"); _36_4_.className = "Blank";
        const _60_5_ = document.getElementById("60-5"); _60_5_.className = "Blank";
        const _46_6_ = document.getElementById("46-6"); _46_6_.className = "Blank";
        const _72_6_ = document.getElementById("72-6"); _72_6_.className = "Blank";
        const _46_8_ = document.getElementById("46-8"); _46_8_.className = "Blank";
        const _48_8_ = document.getElementById("48-8"); _48_8_.className = "Blank";
        const _30_12_ = document.getElementById("30-12"); _30_12_.className = "Blank";
        const _33_12_ = document.getElementById("33-12"); _33_12_.className = "Blank";
        const _22_14_ = document.getElementById("22-14"); _22_14_.className = "Blank";
        const _26_16_ = document.getElementById("26-16"); _26_16_.className = "Blank";
        const _34_18_ = document.getElementById("34-18"); _34_18_.className = "Blank";
        const _42_18_ = document.getElementById("42-18"); _42_18_.className = "Blank";
        const _34_20_ = document.getElementById("34-20"); _34_20_.className = "Blank";
        const _38_22_ = document.getElementById("38-22"); _38_22_.className = "Blank";
        const _34_24_ = document.getElementById("34-24"); _34_24_.className = "Blank";
        const _26_26_ = document.getElementById("26-26"); _26_26_.className = "Blank";
        const _36_30_ = document.getElementById("36-30"); _36_30_.className = "Blank";
    }

    //1894 Scorigami
    if (output.innerHTML == "1894") {
        const _24_6_ = document.getElementById("24-6"); _24_6_.className = "Scorigami";
        const _11_8_ = document.getElementById("11-8"); _11_8_.className = "Scorigami";
        const _18_14_ = document.getElementById("18-14"); _18_14_.className = "Scorigami";
    }
    if (output.innerHTML > "1894") {
        const _24_6_ = document.getElementById("24-6"); _24_6_.className = "PastScorigami";
        const _11_8_ = document.getElementById("11-8"); _11_8_.className = "PastScorigami";
        const _18_14_ = document.getElementById("18-14"); _18_14_.className = "PastScorigami";
    }
    if (output.innerHTML < "1894") {
        const _24_6_ = document.getElementById("24-6"); _24_6_.className = "Blank";
        const _11_8_ = document.getElementById("11-8"); _11_8_.className = "Blank";
        const _18_14_ = document.getElementById("18-14"); _18_14_.className = "Blank";
    }

    //1895 Scorigami
    if (output.innerHTML == "1895") {
        const _8_2_ = document.getElementById("8-2"); _8_2_.className = "Scorigami";
        const _46_2_ = document.getElementById("46-2"); _46_2_.className = "Scorigami";
        const _35_4_ = document.getElementById("35-4"); _35_4_.className = "Scorigami";
        const _26_5_ = document.getElementById("26-5"); _26_5_.className = "Scorigami";
        const _28_8_ = document.getElementById("28-8"); _28_8_.className = "Scorigami";
    }
    if (output.innerHTML > "1895") {
        const _8_2_ = document.getElementById("8-2"); _8_2_.className = "PastScorigami";
        const _46_2_ = document.getElementById("46-2"); _46_2_.className = "PastScorigami";
        const _35_4_ = document.getElementById("35-4"); _35_4_.className = "PastScorigami";
        const _26_5_ = document.getElementById("26-5"); _26_5_.className = "PastScorigami";
        const _28_8_ = document.getElementById("28-8"); _28_8_.className = "PastScorigami";
    }
    if (output.innerHTML < "1895") {
        const _8_2_ = document.getElementById("8-2"); _8_2_.className = "Blank";
        const _46_2_ = document.getElementById("46-2"); _46_2_.className = "Blank";
        const _35_4_ = document.getElementById("35-4"); _35_4_.className = "Blank";
        const _26_5_ = document.getElementById("26-5"); _26_5_.className = "Blank";
        const _28_8_ = document.getElementById("28-8"); _28_8_.className = "Blank";
    }

    //1896 Scorigami
    if (output.innerHTML == "1896") {
        const _13_4_ = document.getElementById("13-4"); _13_4_.className = "Scorigami";
        const _8_5_ = document.getElementById("8-5"); _8_5_.className = "Scorigami";
        const _11_5_ = document.getElementById("11-5"); _11_5_.className = "Scorigami";
        const _48_5_ = document.getElementById("48-5"); _48_5_.className = "Scorigami";
        const _7_6_ = document.getElementById("7-6"); _7_6_.className = "Scorigami";
        const _22_8_ = document.getElementById("22-8"); _22_8_.className = "Scorigami";
        const _28_22_ = document.getElementById("28-22"); _28_22_.className = "Scorigami";
    }
    if (output.innerHTML > "1896") {
        const _13_4_ = document.getElementById("13-4"); _13_4_.className = "PastScorigami";
        const _8_5_ = document.getElementById("8-5"); _8_5_.className = "PastScorigami";
        const _11_5_ = document.getElementById("11-5"); _11_5_.className = "PastScorigami";
        const _48_5_ = document.getElementById("48-5"); _48_5_.className = "PastScorigami";
        const _7_6_ = document.getElementById("7-6"); _7_6_.className = "PastScorigami";
        const _22_8_ = document.getElementById("22-8"); _22_8_.className = "PastScorigami";
        const _28_22_ = document.getElementById("28-22"); _28_22_.className = "PastScorigami";
    }
    if (output.innerHTML < "1896") {
        const _13_4_ = document.getElementById("13-4"); _13_4_.className = "Blank";
        const _8_5_ = document.getElementById("8-5"); _8_5_.className = "Blank";
        const _11_5_ = document.getElementById("11-5"); _11_5_.className = "Blank";
        const _48_5_ = document.getElementById("48-5"); _48_5_.className = "Blank";
        const _7_6_ = document.getElementById("7-6"); _7_6_.className = "Blank";
        const _22_8_ = document.getElementById("22-8"); _22_8_.className = "Blank";
        const _28_22_ = document.getElementById("28-22"); _28_22_.className = "Blank";
    }

    //1897 Scorigami
    if (output.innerHTML == "1897") {
        const _45_0_ = document.getElementById("45-0"); _45_0_.className = "Scorigami";
        const _27_4_ = document.getElementById("27-4"); _27_4_.className = "Scorigami";
        const _41_4_ = document.getElementById("41-4"); _41_4_.className = "Scorigami";
        const _34_5_ = document.getElementById("34-5"); _34_5_.className = "Scorigami";
        const _21_6_ = document.getElementById("21-6"); _21_6_.className = "Scorigami";
        const _23_6_ = document.getElementById("23-6"); _23_6_.className = "Scorigami";
        const _41_6_ = document.getElementById("41-6"); _41_6_.className = "Scorigami";
        const _23_8_ = document.getElementById("23-8"); _23_8_.className = "Scorigami";
        const _12_9_ = document.getElementById("12-9"); _12_9_.className = "Scorigami";
        const _24_9_ = document.getElementById("24-9"); _24_9_.className = "Scorigami";
        const _28_20_ = document.getElementById("28-20"); _28_20_.className = "Scorigami";
    }
    if (output.innerHTML > "1897") {
        const _45_0_ = document.getElementById("45-0"); _45_0_.className = "PastScorigami";
        const _27_4_ = document.getElementById("27-4"); _27_4_.className = "PastScorigami";
        const _41_4_ = document.getElementById("41-4"); _41_4_.className = "PastScorigami";
        const _34_5_ = document.getElementById("34-5"); _34_5_.className = "PastScorigami";
        const _21_6_ = document.getElementById("21-6"); _21_6_.className = "PastScorigami";
        const _23_6_ = document.getElementById("23-6"); _23_6_.className = "PastScorigami";
        const _41_6_ = document.getElementById("41-6"); _41_6_.className = "PastScorigami";
        const _23_8_ = document.getElementById("23-8"); _23_8_.className = "PastScorigami";
        const _12_9_ = document.getElementById("12-9"); _12_9_.className = "PastScorigami";
        const _24_9_ = document.getElementById("24-9"); _24_9_.className = "PastScorigami";
        const _28_20_ = document.getElementById("28-20"); _28_20_.className = "PastScorigami";
    }
    if (output.innerHTML < "1897") {
        const _45_0_ = document.getElementById("45-0"); _45_0_.className = "Blank";
        const _27_4_ = document.getElementById("27-4"); _27_4_.className = "Blank";
        const _41_4_ = document.getElementById("41-4"); _41_4_.className = "Blank";
        const _34_5_ = document.getElementById("34-5"); _34_5_.className = "Blank";
        const _21_6_ = document.getElementById("21-6"); _21_6_.className = "Blank";
        const _23_6_ = document.getElementById("23-6"); _23_6_.className = "Blank";
        const _41_6_ = document.getElementById("41-6"); _41_6_.className = "Blank";
        const _23_8_ = document.getElementById("23-8"); _23_8_.className = "Blank";
        const _12_9_ = document.getElementById("12-9"); _12_9_.className = "Blank";
        const _24_9_ = document.getElementById("24-9"); _24_9_.className = "Blank";
        const _28_20_ = document.getElementById("28-20"); _28_20_.className = "Blank";
    }

    //1898 Scorigami
    if (output.innerHTML == "1898") {
        const _53_2_ = document.getElementById("53-2"); _53_2_.className = "Scorigami";
        const _5_5_ = document.getElementById("5-5"); _5_5_.className = "Scorigami";
        const _16_5_ = document.getElementById("16-5"); _16_5_.className = "Scorigami";
        const _17_5_ = document.getElementById("17-5"); _17_5_.className = "Scorigami";
        const _21_5_ = document.getElementById("21-5"); _21_5_.className = "Scorigami";
        const _29_5_ = document.getElementById("29-5"); _29_5_.className = "Scorigami";
        const _36_5_ = document.getElementById("36-5"); _36_5_.className = "Scorigami";
        const _41_5_ = document.getElementById("41-5"); _41_5_.className = "Scorigami";
        const _52_5_ = document.getElementById("52-5"); _52_5_.className = "Scorigami";
        const _17_6_ = document.getElementById("17-6"); _17_6_.className = "Scorigami";
        const _29_6_ = document.getElementById("29-6"); _29_6_.className = "Scorigami";
        const _35_6_ = document.getElementById("35-6"); _35_6_.className = "Scorigami";
        const _45_6_ = document.getElementById("45-6"); _45_6_.className = "Scorigami";
        const _64_6_ = document.getElementById("64-6"); _64_6_.className = "Scorigami";
        const _14_8_ = document.getElementById("14-8"); _14_8_.className = "Scorigami";
        const _27_8_ = document.getElementById("27-8"); _27_8_.className = "Scorigami";
        const _11_10_ = document.getElementById("11-10"); _11_10_.className = "Scorigami";
        const _16_11_ = document.getElementById("16-11"); _16_11_.className = "Scorigami";
        const _17_11_ = document.getElementById("17-11"); _17_11_.className = "Scorigami";
        const _23_11_ = document.getElementById("23-11"); _23_11_.className = "Scorigami";
        const _17_12_ = document.getElementById("17-12"); _17_12_.className = "Scorigami";
        const _23_17_ = document.getElementById("23-17"); _23_17_.className = "Scorigami";
    }
    if (output.innerHTML > "1898") {
        const _53_2_ = document.getElementById("53-2"); _53_2_.className = "PastScorigami";
        const _5_5_ = document.getElementById("5-5"); _5_5_.className = "PastScorigami";
        const _16_5_ = document.getElementById("16-5"); _16_5_.className = "PastScorigami";
        const _17_5_ = document.getElementById("17-5"); _17_5_.className = "PastScorigami";
        const _21_5_ = document.getElementById("21-5"); _21_5_.className = "PastScorigami";
        const _29_5_ = document.getElementById("29-5"); _29_5_.className = "PastScorigami";
        const _36_5_ = document.getElementById("36-5"); _36_5_.className = "PastScorigami";
        const _41_5_ = document.getElementById("41-5"); _41_5_.className = "PastScorigami";
        const _52_5_ = document.getElementById("52-5"); _52_5_.className = "PastScorigami";
        const _17_6_ = document.getElementById("17-6"); _17_6_.className = "PastScorigami";
        const _29_6_ = document.getElementById("29-6"); _29_6_.className = "PastScorigami";
        const _35_6_ = document.getElementById("35-6"); _35_6_.className = "PastScorigami";
        const _45_6_ = document.getElementById("45-6"); _45_6_.className = "PastScorigami";
        const _64_6_ = document.getElementById("64-6"); _64_6_.className = "PastScorigami";
        const _14_8_ = document.getElementById("14-8"); _14_8_.className = "PastScorigami";
        const _27_8_ = document.getElementById("27-8"); _27_8_.className = "PastScorigami";
        const _11_10_ = document.getElementById("11-10"); _11_10_.className = "PastScorigami";
        const _16_11_ = document.getElementById("16-11"); _16_11_.className = "PastScorigami";
        const _17_11_ = document.getElementById("17-11"); _17_11_.className = "PastScorigami";
        const _23_11_ = document.getElementById("23-11"); _23_11_.className = "PastScorigami";
        const _17_12_ = document.getElementById("17-12"); _17_12_.className = "PastScorigami";
        const _23_17_ = document.getElementById("23-17"); _23_17_.className = "PastScorigami";
    }
    if (output.innerHTML < "1898") {
        const _53_2_ = document.getElementById("53-2"); _53_2_.className = "Blank";
        const _5_5_ = document.getElementById("5-5"); _5_5_.className = "Blank";
        const _16_5_ = document.getElementById("16-5"); _16_5_.className = "Blank";
        const _17_5_ = document.getElementById("17-5"); _17_5_.className = "Blank";
        const _21_5_ = document.getElementById("21-5"); _21_5_.className = "Blank";
        const _29_5_ = document.getElementById("29-5"); _29_5_.className = "Blank";
        const _36_5_ = document.getElementById("36-5"); _36_5_.className = "Blank";
        const _41_5_ = document.getElementById("41-5"); _41_5_.className = "Blank";
        const _52_5_ = document.getElementById("52-5"); _52_5_.className = "Blank";
        const _17_6_ = document.getElementById("17-6"); _17_6_.className = "Blank";
        const _29_6_ = document.getElementById("29-6"); _29_6_.className = "Blank";
        const _35_6_ = document.getElementById("35-6"); _35_6_.className = "Blank";
        const _45_6_ = document.getElementById("45-6"); _45_6_.className = "Blank";
        const _64_6_ = document.getElementById("64-6"); _64_6_.className = "Blank";
        const _14_8_ = document.getElementById("14-8"); _14_8_.className = "Blank";
        const _27_8_ = document.getElementById("27-8"); _27_8_.className = "Blank";
        const _11_10_ = document.getElementById("11-10"); _11_10_.className = "Blank";
        const _16_11_ = document.getElementById("16-11"); _16_11_.className = "Blank";
        const _17_11_ = document.getElementById("17-11"); _17_11_.className = "Blank";
        const _23_11_ = document.getElementById("23-11"); _23_11_.className = "Blank";
        const _17_12_ = document.getElementById("17-12"); _17_12_.className = "Blank";
        const _23_17_ = document.getElementById("23-17"); _23_17_.className = "Blank";
    }

    //1899 Scorigami
    if (output.innerHTML == "1899") {
        const _81_0_ = document.getElementById("81-0"); _81_0_.className = "Scorigami";
        const _22_5_ = document.getElementById("22-5"); _22_5_.className = "Scorigami";
        const _30_5_ = document.getElementById("30-5"); _30_5_.className = "Scorigami";
        const _64_5_ = document.getElementById("64-5"); _64_5_.className = "Scorigami";
        const _33_6_ = document.getElementById("33-6"); _33_6_.className = "Scorigami";
        const _16_7_ = document.getElementById("16-7"); _16_7_.className = "Scorigami";
        const _18_7_ = document.getElementById("18-7"); _18_7_.className = "Scorigami";
        const _47_10_ = document.getElementById("47-10"); _47_10_.className = "Scorigami";
    }
    if (output.innerHTML > "1899") {
        const _81_0_ = document.getElementById("81-0"); _81_0_.className = "PastScorigami";
        const _22_5_ = document.getElementById("22-5"); _22_5_.className = "PastScorigami";
        const _30_5_ = document.getElementById("30-5"); _30_5_.className = "PastScorigami";
        const _64_5_ = document.getElementById("64-5"); _64_5_.className = "PastScorigami";
        const _33_6_ = document.getElementById("33-6"); _33_6_.className = "PastScorigami";
        const _16_7_ = document.getElementById("16-7"); _16_7_.className = "PastScorigami";
        const _18_7_ = document.getElementById("18-7"); _18_7_.className = "PastScorigami";
        const _47_10_ = document.getElementById("47-10"); _47_10_.className = "PastScorigami";
    }
    if (output.innerHTML < "1899") {
        const _81_0_ = document.getElementById("81-0"); _81_0_.className = "Blank";
        const _22_5_ = document.getElementById("22-5"); _22_5_.className = "Blank";
        const _30_5_ = document.getElementById("30-5"); _30_5_.className = "Blank";
        const _64_5_ = document.getElementById("64-5"); _64_5_.className = "Blank";
        const _33_6_ = document.getElementById("33-6"); _33_6_.className = "Blank";
        const _16_7_ = document.getElementById("16-7"); _16_7_.className = "Blank";
        const _18_7_ = document.getElementById("18-7"); _18_7_.className = "Blank";
        const _47_10_ = document.getElementById("47-10"); _47_10_.className = "Blank";
    }

    //1900 Scorigami
    if (output.innerHTML == "1900") {
        const _17_2_ = document.getElementById("17-2"); _17_2_.className = "Scorigami";
        const _34_2_ = document.getElementById("34-2"); _34_2_.className = "Scorigami";
        const _63_2_ = document.getElementById("63-2"); _63_2_.className = "Scorigami";
        const _39_5_ = document.getElementById("39-5"); _39_5_.className = "Scorigami";
        const _46_5_ = document.getElementById("46-5"); _46_5_.className = "Scorigami";
        const _68_5_ = document.getElementById("68-5"); _68_5_.className = "Scorigami";
        const _11_7_ = document.getElementById("11-7"); _11_7_.className = "Scorigami";
    }
    if (output.innerHTML > "1900") {
        const _17_2_ = document.getElementById("17-2"); _17_2_.className = "PastScorigami";
        const _34_2_ = document.getElementById("34-2"); _34_2_.className = "PastScorigami";
        const _63_2_ = document.getElementById("63-2"); _63_2_.className = "PastScorigami";
        const _39_5_ = document.getElementById("39-5"); _39_5_.className = "PastScorigami";
        const _46_5_ = document.getElementById("46-5"); _46_5_.className = "PastScorigami";
        const _68_5_ = document.getElementById("68-5"); _68_5_.className = "PastScorigami";
        const _11_7_ = document.getElementById("11-7"); _11_7_.className = "PastScorigami";
    }
    if (output.innerHTML < "1900") {
        const _17_2_ = document.getElementById("17-2"); _17_2_.className = "Blank";
        const _34_2_ = document.getElementById("34-2"); _34_2_.className = "Blank";
        const _63_2_ = document.getElementById("63-2"); _63_2_.className = "Blank";
        const _39_5_ = document.getElementById("39-5"); _39_5_.className = "Blank";
        const _46_5_ = document.getElementById("46-5"); _46_5_.className = "Blank";
        const _68_5_ = document.getElementById("68-5"); _68_5_.className = "Blank";
        const _11_7_ = document.getElementById("11-7"); _11_7_.className = "Blank";
    }

    //1901 Scorigami
    if (output.innerHTML == "1901") {
        const _89_0_ = document.getElementById("89-0"); _89_0_.className = "Scorigami";
        const _128_0_ = document.getElementById("128-0"); _128_0_.className = "Scorigami";
        const _33_2_ = document.getElementById("33-2"); _33_2_.className = "Scorigami";
        const _14_5_ = document.getElementById("14-5"); _14_5_.className = "Scorigami";
        const _37_5_ = document.getElementById("37-5"); _37_5_.className = "Scorigami";
        const _42_5_ = document.getElementById("42-5"); _42_5_.className = "Scorigami";
        const _19_6_ = document.getElementById("19-6"); _19_6_.className = "Scorigami";
        const _12_7_ = document.getElementById("12-7"); _12_7_.className = "Scorigami";
        const _48_10_ = document.getElementById("48-10"); _48_10_.className = "Scorigami";
        const _15_11_ = document.getElementById("15-11"); _15_11_.className = "Scorigami";
        const _27_12_ = document.getElementById("27-12"); _27_12_.className = "Scorigami";
        const _29_12_ = document.getElementById("29-12"); _29_12_.className = "Scorigami";
        const _40_12_ = document.getElementById("40-12"); _40_12_.className = "Scorigami";
        const _17_17_ = document.getElementById("17-17"); _17_17_.className = "Scorigami";
        const _28_17_ = document.getElementById("28-17"); _28_17_.className = "Scorigami";
    }
    if (output.innerHTML > "1901") {
        const _89_0_ = document.getElementById("89-0"); _89_0_.className = "PastScorigami";
        const _128_0_ = document.getElementById("128-0"); _128_0_.className = "PastScorigami";
        const _33_2_ = document.getElementById("33-2"); _33_2_.className = "PastScorigami";
        const _14_5_ = document.getElementById("14-5"); _14_5_.className = "PastScorigami";
        const _37_5_ = document.getElementById("37-5"); _37_5_.className = "PastScorigami";
        const _42_5_ = document.getElementById("42-5"); _42_5_.className = "PastScorigami";
        const _19_6_ = document.getElementById("19-6"); _19_6_.className = "PastScorigami";
        const _12_7_ = document.getElementById("12-7"); _12_7_.className = "PastScorigami";
        const _48_10_ = document.getElementById("48-10"); _48_10_.className = "PastScorigami";
        const _15_11_ = document.getElementById("15-11"); _15_11_.className = "PastScorigami";
        const _27_12_ = document.getElementById("27-12"); _27_12_.className = "PastScorigami";
        const _29_12_ = document.getElementById("29-12"); _29_12_.className = "PastScorigami";
        const _40_12_ = document.getElementById("40-12"); _40_12_.className = "PastScorigami";
        const _17_17_ = document.getElementById("17-17"); _17_17_.className = "PastScorigami";
        const _28_17_ = document.getElementById("28-17"); _28_17_.className = "PastScorigami";
    }
    if (output.innerHTML < "1901") {
        const _89_0_ = document.getElementById("89-0"); _89_0_.className = "Blank";
        const _128_0_ = document.getElementById("128-0"); _128_0_.className = "Blank";
        const _33_2_ = document.getElementById("33-2"); _33_2_.className = "Blank";
        const _14_5_ = document.getElementById("14-5"); _14_5_.className = "Blank";
        const _37_5_ = document.getElementById("37-5"); _37_5_.className = "Blank";
        const _42_5_ = document.getElementById("42-5"); _42_5_.className = "Blank";
        const _19_6_ = document.getElementById("19-6"); _19_6_.className = "Blank";
        const _12_7_ = document.getElementById("12-7"); _12_7_.className = "Blank";
        const _48_10_ = document.getElementById("48-10"); _48_10_.className = "Blank";
        const _15_11_ = document.getElementById("15-11"); _15_11_.className = "Blank";
        const _27_12_ = document.getElementById("27-12"); _27_12_.className = "Blank";
        const _29_12_ = document.getElementById("29-12"); _29_12_.className = "Blank";
        const _40_12_ = document.getElementById("40-12"); _40_12_.className = "Blank";
        const _17_17_ = document.getElementById("17-17"); _17_17_.className = "Blank";
        const _28_17_ = document.getElementById("28-17"); _28_17_.className = "Blank";
    }

    //1902 Scorigami
    if (output.innerHTML == "1902") {
        const _87_0_ = document.getElementById("87-0"); _87_0_.className = "Scorigami";
        const _88_0_ = document.getElementById("88-0"); _88_0_.className = "Scorigami";
        const _107_0_ = document.getElementById("107-0"); _107_0_.className = "Scorigami";
        const _119_0_ = document.getElementById("119-0"); _119_0_.className = "Scorigami";
        const _15_5_ = document.getElementById("15-5"); _15_5_.className = "Scorigami";
        const _27_5_ = document.getElementById("27-5"); _27_5_.className = "Scorigami";
        const _33_5_ = document.getElementById("33-5"); _33_5_.className = "Scorigami";
        const _38_5_ = document.getElementById("38-5"); _38_5_.className = "Scorigami";
        const _44_5_ = document.getElementById("44-5"); _44_5_.className = "Scorigami";
        const _50_5_ = document.getElementById("50-5"); _50_5_.className = "Scorigami";
        const _62_5_ = document.getElementById("62-5"); _62_5_.className = "Scorigami";
        const _37_6_ = document.getElementById("37-6"); _37_6_.className = "Scorigami";
        const _17_10_ = document.getElementById("17-10"); _17_10_.className = "Scorigami";
        const _45_12_ = document.getElementById("45-12"); _45_12_.className = "Scorigami";
        const _17_15_ = document.getElementById("17-15"); _17_15_.className = "Scorigami";
        const _24_17_ = document.getElementById("24-17"); _24_17_.className = "Scorigami";
        const _26_17_ = document.getElementById("26-17"); _26_17_.className = "Scorigami";
    }
    if (output.innerHTML > "1902") {
        const _87_0_ = document.getElementById("87-0"); _87_0_.className = "PastScorigami";
        const _88_0_ = document.getElementById("88-0"); _88_0_.className = "PastScorigami";
        const _107_0_ = document.getElementById("107-0"); _107_0_.className = "PastScorigami";
        const _119_0_ = document.getElementById("119-0"); _119_0_.className = "PastScorigami";
        const _15_5_ = document.getElementById("15-5"); _15_5_.className = "PastScorigami";
        const _27_5_ = document.getElementById("27-5"); _27_5_.className = "PastScorigami";
        const _33_5_ = document.getElementById("33-5"); _33_5_.className = "PastScorigami";
        const _38_5_ = document.getElementById("38-5"); _38_5_.className = "PastScorigami";
        const _44_5_ = document.getElementById("44-5"); _44_5_.className = "PastScorigami";
        const _50_5_ = document.getElementById("50-5"); _50_5_.className = "PastScorigami";
        const _62_5_ = document.getElementById("62-5"); _62_5_.className = "PastScorigami";
        const _37_6_ = document.getElementById("37-6"); _37_6_.className = "PastScorigami";
        const _17_10_ = document.getElementById("17-10"); _17_10_.className = "PastScorigami";
        const _45_12_ = document.getElementById("45-12"); _45_12_.className = "PastScorigami";
        const _17_15_ = document.getElementById("17-15"); _17_15_.className = "PastScorigami";
        const _24_17_ = document.getElementById("24-17"); _24_17_.className = "PastScorigami";
        const _26_17_ = document.getElementById("26-17"); _26_17_.className = "PastScorigami";
    }
    if (output.innerHTML < "1902") {
        const _87_0_ = document.getElementById("87-0"); _87_0_.className = "Blank";
        const _88_0_ = document.getElementById("88-0"); _88_0_.className = "Blank";
        const _107_0_ = document.getElementById("107-0"); _107_0_.className = "Blank";
        const _119_0_ = document.getElementById("119-0"); _119_0_.className = "Blank";
        const _15_5_ = document.getElementById("15-5"); _15_5_.className = "Blank";
        const _27_5_ = document.getElementById("27-5"); _27_5_.className = "Blank";
        const _33_5_ = document.getElementById("33-5"); _33_5_.className = "Blank";
        const _38_5_ = document.getElementById("38-5"); _38_5_.className = "Blank";
        const _44_5_ = document.getElementById("44-5"); _44_5_.className = "Blank";
        const _50_5_ = document.getElementById("50-5"); _50_5_.className = "Blank";
        const _62_5_ = document.getElementById("62-5"); _62_5_.className = "Blank";
        const _37_6_ = document.getElementById("37-6"); _37_6_.className = "Blank";
        const _17_10_ = document.getElementById("17-10"); _17_10_.className = "Blank";
        const _45_12_ = document.getElementById("45-12"); _45_12_.className = "Blank";
        const _17_15_ = document.getElementById("17-15"); _17_15_.className = "Blank";
        const _24_17_ = document.getElementById("24-17"); _24_17_.className = "Blank";
        const _26_17_ = document.getElementById("26-17"); _26_17_.className = "Blank";
    }

    //1903 Scorigami
    if (output.innerHTML == "1903") {
        const _83_0_ = document.getElementById("83-0"); _83_0_.className = "Scorigami";
        const _108_0_ = document.getElementById("108-0"); _108_0_.className = "Scorigami";
        const _112_0_ = document.getElementById("112-0"); _112_0_.className = "Scorigami";
        const _12_2_ = document.getElementById("12-2"); _12_2_.className = "Scorigami";
        const _18_2_ = document.getElementById("18-2"); _18_2_.className = "Scorigami";
        const _35_2_ = document.getElementById("35-2"); _35_2_.className = "Scorigami";
        const _45_2_ = document.getElementById("45-2"); _45_2_.className = "Scorigami";
        const _45_5_ = document.getElementById("45-5"); _45_5_.className = "Scorigami";
        const _25_6_ = document.getElementById("25-6"); _25_6_.className = "Scorigami";
        const _47_6_ = document.getElementById("47-6"); _47_6_.className = "Scorigami";
        const _40_7_ = document.getElementById("40-7"); _40_7_.className = "Scorigami";
        const _15_10_ = document.getElementById("15-10"); _15_10_.className = "Scorigami";
        const _20_11_ = document.getElementById("20-11"); _20_11_.className = "Scorigami";
        const _48_11_ = document.getElementById("48-11"); _48_11_.className = "Scorigami";
        const _67_11_ = document.getElementById("67-11"); _67_11_.className = "Scorigami";
        const _22_13_ = document.getElementById("22-13"); _22_13_.className = "Scorigami";
    }
    if (output.innerHTML > "1903") {
        const _83_0_ = document.getElementById("83-0"); _83_0_.className = "PastScorigami";
        const _108_0_ = document.getElementById("108-0"); _108_0_.className = "PastScorigami";
        const _112_0_ = document.getElementById("112-0"); _112_0_.className = "PastScorigami";
        const _12_2_ = document.getElementById("12-2"); _12_2_.className = "PastScorigami";
        const _18_2_ = document.getElementById("18-2"); _18_2_.className = "PastScorigami";
        const _35_2_ = document.getElementById("35-2"); _35_2_.className = "PastScorigami";
        const _45_2_ = document.getElementById("45-2"); _45_2_.className = "PastScorigami";
        const _45_5_ = document.getElementById("45-5"); _45_5_.className = "PastScorigami";
        const _25_6_ = document.getElementById("25-6"); _25_6_.className = "PastScorigami";
        const _47_6_ = document.getElementById("47-6"); _47_6_.className = "PastScorigami";
        const _40_7_ = document.getElementById("40-7"); _40_7_.className = "PastScorigami";
        const _15_10_ = document.getElementById("15-10"); _15_10_.className = "PastScorigami";
        const _20_11_ = document.getElementById("20-11"); _20_11_.className = "PastScorigami";
        const _48_11_ = document.getElementById("48-11"); _48_11_.className = "PastScorigami";
        const _67_11_ = document.getElementById("67-11"); _67_11_.className = "PastScorigami";
        const _22_13_ = document.getElementById("22-13"); _22_13_.className = "PastScorigami";
    }
    if (output.innerHTML < "1903") {
        const _83_0_ = document.getElementById("83-0"); _83_0_.className = "Blank";
        const _108_0_ = document.getElementById("108-0"); _108_0_.className = "Blank";
        const _112_0_ = document.getElementById("112-0"); _112_0_.className = "Blank";
        const _12_2_ = document.getElementById("12-2"); _12_2_.className = "Blank";
        const _18_2_ = document.getElementById("18-2"); _18_2_.className = "Blank";
        const _35_2_ = document.getElementById("35-2"); _35_2_.className = "Blank";
        const _45_2_ = document.getElementById("45-2"); _45_2_.className = "Blank";
        const _45_5_ = document.getElementById("45-5"); _45_5_.className = "Blank";
        const _25_6_ = document.getElementById("25-6"); _25_6_.className = "Blank";
        const _47_6_ = document.getElementById("47-6"); _47_6_.className = "Blank";
        const _40_7_ = document.getElementById("40-7"); _40_7_.className = "Blank";
        const _15_10_ = document.getElementById("15-10"); _15_10_.className = "Blank";
        const _20_11_ = document.getElementById("20-11"); _20_11_.className = "Blank";
        const _48_11_ = document.getElementById("48-11"); _48_11_.className = "Blank";
        const _67_11_ = document.getElementById("67-11"); _67_11_.className = "Blank";
        const _22_13_ = document.getElementById("22-13"); _22_13_.className = "Blank";
    }

    //1904 Scorigami
    if (output.innerHTML == "1904") {
        const _97_0_ = document.getElementById("97-0"); _97_0_.className = "Scorigami";
        const _114_0_ = document.getElementById("114-0"); _114_0_.className = "Scorigami";
        const _146_0_ = document.getElementById("146-0"); _146_0_.className = "Scorigami";
        const _15_4_ = document.getElementById("15-4"); _15_4_.className = "Scorigami";
        const _17_4_ = document.getElementById("17-4"); _17_4_.className = "Scorigami";
        const _30_4_ = document.getElementById("30-4"); _30_4_.className = "Scorigami";
        const _32_5_ = document.getElementById("32-5"); _32_5_.className = "Scorigami";
        const _13_6_ = document.getElementById("13-6"); _13_6_.className = "Scorigami";
        const _17_9_ = document.getElementById("17-9"); _17_9_.className = "Scorigami";
        const _23_10_ = document.getElementById("23-10"); _23_10_.className = "Scorigami";
        const _40_10_ = document.getElementById("40-10"); _40_10_.className = "Scorigami";
        const _28_11_ = document.getElementById("28-11"); _28_11_.className = "Scorigami";
        const _72_11_ = document.getElementById("72-11"); _72_11_.className = "Scorigami";
    }
    if (output.innerHTML > "1904") {
        const _97_0_ = document.getElementById("97-0"); _97_0_.className = "PastScorigami";
        const _114_0_ = document.getElementById("114-0"); _114_0_.className = "PastScorigami";
        const _146_0_ = document.getElementById("146-0"); _146_0_.className = "PastScorigami";
        const _15_4_ = document.getElementById("15-4"); _15_4_.className = "PastScorigami";
        const _17_4_ = document.getElementById("17-4"); _17_4_.className = "PastScorigami";
        const _30_4_ = document.getElementById("30-4"); _30_4_.className = "PastScorigami";
        const _32_5_ = document.getElementById("32-5"); _32_5_.className = "PastScorigami";
        const _13_6_ = document.getElementById("13-6"); _13_6_.className = "PastScorigami";
        const _17_9_ = document.getElementById("17-9"); _17_9_.className = "PastScorigami";
        const _23_10_ = document.getElementById("23-10"); _23_10_.className = "PastScorigami";
        const _40_10_ = document.getElementById("40-10"); _40_10_.className = "PastScorigami";
        const _28_11_ = document.getElementById("28-11"); _28_11_.className = "PastScorigami";
        const _72_11_ = document.getElementById("72-11"); _72_11_.className = "PastScorigami";
    }
    if (output.innerHTML < "1904") {
        const _97_0_ = document.getElementById("97-0"); _97_0_.className = "Blank";
        const _114_0_ = document.getElementById("114-0"); _114_0_.className = "Blank";
        const _146_0_ = document.getElementById("146-0"); _146_0_.className = "Blank";
        const _15_4_ = document.getElementById("15-4"); _15_4_.className = "Blank";
        const _17_4_ = document.getElementById("17-4"); _17_4_.className = "Blank";
        const _30_4_ = document.getElementById("30-4"); _30_4_.className = "Blank";
        const _32_5_ = document.getElementById("32-5"); _32_5_.className = "Blank";
        const _13_6_ = document.getElementById("13-6"); _13_6_.className = "Blank";
        const _17_9_ = document.getElementById("17-9"); _17_9_.className = "Blank";
        const _23_10_ = document.getElementById("23-10"); _23_10_.className = "Blank";
        const _40_10_ = document.getElementById("40-10"); _40_10_.className = "Blank";
        const _28_11_ = document.getElementById("28-11"); _28_11_.className = "Blank";
        const _72_11_ = document.getElementById("72-11"); _72_11_.className = "Blank";
    }

    //1905 Scorigami
    if (output.innerHTML == "1905") {
        const _109_0_ = document.getElementById("109-0"); _109_0_.className = "Scorigami";
        const _129_0_ = document.getElementById("129-0"); _129_0_.className = "Scorigami";
        const _142_0_ = document.getElementById("142-0"); _142_0_.className = "Scorigami";
        const _23_3_ = document.getElementById("23-3"); _23_3_.className = "Scorigami";
        const _11_4_ = document.getElementById("11-4"); _11_4_.className = "Scorigami";
        const _64_4_ = document.getElementById("64-4"); _64_4_.className = "Scorigami";
        const _68_4_ = document.getElementById("68-4"); _68_4_.className = "Scorigami";
        const _31_5_ = document.getElementById("31-5"); _31_5_.className = "Scorigami";
        const _9_6_ = document.getElementById("9-6"); _9_6_.className = "Scorigami";
        const _50_6_ = document.getElementById("50-6"); _50_6_.className = "Scorigami";
        const _39_10_ = document.getElementById("39-10"); _39_10_.className = "Scorigami";
        const _19_11_ = document.getElementById("19-11"); _19_11_.className = "Scorigami";
        const _24_11_ = document.getElementById("24-11"); _24_11_.className = "Scorigami";
        const _37_11_ = document.getElementById("37-11"); _37_11_.className = "Scorigami";
        const _53_12_ = document.getElementById("53-12"); _53_12_.className = "Scorigami";
        const _32_15_ = document.getElementById("32-15"); _32_15_.className = "Scorigami";
    }
    if (output.innerHTML > "1905") {
        const _109_0_ = document.getElementById("109-0"); _109_0_.className = "PastScorigami";
        const _129_0_ = document.getElementById("129-0"); _129_0_.className = "PastScorigami";
        const _142_0_ = document.getElementById("142-0"); _142_0_.className = "PastScorigami";
        const _23_3_ = document.getElementById("23-3"); _23_3_.className = "PastScorigami";
        const _11_4_ = document.getElementById("11-4"); _11_4_.className = "PastScorigami";
        const _64_4_ = document.getElementById("64-4"); _64_4_.className = "PastScorigami";
        const _68_4_ = document.getElementById("68-4"); _68_4_.className = "PastScorigami";
        const _31_5_ = document.getElementById("31-5"); _31_5_.className = "PastScorigami";
        const _9_6_ = document.getElementById("9-6"); _9_6_.className = "PastScorigami";
        const _50_6_ = document.getElementById("50-6"); _50_6_.className = "PastScorigami";
        const _39_10_ = document.getElementById("39-10"); _39_10_.className = "PastScorigami";
        const _19_11_ = document.getElementById("19-11"); _19_11_.className = "PastScorigami";
        const _24_11_ = document.getElementById("24-11"); _24_11_.className = "PastScorigami";
        const _37_11_ = document.getElementById("37-11"); _37_11_.className = "PastScorigami";
        const _53_12_ = document.getElementById("53-12"); _53_12_.className = "PastScorigami";
        const _32_15_ = document.getElementById("32-15"); _32_15_.className = "PastScorigami";
    }
    if (output.innerHTML < "1905") {
        const _109_0_ = document.getElementById("109-0"); _109_0_.className = "Blank";
        const _129_0_ = document.getElementById("129-0"); _129_0_.className = "Blank";
        const _142_0_ = document.getElementById("142-0"); _142_0_.className = "Blank";
        const _23_3_ = document.getElementById("23-3"); _23_3_.className = "Blank";
        const _11_4_ = document.getElementById("11-4"); _11_4_.className = "Blank";
        const _64_4_ = document.getElementById("64-4"); _64_4_.className = "Blank";
        const _68_4_ = document.getElementById("68-4"); _68_4_.className = "Blank";
        const _31_5_ = document.getElementById("31-5"); _31_5_.className = "Blank";
        const _9_6_ = document.getElementById("9-6"); _9_6_.className = "Blank";
        const _50_6_ = document.getElementById("50-6"); _50_6_.className = "Blank";
        const _39_10_ = document.getElementById("39-10"); _39_10_.className = "Blank";
        const _19_11_ = document.getElementById("19-11"); _19_11_.className = "Blank";
        const _24_11_ = document.getElementById("24-11"); _24_11_.className = "Blank";
        const _37_11_ = document.getElementById("37-11"); _37_11_.className = "Blank";
        const _53_12_ = document.getElementById("53-12"); _53_12_.className = "Blank";
        const _32_15_ = document.getElementById("32-15"); _32_15_.className = "Blank";
    }

    //1906 Scorigami
    if (output.innerHTML == "1906") {
        const _14_2_ = document.getElementById("14-2"); _14_2_.className = "Scorigami";
        const _41_2_ = document.getElementById("41-2"); _41_2_.className = "Scorigami";
        const _9_4_ = document.getElementById("9-4"); _9_4_.className = "Scorigami";
        const _19_4_ = document.getElementById("19-4"); _19_4_.className = "Scorigami";
        const _21_4_ = document.getElementById("21-4"); _21_4_.className = "Scorigami";
        const _9_5_ = document.getElementById("9-5"); _9_5_.className = "Scorigami";
        const _25_5_ = document.getElementById("25-5"); _25_5_.className = "Scorigami";
        const _8_8_ = document.getElementById("8-8"); _8_8_.className = "Scorigami";
        const _33_8_ = document.getElementById("33-8"); _33_8_.className = "Scorigami";
        const _22_9_ = document.getElementById("22-9"); _22_9_.className = "Scorigami";
        const _28_9_ = document.getElementById("28-9"); _28_9_.className = "Scorigami";
        const _32_9_ = document.getElementById("32-9"); _32_9_.className = "Scorigami";
        const _27_11_ = document.getElementById("27-11"); _27_11_.className = "Scorigami";
        const _15_12_ = document.getElementById("15-12"); _15_12_.className = "Scorigami";
        const _35_16_ = document.getElementById("35-16"); _35_16_.className = "Scorigami";
        const _18_17_ = document.getElementById("18-17"); _18_17_.className = "Scorigami";
    }
    if (output.innerHTML > "1906") {
        const _14_2_ = document.getElementById("14-2"); _14_2_.className = "PastScorigami";
        const _41_2_ = document.getElementById("41-2"); _41_2_.className = "PastScorigami";
        const _9_4_ = document.getElementById("9-4"); _9_4_.className = "PastScorigami";
        const _19_4_ = document.getElementById("19-4"); _19_4_.className = "PastScorigami";
        const _21_4_ = document.getElementById("21-4"); _21_4_.className = "PastScorigami";
        const _9_5_ = document.getElementById("9-5"); _9_5_.className = "PastScorigami";
        const _25_5_ = document.getElementById("25-5"); _25_5_.className = "PastScorigami";
        const _8_8_ = document.getElementById("8-8"); _8_8_.className = "PastScorigami";
        const _33_8_ = document.getElementById("33-8"); _33_8_.className = "PastScorigami";
        const _22_9_ = document.getElementById("22-9"); _22_9_.className = "PastScorigami";
        const _28_9_ = document.getElementById("28-9"); _28_9_.className = "PastScorigami";
        const _32_9_ = document.getElementById("32-9"); _32_9_.className = "PastScorigami";
        const _27_11_ = document.getElementById("27-11"); _27_11_.className = "PastScorigami";
        const _15_12_ = document.getElementById("15-12"); _15_12_.className = "PastScorigami";
        const _35_16_ = document.getElementById("35-16"); _35_16_.className = "PastScorigami";
        const _18_17_ = document.getElementById("18-17"); _18_17_.className = "PastScorigami";
    }
    if (output.innerHTML < "1906") {
        const _14_2_ = document.getElementById("14-2"); _14_2_.className = "Blank";
        const _41_2_ = document.getElementById("41-2"); _41_2_.className = "Blank";
        const _9_4_ = document.getElementById("9-4"); _9_4_.className = "Blank";
        const _19_4_ = document.getElementById("19-4"); _19_4_.className = "Blank";
        const _21_4_ = document.getElementById("21-4"); _21_4_.className = "Blank";
        const _9_5_ = document.getElementById("9-5"); _9_5_.className = "Blank";
        const _25_5_ = document.getElementById("25-5"); _25_5_.className = "Blank";
        const _8_8_ = document.getElementById("8-8"); _8_8_.className = "Blank";
        const _33_8_ = document.getElementById("33-8"); _33_8_.className = "Blank";
        const _22_9_ = document.getElementById("22-9"); _22_9_.className = "Blank";
        const _28_9_ = document.getElementById("28-9"); _28_9_.className = "Blank";
        const _32_9_ = document.getElementById("32-9"); _32_9_.className = "Blank";
        const _27_11_ = document.getElementById("27-11"); _27_11_.className = "Blank";
        const _15_12_ = document.getElementById("15-12"); _15_12_.className = "Blank";
        const _35_16_ = document.getElementById("35-16"); _35_16_.className = "Blank";
        const _18_17_ = document.getElementById("18-17"); _18_17_.className = "Blank";
    }

    //1907 Scorigami
    if (output.innerHTML == "1907") {
        const _9_2_ = document.getElementById("9-2"); _9_2_.className = "Scorigami";
        const _29_2_ = document.getElementById("29-2"); _29_2_.className = "Scorigami";
        const _25_4_ = document.getElementById("25-4"); _25_4_.className = "Scorigami";
        const _54_4_ = document.getElementById("54-4"); _54_4_.className = "Scorigami";
        const _13_5_ = document.getElementById("13-5"); _13_5_.className = "Scorigami";
        const _70_6_ = document.getElementById("70-6"); _70_6_.className = "Scorigami";
        const _21_7_ = document.getElementById("21-7"); _21_7_.className = "Scorigami";
        const _13_8_ = document.getElementById("13-8"); _13_8_.className = "Scorigami";
        const _21_9_ = document.getElementById("21-9"); _21_9_.className = "Scorigami";
        const _25_9_ = document.getElementById("25-9"); _25_9_.className = "Scorigami";
        const _29_10_ = document.getElementById("29-10"); _29_10_.className = "Scorigami";
        const _45_10_ = document.getElementById("45-10"); _45_10_.className = "Scorigami";
        const _65_10_ = document.getElementById("65-10"); _65_10_.className = "Scorigami";
        const _13_11_ = document.getElementById("13-11"); _13_11_.className = "Scorigami";
        const _21_11_ = document.getElementById("21-11"); _21_11_.className = "Scorigami";
        const _25_12_ = document.getElementById("25-12"); _25_12_.className = "Scorigami";
        const _17_13_ = document.getElementById("17-13"); _17_13_.className = "Scorigami";
        const _23_15_ = document.getElementById("23-15"); _23_15_.className = "Scorigami";
    }
    if (output.innerHTML > "1907") {
        const _9_2_ = document.getElementById("9-2"); _9_2_.className = "PastScorigami";
        const _29_2_ = document.getElementById("29-2"); _29_2_.className = "PastScorigami";
        const _25_4_ = document.getElementById("25-4"); _25_4_.className = "PastScorigami";
        const _54_4_ = document.getElementById("54-4"); _54_4_.className = "PastScorigami";
        const _13_5_ = document.getElementById("13-5"); _13_5_.className = "PastScorigami";
        const _70_6_ = document.getElementById("70-6"); _70_6_.className = "PastScorigami";
        const _21_7_ = document.getElementById("21-7"); _21_7_.className = "PastScorigami";
        const _13_8_ = document.getElementById("13-8"); _13_8_.className = "PastScorigami";
        const _21_9_ = document.getElementById("21-9"); _21_9_.className = "PastScorigami";
        const _25_9_ = document.getElementById("25-9"); _25_9_.className = "PastScorigami";
        const _29_10_ = document.getElementById("29-10"); _29_10_.className = "PastScorigami";
        const _45_10_ = document.getElementById("45-10"); _45_10_.className = "PastScorigami";
        const _65_10_ = document.getElementById("65-10"); _65_10_.className = "PastScorigami";
        const _13_11_ = document.getElementById("13-11"); _13_11_.className = "PastScorigami";
        const _21_11_ = document.getElementById("21-11"); _21_11_.className = "PastScorigami";
        const _25_12_ = document.getElementById("25-12"); _25_12_.className = "PastScorigami";
        const _17_13_ = document.getElementById("17-13"); _17_13_.className = "PastScorigami";
        const _23_15_ = document.getElementById("23-15"); _23_15_.className = "PastScorigami";
    }
    if (output.innerHTML < "1907") {
        const _9_2_ = document.getElementById("9-2"); _9_2_.className = "Blank";
        const _29_2_ = document.getElementById("29-2"); _29_2_.className = "Blank";
        const _25_4_ = document.getElementById("25-4"); _25_4_.className = "Blank";
        const _54_4_ = document.getElementById("54-4"); _54_4_.className = "Blank";
        const _13_5_ = document.getElementById("13-5"); _13_5_.className = "Blank";
        const _70_6_ = document.getElementById("70-6"); _70_6_.className = "Blank";
        const _21_7_ = document.getElementById("21-7"); _21_7_.className = "Blank";
        const _13_8_ = document.getElementById("13-8"); _13_8_.className = "Blank";
        const _21_9_ = document.getElementById("21-9"); _21_9_.className = "Blank";
        const _25_9_ = document.getElementById("25-9"); _25_9_.className = "Blank";
        const _29_10_ = document.getElementById("29-10"); _29_10_.className = "Blank";
        const _45_10_ = document.getElementById("45-10"); _45_10_.className = "Blank";
        const _65_10_ = document.getElementById("65-10"); _65_10_.className = "Blank";
        const _13_11_ = document.getElementById("13-11"); _13_11_.className = "Blank";
        const _21_11_ = document.getElementById("21-11"); _21_11_.className = "Blank";
        const _25_12_ = document.getElementById("25-12"); _25_12_.className = "Blank";
        const _17_13_ = document.getElementById("17-13"); _17_13_.className = "Blank";
        const _23_15_ = document.getElementById("23-15"); _23_15_.className = "Blank";
    }

    //1908 Scorigami
    if (output.innerHTML == "1908") {
        const _81_5_ = document.getElementById("81-5"); _81_5_.className = "Scorigami";
        const _57_6_ = document.getElementById("57-6"); _57_6_.className = "Scorigami";
        const _9_8_ = document.getElementById("9-8"); _9_8_.className = "Scorigami";
        const _64_8_ = document.getElementById("64-8"); _64_8_.className = "Scorigami";
        const _11_9_ = document.getElementById("11-9"); _11_9_.className = "Scorigami";
        const _16_9_ = document.getElementById("16-9"); _16_9_.className = "Scorigami";
        const _18_9_ = document.getElementById("18-9"); _18_9_.className = "Scorigami";
        const _25_10_ = document.getElementById("25-10"); _25_10_.className = "Scorigami";
        const _23_12_ = document.getElementById("23-12"); _23_12_.className = "Scorigami";
        const _42_12_ = document.getElementById("42-12"); _42_12_.className = "Scorigami";
        const _21_14_ = document.getElementById("21-14"); _21_14_.className = "Scorigami";
        const _28_15_ = document.getElementById("28-15"); _28_15_.className = "Scorigami";
    }
    if (output.innerHTML > "1908") {
        const _81_5_ = document.getElementById("81-5"); _81_5_.className = "PastScorigami";
        const _57_6_ = document.getElementById("57-6"); _57_6_.className = "PastScorigami";
        const _9_8_ = document.getElementById("9-8"); _9_8_.className = "PastScorigami";
        const _64_8_ = document.getElementById("64-8"); _64_8_.className = "PastScorigami";
        const _11_9_ = document.getElementById("11-9"); _11_9_.className = "PastScorigami";
        const _16_9_ = document.getElementById("16-9"); _16_9_.className = "PastScorigami";
        const _18_9_ = document.getElementById("18-9"); _18_9_.className = "PastScorigami";
        const _25_10_ = document.getElementById("25-10"); _25_10_.className = "PastScorigami";
        const _23_12_ = document.getElementById("23-12"); _23_12_.className = "PastScorigami";
        const _42_12_ = document.getElementById("42-12"); _42_12_.className = "PastScorigami";
        const _21_14_ = document.getElementById("21-14"); _21_14_.className = "PastScorigami";
        const _28_15_ = document.getElementById("28-15"); _28_15_.className = "PastScorigami";
    }
    if (output.innerHTML < "1908") {
        const _81_5_ = document.getElementById("81-5"); _81_5_.className = "Blank";
        const _57_6_ = document.getElementById("57-6"); _57_6_.className = "Blank";
        const _9_8_ = document.getElementById("9-8"); _9_8_.className = "Blank";
        const _64_8_ = document.getElementById("64-8"); _64_8_.className = "Blank";
        const _11_9_ = document.getElementById("11-9"); _11_9_.className = "Blank";
        const _16_9_ = document.getElementById("16-9"); _16_9_.className = "Blank";
        const _18_9_ = document.getElementById("18-9"); _18_9_.className = "Blank";
        const _25_10_ = document.getElementById("25-10"); _25_10_.className = "Blank";
        const _23_12_ = document.getElementById("23-12"); _23_12_.className = "Blank";
        const _42_12_ = document.getElementById("42-12"); _42_12_.className = "Blank";
        const _21_14_ = document.getElementById("21-14"); _21_14_.className = "Blank";
        const _28_15_ = document.getElementById("28-15"); _28_15_.className = "Blank";
    }

    //1909 Scorigami
    if (output.innerHTML == "1909") {
        const _99_0_ = document.getElementById("99-0"); _99_0_.className = "Scorigami";
        const _9_3_ = document.getElementById("9-3"); _9_3_.className = "Scorigami";
        const _11_3_ = document.getElementById("11-3"); _11_3_.className = "Scorigami";
        const _12_3_ = document.getElementById("12-3"); _12_3_.className = "Scorigami";
        const _14_3_ = document.getElementById("14-3"); _14_3_.className = "Scorigami";
        const _16_3_ = document.getElementById("16-3"); _16_3_.className = "Scorigami";
        const _17_3_ = document.getElementById("17-3"); _17_3_.className = "Scorigami";
        const _18_3_ = document.getElementById("18-3"); _18_3_.className = "Scorigami";
        const _21_3_ = document.getElementById("21-3"); _21_3_.className = "Scorigami";
        const _26_3_ = document.getElementById("26-3"); _26_3_.className = "Scorigami";
        const _28_3_ = document.getElementById("28-3"); _28_3_.className = "Scorigami";
        const _29_3_ = document.getElementById("29-3"); _29_3_.className = "Scorigami";
        const _32_3_ = document.getElementById("32-3"); _32_3_.className = "Scorigami";
        const _36_3_ = document.getElementById("36-3"); _36_3_.className = "Scorigami";
        const _20_7_ = document.getElementById("20-7"); _20_7_.className = "Scorigami";
        const _42_8_ = document.getElementById("42-8"); _42_8_.className = "Scorigami";
        const _13_12_ = document.getElementById("13-12"); _13_12_.className = "Scorigami";
        const _47_12_ = document.getElementById("47-12"); _47_12_.className = "Scorigami";
    }
    if (output.innerHTML > "1909") {
        const _99_0_ = document.getElementById("99-0"); _99_0_.className = "PastScorigami";
        const _9_3_ = document.getElementById("9-3"); _9_3_.className = "PastScorigami";
        const _11_3_ = document.getElementById("11-3"); _11_3_.className = "PastScorigami";
        const _12_3_ = document.getElementById("12-3"); _12_3_.className = "PastScorigami";
        const _14_3_ = document.getElementById("14-3"); _14_3_.className = "PastScorigami";
        const _16_3_ = document.getElementById("16-3"); _16_3_.className = "PastScorigami";
        const _17_3_ = document.getElementById("17-3"); _17_3_.className = "PastScorigami";
        const _18_3_ = document.getElementById("18-3"); _18_3_.className = "PastScorigami";
        const _21_3_ = document.getElementById("21-3"); _21_3_.className = "PastScorigami";
        const _26_3_ = document.getElementById("26-3"); _26_3_.className = "PastScorigami";
        const _28_3_ = document.getElementById("28-3"); _28_3_.className = "PastScorigami";
        const _29_3_ = document.getElementById("29-3"); _29_3_.className = "PastScorigami";
        const _32_3_ = document.getElementById("32-3"); _32_3_.className = "PastScorigami";
        const _36_3_ = document.getElementById("36-3"); _36_3_.className = "PastScorigami";
        const _20_7_ = document.getElementById("20-7"); _20_7_.className = "PastScorigami";
        const _42_8_ = document.getElementById("42-8"); _42_8_.className = "PastScorigami";
        const _13_12_ = document.getElementById("13-12"); _13_12_.className = "PastScorigami";
        const _47_12_ = document.getElementById("47-12"); _47_12_.className = "PastScorigami";
    }
    if (output.innerHTML < "1909") {
        const _99_0_ = document.getElementById("99-0"); _99_0_.className = "Blank";
        const _9_3_ = document.getElementById("9-3"); _9_3_.className = "Blank";
        const _11_3_ = document.getElementById("11-3"); _11_3_.className = "Blank";
        const _12_3_ = document.getElementById("12-3"); _12_3_.className = "Blank";
        const _14_3_ = document.getElementById("14-3"); _14_3_.className = "Blank";
        const _16_3_ = document.getElementById("16-3"); _16_3_.className = "Blank";
        const _17_3_ = document.getElementById("17-3"); _17_3_.className = "Blank";
        const _18_3_ = document.getElementById("18-3"); _18_3_.className = "Blank";
        const _21_3_ = document.getElementById("21-3"); _21_3_.className = "Blank";
        const _26_3_ = document.getElementById("26-3"); _26_3_.className = "Blank";
        const _28_3_ = document.getElementById("28-3"); _28_3_.className = "Blank";
        const _29_3_ = document.getElementById("29-3"); _29_3_.className = "Blank";
        const _32_3_ = document.getElementById("32-3"); _32_3_.className = "Blank";
        const _36_3_ = document.getElementById("36-3"); _36_3_.className = "Blank";
        const _20_7_ = document.getElementById("20-7"); _20_7_.className = "Blank";
        const _42_8_ = document.getElementById("42-8"); _42_8_.className = "Blank";
        const _13_12_ = document.getElementById("13-12"); _13_12_.className = "Blank";
        const _47_12_ = document.getElementById("47-12"); _47_12_.className = "Blank";
    }

    //1910 Scorigami
    if (output.innerHTML == "1910") {
        const _101_0_ = document.getElementById("101-0"); _101_0_.className = "Scorigami";
        const _7_3_ = document.getElementById("7-3"); _7_3_.className = "Scorigami";
        const _10_3_ = document.getElementById("10-3"); _10_3_.className = "Scorigami";
        const _25_3_ = document.getElementById("25-3"); _25_3_.className = "Scorigami";
        const _27_3_ = document.getElementById("27-3"); _27_3_.className = "Scorigami";
        const _45_3_ = document.getElementById("45-3"); _45_3_.className = "Scorigami";
        const _46_3_ = document.getElementById("46-3"); _46_3_.className = "Scorigami";
        const _47_3_ = document.getElementById("47-3"); _47_3_.className = "Scorigami";
        const _52_3_ = document.getElementById("52-3"); _52_3_.className = "Scorigami";
        const _63_3_ = document.getElementById("63-3"); _63_3_.className = "Scorigami";
        const _15_8_ = document.getElementById("15-8"); _15_8_.className = "Scorigami";
        const _13_9_ = document.getElementById("13-9"); _13_9_.className = "Scorigami";
        const _27_9_ = document.getElementById("27-9"); _27_9_.className = "Scorigami";
        const _61_12_ = document.getElementById("61-12"); _61_12_.className = "Scorigami";
        const _21_17_ = document.getElementById("21-17"); _21_17_.className = "Scorigami";
    }
    if (output.innerHTML > "1910") {
        const _101_0_ = document.getElementById("101-0"); _101_0_.className = "PastScorigami";
        const _7_3_ = document.getElementById("7-3"); _7_3_.className = "PastScorigami";
        const _10_3_ = document.getElementById("10-3"); _10_3_.className = "PastScorigami";
        const _25_3_ = document.getElementById("25-3"); _25_3_.className = "PastScorigami";
        const _27_3_ = document.getElementById("27-3"); _27_3_.className = "PastScorigami";
        const _45_3_ = document.getElementById("45-3"); _45_3_.className = "PastScorigami";
        const _46_3_ = document.getElementById("46-3"); _46_3_.className = "PastScorigami";
        const _47_3_ = document.getElementById("47-3"); _47_3_.className = "PastScorigami";
        const _52_3_ = document.getElementById("52-3"); _52_3_.className = "PastScorigami";
        const _63_3_ = document.getElementById("63-3"); _63_3_.className = "PastScorigami";
        const _15_8_ = document.getElementById("15-8"); _15_8_.className = "PastScorigami";
        const _13_9_ = document.getElementById("13-9"); _13_9_.className = "PastScorigami";
        const _27_9_ = document.getElementById("27-9"); _27_9_.className = "PastScorigami";
        const _61_12_ = document.getElementById("61-12"); _61_12_.className = "PastScorigami";
        const _21_17_ = document.getElementById("21-17"); _21_17_.className = "PastScorigami";
    }
    if (output.innerHTML < "1910") {
        const _101_0_ = document.getElementById("101-0"); _101_0_.className = "Blank";
        const _7_3_ = document.getElementById("7-3"); _7_3_.className = "Blank";
        const _10_3_ = document.getElementById("10-3"); _10_3_.className = "Blank";
        const _25_3_ = document.getElementById("25-3"); _25_3_.className = "Blank";
        const _27_3_ = document.getElementById("27-3"); _27_3_.className = "Blank";
        const _45_3_ = document.getElementById("45-3"); _45_3_.className = "Blank";
        const _46_3_ = document.getElementById("46-3"); _46_3_.className = "Blank";
        const _47_3_ = document.getElementById("47-3"); _47_3_.className = "Blank";
        const _52_3_ = document.getElementById("52-3"); _52_3_.className = "Blank";
        const _63_3_ = document.getElementById("63-3"); _63_3_.className = "Blank";
        const _15_8_ = document.getElementById("15-8"); _15_8_.className = "Blank";
        const _13_9_ = document.getElementById("13-9"); _13_9_.className = "Blank";
        const _27_9_ = document.getElementById("27-9"); _27_9_.className = "Blank";
        const _61_12_ = document.getElementById("61-12"); _61_12_.className = "Blank";
        const _21_17_ = document.getElementById("21-17"); _21_17_.className = "Blank";
    }

    //1911 Scorigami
    if (output.innerHTML == "1911") {
        const _117_0_ = document.getElementById("117-0"); _117_0_.className = "Scorigami";
        const _20_2_ = document.getElementById("20-2"); _20_2_.className = "Scorigami";
        const _15_3_ = document.getElementById("15-3"); _15_3_.className = "Scorigami";
        const _20_3_ = document.getElementById("20-3"); _20_3_.className = "Scorigami";
        const _34_3_ = document.getElementById("34-3"); _34_3_.className = "Scorigami";
        const _44_3_ = document.getElementById("44-3"); _44_3_.className = "Scorigami";
        const _47_5_ = document.getElementById("47-5"); _47_5_.className = "Scorigami";
        const _65_5_ = document.getElementById("65-5"); _65_5_.className = "Scorigami";
        const _65_6_ = document.getElementById("65-6"); _65_6_.className = "Scorigami";
        const _29_9_ = document.getElementById("29-9"); _29_9_.className = "Scorigami";
        const _22_11_ = document.getElementById("22-11"); _22_11_.className = "Scorigami";
        const _36_11_ = document.getElementById("36-11"); _36_11_.className = "Scorigami";
        const _27_13_ = document.getElementById("27-13"); _27_13_.className = "Scorigami";
        const _15_14_ = document.getElementById("15-14"); _15_14_.className = "Scorigami";
    }
    if (output.innerHTML > "1911") {
        const _117_0_ = document.getElementById("117-0"); _117_0_.className = "PastScorigami";
        const _20_2_ = document.getElementById("20-2"); _20_2_.className = "PastScorigami";
        const _15_3_ = document.getElementById("15-3"); _15_3_.className = "PastScorigami";
        const _20_3_ = document.getElementById("20-3"); _20_3_.className = "PastScorigami";
        const _34_3_ = document.getElementById("34-3"); _34_3_.className = "PastScorigami";
        const _44_3_ = document.getElementById("44-3"); _44_3_.className = "PastScorigami";
        const _47_5_ = document.getElementById("47-5"); _47_5_.className = "PastScorigami";
        const _65_5_ = document.getElementById("65-5"); _65_5_.className = "PastScorigami";
        const _65_6_ = document.getElementById("65-6"); _65_6_.className = "PastScorigami";
        const _29_9_ = document.getElementById("29-9"); _29_9_.className = "PastScorigami";
        const _22_11_ = document.getElementById("22-11"); _22_11_.className = "PastScorigami";
        const _36_11_ = document.getElementById("36-11"); _36_11_.className = "PastScorigami";
        const _27_13_ = document.getElementById("27-13"); _27_13_.className = "PastScorigami";
        const _15_14_ = document.getElementById("15-14"); _15_14_.className = "PastScorigami";
    }
    if (output.innerHTML < "1911") {
        const _117_0_ = document.getElementById("117-0"); _117_0_.className = "Blank";
        const _20_2_ = document.getElementById("20-2"); _20_2_.className = "Blank";
        const _15_3_ = document.getElementById("15-3"); _15_3_.className = "Blank";
        const _20_3_ = document.getElementById("20-3"); _20_3_.className = "Blank";
        const _34_3_ = document.getElementById("34-3"); _34_3_.className = "Blank";
        const _44_3_ = document.getElementById("44-3"); _44_3_.className = "Blank";
        const _47_5_ = document.getElementById("47-5"); _47_5_.className = "Blank";
        const _65_5_ = document.getElementById("65-5"); _65_5_.className = "Blank";
        const _65_6_ = document.getElementById("65-6"); _65_6_.className = "Blank";
        const _29_9_ = document.getElementById("29-9"); _29_9_.className = "Blank";
        const _22_11_ = document.getElementById("22-11"); _22_11_.className = "Blank";
        const _36_11_ = document.getElementById("36-11"); _36_11_.className = "Blank";
        const _27_13_ = document.getElementById("27-13"); _27_13_.className = "Blank";
        const _15_14_ = document.getElementById("15-14"); _15_14_.className = "Blank";
    }

    //1912 Scorigami
    if (output.innerHTML == "1912") {
        const _125_0_ = document.getElementById("125-0"); _125_0_.className = "Scorigami";
        const _7_2_ = document.getElementById("7-2"); _7_2_.className = "Scorigami";
        const _26_2_ = document.getElementById("26-2"); _26_2_.className = "Scorigami";
        const _13_3_ = document.getElementById("13-3"); _13_3_.className = "Scorigami";
        const _24_3_ = document.getElementById("24-3"); _24_3_.className = "Scorigami";
        const _85_3_ = document.getElementById("85-3"); _85_3_.className = "Scorigami";
        const _87_3_ = document.getElementById("87-3"); _87_3_.className = "Scorigami";
        const _100_3_ = document.getElementById("100-3"); _100_3_.className = "Scorigami";
        const _7_7_ = document.getElementById("7-7"); _7_7_.className = "Scorigami";
        const _10_7_ = document.getElementById("10-7"); _10_7_.className = "Scorigami";
        const _13_7_ = document.getElementById("13-7"); _13_7_.className = "Scorigami";
        const _14_7_ = document.getElementById("14-7"); _14_7_.className = "Scorigami";
        const _17_7_ = document.getElementById("17-7"); _17_7_.className = "Scorigami";
        const _19_7_ = document.getElementById("19-7"); _19_7_.className = "Scorigami";
        const _22_7_ = document.getElementById("22-7"); _22_7_.className = "Scorigami";
        const _23_7_ = document.getElementById("23-7"); _23_7_.className = "Scorigami";
        const _24_7_ = document.getElementById("24-7"); _24_7_.className = "Scorigami";
        const _27_7_ = document.getElementById("27-7"); _27_7_.className = "Scorigami";
        const _28_7_ = document.getElementById("28-7"); _28_7_.className = "Scorigami";
        const _30_7_ = document.getElementById("30-7"); _30_7_.className = "Scorigami";
        const _31_7_ = document.getElementById("31-7"); _31_7_.className = "Scorigami";
        const _32_7_ = document.getElementById("32-7"); _32_7_.className = "Scorigami";
        const _33_7_ = document.getElementById("33-7"); _33_7_.className = "Scorigami";
        const _34_7_ = document.getElementById("34-7"); _34_7_.className = "Scorigami";
        const _35_7_ = document.getElementById("35-7"); _35_7_.className = "Scorigami";
        const _39_7_ = document.getElementById("39-7"); _39_7_.className = "Scorigami";
        const _41_7_ = document.getElementById("41-7"); _41_7_.className = "Scorigami";
        const _42_7_ = document.getElementById("42-7"); _42_7_.className = "Scorigami";
        const _44_7_ = document.getElementById("44-7"); _44_7_.className = "Scorigami";
        const _48_7_ = document.getElementById("48-7"); _48_7_.className = "Scorigami";
        const _49_7_ = document.getElementById("49-7"); _49_7_.className = "Scorigami";
        const _50_7_ = document.getElementById("50-7"); _50_7_.className = "Scorigami";
        const _52_7_ = document.getElementById("52-7"); _52_7_.className = "Scorigami";
        const _55_7_ = document.getElementById("55-7"); _55_7_.className = "Scorigami";
        const _56_7_ = document.getElementById("56-7"); _56_7_.className = "Scorigami";
        const _64_7_ = document.getElementById("64-7"); _64_7_.className = "Scorigami";
        const _45_8_ = document.getElementById("45-8"); _45_8_.className = "Scorigami";
        const _9_9_ = document.getElementById("9-9"); _9_9_.className = "Scorigami";
        const _41_9_ = document.getElementById("41-9"); _41_9_.className = "Scorigami";
        const _37_10_ = document.getElementById("37-10"); _37_10_.className = "Scorigami";
        const _13_13_ = document.getElementById("13-13"); _13_13_.className = "Scorigami";
        const _14_13_ = document.getElementById("14-13"); _14_13_.className = "Scorigami";
        const _16_13_ = document.getElementById("16-13"); _16_13_.className = "Scorigami";
        const _19_13_ = document.getElementById("19-13"); _19_13_.className = "Scorigami";
        const _24_13_ = document.getElementById("24-13"); _24_13_.className = "Scorigami";
        const _30_13_ = document.getElementById("30-13"); _30_13_.className = "Scorigami";
        const _33_13_ = document.getElementById("33-13"); _33_13_.className = "Scorigami";
        const _23_14_ = document.getElementById("23-14"); _23_14_.className = "Scorigami";
        const _27_14_ = document.getElementById("27-14"); _27_14_.className = "Scorigami";
        const _34_14_ = document.getElementById("34-14"); _34_14_.className = "Scorigami";
        const _52_14_ = document.getElementById("52-14"); _52_14_.className = "Scorigami";
        const _53_14_ = document.getElementById("53-14"); _53_14_.className = "Scorigami";
        const _27_21_ = document.getElementById("27-21"); _27_21_.className = "Scorigami";
        const _27_24_ = document.getElementById("27-24"); _27_24_.className = "Scorigami";
        const _30_24_ = document.getElementById("30-24"); _30_24_.className = "Scorigami";
        const _41_25_ = document.getElementById("41-25"); _41_25_.className = "Scorigami";
        const _34_26_ = document.getElementById("34-26"); _34_26_.className = "Scorigami";
        const _7_1_ = document.getElementById("7-1"); _7_1_.className = "NowImpossible";
    }
    if (output.innerHTML > "1912") {
        const _125_0_ = document.getElementById("125-0"); _125_0_.className = "PastScorigami";
        const _7_2_ = document.getElementById("7-2"); _7_2_.className = "PastScorigami";
        const _26_2_ = document.getElementById("26-2"); _26_2_.className = "PastScorigami";
        const _13_3_ = document.getElementById("13-3"); _13_3_.className = "PastScorigami";
        const _24_3_ = document.getElementById("24-3"); _24_3_.className = "PastScorigami";
        const _85_3_ = document.getElementById("85-3"); _85_3_.className = "PastScorigami";
        const _87_3_ = document.getElementById("87-3"); _87_3_.className = "PastScorigami";
        const _100_3_ = document.getElementById("100-3"); _100_3_.className = "PastScorigami";
        const _7_7_ = document.getElementById("7-7"); _7_7_.className = "PastScorigami";
        const _10_7_ = document.getElementById("10-7"); _10_7_.className = "PastScorigami";
        const _13_7_ = document.getElementById("13-7"); _13_7_.className = "PastScorigami";
        const _14_7_ = document.getElementById("14-7"); _14_7_.className = "PastScorigami";
        const _17_7_ = document.getElementById("17-7"); _17_7_.className = "PastScorigami";
        const _19_7_ = document.getElementById("19-7"); _19_7_.className = "PastScorigami";
        const _22_7_ = document.getElementById("22-7"); _22_7_.className = "PastScorigami";
        const _23_7_ = document.getElementById("23-7"); _23_7_.className = "PastScorigami";
        const _24_7_ = document.getElementById("24-7"); _24_7_.className = "PastScorigami";
        const _27_7_ = document.getElementById("27-7"); _27_7_.className = "PastScorigami";
        const _28_7_ = document.getElementById("28-7"); _28_7_.className = "PastScorigami";
        const _30_7_ = document.getElementById("30-7"); _30_7_.className = "PastScorigami";
        const _31_7_ = document.getElementById("31-7"); _31_7_.className = "PastScorigami";
        const _32_7_ = document.getElementById("32-7"); _32_7_.className = "PastScorigami";
        const _33_7_ = document.getElementById("33-7"); _33_7_.className = "PastScorigami";
        const _34_7_ = document.getElementById("34-7"); _34_7_.className = "PastScorigami";
        const _35_7_ = document.getElementById("35-7"); _35_7_.className = "PastScorigami";
        const _39_7_ = document.getElementById("39-7"); _39_7_.className = "PastScorigami";
        const _41_7_ = document.getElementById("41-7"); _41_7_.className = "PastScorigami";
        const _42_7_ = document.getElementById("42-7"); _42_7_.className = "PastScorigami";
        const _44_7_ = document.getElementById("44-7"); _44_7_.className = "PastScorigami";
        const _48_7_ = document.getElementById("48-7"); _48_7_.className = "PastScorigami";
        const _49_7_ = document.getElementById("49-7"); _49_7_.className = "PastScorigami";
        const _50_7_ = document.getElementById("50-7"); _50_7_.className = "PastScorigami";
        const _52_7_ = document.getElementById("52-7"); _52_7_.className = "PastScorigami";
        const _55_7_ = document.getElementById("55-7"); _55_7_.className = "PastScorigami";
        const _56_7_ = document.getElementById("56-7"); _56_7_.className = "PastScorigami";
        const _64_7_ = document.getElementById("64-7"); _64_7_.className = "PastScorigami";
        const _45_8_ = document.getElementById("45-8"); _45_8_.className = "PastScorigami";
        const _9_9_ = document.getElementById("9-9"); _9_9_.className = "PastScorigami";
        const _41_9_ = document.getElementById("41-9"); _41_9_.className = "PastScorigami";
        const _37_10_ = document.getElementById("37-10"); _37_10_.className = "PastScorigami";
        const _13_13_ = document.getElementById("13-13"); _13_13_.className = "PastScorigami";
        const _14_13_ = document.getElementById("14-13"); _14_13_.className = "PastScorigami";
        const _16_13_ = document.getElementById("16-13"); _16_13_.className = "PastScorigami";
        const _19_13_ = document.getElementById("19-13"); _19_13_.className = "PastScorigami";
        const _24_13_ = document.getElementById("24-13"); _24_13_.className = "PastScorigami";
        const _30_13_ = document.getElementById("30-13"); _30_13_.className = "PastScorigami";
        const _33_13_ = document.getElementById("33-13"); _33_13_.className = "PastScorigami";
        const _23_14_ = document.getElementById("23-14"); _23_14_.className = "PastScorigami";
        const _27_14_ = document.getElementById("27-14"); _27_14_.className = "PastScorigami";
        const _34_14_ = document.getElementById("34-14"); _34_14_.className = "PastScorigami";
        const _52_14_ = document.getElementById("52-14"); _52_14_.className = "PastScorigami";
        const _53_14_ = document.getElementById("53-14"); _53_14_.className = "PastScorigami";
        const _27_21_ = document.getElementById("27-21"); _27_21_.className = "PastScorigami";
        const _27_24_ = document.getElementById("27-24"); _27_24_.className = "PastScorigami";
        const _30_24_ = document.getElementById("30-24"); _30_24_.className = "PastScorigami";
        const _41_25_ = document.getElementById("41-25"); _41_25_.className = "PastScorigami";
        const _34_26_ = document.getElementById("34-26"); _34_26_.className = "PastScorigami";
        const _7_1_ = document.getElementById("7-1"); _7_1_.className = "NowImpossible";
    }
    if (output.innerHTML < "1912") {
        const _125_0_ = document.getElementById("125-0"); _125_0_.className = "Blank";
        const _7_2_ = document.getElementById("7-2"); _7_2_.className = "Blank";
        const _26_2_ = document.getElementById("26-2"); _26_2_.className = "Blank";
        const _13_3_ = document.getElementById("13-3"); _13_3_.className = "Blank";
        const _24_3_ = document.getElementById("24-3"); _24_3_.className = "Blank";
        const _85_3_ = document.getElementById("85-3"); _85_3_.className = "Blank";
        const _87_3_ = document.getElementById("87-3"); _87_3_.className = "Blank";
        const _100_3_ = document.getElementById("100-3"); _100_3_.className = "Blank";
        const _7_7_ = document.getElementById("7-7"); _7_7_.className = "Blank";
        const _10_7_ = document.getElementById("10-7"); _10_7_.className = "Blank";
        const _13_7_ = document.getElementById("13-7"); _13_7_.className = "Blank";
        const _14_7_ = document.getElementById("14-7"); _14_7_.className = "Blank";
        const _17_7_ = document.getElementById("17-7"); _17_7_.className = "Blank";
        const _19_7_ = document.getElementById("19-7"); _19_7_.className = "Blank";
        const _22_7_ = document.getElementById("22-7"); _22_7_.className = "Blank";
        const _23_7_ = document.getElementById("23-7"); _23_7_.className = "Blank";
        const _24_7_ = document.getElementById("24-7"); _24_7_.className = "Blank";
        const _27_7_ = document.getElementById("27-7"); _27_7_.className = "Blank";
        const _28_7_ = document.getElementById("28-7"); _28_7_.className = "Blank";
        const _30_7_ = document.getElementById("30-7"); _30_7_.className = "Blank";
        const _31_7_ = document.getElementById("31-7"); _31_7_.className = "Blank";
        const _32_7_ = document.getElementById("32-7"); _32_7_.className = "Blank";
        const _33_7_ = document.getElementById("33-7"); _33_7_.className = "Blank";
        const _34_7_ = document.getElementById("34-7"); _34_7_.className = "Blank";
        const _35_7_ = document.getElementById("35-7"); _35_7_.className = "Blank";
        const _39_7_ = document.getElementById("39-7"); _39_7_.className = "Blank";
        const _41_7_ = document.getElementById("41-7"); _41_7_.className = "Blank";
        const _42_7_ = document.getElementById("42-7"); _42_7_.className = "Blank";
        const _44_7_ = document.getElementById("44-7"); _44_7_.className = "Blank";
        const _48_7_ = document.getElementById("48-7"); _48_7_.className = "Blank";
        const _49_7_ = document.getElementById("49-7"); _49_7_.className = "Blank";
        const _50_7_ = document.getElementById("50-7"); _50_7_.className = "Blank";
        const _52_7_ = document.getElementById("52-7"); _52_7_.className = "Blank";
        const _55_7_ = document.getElementById("55-7"); _55_7_.className = "Blank";
        const _56_7_ = document.getElementById("56-7"); _56_7_.className = "Blank";
        const _64_7_ = document.getElementById("64-7"); _64_7_.className = "Blank";
        const _45_8_ = document.getElementById("45-8"); _45_8_.className = "Blank";
        const _9_9_ = document.getElementById("9-9"); _9_9_.className = "Blank";
        const _41_9_ = document.getElementById("41-9"); _41_9_.className = "Blank";
        const _37_10_ = document.getElementById("37-10"); _37_10_.className = "Blank";
        const _13_13_ = document.getElementById("13-13"); _13_13_.className = "Blank";
        const _14_13_ = document.getElementById("14-13"); _14_13_.className = "Blank";
        const _16_13_ = document.getElementById("16-13"); _16_13_.className = "Blank";
        const _19_13_ = document.getElementById("19-13"); _19_13_.className = "Blank";
        const _24_13_ = document.getElementById("24-13"); _24_13_.className = "Blank";
        const _30_13_ = document.getElementById("30-13"); _30_13_.className = "Blank";
        const _33_13_ = document.getElementById("33-13"); _33_13_.className = "Blank";
        const _23_14_ = document.getElementById("23-14"); _23_14_.className = "Blank";
        const _27_14_ = document.getElementById("27-14"); _27_14_.className = "Blank";
        const _34_14_ = document.getElementById("34-14"); _34_14_.className = "Blank";
        const _52_14_ = document.getElementById("52-14"); _52_14_.className = "Blank";
        const _53_14_ = document.getElementById("53-14"); _53_14_.className = "Blank";
        const _27_21_ = document.getElementById("27-21"); _27_21_.className = "Blank";
        const _27_24_ = document.getElementById("27-24"); _27_24_.className = "Blank";
        const _30_24_ = document.getElementById("30-24"); _30_24_.className = "Blank";
        const _41_25_ = document.getElementById("41-25"); _41_25_.className = "Blank";
        const _34_26_ = document.getElementById("34-26"); _34_26_.className = "Blank";
        const _7_1_ = document.getElementById("7-1"); _7_1_.className = "Blank";
    }

    //1913 Scorigami
    if (output.innerHTML == "1913") {
        const _144_0_ = document.getElementById("144-0"); _144_0_.className = "Scorigami";
        const _21_2_ = document.getElementById("21-2"); _21_2_.className = "Scorigami";
        const _44_2_ = document.getElementById("44-2"); _44_2_.className = "Scorigami";
        const _19_3_ = document.getElementById("19-3"); _19_3_.className = "Scorigami";
        const _33_3_ = document.getElementById("33-3"); _33_3_.className = "Scorigami";
        const _48_3_ = document.getElementById("48-3"); _48_3_.className = "Scorigami";
        const _53_6_ = document.getElementById("53-6"); _53_6_.className = "Scorigami";
        const _67_6_ = document.getElementById("67-6"); _67_6_.className = "Scorigami";
        const _71_6_ = document.getElementById("71-6"); _71_6_.className = "Scorigami";
        const _78_6_ = document.getElementById("78-6"); _78_6_.className = "Scorigami";
        const _89_6_ = document.getElementById("89-6"); _89_6_.className = "Scorigami";
        const _8_7_ = document.getElementById("8-7"); _8_7_.className = "Scorigami";
        const _9_7_ = document.getElementById("9-7"); _9_7_.className = "Scorigami";
        const _37_7_ = document.getElementById("37-7"); _37_7_.className = "Scorigami";
        const _43_7_ = document.getElementById("43-7"); _43_7_.className = "Scorigami";
        const _45_7_ = document.getElementById("45-7"); _45_7_.className = "Scorigami";
        const _47_7_ = document.getElementById("47-7"); _47_7_.className = "Scorigami";
        const _58_7_ = document.getElementById("58-7"); _58_7_.className = "Scorigami";
        const _70_7_ = document.getElementById("70-7"); _70_7_.className = "Scorigami";
        const _19_9_ = document.getElementById("19-9"); _19_9_.className = "Scorigami";
        const _31_9_ = document.getElementById("31-9"); _31_9_.className = "Scorigami";
        const _21_10_ = document.getElementById("21-10"); _21_10_.className = "Scorigami";
        const _27_10_ = document.getElementById("27-10"); _27_10_.className = "Scorigami";
        const _35_10_ = document.getElementById("35-10"); _35_10_.className = "Scorigami";
        const _37_12_ = document.getElementById("37-12"); _37_12_.className = "Scorigami";
        const _18_13_ = document.getElementById("18-13"); _18_13_.className = "Scorigami";
        const _21_13_ = document.getElementById("21-13"); _21_13_.className = "Scorigami";
        const _35_13_ = document.getElementById("35-13"); _35_13_.className = "Scorigami";
        const _42_13_ = document.getElementById("42-13"); _42_13_.className = "Scorigami";
        const _44_13_ = document.getElementById("44-13"); _44_13_.className = "Scorigami";
        const _63_13_ = document.getElementById("63-13"); _63_13_.className = "Scorigami";
        const _26_14_ = document.getElementById("26-14"); _26_14_.className = "Scorigami";
        const _32_17_ = document.getElementById("32-17"); _32_17_.className = "Scorigami";
        const _21_20_ = document.getElementById("21-20"); _21_20_.className = "Scorigami";
        const _34_21_ = document.getElementById("34-21"); _34_21_.className = "Scorigami";
        const _35_27_ = document.getElementById("35-27"); _35_27_.className = "Scorigami";
    }
    if (output.innerHTML > "1913") {
        const _144_0_ = document.getElementById("144-0"); _144_0_.className = "PastScorigami";
        const _21_2_ = document.getElementById("21-2"); _21_2_.className = "PastScorigami";
        const _44_2_ = document.getElementById("44-2"); _44_2_.className = "PastScorigami";
        const _19_3_ = document.getElementById("19-3"); _19_3_.className = "PastScorigami";
        const _33_3_ = document.getElementById("33-3"); _33_3_.className = "PastScorigami";
        const _48_3_ = document.getElementById("48-3"); _48_3_.className = "PastScorigami";
        const _53_6_ = document.getElementById("53-6"); _53_6_.className = "PastScorigami";
        const _67_6_ = document.getElementById("67-6"); _67_6_.className = "PastScorigami";
        const _71_6_ = document.getElementById("71-6"); _71_6_.className = "PastScorigami";
        const _78_6_ = document.getElementById("78-6"); _78_6_.className = "PastScorigami";
        const _89_6_ = document.getElementById("89-6"); _89_6_.className = "PastScorigami";
        const _8_7_ = document.getElementById("8-7"); _8_7_.className = "PastScorigami";
        const _9_7_ = document.getElementById("9-7"); _9_7_.className = "PastScorigami";
        const _37_7_ = document.getElementById("37-7"); _37_7_.className = "PastScorigami";
        const _43_7_ = document.getElementById("43-7"); _43_7_.className = "PastScorigami";
        const _45_7_ = document.getElementById("45-7"); _45_7_.className = "PastScorigami";
        const _47_7_ = document.getElementById("47-7"); _47_7_.className = "PastScorigami";
        const _58_7_ = document.getElementById("58-7"); _58_7_.className = "PastScorigami";
        const _70_7_ = document.getElementById("70-7"); _70_7_.className = "PastScorigami";
        const _19_9_ = document.getElementById("19-9"); _19_9_.className = "PastScorigami";
        const _31_9_ = document.getElementById("31-9"); _31_9_.className = "PastScorigami";
        const _21_10_ = document.getElementById("21-10"); _21_10_.className = "PastScorigami";
        const _27_10_ = document.getElementById("27-10"); _27_10_.className = "PastScorigami";
        const _35_10_ = document.getElementById("35-10"); _35_10_.className = "PastScorigami";
        const _37_12_ = document.getElementById("37-12"); _37_12_.className = "PastScorigami";
        const _18_13_ = document.getElementById("18-13"); _18_13_.className = "PastScorigami";
        const _21_13_ = document.getElementById("21-13"); _21_13_.className = "PastScorigami";
        const _35_13_ = document.getElementById("35-13"); _35_13_.className = "PastScorigami";
        const _42_13_ = document.getElementById("42-13"); _42_13_.className = "PastScorigami";
        const _44_13_ = document.getElementById("44-13"); _44_13_.className = "PastScorigami";
        const _63_13_ = document.getElementById("63-13"); _63_13_.className = "PastScorigami";
        const _26_14_ = document.getElementById("26-14"); _26_14_.className = "PastScorigami";
        const _32_17_ = document.getElementById("32-17"); _32_17_.className = "PastScorigami";
        const _21_20_ = document.getElementById("21-20"); _21_20_.className = "PastScorigami";
        const _34_21_ = document.getElementById("34-21"); _34_21_.className = "PastScorigami";
        const _35_27_ = document.getElementById("35-27"); _35_27_.className = "PastScorigami";
    }
    if (output.innerHTML < "1913") {
        const _144_0_ = document.getElementById("144-0"); _144_0_.className = "Blank";
        const _21_2_ = document.getElementById("21-2"); _21_2_.className = "Blank";
        const _44_2_ = document.getElementById("44-2"); _44_2_.className = "Blank";
        const _19_3_ = document.getElementById("19-3"); _19_3_.className = "Blank";
        const _33_3_ = document.getElementById("33-3"); _33_3_.className = "Blank";
        const _48_3_ = document.getElementById("48-3"); _48_3_.className = "Blank";
        const _53_6_ = document.getElementById("53-6"); _53_6_.className = "Blank";
        const _67_6_ = document.getElementById("67-6"); _67_6_.className = "Blank";
        const _71_6_ = document.getElementById("71-6"); _71_6_.className = "Blank";
        const _78_6_ = document.getElementById("78-6"); _78_6_.className = "Blank";
        const _89_6_ = document.getElementById("89-6"); _89_6_.className = "Blank";
        const _8_7_ = document.getElementById("8-7"); _8_7_.className = "Blank";
        const _9_7_ = document.getElementById("9-7"); _9_7_.className = "Blank";
        const _37_7_ = document.getElementById("37-7"); _37_7_.className = "Blank";
        const _43_7_ = document.getElementById("43-7"); _43_7_.className = "Blank";
        const _45_7_ = document.getElementById("45-7"); _45_7_.className = "Blank";
        const _47_7_ = document.getElementById("47-7"); _47_7_.className = "Blank";
        const _58_7_ = document.getElementById("58-7"); _58_7_.className = "Blank";
        const _70_7_ = document.getElementById("70-7"); _70_7_.className = "Blank";
        const _19_9_ = document.getElementById("19-9"); _19_9_.className = "Blank";
        const _31_9_ = document.getElementById("31-9"); _31_9_.className = "Blank";
        const _21_10_ = document.getElementById("21-10"); _21_10_.className = "Blank";
        const _27_10_ = document.getElementById("27-10"); _27_10_.className = "Blank";
        const _35_10_ = document.getElementById("35-10"); _35_10_.className = "Blank";
        const _37_12_ = document.getElementById("37-12"); _37_12_.className = "Blank";
        const _18_13_ = document.getElementById("18-13"); _18_13_.className = "Blank";
        const _21_13_ = document.getElementById("21-13"); _21_13_.className = "Blank";
        const _35_13_ = document.getElementById("35-13"); _35_13_.className = "Blank";
        const _42_13_ = document.getElementById("42-13"); _42_13_.className = "Blank";
        const _44_13_ = document.getElementById("44-13"); _44_13_.className = "Blank";
        const _63_13_ = document.getElementById("63-13"); _63_13_.className = "Blank";
        const _26_14_ = document.getElementById("26-14"); _26_14_.className = "Blank";
        const _32_17_ = document.getElementById("32-17"); _32_17_.className = "Blank";
        const _21_20_ = document.getElementById("21-20"); _21_20_.className = "Blank";
        const _34_21_ = document.getElementById("34-21"); _34_21_.className = "Blank";
        const _35_27_ = document.getElementById("35-27"); _35_27_.className = "Blank";
    }

    //1914 Scorigami
    if (output.innerHTML == "1914") {
        const _103_0_ = document.getElementById("103-0"); _103_0_.className = "Scorigami";
        const _134_0_ = document.getElementById("134-0"); _134_0_.className = "Scorigami";
        const _48_2_ = document.getElementById("48-2"); _48_2_.className = "Scorigami";
        const _55_3_ = document.getElementById("55-3"); _55_3_.className = "Scorigami";
        const _59_6_ = document.getElementById("59-6"); _59_6_.className = "Scorigami";
        const _15_7_ = document.getElementById("15-7"); _15_7_.className = "Scorigami";
        const _29_7_ = document.getElementById("29-7"); _29_7_.className = "Scorigami";
        const _46_7_ = document.getElementById("46-7"); _46_7_.className = "Scorigami";
        const _61_7_ = document.getElementById("61-7"); _61_7_.className = "Scorigami";
        const _62_7_ = document.getElementById("62-7"); _62_7_.className = "Scorigami";
        const _66_7_ = document.getElementById("66-7"); _66_7_.className = "Scorigami";
        const _14_9_ = document.getElementById("14-9"); _14_9_.className = "Scorigami";
        const _15_9_ = document.getElementById("15-9"); _15_9_.className = "Scorigami";
        const _63_9_ = document.getElementById("63-9"); _63_9_.className = "Scorigami";
        const _52_10_ = document.getElementById("52-10"); _52_10_.className = "Scorigami";
        const _19_12_ = document.getElementById("19-12"); _19_12_.className = "Scorigami";
        const _20_13_ = document.getElementById("20-13"); _20_13_.className = "Scorigami";
        const _23_13_ = document.getElementById("23-13"); _23_13_.className = "Scorigami";
        const _26_13_ = document.getElementById("26-13"); _26_13_.className = "Scorigami";
        const _28_13_ = document.getElementById("28-13"); _28_13_.className = "Scorigami";
        const _19_14_ = document.getElementById("19-14"); _19_14_.className = "Scorigami";
        const _28_14_ = document.getElementById("28-14"); _28_14_.className = "Scorigami";
        const _24_20_ = document.getElementById("24-20"); _24_20_.className = "Scorigami";
        const _31_21_ = document.getElementById("31-21"); _31_21_.className = "Scorigami";
        const _27_23_ = document.getElementById("27-23"); _27_23_.className = "Scorigami";
        const _28_26_ = document.getElementById("28-26"); _28_26_.className = "Scorigami";
    }
    if (output.innerHTML > "1914") {
        const _103_0_ = document.getElementById("103-0"); _103_0_.className = "PastScorigami";
        const _134_0_ = document.getElementById("134-0"); _134_0_.className = "PastScorigami";
        const _48_2_ = document.getElementById("48-2"); _48_2_.className = "PastScorigami";
        const _55_3_ = document.getElementById("55-3"); _55_3_.className = "PastScorigami";
        const _59_6_ = document.getElementById("59-6"); _59_6_.className = "PastScorigami";
        const _15_7_ = document.getElementById("15-7"); _15_7_.className = "PastScorigami";
        const _29_7_ = document.getElementById("29-7"); _29_7_.className = "PastScorigami";
        const _46_7_ = document.getElementById("46-7"); _46_7_.className = "PastScorigami";
        const _61_7_ = document.getElementById("61-7"); _61_7_.className = "PastScorigami";
        const _62_7_ = document.getElementById("62-7"); _62_7_.className = "PastScorigami";
        const _66_7_ = document.getElementById("66-7"); _66_7_.className = "PastScorigami";
        const _14_9_ = document.getElementById("14-9"); _14_9_.className = "PastScorigami";
        const _15_9_ = document.getElementById("15-9"); _15_9_.className = "PastScorigami";
        const _63_9_ = document.getElementById("63-9"); _63_9_.className = "PastScorigami";
        const _52_10_ = document.getElementById("52-10"); _52_10_.className = "PastScorigami";
        const _19_12_ = document.getElementById("19-12"); _19_12_.className = "PastScorigami";
        const _20_13_ = document.getElementById("20-13"); _20_13_.className = "PastScorigami";
        const _23_13_ = document.getElementById("23-13"); _23_13_.className = "PastScorigami";
        const _26_13_ = document.getElementById("26-13"); _26_13_.className = "PastScorigami";
        const _28_13_ = document.getElementById("28-13"); _28_13_.className = "PastScorigami";
        const _19_14_ = document.getElementById("19-14"); _19_14_.className = "PastScorigami";
        const _28_14_ = document.getElementById("28-14"); _28_14_.className = "PastScorigami";
        const _24_20_ = document.getElementById("24-20"); _24_20_.className = "PastScorigami";
        const _31_21_ = document.getElementById("31-21"); _31_21_.className = "PastScorigami";
        const _27_23_ = document.getElementById("27-23"); _27_23_.className = "PastScorigami";
        const _28_26_ = document.getElementById("28-26"); _28_26_.className = "PastScorigami";
    }
    if (output.innerHTML < "1914") {
        const _103_0_ = document.getElementById("103-0"); _103_0_.className = "Blank";
        const _134_0_ = document.getElementById("134-0"); _134_0_.className = "Blank";
        const _48_2_ = document.getElementById("48-2"); _48_2_.className = "Blank";
        const _55_3_ = document.getElementById("55-3"); _55_3_.className = "Blank";
        const _59_6_ = document.getElementById("59-6"); _59_6_.className = "Blank";
        const _15_7_ = document.getElementById("15-7"); _15_7_.className = "Blank";
        const _29_7_ = document.getElementById("29-7"); _29_7_.className = "Blank";
        const _46_7_ = document.getElementById("46-7"); _46_7_.className = "Blank";
        const _61_7_ = document.getElementById("61-7"); _61_7_.className = "Blank";
        const _62_7_ = document.getElementById("62-7"); _62_7_.className = "Blank";
        const _66_7_ = document.getElementById("66-7"); _66_7_.className = "Blank";
        const _14_9_ = document.getElementById("14-9"); _14_9_.className = "Blank";
        const _15_9_ = document.getElementById("15-9"); _15_9_.className = "Blank";
        const _63_9_ = document.getElementById("63-9"); _63_9_.className = "Blank";
        const _52_10_ = document.getElementById("52-10"); _52_10_.className = "Blank";
        const _19_12_ = document.getElementById("19-12"); _19_12_.className = "Blank";
        const _20_13_ = document.getElementById("20-13"); _20_13_.className = "Blank";
        const _23_13_ = document.getElementById("23-13"); _23_13_.className = "Blank";
        const _26_13_ = document.getElementById("26-13"); _26_13_.className = "Blank";
        const _28_13_ = document.getElementById("28-13"); _28_13_.className = "Blank";
        const _19_14_ = document.getElementById("19-14"); _19_14_.className = "Blank";
        const _28_14_ = document.getElementById("28-14"); _28_14_.className = "Blank";
        const _24_20_ = document.getElementById("24-20"); _24_20_.className = "Blank";
        const _31_21_ = document.getElementById("31-21"); _31_21_.className = "Blank";
        const _27_23_ = document.getElementById("27-23"); _27_23_.className = "Blank";
        const _28_26_ = document.getElementById("28-26"); _28_26_.className = "Blank";
    }

    //1915 Scorigami
    if (output.innerHTML == "1915") {
        const _90_0_ = document.getElementById("90-0"); _90_0_.className = "Scorigami";
        const _13_2_ = document.getElementById("13-2"); _13_2_.className = "Scorigami";
        const _55_2_ = document.getElementById("55-2"); _55_2_.className = "Scorigami";
        const _35_3_ = document.getElementById("35-3"); _35_3_.className = "Scorigami";
        const _39_3_ = document.getElementById("39-3"); _39_3_.className = "Scorigami";
        const _40_3_ = document.getElementById("40-3"); _40_3_.className = "Scorigami";
        const _92_6_ = document.getElementById("92-6"); _92_6_.className = "Scorigami";
        const _25_7_ = document.getElementById("25-7"); _25_7_.className = "Scorigami";
        const _36_7_ = document.getElementById("36-7"); _36_7_.className = "Scorigami";
        const _75_7_ = document.getElementById("75-7"); _75_7_.className = "Scorigami";
        const _60_9_ = document.getElementById("60-9"); _60_9_.className = "Scorigami";
        const _19_10_ = document.getElementById("19-10"); _19_10_.className = "Scorigami";
        const _36_13_ = document.getElementById("36-13"); _36_13_.className = "Scorigami";
        const _41_13_ = document.getElementById("41-13"); _41_13_.className = "Scorigami";
        const _48_13_ = document.getElementById("48-13"); _48_13_.className = "Scorigami";
        const _51_13_ = document.getElementById("51-13"); _51_13_.className = "Scorigami";
        const _54_13_ = document.getElementById("54-13"); _54_13_.className = "Scorigami";
        const _58_13_ = document.getElementById("58-13"); _58_13_.className = "Scorigami";
        const _20_19_ = document.getElementById("20-19"); _20_19_.className = "Scorigami";
        const _23_21_ = document.getElementById("23-21"); _23_21_.className = "Scorigami";
        const _40_21_ = document.getElementById("40-21"); _40_21_.className = "Scorigami";
    }
    if (output.innerHTML > "1915") {
        const _90_0_ = document.getElementById("90-0"); _90_0_.className = "PastScorigami";
        const _13_2_ = document.getElementById("13-2"); _13_2_.className = "PastScorigami";
        const _55_2_ = document.getElementById("55-2"); _55_2_.className = "PastScorigami";
        const _35_3_ = document.getElementById("35-3"); _35_3_.className = "PastScorigami";
        const _39_3_ = document.getElementById("39-3"); _39_3_.className = "PastScorigami";
        const _40_3_ = document.getElementById("40-3"); _40_3_.className = "PastScorigami";
        const _92_6_ = document.getElementById("92-6"); _92_6_.className = "PastScorigami";
        const _25_7_ = document.getElementById("25-7"); _25_7_.className = "PastScorigami";
        const _36_7_ = document.getElementById("36-7"); _36_7_.className = "PastScorigami";
        const _75_7_ = document.getElementById("75-7"); _75_7_.className = "PastScorigami";
        const _60_9_ = document.getElementById("60-9"); _60_9_.className = "PastScorigami";
        const _19_10_ = document.getElementById("19-10"); _19_10_.className = "PastScorigami";
        const _36_13_ = document.getElementById("36-13"); _36_13_.className = "PastScorigami";
        const _41_13_ = document.getElementById("41-13"); _41_13_.className = "PastScorigami";
        const _48_13_ = document.getElementById("48-13"); _48_13_.className = "PastScorigami";
        const _51_13_ = document.getElementById("51-13"); _51_13_.className = "PastScorigami";
        const _54_13_ = document.getElementById("54-13"); _54_13_.className = "PastScorigami";
        const _58_13_ = document.getElementById("58-13"); _58_13_.className = "PastScorigami";
        const _20_19_ = document.getElementById("20-19"); _20_19_.className = "PastScorigami";
        const _23_21_ = document.getElementById("23-21"); _23_21_.className = "PastScorigami";
        const _40_21_ = document.getElementById("40-21"); _40_21_.className = "PastScorigami";
    }
    if (output.innerHTML < "1915") {
        const _90_0_ = document.getElementById("90-0"); _90_0_.className = "Blank";
        const _13_2_ = document.getElementById("13-2"); _13_2_.className = "Blank";
        const _55_2_ = document.getElementById("55-2"); _55_2_.className = "Blank";
        const _35_3_ = document.getElementById("35-3"); _35_3_.className = "Blank";
        const _39_3_ = document.getElementById("39-3"); _39_3_.className = "Blank";
        const _40_3_ = document.getElementById("40-3"); _40_3_.className = "Blank";
        const _92_6_ = document.getElementById("92-6"); _92_6_.className = "Blank";
        const _25_7_ = document.getElementById("25-7"); _25_7_.className = "Blank";
        const _36_7_ = document.getElementById("36-7"); _36_7_.className = "Blank";
        const _75_7_ = document.getElementById("75-7"); _75_7_.className = "Blank";
        const _60_9_ = document.getElementById("60-9"); _60_9_.className = "Blank";
        const _19_10_ = document.getElementById("19-10"); _19_10_.className = "Blank";
        const _36_13_ = document.getElementById("36-13"); _36_13_.className = "Blank";
        const _41_13_ = document.getElementById("41-13"); _41_13_.className = "Blank";
        const _48_13_ = document.getElementById("48-13"); _48_13_.className = "Blank";
        const _51_13_ = document.getElementById("51-13"); _51_13_.className = "Blank";
        const _54_13_ = document.getElementById("54-13"); _54_13_.className = "Blank";
        const _58_13_ = document.getElementById("58-13"); _58_13_.className = "Blank";
        const _20_19_ = document.getElementById("20-19"); _20_19_.className = "Blank";
        const _23_21_ = document.getElementById("23-21"); _23_21_.className = "Blank";
        const _40_21_ = document.getElementById("40-21"); _40_21_.className = "Blank";
    }

    //1916 Scorigami
    if (output.innerHTML == "1916") {
        const _222_0_ = document.getElementById("222-0"); _222_0_.className = "Scorigami";
        const _47_2_ = document.getElementById("47-2"); _47_2_.className = "Scorigami";
        const _60_3_ = document.getElementById("60-3"); _60_3_.className = "Scorigami";
        const _61_3_ = document.getElementById("61-3"); _61_3_.className = "Scorigami";
        const _146_3_ = document.getElementById("146-3"); _146_3_.className = "Scorigami";
        const _61_5_ = document.getElementById("61-5"); _61_5_.className = "Scorigami";
        const _57_7_ = document.getElementById("57-7"); _57_7_.className = "Scorigami";
        const _60_7_ = document.getElementById("60-7"); _60_7_.className = "Scorigami";
        const _68_7_ = document.getElementById("68-7"); _68_7_.className = "Scorigami";
        const _69_7_ = document.getElementById("69-7"); _69_7_.className = "Scorigami";
        const _42_10_ = document.getElementById("42-10"); _42_10_.className = "Scorigami";
        const _38_13_ = document.getElementById("38-13"); _38_13_.className = "Scorigami";
        const _49_13_ = document.getElementById("49-13"); _49_13_.className = "Scorigami";
        const _32_14_ = document.getElementById("32-14"); _32_14_.className = "Scorigami";
        const _33_14_ = document.getElementById("33-14"); _33_14_.className = "Scorigami";
        const _36_14_ = document.getElementById("36-14"); _36_14_.className = "Scorigami";
        const _39_14_ = document.getElementById("39-14"); _39_14_.className = "Scorigami";
        const _46_14_ = document.getElementById("46-14"); _46_14_.className = "Scorigami";
        const _27_15_ = document.getElementById("27-15"); _27_15_.className = "Scorigami";
        const _19_16_ = document.getElementById("19-16"); _19_16_.className = "Scorigami";
        const _47_16_ = document.getElementById("47-16"); _47_16_.className = "Scorigami";
        const _34_17_ = document.getElementById("34-17"); _34_17_.className = "Scorigami";
        const _23_20_ = document.getElementById("23-20"); _23_20_.className = "Scorigami";
    }
    if (output.innerHTML > "1916") {
        const _222_0_ = document.getElementById("222-0"); _222_0_.className = "PastScorigami";
        const _47_2_ = document.getElementById("47-2"); _47_2_.className = "PastScorigami";
        const _60_3_ = document.getElementById("60-3"); _60_3_.className = "PastScorigami";
        const _61_3_ = document.getElementById("61-3"); _61_3_.className = "PastScorigami";
        const _146_3_ = document.getElementById("146-3"); _146_3_.className = "PastScorigami";
        const _61_5_ = document.getElementById("61-5"); _61_5_.className = "PastScorigami";
        const _57_7_ = document.getElementById("57-7"); _57_7_.className = "PastScorigami";
        const _60_7_ = document.getElementById("60-7"); _60_7_.className = "PastScorigami";
        const _68_7_ = document.getElementById("68-7"); _68_7_.className = "PastScorigami";
        const _69_7_ = document.getElementById("69-7"); _69_7_.className = "PastScorigami";
        const _42_10_ = document.getElementById("42-10"); _42_10_.className = "PastScorigami";
        const _38_13_ = document.getElementById("38-13"); _38_13_.className = "PastScorigami";
        const _49_13_ = document.getElementById("49-13"); _49_13_.className = "PastScorigami";
        const _32_14_ = document.getElementById("32-14"); _32_14_.className = "PastScorigami";
        const _33_14_ = document.getElementById("33-14"); _33_14_.className = "PastScorigami";
        const _36_14_ = document.getElementById("36-14"); _36_14_.className = "PastScorigami";
        const _39_14_ = document.getElementById("39-14"); _39_14_.className = "PastScorigami";
        const _46_14_ = document.getElementById("46-14"); _46_14_.className = "PastScorigami";
        const _27_15_ = document.getElementById("27-15"); _27_15_.className = "PastScorigami";
        const _19_16_ = document.getElementById("19-16"); _19_16_.className = "PastScorigami";
        const _47_16_ = document.getElementById("47-16"); _47_16_.className = "PastScorigami";
        const _34_17_ = document.getElementById("34-17"); _34_17_.className = "PastScorigami";
        const _23_20_ = document.getElementById("23-20"); _23_20_.className = "PastScorigami";
    }
    if (output.innerHTML < "1916") {
        const _222_0_ = document.getElementById("222-0"); _222_0_.className = "Blank";
        const _47_2_ = document.getElementById("47-2"); _47_2_.className = "Blank";
        const _60_3_ = document.getElementById("60-3"); _60_3_.className = "Blank";
        const _61_3_ = document.getElementById("61-3"); _61_3_.className = "Blank";
        const _146_3_ = document.getElementById("146-3"); _146_3_.className = "Blank";
        const _61_5_ = document.getElementById("61-5"); _61_5_.className = "Blank";
        const _57_7_ = document.getElementById("57-7"); _57_7_.className = "Blank";
        const _60_7_ = document.getElementById("60-7"); _60_7_.className = "Blank";
        const _68_7_ = document.getElementById("68-7"); _68_7_.className = "Blank";
        const _69_7_ = document.getElementById("69-7"); _69_7_.className = "Blank";
        const _42_10_ = document.getElementById("42-10"); _42_10_.className = "Blank";
        const _38_13_ = document.getElementById("38-13"); _38_13_.className = "Blank";
        const _49_13_ = document.getElementById("49-13"); _49_13_.className = "Blank";
        const _32_14_ = document.getElementById("32-14"); _32_14_.className = "Blank";
        const _33_14_ = document.getElementById("33-14"); _33_14_.className = "Blank";
        const _36_14_ = document.getElementById("36-14"); _36_14_.className = "Blank";
        const _39_14_ = document.getElementById("39-14"); _39_14_.className = "Blank";
        const _46_14_ = document.getElementById("46-14"); _46_14_.className = "Blank";
        const _27_15_ = document.getElementById("27-15"); _27_15_.className = "Blank";
        const _19_16_ = document.getElementById("19-16"); _19_16_.className = "Blank";
        const _47_16_ = document.getElementById("47-16"); _47_16_.className = "Blank";
        const _34_17_ = document.getElementById("34-17"); _34_17_.className = "Blank";
        const _23_20_ = document.getElementById("23-20"); _23_20_.className = "Blank";
    }

    //1917 Scorigami
    if (output.innerHTML == "1917") {
        const _179_0_ = document.getElementById("179-0"); _179_0_.className = "Scorigami";
        const _51_3_ = document.getElementById("51-3"); _51_3_.className = "Scorigami";
        const _80_3_ = document.getElementById("80-3"); _80_3_.className = "Scorigami";
        const _118_3_ = document.getElementById("118-3"); _118_3_.className = "Scorigami";
        const _58_6_ = document.getElementById("58-6"); _58_6_.className = "Scorigami";
        const _72_7_ = document.getElementById("72-7"); _72_7_.className = "Scorigami";
        const _33_9_ = document.getElementById("33-9"); _33_9_.className = "Scorigami";
        const _52_9_ = document.getElementById("52-9"); _52_9_.className = "Scorigami";
        const _73_10_ = document.getElementById("73-10"); _73_10_.className = "Scorigami";
        const _29_13_ = document.getElementById("29-13"); _29_13_.className = "Scorigami";
        const _34_13_ = document.getElementById("34-13"); _34_13_.className = "Scorigami";
        const _53_13_ = document.getElementById("53-13"); _53_13_.className = "Scorigami";
        const _55_13_ = document.getElementById("55-13"); _55_13_.className = "Scorigami";
        const _25_14_ = document.getElementById("25-14"); _25_14_.className = "Scorigami";
        const _41_14_ = document.getElementById("41-14"); _41_14_.className = "Scorigami";
        const _27_16_ = document.getElementById("27-16"); _27_16_.className = "Scorigami";
        const _20_20_ = document.getElementById("20-20"); _20_20_.className = "Scorigami";
    }
    if (output.innerHTML > "1917") {
        const _179_0_ = document.getElementById("179-0"); _179_0_.className = "PastScorigami";
        const _51_3_ = document.getElementById("51-3"); _51_3_.className = "PastScorigami";
        const _80_3_ = document.getElementById("80-3"); _80_3_.className = "PastScorigami";
        const _118_3_ = document.getElementById("118-3"); _118_3_.className = "PastScorigami";
        const _58_6_ = document.getElementById("58-6"); _58_6_.className = "PastScorigami";
        const _72_7_ = document.getElementById("72-7"); _72_7_.className = "PastScorigami";
        const _33_9_ = document.getElementById("33-9"); _33_9_.className = "PastScorigami";
        const _52_9_ = document.getElementById("52-9"); _52_9_.className = "PastScorigami";
        const _73_10_ = document.getElementById("73-10"); _73_10_.className = "PastScorigami";
        const _29_13_ = document.getElementById("29-13"); _29_13_.className = "PastScorigami";
        const _34_13_ = document.getElementById("34-13"); _34_13_.className = "PastScorigami";
        const _53_13_ = document.getElementById("53-13"); _53_13_.className = "PastScorigami";
        const _55_13_ = document.getElementById("55-13"); _55_13_.className = "PastScorigami";
        const _25_14_ = document.getElementById("25-14"); _25_14_.className = "PastScorigami";
        const _41_14_ = document.getElementById("41-14"); _41_14_.className = "PastScorigami";
        const _27_16_ = document.getElementById("27-16"); _27_16_.className = "PastScorigami";
        const _20_20_ = document.getElementById("20-20"); _20_20_.className = "PastScorigami";
    }
    if (output.innerHTML < "1917") {
        const _179_0_ = document.getElementById("179-0"); _179_0_.className = "Blank";
        const _51_3_ = document.getElementById("51-3"); _51_3_.className = "Blank";
        const _80_3_ = document.getElementById("80-3"); _80_3_.className = "Blank";
        const _118_3_ = document.getElementById("118-3"); _118_3_.className = "Blank";
        const _58_6_ = document.getElementById("58-6"); _58_6_.className = "Blank";
        const _72_7_ = document.getElementById("72-7"); _72_7_.className = "Blank";
        const _33_9_ = document.getElementById("33-9"); _33_9_.className = "Blank";
        const _52_9_ = document.getElementById("52-9"); _52_9_.className = "Blank";
        const _73_10_ = document.getElementById("73-10"); _73_10_.className = "Blank";
        const _29_13_ = document.getElementById("29-13"); _29_13_.className = "Blank";
        const _34_13_ = document.getElementById("34-13"); _34_13_.className = "Blank";
        const _53_13_ = document.getElementById("53-13"); _53_13_.className = "Blank";
        const _55_13_ = document.getElementById("55-13"); _55_13_.className = "Blank";
        const _25_14_ = document.getElementById("25-14"); _25_14_.className = "Blank";
        const _41_14_ = document.getElementById("41-14"); _41_14_.className = "Blank";
        const _27_16_ = document.getElementById("27-16"); _27_16_.className = "Blank";
        const _20_20_ = document.getElementById("20-20"); _20_20_.className = "Blank";
    }
    
    //1918 Scorigami
    if (output.innerHTML == "1918") {
        const _118_0_ = document.getElementById("118-0"); _118_0_.className = "Scorigami";
        const _123_0_ = document.getElementById("123-0"); _123_0_.className = "Scorigami";
        const _127_0_ = document.getElementById("127-0"); _127_0_.className = "Scorigami";
        const _67_7_ = document.getElementById("67-7"); _67_7_.className = "Scorigami";
        const _25_8_ = document.getElementById("25-8"); _25_8_.className = "Scorigami";
        const _47_9_ = document.getElementById("47-9"); _47_9_.className = "Scorigami";
        const _66_13_ = document.getElementById("66-13"); _66_13_.className = "Scorigami";
        const _40_14_ = document.getElementById("40-14"); _40_14_.className = "Scorigami";
        const _42_14_ = document.getElementById("42-14"); _42_14_.className = "Scorigami";
        const _54_14_ = document.getElementById("54-14"); _54_14_.className = "Scorigami";
    }
    if (output.innerHTML > "1918") {
        const _118_0_ = document.getElementById("118-0"); _118_0_.className = "PastScorigami";
        const _123_0_ = document.getElementById("123-0"); _123_0_.className = "PastScorigami";
        const _127_0_ = document.getElementById("127-0"); _127_0_.className = "PastScorigami";
        const _67_7_ = document.getElementById("67-7"); _67_7_.className = "PastScorigami";
        const _25_8_ = document.getElementById("25-8"); _25_8_.className = "PastScorigami";
        const _47_9_ = document.getElementById("47-9"); _47_9_.className = "PastScorigami";
        const _66_13_ = document.getElementById("66-13"); _66_13_.className = "PastScorigami";
        const _40_14_ = document.getElementById("40-14"); _40_14_.className = "PastScorigami";
        const _42_14_ = document.getElementById("42-14"); _42_14_.className = "PastScorigami";
        const _54_14_ = document.getElementById("54-14"); _54_14_.className = "PastScorigami";
    }
    if (output.innerHTML < "1918") {
        const _118_0_ = document.getElementById("118-0"); _118_0_.className = "Blank";
        const _123_0_ = document.getElementById("123-0"); _123_0_.className = "Blank";
        const _127_0_ = document.getElementById("127-0"); _127_0_.className = "Blank";
        const _67_7_ = document.getElementById("67-7"); _67_7_.className = "Blank";
        const _25_8_ = document.getElementById("25-8"); _25_8_.className = "Blank";
        const _47_9_ = document.getElementById("47-9"); _47_9_.className = "Blank";
        const _66_13_ = document.getElementById("66-13"); _66_13_.className = "Blank";
        const _40_14_ = document.getElementById("40-14"); _40_14_.className = "Blank";
        const _42_14_ = document.getElementById("42-14"); _42_14_.className = "Blank";
        const _54_14_ = document.getElementById("54-14"); _54_14_.className = "Blank";
    }
    
    //1919 Scorigami
    if (output.innerHTML == "1919") {
        const _120_0_ = document.getElementById("120-0"); _120_0_.className = "Scorigami";
        const _121_0_ = document.getElementById("121-0"); _121_0_.className = "Scorigami";
        const _157_0_ = document.getElementById("157-0"); _157_0_.className = "Scorigami";
        const _32_2_ = document.getElementById("32-2"); _32_2_.className = "Scorigami";
        const _63_7_ = document.getElementById("63-7"); _63_7_.className = "Scorigami";
        const _77_7_ = document.getElementById("77-7"); _77_7_.className = "Scorigami";
        const _41_12_ = document.getElementById("41-12"); _41_12_.className = "Scorigami";
        const _25_13_ = document.getElementById("25-13"); _25_13_.className = "Scorigami";
        const _31_14_ = document.getElementById("31-14"); _31_14_.className = "Scorigami";
        const _33_21_ = document.getElementById("33-21"); _33_21_.className = "Scorigami";
    }
    if (output.innerHTML > "1919") {
        const _120_0_ = document.getElementById("120-0"); _120_0_.className = "PastScorigami";
        const _121_0_ = document.getElementById("121-0"); _121_0_.className = "PastScorigami";
        const _157_0_ = document.getElementById("157-0"); _157_0_.className = "PastScorigami";
        const _32_2_ = document.getElementById("32-2"); _32_2_.className = "PastScorigami";
        const _63_7_ = document.getElementById("63-7"); _63_7_.className = "PastScorigami";
        const _77_7_ = document.getElementById("77-7"); _77_7_.className = "PastScorigami";
        const _41_12_ = document.getElementById("41-12"); _41_12_.className = "PastScorigami";
        const _25_13_ = document.getElementById("25-13"); _25_13_.className = "PastScorigami";
        const _31_14_ = document.getElementById("31-14"); _31_14_.className = "PastScorigami";
        const _33_21_ = document.getElementById("33-21"); _33_21_.className = "PastScorigami";
    }
    if (output.innerHTML < "1919") {
        const _120_0_ = document.getElementById("120-0"); _120_0_.className = "Blank";
        const _121_0_ = document.getElementById("121-0"); _121_0_.className = "Blank";
        const _157_0_ = document.getElementById("157-0"); _157_0_.className = "Blank";
        const _32_2_ = document.getElementById("32-2"); _32_2_.className = "Blank";
        const _63_7_ = document.getElementById("63-7"); _63_7_.className = "Blank";
        const _77_7_ = document.getElementById("77-7"); _77_7_.className = "Blank";
        const _41_12_ = document.getElementById("41-12"); _41_12_.className = "Blank";
        const _25_13_ = document.getElementById("25-13"); _25_13_.className = "Blank";
        const _31_14_ = document.getElementById("31-14"); _31_14_.className = "Blank";
        const _33_21_ = document.getElementById("33-21"); _33_21_.className = "Blank";
    }
    
    //1920 Scorigami
    if (output.innerHTML == "1920") {
        const _19_2_ = document.getElementById("19-2"); _19_2_.className = "Scorigami";
        const _31_2_ = document.getElementById("31-2"); _31_2_.className = "Scorigami";
        const _41_3_ = document.getElementById("41-3"); _41_3_.className = "Scorigami";
        const _42_3_ = document.getElementById("42-3"); _42_3_.className = "Scorigami";
        const _75_6_ = document.getElementById("75-6"); _75_6_.className = "Scorigami";
        const _79_7_ = document.getElementById("79-7"); _79_7_.className = "Scorigami";
        const _90_7_ = document.getElementById("90-7"); _90_7_.className = "Scorigami";
        const _109_7_ = document.getElementById("109-7"); _109_7_.className = "Scorigami";
        const _21_16_ = document.getElementById("21-16"); _21_16_.className = "Scorigami";
        const _27_17_ = document.getElementById("27-17"); _27_17_.className = "Scorigami";
    }
    if (output.innerHTML > "1920") {
        const _19_2_ = document.getElementById("19-2"); _19_2_.className = "PastScorigami";
        const _31_2_ = document.getElementById("31-2"); _31_2_.className = "PastScorigami";
        const _41_3_ = document.getElementById("41-3"); _41_3_.className = "PastScorigami";
        const _42_3_ = document.getElementById("42-3"); _42_3_.className = "PastScorigami";
        const _75_6_ = document.getElementById("75-6"); _75_6_.className = "PastScorigami";
        const _79_7_ = document.getElementById("79-7"); _79_7_.className = "PastScorigami";
        const _90_7_ = document.getElementById("90-7"); _90_7_.className = "PastScorigami";
        const _109_7_ = document.getElementById("109-7"); _109_7_.className = "PastScorigami";
        const _21_16_ = document.getElementById("21-16"); _21_16_.className = "PastScorigami";
        const _27_17_ = document.getElementById("27-17"); _27_17_.className = "PastScorigami";
    }
    if (output.innerHTML < "1920") {
        const _19_2_ = document.getElementById("19-2"); _19_2_.className = "Blank";
        const _31_2_ = document.getElementById("31-2"); _31_2_.className = "Blank";
        const _41_3_ = document.getElementById("41-3"); _41_3_.className = "Blank";
        const _42_3_ = document.getElementById("42-3"); _42_3_.className = "Blank";
        const _75_6_ = document.getElementById("75-6"); _75_6_.className = "Blank";
        const _79_7_ = document.getElementById("79-7"); _79_7_.className = "Blank";
        const _90_7_ = document.getElementById("90-7"); _90_7_.className = "Blank";
        const _109_7_ = document.getElementById("109-7"); _109_7_.className = "Blank";
        const _21_16_ = document.getElementById("21-16"); _21_16_.className = "Blank";
        const _27_17_ = document.getElementById("27-17"); _27_17_.className = "Blank";
    }
    
    //1921 Scorigami
    if (output.innerHTML == "1921") {
        const _31_3_ = document.getElementById("31-3"); _31_3_.className = "Scorigami";
        const _72_3_ = document.getElementById("72-3"); _72_3_.className = "Scorigami";
        const _84_6_ = document.getElementById("84-6"); _84_6_.className = "Scorigami";
        const _59_7_ = document.getElementById("59-7"); _59_7_.className = "Scorigami";
        const _57_10_ = document.getElementById("57-10"); _57_10_.className = "Scorigami";
        const _35_14_ = document.getElementById("35-14"); _35_14_.className = "Scorigami";
        const _48_14_ = document.getElementById("48-14"); _48_14_.className = "Scorigami";
        const _49_14_ = document.getElementById("49-14"); _49_14_.className = "Scorigami";
        const _21_21_ = document.getElementById("21-21"); _21_21_.className = "Scorigami";
        const _28_21_ = document.getElementById("28-21"); _28_21_.className = "Scorigami";
        const _47_21_ = document.getElementById("47-21"); _47_21_.className = "Scorigami";
    }
    if (output.innerHTML > "1921") {
        const _31_3_ = document.getElementById("31-3"); _31_3_.className = "PastScorigami";
        const _72_3_ = document.getElementById("72-3"); _72_3_.className = "PastScorigami";
        const _84_6_ = document.getElementById("84-6"); _84_6_.className = "PastScorigami";
        const _59_7_ = document.getElementById("59-7"); _59_7_.className = "PastScorigami";
        const _57_10_ = document.getElementById("57-10"); _57_10_.className = "PastScorigami";
        const _35_14_ = document.getElementById("35-14"); _35_14_.className = "PastScorigami";
        const _48_14_ = document.getElementById("48-14"); _48_14_.className = "PastScorigami";
        const _49_14_ = document.getElementById("49-14"); _49_14_.className = "PastScorigami";
        const _21_21_ = document.getElementById("21-21"); _21_21_.className = "PastScorigami";
        const _28_21_ = document.getElementById("28-21"); _28_21_.className = "PastScorigami";
        const _47_21_ = document.getElementById("47-21"); _47_21_.className = "PastScorigami";
    }
    if (output.innerHTML < "1921") {
        const _31_3_ = document.getElementById("31-3"); _31_3_.className = "Blank";
        const _72_3_ = document.getElementById("72-3"); _72_3_.className = "Blank";
        const _84_6_ = document.getElementById("84-6"); _84_6_.className = "Blank";
        const _59_7_ = document.getElementById("59-7"); _59_7_.className = "Blank";
        const _57_10_ = document.getElementById("57-10"); _57_10_.className = "Blank";
        const _35_14_ = document.getElementById("35-14"); _35_14_.className = "Blank";
        const _48_14_ = document.getElementById("48-14"); _48_14_.className = "Blank";
        const _49_14_ = document.getElementById("49-14"); _49_14_.className = "Blank";
        const _21_21_ = document.getElementById("21-21"); _21_21_.className = "Blank";
        const _28_21_ = document.getElementById("28-21"); _28_21_.className = "Blank";
        const _47_21_ = document.getElementById("47-21"); _47_21_.className = "Blank";
    }
    
    //1922 Scorigami
    if (output.innerHTML == "1922") {
        const _37_3_ = document.getElementById("37-3"); _37_3_.className = "Scorigami";
        const _62_3_ = document.getElementById("62-3"); _62_3_.className = "Scorigami";
        const _43_6_ = document.getElementById("43-6"); _43_6_.className = "Scorigami";
        const _55_6_ = document.getElementById("55-6"); _55_6_.className = "Scorigami";
        const _87_6_ = document.getElementById("87-6"); _87_6_.className = "Scorigami";
        const _35_9_ = document.getElementById("35-9"); _35_9_.className = "Scorigami";
        const _41_10_ = document.getElementById("41-10"); _41_10_.className = "Scorigami";
        const _43_13_ = document.getElementById("43-13"); _43_13_.className = "Scorigami";
        const _60_13_ = document.getElementById("60-13"); _60_13_.className = "Scorigami";
        const _61_13_ = document.getElementById("61-13"); _61_13_.className = "Scorigami";
        const _82_13_ = document.getElementById("82-13"); _82_13_.className = "Scorigami";
        const _45_14_ = document.getElementById("45-14"); _45_14_.className = "Scorigami";
        const _47_14_ = document.getElementById("47-14"); _47_14_.className = "Scorigami";
        const _58_14_ = document.getElementById("58-14"); _58_14_.className = "Scorigami";
        const _20_15_ = document.getElementById("20-15"); _20_15_.className = "Scorigami";
        const _21_18_ = document.getElementById("21-18"); _21_18_.className = "Scorigami";
        const _31_18_ = document.getElementById("31-18"); _31_18_.className = "Scorigami";
        const _35_21_ = document.getElementById("35-21"); _35_21_.className = "Scorigami";
    }
    if (output.innerHTML > "1922") {
        const _37_3_ = document.getElementById("37-3"); _37_3_.className = "PastScorigami";
        const _62_3_ = document.getElementById("62-3"); _62_3_.className = "PastScorigami";
        const _43_6_ = document.getElementById("43-6"); _43_6_.className = "PastScorigami";
        const _55_6_ = document.getElementById("55-6"); _55_6_.className = "PastScorigami";
        const _87_6_ = document.getElementById("87-6"); _87_6_.className = "PastScorigami";
        const _35_9_ = document.getElementById("35-9"); _35_9_.className = "PastScorigami";
        const _41_10_ = document.getElementById("41-10"); _41_10_.className = "PastScorigami";
        const _43_13_ = document.getElementById("43-13"); _43_13_.className = "PastScorigami";
        const _60_13_ = document.getElementById("60-13"); _60_13_.className = "PastScorigami";
        const _61_13_ = document.getElementById("61-13"); _61_13_.className = "PastScorigami";
        const _82_13_ = document.getElementById("82-13"); _82_13_.className = "PastScorigami";
        const _45_14_ = document.getElementById("45-14"); _45_14_.className = "PastScorigami";
        const _47_14_ = document.getElementById("47-14"); _47_14_.className = "PastScorigami";
        const _58_14_ = document.getElementById("58-14"); _58_14_.className = "PastScorigami";
        const _20_15_ = document.getElementById("20-15"); _20_15_.className = "PastScorigami";
        const _21_18_ = document.getElementById("21-18"); _21_18_.className = "PastScorigami";
        const _31_18_ = document.getElementById("31-18"); _31_18_.className = "PastScorigami";
        const _35_21_ = document.getElementById("35-21"); _35_21_.className = "PastScorigami";
    }
    if (output.innerHTML < "1922") {
        const _37_3_ = document.getElementById("37-3"); _37_3_.className = "Blank";
        const _62_3_ = document.getElementById("62-3"); _62_3_.className = "Blank";
        const _43_6_ = document.getElementById("43-6"); _43_6_.className = "Blank";
        const _55_6_ = document.getElementById("55-6"); _55_6_.className = "Blank";
        const _87_6_ = document.getElementById("87-6"); _87_6_.className = "Blank";
        const _35_9_ = document.getElementById("35-9"); _35_9_.className = "Blank";
        const _41_10_ = document.getElementById("41-10"); _41_10_.className = "Blank";
        const _43_13_ = document.getElementById("43-13"); _43_13_.className = "Blank";
        const _60_13_ = document.getElementById("60-13"); _60_13_.className = "Blank";
        const _61_13_ = document.getElementById("61-13"); _61_13_.className = "Blank";
        const _82_13_ = document.getElementById("82-13"); _82_13_.className = "Blank";
        const _45_14_ = document.getElementById("45-14"); _45_14_.className = "Blank";
        const _47_14_ = document.getElementById("47-14"); _47_14_.className = "Blank";
        const _58_14_ = document.getElementById("58-14"); _58_14_.className = "Blank";
        const _20_15_ = document.getElementById("20-15"); _20_15_.className = "Blank";
        const _21_18_ = document.getElementById("21-18"); _21_18_.className = "Blank";
        const _31_18_ = document.getElementById("31-18"); _31_18_.className = "Blank";
        const _35_21_ = document.getElementById("35-21"); _35_21_.className = "Blank";
    }
    
    //1923 Scorigami
    if (output.innerHTML == "1923") {
        const _25_2_ = document.getElementById("25-2"); _25_2_.className = "Scorigami";
        const _27_2_ = document.getElementById("27-2"); _27_2_.className = "Scorigami";
        const _30_3_ = document.getElementById("30-3"); _30_3_.className = "Scorigami";
        const _105_3_ = document.getElementById("105-3"); _105_3_.className = "Scorigami";
        const _69_6_ = document.getElementById("69-6"); _69_6_.className = "Scorigami";
        const _51_7_ = document.getElementById("51-7"); _51_7_.className = "Scorigami";
        const _19_8_ = document.getElementById("19-8"); _19_8_.className = "Scorigami";
        const _31_10_ = document.getElementById("31-10"); _31_10_.className = "Scorigami";
        const _26_12_ = document.getElementById("26-12"); _26_12_.className = "Scorigami";
        const _29_14_ = document.getElementById("29-14"); _29_14_.className = "Scorigami";
        const _30_14_ = document.getElementById("30-14"); _30_14_.className = "Scorigami";
        const _16_15_ = document.getElementById("16-15"); _16_15_.className = "Scorigami";
        const _27_18_ = document.getElementById("27-18"); _27_18_.className = "Scorigami";
        const _19_19_ = document.getElementById("19-19"); _19_19_.className = "Scorigami";
        const _26_20_ = document.getElementById("26-20"); _26_20_.className = "Scorigami";
        const _23_23_ = document.getElementById("23-23"); _23_23_.className = "Scorigami";
    }
    if (output.innerHTML > "1923") {
        const _25_2_ = document.getElementById("25-2"); _25_2_.className = "PastScorigami";
        const _27_2_ = document.getElementById("27-2"); _27_2_.className = "PastScorigami";
        const _30_3_ = document.getElementById("30-3"); _30_3_.className = "PastScorigami";
        const _105_3_ = document.getElementById("105-3"); _105_3_.className = "PastScorigami";
        const _69_6_ = document.getElementById("69-6"); _69_6_.className = "PastScorigami";
        const _51_7_ = document.getElementById("51-7"); _51_7_.className = "PastScorigami";
        const _19_8_ = document.getElementById("19-8"); _19_8_.className = "PastScorigami";
        const _31_10_ = document.getElementById("31-10"); _31_10_.className = "PastScorigami";
        const _26_12_ = document.getElementById("26-12"); _26_12_.className = "PastScorigami";
        const _29_14_ = document.getElementById("29-14"); _29_14_.className = "PastScorigami";
        const _30_14_ = document.getElementById("30-14"); _30_14_.className = "PastScorigami";
        const _16_15_ = document.getElementById("16-15"); _16_15_.className = "PastScorigami";
        const _27_18_ = document.getElementById("27-18"); _27_18_.className = "PastScorigami";
        const _19_19_ = document.getElementById("19-19"); _19_19_.className = "PastScorigami";
        const _26_20_ = document.getElementById("26-20"); _26_20_.className = "PastScorigami";
        const _23_23_ = document.getElementById("23-23"); _23_23_.className = "PastScorigami";
    }
    if (output.innerHTML < "1923") {
        const _25_2_ = document.getElementById("25-2"); _25_2_.className = "Blank";
        const _27_2_ = document.getElementById("27-2"); _27_2_.className = "Blank";
        const _30_3_ = document.getElementById("30-3"); _30_3_.className = "Blank";
        const _105_3_ = document.getElementById("105-3"); _105_3_.className = "Blank";
        const _69_6_ = document.getElementById("69-6"); _69_6_.className = "Blank";
        const _51_7_ = document.getElementById("51-7"); _51_7_.className = "Blank";
        const _19_8_ = document.getElementById("19-8"); _19_8_.className = "Blank";
        const _31_10_ = document.getElementById("31-10"); _31_10_.className = "Blank";
        const _26_12_ = document.getElementById("26-12"); _26_12_.className = "Blank";
        const _29_14_ = document.getElementById("29-14"); _29_14_.className = "Blank";
        const _30_14_ = document.getElementById("30-14"); _30_14_.className = "Blank";
        const _16_15_ = document.getElementById("16-15"); _16_15_.className = "Blank";
        const _27_18_ = document.getElementById("27-18"); _27_18_.className = "Blank";
        const _19_19_ = document.getElementById("19-19"); _19_19_.className = "Blank";
        const _26_20_ = document.getElementById("26-20"); _26_20_.className = "Blank";
        const _23_23_ = document.getElementById("23-23"); _23_23_.className = "Blank";
    }
    
    //1924 Scorigami
    if (output.innerHTML == "1924") {
        const _38_3_ = document.getElementById("38-3"); _38_3_.className = "Scorigami";
        const _106_6_ = document.getElementById("106-6"); _106_6_.className = "Scorigami";
        const _15_13_ = document.getElementById("15-13"); _15_13_.className = "Scorigami";
        const _40_19_ = document.getElementById("40-19"); _40_19_.className = "Scorigami";
    }
    if (output.innerHTML > "1924") {
        const _38_3_ = document.getElementById("38-3"); _38_3_.className = "PastScorigami";
        const _106_6_ = document.getElementById("106-6"); _106_6_.className = "PastScorigami";
        const _15_13_ = document.getElementById("15-13"); _15_13_.className = "PastScorigami";
        const _40_19_ = document.getElementById("40-19"); _40_19_.className = "PastScorigami";
    }
    if (output.innerHTML < "1924") {
        const _38_3_ = document.getElementById("38-3"); _38_3_.className = "Blank";
        const _106_6_ = document.getElementById("106-6"); _106_6_.className = "Blank";
        const _15_13_ = document.getElementById("15-13"); _15_13_.className = "Blank";
        const _40_19_ = document.getElementById("40-19"); _40_19_.className = "Blank";
    }

    //1925 Scorigami
    if (output.innerHTML == "1925") {
        const _64_2_ = document.getElementById("64-2"); _64_2_.className = "Scorigami";
        const _54_3_ = document.getElementById("54-3"); _54_3_.className = "Scorigami";
        const _80_7_ = document.getElementById("80-7"); _80_7_.className = "Scorigami";
        const _37_9_ = document.getElementById("37-9"); _37_9_.className = "Scorigami";
        const _62_13_ = document.getElementById("62-13"); _62_13_.className = "Scorigami";
        const _38_14_ = document.getElementById("38-14"); _38_14_.className = "Scorigami";
        const _43_14_ = document.getElementById("43-14"); _43_14_.className = "Scorigami";
        const _28_16_ = document.getElementById("28-16"); _28_16_.className = "Scorigami";
        const _43_18_ = document.getElementById("43-18"); _43_18_.className = "Scorigami";
        const _34_19_ = document.getElementById("34-19"); _34_19_.className = "Scorigami";
    }
    if (output.innerHTML > "1925") {
        const _64_2_ = document.getElementById("64-2"); _64_2_.className = "PastScorigami";
        const _54_3_ = document.getElementById("54-3"); _54_3_.className = "PastScorigami";
        const _80_7_ = document.getElementById("80-7"); _80_7_.className = "PastScorigami";
        const _37_9_ = document.getElementById("37-9"); _37_9_.className = "PastScorigami";
        const _62_13_ = document.getElementById("62-13"); _62_13_.className = "PastScorigami";
        const _38_14_ = document.getElementById("38-14"); _38_14_.className = "PastScorigami";
        const _43_14_ = document.getElementById("43-14"); _43_14_.className = "PastScorigami";
        const _28_16_ = document.getElementById("28-16"); _28_16_.className = "PastScorigami";
        const _43_18_ = document.getElementById("43-18"); _43_18_.className = "PastScorigami";
        const _34_19_ = document.getElementById("34-19"); _34_19_.className = "PastScorigami";
    }
    if (output.innerHTML < "1925") {
        const _64_2_ = document.getElementById("64-2"); _64_2_.className = "Blank";
        const _54_3_ = document.getElementById("54-3"); _54_3_.className = "Blank";
        const _80_7_ = document.getElementById("80-7"); _80_7_.className = "Blank";
        const _37_9_ = document.getElementById("37-9"); _37_9_.className = "Blank";
        const _62_13_ = document.getElementById("62-13"); _62_13_.className = "Blank";
        const _38_14_ = document.getElementById("38-14"); _38_14_.className = "Blank";
        const _43_14_ = document.getElementById("43-14"); _43_14_.className = "Blank";
        const _28_16_ = document.getElementById("28-16"); _28_16_.className = "Blank";
        const _43_18_ = document.getElementById("43-18"); _43_18_.className = "Blank";
        const _34_19_ = document.getElementById("34-19"); _34_19_.className = "Blank";
    }

    //1926 Scorigami
    if (output.innerHTML == "1926") {
        const _53_7_ = document.getElementById("53-7"); _53_7_.className = "Scorigami";
        const _21_15_ = document.getElementById("21-15"); _21_15_.className = "Scorigami";
        const _33_15_ = document.getElementById("33-15"); _33_15_.className = "Scorigami";
        const _26_19_ = document.getElementById("26-19"); _26_19_.className = "Scorigami";
        const _24_23_ = document.getElementById("24-23"); _24_23_.className = "Scorigami";
        const _32_27_ = document.getElementById("32-27"); _32_27_.className = "Scorigami";
    }
    if (output.innerHTML > "1926") {
        const _53_7_ = document.getElementById("53-7"); _53_7_.className = "PastScorigami";
        const _21_15_ = document.getElementById("21-15"); _21_15_.className = "PastScorigami";
        const _33_15_ = document.getElementById("33-15"); _33_15_.className = "PastScorigami";
        const _26_19_ = document.getElementById("26-19"); _26_19_.className = "PastScorigami";
        const _24_23_ = document.getElementById("24-23"); _24_23_.className = "PastScorigami";
        const _32_27_ = document.getElementById("32-27"); _32_27_.className = "PastScorigami";
    }
    if (output.innerHTML < "1926") {
        const _53_7_ = document.getElementById("53-7"); _53_7_.className = "Blank";
        const _21_15_ = document.getElementById("21-15"); _21_15_.className = "Blank";
        const _33_15_ = document.getElementById("33-15"); _33_15_.className = "Blank";
        const _26_19_ = document.getElementById("26-19"); _26_19_.className = "Blank";
        const _24_23_ = document.getElementById("24-23"); _24_23_.className = "Blank";
        const _32_27_ = document.getElementById("32-27"); _32_27_.className = "Blank";
    }

    //1927 Scorigami
    if (output.innerHTML == "1927") {
        const _73_6_ = document.getElementById("73-6"); _73_6_.className = "Scorigami";
        const _52_12_ = document.getElementById("52-12"); _52_12_.className = "Scorigami";
        const _31_13_ = document.getElementById("31-13"); _31_13_.className = "Scorigami";
        const _39_13_ = document.getElementById("39-13"); _39_13_.className = "Scorigami";
        const _47_13_ = document.getElementById("47-13"); _47_13_.className = "Scorigami";
        const _20_18_ = document.getElementById("20-18"); _20_18_.className = "Scorigami";
        const _28_18_ = document.getElementById("28-18"); _28_18_.className = "Scorigami";
        const _45_18_ = document.getElementById("45-18"); _45_18_.className = "Scorigami";
        const _38_19_ = document.getElementById("38-19"); _38_19_.className = "Scorigami";
        const _33_20_ = document.getElementById("33-20"); _33_20_.className = "Scorigami";
        const _39_20_ = document.getElementById("39-20"); _39_20_.className = "Scorigami";
    }
    if (output.innerHTML > "1927") {
        const _73_6_ = document.getElementById("73-6"); _73_6_.className = "PastScorigami";
        const _52_12_ = document.getElementById("52-12"); _52_12_.className = "PastScorigami";
        const _31_13_ = document.getElementById("31-13"); _31_13_.className = "PastScorigami";
        const _39_13_ = document.getElementById("39-13"); _39_13_.className = "PastScorigami";
        const _47_13_ = document.getElementById("47-13"); _47_13_.className = "PastScorigami";
        const _20_18_ = document.getElementById("20-18"); _20_18_.className = "PastScorigami";
        const _28_18_ = document.getElementById("28-18"); _28_18_.className = "PastScorigami";
        const _45_18_ = document.getElementById("45-18"); _45_18_.className = "PastScorigami";
        const _38_19_ = document.getElementById("38-19"); _38_19_.className = "PastScorigami";
        const _33_20_ = document.getElementById("33-20"); _33_20_.className = "PastScorigami";
        const _39_20_ = document.getElementById("39-20"); _39_20_.className = "PastScorigami";
    }
    if (output.innerHTML < "1927") {
        const _73_6_ = document.getElementById("73-6"); _73_6_.className = "Blank";
        const _52_12_ = document.getElementById("52-12"); _52_12_.className = "Blank";
        const _31_13_ = document.getElementById("31-13"); _31_13_.className = "Blank";
        const _39_13_ = document.getElementById("39-13"); _39_13_.className = "Blank";
        const _47_13_ = document.getElementById("47-13"); _47_13_.className = "Blank";
        const _20_18_ = document.getElementById("20-18"); _20_18_.className = "Blank";
        const _28_18_ = document.getElementById("28-18"); _28_18_.className = "Blank";
        const _45_18_ = document.getElementById("45-18"); _45_18_.className = "Blank";
        const _38_19_ = document.getElementById("38-19"); _38_19_.className = "Blank";
        const _33_20_ = document.getElementById("33-20"); _33_20_.className = "Blank";
        const _39_20_ = document.getElementById("39-20"); _39_20_.className = "Blank";
    }

    //1928 Scorigami
    if (output.innerHTML == "1928") {
        const _78_7_ = document.getElementById("78-7"); _78_7_.className = "Scorigami";
        const _38_12_ = document.getElementById("38-12"); _38_12_.className = "Scorigami";
        const _32_13_ = document.getElementById("32-13"); _32_13_.className = "Scorigami";
        const _38_18_ = document.getElementById("38-18"); _38_18_.className = "Scorigami";
        const _24_19_ = document.getElementById("24-19"); _24_19_.className = "Scorigami";
        const _28_19_ = document.getElementById("28-19"); _28_19_.className = "Scorigami";
        const _46_20_ = document.getElementById("46-20"); _46_20_.className = "Scorigami";
        const _48_25_ = document.getElementById("48-25"); _48_25_.className = "Scorigami";
    }
    if (output.innerHTML > "1928") {
        const _78_7_ = document.getElementById("78-7"); _78_7_.className = "PastScorigami";
        const _38_12_ = document.getElementById("38-12"); _38_12_.className = "PastScorigami";
        const _32_13_ = document.getElementById("32-13"); _32_13_.className = "PastScorigami";
        const _38_18_ = document.getElementById("38-18"); _38_18_.className = "PastScorigami";
        const _24_19_ = document.getElementById("24-19"); _24_19_.className = "PastScorigami";
        const _28_19_ = document.getElementById("28-19"); _28_19_.className = "PastScorigami";
        const _46_20_ = document.getElementById("46-20"); _46_20_.className = "PastScorigami";
        const _48_25_ = document.getElementById("48-25"); _48_25_.className = "PastScorigami";
    }
    if (output.innerHTML < "1928") {
        const _78_7_ = document.getElementById("78-7"); _78_7_.className = "Blank";
        const _38_12_ = document.getElementById("38-12"); _38_12_.className = "Blank";
        const _32_13_ = document.getElementById("32-13"); _32_13_.className = "Blank";
        const _38_18_ = document.getElementById("38-18"); _38_18_.className = "Blank";
        const _24_19_ = document.getElementById("24-19"); _24_19_.className = "Blank";
        const _28_19_ = document.getElementById("28-19"); _28_19_.className = "Blank";
        const _46_20_ = document.getElementById("46-20"); _46_20_.className = "Blank";
        const _48_25_ = document.getElementById("48-25"); _48_25_.className = "Blank";
    }

    //1929 Scorigami
    if (output.innerHTML == "1929") {
        const _85_6_ = document.getElementById("85-6"); _85_6_.className = "Scorigami";
        const _71_7_ = document.getElementById("71-7"); _71_7_.className = "Scorigami";
        const _89_7_ = document.getElementById("89-7"); _89_7_.className = "Scorigami";
        const _39_8_ = document.getElementById("39-8"); _39_8_.className = "Scorigami";
        const _31_12_ = document.getElementById("31-12"); _31_12_.className = "Scorigami";
        const _45_13_ = document.getElementById("45-13"); _45_13_.className = "Scorigami";
        const _30_16_ = document.getElementById("30-16"); _30_16_.className = "Scorigami";
        const _32_18_ = document.getElementById("32-18"); _32_18_.className = "Scorigami";
        const _53_18_ = document.getElementById("53-18"); _53_18_.className = "Scorigami";
        const _21_19_ = document.getElementById("21-19"); _21_19_.className = "Scorigami";
        const _27_19_ = document.getElementById("27-19"); _27_19_.className = "Scorigami";
        const _33_19_ = document.getElementById("33-19"); _33_19_.className = "Scorigami";
        const _31_20_ = document.getElementById("31-20"); _31_20_.className = "Scorigami";
        const _54_21_ = document.getElementById("54-21"); _54_21_.className = "Scorigami";
        const _25_23_ = document.getElementById("25-23"); _25_23_.className = "Scorigami";
    }
    if (output.innerHTML > "1929") {
        const _85_6_ = document.getElementById("85-6"); _85_6_.className = "PastScorigami";
        const _71_7_ = document.getElementById("71-7"); _71_7_.className = "PastScorigami";
        const _89_7_ = document.getElementById("89-7"); _89_7_.className = "PastScorigami";
        const _39_8_ = document.getElementById("39-8"); _39_8_.className = "PastScorigami";
        const _31_12_ = document.getElementById("31-12"); _31_12_.className = "PastScorigami";
        const _45_13_ = document.getElementById("45-13"); _45_13_.className = "PastScorigami";
        const _30_16_ = document.getElementById("30-16"); _30_16_.className = "PastScorigami";
        const _32_18_ = document.getElementById("32-18"); _32_18_.className = "PastScorigami";
        const _53_18_ = document.getElementById("53-18"); _53_18_.className = "PastScorigami";
        const _21_19_ = document.getElementById("21-19"); _21_19_.className = "PastScorigami";
        const _27_19_ = document.getElementById("27-19"); _27_19_.className = "PastScorigami";
        const _33_19_ = document.getElementById("33-19"); _33_19_.className = "PastScorigami";
        const _31_20_ = document.getElementById("31-20"); _31_20_.className = "PastScorigami";
        const _54_21_ = document.getElementById("54-21"); _54_21_.className = "PastScorigami";
        const _25_23_ = document.getElementById("25-23"); _25_23_.className = "PastScorigami";
    }
    if (output.innerHTML < "1929") {
        const _85_6_ = document.getElementById("85-6"); _85_6_.className = "Blank";
        const _71_7_ = document.getElementById("71-7"); _71_7_.className = "Blank";
        const _89_7_ = document.getElementById("89-7"); _89_7_.className = "Blank";
        const _39_8_ = document.getElementById("39-8"); _39_8_.className = "Blank";
        const _31_12_ = document.getElementById("31-12"); _31_12_.className = "Blank";
        const _45_13_ = document.getElementById("45-13"); _45_13_.className = "Blank";
        const _30_16_ = document.getElementById("30-16"); _30_16_.className = "Blank";
        const _32_18_ = document.getElementById("32-18"); _32_18_.className = "Blank";
        const _53_18_ = document.getElementById("53-18"); _53_18_.className = "Blank";
        const _21_19_ = document.getElementById("21-19"); _21_19_.className = "Blank";
        const _27_19_ = document.getElementById("27-19"); _27_19_.className = "Blank";
        const _33_19_ = document.getElementById("33-19"); _33_19_.className = "Blank";
        const _31_20_ = document.getElementById("31-20"); _31_20_.className = "Blank";
        const _54_21_ = document.getElementById("54-21"); _54_21_.className = "Blank";
        const _25_23_ = document.getElementById("25-23"); _25_23_.className = "Blank";
    }

    //1930 Scorigami
    if (output.innerHTML == "1930") {
        const _75_2_ = document.getElementById("75-2"); _75_2_.className = "Scorigami";
        const _7_4_ = document.getElementById("7-4"); _7_4_.className = "Scorigami";
        const _40_8_ = document.getElementById("40-8"); _40_8_.className = "Scorigami";
        const _67_12_ = document.getElementById("67-12"); _67_12_.className = "Scorigami";
        const _40_13_ = document.getElementById("40-13"); _40_13_.className = "Scorigami";
        const _37_14_ = document.getElementById("37-14"); _37_14_.className = "Scorigami";
        const _61_14_ = document.getElementById("61-14"); _61_14_.className = "Scorigami";
        const _35_19_ = document.getElementById("35-19"); _35_19_.className = "Scorigami";
        const _49_20_ = document.getElementById("49-20"); _49_20_.className = "Scorigami";
        const _60_20_ = document.getElementById("60-20"); _60_20_.className = "Scorigami";
        const _39_21_ = document.getElementById("39-21"); _39_21_.className = "Scorigami";
    }
    if (output.innerHTML > "1930") {
        const _75_2_ = document.getElementById("75-2"); _75_2_.className = "PastScorigami";
        const _7_4_ = document.getElementById("7-4"); _7_4_.className = "PastScorigami";
        const _40_8_ = document.getElementById("40-8"); _40_8_.className = "PastScorigami";
        const _67_12_ = document.getElementById("67-12"); _67_12_.className = "PastScorigami";
        const _40_13_ = document.getElementById("40-13"); _40_13_.className = "PastScorigami";
        const _37_14_ = document.getElementById("37-14"); _37_14_.className = "PastScorigami";
        const _61_14_ = document.getElementById("61-14"); _61_14_.className = "PastScorigami";
        const _35_19_ = document.getElementById("35-19"); _35_19_.className = "PastScorigami";
        const _49_20_ = document.getElementById("49-20"); _49_20_.className = "PastScorigami";
        const _60_20_ = document.getElementById("60-20"); _60_20_.className = "PastScorigami";
        const _39_21_ = document.getElementById("39-21"); _39_21_.className = "PastScorigami";
    }
    if (output.innerHTML < "1930") {
        const _75_2_ = document.getElementById("75-2"); _75_2_.className = "Blank";
        const _7_4_ = document.getElementById("7-4"); _7_4_.className = "Blank";
        const _40_8_ = document.getElementById("40-8"); _40_8_.className = "Blank";
        const _67_12_ = document.getElementById("67-12"); _67_12_.className = "Blank";
        const _40_13_ = document.getElementById("40-13"); _40_13_.className = "Blank";
        const _37_14_ = document.getElementById("37-14"); _37_14_.className = "Blank";
        const _61_14_ = document.getElementById("61-14"); _61_14_.className = "Blank";
        const _35_19_ = document.getElementById("35-19"); _35_19_.className = "Blank";
        const _49_20_ = document.getElementById("49-20"); _49_20_.className = "Blank";
        const _60_20_ = document.getElementById("60-20"); _60_20_.className = "Blank";
        const _39_21_ = document.getElementById("39-21"); _39_21_.className = "Blank";
    }

    //1931 Scorigami
    if (output.innerHTML == "1931") {
        const _49_6_ = document.getElementById("49-6"); _49_6_.className = "Scorigami";
        const _74_7_ = document.getElementById("74-7"); _74_7_.className = "Scorigami";
        const _34_9_ = document.getElementById("34-9"); _34_9_.className = "Scorigami";
        const _39_9_ = document.getElementById("39-9"); _39_9_.className = "Scorigami";
        const _39_12_ = document.getElementById("39-12"); _39_12_.className = "Scorigami";
        const _51_14_ = document.getElementById("51-14"); _51_14_.className = "Scorigami";
        const _39_18_ = document.getElementById("39-18"); _39_18_.className = "Scorigami";
        const _32_20_ = document.getElementById("32-20"); _32_20_.className = "Scorigami";
        const _38_20_ = document.getElementById("38-20"); _38_20_.className = "Scorigami";
        const _41_20_ = document.getElementById("41-20"); _41_20_.className = "Scorigami";
        const _26_21_ = document.getElementById("26-21"); _26_21_.className = "Scorigami";
        const _33_33_ = document.getElementById("33-33"); _33_33_.className = "Scorigami";
    }
    if (output.innerHTML > "1931") {
        const _49_6_ = document.getElementById("49-6"); _49_6_.className = "PastScorigami";
        const _74_7_ = document.getElementById("74-7"); _74_7_.className = "PastScorigami";
        const _34_9_ = document.getElementById("34-9"); _34_9_.className = "PastScorigami";
        const _39_9_ = document.getElementById("39-9"); _39_9_.className = "PastScorigami";
        const _39_12_ = document.getElementById("39-12"); _39_12_.className = "PastScorigami";
        const _51_14_ = document.getElementById("51-14"); _51_14_.className = "PastScorigami";
        const _39_18_ = document.getElementById("39-18"); _39_18_.className = "PastScorigami";
        const _32_20_ = document.getElementById("32-20"); _32_20_.className = "PastScorigami";
        const _38_20_ = document.getElementById("38-20"); _38_20_.className = "PastScorigami";
        const _41_20_ = document.getElementById("41-20"); _41_20_.className = "PastScorigami";
        const _26_21_ = document.getElementById("26-21"); _26_21_.className = "PastScorigami";
        const _33_33_ = document.getElementById("33-33"); _33_33_.className = "PastScorigami";
    }
    if (output.innerHTML < "1931") {
        const _49_6_ = document.getElementById("49-6"); _49_6_.className = "Blank";
        const _74_7_ = document.getElementById("74-7"); _74_7_.className = "Blank";
        const _34_9_ = document.getElementById("34-9"); _34_9_.className = "Blank";
        const _39_9_ = document.getElementById("39-9"); _39_9_.className = "Blank";
        const _39_12_ = document.getElementById("39-12"); _39_12_.className = "Blank";
        const _51_14_ = document.getElementById("51-14"); _51_14_.className = "Blank";
        const _39_18_ = document.getElementById("39-18"); _39_18_.className = "Blank";
        const _32_20_ = document.getElementById("32-20"); _32_20_.className = "Blank";
        const _38_20_ = document.getElementById("38-20"); _38_20_.className = "Blank";
        const _41_20_ = document.getElementById("41-20"); _41_20_.className = "Blank";
        const _26_21_ = document.getElementById("26-21"); _26_21_.className = "Blank";
        const _33_33_ = document.getElementById("33-33"); _33_33_.className = "Blank";
    }

    //1932 Scorigami
    if (output.innerHTML == "1932") {
        const _46_13_ = document.getElementById("46-13"); _46_13_.className = "Scorigami";
        const _56_13_ = document.getElementById("56-13"); _56_13_.className = "Scorigami";
        const _34_25_ = document.getElementById("34-25"); _34_25_.className = "Scorigami";
    }
    if (output.innerHTML > "1932") {
        const _46_13_ = document.getElementById("46-13"); _46_13_.className = "PastScorigami";
        const _56_13_ = document.getElementById("56-13"); _56_13_.className = "PastScorigami";
        const _34_25_ = document.getElementById("34-25"); _34_25_.className = "PastScorigami";
    }
    if (output.innerHTML < "1932") {
        const _46_13_ = document.getElementById("46-13"); _46_13_.className = "Blank";
        const _56_13_ = document.getElementById("56-13"); _56_13_.className = "Blank";
        const _34_25_ = document.getElementById("34-25"); _34_25_.className = "Blank";
    }

    //1933 Scorigami
    if (output.innerHTML == "1933") {
        const _39_2_ = document.getElementById("39-2"); _39_2_.className = "Scorigami";
        const _26_9_ = document.getElementById("26-9"); _26_9_.className = "Scorigami";
        const _54_12_ = document.getElementById("54-12"); _54_12_.className = "Scorigami";
        const _19_17_ = document.getElementById("19-17"); _19_17_.className = "Scorigami";
    }
    if (output.innerHTML > "1933") {
        const _39_2_ = document.getElementById("39-2"); _39_2_.className = "PastScorigami";
        const _26_9_ = document.getElementById("26-9"); _26_9_.className = "PastScorigami";
        const _54_12_ = document.getElementById("54-12"); _54_12_.className = "PastScorigami";
        const _19_17_ = document.getElementById("19-17"); _19_17_.className = "PastScorigami";
    }
    if (output.innerHTML < "1933") {
        const _39_2_ = document.getElementById("39-2"); _39_2_.className = "Blank";
        const _26_9_ = document.getElementById("26-9"); _26_9_.className = "Blank";
        const _54_12_ = document.getElementById("54-12"); _54_12_.className = "Blank";
        const _19_17_ = document.getElementById("19-17"); _19_17_.className = "Blank";
    }

    //1934 Scorigami
    if (output.innerHTML == "1934") {
        const _76_7_ = document.getElementById("76-7"); _76_7_.className = "Scorigami";
        const _56_12_ = document.getElementById("56-12"); _56_12_.className = "Scorigami";
        const _48_19_ = document.getElementById("48-19"); _48_19_.className = "Scorigami";
        const _27_20_ = document.getElementById("27-20"); _27_20_.className = "Scorigami";
    }
    if (output.innerHTML > "1934") {
        const _76_7_ = document.getElementById("76-7"); _76_7_.className = "PastScorigami";
        const _56_12_ = document.getElementById("56-12"); _56_12_.className = "PastScorigami";
        const _48_19_ = document.getElementById("48-19"); _48_19_.className = "PastScorigami";
        const _27_20_ = document.getElementById("27-20"); _27_20_.className = "PastScorigami";
    }
    if (output.innerHTML < "1934") {
        const _76_7_ = document.getElementById("76-7"); _76_7_.className = "Blank";
        const _56_12_ = document.getElementById("56-12"); _56_12_.className = "Blank";
        const _48_19_ = document.getElementById("48-19"); _48_19_.className = "Blank";
        const _27_20_ = document.getElementById("27-20"); _27_20_.className = "Blank";
    }

    //1935 Scorigami
    if (output.innerHTML == "1935") {
        const _85_7_ = document.getElementById("85-7"); _85_7_.className = "Scorigami";
        const _50_12_ = document.getElementById("50-12"); _50_12_.className = "Scorigami";
        const _19_15_ = document.getElementById("19-15"); _19_15_.className = "Scorigami";
        const _19_18_ = document.getElementById("19-18"); _19_18_.className = "Scorigami";
    }
    if (output.innerHTML > "1935") {
        const _85_7_ = document.getElementById("85-7"); _85_7_.className = "PastScorigami";
        const _50_12_ = document.getElementById("50-12"); _50_12_.className = "PastScorigami";
        const _19_15_ = document.getElementById("19-15"); _19_15_.className = "PastScorigami";
        const _19_18_ = document.getElementById("19-18"); _19_18_.className = "PastScorigami";
    }
    if (output.innerHTML < "1935") {
        const _85_7_ = document.getElementById("85-7"); _85_7_.className = "Blank";
        const _50_12_ = document.getElementById("50-12"); _50_12_.className = "Blank";
        const _19_15_ = document.getElementById("19-15"); _19_15_.className = "Blank";
        const _19_18_ = document.getElementById("19-18"); _19_18_.className = "Blank";
    }

    //1936 Scorigami
    if (output.innerHTML == "1936") {
        const _44_14_ = document.getElementById("44-14"); _44_14_.className = "Scorigami";
        const _59_14_ = document.getElementById("59-14"); _59_14_.className = "Scorigami";
        const _26_18_ = document.getElementById("26-18"); _26_18_.className = "Scorigami";
        const _32_19_ = document.getElementById("32-19"); _32_19_.className = "Scorigami";
        const _47_19_ = document.getElementById("47-19"); _47_19_.className = "Scorigami";
        const _26_23_ = document.getElementById("26-23"); _26_23_.className = "Scorigami";
    }
    if (output.innerHTML > "1936") {
        const _44_14_ = document.getElementById("44-14"); _44_14_.className = "PastScorigami";
        const _59_14_ = document.getElementById("59-14"); _59_14_.className = "PastScorigami";
        const _26_18_ = document.getElementById("26-18"); _26_18_.className = "PastScorigami";
        const _32_19_ = document.getElementById("32-19"); _32_19_.className = "PastScorigami";
        const _47_19_ = document.getElementById("47-19"); _47_19_.className = "PastScorigami";
        const _26_23_ = document.getElementById("26-23"); _26_23_.className = "PastScorigami";
    }
    if (output.innerHTML < "1936") {
        const _44_14_ = document.getElementById("44-14"); _44_14_.className = "Blank";
        const _59_14_ = document.getElementById("59-14"); _59_14_.className = "Blank";
        const _26_18_ = document.getElementById("26-18"); _26_18_.className = "Blank";
        const _32_19_ = document.getElementById("32-19"); _32_19_.className = "Blank";
        const _47_19_ = document.getElementById("47-19"); _47_19_.className = "Blank";
        const _26_23_ = document.getElementById("26-23"); _26_23_.className = "Blank";
    }

    //1937 Scorigami
    if (output.innerHTML == "1937") {
        const _33_26_ = document.getElementById("33-26"); _33_26_.className = "Scorigami";
    }
    if (output.innerHTML > "1937") {
        const _33_26_ = document.getElementById("33-26"); _33_26_.className = "PastScorigami";
    }
    if (output.innerHTML < "1937") {
        const _33_26_ = document.getElementById("33-26"); _33_26_.className = "Blank";
    }

    //1938 Scorigami
    if (output.innerHTML == "1938") {
        const _48_9_ = document.getElementById("48-9"); _48_9_.className = "Scorigami";
        const _63_12_ = document.getElementById("63-12"); _63_12_.className = "Scorigami";
        const _23_19_ = document.getElementById("23-19"); _23_19_.className = "Scorigami";
        const _36_27_ = document.getElementById("36-27"); _36_27_.className = "Scorigami";
    }
    if (output.innerHTML > "1938") {
        const _48_9_ = document.getElementById("48-9"); _48_9_.className = "PastScorigami";
        const _63_12_ = document.getElementById("63-12"); _63_12_.className = "PastScorigami";
        const _23_19_ = document.getElementById("23-19"); _23_19_.className = "PastScorigami";
        const _36_27_ = document.getElementById("36-27"); _36_27_.className = "PastScorigami";
    }
    if (output.innerHTML < "1938") {
        const _48_9_ = document.getElementById("48-9"); _48_9_.className = "Blank";
        const _63_12_ = document.getElementById("63-12"); _63_12_.className = "Blank";
        const _23_19_ = document.getElementById("23-19"); _23_19_.className = "Blank";
        const _36_27_ = document.getElementById("36-27"); _36_27_.className = "Blank";
    }

    //1939 Scorigami
    if (output.innerHTML == "1939") {
        const _22_19_ = document.getElementById("22-19"); _22_19_.className = "Scorigami";
        const _25_19_ = document.getElementById("25-19"); _25_19_.className = "Scorigami";
        const _32_29_ = document.getElementById("32-29"); _32_29_.className = "Scorigami";
    }
    if (output.innerHTML > "1939") {
        const _22_19_ = document.getElementById("22-19"); _22_19_.className = "PastScorigami";
        const _25_19_ = document.getElementById("25-19"); _25_19_.className = "PastScorigami";
        const _32_29_ = document.getElementById("32-29"); _32_29_.className = "PastScorigami";
    }
    if (output.innerHTML < "1939") {
        const _22_19_ = document.getElementById("22-19"); _22_19_.className = "Blank";
        const _25_19_ = document.getElementById("25-19"); _25_19_.className = "Blank";
        const _32_29_ = document.getElementById("32-29"); _32_29_.className = "Blank";
    }

    //1940 Scorigami
    if (output.innerHTML == "1940") {
        const _31_19_ = document.getElementById("31-19"); _31_19_.className = "Scorigami";
        const _22_20_ = document.getElementById("22-20"); _22_20_.className = "Scorigami";
        const _45_20_ = document.getElementById("45-20"); _45_20_.className = "Scorigami";
        const _25_21_ = document.getElementById("25-21"); _25_21_.className = "Scorigami";
        const _38_21_ = document.getElementById("38-21"); _38_21_.className = "Scorigami";
        const _33_25_ = document.getElementById("33-25"); _33_25_.className = "Scorigami";
        const _40_26_ = document.getElementById("40-26"); _40_26_.className = "Scorigami";
        const _27_27_ = document.getElementById("27-27"); _27_27_.className = "Scorigami";
        const _29_27_ = document.getElementById("29-27"); _29_27_.className = "Scorigami";
        const _46_28_ = document.getElementById("46-28"); _46_28_.className = "Scorigami";
        const _45_41_ = document.getElementById("45-41"); _45_41_.className = "Scorigami";
    }
    if (output.innerHTML > "1940") {
        const _31_19_ = document.getElementById("31-19"); _31_19_.className = "PastScorigami";
        const _22_20_ = document.getElementById("22-20"); _22_20_.className = "PastScorigami";
        const _45_20_ = document.getElementById("45-20"); _45_20_.className = "PastScorigami";
        const _25_21_ = document.getElementById("25-21"); _25_21_.className = "PastScorigami";
        const _38_21_ = document.getElementById("38-21"); _38_21_.className = "PastScorigami";
        const _33_25_ = document.getElementById("33-25"); _33_25_.className = "PastScorigami";
        const _40_26_ = document.getElementById("40-26"); _40_26_.className = "PastScorigami";
        const _27_27_ = document.getElementById("27-27"); _27_27_.className = "PastScorigami";
        const _29_27_ = document.getElementById("29-27"); _29_27_.className = "PastScorigami";
        const _46_28_ = document.getElementById("46-28"); _46_28_.className = "PastScorigami";
        const _45_41_ = document.getElementById("45-41"); _45_41_.className = "PastScorigami";
    }
    if (output.innerHTML < "1940") {
        const _31_19_ = document.getElementById("31-19"); _31_19_.className = "Blank";
        const _22_20_ = document.getElementById("22-20"); _22_20_.className = "Blank";
        const _45_20_ = document.getElementById("45-20"); _45_20_.className = "Blank";
        const _25_21_ = document.getElementById("25-21"); _25_21_.className = "Blank";
        const _38_21_ = document.getElementById("38-21"); _38_21_.className = "Blank";
        const _33_25_ = document.getElementById("33-25"); _33_25_.className = "Blank";
        const _40_26_ = document.getElementById("40-26"); _40_26_.className = "Blank";
        const _27_27_ = document.getElementById("27-27"); _27_27_.className = "Blank";
        const _29_27_ = document.getElementById("29-27"); _29_27_.className = "Blank";
        const _46_28_ = document.getElementById("46-28"); _46_28_.className = "Blank";
        const _45_41_ = document.getElementById("45-41"); _45_41_.className = "Blank";
    }

    //1941 Scorigami
    if (output.innerHTML == "1941") {
        const _30_9_ = document.getElementById("30-9"); _30_9_.className = "Scorigami";
        const _52_13_ = document.getElementById("52-13"); _52_13_.className = "Scorigami";
        const _39_15_ = document.getElementById("39-15"); _39_15_.className = "Scorigami";
        const _29_21_ = document.getElementById("29-21"); _29_21_.className = "Scorigami";
        const _30_21_ = document.getElementById("30-21"); _30_21_.className = "Scorigami";
        const _27_25_ = document.getElementById("27-25"); _27_25_.className = "Scorigami";
        const _42_26_ = document.getElementById("42-26"); _42_26_.className = "Scorigami";
        const _30_27_ = document.getElementById("30-27"); _30_27_.className = "Scorigami";
        const _47_27_ = document.getElementById("47-27"); _47_27_.className = "Scorigami";
        const _46_34_ = document.getElementById("46-34"); _46_34_.className = "Scorigami";
    }
    if (output.innerHTML > "1941") {
        const _30_9_ = document.getElementById("30-9"); _30_9_.className = "PastScorigami";
        const _52_13_ = document.getElementById("52-13"); _52_13_.className = "PastScorigami";
        const _39_15_ = document.getElementById("39-15"); _39_15_.className = "PastScorigami";
        const _29_21_ = document.getElementById("29-21"); _29_21_.className = "PastScorigami";
        const _30_21_ = document.getElementById("30-21"); _30_21_.className = "PastScorigami";
        const _27_25_ = document.getElementById("27-25"); _27_25_.className = "PastScorigami";
        const _42_26_ = document.getElementById("42-26"); _42_26_.className = "PastScorigami";
        const _30_27_ = document.getElementById("30-27"); _30_27_.className = "PastScorigami";
        const _47_27_ = document.getElementById("47-27"); _47_27_.className = "PastScorigami";
        const _46_34_ = document.getElementById("46-34"); _46_34_.className = "PastScorigami";
    }
    if (output.innerHTML < "1941") {
        const _30_9_ = document.getElementById("30-9"); _30_9_.className = "Blank";
        const _52_13_ = document.getElementById("52-13"); _52_13_.className = "Blank";
        const _39_15_ = document.getElementById("39-15"); _39_15_.className = "Blank";
        const _29_21_ = document.getElementById("29-21"); _29_21_.className = "Blank";
        const _30_21_ = document.getElementById("30-21"); _30_21_.className = "Blank";
        const _27_25_ = document.getElementById("27-25"); _27_25_.className = "Blank";
        const _42_26_ = document.getElementById("42-26"); _42_26_.className = "Blank";
        const _30_27_ = document.getElementById("30-27"); _30_27_.className = "Blank";
        const _47_27_ = document.getElementById("47-27"); _47_27_.className = "Blank";
        const _46_34_ = document.getElementById("46-34"); _46_34_.className = "Blank";
    }

    //1942 Scorigami
    if (output.innerHTML == "1942") {
        const _38_9_ = document.getElementById("38-9"); _38_9_.className = "Scorigami";
        const _40_9_ = document.getElementById("40-9"); _40_9_.className = "Scorigami";
        const _55_12_ = document.getElementById("55-12"); _55_12_.className = "Scorigami";
        const _34_16_ = document.getElementById("34-16"); _34_16_.className = "Scorigami";
        const _68_16_ = document.getElementById("68-16"); _68_16_.className = "Scorigami";
        const _59_19_ = document.getElementById("59-19"); _59_19_.className = "Scorigami";
        const _44_20_ = document.getElementById("44-20"); _44_20_.className = "Scorigami";
        const _32_21_ = document.getElementById("32-21"); _32_21_.className = "Scorigami";
        const _37_21_ = document.getElementById("37-21"); _37_21_.className = "Scorigami";
        const _35_26_ = document.getElementById("35-26"); _35_26_.className = "Scorigami";
        const _32_28_ = document.getElementById("32-28"); _32_28_.className = "Scorigami";
    }
    if (output.innerHTML > "1942") {
        const _38_9_ = document.getElementById("38-9"); _38_9_.className = "PastScorigami";
        const _40_9_ = document.getElementById("40-9"); _40_9_.className = "PastScorigami";
        const _55_12_ = document.getElementById("55-12"); _55_12_.className = "PastScorigami";
        const _34_16_ = document.getElementById("34-16"); _34_16_.className = "PastScorigami";
        const _68_16_ = document.getElementById("68-16"); _68_16_.className = "PastScorigami";
        const _59_19_ = document.getElementById("59-19"); _59_19_.className = "PastScorigami";
        const _44_20_ = document.getElementById("44-20"); _44_20_.className = "PastScorigami";
        const _32_21_ = document.getElementById("32-21"); _32_21_.className = "PastScorigami";
        const _37_21_ = document.getElementById("37-21"); _37_21_.className = "PastScorigami";
        const _35_26_ = document.getElementById("35-26"); _35_26_.className = "PastScorigami";
        const _32_28_ = document.getElementById("32-28"); _32_28_.className = "PastScorigami";
    }
    if (output.innerHTML < "1942") {
        const _38_9_ = document.getElementById("38-9"); _38_9_.className = "Blank";
        const _40_9_ = document.getElementById("40-9"); _40_9_.className = "Blank";
        const _55_12_ = document.getElementById("55-12"); _55_12_.className = "Blank";
        const _34_16_ = document.getElementById("34-16"); _34_16_.className = "Blank";
        const _68_16_ = document.getElementById("68-16"); _68_16_.className = "Blank";
        const _59_19_ = document.getElementById("59-19"); _59_19_.className = "Blank";
        const _44_20_ = document.getElementById("44-20"); _44_20_.className = "Blank";
        const _32_21_ = document.getElementById("32-21"); _32_21_.className = "Blank";
        const _37_21_ = document.getElementById("37-21"); _37_21_.className = "Blank";
        const _35_26_ = document.getElementById("35-26"); _35_26_.className = "Blank";
        const _32_28_ = document.getElementById("32-28"); _32_28_.className = "Blank";
    }

    //1943 Scorigami
    if (output.innerHTML == "1943") {
        const _47_8_ = document.getElementById("47-8"); _47_8_.className = "Scorigami";
        const _35_12_ = document.getElementById("35-12"); _35_12_.className = "Scorigami";
        const _46_19_ = document.getElementById("46-19"); _46_19_.className = "Scorigami";
        const _40_20_ = document.getElementById("40-20"); _40_20_.className = "Scorigami";
        const _54_20_ = document.getElementById("54-20"); _54_20_.className = "Scorigami";
        const _45_22_ = document.getElementById("45-22"); _45_22_.className = "Scorigami";
        const _29_26_ = document.getElementById("29-26"); _29_26_.className = "Scorigami";
        const _34_27_ = document.getElementById("34-27"); _34_27_.className = "Scorigami";
        const _34_31_ = document.getElementById("34-31"); _34_31_.className = "Scorigami";
    }
    if (output.innerHTML > "1943") {
        const _47_8_ = document.getElementById("47-8"); _47_8_.className = "PastScorigami";
        const _35_12_ = document.getElementById("35-12"); _35_12_.className = "PastScorigami";
        const _46_19_ = document.getElementById("46-19"); _46_19_.className = "PastScorigami";
        const _40_20_ = document.getElementById("40-20"); _40_20_.className = "PastScorigami";
        const _54_20_ = document.getElementById("54-20"); _54_20_.className = "PastScorigami";
        const _45_22_ = document.getElementById("45-22"); _45_22_.className = "PastScorigami";
        const _29_26_ = document.getElementById("29-26"); _29_26_.className = "PastScorigami";
        const _34_27_ = document.getElementById("34-27"); _34_27_.className = "PastScorigami";
        const _34_31_ = document.getElementById("34-31"); _34_31_.className = "PastScorigami";
    }
    if (output.innerHTML < "1943") {
        const _47_8_ = document.getElementById("47-8"); _47_8_.className = "Blank";
        const _35_12_ = document.getElementById("35-12"); _35_12_.className = "Blank";
        const _46_19_ = document.getElementById("46-19"); _46_19_.className = "Blank";
        const _40_20_ = document.getElementById("40-20"); _40_20_.className = "Blank";
        const _54_20_ = document.getElementById("54-20"); _54_20_.className = "Blank";
        const _45_22_ = document.getElementById("45-22"); _45_22_.className = "Blank";
        const _29_26_ = document.getElementById("29-26"); _29_26_.className = "Blank";
        const _34_27_ = document.getElementById("34-27"); _34_27_.className = "Blank";
        const _34_31_ = document.getElementById("34-31"); _34_31_.className = "Blank";
    }

    //1944 Scorigami
    if (output.innerHTML == "1944") {
        const _57_12_ = document.getElementById("57-12"); _57_12_.className = "Scorigami";
        const _50_13_ = document.getElementById("50-13"); _50_13_.className = "Scorigami";
        const _55_14_ = document.getElementById("55-14"); _55_14_.className = "Scorigami";
        const _70_14_ = document.getElementById("70-14"); _70_14_.className = "Scorigami";
        const _41_19_ = document.getElementById("41-19"); _41_19_.className = "Scorigami";
        const _54_19_ = document.getElementById("54-19"); _54_19_.className = "Scorigami";
        const _36_20_ = document.getElementById("36-20"); _36_20_.className = "Scorigami";
        const _24_21_ = document.getElementById("24-21"); _24_21_.className = "Scorigami";
        const _24_24_ = document.getElementById("24-24"); _24_24_.className = "Scorigami";
        const _28_27_ = document.getElementById("28-27"); _28_27_.className = "Scorigami";
        const _39_27_ = document.getElementById("39-27"); _39_27_.className = "Scorigami";
        const _46_40_ = document.getElementById("46-40"); _46_40_.className = "Scorigami";
    }
    if (output.innerHTML > "1944") {
        const _57_12_ = document.getElementById("57-12"); _57_12_.className = "PastScorigami";
        const _50_13_ = document.getElementById("50-13"); _50_13_.className = "PastScorigami";
        const _55_14_ = document.getElementById("55-14"); _55_14_.className = "PastScorigami";
        const _70_14_ = document.getElementById("70-14"); _70_14_.className = "PastScorigami";
        const _41_19_ = document.getElementById("41-19"); _41_19_.className = "PastScorigami";
        const _54_19_ = document.getElementById("54-19"); _54_19_.className = "PastScorigami";
        const _36_20_ = document.getElementById("36-20"); _36_20_.className = "PastScorigami";
        const _24_21_ = document.getElementById("24-21"); _24_21_.className = "PastScorigami";
        const _24_24_ = document.getElementById("24-24"); _24_24_.className = "PastScorigami";
        const _28_27_ = document.getElementById("28-27"); _28_27_.className = "PastScorigami";
        const _39_27_ = document.getElementById("39-27"); _39_27_.className = "PastScorigami";
        const _46_40_ = document.getElementById("46-40"); _46_40_.className = "PastScorigami";
    }
    if (output.innerHTML < "1944") {
        const _57_12_ = document.getElementById("57-12"); _57_12_.className = "Blank";
        const _50_13_ = document.getElementById("50-13"); _50_13_.className = "Blank";
        const _55_14_ = document.getElementById("55-14"); _55_14_.className = "Blank";
        const _70_14_ = document.getElementById("70-14"); _70_14_.className = "Blank";
        const _41_19_ = document.getElementById("41-19"); _41_19_.className = "Blank";
        const _54_19_ = document.getElementById("54-19"); _54_19_.className = "Blank";
        const _36_20_ = document.getElementById("36-20"); _36_20_.className = "Blank";
        const _24_21_ = document.getElementById("24-21"); _24_21_.className = "Blank";
        const _24_24_ = document.getElementById("24-24"); _24_24_.className = "Blank";
        const _28_27_ = document.getElementById("28-27"); _28_27_.className = "Blank";
        const _39_27_ = document.getElementById("39-27"); _39_27_.className = "Blank";
        const _46_40_ = document.getElementById("46-40"); _46_40_.className = "Blank";
    }

    //1945 Scorigami
    if (output.innerHTML == "1945") {
        const _43_12_ = document.getElementById("43-12"); _43_12_.className = "Scorigami";
        const _26_15_ = document.getElementById("26-15"); _26_15_.className = "Scorigami";
        const _60_19_ = document.getElementById("60-19"); _60_19_.className = "Scorigami";
        const _47_20_ = document.getElementById("47-20"); _47_20_.className = "Scorigami";
        const _52_20_ = document.getElementById("52-20"); _52_20_.className = "Scorigami";
        const _37_27_ = document.getElementById("37-27"); _37_27_.className = "Scorigami";
        const _40_27_ = document.getElementById("40-27"); _40_27_.className = "Scorigami";
    }
    if (output.innerHTML > "1945") {
        const _43_12_ = document.getElementById("43-12"); _43_12_.className = "PastScorigami";
        const _26_15_ = document.getElementById("26-15"); _26_15_.className = "PastScorigami";
        const _60_19_ = document.getElementById("60-19"); _60_19_.className = "PastScorigami";
        const _47_20_ = document.getElementById("47-20"); _47_20_.className = "PastScorigami";
        const _52_20_ = document.getElementById("52-20"); _52_20_.className = "PastScorigami";
        const _37_27_ = document.getElementById("37-27"); _37_27_.className = "PastScorigami";
        const _40_27_ = document.getElementById("40-27"); _40_27_.className = "PastScorigami";
    }
    if (output.innerHTML < "1945") {
        const _43_12_ = document.getElementById("43-12"); _43_12_.className = "Blank";
        const _26_15_ = document.getElementById("26-15"); _26_15_.className = "Blank";
        const _60_19_ = document.getElementById("60-19"); _60_19_.className = "Blank";
        const _47_20_ = document.getElementById("47-20"); _47_20_.className = "Blank";
        const _52_20_ = document.getElementById("52-20"); _52_20_.className = "Blank";
        const _37_27_ = document.getElementById("37-27"); _37_27_.className = "Blank";
        const _40_27_ = document.getElementById("40-27"); _40_27_.className = "Blank";
    }

    //1946 Scorigami
    if (output.innerHTML == "1946") {
        const _74_2_ = document.getElementById("74-2"); _74_2_.className = "Scorigami";
        const _73_12_ = document.getElementById("73-12"); _73_12_.className = "Scorigami";
        const _56_14_ = document.getElementById("56-14"); _56_14_.className = "Scorigami";
        const _37_18_ = document.getElementById("37-18"); _37_18_.className = "Scorigami";
        const _48_20_ = document.getElementById("48-20"); _48_20_.className = "Scorigami";
        const _46_21_ = document.getElementById("46-21"); _46_21_.className = "Scorigami";
        const _59_21_ = document.getElementById("59-21"); _59_21_.className = "Scorigami";
        const _26_25_ = document.getElementById("26-25"); _26_25_.className = "Scorigami";
        const _27_26_ = document.getElementById("27-26"); _27_26_.className = "Scorigami";
        const _41_27_ = document.getElementById("41-27"); _41_27_.className = "Scorigami";
        const _48_27_ = document.getElementById("48-27"); _48_27_.className = "Scorigami";
        const _33_28_ = document.getElementById("33-28"); _33_28_.className = "Scorigami";
    }
    if (output.innerHTML > "1946") {
        const _74_2_ = document.getElementById("74-2"); _74_2_.className = "PastScorigami";
        const _73_12_ = document.getElementById("73-12"); _73_12_.className = "PastScorigami";
        const _56_14_ = document.getElementById("56-14"); _56_14_.className = "PastScorigami";
        const _37_18_ = document.getElementById("37-18"); _37_18_.className = "PastScorigami";
        const _48_20_ = document.getElementById("48-20"); _48_20_.className = "PastScorigami";
        const _46_21_ = document.getElementById("46-21"); _46_21_.className = "PastScorigami";
        const _59_21_ = document.getElementById("59-21"); _59_21_.className = "PastScorigami";
        const _26_25_ = document.getElementById("26-25"); _26_25_.className = "PastScorigami";
        const _27_26_ = document.getElementById("27-26"); _27_26_.className = "PastScorigami";
        const _41_27_ = document.getElementById("41-27"); _41_27_.className = "PastScorigami";
        const _48_27_ = document.getElementById("48-27"); _48_27_.className = "PastScorigami";
        const _33_28_ = document.getElementById("33-28"); _33_28_.className = "PastScorigami";
    }
    if (output.innerHTML < "1946") {
        const _74_2_ = document.getElementById("74-2"); _74_2_.className = "Blank";
        const _73_12_ = document.getElementById("73-12"); _73_12_.className = "Blank";
        const _56_14_ = document.getElementById("56-14"); _56_14_.className = "Blank";
        const _37_18_ = document.getElementById("37-18"); _37_18_.className = "Blank";
        const _48_20_ = document.getElementById("48-20"); _48_20_.className = "Blank";
        const _46_21_ = document.getElementById("46-21"); _46_21_.className = "Blank";
        const _59_21_ = document.getElementById("59-21"); _59_21_.className = "Blank";
        const _26_25_ = document.getElementById("26-25"); _26_25_.className = "Blank";
        const _27_26_ = document.getElementById("27-26"); _27_26_.className = "Blank";
        const _41_27_ = document.getElementById("41-27"); _41_27_.className = "Blank";
        const _48_27_ = document.getElementById("48-27"); _48_27_.className = "Blank";
        const _33_28_ = document.getElementById("33-28"); _33_28_.className = "Blank";
    }

    //1947 Scorigami
    if (output.innerHTML == "1947") {
        const _62_6_ = document.getElementById("62-6"); _62_6_.className = "Scorigami";
        const _86_6_ = document.getElementById("86-6"); _86_6_.className = "Scorigami";
        const _37_13_ = document.getElementById("37-13"); _37_13_.className = "Scorigami";
        const _65_13_ = document.getElementById("65-13"); _65_13_.className = "Scorigami";
        const _60_14_ = document.getElementById("60-14"); _60_14_.className = "Scorigami";
        const _41_18_ = document.getElementById("41-18"); _41_18_.className = "Scorigami";
        const _43_19_ = document.getElementById("43-19"); _43_19_.className = "Scorigami";
        const _58_19_ = document.getElementById("58-19"); _58_19_.className = "Scorigami";
        const _30_20_ = document.getElementById("30-20"); _30_20_.className = "Scorigami";
        const _49_21_ = document.getElementById("49-21"); _49_21_.className = "Scorigami";
        const _32_22_ = document.getElementById("32-22"); _32_22_.className = "Scorigami";
        const _40_28_ = document.getElementById("40-28"); _40_28_.className = "Scorigami";
        const _41_28_ = document.getElementById("41-28"); _41_28_.className = "Scorigami";
        const _54_28_ = document.getElementById("54-28"); _54_28_.className = "Scorigami";
    }
    if (output.innerHTML > "1947") {
        const _62_6_ = document.getElementById("62-6"); _62_6_.className = "PastScorigami";
        const _86_6_ = document.getElementById("86-6"); _86_6_.className = "PastScorigami";
        const _37_13_ = document.getElementById("37-13"); _37_13_.className = "PastScorigami";
        const _65_13_ = document.getElementById("65-13"); _65_13_.className = "PastScorigami";
        const _60_14_ = document.getElementById("60-14"); _60_14_.className = "PastScorigami";
        const _41_18_ = document.getElementById("41-18"); _41_18_.className = "PastScorigami";
        const _43_19_ = document.getElementById("43-19"); _43_19_.className = "PastScorigami";
        const _58_19_ = document.getElementById("58-19"); _58_19_.className = "PastScorigami";
        const _30_20_ = document.getElementById("30-20"); _30_20_.className = "PastScorigami";
        const _49_21_ = document.getElementById("49-21"); _49_21_.className = "PastScorigami";
        const _32_22_ = document.getElementById("32-22"); _32_22_.className = "PastScorigami";
        const _40_28_ = document.getElementById("40-28"); _40_28_.className = "PastScorigami";
        const _41_28_ = document.getElementById("41-28"); _41_28_.className = "PastScorigami";
        const _54_28_ = document.getElementById("54-28"); _54_28_.className = "PastScorigami";
    }
    if (output.innerHTML < "1947") {
        const _62_6_ = document.getElementById("62-6"); _62_6_.className = "Blank";
        const _86_6_ = document.getElementById("86-6"); _86_6_.className = "Blank";
        const _37_13_ = document.getElementById("37-13"); _37_13_.className = "Blank";
        const _65_13_ = document.getElementById("65-13"); _65_13_.className = "Blank";
        const _60_14_ = document.getElementById("60-14"); _60_14_.className = "Blank";
        const _41_18_ = document.getElementById("41-18"); _41_18_.className = "Blank";
        const _43_19_ = document.getElementById("43-19"); _43_19_.className = "Blank";
        const _58_19_ = document.getElementById("58-19"); _58_19_.className = "Blank";
        const _30_20_ = document.getElementById("30-20"); _30_20_.className = "Blank";
        const _49_21_ = document.getElementById("49-21"); _49_21_.className = "Blank";
        const _32_22_ = document.getElementById("32-22"); _32_22_.className = "Blank";
        const _40_28_ = document.getElementById("40-28"); _40_28_.className = "Blank";
        const _41_28_ = document.getElementById("41-28"); _41_28_.className = "Blank";
        const _54_28_ = document.getElementById("54-28"); _54_28_.className = "Blank";
    }

    //1948 Scorigami
    if (output.innerHTML == "1948") {
        const _92_7_ = document.getElementById("92-7"); _92_7_.className = "Scorigami";
        const _49_12_ = document.getElementById("49-12"); _49_12_.className = "Scorigami";
        const _79_13_ = document.getElementById("79-13"); _79_13_.className = "Scorigami";
        const _65_14_ = document.getElementById("65-14"); _65_14_.className = "Scorigami";
        const _34_15_ = document.getElementById("34-15"); _34_15_.className = "Scorigami";
        const _29_16_ = document.getElementById("29-16"); _29_16_.className = "Scorigami";
        const _41_16_ = document.getElementById("41-16"); _41_16_.className = "Scorigami";
        const _22_17_ = document.getElementById("22-17"); _22_17_.className = "Scorigami";
        const _55_18_ = document.getElementById("55-18"); _55_18_.className = "Scorigami";
        const _30_19_ = document.getElementById("30-19"); _30_19_.className = "Scorigami";
        const _42_19_ = document.getElementById("42-19"); _42_19_.className = "Scorigami";
        const _49_19_ = document.getElementById("49-19"); _49_19_.className = "Scorigami";
        const _43_20_ = document.getElementById("43-20"); _43_20_.className = "Scorigami";
        const _42_21_ = document.getElementById("42-21"); _42_21_.className = "Scorigami";
        const _68_21_ = document.getElementById("68-21"); _68_21_.className = "Scorigami";
        const _26_22_ = document.getElementById("26-22"); _26_22_.className = "Scorigami";
        const _33_22_ = document.getElementById("33-22"); _33_22_.className = "Scorigami";
        const _33_24_ = document.getElementById("33-24"); _33_24_.className = "Scorigami";
        const _29_25_ = document.getElementById("29-25"); _29_25_.className = "Scorigami";
        const _63_25_ = document.getElementById("63-25"); _63_25_.className = "Scorigami";
        const _48_26_ = document.getElementById("48-26"); _48_26_.className = "Scorigami";
        const _34_28_ = document.getElementById("34-28"); _34_28_.className = "Scorigami";
        const _31_29_ = document.getElementById("31-29"); _31_29_.className = "Scorigami";
        const _34_32_ = document.getElementById("34-32"); _34_32_.className = "Scorigami";
        const _45_34_ = document.getElementById("45-34"); _45_34_.className = "Scorigami";
        const _35_35_ = document.getElementById("35-35"); _35_35_.className = "Scorigami";
    }
    if (output.innerHTML > "1948") {
        const _92_7_ = document.getElementById("92-7"); _92_7_.className = "PastScorigami";
        const _49_12_ = document.getElementById("49-12"); _49_12_.className = "PastScorigami";
        const _79_13_ = document.getElementById("79-13"); _79_13_.className = "PastScorigami";
        const _65_14_ = document.getElementById("65-14"); _65_14_.className = "PastScorigami";
        const _34_15_ = document.getElementById("34-15"); _34_15_.className = "PastScorigami";
        const _29_16_ = document.getElementById("29-16"); _29_16_.className = "PastScorigami";
        const _41_16_ = document.getElementById("41-16"); _41_16_.className = "PastScorigami";
        const _22_17_ = document.getElementById("22-17"); _22_17_.className = "PastScorigami";
        const _55_18_ = document.getElementById("55-18"); _55_18_.className = "PastScorigami";
        const _30_19_ = document.getElementById("30-19"); _30_19_.className = "PastScorigami";
        const _42_19_ = document.getElementById("42-19"); _42_19_.className = "PastScorigami";
        const _49_19_ = document.getElementById("49-19"); _49_19_.className = "PastScorigami";
        const _43_20_ = document.getElementById("43-20"); _43_20_.className = "PastScorigami";
        const _42_21_ = document.getElementById("42-21"); _42_21_.className = "PastScorigami";
        const _68_21_ = document.getElementById("68-21"); _68_21_.className = "PastScorigami";
        const _26_22_ = document.getElementById("26-22"); _26_22_.className = "PastScorigami";
        const _33_22_ = document.getElementById("33-22"); _33_22_.className = "PastScorigami";
        const _33_24_ = document.getElementById("33-24"); _33_24_.className = "PastScorigami";
        const _29_25_ = document.getElementById("29-25"); _29_25_.className = "PastScorigami";
        const _63_25_ = document.getElementById("63-25"); _63_25_.className = "PastScorigami";
        const _48_26_ = document.getElementById("48-26"); _48_26_.className = "PastScorigami";
        const _34_28_ = document.getElementById("34-28"); _34_28_.className = "PastScorigami";
        const _31_29_ = document.getElementById("31-29"); _31_29_.className = "PastScorigami";
        const _34_32_ = document.getElementById("34-32"); _34_32_.className = "PastScorigami";
        const _45_34_ = document.getElementById("45-34"); _45_34_.className = "PastScorigami";
        const _35_35_ = document.getElementById("35-35"); _35_35_.className = "PastScorigami";
    }
    if (output.innerHTML < "1948") {
        const _92_7_ = document.getElementById("92-7"); _92_7_.className = "Blank";
        const _49_12_ = document.getElementById("49-12"); _49_12_.className = "Blank";
        const _79_13_ = document.getElementById("79-13"); _79_13_.className = "Blank";
        const _65_14_ = document.getElementById("65-14"); _65_14_.className = "Blank";
        const _34_15_ = document.getElementById("34-15"); _34_15_.className = "Blank";
        const _29_16_ = document.getElementById("29-16"); _29_16_.className = "Blank";
        const _41_16_ = document.getElementById("41-16"); _41_16_.className = "Blank";
        const _22_17_ = document.getElementById("22-17"); _22_17_.className = "Blank";
        const _55_18_ = document.getElementById("55-18"); _55_18_.className = "Blank";
        const _30_19_ = document.getElementById("30-19"); _30_19_.className = "Blank";
        const _42_19_ = document.getElementById("42-19"); _42_19_.className = "Blank";
        const _49_19_ = document.getElementById("49-19"); _49_19_.className = "Blank";
        const _43_20_ = document.getElementById("43-20"); _43_20_.className = "Blank";
        const _42_21_ = document.getElementById("42-21"); _42_21_.className = "Blank";
        const _68_21_ = document.getElementById("68-21"); _68_21_.className = "Blank";
        const _26_22_ = document.getElementById("26-22"); _26_22_.className = "Blank";
        const _33_22_ = document.getElementById("33-22"); _33_22_.className = "Blank";
        const _33_24_ = document.getElementById("33-24"); _33_24_.className = "Blank";
        const _29_25_ = document.getElementById("29-25"); _29_25_.className = "Blank";
        const _63_25_ = document.getElementById("63-25"); _63_25_.className = "Blank";
        const _48_26_ = document.getElementById("48-26"); _48_26_.className = "Blank";
        const _34_28_ = document.getElementById("34-28"); _34_28_.className = "Blank";
        const _31_29_ = document.getElementById("31-29"); _31_29_.className = "Blank";
        const _34_32_ = document.getElementById("34-32"); _34_32_.className = "Blank";
        const _45_34_ = document.getElementById("45-34"); _45_34_.className = "Blank";
        const _35_35_ = document.getElementById("35-35"); _35_35_.className = "Blank";
    }

    //1949 Scorigami
    if (output.innerHTML == "1949") {
        const _22_3_ = document.getElementById("22-3"); _22_3_.className = "Scorigami";
        const _63_6_ = document.getElementById("63-6"); _63_6_.className = "Scorigami";
        const _79_6_ = document.getElementById("79-6"); _79_6_.className = "Scorigami";
        const _44_9_ = document.getElementById("44-9"); _44_9_.className = "Scorigami";
        const _68_13_ = document.getElementById("68-13"); _68_13_.className = "Scorigami";
        const _62_14_ = document.getElementById("62-14"); _62_14_.className = "Scorigami";
        const _63_14_ = document.getElementById("63-14"); _63_14_.className = "Scorigami";
        const _30_17_ = document.getElementById("30-17"); _30_17_.className = "Scorigami";
        const _25_20_ = document.getElementById("25-20"); _25_20_.className = "Scorigami";
        const _35_20_ = document.getElementById("35-20"); _35_20_.className = "Scorigami";
        const _42_20_ = document.getElementById("42-20"); _42_20_.className = "Scorigami";
        const _55_20_ = document.getElementById("55-20"); _55_20_.className = "Scorigami";
        const _74_20_ = document.getElementById("74-20"); _74_20_.className = "Scorigami";
        const _22_21_ = document.getElementById("22-21"); _22_21_.className = "Scorigami";
        const _41_21_ = document.getElementById("41-21"); _41_21_.className = "Scorigami";
        const _45_21_ = document.getElementById("45-21"); _45_21_.className = "Scorigami";
        const _28_23_ = document.getElementById("28-23"); _28_23_.className = "Scorigami";
        const _25_25_ = document.getElementById("25-25"); _25_25_.className = "Scorigami";
        const _35_25_ = document.getElementById("35-25"); _35_25_.className = "Scorigami";
        const _41_26_ = document.getElementById("41-26"); _41_26_.className = "Scorigami";
        const _47_26_ = document.getElementById("47-26"); _47_26_.className = "Scorigami";
        const _33_27_ = document.getElementById("33-27"); _33_27_.className = "Scorigami";
        const _53_27_ = document.getElementById("53-27"); _53_27_.className = "Scorigami";
        const _28_28_ = document.getElementById("28-28"); _28_28_.className = "Scorigami";
        const _45_28_ = document.getElementById("45-28"); _45_28_.className = "Scorigami";
        const _55_28_ = document.getElementById("55-28"); _55_28_.className = "Scorigami";
        const _68_32_ = document.getElementById("68-32"); _68_32_.className = "Scorigami";
        const _35_34_ = document.getElementById("35-34"); _35_34_.className = "Scorigami";
        const _39_35_ = document.getElementById("39-35"); _39_35_.className = "Scorigami";
    }
    if (output.innerHTML > "1949") {
        const _22_3_ = document.getElementById("22-3"); _22_3_.className = "PastScorigami";
        const _63_6_ = document.getElementById("63-6"); _63_6_.className = "PastScorigami";
        const _79_6_ = document.getElementById("79-6"); _79_6_.className = "PastScorigami";
        const _44_9_ = document.getElementById("44-9"); _44_9_.className = "PastScorigami";
        const _68_13_ = document.getElementById("68-13"); _68_13_.className = "PastScorigami";
        const _62_14_ = document.getElementById("62-14"); _62_14_.className = "PastScorigami";
        const _63_14_ = document.getElementById("63-14"); _63_14_.className = "PastScorigami";
        const _30_17_ = document.getElementById("30-17"); _30_17_.className = "PastScorigami";
        const _25_20_ = document.getElementById("25-20"); _25_20_.className = "PastScorigami";
        const _35_20_ = document.getElementById("35-20"); _35_20_.className = "PastScorigami";
        const _42_20_ = document.getElementById("42-20"); _42_20_.className = "PastScorigami";
        const _55_20_ = document.getElementById("55-20"); _55_20_.className = "PastScorigami";
        const _74_20_ = document.getElementById("74-20"); _74_20_.className = "PastScorigami";
        const _22_21_ = document.getElementById("22-21"); _22_21_.className = "PastScorigami";
        const _41_21_ = document.getElementById("41-21"); _41_21_.className = "PastScorigami";
        const _45_21_ = document.getElementById("45-21"); _45_21_.className = "PastScorigami";
        const _28_23_ = document.getElementById("28-23"); _28_23_.className = "PastScorigami";
        const _25_25_ = document.getElementById("25-25"); _25_25_.className = "PastScorigami";
        const _35_25_ = document.getElementById("35-25"); _35_25_.className = "PastScorigami";
        const _41_26_ = document.getElementById("41-26"); _41_26_.className = "PastScorigami";
        const _47_26_ = document.getElementById("47-26"); _47_26_.className = "PastScorigami";
        const _33_27_ = document.getElementById("33-27"); _33_27_.className = "PastScorigami";
        const _53_27_ = document.getElementById("53-27"); _53_27_.className = "PastScorigami";
        const _28_28_ = document.getElementById("28-28"); _28_28_.className = "PastScorigami";
        const _45_28_ = document.getElementById("45-28"); _45_28_.className = "PastScorigami";
        const _55_28_ = document.getElementById("55-28"); _55_28_.className = "PastScorigami";
        const _68_32_ = document.getElementById("68-32"); _68_32_.className = "PastScorigami";
        const _35_34_ = document.getElementById("35-34"); _35_34_.className = "PastScorigami";
        const _39_35_ = document.getElementById("39-35"); _39_35_.className = "PastScorigami";
    }
    if (output.innerHTML < "1949") {
        const _22_3_ = document.getElementById("22-3"); _22_3_.className = "Blank";
        const _63_6_ = document.getElementById("63-6"); _63_6_.className = "Blank";
        const _79_6_ = document.getElementById("79-6"); _79_6_.className = "Blank";
        const _44_9_ = document.getElementById("44-9"); _44_9_.className = "Blank";
        const _68_13_ = document.getElementById("68-13"); _68_13_.className = "Blank";
        const _62_14_ = document.getElementById("62-14"); _62_14_.className = "Blank";
        const _63_14_ = document.getElementById("63-14"); _63_14_.className = "Blank";
        const _30_17_ = document.getElementById("30-17"); _30_17_.className = "Blank";
        const _25_20_ = document.getElementById("25-20"); _25_20_.className = "Blank";
        const _35_20_ = document.getElementById("35-20"); _35_20_.className = "Blank";
        const _42_20_ = document.getElementById("42-20"); _42_20_.className = "Blank";
        const _55_20_ = document.getElementById("55-20"); _55_20_.className = "Blank";
        const _74_20_ = document.getElementById("74-20"); _74_20_.className = "Blank";
        const _22_21_ = document.getElementById("22-21"); _22_21_.className = "Blank";
        const _41_21_ = document.getElementById("41-21"); _41_21_.className = "Blank";
        const _45_21_ = document.getElementById("45-21"); _45_21_.className = "Blank";
        const _28_23_ = document.getElementById("28-23"); _28_23_.className = "Blank";
        const _25_25_ = document.getElementById("25-25"); _25_25_.className = "Blank";
        const _35_25_ = document.getElementById("35-25"); _35_25_.className = "Blank";
        const _41_26_ = document.getElementById("41-26"); _41_26_.className = "Blank";
        const _47_26_ = document.getElementById("47-26"); _47_26_.className = "Blank";
        const _33_27_ = document.getElementById("33-27"); _33_27_.className = "Blank";
        const _53_27_ = document.getElementById("53-27"); _53_27_.className = "Blank";
        const _28_28_ = document.getElementById("28-28"); _28_28_.className = "Blank";
        const _45_28_ = document.getElementById("45-28"); _45_28_.className = "Blank";
        const _55_28_ = document.getElementById("55-28"); _55_28_.className = "Blank";
        const _68_32_ = document.getElementById("68-32"); _68_32_.className = "Blank";
        const _35_34_ = document.getElementById("35-34"); _35_34_.className = "Blank";
        const _39_35_ = document.getElementById("39-35"); _39_35_.className = "Blank";
    }

    //1950 Scorigami
    if (output.innerHTML == "1950") {
        const _57_2_ = document.getElementById("57-2"); _57_2_.className = "Scorigami";
        const _66_12_ = document.getElementById("66-12"); _66_12_.className = "Scorigami";
        const _50_14_ = document.getElementById("50-14"); _50_14_.className = "Scorigami";
        const _36_18_ = document.getElementById("36-18"); _36_18_.className = "Scorigami";
        const _40_18_ = document.getElementById("40-18"); _40_18_.className = "Scorigami";
        const _48_18_ = document.getElementById("48-18"); _48_18_.className = "Scorigami";
        const _37_19_ = document.getElementById("37-19"); _37_19_.className = "Scorigami";
        const _37_20_ = document.getElementById("37-20"); _37_20_.className = "Scorigami";
        const _53_20_ = document.getElementById("53-20"); _53_20_.className = "Scorigami";
        const _48_21_ = document.getElementById("48-21"); _48_21_.className = "Scorigami";
        const _52_21_ = document.getElementById("52-21"); _52_21_.className = "Scorigami";
        const _61_21_ = document.getElementById("61-21"); _61_21_.className = "Scorigami";
        const _83_21_ = document.getElementById("83-21"); _83_21_.className = "Scorigami";
        const _27_22_ = document.getElementById("27-22"); _27_22_.className = "Scorigami";
        const _34_23_ = document.getElementById("34-23"); _34_23_.className = "Scorigami";
        const _42_23_ = document.getElementById("42-23"); _42_23_.className = "Scorigami";
        const _28_25_ = document.getElementById("28-25"); _28_25_.className = "Scorigami";
        const _40_25_ = document.getElementById("40-25"); _40_25_.className = "Scorigami";
        const _32_26_ = document.getElementById("32-26"); _32_26_.className = "Scorigami";
        const _39_26_ = document.getElementById("39-26"); _39_26_.className = "Scorigami";
        const _63_26_ = document.getElementById("63-26"); _63_26_.className = "Scorigami";
        const _31_27_ = document.getElementById("31-27"); _31_27_.className = "Scorigami";
        const _35_28_ = document.getElementById("35-28"); _35_28_.className = "Scorigami";
        const _39_28_ = document.getElementById("39-28"); _39_28_.className = "Scorigami";
        const _33_29_ = document.getElementById("33-29"); _33_29_.className = "Scorigami";
        const _47_31_ = document.getElementById("47-31"); _47_31_.className = "Scorigami";
        const _35_33_ = document.getElementById("35-33"); _35_33_.className = "Scorigami";
        const _36_33_ = document.getElementById("36-33"); _36_33_.className = "Scorigami";
        const _43_33_ = document.getElementById("43-33"); _43_33_.className = "Scorigami";
        const _40_34_ = document.getElementById("40-34"); _40_34_.className = "Scorigami";
        const _49_35_ = document.getElementById("49-35"); _49_35_.className = "Scorigami";
    }
    if (output.innerHTML > "1950") {
        const _57_2_ = document.getElementById("57-2"); _57_2_.className = "PastScorigami";
        const _66_12_ = document.getElementById("66-12"); _66_12_.className = "PastScorigami";
        const _50_14_ = document.getElementById("50-14"); _50_14_.className = "PastScorigami";
        const _36_18_ = document.getElementById("36-18"); _36_18_.className = "PastScorigami";
        const _40_18_ = document.getElementById("40-18"); _40_18_.className = "PastScorigami";
        const _48_18_ = document.getElementById("48-18"); _48_18_.className = "PastScorigami";
        const _37_19_ = document.getElementById("37-19"); _37_19_.className = "PastScorigami";
        const _37_20_ = document.getElementById("37-20"); _37_20_.className = "PastScorigami";
        const _53_20_ = document.getElementById("53-20"); _53_20_.className = "PastScorigami";
        const _48_21_ = document.getElementById("48-21"); _48_21_.className = "PastScorigami";
        const _52_21_ = document.getElementById("52-21"); _52_21_.className = "PastScorigami";
        const _61_21_ = document.getElementById("61-21"); _61_21_.className = "PastScorigami";
        const _83_21_ = document.getElementById("83-21"); _83_21_.className = "PastScorigami";
        const _27_22_ = document.getElementById("27-22"); _27_22_.className = "PastScorigami";
        const _34_23_ = document.getElementById("34-23"); _34_23_.className = "PastScorigami";
        const _42_23_ = document.getElementById("42-23"); _42_23_.className = "PastScorigami";
        const _28_25_ = document.getElementById("28-25"); _28_25_.className = "PastScorigami";
        const _40_25_ = document.getElementById("40-25"); _40_25_.className = "PastScorigami";
        const _32_26_ = document.getElementById("32-26"); _32_26_.className = "PastScorigami";
        const _39_26_ = document.getElementById("39-26"); _39_26_.className = "PastScorigami";
        const _63_26_ = document.getElementById("63-26"); _63_26_.className = "PastScorigami";
        const _31_27_ = document.getElementById("31-27"); _31_27_.className = "PastScorigami";
        const _35_28_ = document.getElementById("35-28"); _35_28_.className = "PastScorigami";
        const _39_28_ = document.getElementById("39-28"); _39_28_.className = "PastScorigami";
        const _33_29_ = document.getElementById("33-29"); _33_29_.className = "PastScorigami";
        const _47_31_ = document.getElementById("47-31"); _47_31_.className = "PastScorigami";
        const _35_33_ = document.getElementById("35-33"); _35_33_.className = "PastScorigami";
        const _36_33_ = document.getElementById("36-33"); _36_33_.className = "PastScorigami";
        const _43_33_ = document.getElementById("43-33"); _43_33_.className = "PastScorigami";
        const _40_34_ = document.getElementById("40-34"); _40_34_.className = "PastScorigami";
        const _49_35_ = document.getElementById("49-35"); _49_35_.className = "PastScorigami";
    }
    if (output.innerHTML < "1950") {
        const _57_2_ = document.getElementById("57-2"); _57_2_.className = "Blank";
        const _66_12_ = document.getElementById("66-12"); _66_12_.className = "Blank";
        const _50_14_ = document.getElementById("50-14"); _50_14_.className = "Blank";
        const _36_18_ = document.getElementById("36-18"); _36_18_.className = "Blank";
        const _40_18_ = document.getElementById("40-18"); _40_18_.className = "Blank";
        const _48_18_ = document.getElementById("48-18"); _48_18_.className = "Blank";
        const _37_19_ = document.getElementById("37-19"); _37_19_.className = "Blank";
        const _37_20_ = document.getElementById("37-20"); _37_20_.className = "Blank";
        const _53_20_ = document.getElementById("53-20"); _53_20_.className = "Blank";
        const _48_21_ = document.getElementById("48-21"); _48_21_.className = "Blank";
        const _52_21_ = document.getElementById("52-21"); _52_21_.className = "Blank";
        const _61_21_ = document.getElementById("61-21"); _61_21_.className = "Blank";
        const _83_21_ = document.getElementById("83-21"); _83_21_.className = "Blank";
        const _27_22_ = document.getElementById("27-22"); _27_22_.className = "Blank";
        const _34_23_ = document.getElementById("34-23"); _34_23_.className = "Blank";
        const _42_23_ = document.getElementById("42-23"); _42_23_.className = "Blank";
        const _28_25_ = document.getElementById("28-25"); _28_25_.className = "Blank";
        const _40_25_ = document.getElementById("40-25"); _40_25_.className = "Blank";
        const _32_26_ = document.getElementById("32-26"); _32_26_.className = "Blank";
        const _39_26_ = document.getElementById("39-26"); _39_26_.className = "Blank";
        const _63_26_ = document.getElementById("63-26"); _63_26_.className = "Blank";
        const _31_27_ = document.getElementById("31-27"); _31_27_.className = "Blank";
        const _35_28_ = document.getElementById("35-28"); _35_28_.className = "Blank";
        const _39_28_ = document.getElementById("39-28"); _39_28_.className = "Blank";
        const _33_29_ = document.getElementById("33-29"); _33_29_.className = "Blank";
        const _47_31_ = document.getElementById("47-31"); _47_31_.className = "Blank";
        const _35_33_ = document.getElementById("35-33"); _35_33_.className = "Blank";
        const _36_33_ = document.getElementById("36-33"); _36_33_.className = "Blank";
        const _43_33_ = document.getElementById("43-33"); _43_33_.className = "Blank";
        const _40_34_ = document.getElementById("40-34"); _40_34_.className = "Blank";
        const _49_35_ = document.getElementById("49-35"); _49_35_.className = "Blank";
    }

    //1951 Scorigami
    if (output.innerHTML == "1951") {
        const _67_13_ = document.getElementById("67-13"); _67_13_.className = "Scorigami";
        const _72_13_ = document.getElementById("72-13"); _72_13_.className = "Scorigami";
        const _53_15_ = document.getElementById("53-15"); _53_15_.className = "Scorigami";
        const _33_17_ = document.getElementById("33-17"); _33_17_.className = "Scorigami";
        const _44_17_ = document.getElementById("44-17"); _44_17_.className = "Scorigami";
        const _50_20_ = document.getElementById("50-20"); _50_20_.className = "Scorigami";
        const _53_21_ = document.getElementById("53-21"); _53_21_.className = "Scorigami";
        const _30_26_ = document.getElementById("30-26"); _30_26_.className = "Scorigami";
        const _53_26_ = document.getElementById("53-26"); _53_26_.className = "Scorigami";
        const _46_27_ = document.getElementById("46-27"); _46_27_.className = "Scorigami";
        const _54_27_ = document.getElementById("54-27"); _54_27_.className = "Scorigami";
        const _37_28_ = document.getElementById("37-28"); _37_28_.className = "Scorigami";
        const _42_28_ = document.getElementById("42-28"); _42_28_.className = "Scorigami";
        const _61_28_ = document.getElementById("61-28"); _61_28_.className = "Scorigami";
        const _34_30_ = document.getElementById("34-30"); _34_30_.className = "Scorigami";
        const _53_33_ = document.getElementById("53-33"); _53_33_.className = "Scorigami";
        const _42_35_ = document.getElementById("42-35"); _42_35_.className = "Scorigami";
        const _47_35_ = document.getElementById("47-35"); _47_35_.className = "Scorigami";
    }
    if (output.innerHTML > "1951") {
        const _67_13_ = document.getElementById("67-13"); _67_13_.className = "PastScorigami";
        const _72_13_ = document.getElementById("72-13"); _72_13_.className = "PastScorigami";
        const _53_15_ = document.getElementById("53-15"); _53_15_.className = "PastScorigami";
        const _33_17_ = document.getElementById("33-17"); _33_17_.className = "PastScorigami";
        const _44_17_ = document.getElementById("44-17"); _44_17_.className = "PastScorigami";
        const _50_20_ = document.getElementById("50-20"); _50_20_.className = "PastScorigami";
        const _53_21_ = document.getElementById("53-21"); _53_21_.className = "PastScorigami";
        const _30_26_ = document.getElementById("30-26"); _30_26_.className = "PastScorigami";
        const _53_26_ = document.getElementById("53-26"); _53_26_.className = "PastScorigami";
        const _46_27_ = document.getElementById("46-27"); _46_27_.className = "PastScorigami";
        const _54_27_ = document.getElementById("54-27"); _54_27_.className = "PastScorigami";
        const _37_28_ = document.getElementById("37-28"); _37_28_.className = "PastScorigami";
        const _42_28_ = document.getElementById("42-28"); _42_28_.className = "PastScorigami";
        const _61_28_ = document.getElementById("61-28"); _61_28_.className = "PastScorigami";
        const _34_30_ = document.getElementById("34-30"); _34_30_.className = "PastScorigami";
        const _53_33_ = document.getElementById("53-33"); _53_33_.className = "PastScorigami";
        const _42_35_ = document.getElementById("42-35"); _42_35_.className = "PastScorigami";
        const _47_35_ = document.getElementById("47-35"); _47_35_.className = "PastScorigami";
    }
    if (output.innerHTML < "1951") {
        const _67_13_ = document.getElementById("67-13"); _67_13_.className = "Blank";
        const _72_13_ = document.getElementById("72-13"); _72_13_.className = "Blank";
        const _53_15_ = document.getElementById("53-15"); _53_15_.className = "Blank";
        const _33_17_ = document.getElementById("33-17"); _33_17_.className = "Blank";
        const _44_17_ = document.getElementById("44-17"); _44_17_.className = "Blank";
        const _50_20_ = document.getElementById("50-20"); _50_20_.className = "Blank";
        const _53_21_ = document.getElementById("53-21"); _53_21_.className = "Blank";
        const _30_26_ = document.getElementById("30-26"); _30_26_.className = "Blank";
        const _53_26_ = document.getElementById("53-26"); _53_26_.className = "Blank";
        const _46_27_ = document.getElementById("46-27"); _46_27_.className = "Blank";
        const _54_27_ = document.getElementById("54-27"); _54_27_.className = "Blank";
        const _37_28_ = document.getElementById("37-28"); _37_28_.className = "Blank";
        const _42_28_ = document.getElementById("42-28"); _42_28_.className = "Blank";
        const _61_28_ = document.getElementById("61-28"); _61_28_.className = "Blank";
        const _34_30_ = document.getElementById("34-30"); _34_30_.className = "Blank";
        const _53_33_ = document.getElementById("53-33"); _53_33_.className = "Blank";
        const _42_35_ = document.getElementById("42-35"); _42_35_.className = "Blank";
        const _47_35_ = document.getElementById("47-35"); _47_35_.className = "Blank";
    }

    //1952 Scorigami
    if (output.innerHTML == "1952") {
        const _54_9_ = document.getElementById("54-9"); _54_9_.className = "Scorigami";
        const _62_12_ = document.getElementById("62-12"); _62_12_.className = "Scorigami";
        const _35_15_ = document.getElementById("35-15"); _35_15_.className = "Scorigami";
        const _48_16_ = document.getElementById("48-16"); _48_16_.className = "Scorigami";
        const _57_19_ = document.getElementById("57-19"); _57_19_.className = "Scorigami";
        const _61_19_ = document.getElementById("61-19"); _61_19_.className = "Scorigami";
        const _29_20_ = document.getElementById("29-20"); _29_20_.className = "Scorigami";
        const _62_21_ = document.getElementById("62-21"); _62_21_.className = "Scorigami";
        const _35_23_ = document.getElementById("35-23"); _35_23_.className = "Scorigami";
        const _42_25_ = document.getElementById("42-25"); _42_25_.className = "Scorigami";
        const _44_27_ = document.getElementById("44-27"); _44_27_.className = "Scorigami";
        const _56_27_ = document.getElementById("56-27"); _56_27_.className = "Scorigami";
        const _44_34_ = document.getElementById("44-34"); _44_34_.className = "Scorigami";
        const _49_34_ = document.getElementById("49-34"); _49_34_.className = "Scorigami";
    }
    if (output.innerHTML > "1952") {
        const _54_9_ = document.getElementById("54-9"); _54_9_.className = "PastScorigami";
        const _62_12_ = document.getElementById("62-12"); _62_12_.className = "PastScorigami";
        const _35_15_ = document.getElementById("35-15"); _35_15_.className = "PastScorigami";
        const _48_16_ = document.getElementById("48-16"); _48_16_.className = "PastScorigami";
        const _57_19_ = document.getElementById("57-19"); _57_19_.className = "PastScorigami";
        const _61_19_ = document.getElementById("61-19"); _61_19_.className = "PastScorigami";
        const _29_20_ = document.getElementById("29-20"); _29_20_.className = "PastScorigami";
        const _62_21_ = document.getElementById("62-21"); _62_21_.className = "PastScorigami";
        const _35_23_ = document.getElementById("35-23"); _35_23_.className = "PastScorigami";
        const _42_25_ = document.getElementById("42-25"); _42_25_.className = "PastScorigami";
        const _44_27_ = document.getElementById("44-27"); _44_27_.className = "PastScorigami";
        const _56_27_ = document.getElementById("56-27"); _56_27_.className = "PastScorigami";
        const _44_34_ = document.getElementById("44-34"); _44_34_.className = "PastScorigami";
        const _49_34_ = document.getElementById("49-34"); _49_34_.className = "PastScorigami";
    }
    if (output.innerHTML < "1952") {
        const _54_9_ = document.getElementById("54-9"); _54_9_.className = "Blank";
        const _62_12_ = document.getElementById("62-12"); _62_12_.className = "Blank";
        const _35_15_ = document.getElementById("35-15"); _35_15_.className = "Blank";
        const _48_16_ = document.getElementById("48-16"); _48_16_.className = "Blank";
        const _57_19_ = document.getElementById("57-19"); _57_19_.className = "Blank";
        const _61_19_ = document.getElementById("61-19"); _61_19_.className = "Blank";
        const _29_20_ = document.getElementById("29-20"); _29_20_.className = "Blank";
        const _62_21_ = document.getElementById("62-21"); _62_21_.className = "Blank";
        const _35_23_ = document.getElementById("35-23"); _35_23_.className = "Blank";
        const _42_25_ = document.getElementById("42-25"); _42_25_.className = "Blank";
        const _44_27_ = document.getElementById("44-27"); _44_27_.className = "Blank";
        const _56_27_ = document.getElementById("56-27"); _56_27_.className = "Blank";
        const _44_34_ = document.getElementById("44-34"); _44_34_.className = "Blank";
        const _49_34_ = document.getElementById("49-34"); _49_34_.className = "Blank";
    }

    //1953 Scorigami
    if (output.innerHTML == "1953") {
        const _65_7_ = document.getElementById("65-7"); _65_7_.className = "Scorigami";
        const _47_18_ = document.getElementById("47-18"); _47_18_.className = "Scorigami";
        const _45_19_ = document.getElementById("45-19"); _45_19_.className = "Scorigami";
        const _47_24_ = document.getElementById("47-24"); _47_24_.className = "Scorigami";
        const _53_25_ = document.getElementById("53-25"); _53_25_.className = "Scorigami";
        const _54_26_ = document.getElementById("54-26"); _54_26_.className = "Scorigami";
        const _52_27_ = document.getElementById("52-27"); _52_27_.className = "Scorigami";
        const _32_31_ = document.getElementById("32-31"); _32_31_.className = "Scorigami";
        const _33_32_ = document.getElementById("33-32"); _33_32_.className = "Scorigami";
        const _41_34_ = document.getElementById("41-34"); _41_34_.className = "Scorigami";
    }
    if (output.innerHTML > "1953") {
        const _65_7_ = document.getElementById("65-7"); _65_7_.className = "PastScorigami";
        const _47_18_ = document.getElementById("47-18"); _47_18_.className = "PastScorigami";
        const _45_19_ = document.getElementById("45-19"); _45_19_.className = "PastScorigami";
        const _47_24_ = document.getElementById("47-24"); _47_24_.className = "PastScorigami";
        const _53_25_ = document.getElementById("53-25"); _53_25_.className = "PastScorigami";
        const _54_26_ = document.getElementById("54-26"); _54_26_.className = "PastScorigami";
        const _52_27_ = document.getElementById("52-27"); _52_27_.className = "PastScorigami";
        const _32_31_ = document.getElementById("32-31"); _32_31_.className = "PastScorigami";
        const _33_32_ = document.getElementById("33-32"); _33_32_.className = "PastScorigami";
        const _41_34_ = document.getElementById("41-34"); _41_34_.className = "PastScorigami";
    }
    if (output.innerHTML < "1953") {
        const _65_7_ = document.getElementById("65-7"); _65_7_.className = "Blank";
        const _47_18_ = document.getElementById("47-18"); _47_18_.className = "Blank";
        const _45_19_ = document.getElementById("45-19"); _45_19_.className = "Blank";
        const _47_24_ = document.getElementById("47-24"); _47_24_.className = "Blank";
        const _53_25_ = document.getElementById("53-25"); _53_25_.className = "Blank";
        const _54_26_ = document.getElementById("54-26"); _54_26_.className = "Blank";
        const _52_27_ = document.getElementById("52-27"); _52_27_.className = "Blank";
        const _32_31_ = document.getElementById("32-31"); _32_31_.className = "Blank";
        const _33_32_ = document.getElementById("33-32"); _33_32_.className = "Blank";
        const _41_34_ = document.getElementById("41-34"); _41_34_.className = "Blank";
    }

    //1954 Scorigami
    if (output.innerHTML == "1954") {
        const _46_9_ = document.getElementById("46-9"); _46_9_.className = "Scorigami";
        const _74_13_ = document.getElementById("74-13"); _74_13_.className = "Scorigami";
        const _29_19_ = document.getElementById("29-19"); _29_19_.className = "Scorigami";
        const _46_26_ = document.getElementById("46-26"); _46_26_.className = "Scorigami";
        const _37_34_ = document.getElementById("37-34"); _37_34_.className = "Scorigami";
        const _42_40_ = document.getElementById("42-40"); _42_40_.className = "Scorigami";
    }
    if (output.innerHTML > "1954") {
        const _46_9_ = document.getElementById("46-9"); _46_9_.className = "PastScorigami";
        const _74_13_ = document.getElementById("74-13"); _74_13_.className = "PastScorigami";
        const _29_19_ = document.getElementById("29-19"); _29_19_.className = "PastScorigami";
        const _46_26_ = document.getElementById("46-26"); _46_26_.className = "PastScorigami";
        const _37_34_ = document.getElementById("37-34"); _37_34_.className = "PastScorigami";
        const _42_40_ = document.getElementById("42-40"); _42_40_.className = "PastScorigami";
    }
    if (output.innerHTML < "1954") {
        const _46_9_ = document.getElementById("46-9"); _46_9_.className = "Blank";
        const _74_13_ = document.getElementById("74-13"); _74_13_.className = "Blank";
        const _29_19_ = document.getElementById("29-19"); _29_19_.className = "Blank";
        const _46_26_ = document.getElementById("46-26"); _46_26_.className = "Blank";
        const _37_34_ = document.getElementById("37-34"); _37_34_.className = "Blank";
        const _42_40_ = document.getElementById("42-40"); _42_40_.className = "Blank";
    }

    //1955 Scorigami
    if (output.innerHTML == "1955") {
        const _49_9_ = document.getElementById("49-9"); _49_9_.className = "Scorigami";
        const _69_14_ = document.getElementById("69-14"); _69_14_.className = "Scorigami";
        const _42_15_ = document.getElementById("42-15"); _42_15_.className = "Scorigami";
        const _39_19_ = document.getElementById("39-19"); _39_19_.className = "Scorigami";
        const _56_21_ = document.getElementById("56-21"); _56_21_.className = "Scorigami";
    }
    if (output.innerHTML > "1955") {
        const _49_9_ = document.getElementById("49-9"); _49_9_.className = "PastScorigami";
        const _69_14_ = document.getElementById("69-14"); _69_14_.className = "PastScorigami";
        const _42_15_ = document.getElementById("42-15"); _42_15_.className = "PastScorigami";
        const _39_19_ = document.getElementById("39-19"); _39_19_.className = "PastScorigami";
        const _56_21_ = document.getElementById("56-21"); _56_21_.className = "PastScorigami";
    }
    if (output.innerHTML < "1955") {
        const _49_9_ = document.getElementById("49-9"); _49_9_.className = "Blank";
        const _69_14_ = document.getElementById("69-14"); _69_14_.className = "Blank";
        const _42_15_ = document.getElementById("42-15"); _42_15_.className = "Blank";
        const _39_19_ = document.getElementById("39-19"); _39_19_.className = "Blank";
        const _56_21_ = document.getElementById("56-21"); _56_21_.className = "Blank";
    }

    //1956 Scorigami
    if (output.innerHTML == "1956") {
        const _37_2_ = document.getElementById("37-2"); _37_2_.className = "Scorigami";
        const _67_14_ = document.getElementById("67-14"); _67_14_.className = "Scorigami";
        const _38_17_ = document.getElementById("38-17"); _38_17_.className = "Scorigami";
        const _46_17_ = document.getElementById("46-17"); _46_17_.className = "Scorigami";
        const _33_18_ = document.getElementById("33-18"); _33_18_.className = "Scorigami";
        const _49_26_ = document.getElementById("49-26"); _49_26_.className = "Scorigami";
        const _49_27_ = document.getElementById("49-27"); _49_27_.className = "Scorigami";
        const _39_33_ = document.getElementById("39-33"); _39_33_.className = "Scorigami";
        const _58_34_ = document.getElementById("58-34"); _58_34_.className = "Scorigami";
        const _55_46_ = document.getElementById("55-46"); _55_46_.className = "Scorigami";
        const _55_47_ = document.getElementById("55-47"); _55_47_.className = "Scorigami";
    }
    if (output.innerHTML > "1956") {
        const _37_2_ = document.getElementById("37-2"); _37_2_.className = "PastScorigami";
        const _67_14_ = document.getElementById("67-14"); _67_14_.className = "PastScorigami";
        const _38_17_ = document.getElementById("38-17"); _38_17_.className = "PastScorigami";
        const _46_17_ = document.getElementById("46-17"); _46_17_.className = "PastScorigami";
        const _33_18_ = document.getElementById("33-18"); _33_18_.className = "PastScorigami";
        const _49_26_ = document.getElementById("49-26"); _49_26_.className = "PastScorigami";
        const _49_27_ = document.getElementById("49-27"); _49_27_.className = "PastScorigami";
        const _39_33_ = document.getElementById("39-33"); _39_33_.className = "PastScorigami";
        const _58_34_ = document.getElementById("58-34"); _58_34_.className = "PastScorigami";
        const _55_46_ = document.getElementById("55-46"); _55_46_.className = "PastScorigami";
        const _55_47_ = document.getElementById("55-47"); _55_47_.className = "PastScorigami";
    }
    if (output.innerHTML < "1956") {
        const _37_2_ = document.getElementById("37-2"); _37_2_.className = "Blank";
        const _67_14_ = document.getElementById("67-14"); _67_14_.className = "Blank";
        const _38_17_ = document.getElementById("38-17"); _38_17_.className = "Blank";
        const _46_17_ = document.getElementById("46-17"); _46_17_.className = "Blank";
        const _33_18_ = document.getElementById("33-18"); _33_18_.className = "Blank";
        const _49_26_ = document.getElementById("49-26"); _49_26_.className = "Blank";
        const _49_27_ = document.getElementById("49-27"); _49_27_.className = "Blank";
        const _39_33_ = document.getElementById("39-33"); _39_33_.className = "Blank";
        const _58_34_ = document.getElementById("58-34"); _58_34_.className = "Blank";
        const _55_46_ = document.getElementById("55-46"); _55_46_.className = "Blank";
        const _55_47_ = document.getElementById("55-47"); _55_47_.className = "Blank";
    }

    //1957 Scorigami
    if (output.innerHTML == "1957") {
        const _39_25_ = document.getElementById("39-25"); _39_25_.className = "Scorigami";
    }
    if (output.innerHTML > "1957") {
        const _39_25_ = document.getElementById("39-25"); _39_25_.className = "PastScorigami";
    }
    if (output.innerHTML < "1957") {
        const _39_25_ = document.getElementById("39-25"); _39_25_.className = "Blank";
    }

    //1958 Scorigami
    if (output.innerHTML == "1958") {
        const _31_8_ = document.getElementById("31-8"); _31_8_.className = "Scorigami";
        const _32_8_ = document.getElementById("32-8"); _32_8_.className = "Scorigami";
        const _34_8_ = document.getElementById("34-8"); _34_8_.className = "Scorigami";
        const _36_8_ = document.getElementById("36-8"); _36_8_.className = "Scorigami";
        const _43_8_ = document.getElementById("43-8"); _43_8_.className = "Scorigami";
        const _49_8_ = document.getElementById("49-8"); _49_8_.className = "Scorigami";
        const _50_8_ = document.getElementById("50-8"); _50_8_.className = "Scorigami";
        const _65_12_ = document.getElementById("65-12"); _65_12_.className = "Scorigami";
        const _15_15_ = document.getElementById("15-15"); _15_15_.className = "Scorigami";
        const _60_15_ = document.getElementById("60-15"); _60_15_.className = "Scorigami";
        const _24_16_ = document.getElementById("24-16"); _24_16_.className = "Scorigami";
        const _44_16_ = document.getElementById("44-16"); _44_16_.className = "Scorigami";
        const _68_17_ = document.getElementById("68-17"); _68_17_.className = "Scorigami";
        const _50_18_ = document.getElementById("50-18"); _50_18_.className = "Scorigami";
        const _36_19_ = document.getElementById("36-19"); _36_19_.className = "Scorigami";
        const _36_21_ = document.getElementById("36-21"); _36_21_.className = "Scorigami";
        const _29_22_ = document.getElementById("29-22"); _29_22_.className = "Scorigami";
        const _36_22_ = document.getElementById("36-22"); _36_22_.className = "Scorigami";
        const _66_22_ = document.getElementById("66-22"); _66_22_.className = "Scorigami";
        const _55_24_ = document.getElementById("55-24"); _55_24_.className = "Scorigami";
        const _37_26_ = document.getElementById("37-26"); _37_26_.className = "Scorigami";
        const _29_28_ = document.getElementById("29-28"); _29_28_.className = "Scorigami";
        const _38_28_ = document.getElementById("38-28"); _38_28_.className = "Scorigami";
        const _35_29_ = document.getElementById("35-29"); _35_29_.className = "Scorigami";
        const _39_32_ = document.getElementById("39-32"); _39_32_.className = "Scorigami";
        const _40_39_ = document.getElementById("40-39"); _40_39_.className = "Scorigami";
    }
    if (output.innerHTML > "1958") {
        const _31_8_ = document.getElementById("31-8"); _31_8_.className = "PastScorigami";
        const _32_8_ = document.getElementById("32-8"); _32_8_.className = "PastScorigami";
        const _34_8_ = document.getElementById("34-8"); _34_8_.className = "PastScorigami";
        const _36_8_ = document.getElementById("36-8"); _36_8_.className = "PastScorigami";
        const _43_8_ = document.getElementById("43-8"); _43_8_.className = "PastScorigami";
        const _49_8_ = document.getElementById("49-8"); _49_8_.className = "PastScorigami";
        const _50_8_ = document.getElementById("50-8"); _50_8_.className = "PastScorigami";
        const _65_12_ = document.getElementById("65-12"); _65_12_.className = "PastScorigami";
        const _15_15_ = document.getElementById("15-15"); _15_15_.className = "PastScorigami";
        const _60_15_ = document.getElementById("60-15"); _60_15_.className = "PastScorigami";
        const _24_16_ = document.getElementById("24-16"); _24_16_.className = "PastScorigami";
        const _44_16_ = document.getElementById("44-16"); _44_16_.className = "PastScorigami";
        const _68_17_ = document.getElementById("68-17"); _68_17_.className = "PastScorigami";
        const _50_18_ = document.getElementById("50-18"); _50_18_.className = "PastScorigami";
        const _36_19_ = document.getElementById("36-19"); _36_19_.className = "PastScorigami";
        const _36_21_ = document.getElementById("36-21"); _36_21_.className = "PastScorigami";
        const _29_22_ = document.getElementById("29-22"); _29_22_.className = "PastScorigami";
        const _36_22_ = document.getElementById("36-22"); _36_22_.className = "PastScorigami";
        const _66_22_ = document.getElementById("66-22"); _66_22_.className = "PastScorigami";
        const _55_24_ = document.getElementById("55-24"); _55_24_.className = "PastScorigami";
        const _37_26_ = document.getElementById("37-26"); _37_26_.className = "PastScorigami";
        const _29_28_ = document.getElementById("29-28"); _29_28_.className = "PastScorigami";
        const _38_28_ = document.getElementById("38-28"); _38_28_.className = "PastScorigami";
        const _35_29_ = document.getElementById("35-29"); _35_29_.className = "PastScorigami";
        const _39_32_ = document.getElementById("39-32"); _39_32_.className = "PastScorigami";
        const _40_39_ = document.getElementById("40-39"); _40_39_.className = "PastScorigami";
    }
    if (output.innerHTML < "1958") {
        const _31_8_ = document.getElementById("31-8"); _31_8_.className = "Blank";
        const _32_8_ = document.getElementById("32-8"); _32_8_.className = "Blank";
        const _34_8_ = document.getElementById("34-8"); _34_8_.className = "Blank";
        const _36_8_ = document.getElementById("36-8"); _36_8_.className = "Blank";
        const _43_8_ = document.getElementById("43-8"); _43_8_.className = "Blank";
        const _49_8_ = document.getElementById("49-8"); _49_8_.className = "Blank";
        const _50_8_ = document.getElementById("50-8"); _50_8_.className = "Blank";
        const _65_12_ = document.getElementById("65-12"); _65_12_.className = "Blank";
        const _15_15_ = document.getElementById("15-15"); _15_15_.className = "Blank";
        const _60_15_ = document.getElementById("60-15"); _60_15_.className = "Blank";
        const _24_16_ = document.getElementById("24-16"); _24_16_.className = "Blank";
        const _44_16_ = document.getElementById("44-16"); _44_16_.className = "Blank";
        const _68_17_ = document.getElementById("68-17"); _68_17_.className = "Blank";
        const _50_18_ = document.getElementById("50-18"); _50_18_.className = "Blank";
        const _36_19_ = document.getElementById("36-19"); _36_19_.className = "Blank";
        const _36_21_ = document.getElementById("36-21"); _36_21_.className = "Blank";
        const _29_22_ = document.getElementById("29-22"); _29_22_.className = "Blank";
        const _36_22_ = document.getElementById("36-22"); _36_22_.className = "Blank";
        const _66_22_ = document.getElementById("66-22"); _66_22_.className = "Blank";
        const _55_24_ = document.getElementById("55-24"); _55_24_.className = "Blank";
        const _37_26_ = document.getElementById("37-26"); _37_26_.className = "Blank";
        const _29_28_ = document.getElementById("29-28"); _29_28_.className = "Blank";
        const _38_28_ = document.getElementById("38-28"); _38_28_.className = "Blank";
        const _35_29_ = document.getElementById("35-29"); _35_29_.className = "Blank";
        const _39_32_ = document.getElementById("39-32"); _39_32_.className = "Blank";
        const _40_39_ = document.getElementById("40-39"); _40_39_.className = "Blank";
    }

    //1959 Scorigami
    if (output.innerHTML == "1959") {
        const _62_2_ = document.getElementById("62-2"); _62_2_.className = "Scorigami";
        const _56_3_ = document.getElementById("56-3"); _56_3_.className = "Scorigami";
        const _37_8_ = document.getElementById("37-8"); _37_8_.className = "Scorigami";
        const _44_8_ = document.getElementById("44-8"); _44_8_.className = "Scorigami";
        const _36_9_ = document.getElementById("36-9"); _36_9_.className = "Scorigami";
        const _55_10_ = document.getElementById("55-10"); _55_10_.className = "Scorigami";
        const _43_11_ = document.getElementById("43-11"); _43_11_.className = "Scorigami";
        const _22_15_ = document.getElementById("22-15"); _22_15_.className = "Scorigami";
        const _25_16_ = document.getElementById("25-16"); _25_16_.className = "Scorigami";
        const _66_18_ = document.getElementById("66-18"); _66_18_.className = "Scorigami";
        const _58_20_ = document.getElementById("58-20"); _58_20_.className = "Scorigami";
        const _22_22_ = document.getElementById("22-22"); _22_22_.className = "Scorigami";
        const _25_22_ = document.getElementById("25-22"); _25_22_.className = "Scorigami";
        const _39_22_ = document.getElementById("39-22"); _39_22_.className = "Scorigami";
        const _43_22_ = document.getElementById("43-22"); _43_22_.className = "Scorigami";
        const _29_23_ = document.getElementById("29-23"); _29_23_.className = "Scorigami";
        const _46_24_ = document.getElementById("46-24"); _46_24_.className = "Scorigami";
        const _30_28_ = document.getElementById("30-28"); _30_28_.className = "Scorigami";
        const _51_29_ = document.getElementById("51-29"); _51_29_.className = "Scorigami";
        const _33_31_ = document.getElementById("33-31"); _33_31_.className = "Scorigami";
        const _35_31_ = document.getElementById("35-31"); _35_31_.className = "Scorigami";
        const _54_38_ = document.getElementById("54-38"); _54_38_.className = "Scorigami";
    }
    if (output.innerHTML > "1959") {
        const _62_2_ = document.getElementById("62-2"); _62_2_.className = "PastScorigami";
        const _56_3_ = document.getElementById("56-3"); _56_3_.className = "PastScorigami";
        const _37_8_ = document.getElementById("37-8"); _37_8_.className = "PastScorigami";
        const _44_8_ = document.getElementById("44-8"); _44_8_.className = "PastScorigami";
        const _36_9_ = document.getElementById("36-9"); _36_9_.className = "PastScorigami";
        const _55_10_ = document.getElementById("55-10"); _55_10_.className = "PastScorigami";
        const _43_11_ = document.getElementById("43-11"); _43_11_.className = "PastScorigami";
        const _22_15_ = document.getElementById("22-15"); _22_15_.className = "PastScorigami";
        const _25_16_ = document.getElementById("25-16"); _25_16_.className = "PastScorigami";
        const _66_18_ = document.getElementById("66-18"); _66_18_.className = "PastScorigami";
        const _58_20_ = document.getElementById("58-20"); _58_20_.className = "PastScorigami";
        const _22_22_ = document.getElementById("22-22"); _22_22_.className = "PastScorigami";
        const _25_22_ = document.getElementById("25-22"); _25_22_.className = "PastScorigami";
        const _39_22_ = document.getElementById("39-22"); _39_22_.className = "PastScorigami";
        const _43_22_ = document.getElementById("43-22"); _43_22_.className = "PastScorigami";
        const _29_23_ = document.getElementById("29-23"); _29_23_.className = "PastScorigami";
        const _46_24_ = document.getElementById("46-24"); _46_24_.className = "PastScorigami";
        const _30_28_ = document.getElementById("30-28"); _30_28_.className = "PastScorigami";
        const _51_29_ = document.getElementById("51-29"); _51_29_.className = "PastScorigami";
        const _33_31_ = document.getElementById("33-31"); _33_31_.className = "PastScorigami";
        const _35_31_ = document.getElementById("35-31"); _35_31_.className = "PastScorigami";
        const _54_38_ = document.getElementById("54-38"); _54_38_.className = "PastScorigami";
    }
    if (output.innerHTML < "1959") {
        const _62_2_ = document.getElementById("62-2"); _62_2_.className = "Blank";
        const _56_3_ = document.getElementById("56-3"); _56_3_.className = "Blank";
        const _37_8_ = document.getElementById("37-8"); _37_8_.className = "Blank";
        const _44_8_ = document.getElementById("44-8"); _44_8_.className = "Blank";
        const _36_9_ = document.getElementById("36-9"); _36_9_.className = "Blank";
        const _55_10_ = document.getElementById("55-10"); _55_10_.className = "Blank";
        const _43_11_ = document.getElementById("43-11"); _43_11_.className = "Blank";
        const _22_15_ = document.getElementById("22-15"); _22_15_.className = "Blank";
        const _25_16_ = document.getElementById("25-16"); _25_16_.className = "Blank";
        const _66_18_ = document.getElementById("66-18"); _66_18_.className = "Blank";
        const _58_20_ = document.getElementById("58-20"); _58_20_.className = "Blank";
        const _22_22_ = document.getElementById("22-22"); _22_22_.className = "Blank";
        const _25_22_ = document.getElementById("25-22"); _25_22_.className = "Blank";
        const _39_22_ = document.getElementById("39-22"); _39_22_.className = "Blank";
        const _43_22_ = document.getElementById("43-22"); _43_22_.className = "Blank";
        const _29_23_ = document.getElementById("29-23"); _29_23_.className = "Blank";
        const _46_24_ = document.getElementById("46-24"); _46_24_.className = "Blank";
        const _30_28_ = document.getElementById("30-28"); _30_28_.className = "Blank";
        const _51_29_ = document.getElementById("51-29"); _51_29_.className = "Blank";
        const _33_31_ = document.getElementById("33-31"); _33_31_.className = "Blank";
        const _35_31_ = document.getElementById("35-31"); _35_31_.className = "Blank";
        const _54_38_ = document.getElementById("54-38"); _54_38_.className = "Blank";
    }

    //1960 Scorigami
    if (output.innerHTML == "1960") {
        const _43_2_ = document.getElementById("43-2"); _43_2_.className = "Scorigami";
        const _77_6_ = document.getElementById("77-6"); _77_6_.className = "Scorigami";
        const _35_8_ = document.getElementById("35-8"); _35_8_.className = "Scorigami";
        const _43_15_ = document.getElementById("43-15"); _43_15_.className = "Scorigami";
        const _49_16_ = document.getElementById("49-16"); _49_16_.className = "Scorigami";
        const _47_17_ = document.getElementById("47-17"); _47_17_.className = "Scorigami";
        const _51_19_ = document.getElementById("51-19"); _51_19_.className = "Scorigami";
        const _44_21_ = document.getElementById("44-21"); _44_21_.className = "Scorigami";
        const _57_21_ = document.getElementById("57-21"); _57_21_.className = "Scorigami";
        const _36_26_ = document.getElementById("36-26"); _36_26_.className = "Scorigami";
        const _30_29_ = document.getElementById("30-29"); _30_29_.className = "Scorigami";
    }
    if (output.innerHTML > "1960") {
        const _43_2_ = document.getElementById("43-2"); _43_2_.className = "PastScorigami";
        const _77_6_ = document.getElementById("77-6"); _77_6_.className = "PastScorigami";
        const _35_8_ = document.getElementById("35-8"); _35_8_.className = "PastScorigami";
        const _43_15_ = document.getElementById("43-15"); _43_15_.className = "PastScorigami";
        const _49_16_ = document.getElementById("49-16"); _49_16_.className = "PastScorigami";
        const _47_17_ = document.getElementById("47-17"); _47_17_.className = "PastScorigami";
        const _51_19_ = document.getElementById("51-19"); _51_19_.className = "PastScorigami";
        const _44_21_ = document.getElementById("44-21"); _44_21_.className = "PastScorigami";
        const _57_21_ = document.getElementById("57-21"); _57_21_.className = "PastScorigami";
        const _36_26_ = document.getElementById("36-26"); _36_26_.className = "PastScorigami";
        const _30_29_ = document.getElementById("30-29"); _30_29_.className = "PastScorigami";
    }
    if (output.innerHTML < "1960") {
        const _43_2_ = document.getElementById("43-2"); _43_2_.className = "Blank";
        const _77_6_ = document.getElementById("77-6"); _77_6_.className = "Blank";
        const _35_8_ = document.getElementById("35-8"); _35_8_.className = "Blank";
        const _43_15_ = document.getElementById("43-15"); _43_15_.className = "Blank";
        const _49_16_ = document.getElementById("49-16"); _49_16_.className = "Blank";
        const _47_17_ = document.getElementById("47-17"); _47_17_.className = "Blank";
        const _51_19_ = document.getElementById("51-19"); _51_19_.className = "Blank";
        const _44_21_ = document.getElementById("44-21"); _44_21_.className = "Blank";
        const _57_21_ = document.getElementById("57-21"); _57_21_.className = "Blank";
        const _36_26_ = document.getElementById("36-26"); _36_26_.className = "Blank";
        const _30_29_ = document.getElementById("30-29"); _30_29_.className = "Blank";
    }

    //1961 Scorigami
    if (output.innerHTML == "1961") {
        const _49_3_ = document.getElementById("49-3"); _49_3_.className = "Scorigami";
        const _38_8_ = document.getElementById("38-8"); _38_8_.className = "Scorigami";
        const _41_8_ = document.getElementById("41-8"); _41_8_.className = "Scorigami";
        const _51_8_ = document.getElementById("51-8"); _51_8_.className = "Scorigami";
        const _54_8_ = document.getElementById("54-8"); _54_8_.className = "Scorigami";
        const _55_8_ = document.getElementById("55-8"); _55_8_.className = "Scorigami";
        const _30_15_ = document.getElementById("30-15"); _30_15_.className = "Scorigami";
        const _47_15_ = document.getElementById("47-15"); _47_15_.className = "Scorigami";
        const _48_15_ = document.getElementById("48-15"); _48_15_.className = "Scorigami";
        const _23_16_ = document.getElementById("23-16"); _23_16_.className = "Scorigami";
        const _70_19_ = document.getElementById("70-19"); _70_19_.className = "Scorigami";
        const _35_22_ = document.getElementById("35-22"); _35_22_.className = "Scorigami";
        const _65_22_ = document.getElementById("65-22"); _65_22_.className = "Scorigami";
        const _28_24_ = document.getElementById("28-24"); _28_24_.className = "Scorigami";
        const _30_25_ = document.getElementById("30-25"); _30_25_.className = "Scorigami";
        const _38_26_ = document.getElementById("38-26"); _38_26_.className = "Scorigami";
        const _42_27_ = document.getElementById("42-27"); _42_27_.className = "Scorigami";
        const _45_27_ = document.getElementById("45-27"); _45_27_.className = "Scorigami";
        const _48_28_ = document.getElementById("48-28"); _48_28_.className = "Scorigami";
        const _31_30_ = document.getElementById("31-30"); _31_30_.className = "Scorigami";
        const _41_30_ = document.getElementById("41-30"); _41_30_.className = "Scorigami";
    }
    if (output.innerHTML > "1961") {
        const _49_3_ = document.getElementById("49-3"); _49_3_.className = "PastScorigami";
        const _38_8_ = document.getElementById("38-8"); _38_8_.className = "PastScorigami";
        const _41_8_ = document.getElementById("41-8"); _41_8_.className = "PastScorigami";
        const _51_8_ = document.getElementById("51-8"); _51_8_.className = "PastScorigami";
        const _54_8_ = document.getElementById("54-8"); _54_8_.className = "PastScorigami";
        const _55_8_ = document.getElementById("55-8"); _55_8_.className = "PastScorigami";
        const _30_15_ = document.getElementById("30-15"); _30_15_.className = "PastScorigami";
        const _47_15_ = document.getElementById("47-15"); _47_15_.className = "PastScorigami";
        const _48_15_ = document.getElementById("48-15"); _48_15_.className = "PastScorigami";
        const _23_16_ = document.getElementById("23-16"); _23_16_.className = "PastScorigami";
        const _70_19_ = document.getElementById("70-19"); _70_19_.className = "PastScorigami";
        const _35_22_ = document.getElementById("35-22"); _35_22_.className = "PastScorigami";
        const _65_22_ = document.getElementById("65-22"); _65_22_.className = "PastScorigami";
        const _28_24_ = document.getElementById("28-24"); _28_24_.className = "PastScorigami";
        const _30_25_ = document.getElementById("30-25"); _30_25_.className = "PastScorigami";
        const _38_26_ = document.getElementById("38-26"); _38_26_.className = "PastScorigami";
        const _42_27_ = document.getElementById("42-27"); _42_27_.className = "PastScorigami";
        const _45_27_ = document.getElementById("45-27"); _45_27_.className = "PastScorigami";
        const _48_28_ = document.getElementById("48-28"); _48_28_.className = "PastScorigami";
        const _31_30_ = document.getElementById("31-30"); _31_30_.className = "PastScorigami";
        const _41_30_ = document.getElementById("41-30"); _41_30_.className = "PastScorigami";
    }
    if (output.innerHTML < "1961") {
        const _49_3_ = document.getElementById("49-3"); _49_3_.className = "Blank";
        const _38_8_ = document.getElementById("38-8"); _38_8_.className = "Blank";
        const _41_8_ = document.getElementById("41-8"); _41_8_.className = "Blank";
        const _51_8_ = document.getElementById("51-8"); _51_8_.className = "Blank";
        const _54_8_ = document.getElementById("54-8"); _54_8_.className = "Blank";
        const _55_8_ = document.getElementById("55-8"); _55_8_.className = "Blank";
        const _30_15_ = document.getElementById("30-15"); _30_15_.className = "Blank";
        const _47_15_ = document.getElementById("47-15"); _47_15_.className = "Blank";
        const _48_15_ = document.getElementById("48-15"); _48_15_.className = "Blank";
        const _23_16_ = document.getElementById("23-16"); _23_16_.className = "Blank";
        const _70_19_ = document.getElementById("70-19"); _70_19_.className = "Blank";
        const _35_22_ = document.getElementById("35-22"); _35_22_.className = "Blank";
        const _65_22_ = document.getElementById("65-22"); _65_22_.className = "Blank";
        const _28_24_ = document.getElementById("28-24"); _28_24_.className = "Blank";
        const _30_25_ = document.getElementById("30-25"); _30_25_.className = "Blank";
        const _38_26_ = document.getElementById("38-26"); _38_26_.className = "Blank";
        const _42_27_ = document.getElementById("42-27"); _42_27_.className = "Blank";
        const _45_27_ = document.getElementById("45-27"); _45_27_.className = "Blank";
        const _48_28_ = document.getElementById("48-28"); _48_28_.className = "Blank";
        const _31_30_ = document.getElementById("31-30"); _31_30_.className = "Blank";
        const _41_30_ = document.getElementById("41-30"); _41_30_.className = "Blank";
    }

    //1962 Scorigami
    if (output.innerHTML == "1962") {
        const _8_3_ = document.getElementById("8-3"); _8_3_.className = "Scorigami";
        const _69_13_ = document.getElementById("69-13"); _69_13_.className = "Scorigami";
        const _51_15_ = document.getElementById("51-15"); _51_15_.className = "Scorigami";
        const _22_16_ = document.getElementById("22-16"); _22_16_.className = "Scorigami";
        const _36_16_ = document.getElementById("36-16"); _36_16_.className = "Scorigami";
        const _38_16_ = document.getElementById("38-16"); _38_16_.className = "Scorigami";
        const _40_16_ = document.getElementById("40-16"); _40_16_.className = "Scorigami";
        const _25_17_ = document.getElementById("25-17"); _25_17_.className = "Scorigami";
        const _36_17_ = document.getElementById("36-17"); _36_17_.className = "Scorigami";
        const _24_18_ = document.getElementById("24-18"); _24_18_.className = "Scorigami";
        const _29_18_ = document.getElementById("29-18"); _29_18_.className = "Scorigami";
        const _24_22_ = document.getElementById("24-22"); _24_22_.className = "Scorigami";
        const _31_22_ = document.getElementById("31-22"); _31_22_.className = "Scorigami";
        const _34_22_ = document.getElementById("34-22"); _34_22_.className = "Scorigami";
        const _40_22_ = document.getElementById("40-22"); _40_22_.className = "Scorigami";
        const _51_22_ = document.getElementById("51-22"); _51_22_.className = "Scorigami";
        const _38_27_ = document.getElementById("38-27"); _38_27_.className = "Scorigami";
        const _55_30_ = document.getElementById("55-30"); _55_30_.className = "Scorigami";
        const _36_34_ = document.getElementById("36-34"); _36_34_.className = "Scorigami";
        const _42_37_ = document.getElementById("42-37"); _42_37_.className = "Scorigami";
    }
    if (output.innerHTML > "1962") {
        const _8_3_ = document.getElementById("8-3"); _8_3_.className = "PastScorigami";
        const _69_13_ = document.getElementById("69-13"); _69_13_.className = "PastScorigami";
        const _51_15_ = document.getElementById("51-15"); _51_15_.className = "PastScorigami";
        const _22_16_ = document.getElementById("22-16"); _22_16_.className = "PastScorigami";
        const _36_16_ = document.getElementById("36-16"); _36_16_.className = "PastScorigami";
        const _38_16_ = document.getElementById("38-16"); _38_16_.className = "PastScorigami";
        const _40_16_ = document.getElementById("40-16"); _40_16_.className = "PastScorigami";
        const _25_17_ = document.getElementById("25-17"); _25_17_.className = "PastScorigami";
        const _36_17_ = document.getElementById("36-17"); _36_17_.className = "PastScorigami";
        const _24_18_ = document.getElementById("24-18"); _24_18_.className = "PastScorigami";
        const _29_18_ = document.getElementById("29-18"); _29_18_.className = "PastScorigami";
        const _24_22_ = document.getElementById("24-22"); _24_22_.className = "PastScorigami";
        const _31_22_ = document.getElementById("31-22"); _31_22_.className = "PastScorigami";
        const _34_22_ = document.getElementById("34-22"); _34_22_.className = "PastScorigami";
        const _40_22_ = document.getElementById("40-22"); _40_22_.className = "PastScorigami";
        const _51_22_ = document.getElementById("51-22"); _51_22_.className = "PastScorigami";
        const _38_27_ = document.getElementById("38-27"); _38_27_.className = "PastScorigami";
        const _55_30_ = document.getElementById("55-30"); _55_30_.className = "PastScorigami";
        const _36_34_ = document.getElementById("36-34"); _36_34_.className = "PastScorigami";
        const _42_37_ = document.getElementById("42-37"); _42_37_.className = "PastScorigami";
    }
    if (output.innerHTML < "1962") {
        const _8_3_ = document.getElementById("8-3"); _8_3_.className = "Blank";
        const _69_13_ = document.getElementById("69-13"); _69_13_.className = "Blank";
        const _51_15_ = document.getElementById("51-15"); _51_15_.className = "Blank";
        const _22_16_ = document.getElementById("22-16"); _22_16_.className = "Blank";
        const _36_16_ = document.getElementById("36-16"); _36_16_.className = "Blank";
        const _38_16_ = document.getElementById("38-16"); _38_16_.className = "Blank";
        const _40_16_ = document.getElementById("40-16"); _40_16_.className = "Blank";
        const _25_17_ = document.getElementById("25-17"); _25_17_.className = "Blank";
        const _36_17_ = document.getElementById("36-17"); _36_17_.className = "Blank";
        const _24_18_ = document.getElementById("24-18"); _24_18_.className = "Blank";
        const _29_18_ = document.getElementById("29-18"); _29_18_.className = "Blank";
        const _24_22_ = document.getElementById("24-22"); _24_22_.className = "Blank";
        const _31_22_ = document.getElementById("31-22"); _31_22_.className = "Blank";
        const _34_22_ = document.getElementById("34-22"); _34_22_.className = "Blank";
        const _40_22_ = document.getElementById("40-22"); _40_22_.className = "Blank";
        const _51_22_ = document.getElementById("51-22"); _51_22_.className = "Blank";
        const _38_27_ = document.getElementById("38-27"); _38_27_.className = "Blank";
        const _55_30_ = document.getElementById("55-30"); _55_30_.className = "Blank";
        const _36_34_ = document.getElementById("36-34"); _36_34_.className = "Blank";
        const _42_37_ = document.getElementById("42-37"); _42_37_.className = "Blank";
    }

    //1963 Scorigami
    if (output.innerHTML == "1963") {
        const _25_11_ = document.getElementById("25-11"); _25_11_.className = "Scorigami";
        const _35_18_ = document.getElementById("35-18"); _35_18_.className = "Scorigami";
        const _31_23_ = document.getElementById("31-23"); _31_23_.className = "Scorigami";
        const _38_25_ = document.getElementById("38-25"); _38_25_.className = "Scorigami";
        const _35_30_ = document.getElementById("35-30"); _35_30_.className = "Scorigami";
    }
    if (output.innerHTML > "1963") {
        const _25_11_ = document.getElementById("25-11"); _25_11_.className = "PastScorigami";
        const _35_18_ = document.getElementById("35-18"); _35_18_.className = "PastScorigami";
        const _31_23_ = document.getElementById("31-23"); _31_23_.className = "PastScorigami";
        const _38_25_ = document.getElementById("38-25"); _38_25_.className = "PastScorigami";
        const _35_30_ = document.getElementById("35-30"); _35_30_.className = "PastScorigami";
    }
    if (output.innerHTML < "1963") {
        const _25_11_ = document.getElementById("25-11"); _25_11_.className = "Blank";
        const _35_18_ = document.getElementById("35-18"); _35_18_.className = "Blank";
        const _31_23_ = document.getElementById("31-23"); _31_23_.className = "Blank";
        const _38_25_ = document.getElementById("38-25"); _38_25_.className = "Blank";
        const _35_30_ = document.getElementById("35-30"); _35_30_.className = "Blank";
    }

    //1964 Scorigami
    if (output.innerHTML == "1964") {
        const _31_11_ = document.getElementById("31-11"); _31_11_.className = "Scorigami";
        const _39_16_ = document.getElementById("39-16"); _39_16_.className = "Scorigami";
        const _35_17_ = document.getElementById("35-17"); _35_17_.className = "Scorigami";
        const _57_20_ = document.getElementById("57-20"); _57_20_.className = "Scorigami";
        const _31_28_ = document.getElementById("31-28"); _31_28_.className = "Scorigami";
        const _38_35_ = document.getElementById("38-35"); _38_35_.className = "Scorigami";
    }
    if (output.innerHTML > "1964") {
        const _31_11_ = document.getElementById("31-11"); _31_11_.className = "PastScorigami";
        const _39_16_ = document.getElementById("39-16"); _39_16_.className = "PastScorigami";
        const _35_17_ = document.getElementById("35-17"); _35_17_.className = "PastScorigami";
        const _57_20_ = document.getElementById("57-20"); _57_20_.className = "PastScorigami";
        const _31_28_ = document.getElementById("31-28"); _31_28_.className = "PastScorigami";
        const _38_35_ = document.getElementById("38-35"); _38_35_.className = "PastScorigami";
    }
    if (output.innerHTML < "1964") {
        const _31_11_ = document.getElementById("31-11"); _31_11_.className = "Blank";
        const _39_16_ = document.getElementById("39-16"); _39_16_.className = "Blank";
        const _35_17_ = document.getElementById("35-17"); _35_17_.className = "Blank";
        const _57_20_ = document.getElementById("57-20"); _57_20_.className = "Blank";
        const _31_28_ = document.getElementById("31-28"); _31_28_.className = "Blank";
        const _38_35_ = document.getElementById("38-35"); _38_35_.className = "Blank";
    }

    //1965 Scorigami
    if (output.innerHTML == "1965") {
        const _34_11_ = document.getElementById("34-11"); _34_11_.className = "Scorigami";
        const _61_15_ = document.getElementById("61-15"); _61_15_.className = "Scorigami";
        const _37_16_ = document.getElementById("37-16"); _37_16_.className = "Scorigami";
        const _51_18_ = document.getElementById("51-18"); _51_18_.className = "Scorigami";
        const _37_23_ = document.getElementById("37-23"); _37_23_.className = "Scorigami";
        const _31_24_ = document.getElementById("31-24"); _31_24_.className = "Scorigami";
        const _37_24_ = document.getElementById("37-24"); _37_24_.className = "Scorigami";
        const _42_24_ = document.getElementById("42-24"); _42_24_.className = "Scorigami";
        const _57_33_ = document.getElementById("57-33"); _57_33_.className = "Scorigami";
        const _63_48_ = document.getElementById("63-48"); _63_48_.className = "Scorigami";
    }
    if (output.innerHTML > "1965") {
        const _34_11_ = document.getElementById("34-11"); _34_11_.className = "PastScorigami";
        const _61_15_ = document.getElementById("61-15"); _61_15_.className = "PastScorigami";
        const _37_16_ = document.getElementById("37-16"); _37_16_.className = "PastScorigami";
        const _51_18_ = document.getElementById("51-18"); _51_18_.className = "PastScorigami";
        const _37_23_ = document.getElementById("37-23"); _37_23_.className = "PastScorigami";
        const _31_24_ = document.getElementById("31-24"); _31_24_.className = "PastScorigami";
        const _37_24_ = document.getElementById("37-24"); _37_24_.className = "PastScorigami";
        const _42_24_ = document.getElementById("42-24"); _42_24_.className = "PastScorigami";
        const _57_33_ = document.getElementById("57-33"); _57_33_.className = "PastScorigami";
        const _63_48_ = document.getElementById("63-48"); _63_48_.className = "PastScorigami";
    }
    if (output.innerHTML < "1965") {
        const _34_11_ = document.getElementById("34-11"); _34_11_.className = "Blank";
        const _61_15_ = document.getElementById("61-15"); _61_15_.className = "Blank";
        const _37_16_ = document.getElementById("37-16"); _37_16_.className = "Blank";
        const _51_18_ = document.getElementById("51-18"); _51_18_.className = "Blank";
        const _37_23_ = document.getElementById("37-23"); _37_23_.className = "Blank";
        const _31_24_ = document.getElementById("31-24"); _31_24_.className = "Blank";
        const _37_24_ = document.getElementById("37-24"); _37_24_.className = "Blank";
        const _42_24_ = document.getElementById("42-24"); _42_24_.className = "Blank";
        const _57_33_ = document.getElementById("57-33"); _57_33_.className = "Blank";
        const _63_48_ = document.getElementById("63-48"); _63_48_.className = "Blank";
    }

    //1966 Scorigami
    if (output.innerHTML == "1966") {
        const _33_11_ = document.getElementById("33-11"); _33_11_.className = "Scorigami";
        const _49_11_ = document.getElementById("49-11"); _49_11_.className = "Scorigami";
        const _57_11_ = document.getElementById("57-11"); _57_11_.className = "Scorigami";
        const _70_12_ = document.getElementById("70-12"); _70_12_.className = "Scorigami";
        const _57_14_ = document.getElementById("57-14"); _57_14_.className = "Scorigami";
        const _73_14_ = document.getElementById("73-14"); _73_14_.className = "Scorigami";
        const _36_15_ = document.getElementById("36-15"); _36_15_.className = "Scorigami";
        const _29_17_ = document.getElementById("29-17"); _29_17_.className = "Scorigami";
        const _41_17_ = document.getElementById("41-17"); _41_17_.className = "Scorigami";
        const _45_17_ = document.getElementById("45-17"); _45_17_.className = "Scorigami";
        const _56_18_ = document.getElementById("56-18"); _56_18_.className = "Scorigami";
        const _62_20_ = document.getElementById("62-20"); _62_20_.className = "Scorigami";
        const _32_23_ = document.getElementById("32-23"); _32_23_.className = "Scorigami";
        const _49_23_ = document.getElementById("49-23"); _49_23_.className = "Scorigami";
        const _48_24_ = document.getElementById("48-24"); _48_24_.className = "Scorigami";
        const _66_26_ = document.getElementById("66-26"); _66_26_.className = "Scorigami";
        const _49_28_ = document.getElementById("49-28"); _49_28_.className = "Scorigami";
        const _42_33_ = document.getElementById("42-33"); _42_33_.className = "Scorigami";
        const _40_35_ = document.getElementById("40-35"); _40_35_.className = "Scorigami";
        const _40_38_ = document.getElementById("40-38"); _40_38_.className = "Scorigami";
    }
    if (output.innerHTML > "1966") {
        const _33_11_ = document.getElementById("33-11"); _33_11_.className = "PastScorigami";
        const _49_11_ = document.getElementById("49-11"); _49_11_.className = "PastScorigami";
        const _57_11_ = document.getElementById("57-11"); _57_11_.className = "PastScorigami";
        const _70_12_ = document.getElementById("70-12"); _70_12_.className = "PastScorigami";
        const _57_14_ = document.getElementById("57-14"); _57_14_.className = "PastScorigami";
        const _73_14_ = document.getElementById("73-14"); _73_14_.className = "PastScorigami";
        const _36_15_ = document.getElementById("36-15"); _36_15_.className = "PastScorigami";
        const _29_17_ = document.getElementById("29-17"); _29_17_.className = "PastScorigami";
        const _41_17_ = document.getElementById("41-17"); _41_17_.className = "PastScorigami";
        const _45_17_ = document.getElementById("45-17"); _45_17_.className = "PastScorigami";
        const _56_18_ = document.getElementById("56-18"); _56_18_.className = "PastScorigami";
        const _62_20_ = document.getElementById("62-20"); _62_20_.className = "PastScorigami";
        const _32_23_ = document.getElementById("32-23"); _32_23_.className = "PastScorigami";
        const _49_23_ = document.getElementById("49-23"); _49_23_.className = "PastScorigami";
        const _48_24_ = document.getElementById("48-24"); _48_24_.className = "PastScorigami";
        const _66_26_ = document.getElementById("66-26"); _66_26_.className = "PastScorigami";
        const _49_28_ = document.getElementById("49-28"); _49_28_.className = "PastScorigami";
        const _42_33_ = document.getElementById("42-33"); _42_33_.className = "PastScorigami";
        const _40_35_ = document.getElementById("40-35"); _40_35_.className = "PastScorigami";
        const _40_38_ = document.getElementById("40-38"); _40_38_.className = "PastScorigami";
    }
    if (output.innerHTML < "1966") {
        const _33_11_ = document.getElementById("33-11"); _33_11_.className = "Blank";
        const _49_11_ = document.getElementById("49-11"); _49_11_.className = "Blank";
        const _57_11_ = document.getElementById("57-11"); _57_11_.className = "Blank";
        const _70_12_ = document.getElementById("70-12"); _70_12_.className = "Blank";
        const _57_14_ = document.getElementById("57-14"); _57_14_.className = "Blank";
        const _73_14_ = document.getElementById("73-14"); _73_14_.className = "Blank";
        const _36_15_ = document.getElementById("36-15"); _36_15_.className = "Blank";
        const _29_17_ = document.getElementById("29-17"); _29_17_.className = "Blank";
        const _41_17_ = document.getElementById("41-17"); _41_17_.className = "Blank";
        const _45_17_ = document.getElementById("45-17"); _45_17_.className = "Blank";
        const _56_18_ = document.getElementById("56-18"); _56_18_.className = "Blank";
        const _62_20_ = document.getElementById("62-20"); _62_20_.className = "Blank";
        const _32_23_ = document.getElementById("32-23"); _32_23_.className = "Blank";
        const _49_23_ = document.getElementById("49-23"); _49_23_.className = "Blank";
        const _48_24_ = document.getElementById("48-24"); _48_24_.className = "Blank";
        const _66_26_ = document.getElementById("66-26"); _66_26_.className = "Blank";
        const _49_28_ = document.getElementById("49-28"); _49_28_.className = "Blank";
        const _42_33_ = document.getElementById("42-33"); _42_33_.className = "Blank";
        const _40_35_ = document.getElementById("40-35"); _40_35_.className = "Blank";
        const _40_38_ = document.getElementById("40-38"); _40_38_.className = "Blank";
    }

    //1967 Scorigami
    if (output.innerHTML == "1967") {
        const _67_8_ = document.getElementById("67-8"); _67_8_.className = "Scorigami";
        const _42_9_ = document.getElementById("42-9"); _42_9_.className = "Scorigami";
        const _75_12_ = document.getElementById("75-12"); _75_12_.className = "Scorigami";
        const _38_15_ = document.getElementById("38-15"); _38_15_.className = "Scorigami";
        const _56_15_ = document.getElementById("56-15"); _56_15_.className = "Scorigami";
        const _42_16_ = document.getElementById("42-16"); _42_16_.className = "Scorigami";
        const _40_17_ = document.getElementById("40-17"); _40_17_.className = "Scorigami";
        const _42_17_ = document.getElementById("42-17"); _42_17_.className = "Scorigami";
        const _44_19_ = document.getElementById("44-19"); _44_19_.className = "Scorigami";
        const _43_21_ = document.getElementById("43-21"); _43_21_.className = "Scorigami";
        const _23_22_ = document.getElementById("23-22"); _23_22_.className = "Scorigami";
        const _41_22_ = document.getElementById("41-22"); _41_22_.className = "Scorigami";
        const _44_22_ = document.getElementById("44-22"); _44_22_.className = "Scorigami";
        const _41_23_ = document.getElementById("41-23"); _41_23_.className = "Scorigami";
        const _51_23_ = document.getElementById("51-23"); _51_23_.className = "Scorigami";
        const _56_23_ = document.getElementById("56-23"); _56_23_.className = "Scorigami";
        const _39_24_ = document.getElementById("39-24"); _39_24_.className = "Scorigami";
        const _31_25_ = document.getElementById("31-25"); _31_25_.className = "Scorigami";
        const _50_28_ = document.getElementById("50-28"); _50_28_.className = "Scorigami";
        const _34_29_ = document.getElementById("34-29"); _34_29_.className = "Scorigami";
        const _31_31_ = document.getElementById("31-31"); _31_31_.className = "Scorigami";
        const _49_32_ = document.getElementById("49-32"); _49_32_.className = "Scorigami";
        const _37_37_ = document.getElementById("37-37"); _37_37_.className = "Scorigami";
    }
    if (output.innerHTML > "1967") {
        const _67_8_ = document.getElementById("67-8"); _67_8_.className = "PastScorigami";
        const _42_9_ = document.getElementById("42-9"); _42_9_.className = "PastScorigami";
        const _75_12_ = document.getElementById("75-12"); _75_12_.className = "PastScorigami";
        const _38_15_ = document.getElementById("38-15"); _38_15_.className = "PastScorigami";
        const _56_15_ = document.getElementById("56-15"); _56_15_.className = "PastScorigami";
        const _42_16_ = document.getElementById("42-16"); _42_16_.className = "PastScorigami";
        const _40_17_ = document.getElementById("40-17"); _40_17_.className = "PastScorigami";
        const _42_17_ = document.getElementById("42-17"); _42_17_.className = "PastScorigami";
        const _44_19_ = document.getElementById("44-19"); _44_19_.className = "PastScorigami";
        const _43_21_ = document.getElementById("43-21"); _43_21_.className = "PastScorigami";
        const _23_22_ = document.getElementById("23-22"); _23_22_.className = "PastScorigami";
        const _41_22_ = document.getElementById("41-22"); _41_22_.className = "PastScorigami";
        const _44_22_ = document.getElementById("44-22"); _44_22_.className = "PastScorigami";
        const _41_23_ = document.getElementById("41-23"); _41_23_.className = "PastScorigami";
        const _51_23_ = document.getElementById("51-23"); _51_23_.className = "PastScorigami";
        const _56_23_ = document.getElementById("56-23"); _56_23_.className = "PastScorigami";
        const _39_24_ = document.getElementById("39-24"); _39_24_.className = "PastScorigami";
        const _31_25_ = document.getElementById("31-25"); _31_25_.className = "PastScorigami";
        const _50_28_ = document.getElementById("50-28"); _50_28_.className = "PastScorigami";
        const _34_29_ = document.getElementById("34-29"); _34_29_.className = "PastScorigami";
        const _31_31_ = document.getElementById("31-31"); _31_31_.className = "PastScorigami";
        const _49_32_ = document.getElementById("49-32"); _49_32_.className = "PastScorigami";
        const _37_37_ = document.getElementById("37-37"); _37_37_.className = "PastScorigami";
    }
    if (output.innerHTML < "1967") {
        const _67_8_ = document.getElementById("67-8"); _67_8_.className = "Blank";
        const _42_9_ = document.getElementById("42-9"); _42_9_.className = "Blank";
        const _75_12_ = document.getElementById("75-12"); _75_12_.className = "Blank";
        const _38_15_ = document.getElementById("38-15"); _38_15_.className = "Blank";
        const _56_15_ = document.getElementById("56-15"); _56_15_.className = "Blank";
        const _42_16_ = document.getElementById("42-16"); _42_16_.className = "Blank";
        const _40_17_ = document.getElementById("40-17"); _40_17_.className = "Blank";
        const _42_17_ = document.getElementById("42-17"); _42_17_.className = "Blank";
        const _44_19_ = document.getElementById("44-19"); _44_19_.className = "Blank";
        const _43_21_ = document.getElementById("43-21"); _43_21_.className = "Blank";
        const _23_22_ = document.getElementById("23-22"); _23_22_.className = "Blank";
        const _41_22_ = document.getElementById("41-22"); _41_22_.className = "Blank";
        const _44_22_ = document.getElementById("44-22"); _44_22_.className = "Blank";
        const _41_23_ = document.getElementById("41-23"); _41_23_.className = "Blank";
        const _51_23_ = document.getElementById("51-23"); _51_23_.className = "Blank";
        const _56_23_ = document.getElementById("56-23"); _56_23_.className = "Blank";
        const _39_24_ = document.getElementById("39-24"); _39_24_.className = "Blank";
        const _31_25_ = document.getElementById("31-25"); _31_25_.className = "Blank";
        const _50_28_ = document.getElementById("50-28"); _50_28_.className = "Blank";
        const _34_29_ = document.getElementById("34-29"); _34_29_.className = "Blank";
        const _31_31_ = document.getElementById("31-31"); _31_31_.className = "Blank";
        const _49_32_ = document.getElementById("49-32"); _49_32_.className = "Blank";
        const _37_37_ = document.getElementById("37-37"); _37_37_.className = "Blank";
    }

    //1968 Scorigami
    if (output.innerHTML == "1968") {
        const _50_3_ = document.getElementById("50-3"); _50_3_.className = "Scorigami";
        const _77_3_ = document.getElementById("77-3"); _77_3_.className = "Scorigami";
        const _100_6_ = document.getElementById("100-6"); _100_6_.className = "Scorigami";
        const _58_8_ = document.getElementById("58-8"); _58_8_.className = "Scorigami";
        const _62_8_ = document.getElementById("62-8"); _62_8_.className = "Scorigami";
        const _65_9_ = document.getElementById("65-9"); _65_9_.className = "Scorigami";
        const _33_10_ = document.getElementById("33-10"); _33_10_.className = "Scorigami";
        const _57_13_ = document.getElementById("57-13"); _57_13_.className = "Scorigami";
        const _25_15_ = document.getElementById("25-15"); _25_15_.className = "Scorigami";
        const _37_15_ = document.getElementById("37-15"); _37_15_.className = "Scorigami";
        const _44_15_ = document.getElementById("44-15"); _44_15_.className = "Scorigami";
        const _49_15_ = document.getElementById("49-15"); _49_15_.className = "Scorigami";
        const _50_17_ = document.getElementById("50-17"); _50_17_.className = "Scorigami";
        const _56_20_ = document.getElementById("56-20"); _56_20_.className = "Scorigami";
        const _68_20_ = document.getElementById("68-20"); _68_20_.className = "Scorigami";
        const _37_22_ = document.getElementById("37-22"); _37_22_.className = "Scorigami";
        const _36_23_ = document.getElementById("36-23"); _36_23_.className = "Scorigami";
        const _32_24_ = document.getElementById("32-24"); _32_24_.className = "Scorigami";
        const _46_25_ = document.getElementById("46-25"); _46_25_.className = "Scorigami";
        const _57_25_ = document.getElementById("57-25"); _57_25_.className = "Scorigami";
        const _58_25_ = document.getElementById("58-25"); _58_25_.className = "Scorigami";
        const _51_28_ = document.getElementById("51-28"); _51_28_.className = "Scorigami";
        const _63_28_ = document.getElementById("63-28"); _63_28_.className = "Scorigami";
        const _29_29_ = document.getElementById("29-29"); _29_29_.className = "Scorigami";
        const _38_29_ = document.getElementById("38-29"); _38_29_.className = "Scorigami";
        const _39_29_ = document.getElementById("39-29"); _39_29_.className = "Scorigami";
        const _46_30_ = document.getElementById("46-30"); _46_30_.className = "Scorigami";
        const _40_31_ = document.getElementById("40-31"); _40_31_.className = "Scorigami";
        const _48_31_ = document.getElementById("48-31"); _48_31_.className = "Scorigami";
        const _71_33_ = document.getElementById("71-33"); _71_33_.className = "Scorigami";
        const _38_34_ = document.getElementById("38-34"); _38_34_.className = "Scorigami";
        const _48_34_ = document.getElementById("48-34"); _48_34_.className = "Scorigami";
        const _55_34_ = document.getElementById("55-34"); _55_34_.className = "Scorigami";
        const _68_34_ = document.getElementById("68-34"); _68_34_.className = "Scorigami";
        const _58_35_ = document.getElementById("58-35"); _58_35_.className = "Scorigami";
        const _40_36_ = document.getElementById("40-36"); _40_36_.className = "Scorigami";
        const _53_36_ = document.getElementById("53-36"); _53_36_.className = "Scorigami";
        const _38_37_ = document.getElementById("38-37"); _38_37_.className = "Scorigami";
        const _50_40_ = document.getElementById("50-40"); _50_40_.className = "Scorigami";
        const _49_42_ = document.getElementById("49-42"); _49_42_.className = "Scorigami";
        const _50_42_ = document.getElementById("50-42"); _50_42_.className = "Scorigami";
        const _56_45_ = document.getElementById("56-45"); _56_45_.className = "Scorigami";
        const _63_47_ = document.getElementById("63-47"); _63_47_.className = "Scorigami";
        const _60_48_ = document.getElementById("60-48"); _60_48_.className = "Scorigami";
    }
    if (output.innerHTML > "1968") {
        const _50_3_ = document.getElementById("50-3"); _50_3_.className = "PastScorigami";
        const _77_3_ = document.getElementById("77-3"); _77_3_.className = "PastScorigami";
        const _100_6_ = document.getElementById("100-6"); _100_6_.className = "PastScorigami";
        const _58_8_ = document.getElementById("58-8"); _58_8_.className = "PastScorigami";
        const _62_8_ = document.getElementById("62-8"); _62_8_.className = "PastScorigami";
        const _65_9_ = document.getElementById("65-9"); _65_9_.className = "PastScorigami";
        const _33_10_ = document.getElementById("33-10"); _33_10_.className = "PastScorigami";
        const _57_13_ = document.getElementById("57-13"); _57_13_.className = "PastScorigami";
        const _25_15_ = document.getElementById("25-15"); _25_15_.className = "PastScorigami";
        const _37_15_ = document.getElementById("37-15"); _37_15_.className = "PastScorigami";
        const _44_15_ = document.getElementById("44-15"); _44_15_.className = "PastScorigami";
        const _49_15_ = document.getElementById("49-15"); _49_15_.className = "PastScorigami";
        const _50_17_ = document.getElementById("50-17"); _50_17_.className = "PastScorigami";
        const _56_20_ = document.getElementById("56-20"); _56_20_.className = "PastScorigami";
        const _68_20_ = document.getElementById("68-20"); _68_20_.className = "PastScorigami";
        const _37_22_ = document.getElementById("37-22"); _37_22_.className = "PastScorigami";
        const _36_23_ = document.getElementById("36-23"); _36_23_.className = "PastScorigami";
        const _32_24_ = document.getElementById("32-24"); _32_24_.className = "PastScorigami";
        const _46_25_ = document.getElementById("46-25"); _46_25_.className = "PastScorigami";
        const _57_25_ = document.getElementById("57-25"); _57_25_.className = "PastScorigami";
        const _58_25_ = document.getElementById("58-25"); _58_25_.className = "PastScorigami";
        const _51_28_ = document.getElementById("51-28"); _51_28_.className = "PastScorigami";
        const _63_28_ = document.getElementById("63-28"); _63_28_.className = "PastScorigami";
        const _29_29_ = document.getElementById("29-29"); _29_29_.className = "PastScorigami";
        const _38_29_ = document.getElementById("38-29"); _38_29_.className = "PastScorigami";
        const _39_29_ = document.getElementById("39-29"); _39_29_.className = "PastScorigami";
        const _46_30_ = document.getElementById("46-30"); _46_30_.className = "PastScorigami";
        const _40_31_ = document.getElementById("40-31"); _40_31_.className = "PastScorigami";
        const _48_31_ = document.getElementById("48-31"); _48_31_.className = "PastScorigami";
        const _71_33_ = document.getElementById("71-33"); _71_33_.className = "PastScorigami";
        const _38_34_ = document.getElementById("38-34"); _38_34_.className = "PastScorigami";
        const _48_34_ = document.getElementById("48-34"); _48_34_.className = "PastScorigami";
        const _55_34_ = document.getElementById("55-34"); _55_34_.className = "PastScorigami";
        const _68_34_ = document.getElementById("68-34"); _68_34_.className = "PastScorigami";
        const _58_35_ = document.getElementById("58-35"); _58_35_.className = "PastScorigami";
        const _40_36_ = document.getElementById("40-36"); _40_36_.className = "PastScorigami";
        const _53_36_ = document.getElementById("53-36"); _53_36_.className = "PastScorigami";
        const _38_37_ = document.getElementById("38-37"); _38_37_.className = "PastScorigami";
        const _50_40_ = document.getElementById("50-40"); _50_40_.className = "PastScorigami";
        const _49_42_ = document.getElementById("49-42"); _49_42_.className = "PastScorigami";
        const _50_42_ = document.getElementById("50-42"); _50_42_.className = "PastScorigami";
        const _56_45_ = document.getElementById("56-45"); _56_45_.className = "PastScorigami";
        const _63_47_ = document.getElementById("63-47"); _63_47_.className = "PastScorigami";
        const _60_48_ = document.getElementById("60-48"); _60_48_.className = "PastScorigami";
    }
    if (output.innerHTML < "1968") {
        const _50_3_ = document.getElementById("50-3"); _50_3_.className = "Blank";
        const _77_3_ = document.getElementById("77-3"); _77_3_.className = "Blank";
        const _100_6_ = document.getElementById("100-6"); _100_6_.className = "Blank";
        const _58_8_ = document.getElementById("58-8"); _58_8_.className = "Blank";
        const _62_8_ = document.getElementById("62-8"); _62_8_.className = "Blank";
        const _65_9_ = document.getElementById("65-9"); _65_9_.className = "Blank";
        const _33_10_ = document.getElementById("33-10"); _33_10_.className = "Blank";
        const _57_13_ = document.getElementById("57-13"); _57_13_.className = "Blank";
        const _25_15_ = document.getElementById("25-15"); _25_15_.className = "Blank";
        const _37_15_ = document.getElementById("37-15"); _37_15_.className = "Blank";
        const _44_15_ = document.getElementById("44-15"); _44_15_.className = "Blank";
        const _49_15_ = document.getElementById("49-15"); _49_15_.className = "Blank";
        const _50_17_ = document.getElementById("50-17"); _50_17_.className = "Blank";
        const _56_20_ = document.getElementById("56-20"); _56_20_.className = "Blank";
        const _68_20_ = document.getElementById("68-20"); _68_20_.className = "Blank";
        const _37_22_ = document.getElementById("37-22"); _37_22_.className = "Blank";
        const _36_23_ = document.getElementById("36-23"); _36_23_.className = "Blank";
        const _32_24_ = document.getElementById("32-24"); _32_24_.className = "Blank";
        const _46_25_ = document.getElementById("46-25"); _46_25_.className = "Blank";
        const _57_25_ = document.getElementById("57-25"); _57_25_.className = "Blank";
        const _58_25_ = document.getElementById("58-25"); _58_25_.className = "Blank";
        const _51_28_ = document.getElementById("51-28"); _51_28_.className = "Blank";
        const _63_28_ = document.getElementById("63-28"); _63_28_.className = "Blank";
        const _29_29_ = document.getElementById("29-29"); _29_29_.className = "Blank";
        const _38_29_ = document.getElementById("38-29"); _38_29_.className = "Blank";
        const _39_29_ = document.getElementById("39-29"); _39_29_.className = "Blank";
        const _46_30_ = document.getElementById("46-30"); _46_30_.className = "Blank";
        const _40_31_ = document.getElementById("40-31"); _40_31_.className = "Blank";
        const _48_31_ = document.getElementById("48-31"); _48_31_.className = "Blank";
        const _71_33_ = document.getElementById("71-33"); _71_33_.className = "Blank";
        const _38_34_ = document.getElementById("38-34"); _38_34_.className = "Blank";
        const _48_34_ = document.getElementById("48-34"); _48_34_.className = "Blank";
        const _55_34_ = document.getElementById("55-34"); _55_34_.className = "Blank";
        const _68_34_ = document.getElementById("68-34"); _68_34_.className = "Blank";
        const _58_35_ = document.getElementById("58-35"); _58_35_.className = "Blank";
        const _40_36_ = document.getElementById("40-36"); _40_36_.className = "Blank";
        const _53_36_ = document.getElementById("53-36"); _53_36_.className = "Blank";
        const _38_37_ = document.getElementById("38-37"); _38_37_.className = "Blank";
        const _50_40_ = document.getElementById("50-40"); _50_40_.className = "Blank";
        const _49_42_ = document.getElementById("49-42"); _49_42_.className = "Blank";
        const _50_42_ = document.getElementById("50-42"); _50_42_.className = "Blank";
        const _56_45_ = document.getElementById("56-45"); _56_45_.className = "Blank";
        const _63_47_ = document.getElementById("63-47"); _63_47_.className = "Blank";
        const _60_48_ = document.getElementById("60-48"); _60_48_.className = "Blank";
    }

    //1969 Scorigami
    if (output.innerHTML == "1969") {
        const _52_2_ = document.getElementById("52-2"); _52_2_.className = "Scorigami";
        const _57_8_ = document.getElementById("57-8"); _57_8_.className = "Scorigami";
        const _63_8_ = document.getElementById("63-8"); _63_8_.className = "Scorigami";
        const _44_10_ = document.getElementById("44-10"); _44_10_.className = "Scorigami";
        const _45_11_ = document.getElementById("45-11"); _45_11_.className = "Scorigami";
        const _61_11_ = document.getElementById("61-11"); _61_11_.className = "Scorigami";
        const _77_14_ = document.getElementById("77-14"); _77_14_.className = "Scorigami";
        const _31_15_ = document.getElementById("31-15"); _31_15_.className = "Scorigami";
        const _40_15_ = document.getElementById("40-15"); _40_15_.className = "Scorigami";
        const _45_15_ = document.getElementById("45-15"); _45_15_.className = "Scorigami";
        const _55_16_ = document.getElementById("55-16"); _55_16_.className = "Scorigami";
        const _57_16_ = document.getElementById("57-16"); _57_16_.className = "Scorigami";
        const _43_17_ = document.getElementById("43-17"); _43_17_.className = "Scorigami";
        const _48_17_ = document.getElementById("48-17"); _48_17_.className = "Scorigami";
        const _56_17_ = document.getElementById("56-17"); _56_17_.className = "Scorigami";
        const _49_18_ = document.getElementById("49-18"); _49_18_.className = "Scorigami";
        const _69_19_ = document.getElementById("69-19"); _69_19_.className = "Scorigami";
        const _51_20_ = document.getElementById("51-20"); _51_20_.className = "Scorigami";
        const _50_21_ = document.getElementById("50-21"); _50_21_.className = "Scorigami";
        const _55_21_ = document.getElementById("55-21"); _55_21_.className = "Scorigami";
        const _63_21_ = document.getElementById("63-21"); _63_21_.className = "Scorigami";
        const _69_21_ = document.getElementById("69-21"); _69_21_.className = "Scorigami";
        const _70_21_ = document.getElementById("70-21"); _70_21_.className = "Scorigami";
        const _48_22_ = document.getElementById("48-22"); _48_22_.className = "Scorigami";
        const _49_22_ = document.getElementById("49-22"); _49_22_.className = "Scorigami";
        const _38_23_ = document.getElementById("38-23"); _38_23_.className = "Scorigami";
        const _25_24_ = document.getElementById("25-24"); _25_24_.className = "Scorigami";
        const _38_24_ = document.getElementById("38-24"); _38_24_.className = "Scorigami";
        const _41_24_ = document.getElementById("41-24"); _41_24_.className = "Scorigami";
        const _56_24_ = document.getElementById("56-24"); _56_24_.className = "Scorigami";
        const _31_26_ = document.getElementById("31-26"); _31_26_.className = "Scorigami";
        const _52_28_ = document.getElementById("52-28"); _52_28_.className = "Scorigami";
        const _42_30_ = document.getElementById("42-30"); _42_30_.className = "Scorigami";
        const _47_30_ = document.getElementById("47-30"); _47_30_.className = "Scorigami";
        const _58_30_ = document.getElementById("58-30"); _58_30_.className = "Scorigami";
        const _36_32_ = document.getElementById("36-32"); _36_32_.className = "Scorigami";
        const _45_32_ = document.getElementById("45-32"); _45_32_.className = "Scorigami";
        const _58_32_ = document.getElementById("58-32"); _58_32_.className = "Scorigami";
        const _37_33_ = document.getElementById("37-33"); _37_33_.className = "Scorigami";
        const _47_33_ = document.getElementById("47-33"); _47_33_.className = "Scorigami";
        const _56_33_ = document.getElementById("56-33"); _56_33_.className = "Scorigami";
        const _47_34_ = document.getElementById("47-34"); _47_34_.className = "Scorigami";
        const _59_34_ = document.getElementById("59-34"); _59_34_.className = "Scorigami";
        const _36_35_ = document.getElementById("36-35"); _36_35_.className = "Scorigami";
        const _61_35_ = document.getElementById("61-35"); _61_35_.className = "Scorigami";
        const _38_36_ = document.getElementById("38-36"); _38_36_.className = "Scorigami";
        const _41_38_ = document.getElementById("41-38"); _41_38_.className = "Scorigami";
        const _47_42_ = document.getElementById("47-42"); _47_42_.className = "Scorigami";
    }
    if (output.innerHTML > "1969") {
        const _52_2_ = document.getElementById("52-2"); _52_2_.className = "PastScorigami";
        const _57_8_ = document.getElementById("57-8"); _57_8_.className = "PastScorigami";
        const _63_8_ = document.getElementById("63-8"); _63_8_.className = "PastScorigami";
        const _44_10_ = document.getElementById("44-10"); _44_10_.className = "PastScorigami";
        const _45_11_ = document.getElementById("45-11"); _45_11_.className = "PastScorigami";
        const _61_11_ = document.getElementById("61-11"); _61_11_.className = "PastScorigami";
        const _77_14_ = document.getElementById("77-14"); _77_14_.className = "PastScorigami";
        const _31_15_ = document.getElementById("31-15"); _31_15_.className = "PastScorigami";
        const _40_15_ = document.getElementById("40-15"); _40_15_.className = "PastScorigami";
        const _45_15_ = document.getElementById("45-15"); _45_15_.className = "PastScorigami";
        const _55_16_ = document.getElementById("55-16"); _55_16_.className = "PastScorigami";
        const _57_16_ = document.getElementById("57-16"); _57_16_.className = "PastScorigami";
        const _43_17_ = document.getElementById("43-17"); _43_17_.className = "PastScorigami";
        const _48_17_ = document.getElementById("48-17"); _48_17_.className = "PastScorigami";
        const _56_17_ = document.getElementById("56-17"); _56_17_.className = "PastScorigami";
        const _49_18_ = document.getElementById("49-18"); _49_18_.className = "PastScorigami";
        const _69_19_ = document.getElementById("69-19"); _69_19_.className = "PastScorigami";
        const _51_20_ = document.getElementById("51-20"); _51_20_.className = "PastScorigami";
        const _50_21_ = document.getElementById("50-21"); _50_21_.className = "PastScorigami";
        const _55_21_ = document.getElementById("55-21"); _55_21_.className = "PastScorigami";
        const _63_21_ = document.getElementById("63-21"); _63_21_.className = "PastScorigami";
        const _69_21_ = document.getElementById("69-21"); _69_21_.className = "PastScorigami";
        const _70_21_ = document.getElementById("70-21"); _70_21_.className = "PastScorigami";
        const _48_22_ = document.getElementById("48-22"); _48_22_.className = "PastScorigami";
        const _49_22_ = document.getElementById("49-22"); _49_22_.className = "PastScorigami";
        const _38_23_ = document.getElementById("38-23"); _38_23_.className = "PastScorigami";
        const _25_24_ = document.getElementById("25-24"); _25_24_.className = "PastScorigami";
        const _38_24_ = document.getElementById("38-24"); _38_24_.className = "PastScorigami";
        const _41_24_ = document.getElementById("41-24"); _41_24_.className = "PastScorigami";
        const _56_24_ = document.getElementById("56-24"); _56_24_.className = "PastScorigami";
        const _31_26_ = document.getElementById("31-26"); _31_26_.className = "PastScorigami";
        const _52_28_ = document.getElementById("52-28"); _52_28_.className = "PastScorigami";
        const _42_30_ = document.getElementById("42-30"); _42_30_.className = "PastScorigami";
        const _47_30_ = document.getElementById("47-30"); _47_30_.className = "PastScorigami";
        const _58_30_ = document.getElementById("58-30"); _58_30_.className = "PastScorigami";
        const _36_32_ = document.getElementById("36-32"); _36_32_.className = "PastScorigami";
        const _45_32_ = document.getElementById("45-32"); _45_32_.className = "PastScorigami";
        const _58_32_ = document.getElementById("58-32"); _58_32_.className = "PastScorigami";
        const _37_33_ = document.getElementById("37-33"); _37_33_.className = "PastScorigami";
        const _47_33_ = document.getElementById("47-33"); _47_33_.className = "PastScorigami";
        const _56_33_ = document.getElementById("56-33"); _56_33_.className = "PastScorigami";
        const _47_34_ = document.getElementById("47-34"); _47_34_.className = "PastScorigami";
        const _59_34_ = document.getElementById("59-34"); _59_34_.className = "PastScorigami";
        const _36_35_ = document.getElementById("36-35"); _36_35_.className = "PastScorigami";
        const _61_35_ = document.getElementById("61-35"); _61_35_.className = "PastScorigami";
        const _38_36_ = document.getElementById("38-36"); _38_36_.className = "PastScorigami";
        const _41_38_ = document.getElementById("41-38"); _41_38_.className = "PastScorigami";
        const _47_42_ = document.getElementById("47-42"); _47_42_.className = "PastScorigami";
    }
    if (output.innerHTML < "1969") {
        const _52_2_ = document.getElementById("52-2"); _52_2_.className = "Blank";
        const _57_8_ = document.getElementById("57-8"); _57_8_.className = "Blank";
        const _63_8_ = document.getElementById("63-8"); _63_8_.className = "Blank";
        const _44_10_ = document.getElementById("44-10"); _44_10_.className = "Blank";
        const _45_11_ = document.getElementById("45-11"); _45_11_.className = "Blank";
        const _61_11_ = document.getElementById("61-11"); _61_11_.className = "Blank";
        const _77_14_ = document.getElementById("77-14"); _77_14_.className = "Blank";
        const _31_15_ = document.getElementById("31-15"); _31_15_.className = "Blank";
        const _40_15_ = document.getElementById("40-15"); _40_15_.className = "Blank";
        const _45_15_ = document.getElementById("45-15"); _45_15_.className = "Blank";
        const _55_16_ = document.getElementById("55-16"); _55_16_.className = "Blank";
        const _57_16_ = document.getElementById("57-16"); _57_16_.className = "Blank";
        const _43_17_ = document.getElementById("43-17"); _43_17_.className = "Blank";
        const _48_17_ = document.getElementById("48-17"); _48_17_.className = "Blank";
        const _56_17_ = document.getElementById("56-17"); _56_17_.className = "Blank";
        const _49_18_ = document.getElementById("49-18"); _49_18_.className = "Blank";
        const _69_19_ = document.getElementById("69-19"); _69_19_.className = "Blank";
        const _51_20_ = document.getElementById("51-20"); _51_20_.className = "Blank";
        const _50_21_ = document.getElementById("50-21"); _50_21_.className = "Blank";
        const _55_21_ = document.getElementById("55-21"); _55_21_.className = "Blank";
        const _63_21_ = document.getElementById("63-21"); _63_21_.className = "Blank";
        const _69_21_ = document.getElementById("69-21"); _69_21_.className = "Blank";
        const _70_21_ = document.getElementById("70-21"); _70_21_.className = "Blank";
        const _48_22_ = document.getElementById("48-22"); _48_22_.className = "Blank";
        const _49_22_ = document.getElementById("49-22"); _49_22_.className = "Blank";
        const _38_23_ = document.getElementById("38-23"); _38_23_.className = "Blank";
        const _25_24_ = document.getElementById("25-24"); _25_24_.className = "Blank";
        const _38_24_ = document.getElementById("38-24"); _38_24_.className = "Blank";
        const _41_24_ = document.getElementById("41-24"); _41_24_.className = "Blank";
        const _56_24_ = document.getElementById("56-24"); _56_24_.className = "Blank";
        const _31_26_ = document.getElementById("31-26"); _31_26_.className = "Blank";
        const _52_28_ = document.getElementById("52-28"); _52_28_.className = "Blank";
        const _42_30_ = document.getElementById("42-30"); _42_30_.className = "Blank";
        const _47_30_ = document.getElementById("47-30"); _47_30_.className = "Blank";
        const _58_30_ = document.getElementById("58-30"); _58_30_.className = "Blank";
        const _36_32_ = document.getElementById("36-32"); _36_32_.className = "Blank";
        const _45_32_ = document.getElementById("45-32"); _45_32_.className = "Blank";
        const _58_32_ = document.getElementById("58-32"); _58_32_.className = "Blank";
        const _37_33_ = document.getElementById("37-33"); _37_33_.className = "Blank";
        const _47_33_ = document.getElementById("47-33"); _47_33_.className = "Blank";
        const _56_33_ = document.getElementById("56-33"); _56_33_.className = "Blank";
        const _47_34_ = document.getElementById("47-34"); _47_34_.className = "Blank";
        const _59_34_ = document.getElementById("59-34"); _59_34_.className = "Blank";
        const _36_35_ = document.getElementById("36-35"); _36_35_.className = "Blank";
        const _61_35_ = document.getElementById("61-35"); _61_35_.className = "Blank";
        const _38_36_ = document.getElementById("38-36"); _38_36_.className = "Blank";
        const _41_38_ = document.getElementById("41-38"); _41_38_.className = "Blank";
        const _47_42_ = document.getElementById("47-42"); _47_42_.className = "Blank";
    }

    //1970 Scorigami
    if (output.innerHTML == "1970") {
        const _56_9_ = document.getElementById("56-9"); _56_9_.className = "Scorigami";
        const _46_10_ = document.getElementById("46-10"); _46_10_.className = "Scorigami";
        const _49_10_ = document.getElementById("49-10"); _49_10_.className = "Scorigami";
        const _51_10_ = document.getElementById("51-10"); _51_10_.className = "Scorigami";
        const _61_10_ = document.getElementById("61-10"); _61_10_.className = "Scorigami";
        const _35_11_ = document.getElementById("35-11"); _35_11_.className = "Scorigami";
        const _29_15_ = document.getElementById("29-15"); _29_15_.className = "Scorigami";
        const _46_15_ = document.getElementById("46-15"); _46_15_.className = "Scorigami";
        const _31_16_ = document.getElementById("31-16"); _31_16_.className = "Scorigami";
        const _56_16_ = document.getElementById("56-16"); _56_16_.className = "Scorigami";
        const _63_16_ = document.getElementById("63-16"); _63_16_.className = "Scorigami";
        const _31_17_ = document.getElementById("31-17"); _31_17_.className = "Scorigami";
        const _61_17_ = document.getElementById("61-17"); _61_17_.className = "Scorigami";
        const _61_20_ = document.getElementById("61-20"); _61_20_.className = "Scorigami";
        const _51_21_ = document.getElementById("51-21"); _51_21_.className = "Scorigami";
        const _33_23_ = document.getElementById("33-23"); _33_23_.className = "Scorigami";
        const _47_23_ = document.getElementById("47-23"); _47_23_.className = "Scorigami";
        const _48_23_ = document.getElementById("48-23"); _48_23_.className = "Scorigami";
        const _52_23_ = document.getElementById("52-23"); _52_23_.className = "Scorigami";
        const _29_24_ = document.getElementById("29-24"); _29_24_.className = "Scorigami";
        const _43_25_ = document.getElementById("43-25"); _43_25_.className = "Scorigami";
        const _43_26_ = document.getElementById("43-26"); _43_26_.className = "Scorigami";
        const _44_26_ = document.getElementById("44-26"); _44_26_.className = "Scorigami";
        const _36_28_ = document.getElementById("36-28"); _36_28_.className = "Scorigami";
        const _42_29_ = document.getElementById("42-29"); _42_29_.className = "Scorigami";
        const _45_29_ = document.getElementById("45-29"); _45_29_.className = "Scorigami";
        const _48_29_ = document.getElementById("48-29"); _48_29_.className = "Scorigami";
        const _54_29_ = document.getElementById("54-29"); _54_29_.className = "Scorigami";
        const _37_30_ = document.getElementById("37-30"); _37_30_.className = "Scorigami";
        const _53_31_ = document.getElementById("53-31"); _53_31_.className = "Scorigami";
        const _65_31_ = document.getElementById("65-31"); _65_31_.className = "Scorigami";
        const _38_32_ = document.getElementById("38-32"); _38_32_.className = "Scorigami";
        const _34_33_ = document.getElementById("34-33"); _34_33_.className = "Scorigami";
        const _70_33_ = document.getElementById("70-33"); _70_33_.className = "Scorigami";
        const _42_34_ = document.getElementById("42-34"); _42_34_.className = "Scorigami";
        const _52_34_ = document.getElementById("52-34"); _52_34_.className = "Scorigami";
        const _53_34_ = document.getElementById("53-34"); _53_34_.className = "Scorigami";
        const _46_35_ = document.getElementById("46-35"); _46_35_.className = "Scorigami";
        const _41_37_ = document.getElementById("41-37"); _41_37_.className = "Scorigami";
        const _69_37_ = document.getElementById("69-37"); _69_37_.className = "Scorigami";
        const _42_38_ = document.getElementById("42-38"); _42_38_.className = "Scorigami";
        const _41_40_ = document.getElementById("41-40"); _41_40_.className = "Scorigami";
    }
    if (output.innerHTML > "1970") {
        const _56_9_ = document.getElementById("56-9"); _56_9_.className = "PastScorigami";
        const _46_10_ = document.getElementById("46-10"); _46_10_.className = "PastScorigami";
        const _49_10_ = document.getElementById("49-10"); _49_10_.className = "PastScorigami";
        const _51_10_ = document.getElementById("51-10"); _51_10_.className = "PastScorigami";
        const _61_10_ = document.getElementById("61-10"); _61_10_.className = "PastScorigami";
        const _35_11_ = document.getElementById("35-11"); _35_11_.className = "PastScorigami";
        const _29_15_ = document.getElementById("29-15"); _29_15_.className = "PastScorigami";
        const _46_15_ = document.getElementById("46-15"); _46_15_.className = "PastScorigami";
        const _31_16_ = document.getElementById("31-16"); _31_16_.className = "PastScorigami";
        const _56_16_ = document.getElementById("56-16"); _56_16_.className = "PastScorigami";
        const _63_16_ = document.getElementById("63-16"); _63_16_.className = "PastScorigami";
        const _31_17_ = document.getElementById("31-17"); _31_17_.className = "PastScorigami";
        const _61_17_ = document.getElementById("61-17"); _61_17_.className = "PastScorigami";
        const _61_20_ = document.getElementById("61-20"); _61_20_.className = "PastScorigami";
        const _51_21_ = document.getElementById("51-21"); _51_21_.className = "PastScorigami";
        const _33_23_ = document.getElementById("33-23"); _33_23_.className = "PastScorigami";
        const _47_23_ = document.getElementById("47-23"); _47_23_.className = "PastScorigami";
        const _48_23_ = document.getElementById("48-23"); _48_23_.className = "PastScorigami";
        const _52_23_ = document.getElementById("52-23"); _52_23_.className = "PastScorigami";
        const _29_24_ = document.getElementById("29-24"); _29_24_.className = "PastScorigami";
        const _43_25_ = document.getElementById("43-25"); _43_25_.className = "PastScorigami";
        const _43_26_ = document.getElementById("43-26"); _43_26_.className = "PastScorigami";
        const _44_26_ = document.getElementById("44-26"); _44_26_.className = "PastScorigami";
        const _36_28_ = document.getElementById("36-28"); _36_28_.className = "PastScorigami";
        const _42_29_ = document.getElementById("42-29"); _42_29_.className = "PastScorigami";
        const _45_29_ = document.getElementById("45-29"); _45_29_.className = "PastScorigami";
        const _48_29_ = document.getElementById("48-29"); _48_29_.className = "PastScorigami";
        const _54_29_ = document.getElementById("54-29"); _54_29_.className = "PastScorigami";
        const _37_30_ = document.getElementById("37-30"); _37_30_.className = "PastScorigami";
        const _53_31_ = document.getElementById("53-31"); _53_31_.className = "PastScorigami";
        const _65_31_ = document.getElementById("65-31"); _65_31_.className = "PastScorigami";
        const _38_32_ = document.getElementById("38-32"); _38_32_.className = "PastScorigami";
        const _34_33_ = document.getElementById("34-33"); _34_33_.className = "PastScorigami";
        const _70_33_ = document.getElementById("70-33"); _70_33_.className = "PastScorigami";
        const _42_34_ = document.getElementById("42-34"); _42_34_.className = "PastScorigami";
        const _52_34_ = document.getElementById("52-34"); _52_34_.className = "PastScorigami";
        const _53_34_ = document.getElementById("53-34"); _53_34_.className = "PastScorigami";
        const _46_35_ = document.getElementById("46-35"); _46_35_.className = "PastScorigami";
        const _41_37_ = document.getElementById("41-37"); _41_37_.className = "PastScorigami";
        const _69_37_ = document.getElementById("69-37"); _69_37_.className = "PastScorigami";
        const _42_38_ = document.getElementById("42-38"); _42_38_.className = "PastScorigami";
        const _41_40_ = document.getElementById("41-40"); _41_40_.className = "PastScorigami";
    }
    if (output.innerHTML < "1970") {
        const _56_9_ = document.getElementById("56-9"); _56_9_.className = "Blank";
        const _46_10_ = document.getElementById("46-10"); _46_10_.className = "Blank";
        const _49_10_ = document.getElementById("49-10"); _49_10_.className = "Blank";
        const _51_10_ = document.getElementById("51-10"); _51_10_.className = "Blank";
        const _61_10_ = document.getElementById("61-10"); _61_10_.className = "Blank";
        const _35_11_ = document.getElementById("35-11"); _35_11_.className = "Blank";
        const _29_15_ = document.getElementById("29-15"); _29_15_.className = "Blank";
        const _46_15_ = document.getElementById("46-15"); _46_15_.className = "Blank";
        const _31_16_ = document.getElementById("31-16"); _31_16_.className = "Blank";
        const _56_16_ = document.getElementById("56-16"); _56_16_.className = "Blank";
        const _63_16_ = document.getElementById("63-16"); _63_16_.className = "Blank";
        const _31_17_ = document.getElementById("31-17"); _31_17_.className = "Blank";
        const _61_17_ = document.getElementById("61-17"); _61_17_.className = "Blank";
        const _61_20_ = document.getElementById("61-20"); _61_20_.className = "Blank";
        const _51_21_ = document.getElementById("51-21"); _51_21_.className = "Blank";
        const _33_23_ = document.getElementById("33-23"); _33_23_.className = "Blank";
        const _47_23_ = document.getElementById("47-23"); _47_23_.className = "Blank";
        const _48_23_ = document.getElementById("48-23"); _48_23_.className = "Blank";
        const _52_23_ = document.getElementById("52-23"); _52_23_.className = "Blank";
        const _29_24_ = document.getElementById("29-24"); _29_24_.className = "Blank";
        const _43_25_ = document.getElementById("43-25"); _43_25_.className = "Blank";
        const _43_26_ = document.getElementById("43-26"); _43_26_.className = "Blank";
        const _44_26_ = document.getElementById("44-26"); _44_26_.className = "Blank";
        const _36_28_ = document.getElementById("36-28"); _36_28_.className = "Blank";
        const _42_29_ = document.getElementById("42-29"); _42_29_.className = "Blank";
        const _45_29_ = document.getElementById("45-29"); _45_29_.className = "Blank";
        const _48_29_ = document.getElementById("48-29"); _48_29_.className = "Blank";
        const _54_29_ = document.getElementById("54-29"); _54_29_.className = "Blank";
        const _37_30_ = document.getElementById("37-30"); _37_30_.className = "Blank";
        const _53_31_ = document.getElementById("53-31"); _53_31_.className = "Blank";
        const _65_31_ = document.getElementById("65-31"); _65_31_.className = "Blank";
        const _38_32_ = document.getElementById("38-32"); _38_32_.className = "Blank";
        const _34_33_ = document.getElementById("34-33"); _34_33_.className = "Blank";
        const _70_33_ = document.getElementById("70-33"); _70_33_.className = "Blank";
        const _42_34_ = document.getElementById("42-34"); _42_34_.className = "Blank";
        const _52_34_ = document.getElementById("52-34"); _52_34_.className = "Blank";
        const _53_34_ = document.getElementById("53-34"); _53_34_.className = "Blank";
        const _46_35_ = document.getElementById("46-35"); _46_35_.className = "Blank";
        const _41_37_ = document.getElementById("41-37"); _41_37_.className = "Blank";
        const _69_37_ = document.getElementById("69-37"); _69_37_.className = "Blank";
        const _42_38_ = document.getElementById("42-38"); _42_38_.className = "Blank";
        const _41_40_ = document.getElementById("41-40"); _41_40_.className = "Blank";
    }

    //1971 Scorigami
    if (output.innerHTML == "1971") {
        const _36_2_ = document.getElementById("36-2"); _36_2_.className = "Scorigami";
        const _40_2_ = document.getElementById("40-2"); _40_2_.className = "Scorigami";
        const _43_10_ = document.getElementById("43-10"); _43_10_.className = "Scorigami";
        const _56_10_ = document.getElementById("56-10"); _56_10_.className = "Scorigami";
        const _66_14_ = document.getElementById("66-14"); _66_14_.className = "Scorigami";
        const _45_16_ = document.getElementById("45-16"); _45_16_.className = "Scorigami";
        const _53_17_ = document.getElementById("53-17"); _53_17_.className = "Scorigami";
        const _52_19_ = document.getElementById("52-19"); _52_19_.className = "Scorigami";
        const _60_21_ = document.getElementById("60-21"); _60_21_.className = "Scorigami";
        const _35_24_ = document.getElementById("35-24"); _35_24_.className = "Scorigami";
        const _50_24_ = document.getElementById("50-24"); _50_24_.className = "Scorigami";
        const _56_25_ = document.getElementById("56-25"); _56_25_.className = "Scorigami";
        const _63_27_ = document.getElementById("63-27"); _63_27_.className = "Scorigami";
        const _44_28_ = document.getElementById("44-28"); _44_28_.className = "Scorigami";
        const _60_28_ = document.getElementById("60-28"); _60_28_.className = "Scorigami";
        const _75_28_ = document.getElementById("75-28"); _75_28_.className = "Scorigami";
        const _36_29_ = document.getElementById("36-29"); _36_29_.className = "Scorigami";
        const _37_29_ = document.getElementById("37-29"); _37_29_.className = "Scorigami";
        const _55_29_ = document.getElementById("55-29"); _55_29_.className = "Scorigami";
        const _56_29_ = document.getElementById("56-29"); _56_29_.className = "Scorigami";
        const _38_31_ = document.getElementById("38-31"); _38_31_.className = "Scorigami";
        const _42_32_ = document.getElementById("42-32"); _42_32_.className = "Scorigami";
        const _46_33_ = document.getElementById("46-33"); _46_33_.className = "Scorigami";
        const _52_35_ = document.getElementById("52-35"); _52_35_.className = "Scorigami";
        const _44_37_ = document.getElementById("44-37"); _44_37_.className = "Scorigami";
        const _45_38_ = document.getElementById("45-38"); _45_38_.className = "Scorigami";
        const _48_38_ = document.getElementById("48-38"); _48_38_.className = "Scorigami";
        const _46_39_ = document.getElementById("46-39"); _46_39_.className = "Scorigami";
        const _57_39_ = document.getElementById("57-39"); _57_39_.className = "Scorigami";
    }
    if (output.innerHTML > "1971") {
        const _36_2_ = document.getElementById("36-2"); _36_2_.className = "PastScorigami";
        const _40_2_ = document.getElementById("40-2"); _40_2_.className = "PastScorigami";
        const _43_10_ = document.getElementById("43-10"); _43_10_.className = "PastScorigami";
        const _56_10_ = document.getElementById("56-10"); _56_10_.className = "PastScorigami";
        const _66_14_ = document.getElementById("66-14"); _66_14_.className = "PastScorigami";
        const _45_16_ = document.getElementById("45-16"); _45_16_.className = "PastScorigami";
        const _53_17_ = document.getElementById("53-17"); _53_17_.className = "PastScorigami";
        const _52_19_ = document.getElementById("52-19"); _52_19_.className = "PastScorigami";
        const _60_21_ = document.getElementById("60-21"); _60_21_.className = "PastScorigami";
        const _35_24_ = document.getElementById("35-24"); _35_24_.className = "PastScorigami";
        const _50_24_ = document.getElementById("50-24"); _50_24_.className = "PastScorigami";
        const _56_25_ = document.getElementById("56-25"); _56_25_.className = "PastScorigami";
        const _63_27_ = document.getElementById("63-27"); _63_27_.className = "PastScorigami";
        const _44_28_ = document.getElementById("44-28"); _44_28_.className = "PastScorigami";
        const _60_28_ = document.getElementById("60-28"); _60_28_.className = "PastScorigami";
        const _75_28_ = document.getElementById("75-28"); _75_28_.className = "PastScorigami";
        const _36_29_ = document.getElementById("36-29"); _36_29_.className = "PastScorigami";
        const _37_29_ = document.getElementById("37-29"); _37_29_.className = "PastScorigami";
        const _55_29_ = document.getElementById("55-29"); _55_29_.className = "PastScorigami";
        const _56_29_ = document.getElementById("56-29"); _56_29_.className = "PastScorigami";
        const _38_31_ = document.getElementById("38-31"); _38_31_.className = "PastScorigami";
        const _42_32_ = document.getElementById("42-32"); _42_32_.className = "PastScorigami";
        const _46_33_ = document.getElementById("46-33"); _46_33_.className = "PastScorigami";
        const _52_35_ = document.getElementById("52-35"); _52_35_.className = "PastScorigami";
        const _44_37_ = document.getElementById("44-37"); _44_37_.className = "PastScorigami";
        const _45_38_ = document.getElementById("45-38"); _45_38_.className = "PastScorigami";
        const _48_38_ = document.getElementById("48-38"); _48_38_.className = "PastScorigami";
        const _46_39_ = document.getElementById("46-39"); _46_39_.className = "PastScorigami";
        const _57_39_ = document.getElementById("57-39"); _57_39_.className = "PastScorigami";
    }
    if (output.innerHTML < "1971") {
        const _36_2_ = document.getElementById("36-2"); _36_2_.className = "Blank";
        const _40_2_ = document.getElementById("40-2"); _40_2_.className = "Blank";
        const _43_10_ = document.getElementById("43-10"); _43_10_.className = "Blank";
        const _56_10_ = document.getElementById("56-10"); _56_10_.className = "Blank";
        const _66_14_ = document.getElementById("66-14"); _66_14_.className = "Blank";
        const _45_16_ = document.getElementById("45-16"); _45_16_.className = "Blank";
        const _53_17_ = document.getElementById("53-17"); _53_17_.className = "Blank";
        const _52_19_ = document.getElementById("52-19"); _52_19_.className = "Blank";
        const _60_21_ = document.getElementById("60-21"); _60_21_.className = "Blank";
        const _35_24_ = document.getElementById("35-24"); _35_24_.className = "Blank";
        const _50_24_ = document.getElementById("50-24"); _50_24_.className = "Blank";
        const _56_25_ = document.getElementById("56-25"); _56_25_.className = "Blank";
        const _63_27_ = document.getElementById("63-27"); _63_27_.className = "Blank";
        const _44_28_ = document.getElementById("44-28"); _44_28_.className = "Blank";
        const _60_28_ = document.getElementById("60-28"); _60_28_.className = "Blank";
        const _75_28_ = document.getElementById("75-28"); _75_28_.className = "Blank";
        const _36_29_ = document.getElementById("36-29"); _36_29_.className = "Blank";
        const _37_29_ = document.getElementById("37-29"); _37_29_.className = "Blank";
        const _55_29_ = document.getElementById("55-29"); _55_29_.className = "Blank";
        const _56_29_ = document.getElementById("56-29"); _56_29_.className = "Blank";
        const _38_31_ = document.getElementById("38-31"); _38_31_.className = "Blank";
        const _42_32_ = document.getElementById("42-32"); _42_32_.className = "Blank";
        const _46_33_ = document.getElementById("46-33"); _46_33_.className = "Blank";
        const _52_35_ = document.getElementById("52-35"); _52_35_.className = "Blank";
        const _44_37_ = document.getElementById("44-37"); _44_37_.className = "Blank";
        const _45_38_ = document.getElementById("45-38"); _45_38_.className = "Blank";
        const _48_38_ = document.getElementById("48-38"); _48_38_.className = "Blank";
        const _46_39_ = document.getElementById("46-39"); _46_39_.className = "Blank";
        const _57_39_ = document.getElementById("57-39"); _57_39_.className = "Blank";
    }

    //1972 Scorigami
    if (output.innerHTML == "1972") {
        const _68_3_ = document.getElementById("68-3"); _68_3_.className = "Scorigami";
        const _45_9_ = document.getElementById("45-9"); _45_9_.className = "Scorigami";
        const _41_11_ = document.getElementById("41-11"); _41_11_.className = "Scorigami";
        const _46_16_ = document.getElementById("46-16"); _46_16_.className = "Scorigami";
        const _49_17_ = document.getElementById("49-17"); _49_17_.className = "Scorigami";
        const _53_19_ = document.getElementById("53-19"); _53_19_.className = "Scorigami";
        const _65_20_ = document.getElementById("65-20"); _65_20_.className = "Scorigami";
        const _55_22_ = document.getElementById("55-22"); _55_22_.className = "Scorigami";
        const _45_23_ = document.getElementById("45-23"); _45_23_.className = "Scorigami";
        const _49_24_ = document.getElementById("49-24"); _49_24_.className = "Scorigami";
        const _44_25_ = document.getElementById("44-25"); _44_25_.className = "Scorigami";
        const _45_26_ = document.getElementById("45-26"); _45_26_.className = "Scorigami";
        const _48_30_ = document.getElementById("48-30"); _48_30_.className = "Scorigami";
        const _39_31_ = document.getElementById("39-31"); _39_31_.className = "Scorigami";
        const _42_31_ = document.getElementById("42-31"); _42_31_.className = "Scorigami";
        const _35_32_ = document.getElementById("35-32"); _35_32_.className = "Scorigami";
        const _41_35_ = document.getElementById("41-35"); _41_35_.className = "Scorigami";
        const _51_35_ = document.getElementById("51-35"); _51_35_.className = "Scorigami";
        const _36_36_ = document.getElementById("36-36"); _36_36_.className = "Scorigami";
        const _39_36_ = document.getElementById("39-36"); _39_36_.className = "Scorigami";
        const _62_36_ = document.getElementById("62-36"); _62_36_.className = "Scorigami";
        const _45_43_ = document.getElementById("45-43"); _45_43_.className = "Scorigami";
        const _59_48_ = document.getElementById("59-48"); _59_48_.className = "Scorigami";
    }
    if (output.innerHTML > "1972") {
        const _68_3_ = document.getElementById("68-3"); _68_3_.className = "PastScorigami";
        const _45_9_ = document.getElementById("45-9"); _45_9_.className = "PastScorigami";
        const _41_11_ = document.getElementById("41-11"); _41_11_.className = "PastScorigami";
        const _46_16_ = document.getElementById("46-16"); _46_16_.className = "PastScorigami";
        const _49_17_ = document.getElementById("49-17"); _49_17_.className = "PastScorigami";
        const _53_19_ = document.getElementById("53-19"); _53_19_.className = "PastScorigami";
        const _65_20_ = document.getElementById("65-20"); _65_20_.className = "PastScorigami";
        const _55_22_ = document.getElementById("55-22"); _55_22_.className = "PastScorigami";
        const _45_23_ = document.getElementById("45-23"); _45_23_.className = "PastScorigami";
        const _49_24_ = document.getElementById("49-24"); _49_24_.className = "PastScorigami";
        const _44_25_ = document.getElementById("44-25"); _44_25_.className = "PastScorigami";
        const _45_26_ = document.getElementById("45-26"); _45_26_.className = "PastScorigami";
        const _48_30_ = document.getElementById("48-30"); _48_30_.className = "PastScorigami";
        const _39_31_ = document.getElementById("39-31"); _39_31_.className = "PastScorigami";
        const _42_31_ = document.getElementById("42-31"); _42_31_.className = "PastScorigami";
        const _35_32_ = document.getElementById("35-32"); _35_32_.className = "PastScorigami";
        const _41_35_ = document.getElementById("41-35"); _41_35_.className = "PastScorigami";
        const _51_35_ = document.getElementById("51-35"); _51_35_.className = "PastScorigami";
        const _36_36_ = document.getElementById("36-36"); _36_36_.className = "PastScorigami";
        const _39_36_ = document.getElementById("39-36"); _39_36_.className = "PastScorigami";
        const _62_36_ = document.getElementById("62-36"); _62_36_.className = "PastScorigami";
        const _45_43_ = document.getElementById("45-43"); _45_43_.className = "PastScorigami";
        const _59_48_ = document.getElementById("59-48"); _59_48_.className = "PastScorigami";
    }
    if (output.innerHTML < "1972") {
        const _68_3_ = document.getElementById("68-3"); _68_3_.className = "Blank";
        const _45_9_ = document.getElementById("45-9"); _45_9_.className = "Blank";
        const _41_11_ = document.getElementById("41-11"); _41_11_.className = "Blank";
        const _46_16_ = document.getElementById("46-16"); _46_16_.className = "Blank";
        const _49_17_ = document.getElementById("49-17"); _49_17_.className = "Blank";
        const _53_19_ = document.getElementById("53-19"); _53_19_.className = "Blank";
        const _65_20_ = document.getElementById("65-20"); _65_20_.className = "Blank";
        const _55_22_ = document.getElementById("55-22"); _55_22_.className = "Blank";
        const _45_23_ = document.getElementById("45-23"); _45_23_.className = "Blank";
        const _49_24_ = document.getElementById("49-24"); _49_24_.className = "Blank";
        const _44_25_ = document.getElementById("44-25"); _44_25_.className = "Blank";
        const _45_26_ = document.getElementById("45-26"); _45_26_.className = "Blank";
        const _48_30_ = document.getElementById("48-30"); _48_30_.className = "Blank";
        const _39_31_ = document.getElementById("39-31"); _39_31_.className = "Blank";
        const _42_31_ = document.getElementById("42-31"); _42_31_.className = "Blank";
        const _35_32_ = document.getElementById("35-32"); _35_32_.className = "Blank";
        const _41_35_ = document.getElementById("41-35"); _41_35_.className = "Blank";
        const _51_35_ = document.getElementById("51-35"); _51_35_.className = "Blank";
        const _36_36_ = document.getElementById("36-36"); _36_36_.className = "Blank";
        const _39_36_ = document.getElementById("39-36"); _39_36_.className = "Blank";
        const _62_36_ = document.getElementById("62-36"); _62_36_.className = "Blank";
        const _45_43_ = document.getElementById("45-43"); _45_43_.className = "Blank";
        const _59_48_ = document.getElementById("59-48"); _59_48_.className = "Blank";
    }

    //1973 Scorigami
    if (output.innerHTML == "1973") {
        const _82_6_ = document.getElementById("82-6"); _82_6_.className = "Scorigami";
        const _73_7_ = document.getElementById("73-7"); _73_7_.className = "Scorigami";
        const _59_13_ = document.getElementById("59-13"); _59_13_.className = "Scorigami";
        const _50_16_ = document.getElementById("50-16"); _50_16_.className = "Scorigami";
        const _52_16_ = document.getElementById("52-16"); _52_16_.className = "Scorigami";
        const _66_16_ = document.getElementById("66-16"); _66_16_.className = "Scorigami";
        const _44_18_ = document.getElementById("44-18"); _44_18_.className = "Scorigami";
        const _55_19_ = document.getElementById("55-19"); _55_19_.className = "Scorigami";
        const _42_22_ = document.getElementById("42-22"); _42_22_.className = "Scorigami";
        const _46_22_ = document.getElementById("46-22"); _46_22_.className = "Scorigami";
        const _43_23_ = document.getElementById("43-23"); _43_23_.className = "Scorigami";
        const _51_24_ = document.getElementById("51-24"); _51_24_.className = "Scorigami";
        const _67_24_ = document.getElementById("67-24"); _67_24_.className = "Scorigami";
        const _76_24_ = document.getElementById("76-24"); _76_24_.className = "Scorigami";
        const _52_26_ = document.getElementById("52-26"); _52_26_.className = "Scorigami";
        const _58_26_ = document.getElementById("58-26"); _58_26_.className = "Scorigami";
        const _33_30_ = document.getElementById("33-30"); _33_30_.className = "Scorigami";
        const _36_31_ = document.getElementById("36-31"); _36_31_.className = "Scorigami";
        const _63_34_ = document.getElementById("63-34"); _63_34_.className = "Scorigami";
        const _56_35_ = document.getElementById("56-35"); _56_35_.className = "Scorigami";
        const _44_40_ = document.getElementById("44-40"); _44_40_.className = "Scorigami";
        const _52_43_ = document.getElementById("52-43"); _52_43_.className = "Scorigami";
        const _54_49_ = document.getElementById("54-49"); _54_49_.className = "Scorigami";
    }
    if (output.innerHTML > "1973") {
        const _82_6_ = document.getElementById("82-6"); _82_6_.className = "PastScorigami";
        const _73_7_ = document.getElementById("73-7"); _73_7_.className = "PastScorigami";
        const _59_13_ = document.getElementById("59-13"); _59_13_.className = "PastScorigami";
        const _50_16_ = document.getElementById("50-16"); _50_16_.className = "PastScorigami";
        const _52_16_ = document.getElementById("52-16"); _52_16_.className = "PastScorigami";
        const _66_16_ = document.getElementById("66-16"); _66_16_.className = "PastScorigami";
        const _44_18_ = document.getElementById("44-18"); _44_18_.className = "PastScorigami";
        const _55_19_ = document.getElementById("55-19"); _55_19_.className = "PastScorigami";
        const _42_22_ = document.getElementById("42-22"); _42_22_.className = "PastScorigami";
        const _46_22_ = document.getElementById("46-22"); _46_22_.className = "PastScorigami";
        const _43_23_ = document.getElementById("43-23"); _43_23_.className = "PastScorigami";
        const _51_24_ = document.getElementById("51-24"); _51_24_.className = "PastScorigami";
        const _67_24_ = document.getElementById("67-24"); _67_24_.className = "PastScorigami";
        const _76_24_ = document.getElementById("76-24"); _76_24_.className = "PastScorigami";
        const _52_26_ = document.getElementById("52-26"); _52_26_.className = "PastScorigami";
        const _58_26_ = document.getElementById("58-26"); _58_26_.className = "PastScorigami";
        const _33_30_ = document.getElementById("33-30"); _33_30_.className = "PastScorigami";
        const _36_31_ = document.getElementById("36-31"); _36_31_.className = "PastScorigami";
        const _63_34_ = document.getElementById("63-34"); _63_34_.className = "PastScorigami";
        const _56_35_ = document.getElementById("56-35"); _56_35_.className = "PastScorigami";
        const _44_40_ = document.getElementById("44-40"); _44_40_.className = "PastScorigami";
        const _52_43_ = document.getElementById("52-43"); _52_43_.className = "PastScorigami";
        const _54_49_ = document.getElementById("54-49"); _54_49_.className = "PastScorigami";
    }
    if (output.innerHTML < "1973") {
        const _82_6_ = document.getElementById("82-6"); _82_6_.className = "Blank";
        const _73_7_ = document.getElementById("73-7"); _73_7_.className = "Blank";
        const _59_13_ = document.getElementById("59-13"); _59_13_.className = "Blank";
        const _50_16_ = document.getElementById("50-16"); _50_16_.className = "Blank";
        const _52_16_ = document.getElementById("52-16"); _52_16_.className = "Blank";
        const _66_16_ = document.getElementById("66-16"); _66_16_.className = "Blank";
        const _44_18_ = document.getElementById("44-18"); _44_18_.className = "Blank";
        const _55_19_ = document.getElementById("55-19"); _55_19_.className = "Blank";
        const _42_22_ = document.getElementById("42-22"); _42_22_.className = "Blank";
        const _46_22_ = document.getElementById("46-22"); _46_22_.className = "Blank";
        const _43_23_ = document.getElementById("43-23"); _43_23_.className = "Blank";
        const _51_24_ = document.getElementById("51-24"); _51_24_.className = "Blank";
        const _67_24_ = document.getElementById("67-24"); _67_24_.className = "Blank";
        const _76_24_ = document.getElementById("76-24"); _76_24_.className = "Blank";
        const _52_26_ = document.getElementById("52-26"); _52_26_.className = "Blank";
        const _58_26_ = document.getElementById("58-26"); _58_26_.className = "Blank";
        const _33_30_ = document.getElementById("33-30"); _33_30_.className = "Blank";
        const _36_31_ = document.getElementById("36-31"); _36_31_.className = "Blank";
        const _63_34_ = document.getElementById("63-34"); _63_34_.className = "Blank";
        const _56_35_ = document.getElementById("56-35"); _56_35_.className = "Blank";
        const _44_40_ = document.getElementById("44-40"); _44_40_.className = "Blank";
        const _52_43_ = document.getElementById("52-43"); _52_43_.className = "Blank";
        const _54_49_ = document.getElementById("54-49"); _54_49_.className = "Blank";
    }

    //1974 Scorigami
    if (output.innerHTML == "1974") {
        const _42_2_ = document.getElementById("42-2"); _42_2_.className = "Scorigami";
        const _70_8_ = document.getElementById("70-8"); _70_8_.className = "Scorigami";
        const _43_9_ = document.getElementById("43-9"); _43_9_.className = "Scorigami";
        const _32_11_ = document.getElementById("32-11"); _32_11_.className = "Scorigami";
        const _39_11_ = document.getElementById("39-11"); _39_11_.className = "Scorigami";
        const _42_11_ = document.getElementById("42-11"); _42_11_.className = "Scorigami";
        const _52_15_ = document.getElementById("52-15"); _52_15_.className = "Scorigami";
        const _59_16_ = document.getElementById("59-16"); _59_16_.className = "Scorigami";
        const _81_16_ = document.getElementById("81-16"); _81_16_.className = "Scorigami";
        const _37_17_ = document.getElementById("37-17"); _37_17_.className = "Scorigami";
        const _66_17_ = document.getElementById("66-17"); _66_17_.className = "Scorigami";
        const _59_20_ = document.getElementById("59-20"); _59_20_.className = "Scorigami";
        const _53_29_ = document.getElementById("53-29"); _53_29_.className = "Scorigami";
        const _54_32_ = document.getElementById("54-32"); _54_32_.className = "Scorigami";
        const _38_33_ = document.getElementById("38-33"); _38_33_.className = "Scorigami";
        const _48_35_ = document.getElementById("48-35"); _48_35_.className = "Scorigami";
        const _56_42_ = document.getElementById("56-42"); _56_42_.className = "Scorigami";
    }
    if (output.innerHTML > "1974") {
        const _42_2_ = document.getElementById("42-2"); _42_2_.className = "PastScorigami";
        const _70_8_ = document.getElementById("70-8"); _70_8_.className = "PastScorigami";
        const _43_9_ = document.getElementById("43-9"); _43_9_.className = "PastScorigami";
        const _32_11_ = document.getElementById("32-11"); _32_11_.className = "PastScorigami";
        const _39_11_ = document.getElementById("39-11"); _39_11_.className = "PastScorigami";
        const _42_11_ = document.getElementById("42-11"); _42_11_.className = "PastScorigami";
        const _52_15_ = document.getElementById("52-15"); _52_15_.className = "PastScorigami";
        const _59_16_ = document.getElementById("59-16"); _59_16_.className = "PastScorigami";
        const _81_16_ = document.getElementById("81-16"); _81_16_.className = "PastScorigami";
        const _37_17_ = document.getElementById("37-17"); _37_17_.className = "PastScorigami";
        const _66_17_ = document.getElementById("66-17"); _66_17_.className = "PastScorigami";
        const _59_20_ = document.getElementById("59-20"); _59_20_.className = "PastScorigami";
        const _53_29_ = document.getElementById("53-29"); _53_29_.className = "PastScorigami";
        const _54_32_ = document.getElementById("54-32"); _54_32_.className = "PastScorigami";
        const _38_33_ = document.getElementById("38-33"); _38_33_.className = "PastScorigami";
        const _48_35_ = document.getElementById("48-35"); _48_35_.className = "PastScorigami";
        const _56_42_ = document.getElementById("56-42"); _56_42_.className = "PastScorigami";
    }
    if (output.innerHTML < "1974") {
        const _42_2_ = document.getElementById("42-2"); _42_2_.className = "Blank";
        const _70_8_ = document.getElementById("70-8"); _70_8_.className = "Blank";
        const _43_9_ = document.getElementById("43-9"); _43_9_.className = "Blank";
        const _32_11_ = document.getElementById("32-11"); _32_11_.className = "Blank";
        const _39_11_ = document.getElementById("39-11"); _39_11_.className = "Blank";
        const _42_11_ = document.getElementById("42-11"); _42_11_.className = "Blank";
        const _52_15_ = document.getElementById("52-15"); _52_15_.className = "Blank";
        const _59_16_ = document.getElementById("59-16"); _59_16_.className = "Blank";
        const _81_16_ = document.getElementById("81-16"); _81_16_.className = "Blank";
        const _37_17_ = document.getElementById("37-17"); _37_17_.className = "Blank";
        const _66_17_ = document.getElementById("66-17"); _66_17_.className = "Blank";
        const _59_20_ = document.getElementById("59-20"); _59_20_.className = "Blank";
        const _53_29_ = document.getElementById("53-29"); _53_29_.className = "Blank";
        const _54_32_ = document.getElementById("54-32"); _54_32_.className = "Blank";
        const _38_33_ = document.getElementById("38-33"); _38_33_.className = "Blank";
        const _48_35_ = document.getElementById("48-35"); _48_35_.className = "Blank";
        const _56_42_ = document.getElementById("56-42"); _56_42_.className = "Blank";
    }

    //1975 Scorigami
    if (output.innerHTML == "1975") {
        const _56_2_ = document.getElementById("56-2"); _56_2_.className = "Scorigami";
        const _43_3_ = document.getElementById("43-3"); _43_3_.className = "Scorigami";
        const _26_11_ = document.getElementById("26-11"); _26_11_.className = "Scorigami";
        const _39_17_ = document.getElementById("39-17"); _39_17_.className = "Scorigami";
        const _66_21_ = document.getElementById("66-21"); _66_21_.className = "Scorigami";
        const _30_23_ = document.getElementById("30-23"); _30_23_.className = "Scorigami";
        const _62_24_ = document.getElementById("62-24"); _62_24_.className = "Scorigami";
        const _84_27_ = document.getElementById("84-27"); _84_27_.className = "Scorigami";
        const _39_34_ = document.getElementById("39-34"); _39_34_.className = "Scorigami";
        const _48_40_ = document.getElementById("48-40"); _48_40_.className = "Scorigami";
    }
    if (output.innerHTML > "1975") {
        const _56_2_ = document.getElementById("56-2"); _56_2_.className = "PastScorigami";
        const _43_3_ = document.getElementById("43-3"); _43_3_.className = "PastScorigami";
        const _26_11_ = document.getElementById("26-11"); _26_11_.className = "PastScorigami";
        const _39_17_ = document.getElementById("39-17"); _39_17_.className = "PastScorigami";
        const _66_21_ = document.getElementById("66-21"); _66_21_.className = "PastScorigami";
        const _30_23_ = document.getElementById("30-23"); _30_23_.className = "PastScorigami";
        const _62_24_ = document.getElementById("62-24"); _62_24_.className = "PastScorigami";
        const _84_27_ = document.getElementById("84-27"); _84_27_.className = "PastScorigami";
        const _39_34_ = document.getElementById("39-34"); _39_34_.className = "PastScorigami";
        const _48_40_ = document.getElementById("48-40"); _48_40_.className = "PastScorigami";
    }
    if (output.innerHTML < "1975") {
        const _56_2_ = document.getElementById("56-2"); _56_2_.className = "Blank";
        const _43_3_ = document.getElementById("43-3"); _43_3_.className = "Blank";
        const _26_11_ = document.getElementById("26-11"); _26_11_.className = "Blank";
        const _39_17_ = document.getElementById("39-17"); _39_17_.className = "Blank";
        const _66_21_ = document.getElementById("66-21"); _66_21_.className = "Blank";
        const _30_23_ = document.getElementById("30-23"); _30_23_.className = "Blank";
        const _62_24_ = document.getElementById("62-24"); _62_24_.className = "Blank";
        const _84_27_ = document.getElementById("84-27"); _84_27_.className = "Blank";
        const _39_34_ = document.getElementById("39-34"); _39_34_.className = "Blank";
        const _48_40_ = document.getElementById("48-40"); _48_40_.className = "Blank";
    }

    //1976 Scorigami
    if (output.innerHTML == "1976") {
        const _59_10_ = document.getElementById("59-10"); _59_10_.className = "Scorigami";
        const _64_10_ = document.getElementById("64-10"); _64_10_.className = "Scorigami";
        const _50_15_ = document.getElementById("50-15"); _50_15_.className = "Scorigami";
        const _63_15_ = document.getElementById("63-15"); _63_15_.className = "Scorigami";
        const _43_16_ = document.getElementById("43-16"); _43_16_.className = "Scorigami";
        const _63_19_ = document.getElementById("63-19"); _63_19_.className = "Scorigami";
        const _50_22_ = document.getElementById("50-22"); _50_22_.className = "Scorigami";
        const _36_24_ = document.getElementById("36-24"); _36_24_.className = "Scorigami";
        const _44_24_ = document.getElementById("44-24"); _44_24_.className = "Scorigami";
        const _45_24_ = document.getElementById("45-24"); _45_24_.className = "Scorigami";
        const _49_29_ = document.getElementById("49-29"); _49_29_.className = "Scorigami";
        const _32_30_ = document.getElementById("32-30"); _32_30_.className = "Scorigami";
        const _50_30_ = document.getElementById("50-30"); _50_30_.className = "Scorigami";
        const _44_31_ = document.getElementById("44-31"); _44_31_.className = "Scorigami";
        const _51_32_ = document.getElementById("51-32"); _51_32_.className = "Scorigami";
        const _57_34_ = document.getElementById("57-34"); _57_34_.className = "Scorigami";
        const _55_35_ = document.getElementById("55-35"); _55_35_.className = "Scorigami";
        const _39_38_ = document.getElementById("39-38"); _39_38_.className = "Scorigami";
        const _58_41_ = document.getElementById("58-41"); _58_41_.className = "Scorigami";
    }
    if (output.innerHTML > "1976") {
        const _59_10_ = document.getElementById("59-10"); _59_10_.className = "PastScorigami";
        const _64_10_ = document.getElementById("64-10"); _64_10_.className = "PastScorigami";
        const _50_15_ = document.getElementById("50-15"); _50_15_.className = "PastScorigami";
        const _63_15_ = document.getElementById("63-15"); _63_15_.className = "PastScorigami";
        const _43_16_ = document.getElementById("43-16"); _43_16_.className = "PastScorigami";
        const _63_19_ = document.getElementById("63-19"); _63_19_.className = "PastScorigami";
        const _50_22_ = document.getElementById("50-22"); _50_22_.className = "PastScorigami";
        const _36_24_ = document.getElementById("36-24"); _36_24_.className = "PastScorigami";
        const _44_24_ = document.getElementById("44-24"); _44_24_.className = "PastScorigami";
        const _45_24_ = document.getElementById("45-24"); _45_24_.className = "PastScorigami";
        const _49_29_ = document.getElementById("49-29"); _49_29_.className = "PastScorigami";
        const _32_30_ = document.getElementById("32-30"); _32_30_.className = "PastScorigami";
        const _50_30_ = document.getElementById("50-30"); _50_30_.className = "PastScorigami";
        const _44_31_ = document.getElementById("44-31"); _44_31_.className = "PastScorigami";
        const _51_32_ = document.getElementById("51-32"); _51_32_.className = "PastScorigami";
        const _57_34_ = document.getElementById("57-34"); _57_34_.className = "PastScorigami";
        const _55_35_ = document.getElementById("55-35"); _55_35_.className = "PastScorigami";
        const _39_38_ = document.getElementById("39-38"); _39_38_.className = "PastScorigami";
        const _58_41_ = document.getElementById("58-41"); _58_41_.className = "PastScorigami";
    }
    if (output.innerHTML < "1976") {
        const _59_10_ = document.getElementById("59-10"); _59_10_.className = "Blank";
        const _64_10_ = document.getElementById("64-10"); _64_10_.className = "Blank";
        const _50_15_ = document.getElementById("50-15"); _50_15_.className = "Blank";
        const _63_15_ = document.getElementById("63-15"); _63_15_.className = "Blank";
        const _43_16_ = document.getElementById("43-16"); _43_16_.className = "Blank";
        const _63_19_ = document.getElementById("63-19"); _63_19_.className = "Blank";
        const _50_22_ = document.getElementById("50-22"); _50_22_.className = "Blank";
        const _36_24_ = document.getElementById("36-24"); _36_24_.className = "Blank";
        const _44_24_ = document.getElementById("44-24"); _44_24_.className = "Blank";
        const _45_24_ = document.getElementById("45-24"); _45_24_.className = "Blank";
        const _49_29_ = document.getElementById("49-29"); _49_29_.className = "Blank";
        const _32_30_ = document.getElementById("32-30"); _32_30_.className = "Blank";
        const _50_30_ = document.getElementById("50-30"); _50_30_.className = "Blank";
        const _44_31_ = document.getElementById("44-31"); _44_31_.className = "Blank";
        const _51_32_ = document.getElementById("51-32"); _51_32_.className = "Blank";
        const _57_34_ = document.getElementById("57-34"); _57_34_.className = "Blank";
        const _55_35_ = document.getElementById("55-35"); _55_35_.className = "Blank";
        const _39_38_ = document.getElementById("39-38"); _39_38_.className = "Blank";
        const _58_41_ = document.getElementById("58-41"); _58_41_.className = "Blank";
    }

    //1977 Scorigami
    if (output.innerHTML == "1977") {
        const _66_3_ = document.getElementById("66-3"); _66_3_.className = "Scorigami";
        const _53_10_ = document.getElementById("53-10"); _53_10_.className = "Scorigami";
        const _66_10_ = document.getElementById("66-10"); _66_10_.className = "Scorigami";
        const _85_13_ = document.getElementById("85-13"); _85_13_.className = "Scorigami";
        const _72_15_ = document.getElementById("72-15"); _72_15_.className = "Scorigami";
        const _63_17_ = document.getElementById("63-17"); _63_17_.className = "Scorigami";
        const _68_19_ = document.getElementById("68-19"); _68_19_.className = "Scorigami";
        const _63_20_ = document.getElementById("63-20"); _63_20_.className = "Scorigami";
        const _44_23_ = document.getElementById("44-23"); _44_23_.className = "Scorigami";
        const _47_28_ = document.getElementById("47-28"); _47_28_.className = "Scorigami";
        const _57_28_ = document.getElementById("57-28"); _57_28_.className = "Scorigami";
        const _50_31_ = document.getElementById("50-31"); _50_31_.className = "Scorigami";
        const _37_32_ = document.getElementById("37-32"); _37_32_.className = "Scorigami";
        const _37_35_ = document.getElementById("37-35"); _37_35_.className = "Scorigami";
        const _41_36_ = document.getElementById("41-36"); _41_36_.className = "Scorigami";
        const _48_36_ = document.getElementById("48-36"); _48_36_.className = "Scorigami";
        const _48_39_ = document.getElementById("48-39"); _48_39_.className = "Scorigami";
        const _47_44_ = document.getElementById("47-44"); _47_44_.className = "Scorigami";
    }
    if (output.innerHTML > "1977") {
        const _66_3_ = document.getElementById("66-3"); _66_3_.className = "PastScorigami";
        const _53_10_ = document.getElementById("53-10"); _53_10_.className = "PastScorigami";
        const _66_10_ = document.getElementById("66-10"); _66_10_.className = "PastScorigami";
        const _85_13_ = document.getElementById("85-13"); _85_13_.className = "PastScorigami";
        const _72_15_ = document.getElementById("72-15"); _72_15_.className = "PastScorigami";
        const _63_17_ = document.getElementById("63-17"); _63_17_.className = "PastScorigami";
        const _68_19_ = document.getElementById("68-19"); _68_19_.className = "PastScorigami";
        const _63_20_ = document.getElementById("63-20"); _63_20_.className = "PastScorigami";
        const _44_23_ = document.getElementById("44-23"); _44_23_.className = "PastScorigami";
        const _47_28_ = document.getElementById("47-28"); _47_28_.className = "PastScorigami";
        const _57_28_ = document.getElementById("57-28"); _57_28_.className = "PastScorigami";
        const _50_31_ = document.getElementById("50-31"); _50_31_.className = "PastScorigami";
        const _37_32_ = document.getElementById("37-32"); _37_32_.className = "PastScorigami";
        const _37_35_ = document.getElementById("37-35"); _37_35_.className = "PastScorigami";
        const _41_36_ = document.getElementById("41-36"); _41_36_.className = "PastScorigami";
        const _48_36_ = document.getElementById("48-36"); _48_36_.className = "PastScorigami";
        const _48_39_ = document.getElementById("48-39"); _48_39_.className = "PastScorigami";
        const _47_44_ = document.getElementById("47-44"); _47_44_.className = "PastScorigami";
    }
    if (output.innerHTML < "1977") {
        const _66_3_ = document.getElementById("66-3"); _66_3_.className = "Blank";
        const _53_10_ = document.getElementById("53-10"); _53_10_.className = "Blank";
        const _66_10_ = document.getElementById("66-10"); _66_10_.className = "Blank";
        const _85_13_ = document.getElementById("85-13"); _85_13_.className = "Blank";
        const _72_15_ = document.getElementById("72-15"); _72_15_.className = "Blank";
        const _63_17_ = document.getElementById("63-17"); _63_17_.className = "Blank";
        const _68_19_ = document.getElementById("68-19"); _68_19_.className = "Blank";
        const _63_20_ = document.getElementById("63-20"); _63_20_.className = "Blank";
        const _44_23_ = document.getElementById("44-23"); _44_23_.className = "Blank";
        const _47_28_ = document.getElementById("47-28"); _47_28_.className = "Blank";
        const _57_28_ = document.getElementById("57-28"); _57_28_.className = "Blank";
        const _50_31_ = document.getElementById("50-31"); _50_31_.className = "Blank";
        const _37_32_ = document.getElementById("37-32"); _37_32_.className = "Blank";
        const _37_35_ = document.getElementById("37-35"); _37_35_.className = "Blank";
        const _41_36_ = document.getElementById("41-36"); _41_36_.className = "Blank";
        const _48_36_ = document.getElementById("48-36"); _48_36_.className = "Blank";
        const _48_39_ = document.getElementById("48-39"); _48_39_.className = "Blank";
        const _47_44_ = document.getElementById("47-44"); _47_44_.className = "Blank";
    }

    //1978 Scorigami
    if (output.innerHTML == "1978") {
        const _58_3_ = document.getElementById("58-3"); _58_3_.className = "Scorigami";
        const _30_11_ = document.getElementById("30-11"); _30_11_.className = "Scorigami";
        const _72_14_ = document.getElementById("72-14"); _72_14_.className = "Scorigami";
        const _69_17_ = document.getElementById("69-17"); _69_17_.className = "Scorigami";
        const _56_19_ = document.getElementById("56-19"); _56_19_.className = "Scorigami";
        const _49_25_ = document.getElementById("49-25"); _49_25_.className = "Scorigami";
        const _51_26_ = document.getElementById("51-26"); _51_26_.className = "Scorigami";
        const _43_27_ = document.getElementById("43-27"); _43_27_.className = "Scorigami";
        const _55_27_ = document.getElementById("55-27"); _55_27_.className = "Scorigami";
        const _44_30_ = document.getElementById("44-30"); _44_30_.className = "Scorigami";
        const _45_31_ = document.getElementById("45-31"); _45_31_.className = "Scorigami";
        const _43_39_ = document.getElementById("43-39"); _43_39_.className = "Scorigami";
        const _42_41_ = document.getElementById("42-41"); _42_41_.className = "Scorigami";
    }
    if (output.innerHTML > "1978") {
        const _58_3_ = document.getElementById("58-3"); _58_3_.className = "PastScorigami";
        const _30_11_ = document.getElementById("30-11"); _30_11_.className = "PastScorigami";
        const _72_14_ = document.getElementById("72-14"); _72_14_.className = "PastScorigami";
        const _69_17_ = document.getElementById("69-17"); _69_17_.className = "PastScorigami";
        const _56_19_ = document.getElementById("56-19"); _56_19_.className = "PastScorigami";
        const _49_25_ = document.getElementById("49-25"); _49_25_.className = "PastScorigami";
        const _51_26_ = document.getElementById("51-26"); _51_26_.className = "PastScorigami";
        const _43_27_ = document.getElementById("43-27"); _43_27_.className = "PastScorigami";
        const _55_27_ = document.getElementById("55-27"); _55_27_.className = "PastScorigami";
        const _44_30_ = document.getElementById("44-30"); _44_30_.className = "PastScorigami";
        const _45_31_ = document.getElementById("45-31"); _45_31_.className = "PastScorigami";
        const _43_39_ = document.getElementById("43-39"); _43_39_.className = "PastScorigami";
        const _42_41_ = document.getElementById("42-41"); _42_41_.className = "PastScorigami";
    }
    if (output.innerHTML < "1978") {
        const _58_3_ = document.getElementById("58-3"); _58_3_.className = "Blank";
        const _30_11_ = document.getElementById("30-11"); _30_11_.className = "Blank";
        const _72_14_ = document.getElementById("72-14"); _72_14_.className = "Blank";
        const _69_17_ = document.getElementById("69-17"); _69_17_.className = "Blank";
        const _56_19_ = document.getElementById("56-19"); _56_19_.className = "Blank";
        const _49_25_ = document.getElementById("49-25"); _49_25_.className = "Blank";
        const _51_26_ = document.getElementById("51-26"); _51_26_.className = "Blank";
        const _43_27_ = document.getElementById("43-27"); _43_27_.className = "Blank";
        const _55_27_ = document.getElementById("55-27"); _55_27_.className = "Blank";
        const _44_30_ = document.getElementById("44-30"); _44_30_.className = "Blank";
        const _45_31_ = document.getElementById("45-31"); _45_31_.className = "Blank";
        const _43_39_ = document.getElementById("43-39"); _43_39_.className = "Blank";
        const _42_41_ = document.getElementById("42-41"); _42_41_.className = "Blank";
    }

    //1979 Scorigami
    if (output.innerHTML == "1979") {
        const _38_2_ = document.getElementById("38-2"); _38_2_.className = "Scorigami";
        const _69_9_ = document.getElementById("69-9"); _69_9_.className = "Scorigami";
        const _59_15_ = document.getElementById("59-15"); _59_15_.className = "Scorigami";
        const _40_23_ = document.getElementById("40-23"); _40_23_.className = "Scorigami";
        const _52_25_ = document.getElementById("52-25"); _52_25_.className = "Scorigami";
        const _58_27_ = document.getElementById("58-27"); _58_27_.className = "Scorigami";
        const _49_30_ = document.getElementById("49-30"); _49_30_.className = "Scorigami";
        const _41_31_ = document.getElementById("41-31"); _41_31_.className = "Scorigami";
        const _41_32_ = document.getElementById("41-32"); _41_32_.className = "Scorigami";
        const _47_37_ = document.getElementById("47-37"); _47_37_.className = "Scorigami";
        const _43_41_ = document.getElementById("43-41"); _43_41_.className = "Scorigami";
        const _45_42_ = document.getElementById("45-42"); _45_42_.className = "Scorigami";
        const _53_42_ = document.getElementById("53-42"); _53_42_.className = "Scorigami";
        const _45_44_ = document.getElementById("45-44"); _45_44_.className = "Scorigami";
        const _48_48_ = document.getElementById("48-48"); _48_48_.className = "Scorigami";
        const _63_55_ = document.getElementById("63-55"); _63_55_.className = "Scorigami";
    }
    if (output.innerHTML > "1979") {
        const _38_2_ = document.getElementById("38-2"); _38_2_.className = "PastScorigami";
        const _69_9_ = document.getElementById("69-9"); _69_9_.className = "PastScorigami";
        const _59_15_ = document.getElementById("59-15"); _59_15_.className = "PastScorigami";
        const _40_23_ = document.getElementById("40-23"); _40_23_.className = "PastScorigami";
        const _52_25_ = document.getElementById("52-25"); _52_25_.className = "PastScorigami";
        const _58_27_ = document.getElementById("58-27"); _58_27_.className = "PastScorigami";
        const _49_30_ = document.getElementById("49-30"); _49_30_.className = "PastScorigami";
        const _41_31_ = document.getElementById("41-31"); _41_31_.className = "PastScorigami";
        const _41_32_ = document.getElementById("41-32"); _41_32_.className = "PastScorigami";
        const _47_37_ = document.getElementById("47-37"); _47_37_.className = "PastScorigami";
        const _43_41_ = document.getElementById("43-41"); _43_41_.className = "PastScorigami";
        const _45_42_ = document.getElementById("45-42"); _45_42_.className = "PastScorigami";
        const _53_42_ = document.getElementById("53-42"); _53_42_.className = "PastScorigami";
        const _45_44_ = document.getElementById("45-44"); _45_44_.className = "PastScorigami";
        const _48_48_ = document.getElementById("48-48"); _48_48_.className = "PastScorigami";
        const _63_55_ = document.getElementById("63-55"); _63_55_.className = "PastScorigami";
    }
    if (output.innerHTML < "1979") {
        const _38_2_ = document.getElementById("38-2"); _38_2_.className = "Blank";
        const _69_9_ = document.getElementById("69-9"); _69_9_.className = "Blank";
        const _59_15_ = document.getElementById("59-15"); _59_15_.className = "Blank";
        const _40_23_ = document.getElementById("40-23"); _40_23_.className = "Blank";
        const _52_25_ = document.getElementById("52-25"); _52_25_.className = "Blank";
        const _58_27_ = document.getElementById("58-27"); _58_27_.className = "Blank";
        const _49_30_ = document.getElementById("49-30"); _49_30_.className = "Blank";
        const _41_31_ = document.getElementById("41-31"); _41_31_.className = "Blank";
        const _41_32_ = document.getElementById("41-32"); _41_32_.className = "Blank";
        const _47_37_ = document.getElementById("47-37"); _47_37_.className = "Blank";
        const _43_41_ = document.getElementById("43-41"); _43_41_.className = "Blank";
        const _45_42_ = document.getElementById("45-42"); _45_42_.className = "Blank";
        const _53_42_ = document.getElementById("53-42"); _53_42_.className = "Blank";
        const _45_44_ = document.getElementById("45-44"); _45_44_.className = "Blank";
        const _48_48_ = document.getElementById("48-48"); _48_48_.className = "Blank";
        const _63_55_ = document.getElementById("63-55"); _63_55_.className = "Blank";
    }

    //1980 Scorigami
    if (output.innerHTML == "1980") {
        const _83_7_ = document.getElementById("83-7"); _83_7_.className = "Scorigami";
        const _38_11_ = document.getElementById("38-11"); _38_11_.className = "Scorigami";
        const _52_17_ = document.getElementById("52-17"); _52_17_.className = "Scorigami";
        const _52_24_ = document.getElementById("52-24"); _52_24_.className = "Scorigami";
        const _32_25_ = document.getElementById("32-25"); _32_25_.className = "Scorigami";
        const _36_25_ = document.getElementById("36-25"); _36_25_.className = "Scorigami";
        const _52_31_ = document.getElementById("52-31"); _52_31_.className = "Scorigami";
        const _55_31_ = document.getElementById("55-31"); _55_31_.className = "Scorigami";
        const _59_35_ = document.getElementById("59-35"); _59_35_.className = "Scorigami";
        const _63_35_ = document.getElementById("63-35"); _63_35_.className = "Scorigami";
        const _44_38_ = document.getElementById("44-38"); _44_38_.className = "Scorigami";
        const _82_42_ = document.getElementById("82-42"); _82_42_.className = "Scorigami";
        const _46_45_ = document.getElementById("46-45"); _46_45_.className = "Scorigami";
        const _70_46_ = document.getElementById("70-46"); _70_46_.className = "Scorigami";
    }
    if (output.innerHTML > "1980") {
        const _83_7_ = document.getElementById("83-7"); _83_7_.className = "PastScorigami";
        const _38_11_ = document.getElementById("38-11"); _38_11_.className = "PastScorigami";
        const _52_17_ = document.getElementById("52-17"); _52_17_.className = "PastScorigami";
        const _52_24_ = document.getElementById("52-24"); _52_24_.className = "PastScorigami";
        const _32_25_ = document.getElementById("32-25"); _32_25_.className = "PastScorigami";
        const _36_25_ = document.getElementById("36-25"); _36_25_.className = "PastScorigami";
        const _52_31_ = document.getElementById("52-31"); _52_31_.className = "PastScorigami";
        const _55_31_ = document.getElementById("55-31"); _55_31_.className = "PastScorigami";
        const _59_35_ = document.getElementById("59-35"); _59_35_.className = "PastScorigami";
        const _63_35_ = document.getElementById("63-35"); _63_35_.className = "PastScorigami";
        const _44_38_ = document.getElementById("44-38"); _44_38_.className = "PastScorigami";
        const _82_42_ = document.getElementById("82-42"); _82_42_.className = "PastScorigami";
        const _46_45_ = document.getElementById("46-45"); _46_45_.className = "PastScorigami";
        const _70_46_ = document.getElementById("70-46"); _70_46_.className = "PastScorigami";
    }
    if (output.innerHTML < "1980") {
        const _83_7_ = document.getElementById("83-7"); _83_7_.className = "Blank";
        const _38_11_ = document.getElementById("38-11"); _38_11_.className = "Blank";
        const _52_17_ = document.getElementById("52-17"); _52_17_.className = "Blank";
        const _52_24_ = document.getElementById("52-24"); _52_24_.className = "Blank";
        const _32_25_ = document.getElementById("32-25"); _32_25_.className = "Blank";
        const _36_25_ = document.getElementById("36-25"); _36_25_.className = "Blank";
        const _52_31_ = document.getElementById("52-31"); _52_31_.className = "Blank";
        const _55_31_ = document.getElementById("55-31"); _55_31_.className = "Blank";
        const _59_35_ = document.getElementById("59-35"); _59_35_.className = "Blank";
        const _63_35_ = document.getElementById("63-35"); _63_35_.className = "Blank";
        const _44_38_ = document.getElementById("44-38"); _44_38_.className = "Blank";
        const _82_42_ = document.getElementById("82-42"); _82_42_.className = "Blank";
        const _46_45_ = document.getElementById("46-45"); _46_45_.className = "Blank";
        const _70_46_ = document.getElementById("70-46"); _70_46_.className = "Blank";
    }

    //1981 Scorigami
    if (output.innerHTML == "1981") {
        const _61_8_ = document.getElementById("61-8"); _61_8_.className = "Scorigami";
        const _65_8_ = document.getElementById("65-8"); _65_8_.className = "Scorigami";
        const _59_9_ = document.getElementById("59-9"); _59_9_.className = "Scorigami";
        const _52_22_ = document.getElementById("52-22"); _52_22_.className = "Scorigami";
        const _56_22_ = document.getElementById("56-22"); _56_22_.className = "Scorigami";
        const _66_23_ = document.getElementById("66-23"); _66_23_.className = "Scorigami";
        const _82_24_ = document.getElementById("82-24"); _82_24_.className = "Scorigami";
        const _59_27_ = document.getElementById("59-27"); _59_27_.className = "Scorigami";
        const _56_28_ = document.getElementById("56-28"); _56_28_.className = "Scorigami";
        const _69_28_ = document.getElementById("69-28"); _69_28_.className = "Scorigami";
        const _38_30_ = document.getElementById("38-30"); _38_30_.className = "Scorigami";
        const _39_30_ = document.getElementById("39-30"); _39_30_.className = "Scorigami";
        const _56_31_ = document.getElementById("56-31"); _56_31_.className = "Scorigami";
        const _45_33_ = document.getElementById("45-33"); _45_33_.className = "Scorigami";
        const _65_33_ = document.getElementById("65-33"); _65_33_.className = "Scorigami";
        const _43_36_ = document.getElementById("43-36"); _43_36_.className = "Scorigami";
        const _39_39_ = document.getElementById("39-39"); _39_39_.className = "Scorigami";
        const _41_39_ = document.getElementById("41-39"); _41_39_.className = "Scorigami";
        const _55_44_ = document.getElementById("55-44"); _55_44_.className = "Scorigami";
        const _50_47_ = document.getElementById("50-47"); _50_47_.className = "Scorigami";
    }
    if (output.innerHTML > "1981") {
        const _61_8_ = document.getElementById("61-8"); _61_8_.className = "PastScorigami";
        const _65_8_ = document.getElementById("65-8"); _65_8_.className = "PastScorigami";
        const _59_9_ = document.getElementById("59-9"); _59_9_.className = "PastScorigami";
        const _52_22_ = document.getElementById("52-22"); _52_22_.className = "PastScorigami";
        const _56_22_ = document.getElementById("56-22"); _56_22_.className = "PastScorigami";
        const _66_23_ = document.getElementById("66-23"); _66_23_.className = "PastScorigami";
        const _82_24_ = document.getElementById("82-24"); _82_24_.className = "PastScorigami";
        const _59_27_ = document.getElementById("59-27"); _59_27_.className = "PastScorigami";
        const _56_28_ = document.getElementById("56-28"); _56_28_.className = "PastScorigami";
        const _69_28_ = document.getElementById("69-28"); _69_28_.className = "PastScorigami";
        const _38_30_ = document.getElementById("38-30"); _38_30_.className = "PastScorigami";
        const _39_30_ = document.getElementById("39-30"); _39_30_.className = "PastScorigami";
        const _56_31_ = document.getElementById("56-31"); _56_31_.className = "PastScorigami";
        const _45_33_ = document.getElementById("45-33"); _45_33_.className = "PastScorigami";
        const _65_33_ = document.getElementById("65-33"); _65_33_.className = "PastScorigami";
        const _43_36_ = document.getElementById("43-36"); _43_36_.className = "PastScorigami";
        const _39_39_ = document.getElementById("39-39"); _39_39_.className = "PastScorigami";
        const _41_39_ = document.getElementById("41-39"); _41_39_.className = "PastScorigami";
        const _55_44_ = document.getElementById("55-44"); _55_44_.className = "PastScorigami";
        const _50_47_ = document.getElementById("50-47"); _50_47_.className = "PastScorigami";
    }
    if (output.innerHTML < "1981") {
        const _61_8_ = document.getElementById("61-8"); _61_8_.className = "Blank";
        const _65_8_ = document.getElementById("65-8"); _65_8_.className = "Blank";
        const _59_9_ = document.getElementById("59-9"); _59_9_.className = "Blank";
        const _52_22_ = document.getElementById("52-22"); _52_22_.className = "Blank";
        const _56_22_ = document.getElementById("56-22"); _56_22_.className = "Blank";
        const _66_23_ = document.getElementById("66-23"); _66_23_.className = "Blank";
        const _82_24_ = document.getElementById("82-24"); _82_24_.className = "Blank";
        const _59_27_ = document.getElementById("59-27"); _59_27_.className = "Blank";
        const _56_28_ = document.getElementById("56-28"); _56_28_.className = "Blank";
        const _69_28_ = document.getElementById("69-28"); _69_28_.className = "Blank";
        const _38_30_ = document.getElementById("38-30"); _38_30_.className = "Blank";
        const _39_30_ = document.getElementById("39-30"); _39_30_.className = "Blank";
        const _56_31_ = document.getElementById("56-31"); _56_31_.className = "Blank";
        const _45_33_ = document.getElementById("45-33"); _45_33_.className = "Blank";
        const _65_33_ = document.getElementById("65-33"); _65_33_.className = "Blank";
        const _43_36_ = document.getElementById("43-36"); _43_36_.className = "Blank";
        const _39_39_ = document.getElementById("39-39"); _39_39_.className = "Blank";
        const _41_39_ = document.getElementById("41-39"); _41_39_.className = "Blank";
        const _55_44_ = document.getElementById("55-44"); _55_44_.className = "Blank";
        const _50_47_ = document.getElementById("50-47"); _50_47_.className = "Blank";
    }

    //1982 Scorigami
    if (output.innerHTML == "1982") {
        const _57_3_ = document.getElementById("57-3"); _57_3_.className = "Scorigami";
        const _59_8_ = document.getElementById("59-8"); _59_8_.className = "Scorigami";
        const _53_16_ = document.getElementById("53-16"); _53_16_.className = "Scorigami";
        const _51_17_ = document.getElementById("51-17"); _51_17_.className = "Scorigami";
        const _61_22_ = document.getElementById("61-22"); _61_22_.className = "Scorigami";
        const _56_26_ = document.getElementById("56-26"); _56_26_.className = "Scorigami";
        const _45_30_ = document.getElementById("45-30"); _45_30_.className = "Scorigami";
        const _43_31_ = document.getElementById("43-31"); _43_31_.className = "Scorigami";
        const _44_32_ = document.getElementById("44-32"); _44_32_.className = "Scorigami";
        const _49_37_ = document.getElementById("49-37"); _49_37_.className = "Scorigami";
        const _48_41_ = document.getElementById("48-41"); _48_41_.className = "Scorigami";
    }
    if (output.innerHTML > "1982") {
        const _57_3_ = document.getElementById("57-3"); _57_3_.className = "PastScorigami";
        const _59_8_ = document.getElementById("59-8"); _59_8_.className = "PastScorigami";
        const _53_16_ = document.getElementById("53-16"); _53_16_.className = "PastScorigami";
        const _51_17_ = document.getElementById("51-17"); _51_17_.className = "PastScorigami";
        const _61_22_ = document.getElementById("61-22"); _61_22_.className = "PastScorigami";
        const _56_26_ = document.getElementById("56-26"); _56_26_.className = "PastScorigami";
        const _45_30_ = document.getElementById("45-30"); _45_30_.className = "PastScorigami";
        const _43_31_ = document.getElementById("43-31"); _43_31_.className = "PastScorigami";
        const _44_32_ = document.getElementById("44-32"); _44_32_.className = "PastScorigami";
        const _49_37_ = document.getElementById("49-37"); _49_37_.className = "PastScorigami";
        const _48_41_ = document.getElementById("48-41"); _48_41_.className = "PastScorigami";
    }
    if (output.innerHTML < "1982") {
        const _57_3_ = document.getElementById("57-3"); _57_3_.className = "Blank";
        const _59_8_ = document.getElementById("59-8"); _59_8_.className = "Blank";
        const _53_16_ = document.getElementById("53-16"); _53_16_.className = "Blank";
        const _51_17_ = document.getElementById("51-17"); _51_17_.className = "Blank";
        const _61_22_ = document.getElementById("61-22"); _61_22_.className = "Blank";
        const _56_26_ = document.getElementById("56-26"); _56_26_.className = "Blank";
        const _45_30_ = document.getElementById("45-30"); _45_30_.className = "Blank";
        const _43_31_ = document.getElementById("43-31"); _43_31_.className = "Blank";
        const _44_32_ = document.getElementById("44-32"); _44_32_.className = "Blank";
        const _49_37_ = document.getElementById("49-37"); _49_37_.className = "Blank";
        const _48_41_ = document.getElementById("48-41"); _48_41_.className = "Blank";
    }

    //1983 Scorigami
    if (output.innerHTML == "1983") {
        const _29_11_ = document.getElementById("29-11"); _29_11_.className = "Scorigami";
        const _84_13_ = document.getElementById("84-13"); _84_13_.className = "Scorigami";
        const _69_18_ = document.getElementById("69-18"); _69_18_.className = "Scorigami";
        const _50_23_ = document.getElementById("50-23"); _50_23_.className = "Scorigami";
        const _37_25_ = document.getElementById("37-25"); _37_25_.className = "Scorigami";
        const _50_25_ = document.getElementById("50-25"); _50_25_.className = "Scorigami";
        const _51_25_ = document.getElementById("51-25"); _51_25_.className = "Scorigami";
        const _62_28_ = document.getElementById("62-28"); _62_28_.className = "Scorigami";
        const _72_29_ = document.getElementById("72-29"); _72_29_.className = "Scorigami";
        const _41_33_ = document.getElementById("41-33"); _41_33_.className = "Scorigami";
        const _49_33_ = document.getElementById("49-33"); _49_33_.className = "Scorigami";
        const _47_46_ = document.getElementById("47-46"); _47_46_.className = "Scorigami";
    }
    if (output.innerHTML > "1983") {
        const _29_11_ = document.getElementById("29-11"); _29_11_.className = "PastScorigami";
        const _84_13_ = document.getElementById("84-13"); _84_13_.className = "PastScorigami";
        const _69_18_ = document.getElementById("69-18"); _69_18_.className = "PastScorigami";
        const _50_23_ = document.getElementById("50-23"); _50_23_.className = "PastScorigami";
        const _37_25_ = document.getElementById("37-25"); _37_25_.className = "PastScorigami";
        const _50_25_ = document.getElementById("50-25"); _50_25_.className = "PastScorigami";
        const _51_25_ = document.getElementById("51-25"); _51_25_.className = "PastScorigami";
        const _62_28_ = document.getElementById("62-28"); _62_28_.className = "PastScorigami";
        const _72_29_ = document.getElementById("72-29"); _72_29_.className = "PastScorigami";
        const _41_33_ = document.getElementById("41-33"); _41_33_.className = "PastScorigami";
        const _49_33_ = document.getElementById("49-33"); _49_33_.className = "PastScorigami";
        const _47_46_ = document.getElementById("47-46"); _47_46_.className = "PastScorigami";
    }
    if (output.innerHTML < "1983") {
        const _29_11_ = document.getElementById("29-11"); _29_11_.className = "Blank";
        const _84_13_ = document.getElementById("84-13"); _84_13_.className = "Blank";
        const _69_18_ = document.getElementById("69-18"); _69_18_.className = "Blank";
        const _50_23_ = document.getElementById("50-23"); _50_23_.className = "Blank";
        const _37_25_ = document.getElementById("37-25"); _37_25_.className = "Blank";
        const _50_25_ = document.getElementById("50-25"); _50_25_.className = "Blank";
        const _51_25_ = document.getElementById("51-25"); _51_25_.className = "Blank";
        const _62_28_ = document.getElementById("62-28"); _62_28_.className = "Blank";
        const _72_29_ = document.getElementById("72-29"); _72_29_.className = "Blank";
        const _41_33_ = document.getElementById("41-33"); _41_33_.className = "Blank";
        const _49_33_ = document.getElementById("49-33"); _49_33_.className = "Blank";
        const _47_46_ = document.getElementById("47-46"); _47_46_.className = "Blank";
    }

    //1984 Scorigami
    if (output.innerHTML == "1984") {
        const _51_2_ = document.getElementById("51-2"); _51_2_.className = "Scorigami";
        const _55_17_ = document.getElementById("55-17"); _55_17_.className = "Scorigami";
        const _62_18_ = document.getElementById("62-18"); _62_18_.className = "Scorigami";
        const _53_24_ = document.getElementById("53-24"); _53_24_.className = "Scorigami";
        const _43_30_ = document.getElementById("43-30"); _43_30_.className = "Scorigami";
        const _37_31_ = document.getElementById("37-31"); _37_31_.className = "Scorigami";
        const _59_31_ = document.getElementById("59-31"); _59_31_.className = "Scorigami";
        const _40_33_ = document.getElementById("40-33"); _40_33_.className = "Scorigami";
        const _43_34_ = document.getElementById("43-34"); _43_34_.className = "Scorigami";
        const _62_35_ = document.getElementById("62-35"); _62_35_.className = "Scorigami";
        const _39_37_ = document.getElementById("39-37"); _39_37_.className = "Scorigami";
        const _40_37_ = document.getElementById("40-37"); _40_37_.className = "Scorigami";
        const _50_41_ = document.getElementById("50-41"); _50_41_.className = "Scorigami";
        const _52_44_ = document.getElementById("52-44"); _52_44_.className = "Scorigami";
        const _47_45_ = document.getElementById("47-45"); _47_45_.className = "Scorigami";
    }
    if (output.innerHTML > "1984") {
        const _51_2_ = document.getElementById("51-2"); _51_2_.className = "PastScorigami";
        const _55_17_ = document.getElementById("55-17"); _55_17_.className = "PastScorigami";
        const _62_18_ = document.getElementById("62-18"); _62_18_.className = "PastScorigami";
        const _53_24_ = document.getElementById("53-24"); _53_24_.className = "PastScorigami";
        const _43_30_ = document.getElementById("43-30"); _43_30_.className = "PastScorigami";
        const _37_31_ = document.getElementById("37-31"); _37_31_.className = "PastScorigami";
        const _59_31_ = document.getElementById("59-31"); _59_31_.className = "PastScorigami";
        const _40_33_ = document.getElementById("40-33"); _40_33_.className = "PastScorigami";
        const _43_34_ = document.getElementById("43-34"); _43_34_.className = "PastScorigami";
        const _62_35_ = document.getElementById("62-35"); _62_35_.className = "PastScorigami";
        const _39_37_ = document.getElementById("39-37"); _39_37_.className = "PastScorigami";
        const _40_37_ = document.getElementById("40-37"); _40_37_.className = "PastScorigami";
        const _50_41_ = document.getElementById("50-41"); _50_41_.className = "PastScorigami";
        const _52_44_ = document.getElementById("52-44"); _52_44_.className = "PastScorigami";
        const _47_45_ = document.getElementById("47-45"); _47_45_.className = "PastScorigami";
    }
    if (output.innerHTML < "1984") {
        const _51_2_ = document.getElementById("51-2"); _51_2_.className = "Blank";
        const _55_17_ = document.getElementById("55-17"); _55_17_.className = "Blank";
        const _62_18_ = document.getElementById("62-18"); _62_18_.className = "Blank";
        const _53_24_ = document.getElementById("53-24"); _53_24_.className = "Blank";
        const _43_30_ = document.getElementById("43-30"); _43_30_.className = "Blank";
        const _37_31_ = document.getElementById("37-31"); _37_31_.className = "Blank";
        const _59_31_ = document.getElementById("59-31"); _59_31_.className = "Blank";
        const _40_33_ = document.getElementById("40-33"); _40_33_.className = "Blank";
        const _43_34_ = document.getElementById("43-34"); _43_34_.className = "Blank";
        const _62_35_ = document.getElementById("62-35"); _62_35_.className = "Blank";
        const _39_37_ = document.getElementById("39-37"); _39_37_.className = "Blank";
        const _40_37_ = document.getElementById("40-37"); _40_37_.className = "Blank";
        const _50_41_ = document.getElementById("50-41"); _50_41_.className = "Blank";
        const _52_44_ = document.getElementById("52-44"); _52_44_.className = "Blank";
        const _47_45_ = document.getElementById("47-45"); _47_45_.className = "Blank";
    }

    //1985 Scorigami
    if (output.innerHTML == "1985") {
        const _50_10_ = document.getElementById("50-10"); _50_10_.className = "Scorigami";
        const _64_14_ = document.getElementById("64-14"); _64_14_.className = "Scorigami";
        const _76_14_ = document.getElementById("76-14"); _76_14_.className = "Scorigami";
        const _59_17_ = document.getElementById("59-17"); _59_17_.className = "Scorigami";
        const _62_17_ = document.getElementById("62-17"); _62_17_.className = "Scorigami";
        const _55_25_ = document.getElementById("55-25"); _55_25_.className = "Scorigami";
        const _57_27_ = document.getElementById("57-27"); _57_27_.className = "Scorigami";
        const _43_28_ = document.getElementById("43-28"); _43_28_.className = "Scorigami";
        const _48_32_ = document.getElementById("48-32"); _48_32_.className = "Scorigami";
        const _43_37_ = document.getElementById("43-37"); _43_37_.className = "Scorigami";
        const _42_39_ = document.getElementById("42-39"); _42_39_.className = "Scorigami";
        const _58_49_ = document.getElementById("58-49"); _58_49_.className = "Scorigami";
    }
    if (output.innerHTML > "1985") {
        const _50_10_ = document.getElementById("50-10"); _50_10_.className = "PastScorigami";
        const _64_14_ = document.getElementById("64-14"); _64_14_.className = "PastScorigami";
        const _76_14_ = document.getElementById("76-14"); _76_14_.className = "PastScorigami";
        const _59_17_ = document.getElementById("59-17"); _59_17_.className = "PastScorigami";
        const _62_17_ = document.getElementById("62-17"); _62_17_.className = "PastScorigami";
        const _55_25_ = document.getElementById("55-25"); _55_25_.className = "PastScorigami";
        const _57_27_ = document.getElementById("57-27"); _57_27_.className = "PastScorigami";
        const _43_28_ = document.getElementById("43-28"); _43_28_.className = "PastScorigami";
        const _48_32_ = document.getElementById("48-32"); _48_32_.className = "PastScorigami";
        const _43_37_ = document.getElementById("43-37"); _43_37_.className = "PastScorigami";
        const _42_39_ = document.getElementById("42-39"); _42_39_.className = "PastScorigami";
        const _58_49_ = document.getElementById("58-49"); _58_49_.className = "PastScorigami";
    }
    if (output.innerHTML < "1985") {
        const _50_10_ = document.getElementById("50-10"); _50_10_.className = "Blank";
        const _64_14_ = document.getElementById("64-14"); _64_14_.className = "Blank";
        const _76_14_ = document.getElementById("76-14"); _76_14_.className = "Blank";
        const _59_17_ = document.getElementById("59-17"); _59_17_.className = "Blank";
        const _62_17_ = document.getElementById("62-17"); _62_17_.className = "Blank";
        const _55_25_ = document.getElementById("55-25"); _55_25_.className = "Blank";
        const _57_27_ = document.getElementById("57-27"); _57_27_.className = "Blank";
        const _43_28_ = document.getElementById("43-28"); _43_28_.className = "Blank";
        const _48_32_ = document.getElementById("48-32"); _48_32_.className = "Blank";
        const _43_37_ = document.getElementById("43-37"); _43_37_.className = "Blank";
        const _42_39_ = document.getElementById("42-39"); _42_39_.className = "Blank";
        const _58_49_ = document.getElementById("58-49"); _58_49_.className = "Blank";
    }

    //1986 Scorigami
    if (output.innerHTML == "1986") {
        const _59_3_ = document.getElementById("59-3"); _59_3_.className = "Scorigami";
        const _64_3_ = document.getElementById("64-3"); _64_3_.className = "Scorigami";
        const _64_9_ = document.getElementById("64-9"); _64_9_.className = "Scorigami";
        const _74_10_ = document.getElementById("74-10"); _74_10_.className = "Scorigami";
        const _54_16_ = document.getElementById("54-16"); _54_16_.className = "Scorigami";
        const _54_18_ = document.getElementById("54-18"); _54_18_.className = "Scorigami";
        const _45_25_ = document.getElementById("45-25"); _45_25_.className = "Scorigami";
        const _52_29_ = document.getElementById("52-29"); _52_29_.className = "Scorigami";
        const _61_29_ = document.getElementById("61-29"); _61_29_.className = "Scorigami";
        const _64_29_ = document.getElementById("64-29"); _64_29_.className = "Scorigami";
        const _40_30_ = document.getElementById("40-30"); _40_30_.className = "Scorigami";
        const _45_35_ = document.getElementById("45-35"); _45_35_.className = "Scorigami";
        const _58_42_ = document.getElementById("58-42"); _58_42_.className = "Scorigami";
        const _47_43_ = document.getElementById("47-43"); _47_43_.className = "Scorigami";
        const _56_48_ = document.getElementById("56-48"); _56_48_.className = "Scorigami";
    }
    if (output.innerHTML > "1986") {
        const _59_3_ = document.getElementById("59-3"); _59_3_.className = "PastScorigami";
        const _64_3_ = document.getElementById("64-3"); _64_3_.className = "PastScorigami";
        const _64_9_ = document.getElementById("64-9"); _64_9_.className = "PastScorigami";
        const _74_10_ = document.getElementById("74-10"); _74_10_.className = "PastScorigami";
        const _54_16_ = document.getElementById("54-16"); _54_16_.className = "PastScorigami";
        const _54_18_ = document.getElementById("54-18"); _54_18_.className = "PastScorigami";
        const _45_25_ = document.getElementById("45-25"); _45_25_.className = "PastScorigami";
        const _52_29_ = document.getElementById("52-29"); _52_29_.className = "PastScorigami";
        const _61_29_ = document.getElementById("61-29"); _61_29_.className = "PastScorigami";
        const _64_29_ = document.getElementById("64-29"); _64_29_.className = "PastScorigami";
        const _40_30_ = document.getElementById("40-30"); _40_30_.className = "PastScorigami";
        const _45_35_ = document.getElementById("45-35"); _45_35_.className = "PastScorigami";
        const _58_42_ = document.getElementById("58-42"); _58_42_.className = "PastScorigami";
        const _47_43_ = document.getElementById("47-43"); _47_43_.className = "PastScorigami";
        const _56_48_ = document.getElementById("56-48"); _56_48_.className = "PastScorigami";
    }
    if (output.innerHTML < "1986") {
        const _59_3_ = document.getElementById("59-3"); _59_3_.className = "Blank";
        const _64_3_ = document.getElementById("64-3"); _64_3_.className = "Blank";
        const _64_9_ = document.getElementById("64-9"); _64_9_.className = "Blank";
        const _74_10_ = document.getElementById("74-10"); _74_10_.className = "Blank";
        const _54_16_ = document.getElementById("54-16"); _54_16_.className = "Blank";
        const _54_18_ = document.getElementById("54-18"); _54_18_.className = "Blank";
        const _45_25_ = document.getElementById("45-25"); _45_25_.className = "Blank";
        const _52_29_ = document.getElementById("52-29"); _52_29_.className = "Blank";
        const _61_29_ = document.getElementById("61-29"); _61_29_.className = "Blank";
        const _64_29_ = document.getElementById("64-29"); _64_29_.className = "Blank";
        const _40_30_ = document.getElementById("40-30"); _40_30_.className = "Blank";
        const _45_35_ = document.getElementById("45-35"); _45_35_.className = "Blank";
        const _58_42_ = document.getElementById("58-42"); _58_42_.className = "Blank";
        const _47_43_ = document.getElementById("47-43"); _47_43_.className = "Blank";
        const _56_48_ = document.getElementById("56-48"); _56_48_.className = "Blank";
    }

    //1987 Scorigami
    if (output.innerHTML == "1987") {
        const _31_4_ = document.getElementById("31-4"); _31_4_.className = "Scorigami";
        const _62_10_ = document.getElementById("62-10"); _62_10_.className = "Scorigami";
        const _71_10_ = document.getElementById("71-10"); _71_10_.className = "Scorigami";
        const _51_16_ = document.getElementById("51-16"); _51_16_.className = "Scorigami";
        const _61_16_ = document.getElementById("61-16"); _61_16_.className = "Scorigami";
        const _73_26_ = document.getElementById("73-26"); _73_26_.className = "Scorigami";
        const _53_30_ = document.getElementById("53-30"); _53_30_.className = "Scorigami";
        const _45_36_ = document.getElementById("45-36"); _45_36_.className = "Scorigami";
        const _57_38_ = document.getElementById("57-38"); _57_38_.className = "Scorigami";
        const _60_40_ = document.getElementById("60-40"); _60_40_.className = "Scorigami";
        const _52_42_ = document.getElementById("52-42"); _52_42_.className = "Scorigami";
    }
    if (output.innerHTML > "1987") {
        const _31_4_ = document.getElementById("31-4"); _31_4_.className = "PastScorigami";
        const _62_10_ = document.getElementById("62-10"); _62_10_.className = "PastScorigami";
        const _71_10_ = document.getElementById("71-10"); _71_10_.className = "PastScorigami";
        const _51_16_ = document.getElementById("51-16"); _51_16_.className = "PastScorigami";
        const _61_16_ = document.getElementById("61-16"); _61_16_.className = "PastScorigami";
        const _73_26_ = document.getElementById("73-26"); _73_26_.className = "PastScorigami";
        const _53_30_ = document.getElementById("53-30"); _53_30_.className = "PastScorigami";
        const _45_36_ = document.getElementById("45-36"); _45_36_.className = "PastScorigami";
        const _57_38_ = document.getElementById("57-38"); _57_38_.className = "PastScorigami";
        const _60_40_ = document.getElementById("60-40"); _60_40_.className = "PastScorigami";
        const _52_42_ = document.getElementById("52-42"); _52_42_.className = "PastScorigami";
    }
    if (output.innerHTML < "1987") {
        const _31_4_ = document.getElementById("31-4"); _31_4_.className = "Blank";
        const _62_10_ = document.getElementById("62-10"); _62_10_.className = "Blank";
        const _71_10_ = document.getElementById("71-10"); _71_10_.className = "Blank";
        const _51_16_ = document.getElementById("51-16"); _51_16_.className = "Blank";
        const _61_16_ = document.getElementById("61-16"); _61_16_.className = "Blank";
        const _73_26_ = document.getElementById("73-26"); _73_26_.className = "Blank";
        const _53_30_ = document.getElementById("53-30"); _53_30_.className = "Blank";
        const _45_36_ = document.getElementById("45-36"); _45_36_.className = "Blank";
        const _57_38_ = document.getElementById("57-38"); _57_38_.className = "Blank";
        const _60_40_ = document.getElementById("60-40"); _60_40_.className = "Blank";
        const _52_42_ = document.getElementById("52-42"); _52_42_.className = "Blank";
    }

    //1988 Scorigami
    if (output.innerHTML == "1988") {
        const _63_10_ = document.getElementById("63-10"); _63_10_.className = "Scorigami";
        const _54_11_ = document.getElementById("54-11"); _54_11_.className = "Scorigami";
        const _66_15_ = document.getElementById("66-15"); _66_15_.className = "Scorigami";
        const _61_18_ = document.getElementById("61-18"); _61_18_.className = "Scorigami";
        const _59_24_ = document.getElementById("59-24"); _59_24_.className = "Scorigami";
        const _63_24_ = document.getElementById("63-24"); _63_24_.className = "Scorigami";
        const _70_24_ = document.getElementById("70-24"); _70_24_.className = "Scorigami";
        const _62_27_ = document.getElementById("62-27"); _62_27_.className = "Scorigami";
        const _59_28_ = document.getElementById("59-28"); _59_28_.className = "Scorigami";
        const _82_28_ = document.getElementById("82-28"); _82_28_.className = "Scorigami";
        const _51_30_ = document.getElementById("51-30"); _51_30_.className = "Scorigami";
        const _49_31_ = document.getElementById("49-31"); _49_31_.className = "Scorigami";
        const _34_34_ = document.getElementById("34-34"); _34_34_.className = "Scorigami";
        const _51_34_ = document.getElementById("51-34"); _51_34_.className = "Scorigami";
        const _63_42_ = document.getElementById("63-42"); _63_42_.className = "Scorigami";
        const _43_43_ = document.getElementById("43-43"); _43_43_.className = "Scorigami";
        const _48_45_ = document.getElementById("48-45"); _48_45_.className = "Scorigami";
        const _56_49_ = document.getElementById("56-49"); _56_49_.className = "Scorigami";
    }
    if (output.innerHTML > "1988") {
        const _63_10_ = document.getElementById("63-10"); _63_10_.className = "PastScorigami";
        const _54_11_ = document.getElementById("54-11"); _54_11_.className = "PastScorigami";
        const _66_15_ = document.getElementById("66-15"); _66_15_.className = "PastScorigami";
        const _61_18_ = document.getElementById("61-18"); _61_18_.className = "PastScorigami";
        const _59_24_ = document.getElementById("59-24"); _59_24_.className = "PastScorigami";
        const _63_24_ = document.getElementById("63-24"); _63_24_.className = "PastScorigami";
        const _70_24_ = document.getElementById("70-24"); _70_24_.className = "PastScorigami";
        const _62_27_ = document.getElementById("62-27"); _62_27_.className = "PastScorigami";
        const _59_28_ = document.getElementById("59-28"); _59_28_.className = "PastScorigami";
        const _82_28_ = document.getElementById("82-28"); _82_28_.className = "PastScorigami";
        const _51_30_ = document.getElementById("51-30"); _51_30_.className = "PastScorigami";
        const _49_31_ = document.getElementById("49-31"); _49_31_.className = "PastScorigami";
        const _34_34_ = document.getElementById("34-34"); _34_34_.className = "PastScorigami";
        const _51_34_ = document.getElementById("51-34"); _51_34_.className = "PastScorigami";
        const _63_42_ = document.getElementById("63-42"); _63_42_.className = "PastScorigami";
        const _43_43_ = document.getElementById("43-43"); _43_43_.className = "PastScorigami";
        const _48_45_ = document.getElementById("48-45"); _48_45_.className = "PastScorigami";
        const _56_49_ = document.getElementById("56-49"); _56_49_.className = "PastScorigami";
    }
    if (output.innerHTML < "1988") {
        const _63_10_ = document.getElementById("63-10"); _63_10_.className = "Blank";
        const _54_11_ = document.getElementById("54-11"); _54_11_.className = "Blank";
        const _66_15_ = document.getElementById("66-15"); _66_15_.className = "Blank";
        const _61_18_ = document.getElementById("61-18"); _61_18_.className = "Blank";
        const _59_24_ = document.getElementById("59-24"); _59_24_.className = "Blank";
        const _63_24_ = document.getElementById("63-24"); _63_24_.className = "Blank";
        const _70_24_ = document.getElementById("70-24"); _70_24_.className = "Blank";
        const _62_27_ = document.getElementById("62-27"); _62_27_.className = "Blank";
        const _59_28_ = document.getElementById("59-28"); _59_28_.className = "Blank";
        const _82_28_ = document.getElementById("82-28"); _82_28_.className = "Blank";
        const _51_30_ = document.getElementById("51-30"); _51_30_.className = "Blank";
        const _49_31_ = document.getElementById("49-31"); _49_31_.className = "Blank";
        const _34_34_ = document.getElementById("34-34"); _34_34_.className = "Blank";
        const _51_34_ = document.getElementById("51-34"); _51_34_.className = "Blank";
        const _63_42_ = document.getElementById("63-42"); _63_42_.className = "Blank";
        const _43_43_ = document.getElementById("43-43"); _43_43_.className = "Blank";
        const _48_45_ = document.getElementById("48-45"); _48_45_.className = "Blank";
        const _56_49_ = document.getElementById("56-49"); _56_49_.className = "Blank";
    }

    //1989 Scorigami
    if (output.innerHTML == "1989") {
        const _69_3_ = document.getElementById("69-3"); _69_3_.className = "Scorigami";
        const _73_3_ = document.getElementById("73-3"); _73_3_.className = "Scorigami";
        const _59_11_ = document.getElementById("59-11"); _59_11_.className = "Scorigami";
        const _67_20_ = document.getElementById("67-20"); _67_20_.className = "Scorigami";
        const _95_21_ = document.getElementById("95-21"); _95_21_.className = "Scorigami";
        const _46_29_ = document.getElementById("46-29"); _46_29_.className = "Scorigami";
        const _70_31_ = document.getElementById("70-31"); _70_31_.className = "Scorigami";
        const _44_35_ = document.getElementById("44-35"); _44_35_.className = "Scorigami";
        const _52_36_ = document.getElementById("52-36"); _52_36_.className = "Scorigami";
        const _52_37_ = document.getElementById("52-37"); _52_37_.className = "Scorigami";
        const _51_38_ = document.getElementById("51-38"); _51_38_.className = "Scorigami";
        const _44_39_ = document.getElementById("44-39"); _44_39_.className = "Scorigami";
        const _45_39_ = document.getElementById("45-39"); _45_39_.className = "Scorigami";
        const _50_39_ = document.getElementById("50-39"); _50_39_.className = "Scorigami";
        const _43_40_ = document.getElementById("43-40"); _43_40_.className = "Scorigami";
        const _41_41_ = document.getElementById("41-41"); _41_41_.className = "Scorigami";
        const _46_41_ = document.getElementById("46-41"); _46_41_.className = "Scorigami";
        const _46_44_ = document.getElementById("46-44"); _46_44_.className = "Scorigami";
        const _50_45_ = document.getElementById("50-45"); _50_45_.className = "Scorigami";
        const _55_48_ = document.getElementById("55-48"); _55_48_.className = "Scorigami";
    }
    if (output.innerHTML > "1989") {
        const _69_3_ = document.getElementById("69-3"); _69_3_.className = "PastScorigami";
        const _73_3_ = document.getElementById("73-3"); _73_3_.className = "PastScorigami";
        const _59_11_ = document.getElementById("59-11"); _59_11_.className = "PastScorigami";
        const _67_20_ = document.getElementById("67-20"); _67_20_.className = "PastScorigami";
        const _95_21_ = document.getElementById("95-21"); _95_21_.className = "PastScorigami";
        const _46_29_ = document.getElementById("46-29"); _46_29_.className = "PastScorigami";
        const _70_31_ = document.getElementById("70-31"); _70_31_.className = "PastScorigami";
        const _44_35_ = document.getElementById("44-35"); _44_35_.className = "PastScorigami";
        const _52_36_ = document.getElementById("52-36"); _52_36_.className = "PastScorigami";
        const _52_37_ = document.getElementById("52-37"); _52_37_.className = "PastScorigami";
        const _51_38_ = document.getElementById("51-38"); _51_38_.className = "PastScorigami";
        const _44_39_ = document.getElementById("44-39"); _44_39_.className = "PastScorigami";
        const _45_39_ = document.getElementById("45-39"); _45_39_.className = "PastScorigami";
        const _50_39_ = document.getElementById("50-39"); _50_39_.className = "PastScorigami";
        const _43_40_ = document.getElementById("43-40"); _43_40_.className = "PastScorigami";
        const _41_41_ = document.getElementById("41-41"); _41_41_.className = "PastScorigami";
        const _46_41_ = document.getElementById("46-41"); _46_41_.className = "PastScorigami";
        const _46_44_ = document.getElementById("46-44"); _46_44_.className = "PastScorigami";
        const _50_45_ = document.getElementById("50-45"); _50_45_.className = "PastScorigami";
        const _55_48_ = document.getElementById("55-48"); _55_48_.className = "PastScorigami";
    }
    if (output.innerHTML < "1989") {
        const _69_3_ = document.getElementById("69-3"); _69_3_.className = "Blank";
        const _73_3_ = document.getElementById("73-3"); _73_3_.className = "Blank";
        const _59_11_ = document.getElementById("59-11"); _59_11_.className = "Blank";
        const _67_20_ = document.getElementById("67-20"); _67_20_.className = "Blank";
        const _95_21_ = document.getElementById("95-21"); _95_21_.className = "Blank";
        const _46_29_ = document.getElementById("46-29"); _46_29_.className = "Blank";
        const _70_31_ = document.getElementById("70-31"); _70_31_.className = "Blank";
        const _44_35_ = document.getElementById("44-35"); _44_35_.className = "Blank";
        const _52_36_ = document.getElementById("52-36"); _52_36_.className = "Blank";
        const _52_37_ = document.getElementById("52-37"); _52_37_.className = "Blank";
        const _51_38_ = document.getElementById("51-38"); _51_38_.className = "Blank";
        const _44_39_ = document.getElementById("44-39"); _44_39_.className = "Blank";
        const _45_39_ = document.getElementById("45-39"); _45_39_.className = "Blank";
        const _50_39_ = document.getElementById("50-39"); _50_39_.className = "Blank";
        const _43_40_ = document.getElementById("43-40"); _43_40_.className = "Blank";
        const _41_41_ = document.getElementById("41-41"); _41_41_.className = "Blank";
        const _46_41_ = document.getElementById("46-41"); _46_41_.className = "Blank";
        const _46_44_ = document.getElementById("46-44"); _46_44_.className = "Blank";
        const _50_45_ = document.getElementById("50-45"); _50_45_.className = "Blank";
        const _55_48_ = document.getElementById("55-48"); _55_48_.className = "Blank";
    }

    //1990 Scorigami
    if (output.innerHTML == "1990") {
        const _73_18_ = document.getElementById("73-18"); _73_18_.className = "Scorigami";
        const _84_21_ = document.getElementById("84-21"); _84_21_.className = "Scorigami";
        const _55_23_ = document.getElementById("55-23"); _55_23_.className = "Scorigami";
        const _58_31_ = document.getElementById("58-31"); _58_31_.className = "Scorigami";
        const _56_32_ = document.getElementById("56-32"); _56_32_.className = "Scorigami";
        const _55_33_ = document.getElementById("55-33"); _55_33_.className = "Scorigami";
        const _62_34_ = document.getElementById("62-34"); _62_34_.className = "Scorigami";
        const _50_36_ = document.getElementById("50-36"); _50_36_.className = "Scorigami";
        const _67_37_ = document.getElementById("67-37"); _67_37_.className = "Scorigami";
        const _49_44_ = document.getElementById("49-44"); _49_44_.className = "Scorigami";
        const _51_45_ = document.getElementById("51-45"); _51_45_.className = "Scorigami";
        const _62_45_ = document.getElementById("62-45"); _62_45_.className = "Scorigami";
        const _52_51_ = document.getElementById("52-51"); _52_51_.className = "Scorigami";
    }
    if (output.innerHTML > "1990") {
        const _73_18_ = document.getElementById("73-18"); _73_18_.className = "PastScorigami";
        const _84_21_ = document.getElementById("84-21"); _84_21_.className = "PastScorigami";
        const _55_23_ = document.getElementById("55-23"); _55_23_.className = "PastScorigami";
        const _58_31_ = document.getElementById("58-31"); _58_31_.className = "PastScorigami";
        const _56_32_ = document.getElementById("56-32"); _56_32_.className = "PastScorigami";
        const _55_33_ = document.getElementById("55-33"); _55_33_.className = "PastScorigami";
        const _62_34_ = document.getElementById("62-34"); _62_34_.className = "PastScorigami";
        const _50_36_ = document.getElementById("50-36"); _50_36_.className = "PastScorigami";
        const _67_37_ = document.getElementById("67-37"); _67_37_.className = "PastScorigami";
        const _49_44_ = document.getElementById("49-44"); _49_44_.className = "PastScorigami";
        const _51_45_ = document.getElementById("51-45"); _51_45_.className = "PastScorigami";
        const _62_45_ = document.getElementById("62-45"); _62_45_.className = "PastScorigami";
        const _52_51_ = document.getElementById("52-51"); _52_51_.className = "PastScorigami";
    }
    if (output.innerHTML < "1990") {
        const _73_18_ = document.getElementById("73-18"); _73_18_.className = "Blank";
        const _84_21_ = document.getElementById("84-21"); _84_21_.className = "Blank";
        const _55_23_ = document.getElementById("55-23"); _55_23_.className = "Blank";
        const _58_31_ = document.getElementById("58-31"); _58_31_.className = "Blank";
        const _56_32_ = document.getElementById("56-32"); _56_32_.className = "Blank";
        const _55_33_ = document.getElementById("55-33"); _55_33_.className = "Blank";
        const _62_34_ = document.getElementById("62-34"); _62_34_.className = "Blank";
        const _50_36_ = document.getElementById("50-36"); _50_36_.className = "Blank";
        const _67_37_ = document.getElementById("67-37"); _67_37_.className = "Blank";
        const _49_44_ = document.getElementById("49-44"); _49_44_.className = "Blank";
        const _51_45_ = document.getElementById("51-45"); _51_45_.className = "Blank";
        const _62_45_ = document.getElementById("62-45"); _62_45_.className = "Blank";
        const _52_51_ = document.getElementById("52-51"); _52_51_.className = "Blank";
    }

    //1991 Scorigami
    if (output.innerHTML == "1991") {
        const _71_14_ = document.getElementById("71-14"); _71_14_.className = "Scorigami";
        const _94_17_ = document.getElementById("94-17"); _94_17_.className = "Scorigami";
        const _59_23_ = document.getElementById("59-23"); _59_23_.className = "Scorigami";
        const _43_24_ = document.getElementById("43-24"); _43_24_.className = "Scorigami";
        const _86_24_ = document.getElementById("86-24"); _86_24_.className = "Scorigami";
        const _47_25_ = document.getElementById("47-25"); _47_25_.className = "Scorigami";
        const _52_30_ = document.getElementById("52-30"); _52_30_.className = "Scorigami";
        const _51_31_ = document.getElementById("51-31"); _51_31_.className = "Scorigami";
        const _37_36_ = document.getElementById("37-36"); _37_36_.className = "Scorigami";
        const _59_36_ = document.getElementById("59-36"); _59_36_.className = "Scorigami";
        const _45_40_ = document.getElementById("45-40"); _45_40_.className = "Scorigami";
        const _48_42_ = document.getElementById("48-42"); _48_42_.className = "Scorigami";
        const _57_42_ = document.getElementById("57-42"); _57_42_.className = "Scorigami";
        const _49_45_ = document.getElementById("49-45"); _49_45_.className = "Scorigami";
        const _52_46_ = document.getElementById("52-46"); _52_46_.className = "Scorigami";
        const _64_47_ = document.getElementById("64-47"); _64_47_.className = "Scorigami";
        const _52_52_ = document.getElementById("52-52"); _52_52_.className = "Scorigami";
    }
    if (output.innerHTML > "1991") {
        const _71_14_ = document.getElementById("71-14"); _71_14_.className = "PastScorigami";
        const _94_17_ = document.getElementById("94-17"); _94_17_.className = "PastScorigami";
        const _59_23_ = document.getElementById("59-23"); _59_23_.className = "PastScorigami";
        const _43_24_ = document.getElementById("43-24"); _43_24_.className = "PastScorigami";
        const _86_24_ = document.getElementById("86-24"); _86_24_.className = "PastScorigami";
        const _47_25_ = document.getElementById("47-25"); _47_25_.className = "PastScorigami";
        const _52_30_ = document.getElementById("52-30"); _52_30_.className = "PastScorigami";
        const _51_31_ = document.getElementById("51-31"); _51_31_.className = "PastScorigami";
        const _37_36_ = document.getElementById("37-36"); _37_36_.className = "PastScorigami";
        const _59_36_ = document.getElementById("59-36"); _59_36_.className = "PastScorigami";
        const _45_40_ = document.getElementById("45-40"); _45_40_.className = "PastScorigami";
        const _48_42_ = document.getElementById("48-42"); _48_42_.className = "PastScorigami";
        const _57_42_ = document.getElementById("57-42"); _57_42_.className = "PastScorigami";
        const _49_45_ = document.getElementById("49-45"); _49_45_.className = "PastScorigami";
        const _52_46_ = document.getElementById("52-46"); _52_46_.className = "PastScorigami";
        const _64_47_ = document.getElementById("64-47"); _64_47_.className = "PastScorigami";
        const _52_52_ = document.getElementById("52-52"); _52_52_.className = "PastScorigami";
    }
    if (output.innerHTML < "1991") {
        const _71_14_ = document.getElementById("71-14"); _71_14_.className = "Blank";
        const _94_17_ = document.getElementById("94-17"); _94_17_.className = "Blank";
        const _59_23_ = document.getElementById("59-23"); _59_23_.className = "Blank";
        const _43_24_ = document.getElementById("43-24"); _43_24_.className = "Blank";
        const _86_24_ = document.getElementById("86-24"); _86_24_.className = "Blank";
        const _47_25_ = document.getElementById("47-25"); _47_25_.className = "Blank";
        const _52_30_ = document.getElementById("52-30"); _52_30_.className = "Blank";
        const _51_31_ = document.getElementById("51-31"); _51_31_.className = "Blank";
        const _37_36_ = document.getElementById("37-36"); _37_36_.className = "Blank";
        const _59_36_ = document.getElementById("59-36"); _59_36_.className = "Blank";
        const _45_40_ = document.getElementById("45-40"); _45_40_.className = "Blank";
        const _48_42_ = document.getElementById("48-42"); _48_42_.className = "Blank";
        const _57_42_ = document.getElementById("57-42"); _57_42_.className = "Blank";
        const _49_45_ = document.getElementById("49-45"); _49_45_.className = "Blank";
        const _52_46_ = document.getElementById("52-46"); _52_46_.className = "Blank";
        const _64_47_ = document.getElementById("64-47"); _64_47_.className = "Blank";
        const _52_52_ = document.getElementById("52-52"); _52_52_.className = "Blank";
    }

    //1992 Scorigami
    if (output.innerHTML == "1992") {
        const _57_17_ = document.getElementById("57-17"); _57_17_.className = "Scorigami";
        const _53_23_ = document.getElementById("53-23"); _53_23_.className = "Scorigami";
        const _44_33_ = document.getElementById("44-33"); _44_33_.className = "Scorigami";
        const _61_34_ = document.getElementById("61-34"); _61_34_.className = "Scorigami";
        const _46_36_ = document.getElementById("46-36"); _46_36_.className = "Scorigami";
        const _49_46_ = document.getElementById("49-46"); _49_46_.className = "Scorigami";
        const _48_47_ = document.getElementById("48-47"); _48_47_.className = "Scorigami";
        const _50_49_ = document.getElementById("50-49"); _50_49_.className = "Scorigami";
    }
    if (output.innerHTML > "1992") {
        const _57_17_ = document.getElementById("57-17"); _57_17_.className = "PastScorigami";
        const _53_23_ = document.getElementById("53-23"); _53_23_.className = "PastScorigami";
        const _44_33_ = document.getElementById("44-33"); _44_33_.className = "PastScorigami";
        const _61_34_ = document.getElementById("61-34"); _61_34_.className = "PastScorigami";
        const _46_36_ = document.getElementById("46-36"); _46_36_.className = "PastScorigami";
        const _49_46_ = document.getElementById("49-46"); _49_46_.className = "PastScorigami";
        const _48_47_ = document.getElementById("48-47"); _48_47_.className = "PastScorigami";
        const _50_49_ = document.getElementById("50-49"); _50_49_.className = "PastScorigami";
    }
    if (output.innerHTML < "1992") {
        const _57_17_ = document.getElementById("57-17"); _57_17_.className = "Blank";
        const _53_23_ = document.getElementById("53-23"); _53_23_.className = "Blank";
        const _44_33_ = document.getElementById("44-33"); _44_33_.className = "Blank";
        const _61_34_ = document.getElementById("61-34"); _61_34_.className = "Blank";
        const _46_36_ = document.getElementById("46-36"); _46_36_.className = "Blank";
        const _49_46_ = document.getElementById("49-46"); _49_46_.className = "Blank";
        const _48_47_ = document.getElementById("48-47"); _48_47_.className = "Blank";
        const _50_49_ = document.getElementById("50-49"); _50_49_.className = "Blank";
    }

    //1993 Scorigami
    if (output.innerHTML == "1993") {
        const _68_14_ = document.getElementById("68-14"); _68_14_.className = "Scorigami";
        const _58_22_ = document.getElementById("58-22"); _58_22_.className = "Scorigami";
        const _46_23_ = document.getElementById("46-23"); _46_23_.className = "Scorigami";
        const _54_24_ = document.getElementById("54-24"); _54_24_.className = "Scorigami";
        const _50_27_ = document.getElementById("50-27"); _50_27_.className = "Scorigami";
        const _43_29_ = document.getElementById("43-29"); _43_29_.className = "Scorigami";
        const _30_30_ = document.getElementById("30-30"); _30_30_.className = "Scorigami";
        const _63_37_ = document.getElementById("63-37"); _63_37_.className = "Scorigami";
        const _43_38_ = document.getElementById("43-38"); _43_38_.className = "Scorigami";
        const _55_38_ = document.getElementById("55-38"); _55_38_.className = "Scorigami";
        const _52_40_ = document.getElementById("52-40"); _52_40_.className = "Scorigami";
        const _46_42_ = document.getElementById("46-42"); _46_42_.className = "Scorigami";
        const _59_42_ = document.getElementById("59-42"); _59_42_.className = "Scorigami";
        const _48_44_ = document.getElementById("48-44"); _48_44_.className = "Scorigami";
        const _58_56_ = document.getElementById("58-56"); _58_56_.className = "Scorigami";
        const _59_56_ = document.getElementById("59-56"); _59_56_.className = "Scorigami";
    }
    if (output.innerHTML > "1993") {
        const _68_14_ = document.getElementById("68-14"); _68_14_.className = "PastScorigami";
        const _58_22_ = document.getElementById("58-22"); _58_22_.className = "PastScorigami";
        const _46_23_ = document.getElementById("46-23"); _46_23_.className = "PastScorigami";
        const _54_24_ = document.getElementById("54-24"); _54_24_.className = "PastScorigami";
        const _50_27_ = document.getElementById("50-27"); _50_27_.className = "PastScorigami";
        const _43_29_ = document.getElementById("43-29"); _43_29_.className = "PastScorigami";
        const _30_30_ = document.getElementById("30-30"); _30_30_.className = "PastScorigami";
        const _63_37_ = document.getElementById("63-37"); _63_37_.className = "PastScorigami";
        const _43_38_ = document.getElementById("43-38"); _43_38_.className = "PastScorigami";
        const _55_38_ = document.getElementById("55-38"); _55_38_.className = "PastScorigami";
        const _52_40_ = document.getElementById("52-40"); _52_40_.className = "PastScorigami";
        const _46_42_ = document.getElementById("46-42"); _46_42_.className = "PastScorigami";
        const _59_42_ = document.getElementById("59-42"); _59_42_.className = "PastScorigami";
        const _48_44_ = document.getElementById("48-44"); _48_44_.className = "PastScorigami";
        const _58_56_ = document.getElementById("58-56"); _58_56_.className = "PastScorigami";
        const _59_56_ = document.getElementById("59-56"); _59_56_.className = "PastScorigami";
    }
    if (output.innerHTML < "1993") {
        const _68_14_ = document.getElementById("68-14"); _68_14_.className = "Blank";
        const _58_22_ = document.getElementById("58-22"); _58_22_.className = "Blank";
        const _46_23_ = document.getElementById("46-23"); _46_23_.className = "Blank";
        const _54_24_ = document.getElementById("54-24"); _54_24_.className = "Blank";
        const _50_27_ = document.getElementById("50-27"); _50_27_.className = "Blank";
        const _43_29_ = document.getElementById("43-29"); _43_29_.className = "Blank";
        const _30_30_ = document.getElementById("30-30"); _30_30_.className = "Blank";
        const _63_37_ = document.getElementById("63-37"); _63_37_.className = "Blank";
        const _43_38_ = document.getElementById("43-38"); _43_38_.className = "Blank";
        const _55_38_ = document.getElementById("55-38"); _55_38_.className = "Blank";
        const _52_40_ = document.getElementById("52-40"); _52_40_.className = "Blank";
        const _46_42_ = document.getElementById("46-42"); _46_42_.className = "Blank";
        const _59_42_ = document.getElementById("59-42"); _59_42_.className = "Blank";
        const _48_44_ = document.getElementById("48-44"); _48_44_.className = "Blank";
        const _58_56_ = document.getElementById("58-56"); _58_56_.className = "Blank";
        const _59_56_ = document.getElementById("59-56"); _59_56_.className = "Blank";
    }

    //1994 Scorigami
    if (output.innerHTML == "1994") {
        const _58_16_ = document.getElementById("58-16"); _58_16_.className = "Scorigami";
        const _58_21_ = document.getElementById("58-21"); _58_21_.className = "Scorigami";
        const _44_29_ = document.getElementById("44-29"); _44_29_.className = "Scorigami";
        const _47_29_ = document.getElementById("47-29"); _47_29_.className = "Scorigami";
        const _59_29_ = document.getElementById("59-29"); _59_29_.className = "Scorigami";
        const _32_32_ = document.getElementById("32-32"); _32_32_.className = "Scorigami";
        const _62_37_ = document.getElementById("62-37"); _62_37_.className = "Scorigami";
        const _47_41_ = document.getElementById("47-41"); _47_41_.className = "Scorigami";
        const _44_42_ = document.getElementById("44-42"); _44_42_.className = "Scorigami";
        const _49_47_ = document.getElementById("49-47"); _49_47_.className = "Scorigami";
    }
    if (output.innerHTML > "1994") {
        const _58_16_ = document.getElementById("58-16"); _58_16_.className = "PastScorigami";
        const _58_21_ = document.getElementById("58-21"); _58_21_.className = "PastScorigami";
        const _44_29_ = document.getElementById("44-29"); _44_29_.className = "PastScorigami";
        const _47_29_ = document.getElementById("47-29"); _47_29_.className = "PastScorigami";
        const _59_29_ = document.getElementById("59-29"); _59_29_.className = "PastScorigami";
        const _32_32_ = document.getElementById("32-32"); _32_32_.className = "PastScorigami";
        const _62_37_ = document.getElementById("62-37"); _62_37_.className = "PastScorigami";
        const _47_41_ = document.getElementById("47-41"); _47_41_.className = "PastScorigami";
        const _44_42_ = document.getElementById("44-42"); _44_42_.className = "PastScorigami";
        const _49_47_ = document.getElementById("49-47"); _49_47_.className = "PastScorigami";
    }
    if (output.innerHTML < "1994") {
        const _58_16_ = document.getElementById("58-16"); _58_16_.className = "Blank";
        const _58_21_ = document.getElementById("58-21"); _58_21_.className = "Blank";
        const _44_29_ = document.getElementById("44-29"); _44_29_.className = "Blank";
        const _47_29_ = document.getElementById("47-29"); _47_29_.className = "Blank";
        const _59_29_ = document.getElementById("59-29"); _59_29_.className = "Blank";
        const _32_32_ = document.getElementById("32-32"); _32_32_.className = "Blank";
        const _62_37_ = document.getElementById("62-37"); _62_37_.className = "Blank";
        const _47_41_ = document.getElementById("47-41"); _47_41_.className = "Blank";
        const _44_42_ = document.getElementById("44-42"); _44_42_.className = "Blank";
        const _49_47_ = document.getElementById("49-47"); _49_47_.className = "Blank";
    }

    //1995 Scorigami
    if (output.innerHTML == "1995") {
        const _77_17_ = document.getElementById("77-17"); _77_17_.className = "Scorigami";
        const _64_21_ = document.getElementById("64-21"); _64_21_.className = "Scorigami";
        const _39_23_ = document.getElementById("39-23"); _39_23_.className = "Scorigami";
        const _59_26_ = document.getElementById("59-26"); _59_26_.className = "Scorigami";
        const _70_26_ = document.getElementById("70-26"); _70_26_.className = "Scorigami";
        const _77_27_ = document.getElementById("77-27"); _77_27_.className = "Scorigami";
        const _77_28_ = document.getElementById("77-28"); _77_28_.className = "Scorigami";
        const _58_29_ = document.getElementById("58-29"); _58_29_.className = "Scorigami";
        const _57_30_ = document.getElementById("57-30"); _57_30_.className = "Scorigami";
        const _66_30_ = document.getElementById("66-30"); _66_30_.className = "Scorigami";
        const _55_32_ = document.getElementById("55-32"); _55_32_.className = "Scorigami";
        const _49_38_ = document.getElementById("49-38"); _49_38_.className = "Scorigami";
        const _65_39_ = document.getElementById("65-39"); _65_39_.className = "Scorigami";
        const _55_41_ = document.getElementById("55-41"); _55_41_.className = "Scorigami";
        const _56_46_ = document.getElementById("56-46"); _56_46_.className = "Scorigami";
    }
    if (output.innerHTML > "1995") {
        const _77_17_ = document.getElementById("77-17"); _77_17_.className = "PastScorigami";
        const _64_21_ = document.getElementById("64-21"); _64_21_.className = "PastScorigami";
        const _39_23_ = document.getElementById("39-23"); _39_23_.className = "PastScorigami";
        const _59_26_ = document.getElementById("59-26"); _59_26_.className = "PastScorigami";
        const _70_26_ = document.getElementById("70-26"); _70_26_.className = "PastScorigami";
        const _77_27_ = document.getElementById("77-27"); _77_27_.className = "PastScorigami";
        const _77_28_ = document.getElementById("77-28"); _77_28_.className = "PastScorigami";
        const _58_29_ = document.getElementById("58-29"); _58_29_.className = "PastScorigami";
        const _57_30_ = document.getElementById("57-30"); _57_30_.className = "PastScorigami";
        const _66_30_ = document.getElementById("66-30"); _66_30_.className = "PastScorigami";
        const _55_32_ = document.getElementById("55-32"); _55_32_.className = "PastScorigami";
        const _49_38_ = document.getElementById("49-38"); _49_38_.className = "PastScorigami";
        const _65_39_ = document.getElementById("65-39"); _65_39_.className = "PastScorigami";
        const _55_41_ = document.getElementById("55-41"); _55_41_.className = "PastScorigami";
        const _56_46_ = document.getElementById("56-46"); _56_46_.className = "PastScorigami";
    }
    if (output.innerHTML < "1995") {
        const _77_17_ = document.getElementById("77-17"); _77_17_.className = "Blank";
        const _64_21_ = document.getElementById("64-21"); _64_21_.className = "Blank";
        const _39_23_ = document.getElementById("39-23"); _39_23_.className = "Blank";
        const _59_26_ = document.getElementById("59-26"); _59_26_.className = "Blank";
        const _70_26_ = document.getElementById("70-26"); _70_26_.className = "Blank";
        const _77_27_ = document.getElementById("77-27"); _77_27_.className = "Blank";
        const _77_28_ = document.getElementById("77-28"); _77_28_.className = "Blank";
        const _58_29_ = document.getElementById("58-29"); _58_29_.className = "Blank";
        const _57_30_ = document.getElementById("57-30"); _57_30_.className = "Blank";
        const _66_30_ = document.getElementById("66-30"); _66_30_.className = "Blank";
        const _55_32_ = document.getElementById("55-32"); _55_32_.className = "Blank";
        const _49_38_ = document.getElementById("49-38"); _49_38_.className = "Blank";
        const _65_39_ = document.getElementById("65-39"); _65_39_.className = "Blank";
        const _55_41_ = document.getElementById("55-41"); _55_41_.className = "Blank";
        const _56_46_ = document.getElementById("56-46"); _56_46_.className = "Blank";
    }

    //1996 Scorigami
    if (output.innerHTML == "1996") {
        const _56_8_ = document.getElementById("56-8"); _56_8_.className = "Scorigami";
        const _58_9_ = document.getElementById("58-9"); _58_9_.className = "Scorigami";
        const _54_17_ = document.getElementById("54-17"); _54_17_.className = "Scorigami";
        const _65_17_ = document.getElementById("65-17"); _65_17_.className = "Scorigami";
        const _64_19_ = document.getElementById("64-19"); _64_19_.className = "Scorigami";
        const _73_21_ = document.getElementById("73-21"); _73_21_.className = "Scorigami";
        const _57_26_ = document.getElementById("57-26"); _57_26_.className = "Scorigami";
        const _64_27_ = document.getElementById("64-27"); _64_27_.className = "Scorigami";
        const _76_27_ = document.getElementById("76-27"); _76_27_.className = "Scorigami";
        const _66_28_ = document.getElementById("66-28"); _66_28_.className = "Scorigami";
        const _67_28_ = document.getElementById("67-28"); _67_28_.className = "Scorigami";
        const _50_29_ = document.getElementById("50-29"); _50_29_.className = "Scorigami";
        const _46_43_ = document.getElementById("46-43"); _46_43_.className = "Scorigami";
        const _55_45_ = document.getElementById("55-45"); _55_45_.className = "Scorigami";
        const _53_52_ = document.getElementById("53-52"); _53_52_.className = "Scorigami";
        const _56_55_ = document.getElementById("56-55"); _56_55_.className = "Scorigami";
        const _38_38_ = document.getElementById("38-38"); _38_38_.className = "NowImpossible";
        const _40_40_ = document.getElementById("40-40"); _40_40_.className = "NowImpossible";
        const _42_42_ = document.getElementById("42-42"); _42_42_.className = "NowImpossible";
        const _44_44_ = document.getElementById("44-44"); _44_44_.className = "NowImpossible";
        const _45_45_ = document.getElementById("45-45"); _45_45_.className = "NowImpossible";
        const _46_46_ = document.getElementById("46-46"); _46_46_.className = "NowImpossible";
        const _47_47_ = document.getElementById("47-47"); _47_47_.className = "NowImpossible";
        const _49_49_ = document.getElementById("49-49"); _49_49_.className = "NowImpossible";
        const _50_50_ = document.getElementById("50-50"); _50_50_.className = "NowImpossible";
        const _51_51_ = document.getElementById("51-51"); _51_51_.className = "NowImpossible";
        const _53_53_ = document.getElementById("53-53"); _53_53_.className = "NowImpossible";
        const _54_54_ = document.getElementById("54-54"); _54_54_.className = "NowImpossible";
        const _55_55_ = document.getElementById("55-55"); _55_55_.className = "NowImpossible";
        const _56_56_ = document.getElementById("56-56"); _56_56_.className = "NowImpossible";
        const _57_57_ = document.getElementById("57-57"); _57_57_.className = "NowImpossible";
        const _58_58_ = document.getElementById("58-58"); _58_58_.className = "NowImpossible";
        const _59_59_ = document.getElementById("59-59"); _59_59_.className = "NowImpossible";
        const _60_60_ = document.getElementById("60-60"); _60_60_.className = "NowImpossible";
        const _61_61_ = document.getElementById("61-61"); _61_61_.className = "NowImpossible";
        const _62_62_ = document.getElementById("62-62"); _62_62_.className = "NowImpossible";
        const _63_63_ = document.getElementById("63-63"); _63_63_.className = "NowImpossible";
        const _64_64_ = document.getElementById("64-64"); _64_64_.className = "NowImpossible";
        const _65_65_ = document.getElementById("65-65"); _65_65_.className = "NowImpossible";
        const _66_66_ = document.getElementById("66-66"); _66_66_.className = "NowImpossible";
        const _67_67_ = document.getElementById("67-67"); _67_67_.className = "NowImpossible";
        const _68_68_ = document.getElementById("68-68"); _68_68_.className = "NowImpossible";
        const _69_69_ = document.getElementById("69-69"); _69_69_.className = "NowImpossible";
        const _70_70_ = document.getElementById("70-70"); _70_70_.className = "NowImpossible";
        const _71_71_ = document.getElementById("71-71"); _71_71_.className = "NowImpossible";
        const _72_72_ = document.getElementById("72-72"); _72_72_.className = "NowImpossible";
    }
    if (output.innerHTML > "1996") {
        const _56_8_ = document.getElementById("56-8"); _56_8_.className = "PastScorigami";
        const _58_9_ = document.getElementById("58-9"); _58_9_.className = "PastScorigami";
        const _54_17_ = document.getElementById("54-17"); _54_17_.className = "PastScorigami";
        const _65_17_ = document.getElementById("65-17"); _65_17_.className = "PastScorigami";
        const _64_19_ = document.getElementById("64-19"); _64_19_.className = "PastScorigami";
        const _73_21_ = document.getElementById("73-21"); _73_21_.className = "PastScorigami";
        const _57_26_ = document.getElementById("57-26"); _57_26_.className = "PastScorigami";
        const _64_27_ = document.getElementById("64-27"); _64_27_.className = "PastScorigami";
        const _76_27_ = document.getElementById("76-27"); _76_27_.className = "PastScorigami";
        const _66_28_ = document.getElementById("66-28"); _66_28_.className = "PastScorigami";
        const _67_28_ = document.getElementById("67-28"); _67_28_.className = "PastScorigami";
        const _50_29_ = document.getElementById("50-29"); _50_29_.className = "PastScorigami";
        const _46_43_ = document.getElementById("46-43"); _46_43_.className = "PastScorigami";
        const _55_45_ = document.getElementById("55-45"); _55_45_.className = "PastScorigami";
        const _53_52_ = document.getElementById("53-52"); _53_52_.className = "PastScorigami";
        const _56_55_ = document.getElementById("56-55"); _56_55_.className = "PastScorigami";
        const _38_38_ = document.getElementById("38-38"); _38_38_.className = "NowImpossible";
        const _40_40_ = document.getElementById("40-40"); _40_40_.className = "NowImpossible";
        const _42_42_ = document.getElementById("42-42"); _42_42_.className = "NowImpossible";
        const _44_44_ = document.getElementById("44-44"); _44_44_.className = "NowImpossible";
        const _45_45_ = document.getElementById("45-45"); _45_45_.className = "NowImpossible";
        const _46_46_ = document.getElementById("46-46"); _46_46_.className = "NowImpossible";
        const _47_47_ = document.getElementById("47-47"); _47_47_.className = "NowImpossible";
        const _49_49_ = document.getElementById("49-49"); _49_49_.className = "NowImpossible";
        const _50_50_ = document.getElementById("50-50"); _50_50_.className = "NowImpossible";
        const _51_51_ = document.getElementById("51-51"); _51_51_.className = "NowImpossible";
        const _53_53_ = document.getElementById("53-53"); _53_53_.className = "NowImpossible";
        const _54_54_ = document.getElementById("54-54"); _54_54_.className = "NowImpossible";
        const _55_55_ = document.getElementById("55-55"); _55_55_.className = "NowImpossible";
        const _56_56_ = document.getElementById("56-56"); _56_56_.className = "NowImpossible";
        const _57_57_ = document.getElementById("57-57"); _57_57_.className = "NowImpossible";
        const _58_58_ = document.getElementById("58-58"); _58_58_.className = "NowImpossible";
        const _59_59_ = document.getElementById("59-59"); _59_59_.className = "NowImpossible";
        const _60_60_ = document.getElementById("60-60"); _60_60_.className = "NowImpossible";
        const _61_61_ = document.getElementById("61-61"); _61_61_.className = "NowImpossible";
        const _62_62_ = document.getElementById("62-62"); _62_62_.className = "NowImpossible";
        const _63_63_ = document.getElementById("63-63"); _63_63_.className = "NowImpossible";
        const _64_64_ = document.getElementById("64-64"); _64_64_.className = "NowImpossible";
        const _65_65_ = document.getElementById("65-65"); _65_65_.className = "NowImpossible";
        const _66_66_ = document.getElementById("66-66"); _66_66_.className = "NowImpossible";
        const _67_67_ = document.getElementById("67-67"); _67_67_.className = "NowImpossible";
        const _68_68_ = document.getElementById("68-68"); _68_68_.className = "NowImpossible";
        const _69_69_ = document.getElementById("69-69"); _69_69_.className = "NowImpossible";
        const _70_70_ = document.getElementById("70-70"); _70_70_.className = "NowImpossible";
        const _71_71_ = document.getElementById("71-71"); _71_71_.className = "NowImpossible";
        const _72_72_ = document.getElementById("72-72"); _72_72_.className = "NowImpossible";
    }
    if (output.innerHTML < "1996") {
        const _56_8_ = document.getElementById("56-8"); _56_8_.className = "Blank";
        const _58_9_ = document.getElementById("58-9"); _58_9_.className = "Blank";
        const _54_17_ = document.getElementById("54-17"); _54_17_.className = "Blank";
        const _65_17_ = document.getElementById("65-17"); _65_17_.className = "Blank";
        const _64_19_ = document.getElementById("64-19"); _64_19_.className = "Blank";
        const _73_21_ = document.getElementById("73-21"); _73_21_.className = "Blank";
        const _57_26_ = document.getElementById("57-26"); _57_26_.className = "Blank";
        const _64_27_ = document.getElementById("64-27"); _64_27_.className = "Blank";
        const _76_27_ = document.getElementById("76-27"); _76_27_.className = "Blank";
        const _66_28_ = document.getElementById("66-28"); _66_28_.className = "Blank";
        const _67_28_ = document.getElementById("67-28"); _67_28_.className = "Blank";
        const _50_29_ = document.getElementById("50-29"); _50_29_.className = "Blank";
        const _46_43_ = document.getElementById("46-43"); _46_43_.className = "Blank";
        const _55_45_ = document.getElementById("55-45"); _55_45_.className = "Blank";
        const _53_52_ = document.getElementById("53-52"); _53_52_.className = "Blank";
        const _56_55_ = document.getElementById("56-55"); _56_55_.className = "Blank";
        const _38_38_ = document.getElementById("38-38"); _38_38_.className = "Blank";
        const _40_40_ = document.getElementById("40-40"); _40_40_.className = "Blank";
        const _42_42_ = document.getElementById("42-42"); _42_42_.className = "Blank";
        const _44_44_ = document.getElementById("44-44"); _44_44_.className = "Blank";
        const _45_45_ = document.getElementById("45-45"); _45_45_.className = "Blank";
        const _46_46_ = document.getElementById("46-46"); _46_46_.className = "Blank";
        const _47_47_ = document.getElementById("47-47"); _47_47_.className = "Blank";
        const _49_49_ = document.getElementById("49-49"); _49_49_.className = "Blank";
        const _50_50_ = document.getElementById("50-50"); _50_50_.className = "Blank";
        const _51_51_ = document.getElementById("51-51"); _51_51_.className = "Blank";
        const _53_53_ = document.getElementById("53-53"); _53_53_.className = "Blank";
        const _54_54_ = document.getElementById("54-54"); _54_54_.className = "Blank";
        const _55_55_ = document.getElementById("55-55"); _55_55_.className = "Blank";
        const _56_56_ = document.getElementById("56-56"); _56_56_.className = "Blank";
        const _57_57_ = document.getElementById("57-57"); _57_57_.className = "Blank";
        const _58_58_ = document.getElementById("58-58"); _58_58_.className = "Blank";
        const _59_59_ = document.getElementById("59-59"); _59_59_.className = "Blank";
        const _60_60_ = document.getElementById("60-60"); _60_60_.className = "Blank";
        const _61_61_ = document.getElementById("61-61"); _61_61_.className = "Blank";
        const _62_62_ = document.getElementById("62-62"); _62_62_.className = "Blank";
        const _63_63_ = document.getElementById("63-63"); _63_63_.className = "Blank";
        const _64_64_ = document.getElementById("64-64"); _64_64_.className = "Blank";
        const _65_65_ = document.getElementById("65-65"); _65_65_.className = "Blank";
        const _66_66_ = document.getElementById("66-66"); _66_66_.className = "Blank";
        const _67_67_ = document.getElementById("67-67"); _67_67_.className = "Blank";
        const _68_68_ = document.getElementById("68-68"); _68_68_.className = "Blank";
        const _69_69_ = document.getElementById("69-69"); _69_69_.className = "Blank";
        const _70_70_ = document.getElementById("70-70"); _70_70_.className = "Blank";
        const _71_71_ = document.getElementById("71-71"); _71_71_.className = "Blank";
        const _72_72_ = document.getElementById("72-72"); _72_72_.className = "Blank";
    }

    //1997 Scorigami
    if (output.innerHTML == "1997") {
        const _54_15_ = document.getElementById("54-15"); _54_15_.className = "Scorigami";
        const _63_23_ = document.getElementById("63-23"); _63_23_.className = "Scorigami";
        const _61_24_ = document.getElementById("61-24"); _61_24_.className = "Scorigami";
        const _62_26_ = document.getElementById("62-26"); _62_26_.className = "Scorigami";
        const _51_27_ = document.getElementById("51-27"); _51_27_.className = "Scorigami";
        const _58_28_ = document.getElementById("58-28"); _58_28_.className = "Scorigami";
        const _62_29_ = document.getElementById("62-29"); _62_29_.className = "Scorigami";
        const _64_33_ = document.getElementById("64-33"); _64_33_.className = "Scorigami";
        const _60_37_ = document.getElementById("60-37"); _60_37_.className = "Scorigami";
        const _49_39_ = document.getElementById("49-39"); _49_39_.className = "Scorigami";
        const _59_43_ = document.getElementById("59-43"); _59_43_.className = "Scorigami";
        const _51_48_ = document.getElementById("51-48"); _51_48_.className = "Scorigami";
        const _51_50_ = document.getElementById("51-50"); _51_50_.className = "Scorigami";
    }
    if (output.innerHTML > "1997") {
        const _54_15_ = document.getElementById("54-15"); _54_15_.className = "PastScorigami";
        const _63_23_ = document.getElementById("63-23"); _63_23_.className = "PastScorigami";
        const _61_24_ = document.getElementById("61-24"); _61_24_.className = "PastScorigami";
        const _62_26_ = document.getElementById("62-26"); _62_26_.className = "PastScorigami";
        const _51_27_ = document.getElementById("51-27"); _51_27_.className = "PastScorigami";
        const _58_28_ = document.getElementById("58-28"); _58_28_.className = "PastScorigami";
        const _62_29_ = document.getElementById("62-29"); _62_29_.className = "PastScorigami";
        const _64_33_ = document.getElementById("64-33"); _64_33_.className = "PastScorigami";
        const _60_37_ = document.getElementById("60-37"); _60_37_.className = "PastScorigami";
        const _49_39_ = document.getElementById("49-39"); _49_39_.className = "PastScorigami";
        const _59_43_ = document.getElementById("59-43"); _59_43_.className = "PastScorigami";
        const _51_48_ = document.getElementById("51-48"); _51_48_.className = "PastScorigami";
        const _51_50_ = document.getElementById("51-50"); _51_50_.className = "PastScorigami";
    }
    if (output.innerHTML < "1997") {
        const _54_15_ = document.getElementById("54-15"); _54_15_.className = "Blank";
        const _63_23_ = document.getElementById("63-23"); _63_23_.className = "Blank";
        const _61_24_ = document.getElementById("61-24"); _61_24_.className = "Blank";
        const _62_26_ = document.getElementById("62-26"); _62_26_.className = "Blank";
        const _51_27_ = document.getElementById("51-27"); _51_27_.className = "Blank";
        const _58_28_ = document.getElementById("58-28"); _58_28_.className = "Blank";
        const _62_29_ = document.getElementById("62-29"); _62_29_.className = "Blank";
        const _64_33_ = document.getElementById("64-33"); _64_33_.className = "Blank";
        const _60_37_ = document.getElementById("60-37"); _60_37_.className = "Blank";
        const _49_39_ = document.getElementById("49-39"); _49_39_.className = "Blank";
        const _59_43_ = document.getElementById("59-43"); _59_43_.className = "Blank";
        const _51_48_ = document.getElementById("51-48"); _51_48_.className = "Blank";
        const _51_50_ = document.getElementById("51-50"); _51_50_.className = "Blank";
    }

    //1998 Scorigami
    if (output.innerHTML == "1998") {
        const _62_19_ = document.getElementById("62-19"); _62_19_.className = "Scorigami";
        const _72_20_ = document.getElementById("72-20"); _72_20_.className = "Scorigami";
        const _54_23_ = document.getElementById("54-23"); _54_23_.className = "Scorigami";
        const _58_23_ = document.getElementById("58-23"); _58_23_.className = "Scorigami";
        const _63_30_ = document.getElementById("63-30"); _63_30_.className = "Scorigami";
        const _64_30_ = document.getElementById("64-30"); _64_30_.className = "Scorigami";
        const _54_33_ = document.getElementById("54-33"); _54_33_.className = "Scorigami";
        const _66_36_ = document.getElementById("66-36"); _66_36_.className = "Scorigami";
        const _44_41_ = document.getElementById("44-41"); _44_41_.className = "Scorigami";
        const _44_43_ = document.getElementById("44-43"); _44_43_.className = "Scorigami";
        const _51_43_ = document.getElementById("51-43"); _51_43_.className = "Scorigami";
        const _63_45_ = document.getElementById("63-45"); _63_45_.className = "Scorigami";
        const _55_51_ = document.getElementById("55-51"); _55_51_.className = "Scorigami";
    }
    if (output.innerHTML > "1998") {
        const _62_19_ = document.getElementById("62-19"); _62_19_.className = "PastScorigami";
        const _72_20_ = document.getElementById("72-20"); _72_20_.className = "PastScorigami";
        const _54_23_ = document.getElementById("54-23"); _54_23_.className = "PastScorigami";
        const _58_23_ = document.getElementById("58-23"); _58_23_.className = "PastScorigami";
        const _63_30_ = document.getElementById("63-30"); _63_30_.className = "PastScorigami";
        const _64_30_ = document.getElementById("64-30"); _64_30_.className = "PastScorigami";
        const _54_33_ = document.getElementById("54-33"); _54_33_.className = "PastScorigami";
        const _66_36_ = document.getElementById("66-36"); _66_36_.className = "PastScorigami";
        const _44_41_ = document.getElementById("44-41"); _44_41_.className = "PastScorigami";
        const _44_43_ = document.getElementById("44-43"); _44_43_.className = "PastScorigami";
        const _51_43_ = document.getElementById("51-43"); _51_43_.className = "PastScorigami";
        const _63_45_ = document.getElementById("63-45"); _63_45_.className = "PastScorigami";
        const _55_51_ = document.getElementById("55-51"); _55_51_.className = "PastScorigami";
    }
    if (output.innerHTML < "1998") {
        const _62_19_ = document.getElementById("62-19"); _62_19_.className = "Blank";
        const _72_20_ = document.getElementById("72-20"); _72_20_.className = "Blank";
        const _54_23_ = document.getElementById("54-23"); _54_23_.className = "Blank";
        const _58_23_ = document.getElementById("58-23"); _58_23_.className = "Blank";
        const _63_30_ = document.getElementById("63-30"); _63_30_.className = "Blank";
        const _64_30_ = document.getElementById("64-30"); _64_30_.className = "Blank";
        const _54_33_ = document.getElementById("54-33"); _54_33_.className = "Blank";
        const _66_36_ = document.getElementById("66-36"); _66_36_.className = "Blank";
        const _44_41_ = document.getElementById("44-41"); _44_41_.className = "Blank";
        const _44_43_ = document.getElementById("44-43"); _44_43_.className = "Blank";
        const _51_43_ = document.getElementById("51-43"); _51_43_.className = "Blank";
        const _63_45_ = document.getElementById("63-45"); _63_45_.className = "Blank";
        const _55_51_ = document.getElementById("55-51"); _55_51_.className = "Blank";
    }

    //1999 Scorigami
    if (output.innerHTML == "1999") {
        const _50_9_ = document.getElementById("50-9"); _50_9_.className = "Scorigami";
        const _72_10_ = document.getElementById("72-10"); _72_10_.className = "Scorigami";
        const _62_16_ = document.getElementById("62-16"); _62_16_.className = "Scorigami";
        const _58_17_ = document.getElementById("58-17"); _58_17_.className = "Scorigami";
        const _55_26_ = document.getElementById("55-26"); _55_26_.className = "Scorigami";
        const _62_41_ = document.getElementById("62-41"); _62_41_.className = "Scorigami";
        const _59_52_ = document.getElementById("59-52"); _59_52_.className = "Scorigami";
    }
    if (output.innerHTML > "1999") {
        const _50_9_ = document.getElementById("50-9"); _50_9_.className = "PastScorigami";
        const _72_10_ = document.getElementById("72-10"); _72_10_.className = "PastScorigami";
        const _62_16_ = document.getElementById("62-16"); _62_16_.className = "PastScorigami";
        const _58_17_ = document.getElementById("58-17"); _58_17_.className = "PastScorigami";
        const _55_26_ = document.getElementById("55-26"); _55_26_.className = "PastScorigami";
        const _62_41_ = document.getElementById("62-41"); _62_41_.className = "PastScorigami";
        const _59_52_ = document.getElementById("59-52"); _59_52_.className = "PastScorigami";
    }
    if (output.innerHTML < "1999") {
        const _50_9_ = document.getElementById("50-9"); _50_9_.className = "Blank";
        const _72_10_ = document.getElementById("72-10"); _72_10_.className = "Blank";
        const _62_16_ = document.getElementById("62-16"); _62_16_.className = "Blank";
        const _58_17_ = document.getElementById("58-17"); _58_17_.className = "Blank";
        const _55_26_ = document.getElementById("55-26"); _55_26_.className = "Blank";
        const _62_41_ = document.getElementById("62-41"); _62_41_.className = "Blank";
        const _59_52_ = document.getElementById("59-52"); _59_52_.className = "Blank";
    }

    //2000 Scorigami
    if (output.innerHTML == "2000") {
        const _70_3_ = document.getElementById("70-3"); _70_3_.className = "Scorigami";
        const _62_9_ = document.getElementById("62-9"); _62_9_.className = "Scorigami";
        const _47_22_ = document.getElementById("47-22"); _47_22_.className = "Scorigami";
        const _61_23_ = document.getElementById("61-23"); _61_23_.className = "Scorigami";
        const _66_24_ = document.getElementById("66-24"); _66_24_.className = "Scorigami";
        const _53_28_ = document.getElementById("53-28"); _53_28_.className = "Scorigami";
        const _52_33_ = document.getElementById("52-33"); _52_33_.className = "Scorigami";
        const _46_38_ = document.getElementById("46-38"); _46_38_.className = "Scorigami";
        const _50_38_ = document.getElementById("50-38"); _50_38_.className = "Scorigami";
        const _66_38_ = document.getElementById("66-38"); _66_38_.className = "Scorigami";
        const _49_40_ = document.getElementById("49-40"); _49_40_.className = "Scorigami";
        const _53_47_ = document.getElementById("53-47"); _53_47_.className = "Scorigami";
        const _57_48_ = document.getElementById("57-48"); _57_48_.className = "Scorigami";
        const _54_51_ = document.getElementById("54-51"); _54_51_.className = "Scorigami";
    }
    if (output.innerHTML > "2000") {
        const _70_3_ = document.getElementById("70-3"); _70_3_.className = "PastScorigami";
        const _62_9_ = document.getElementById("62-9"); _62_9_.className = "PastScorigami";
        const _47_22_ = document.getElementById("47-22"); _47_22_.className = "PastScorigami";
        const _61_23_ = document.getElementById("61-23"); _61_23_.className = "PastScorigami";
        const _66_24_ = document.getElementById("66-24"); _66_24_.className = "PastScorigami";
        const _53_28_ = document.getElementById("53-28"); _53_28_.className = "PastScorigami";
        const _52_33_ = document.getElementById("52-33"); _52_33_.className = "PastScorigami";
        const _46_38_ = document.getElementById("46-38"); _46_38_.className = "PastScorigami";
        const _50_38_ = document.getElementById("50-38"); _50_38_.className = "PastScorigami";
        const _66_38_ = document.getElementById("66-38"); _66_38_.className = "PastScorigami";
        const _49_40_ = document.getElementById("49-40"); _49_40_.className = "PastScorigami";
        const _53_47_ = document.getElementById("53-47"); _53_47_.className = "PastScorigami";
        const _57_48_ = document.getElementById("57-48"); _57_48_.className = "PastScorigami";
        const _54_51_ = document.getElementById("54-51"); _54_51_.className = "PastScorigami";
    }
    if (output.innerHTML < "2000") {
        const _70_3_ = document.getElementById("70-3"); _70_3_.className = "Blank";
        const _62_9_ = document.getElementById("62-9"); _62_9_.className = "Blank";
        const _47_22_ = document.getElementById("47-22"); _47_22_.className = "Blank";
        const _61_23_ = document.getElementById("61-23"); _61_23_.className = "Blank";
        const _66_24_ = document.getElementById("66-24"); _66_24_.className = "Blank";
        const _53_28_ = document.getElementById("53-28"); _53_28_.className = "Blank";
        const _52_33_ = document.getElementById("52-33"); _52_33_.className = "Blank";
        const _46_38_ = document.getElementById("46-38"); _46_38_.className = "Blank";
        const _50_38_ = document.getElementById("50-38"); _50_38_.className = "Blank";
        const _66_38_ = document.getElementById("66-38"); _66_38_.className = "Blank";
        const _49_40_ = document.getElementById("49-40"); _49_40_.className = "Blank";
        const _53_47_ = document.getElementById("53-47"); _53_47_.className = "Blank";
        const _57_48_ = document.getElementById("57-48"); _57_48_.className = "Blank";
        const _54_51_ = document.getElementById("54-51"); _54_51_.className = "Blank";
    }

    //2001 Scorigami
    if (output.innerHTML == "2001") {
        const _53_3_ = document.getElementById("53-3"); _53_3_.className = "Scorigami";
        const _19_5_ = document.getElementById("19-5"); _19_5_.className = "Scorigami";
        const _71_13_ = document.getElementById("71-13"); _71_13_.className = "Scorigami";
        const _56_30_ = document.getElementById("56-30"); _56_30_.className = "Scorigami";
        const _59_32_ = document.getElementById("59-32"); _59_32_.className = "Scorigami";
        const _63_32_ = document.getElementById("63-32"); _63_32_.className = "Scorigami";
        const _50_33_ = document.getElementById("50-33"); _50_33_.className = "Scorigami";
        const _63_33_ = document.getElementById("63-33"); _63_33_.className = "Scorigami";
        const _54_34_ = document.getElementById("54-34"); _54_34_.className = "Scorigami";
        const _56_34_ = document.getElementById("56-34"); _56_34_.className = "Scorigami";
        const _70_35_ = document.getElementById("70-35"); _70_35_.className = "Scorigami";
        const _45_37_ = document.getElementById("45-37"); _45_37_.className = "Scorigami";
        const _51_37_ = document.getElementById("51-37"); _51_37_.className = "Scorigami";
        const _54_37_ = document.getElementById("54-37"); _54_37_.className = "Scorigami";
        const _68_37_ = document.getElementById("68-37"); _68_37_.className = "Scorigami";
        const _43_42_ = document.getElementById("43-42"); _43_42_.className = "Scorigami";
        const _56_43_ = document.getElementById("56-43"); _56_43_.className = "Scorigami";
        const _64_45_ = document.getElementById("64-45"); _64_45_.className = "Scorigami";
        const _72_45_ = document.getElementById("72-45"); _72_45_.className = "Scorigami";
        const _70_58_ = document.getElementById("70-58"); _70_58_.className = "Scorigami";
        const _64_61_ = document.getElementById("64-61"); _64_61_.className = "Scorigami";
        const _65_62_ = document.getElementById("65-62"); _65_62_.className = "Scorigami";
    }
    if (output.innerHTML > "2001") {
        const _53_3_ = document.getElementById("53-3"); _53_3_.className = "PastScorigami";
        const _19_5_ = document.getElementById("19-5"); _19_5_.className = "PastScorigami";
        const _71_13_ = document.getElementById("71-13"); _71_13_.className = "PastScorigami";
        const _56_30_ = document.getElementById("56-30"); _56_30_.className = "PastScorigami";
        const _59_32_ = document.getElementById("59-32"); _59_32_.className = "PastScorigami";
        const _63_32_ = document.getElementById("63-32"); _63_32_.className = "PastScorigami";
        const _50_33_ = document.getElementById("50-33"); _50_33_.className = "PastScorigami";
        const _63_33_ = document.getElementById("63-33"); _63_33_.className = "PastScorigami";
        const _54_34_ = document.getElementById("54-34"); _54_34_.className = "PastScorigami";
        const _56_34_ = document.getElementById("56-34"); _56_34_.className = "PastScorigami";
        const _70_35_ = document.getElementById("70-35"); _70_35_.className = "PastScorigami";
        const _45_37_ = document.getElementById("45-37"); _45_37_.className = "PastScorigami";
        const _51_37_ = document.getElementById("51-37"); _51_37_.className = "PastScorigami";
        const _54_37_ = document.getElementById("54-37"); _54_37_.className = "PastScorigami";
        const _68_37_ = document.getElementById("68-37"); _68_37_.className = "PastScorigami";
        const _43_42_ = document.getElementById("43-42"); _43_42_.className = "PastScorigami";
        const _56_43_ = document.getElementById("56-43"); _56_43_.className = "PastScorigami";
        const _64_45_ = document.getElementById("64-45"); _64_45_.className = "PastScorigami";
        const _72_45_ = document.getElementById("72-45"); _72_45_.className = "PastScorigami";
        const _70_58_ = document.getElementById("70-58"); _70_58_.className = "PastScorigami";
        const _64_61_ = document.getElementById("64-61"); _64_61_.className = "PastScorigami";
        const _65_62_ = document.getElementById("65-62"); _65_62_.className = "PastScorigami";
    }
    if (output.innerHTML < "2001") {
        const _53_3_ = document.getElementById("53-3"); _53_3_.className = "Blank";
        const _19_5_ = document.getElementById("19-5"); _19_5_.className = "Blank";
        const _71_13_ = document.getElementById("71-13"); _71_13_.className = "Blank";
        const _56_30_ = document.getElementById("56-30"); _56_30_.className = "Blank";
        const _59_32_ = document.getElementById("59-32"); _59_32_.className = "Blank";
        const _63_32_ = document.getElementById("63-32"); _63_32_.className = "Blank";
        const _50_33_ = document.getElementById("50-33"); _50_33_.className = "Blank";
        const _63_33_ = document.getElementById("63-33"); _63_33_.className = "Blank";
        const _54_34_ = document.getElementById("54-34"); _54_34_.className = "Blank";
        const _56_34_ = document.getElementById("56-34"); _56_34_.className = "Blank";
        const _70_35_ = document.getElementById("70-35"); _70_35_.className = "Blank";
        const _45_37_ = document.getElementById("45-37"); _45_37_.className = "Blank";
        const _51_37_ = document.getElementById("51-37"); _51_37_.className = "Blank";
        const _54_37_ = document.getElementById("54-37"); _54_37_.className = "Blank";
        const _68_37_ = document.getElementById("68-37"); _68_37_.className = "Blank";
        const _43_42_ = document.getElementById("43-42"); _43_42_.className = "Blank";
        const _56_43_ = document.getElementById("56-43"); _56_43_.className = "Blank";
        const _64_45_ = document.getElementById("64-45"); _64_45_.className = "Blank";
        const _72_45_ = document.getElementById("72-45"); _72_45_.className = "Blank";
        const _70_58_ = document.getElementById("70-58"); _70_58_.className = "Blank";
        const _64_61_ = document.getElementById("64-61"); _64_61_.className = "Blank";
        const _65_62_ = document.getElementById("65-62"); _65_62_.className = "Blank";
    }

    //2002 Scorigami
    if (output.innerHTML == "2002") {
        const _53_9_ = document.getElementById("53-9"); _53_9_.className = "Scorigami";
        const _62_11_ = document.getElementById("62-11"); _62_11_.className = "Scorigami";
        const _55_15_ = document.getElementById("55-15"); _55_15_.className = "Scorigami";
        const _65_19_ = document.getElementById("65-19"); _65_19_.className = "Scorigami";
        const _67_21_ = document.getElementById("67-21"); _67_21_.className = "Scorigami";
        const _72_21_ = document.getElementById("72-21"); _72_21_.className = "Scorigami";
        const _70_22_ = document.getElementById("70-22"); _70_22_.className = "Scorigami";
        const _58_24_ = document.getElementById("58-24"); _58_24_.className = "Scorigami";
        const _65_24_ = document.getElementById("65-24"); _65_24_.className = "Scorigami";
        const _41_29_ = document.getElementById("41-29"); _41_29_.className = "Scorigami";
        const _43_35_ = document.getElementById("43-35"); _43_35_.className = "Scorigami";
        const _44_36_ = document.getElementById("44-36"); _44_36_.className = "Scorigami";
        const _61_36_ = document.getElementById("61-36"); _61_36_.className = "Scorigami";
        const _52_38_ = document.getElementById("52-38"); _52_38_.className = "Scorigami";
        const _63_38_ = document.getElementById("63-38"); _63_38_.className = "Scorigami";
        const _52_41_ = document.getElementById("52-41"); _52_41_.className = "Scorigami";
        const _49_48_ = document.getElementById("49-48"); _49_48_.className = "Scorigami";
        const _54_48_ = document.getElementById("54-48"); _54_48_.className = "Scorigami";
    }
    if (output.innerHTML > "2002") {
        const _53_9_ = document.getElementById("53-9"); _53_9_.className = "PastScorigami";
        const _62_11_ = document.getElementById("62-11"); _62_11_.className = "PastScorigami";
        const _55_15_ = document.getElementById("55-15"); _55_15_.className = "PastScorigami";
        const _65_19_ = document.getElementById("65-19"); _65_19_.className = "PastScorigami";
        const _67_21_ = document.getElementById("67-21"); _67_21_.className = "PastScorigami";
        const _72_21_ = document.getElementById("72-21"); _72_21_.className = "PastScorigami";
        const _70_22_ = document.getElementById("70-22"); _70_22_.className = "PastScorigami";
        const _58_24_ = document.getElementById("58-24"); _58_24_.className = "PastScorigami";
        const _65_24_ = document.getElementById("65-24"); _65_24_.className = "PastScorigami";
        const _41_29_ = document.getElementById("41-29"); _41_29_.className = "PastScorigami";
        const _43_35_ = document.getElementById("43-35"); _43_35_.className = "PastScorigami";
        const _44_36_ = document.getElementById("44-36"); _44_36_.className = "PastScorigami";
        const _61_36_ = document.getElementById("61-36"); _61_36_.className = "PastScorigami";
        const _52_38_ = document.getElementById("52-38"); _52_38_.className = "PastScorigami";
        const _63_38_ = document.getElementById("63-38"); _63_38_.className = "PastScorigami";
        const _52_41_ = document.getElementById("52-41"); _52_41_.className = "PastScorigami";
        const _49_48_ = document.getElementById("49-48"); _49_48_.className = "PastScorigami";
        const _54_48_ = document.getElementById("54-48"); _54_48_.className = "PastScorigami";
    }
    if (output.innerHTML < "2002") {
        const _53_9_ = document.getElementById("53-9"); _53_9_.className = "Blank";
        const _62_11_ = document.getElementById("62-11"); _62_11_.className = "Blank";
        const _55_15_ = document.getElementById("55-15"); _55_15_.className = "Blank";
        const _65_19_ = document.getElementById("65-19"); _65_19_.className = "Blank";
        const _67_21_ = document.getElementById("67-21"); _67_21_.className = "Blank";
        const _72_21_ = document.getElementById("72-21"); _72_21_.className = "Blank";
        const _70_22_ = document.getElementById("70-22"); _70_22_.className = "Blank";
        const _58_24_ = document.getElementById("58-24"); _58_24_.className = "Blank";
        const _65_24_ = document.getElementById("65-24"); _65_24_.className = "Blank";
        const _41_29_ = document.getElementById("41-29"); _41_29_.className = "Blank";
        const _43_35_ = document.getElementById("43-35"); _43_35_.className = "Blank";
        const _44_36_ = document.getElementById("44-36"); _44_36_.className = "Blank";
        const _61_36_ = document.getElementById("61-36"); _61_36_.className = "Blank";
        const _52_38_ = document.getElementById("52-38"); _52_38_.className = "Blank";
        const _63_38_ = document.getElementById("63-38"); _63_38_.className = "Blank";
        const _52_41_ = document.getElementById("52-41"); _52_41_.className = "Blank";
        const _49_48_ = document.getElementById("49-48"); _49_48_.className = "Blank";
        const _54_48_ = document.getElementById("54-48"); _54_48_.className = "Blank";
    }

    //2003 Scorigami
    if (output.innerHTML == "2003") {
        const _65_3_ = document.getElementById("65-3"); _65_3_.className = "Scorigami";
        const _72_8_ = document.getElementById("72-8"); _72_8_.className = "Scorigami";
        const _63_18_ = document.getElementById("63-18"); _63_18_.className = "Scorigami";
        const _62_31_ = document.getElementById("62-31"); _62_31_.className = "Scorigami";
        const _61_32_ = document.getElementById("61-32"); _61_32_.className = "Scorigami";
        const _69_41_ = document.getElementById("69-41"); _69_41_.className = "Scorigami";
        const _50_44_ = document.getElementById("50-44"); _50_44_.className = "Scorigami";
        const _66_45_ = document.getElementById("66-45"); _66_45_.className = "Scorigami";
        const _51_49_ = document.getElementById("51-49"); _51_49_.className = "Scorigami";
        const _52_49_ = document.getElementById("52-49"); _52_49_.className = "Scorigami";
        const _57_51_ = document.getElementById("57-51"); _57_51_.className = "Scorigami";
        const _62_55_ = document.getElementById("62-55"); _62_55_.className = "Scorigami";
        const _71_63_ = document.getElementById("71-63"); _71_63_.className = "Scorigami";
    }
    if (output.innerHTML > "2003") {
        const _65_3_ = document.getElementById("65-3"); _65_3_.className = "PastScorigami";
        const _72_8_ = document.getElementById("72-8"); _72_8_.className = "PastScorigami";
        const _63_18_ = document.getElementById("63-18"); _63_18_.className = "PastScorigami";
        const _62_31_ = document.getElementById("62-31"); _62_31_.className = "PastScorigami";
        const _61_32_ = document.getElementById("61-32"); _61_32_.className = "PastScorigami";
        const _69_41_ = document.getElementById("69-41"); _69_41_.className = "PastScorigami";
        const _50_44_ = document.getElementById("50-44"); _50_44_.className = "PastScorigami";
        const _66_45_ = document.getElementById("66-45"); _66_45_.className = "PastScorigami";
        const _51_49_ = document.getElementById("51-49"); _51_49_.className = "PastScorigami";
        const _52_49_ = document.getElementById("52-49"); _52_49_.className = "PastScorigami";
        const _57_51_ = document.getElementById("57-51"); _57_51_.className = "PastScorigami";
        const _62_55_ = document.getElementById("62-55"); _62_55_.className = "PastScorigami";
        const _71_63_ = document.getElementById("71-63"); _71_63_.className = "PastScorigami";
    }
    if (output.innerHTML < "2003") {
        const _65_3_ = document.getElementById("65-3"); _65_3_.className = "Blank";
        const _72_8_ = document.getElementById("72-8"); _72_8_.className = "Blank";
        const _63_18_ = document.getElementById("63-18"); _63_18_.className = "Blank";
        const _62_31_ = document.getElementById("62-31"); _62_31_.className = "Blank";
        const _61_32_ = document.getElementById("61-32"); _61_32_.className = "Blank";
        const _69_41_ = document.getElementById("69-41"); _69_41_.className = "Blank";
        const _50_44_ = document.getElementById("50-44"); _50_44_.className = "Blank";
        const _66_45_ = document.getElementById("66-45"); _66_45_.className = "Blank";
        const _51_49_ = document.getElementById("51-49"); _51_49_.className = "Blank";
        const _52_49_ = document.getElementById("52-49"); _52_49_.className = "Blank";
        const _57_51_ = document.getElementById("57-51"); _57_51_.className = "Blank";
        const _62_55_ = document.getElementById("62-55"); _62_55_.className = "Blank";
        const _71_63_ = document.getElementById("71-63"); _71_63_.className = "Blank";
    }

    //2004 Scorigami
    if (output.innerHTML == "2004") {
        const _70_10_ = document.getElementById("70-10"); _70_10_.className = "Scorigami";
        const _70_16_ = document.getElementById("70-16"); _70_16_.className = "Scorigami";
        const _65_27_ = document.getElementById("65-27"); _65_27_.className = "Scorigami";
        const _63_31_ = document.getElementById("63-31"); _63_31_.className = "Scorigami";
        const _53_32_ = document.getElementById("53-32"); _53_32_.className = "Scorigami";
        const _59_33_ = document.getElementById("59-33"); _59_33_.className = "Scorigami";
        const _59_38_ = document.getElementById("59-38"); _59_38_.className = "Scorigami";
        const _59_40_ = document.getElementById("59-40"); _59_40_.className = "Scorigami";
        const _49_41_ = document.getElementById("49-41"); _49_41_.className = "Scorigami";
        const _53_45_ = document.getElementById("53-45"); _53_45_.className = "Scorigami";
        const _58_52_ = document.getElementById("58-52"); _58_52_.className = "Scorigami";
        const _59_55_ = document.getElementById("59-55"); _59_55_.className = "Scorigami";
        const _61_58_ = document.getElementById("61-58"); _61_58_.className = "Scorigami";
        const _70_63_ = document.getElementById("70-63"); _70_63_.className = "Scorigami";
    }
    if (output.innerHTML > "2004") {
        const _70_10_ = document.getElementById("70-10"); _70_10_.className = "PastScorigami";
        const _70_16_ = document.getElementById("70-16"); _70_16_.className = "PastScorigami";
        const _65_27_ = document.getElementById("65-27"); _65_27_.className = "PastScorigami";
        const _63_31_ = document.getElementById("63-31"); _63_31_.className = "PastScorigami";
        const _53_32_ = document.getElementById("53-32"); _53_32_.className = "PastScorigami";
        const _59_33_ = document.getElementById("59-33"); _59_33_.className = "PastScorigami";
        const _59_38_ = document.getElementById("59-38"); _59_38_.className = "PastScorigami";
        const _59_40_ = document.getElementById("59-40"); _59_40_.className = "PastScorigami";
        const _49_41_ = document.getElementById("49-41"); _49_41_.className = "PastScorigami";
        const _53_45_ = document.getElementById("53-45"); _53_45_.className = "PastScorigami";
        const _58_52_ = document.getElementById("58-52"); _58_52_.className = "PastScorigami";
        const _59_55_ = document.getElementById("59-55"); _59_55_.className = "PastScorigami";
        const _61_58_ = document.getElementById("61-58"); _61_58_.className = "PastScorigami";
        const _70_63_ = document.getElementById("70-63"); _70_63_.className = "PastScorigami";
    }
    if (output.innerHTML < "2004") {
        const _70_10_ = document.getElementById("70-10"); _70_10_.className = "Blank";
        const _70_16_ = document.getElementById("70-16"); _70_16_.className = "Blank";
        const _65_27_ = document.getElementById("65-27"); _65_27_.className = "Blank";
        const _63_31_ = document.getElementById("63-31"); _63_31_.className = "Blank";
        const _53_32_ = document.getElementById("53-32"); _53_32_.className = "Blank";
        const _59_33_ = document.getElementById("59-33"); _59_33_.className = "Blank";
        const _59_38_ = document.getElementById("59-38"); _59_38_.className = "Blank";
        const _59_40_ = document.getElementById("59-40"); _59_40_.className = "Blank";
        const _49_41_ = document.getElementById("49-41"); _49_41_.className = "Blank";
        const _53_45_ = document.getElementById("53-45"); _53_45_.className = "Blank";
        const _58_52_ = document.getElementById("58-52"); _58_52_.className = "Blank";
        const _59_55_ = document.getElementById("59-55"); _59_55_.className = "Blank";
        const _61_58_ = document.getElementById("61-58"); _61_58_.className = "Blank";
        const _70_63_ = document.getElementById("70-63"); _70_63_.className = "Blank";
    }

    //2005 Scorigami
    if (output.innerHTML == "2005") {
        const _56_5_ = document.getElementById("56-5"); _56_5_.className = "Scorigami";
        const _66_8_ = document.getElementById("66-8"); _66_8_.className = "Scorigami";
        const _70_17_ = document.getElementById("70-17"); _70_17_.className = "Scorigami";
        const _66_19_ = document.getElementById("66-19"); _66_19_.className = "Scorigami";
        const _80_21_ = document.getElementById("80-21"); _80_21_.className = "Scorigami";
        const _62_23_ = document.getElementById("62-23"); _62_23_.className = "Scorigami";
        const _40_29_ = document.getElementById("40-29"); _40_29_.className = "Scorigami";
        const _47_40_ = document.getElementById("47-40"); _47_40_.className = "Scorigami";
        const _48_43_ = document.getElementById("48-43"); _48_43_.className = "Scorigami";
        const _60_57_ = document.getElementById("60-57"); _60_57_.className = "Scorigami";
    }
    if (output.innerHTML > "2005") {
        const _56_5_ = document.getElementById("56-5"); _56_5_.className = "PastScorigami";
        const _66_8_ = document.getElementById("66-8"); _66_8_.className = "PastScorigami";
        const _70_17_ = document.getElementById("70-17"); _70_17_.className = "PastScorigami";
        const _66_19_ = document.getElementById("66-19"); _66_19_.className = "PastScorigami";
        const _80_21_ = document.getElementById("80-21"); _80_21_.className = "PastScorigami";
        const _62_23_ = document.getElementById("62-23"); _62_23_.className = "PastScorigami";
        const _40_29_ = document.getElementById("40-29"); _40_29_.className = "PastScorigami";
        const _47_40_ = document.getElementById("47-40"); _47_40_.className = "PastScorigami";
        const _48_43_ = document.getElementById("48-43"); _48_43_.className = "PastScorigami";
        const _60_57_ = document.getElementById("60-57"); _60_57_.className = "PastScorigami";
    }
    if (output.innerHTML < "2005") {
        const _56_5_ = document.getElementById("56-5"); _56_5_.className = "Blank";
        const _66_8_ = document.getElementById("66-8"); _66_8_.className = "Blank";
        const _70_17_ = document.getElementById("70-17"); _70_17_.className = "Blank";
        const _66_19_ = document.getElementById("66-19"); _66_19_.className = "Blank";
        const _80_21_ = document.getElementById("80-21"); _80_21_.className = "Blank";
        const _62_23_ = document.getElementById("62-23"); _62_23_.className = "Blank";
        const _40_29_ = document.getElementById("40-29"); _40_29_.className = "Blank";
        const _47_40_ = document.getElementById("47-40"); _47_40_.className = "Blank";
        const _48_43_ = document.getElementById("48-43"); _48_43_.className = "Blank";
        const _60_57_ = document.getElementById("60-57"); _60_57_.className = "Blank";
    }

    //2006 Scorigami
    if (output.innerHTML == "2006") {
        const _68_10_ = document.getElementById("68-10"); _68_10_.className = "Scorigami";
        const _54_31_ = document.getElementById("54-31"); _54_31_.className = "Scorigami";
        const _51_33_ = document.getElementById("51-33"); _51_33_.className = "Scorigami";
        const _60_35_ = document.getElementById("60-35"); _60_35_.className = "Scorigami";
    }
    if (output.innerHTML > "2006") {
        const _68_10_ = document.getElementById("68-10"); _68_10_.className = "PastScorigami";
        const _54_31_ = document.getElementById("54-31"); _54_31_.className = "PastScorigami";
        const _51_33_ = document.getElementById("51-33"); _51_33_.className = "PastScorigami";
        const _60_35_ = document.getElementById("60-35"); _60_35_.className = "PastScorigami";
    }
    if (output.innerHTML < "2006") {
        const _68_10_ = document.getElementById("68-10"); _68_10_.className = "Blank";
        const _54_31_ = document.getElementById("54-31"); _54_31_.className = "Blank";
        const _51_33_ = document.getElementById("51-33"); _51_33_.className = "Blank";
        const _60_35_ = document.getElementById("60-35"); _60_35_.className = "Blank";
    }

    //2007 Scorigami
    if (output.innerHTML == "2007") {
        const _79_10_ = document.getElementById("79-10"); _79_10_.className = "Scorigami";
        const _64_12_ = document.getElementById("64-12"); _64_12_.className = "Scorigami";
        const _73_31_ = document.getElementById("73-31"); _73_31_.className = "Scorigami";
        const _42_36_ = document.getElementById("42-36"); _42_36_.className = "Scorigami";
        const _48_37_ = document.getElementById("48-37"); _48_37_.className = "Scorigami";
        const _58_38_ = document.getElementById("58-38"); _58_38_.className = "Scorigami";
        const _76_39_ = document.getElementById("76-39"); _76_39_.className = "Scorigami";
        const _56_40_ = document.getElementById("56-40"); _56_40_.className = "Scorigami";
        const _50_48_ = document.getElementById("50-48"); _50_48_.className = "Scorigami";
        const _52_50_ = document.getElementById("52-50"); _52_50_.className = "Scorigami";
        const _65_51_ = document.getElementById("65-51"); _65_51_.className = "Scorigami";
        const _55_52_ = document.getElementById("55-52"); _55_52_.className = "Scorigami";
        const _74_62_ = document.getElementById("74-62"); _74_62_.className = "Scorigami";
        const _69_67_ = document.getElementById("69-67"); _69_67_.className = "Scorigami";
    }
    if (output.innerHTML > "2007") {
        const _79_10_ = document.getElementById("79-10"); _79_10_.className = "PastScorigami";
        const _64_12_ = document.getElementById("64-12"); _64_12_.className = "PastScorigami";
        const _73_31_ = document.getElementById("73-31"); _73_31_.className = "PastScorigami";
        const _42_36_ = document.getElementById("42-36"); _42_36_.className = "PastScorigami";
        const _48_37_ = document.getElementById("48-37"); _48_37_.className = "PastScorigami";
        const _58_38_ = document.getElementById("58-38"); _58_38_.className = "PastScorigami";
        const _76_39_ = document.getElementById("76-39"); _76_39_.className = "PastScorigami";
        const _56_40_ = document.getElementById("56-40"); _56_40_.className = "PastScorigami";
        const _50_48_ = document.getElementById("50-48"); _50_48_.className = "PastScorigami";
        const _52_50_ = document.getElementById("52-50"); _52_50_.className = "PastScorigami";
        const _65_51_ = document.getElementById("65-51"); _65_51_.className = "PastScorigami";
        const _55_52_ = document.getElementById("55-52"); _55_52_.className = "PastScorigami";
        const _74_62_ = document.getElementById("74-62"); _74_62_.className = "PastScorigami";
        const _69_67_ = document.getElementById("69-67"); _69_67_.className = "PastScorigami";
    }
    if (output.innerHTML < "2007") {
        const _79_10_ = document.getElementById("79-10"); _79_10_.className = "Blank";
        const _64_12_ = document.getElementById("64-12"); _64_12_.className = "Blank";
        const _73_31_ = document.getElementById("73-31"); _73_31_.className = "Blank";
        const _42_36_ = document.getElementById("42-36"); _42_36_.className = "Blank";
        const _48_37_ = document.getElementById("48-37"); _48_37_.className = "Blank";
        const _58_38_ = document.getElementById("58-38"); _58_38_.className = "Blank";
        const _76_39_ = document.getElementById("76-39"); _76_39_.className = "Blank";
        const _56_40_ = document.getElementById("56-40"); _56_40_.className = "Blank";
        const _50_48_ = document.getElementById("50-48"); _50_48_.className = "Blank";
        const _52_50_ = document.getElementById("52-50"); _52_50_.className = "Blank";
        const _65_51_ = document.getElementById("65-51"); _65_51_.className = "Blank";
        const _55_52_ = document.getElementById("55-52"); _55_52_.className = "Blank";
        const _74_62_ = document.getElementById("74-62"); _74_62_.className = "Blank";
        const _69_67_ = document.getElementById("69-67"); _69_67_.className = "Blank";
    }

    //2008 Scorigami
    if (output.innerHTML == "2008") {
        const _69_10_ = document.getElementById("69-10"); _69_10_.className = "Scorigami";
        const _83_10_ = document.getElementById("83-10"); _83_10_.className = "Scorigami";
        const _77_20_ = document.getElementById("77-20"); _77_20_.className = "Scorigami";
        const _65_21_ = document.getElementById("65-21"); _65_21_.className = "Scorigami";
        const _59_30_ = document.getElementById("59-30"); _59_30_.className = "Scorigami";
        const _70_30_ = document.getElementById("70-30"); _70_30_.className = "Scorigami";
        const _77_35_ = document.getElementById("77-35"); _77_35_.className = "Scorigami";
        const _47_36_ = document.getElementById("47-36"); _47_36_.className = "Scorigami";
        const _56_37_ = document.getElementById("56-37"); _56_37_.className = "Scorigami";
        const _65_38_ = document.getElementById("65-38"); _65_38_.className = "Scorigami";
        const _51_40_ = document.getElementById("51-40"); _51_40_.className = "Scorigami";
        const _61_41_ = document.getElementById("61-41"); _61_41_.className = "Scorigami";
        const _57_50_ = document.getElementById("57-50"); _57_50_.className = "Scorigami";
        const _56_52_ = document.getElementById("56-52"); _56_52_.className = "Scorigami";
        const _55_54_ = document.getElementById("55-54"); _55_54_.className = "Scorigami";
    }
    if (output.innerHTML > "2008") {
        const _69_10_ = document.getElementById("69-10"); _69_10_.className = "PastScorigami";
        const _83_10_ = document.getElementById("83-10"); _83_10_.className = "PastScorigami";
        const _77_20_ = document.getElementById("77-20"); _77_20_.className = "PastScorigami";
        const _65_21_ = document.getElementById("65-21"); _65_21_.className = "PastScorigami";
        const _59_30_ = document.getElementById("59-30"); _59_30_.className = "PastScorigami";
        const _70_30_ = document.getElementById("70-30"); _70_30_.className = "PastScorigami";
        const _77_35_ = document.getElementById("77-35"); _77_35_.className = "PastScorigami";
        const _47_36_ = document.getElementById("47-36"); _47_36_.className = "PastScorigami";
        const _56_37_ = document.getElementById("56-37"); _56_37_.className = "PastScorigami";
        const _65_38_ = document.getElementById("65-38"); _65_38_.className = "PastScorigami";
        const _51_40_ = document.getElementById("51-40"); _51_40_.className = "PastScorigami";
        const _61_41_ = document.getElementById("61-41"); _61_41_.className = "PastScorigami";
        const _57_50_ = document.getElementById("57-50"); _57_50_.className = "PastScorigami";
        const _56_52_ = document.getElementById("56-52"); _56_52_.className = "PastScorigami";
        const _55_54_ = document.getElementById("55-54"); _55_54_.className = "PastScorigami";
    }
    if (output.innerHTML < "2008") {
        const _69_10_ = document.getElementById("69-10"); _69_10_.className = "Blank";
        const _83_10_ = document.getElementById("83-10"); _83_10_.className = "Blank";
        const _77_20_ = document.getElementById("77-20"); _77_20_.className = "Blank";
        const _65_21_ = document.getElementById("65-21"); _65_21_.className = "Blank";
        const _59_30_ = document.getElementById("59-30"); _59_30_.className = "Blank";
        const _70_30_ = document.getElementById("70-30"); _70_30_.className = "Blank";
        const _77_35_ = document.getElementById("77-35"); _77_35_.className = "Blank";
        const _47_36_ = document.getElementById("47-36"); _47_36_.className = "Blank";
        const _56_37_ = document.getElementById("56-37"); _56_37_.className = "Blank";
        const _65_38_ = document.getElementById("65-38"); _65_38_.className = "Blank";
        const _51_40_ = document.getElementById("51-40"); _51_40_.className = "Blank";
        const _61_41_ = document.getElementById("61-41"); _61_41_.className = "Blank";
        const _57_50_ = document.getElementById("57-50"); _57_50_.className = "Blank";
        const _56_52_ = document.getElementById("56-52"); _56_52_.className = "Blank";
        const _55_54_ = document.getElementById("55-54"); _55_54_.className = "Blank";
    }

    //2009 Scorigami
    if (output.innerHTML == "2009") {
        const _50_26_ = document.getElementById("50-26"); _50_26_.className = "Scorigami";
        const _54_30_ = document.getElementById("54-30"); _54_30_.className = "Scorigami";
        const _40_32_ = document.getElementById("40-32"); _40_32_.className = "Scorigami";
        const _49_36_ = document.getElementById("49-36"); _49_36_.className = "Scorigami";
        const _51_42_ = document.getElementById("51-42"); _51_42_.className = "Scorigami";
        const _50_43_ = document.getElementById("50-43"); _50_43_.className = "Scorigami";
        const _70_45_ = document.getElementById("70-45"); _70_45_.className = "Scorigami";
        const _68_49_ = document.getElementById("68-49"); _68_49_.className = "Scorigami";
    }
    if (output.innerHTML > "2009") {
        const _50_26_ = document.getElementById("50-26"); _50_26_.className = "PastScorigami";
        const _54_30_ = document.getElementById("54-30"); _54_30_.className = "PastScorigami";
        const _40_32_ = document.getElementById("40-32"); _40_32_.className = "PastScorigami";
        const _49_36_ = document.getElementById("49-36"); _49_36_.className = "PastScorigami";
        const _51_42_ = document.getElementById("51-42"); _51_42_.className = "PastScorigami";
        const _50_43_ = document.getElementById("50-43"); _50_43_.className = "PastScorigami";
        const _70_45_ = document.getElementById("70-45"); _70_45_.className = "PastScorigami";
        const _68_49_ = document.getElementById("68-49"); _68_49_.className = "PastScorigami";
    }
    if (output.innerHTML < "2009") {
        const _50_26_ = document.getElementById("50-26"); _50_26_.className = "Blank";
        const _54_30_ = document.getElementById("54-30"); _54_30_.className = "Blank";
        const _40_32_ = document.getElementById("40-32"); _40_32_.className = "Blank";
        const _49_36_ = document.getElementById("49-36"); _49_36_.className = "Blank";
        const _51_42_ = document.getElementById("51-42"); _51_42_.className = "Blank";
        const _50_43_ = document.getElementById("50-43"); _50_43_.className = "Blank";
        const _70_45_ = document.getElementById("70-45"); _70_45_.className = "Blank";
        const _68_49_ = document.getElementById("68-49"); _68_49_.className = "Blank";
    }

    //2010 Scorigami
    if (output.innerHTML == "2010") {
        const _71_3_ = document.getElementById("71-3"); _71_3_.className = "Scorigami";
        const _73_20_ = document.getElementById("73-20"); _73_20_.className = "Scorigami";
        const _83_20_ = document.getElementById("83-20"); _83_20_.className = "Scorigami";
        const _70_23_ = document.getElementById("70-23"); _70_23_.className = "Scorigami";
        const _68_24_ = document.getElementById("68-24"); _68_24_.className = "Scorigami";
        const _69_24_ = document.getElementById("69-24"); _69_24_.className = "Scorigami";
        const _68_27_ = document.getElementById("68-27"); _68_27_.className = "Scorigami";
        const _65_28_ = document.getElementById("65-28"); _65_28_.className = "Scorigami";
        const _68_28_ = document.getElementById("68-28"); _68_28_.className = "Scorigami";
        const _65_30_ = document.getElementById("65-30"); _65_30_.className = "Scorigami";
        const _76_35_ = document.getElementById("76-35"); _76_35_.className = "Scorigami";
        const _62_38_ = document.getElementById("62-38"); _62_38_.className = "Scorigami";
        const _69_38_ = document.getElementById("69-38"); _69_38_.className = "Scorigami";
        const _51_41_ = document.getElementById("51-41"); _51_41_.className = "Scorigami";
        const _59_41_ = document.getElementById("59-41"); _59_41_.className = "Scorigami";
        const _54_42_ = document.getElementById("54-42"); _54_42_.className = "Scorigami";
        const _65_43_ = document.getElementById("65-43"); _65_43_.className = "Scorigami";
        const _52_45_ = document.getElementById("52-45"); _52_45_.className = "Scorigami";
        const _56_50_ = document.getElementById("56-50"); _56_50_.className = "Scorigami";
        const _67_65_ = document.getElementById("67-65"); _67_65_.className = "Scorigami";
    }
    if (output.innerHTML > "2010") {
        const _71_3_ = document.getElementById("71-3"); _71_3_.className = "PastScorigami";
        const _73_20_ = document.getElementById("73-20"); _73_20_.className = "PastScorigami";
        const _83_20_ = document.getElementById("83-20"); _83_20_.className = "PastScorigami";
        const _70_23_ = document.getElementById("70-23"); _70_23_.className = "PastScorigami";
        const _68_24_ = document.getElementById("68-24"); _68_24_.className = "PastScorigami";
        const _69_24_ = document.getElementById("69-24"); _69_24_.className = "PastScorigami";
        const _68_27_ = document.getElementById("68-27"); _68_27_.className = "PastScorigami";
        const _65_28_ = document.getElementById("65-28"); _65_28_.className = "PastScorigami";
        const _68_28_ = document.getElementById("68-28"); _68_28_.className = "PastScorigami";
        const _65_30_ = document.getElementById("65-30"); _65_30_.className = "PastScorigami";
        const _76_35_ = document.getElementById("76-35"); _76_35_.className = "PastScorigami";
        const _62_38_ = document.getElementById("62-38"); _62_38_.className = "PastScorigami";
        const _69_38_ = document.getElementById("69-38"); _69_38_.className = "PastScorigami";
        const _51_41_ = document.getElementById("51-41"); _51_41_.className = "PastScorigami";
        const _59_41_ = document.getElementById("59-41"); _59_41_.className = "PastScorigami";
        const _54_42_ = document.getElementById("54-42"); _54_42_.className = "PastScorigami";
        const _65_43_ = document.getElementById("65-43"); _65_43_.className = "PastScorigami";
        const _52_45_ = document.getElementById("52-45"); _52_45_.className = "PastScorigami";
        const _56_50_ = document.getElementById("56-50"); _56_50_.className = "PastScorigami";
        const _67_65_ = document.getElementById("67-65"); _67_65_.className = "PastScorigami";
    }
    if (output.innerHTML < "2010") {
        const _71_3_ = document.getElementById("71-3"); _71_3_.className = "Blank";
        const _73_20_ = document.getElementById("73-20"); _73_20_.className = "Blank";
        const _83_20_ = document.getElementById("83-20"); _83_20_.className = "Blank";
        const _70_23_ = document.getElementById("70-23"); _70_23_.className = "Blank";
        const _68_24_ = document.getElementById("68-24"); _68_24_.className = "Blank";
        const _69_24_ = document.getElementById("69-24"); _69_24_.className = "Blank";
        const _68_27_ = document.getElementById("68-27"); _68_27_.className = "Blank";
        const _65_28_ = document.getElementById("65-28"); _65_28_.className = "Blank";
        const _68_28_ = document.getElementById("68-28"); _68_28_.className = "Blank";
        const _65_30_ = document.getElementById("65-30"); _65_30_.className = "Blank";
        const _76_35_ = document.getElementById("76-35"); _76_35_.className = "Blank";
        const _62_38_ = document.getElementById("62-38"); _62_38_.className = "Blank";
        const _69_38_ = document.getElementById("69-38"); _69_38_.className = "Blank";
        const _51_41_ = document.getElementById("51-41"); _51_41_.className = "Blank";
        const _59_41_ = document.getElementById("59-41"); _59_41_.className = "Blank";
        const _54_42_ = document.getElementById("54-42"); _54_42_.className = "Blank";
        const _65_43_ = document.getElementById("65-43"); _65_43_.className = "Blank";
        const _52_45_ = document.getElementById("52-45"); _52_45_.className = "Blank";
        const _56_50_ = document.getElementById("56-50"); _56_50_.className = "Blank";
        const _67_65_ = document.getElementById("67-65"); _67_65_.className = "Blank";
    }

    //2011 Scorigami
    if (output.innerHTML == "2011") {
        const _73_17_ = document.getElementById("73-17"); _73_17_.className = "Scorigami";
        const _69_20_ = document.getElementById("69-20"); _69_20_.className = "Scorigami";
        const _70_28_ = document.getElementById("70-28"); _70_28_.className = "Scorigami";
        const _73_34_ = document.getElementById("73-34"); _73_34_.className = "Scorigami";
        const _47_38_ = document.getElementById("47-38"); _47_38_.className = "Scorigami";
        const _56_41_ = document.getElementById("56-41"); _56_41_.className = "Scorigami";
        const _66_42_ = document.getElementById("66-42"); _66_42_.className = "Scorigami";
        const _53_50_ = document.getElementById("53-50"); _53_50_.className = "Scorigami";
        const _67_56_ = document.getElementById("67-56"); _67_56_.className = "Scorigami";
        const _63_60_ = document.getElementById("63-60"); _63_60_.className = "Scorigami";
        const _66_63_ = document.getElementById("66-63"); _66_63_.className = "Scorigami";
    }
    if (output.innerHTML > "2011") {
        const _73_17_ = document.getElementById("73-17"); _73_17_.className = "PastScorigami";
        const _69_20_ = document.getElementById("69-20"); _69_20_.className = "PastScorigami";
        const _70_28_ = document.getElementById("70-28"); _70_28_.className = "PastScorigami";
        const _73_34_ = document.getElementById("73-34"); _73_34_.className = "PastScorigami";
        const _47_38_ = document.getElementById("47-38"); _47_38_.className = "PastScorigami";
        const _56_41_ = document.getElementById("56-41"); _56_41_.className = "PastScorigami";
        const _66_42_ = document.getElementById("66-42"); _66_42_.className = "PastScorigami";
        const _53_50_ = document.getElementById("53-50"); _53_50_.className = "PastScorigami";
        const _67_56_ = document.getElementById("67-56"); _67_56_.className = "PastScorigami";
        const _63_60_ = document.getElementById("63-60"); _63_60_.className = "PastScorigami";
        const _66_63_ = document.getElementById("66-63"); _66_63_.className = "PastScorigami";
    }
    if (output.innerHTML < "2011") {
        const _73_17_ = document.getElementById("73-17"); _73_17_.className = "Blank";
        const _69_20_ = document.getElementById("69-20"); _69_20_.className = "Blank";
        const _70_28_ = document.getElementById("70-28"); _70_28_.className = "Blank";
        const _73_34_ = document.getElementById("73-34"); _73_34_.className = "Blank";
        const _47_38_ = document.getElementById("47-38"); _47_38_.className = "Blank";
        const _56_41_ = document.getElementById("56-41"); _56_41_.className = "Blank";
        const _66_42_ = document.getElementById("66-42"); _66_42_.className = "Blank";
        const _53_50_ = document.getElementById("53-50"); _53_50_.className = "Blank";
        const _67_56_ = document.getElementById("67-56"); _67_56_.className = "Blank";
        const _63_60_ = document.getElementById("63-60"); _63_60_.className = "Blank";
        const _66_63_ = document.getElementById("66-63"); _66_63_.className = "Blank";
    }

    //2012 Scorigami
    if (output.innerHTML == "2012") {
        const _51_9_ = document.getElementById("51-9"); _51_9_.className = "Scorigami";
        const _44_11_ = document.getElementById("44-11"); _44_11_.className = "Scorigami";
        const _66_31_ = document.getElementById("66-31"); _66_31_.className = "Scorigami";
        const _69_34_ = document.getElementById("69-34"); _69_34_.className = "Scorigami";
        const _50_35_ = document.getElementById("50-35"); _50_35_.className = "Scorigami";
        const _72_42_ = document.getElementById("72-42"); _72_42_.className = "Scorigami";
        const _51_44_ = document.getElementById("51-44"); _51_44_.className = "Scorigami";
        const _52_47_ = document.getElementById("52-47"); _52_47_.className = "Scorigami";
        const _62_48_ = document.getElementById("62-48"); _62_48_.className = "Scorigami";
        const _68_50_ = document.getElementById("68-50"); _68_50_.className = "Scorigami";
        const _62_51_ = document.getElementById("62-51"); _62_51_.className = "Scorigami";
        const _56_53_ = document.getElementById("56-53"); _56_53_.className = "Scorigami";
        const _59_57_ = document.getElementById("59-57"); _59_57_.className = "Scorigami";
        const _65_59_ = document.getElementById("65-59"); _65_59_.className = "Scorigami";
    }
    if (output.innerHTML > "2012") {
        const _51_9_ = document.getElementById("51-9"); _51_9_.className = "PastScorigami";
        const _44_11_ = document.getElementById("44-11"); _44_11_.className = "PastScorigami";
        const _66_31_ = document.getElementById("66-31"); _66_31_.className = "PastScorigami";
        const _69_34_ = document.getElementById("69-34"); _69_34_.className = "PastScorigami";
        const _50_35_ = document.getElementById("50-35"); _50_35_.className = "PastScorigami";
        const _72_42_ = document.getElementById("72-42"); _72_42_.className = "PastScorigami";
        const _51_44_ = document.getElementById("51-44"); _51_44_.className = "PastScorigami";
        const _52_47_ = document.getElementById("52-47"); _52_47_.className = "PastScorigami";
        const _62_48_ = document.getElementById("62-48"); _62_48_.className = "PastScorigami";
        const _68_50_ = document.getElementById("68-50"); _68_50_.className = "PastScorigami";
        const _62_51_ = document.getElementById("62-51"); _62_51_.className = "PastScorigami";
        const _56_53_ = document.getElementById("56-53"); _56_53_.className = "PastScorigami";
        const _59_57_ = document.getElementById("59-57"); _59_57_.className = "PastScorigami";
        const _65_59_ = document.getElementById("65-59"); _65_59_.className = "PastScorigami";
    }
    if (output.innerHTML < "2012") {
        const _51_9_ = document.getElementById("51-9"); _51_9_.className = "Blank";
        const _44_11_ = document.getElementById("44-11"); _44_11_.className = "Blank";
        const _66_31_ = document.getElementById("66-31"); _66_31_.className = "Blank";
        const _69_34_ = document.getElementById("69-34"); _69_34_.className = "Blank";
        const _50_35_ = document.getElementById("50-35"); _50_35_.className = "Blank";
        const _72_42_ = document.getElementById("72-42"); _72_42_.className = "Blank";
        const _51_44_ = document.getElementById("51-44"); _51_44_.className = "Blank";
        const _52_47_ = document.getElementById("52-47"); _52_47_.className = "Blank";
        const _62_48_ = document.getElementById("62-48"); _62_48_.className = "Blank";
        const _68_50_ = document.getElementById("68-50"); _68_50_.className = "Blank";
        const _62_51_ = document.getElementById("62-51"); _62_51_.className = "Blank";
        const _56_53_ = document.getElementById("56-53"); _56_53_.className = "Blank";
        const _59_57_ = document.getElementById("59-57"); _59_57_.className = "Blank";
        const _65_59_ = document.getElementById("65-59"); _65_59_.className = "Blank";
    }

    //2013 Scorigami
    if (output.innerHTML == "2013") {
        const _66_9_ = document.getElementById("66-9"); _66_9_.className = "Scorigami";
        const _70_13_ = document.getElementById("70-13"); _70_13_.className = "Scorigami";
        const _80_14_ = document.getElementById("80-14"); _80_14_.className = "Scorigami";
        const _80_20_ = document.getElementById("80-20"); _80_20_.className = "Scorigami";
        const _69_27_ = document.getElementById("69-27"); _69_27_.className = "Scorigami";
        const _73_35_ = document.getElementById("73-35"); _73_35_.className = "Scorigami";
        const _56_36_ = document.getElementById("56-36"); _56_36_.className = "Scorigami";
        const _73_42_ = document.getElementById("73-42"); _73_42_.className = "Scorigami";
        const _52_48_ = document.getElementById("52-48"); _52_48_.className = "Scorigami";
        const _59_49_ = document.getElementById("59-49"); _59_49_.className = "Scorigami";
        const _62_52_ = document.getElementById("62-52"); _62_52_.className = "Scorigami";
        const _58_55_ = document.getElementById("58-55"); _58_55_.className = "Scorigami";
    }
    if (output.innerHTML > "2013") {
        const _66_9_ = document.getElementById("66-9"); _66_9_.className = "PastScorigami";
        const _70_13_ = document.getElementById("70-13"); _70_13_.className = "PastScorigami";
        const _80_14_ = document.getElementById("80-14"); _80_14_.className = "PastScorigami";
        const _80_20_ = document.getElementById("80-20"); _80_20_.className = "PastScorigami";
        const _69_27_ = document.getElementById("69-27"); _69_27_.className = "PastScorigami";
        const _73_35_ = document.getElementById("73-35"); _73_35_.className = "PastScorigami";
        const _56_36_ = document.getElementById("56-36"); _56_36_.className = "PastScorigami";
        const _73_42_ = document.getElementById("73-42"); _73_42_.className = "PastScorigami";
        const _52_48_ = document.getElementById("52-48"); _52_48_.className = "PastScorigami";
        const _59_49_ = document.getElementById("59-49"); _59_49_.className = "PastScorigami";
        const _62_52_ = document.getElementById("62-52"); _62_52_.className = "PastScorigami";
        const _58_55_ = document.getElementById("58-55"); _58_55_.className = "PastScorigami";
    }
    if (output.innerHTML < "2013") {
        const _66_9_ = document.getElementById("66-9"); _66_9_.className = "Blank";
        const _70_13_ = document.getElementById("70-13"); _70_13_.className = "Blank";
        const _80_14_ = document.getElementById("80-14"); _80_14_.className = "Blank";
        const _80_20_ = document.getElementById("80-20"); _80_20_.className = "Blank";
        const _69_27_ = document.getElementById("69-27"); _69_27_.className = "Blank";
        const _73_35_ = document.getElementById("73-35"); _73_35_.className = "Blank";
        const _56_36_ = document.getElementById("56-36"); _56_36_.className = "Blank";
        const _73_42_ = document.getElementById("73-42"); _73_42_.className = "Blank";
        const _52_48_ = document.getElementById("52-48"); _52_48_.className = "Blank";
        const _59_49_ = document.getElementById("59-49"); _59_49_.className = "Blank";
        const _62_52_ = document.getElementById("62-52"); _62_52_.className = "Blank";
        const _58_55_ = document.getElementById("58-55"); _58_55_.className = "Blank";
    }

    //2014 Scorigami
    if (output.innerHTML == "2014") {
        const _83_9_ = document.getElementById("83-9"); _83_9_.className = "Scorigami";
        const _50_19_ = document.getElementById("50-19"); _50_19_.className = "Scorigami";
        const _82_27_ = document.getElementById("82-27"); _82_27_.className = "Scorigami";
        const _69_31_ = document.getElementById("69-31"); _69_31_.className = "Scorigami";
        const _76_31_ = document.getElementById("76-31"); _76_31_.className = "Scorigami";
        const _68_35_ = document.getElementById("68-35"); _68_35_.className = "Scorigami";
        const _59_37_ = document.getElementById("59-37"); _59_37_.className = "Scorigami";
        const _47_39_ = document.getElementById("47-39"); _47_39_.className = "Scorigami";
        const _55_40_ = document.getElementById("55-40"); _55_40_.className = "Scorigami";
        const _70_41_ = document.getElementById("70-41"); _70_41_.className = "Scorigami";
        const _49_43_ = document.getElementById("49-43"); _49_43_.className = "Scorigami";
        const _63_44_ = document.getElementById("63-44"); _63_44_.className = "Scorigami";
        const _48_46_ = document.getElementById("48-46"); _48_46_.className = "Scorigami";
        const _51_46_ = document.getElementById("51-46"); _51_46_.className = "Scorigami";
        const _54_46_ = document.getElementById("54-46"); _54_46_.className = "Scorigami";
        const _60_49_ = document.getElementById("60-49"); _60_49_.className = "Scorigami";
        const _66_51_ = document.getElementById("66-51"); _66_51_.className = "Scorigami";
        const _60_59_ = document.getElementById("60-59"); _60_59_.className = "Scorigami";
        const _67_66_ = document.getElementById("67-66"); _67_66_.className = "Scorigami";
    }
    if (output.innerHTML > "2014") {
        const _83_9_ = document.getElementById("83-9"); _83_9_.className = "PastScorigami";
        const _50_19_ = document.getElementById("50-19"); _50_19_.className = "PastScorigami";
        const _82_27_ = document.getElementById("82-27"); _82_27_.className = "PastScorigami";
        const _69_31_ = document.getElementById("69-31"); _69_31_.className = "PastScorigami";
        const _76_31_ = document.getElementById("76-31"); _76_31_.className = "PastScorigami";
        const _68_35_ = document.getElementById("68-35"); _68_35_.className = "PastScorigami";
        const _59_37_ = document.getElementById("59-37"); _59_37_.className = "PastScorigami";
        const _47_39_ = document.getElementById("47-39"); _47_39_.className = "PastScorigami";
        const _55_40_ = document.getElementById("55-40"); _55_40_.className = "PastScorigami";
        const _70_41_ = document.getElementById("70-41"); _70_41_.className = "PastScorigami";
        const _49_43_ = document.getElementById("49-43"); _49_43_.className = "PastScorigami";
        const _63_44_ = document.getElementById("63-44"); _63_44_.className = "PastScorigami";
        const _48_46_ = document.getElementById("48-46"); _48_46_.className = "PastScorigami";
        const _51_46_ = document.getElementById("51-46"); _51_46_.className = "PastScorigami";
        const _54_46_ = document.getElementById("54-46"); _54_46_.className = "PastScorigami";
        const _60_49_ = document.getElementById("60-49"); _60_49_.className = "PastScorigami";
        const _66_51_ = document.getElementById("66-51"); _66_51_.className = "PastScorigami";
        const _60_59_ = document.getElementById("60-59"); _60_59_.className = "PastScorigami";
        const _67_66_ = document.getElementById("67-66"); _67_66_.className = "PastScorigami";
    }
    if (output.innerHTML < "2014") {
        const _83_9_ = document.getElementById("83-9"); _83_9_.className = "Blank";
        const _50_19_ = document.getElementById("50-19"); _50_19_.className = "Blank";
        const _82_27_ = document.getElementById("82-27"); _82_27_.className = "Blank";
        const _69_31_ = document.getElementById("69-31"); _69_31_.className = "Blank";
        const _76_31_ = document.getElementById("76-31"); _76_31_.className = "Blank";
        const _68_35_ = document.getElementById("68-35"); _68_35_.className = "Blank";
        const _59_37_ = document.getElementById("59-37"); _59_37_.className = "Blank";
        const _47_39_ = document.getElementById("47-39"); _47_39_.className = "Blank";
        const _55_40_ = document.getElementById("55-40"); _55_40_.className = "Blank";
        const _70_41_ = document.getElementById("70-41"); _70_41_.className = "Blank";
        const _49_43_ = document.getElementById("49-43"); _49_43_.className = "Blank";
        const _63_44_ = document.getElementById("63-44"); _63_44_.className = "Blank";
        const _48_46_ = document.getElementById("48-46"); _48_46_.className = "Blank";
        const _51_46_ = document.getElementById("51-46"); _51_46_.className = "Blank";
        const _54_46_ = document.getElementById("54-46"); _54_46_.className = "Blank";
        const _60_49_ = document.getElementById("60-49"); _60_49_.className = "Blank";
        const _66_51_ = document.getElementById("66-51"); _66_51_.className = "Blank";
        const _60_59_ = document.getElementById("60-59"); _60_59_.className = "Blank";
        const _67_66_ = document.getElementById("67-66"); _67_66_.className = "Blank";
    }

    //2015 Scorigami
    if (output.innerHTML == "2015") {
        const _76_3_ = document.getElementById("76-3"); _76_3_.className = "Scorigami";
        const _80_8_ = document.getElementById("80-8"); _80_8_.className = "Scorigami";
        const _77_13_ = document.getElementById("77-13"); _77_13_.className = "Scorigami";
        const _62_15_ = document.getElementById("62-15"); _62_15_.className = "Scorigami";
        const _54_36_ = document.getElementById("54-36"); _54_36_.className = "Scorigami";
        const _55_36_ = document.getElementById("55-36"); _55_36_.className = "Scorigami";
        const _58_36_ = document.getElementById("58-36"); _58_36_.className = "Scorigami";
        const _61_42_ = document.getElementById("61-42"); _61_42_.className = "Scorigami";
        const _59_44_ = document.getElementById("59-44"); _59_44_.className = "Scorigami";
        const _59_45_ = document.getElementById("59-45"); _59_45_.className = "Scorigami";
        const _53_46_ = document.getElementById("53-46"); _53_46_.className = "Scorigami";
        const _70_53_ = document.getElementById("70-53"); _70_53_.className = "Scorigami";
        const _61_55_ = document.getElementById("61-55"); _61_55_.className = "Scorigami";
    }
    if (output.innerHTML > "2015") {
        const _76_3_ = document.getElementById("76-3"); _76_3_.className = "PastScorigami";
        const _80_8_ = document.getElementById("80-8"); _80_8_.className = "PastScorigami";
        const _77_13_ = document.getElementById("77-13"); _77_13_.className = "PastScorigami";
        const _62_15_ = document.getElementById("62-15"); _62_15_.className = "PastScorigami";
        const _54_36_ = document.getElementById("54-36"); _54_36_.className = "PastScorigami";
        const _55_36_ = document.getElementById("55-36"); _55_36_.className = "PastScorigami";
        const _58_36_ = document.getElementById("58-36"); _58_36_.className = "PastScorigami";
        const _61_42_ = document.getElementById("61-42"); _61_42_.className = "PastScorigami";
        const _59_44_ = document.getElementById("59-44"); _59_44_.className = "PastScorigami";
        const _59_45_ = document.getElementById("59-45"); _59_45_.className = "PastScorigami";
        const _53_46_ = document.getElementById("53-46"); _53_46_.className = "PastScorigami";
        const _70_53_ = document.getElementById("70-53"); _70_53_.className = "PastScorigami";
        const _61_55_ = document.getElementById("61-55"); _61_55_.className = "PastScorigami";
    }
    if (output.innerHTML < "2015") {
        const _76_3_ = document.getElementById("76-3"); _76_3_.className = "Blank";
        const _80_8_ = document.getElementById("80-8"); _80_8_.className = "Blank";
        const _77_13_ = document.getElementById("77-13"); _77_13_.className = "Blank";
        const _62_15_ = document.getElementById("62-15"); _62_15_.className = "Blank";
        const _54_36_ = document.getElementById("54-36"); _54_36_.className = "Blank";
        const _55_36_ = document.getElementById("55-36"); _55_36_.className = "Blank";
        const _58_36_ = document.getElementById("58-36"); _58_36_.className = "Blank";
        const _61_42_ = document.getElementById("61-42"); _61_42_.className = "Blank";
        const _59_44_ = document.getElementById("59-44"); _59_44_.className = "Blank";
        const _59_45_ = document.getElementById("59-45"); _59_45_.className = "Blank";
        const _53_46_ = document.getElementById("53-46"); _53_46_.className = "Blank";
        const _70_53_ = document.getElementById("70-53"); _70_53_.className = "Blank";
        const _61_55_ = document.getElementById("61-55"); _61_55_.className = "Blank";
    }

    //2016 Scorigami
    if (output.innerHTML == "2016") {
        const _52_8_ = document.getElementById("52-8"); _52_8_.className = "Scorigami";
        const _77_10_ = document.getElementById("77-10"); _77_10_.className = "Scorigami";
        const _62_22_ = document.getElementById("62-22"); _62_22_.className = "Scorigami";
        const _66_27_ = document.getElementById("66-27"); _66_27_.className = "Scorigami";
        const _75_31_ = document.getElementById("75-31"); _75_31_.className = "Scorigami";
        const _54_35_ = document.getElementById("54-35"); _54_35_.className = "Scorigami";
        const _66_35_ = document.getElementById("66-35"); _66_35_.className = "Scorigami";
        const _54_39_ = document.getElementById("54-39"); _54_39_.className = "Scorigami";
        const _54_40_ = document.getElementById("54-40"); _54_40_.className = "Scorigami";
        const _62_42_ = document.getElementById("62-42"); _62_42_.className = "Scorigami";
        const _58_44_ = document.getElementById("58-44"); _58_44_.className = "Scorigami";
        const _65_44_ = document.getElementById("65-44"); _65_44_.className = "Scorigami";
        const _61_50_ = document.getElementById("61-50"); _61_50_.className = "Scorigami";
        const _55_53_ = document.getElementById("55-53"); _55_53_.className = "Scorigami";
        const _56_54_ = document.getElementById("56-54"); _56_54_.className = "Scorigami";
        const _68_55_ = document.getElementById("68-55"); _68_55_.className = "Scorigami";
        const _77_56_ = document.getElementById("77-56"); _77_56_.className = "Scorigami";
        const _66_59_ = document.getElementById("66-59"); _66_59_.className = "Scorigami";
        const _76_61_ = document.getElementById("76-61"); _76_61_.className = "Scorigami";
        const _69_66_ = document.getElementById("69-66"); _69_66_.className = "Scorigami";
    }
    if (output.innerHTML > "2016") {
        const _52_8_ = document.getElementById("52-8"); _52_8_.className = "PastScorigami";
        const _77_10_ = document.getElementById("77-10"); _77_10_.className = "PastScorigami";
        const _62_22_ = document.getElementById("62-22"); _62_22_.className = "PastScorigami";
        const _66_27_ = document.getElementById("66-27"); _66_27_.className = "PastScorigami";
        const _75_31_ = document.getElementById("75-31"); _75_31_.className = "PastScorigami";
        const _54_35_ = document.getElementById("54-35"); _54_35_.className = "PastScorigami";
        const _66_35_ = document.getElementById("66-35"); _66_35_.className = "PastScorigami";
        const _54_39_ = document.getElementById("54-39"); _54_39_.className = "PastScorigami";
        const _54_40_ = document.getElementById("54-40"); _54_40_.className = "PastScorigami";
        const _62_42_ = document.getElementById("62-42"); _62_42_.className = "PastScorigami";
        const _58_44_ = document.getElementById("58-44"); _58_44_.className = "PastScorigami";
        const _65_44_ = document.getElementById("65-44"); _65_44_.className = "PastScorigami";
        const _61_50_ = document.getElementById("61-50"); _61_50_.className = "PastScorigami";
        const _55_53_ = document.getElementById("55-53"); _55_53_.className = "PastScorigami";
        const _56_54_ = document.getElementById("56-54"); _56_54_.className = "PastScorigami";
        const _68_55_ = document.getElementById("68-55"); _68_55_.className = "PastScorigami";
        const _77_56_ = document.getElementById("77-56"); _77_56_.className = "PastScorigami";
        const _66_59_ = document.getElementById("66-59"); _66_59_.className = "PastScorigami";
        const _76_61_ = document.getElementById("76-61"); _76_61_.className = "PastScorigami";
        const _69_66_ = document.getElementById("69-66"); _69_66_.className = "PastScorigami";
    }
    if (output.innerHTML < "2016") {
        const _52_8_ = document.getElementById("52-8"); _52_8_.className = "Blank";
        const _77_10_ = document.getElementById("77-10"); _77_10_.className = "Blank";
        const _62_22_ = document.getElementById("62-22"); _62_22_.className = "Blank";
        const _66_27_ = document.getElementById("66-27"); _66_27_.className = "Blank";
        const _75_31_ = document.getElementById("75-31"); _75_31_.className = "Blank";
        const _54_35_ = document.getElementById("54-35"); _54_35_.className = "Blank";
        const _66_35_ = document.getElementById("66-35"); _66_35_.className = "Blank";
        const _54_39_ = document.getElementById("54-39"); _54_39_.className = "Blank";
        const _54_40_ = document.getElementById("54-40"); _54_40_.className = "Blank";
        const _62_42_ = document.getElementById("62-42"); _62_42_.className = "Blank";
        const _58_44_ = document.getElementById("58-44"); _58_44_.className = "Blank";
        const _65_44_ = document.getElementById("65-44"); _65_44_.className = "Blank";
        const _61_50_ = document.getElementById("61-50"); _61_50_.className = "Blank";
        const _55_53_ = document.getElementById("55-53"); _55_53_.className = "Blank";
        const _56_54_ = document.getElementById("56-54"); _56_54_.className = "Blank";
        const _68_55_ = document.getElementById("68-55"); _68_55_.className = "Blank";
        const _77_56_ = document.getElementById("77-56"); _77_56_.className = "Blank";
        const _66_59_ = document.getElementById("66-59"); _66_59_.className = "Blank";
        const _76_61_ = document.getElementById("76-61"); _76_61_.className = "Blank";
        const _69_66_ = document.getElementById("69-66"); _69_66_.className = "Blank";
    }

    //2017 Scorigami
    if (output.innerHTML == "2017") {
        const _64_17_ = document.getElementById("64-17"); _64_17_.className = "Scorigami";
        const _77_21_ = document.getElementById("77-21"); _77_21_.className = "Scorigami";
        const _61_31_ = document.getElementById("61-31"); _61_31_.className = "Scorigami";
        const _73_33_ = document.getElementById("73-33"); _73_33_.className = "Scorigami";
        const _57_35_ = document.getElementById("57-35"); _57_35_.className = "Scorigami";
        const _58_37_ = document.getElementById("58-37"); _58_37_.className = "Scorigami";
        const _66_37_ = document.getElementById("66-37"); _66_37_.className = "Scorigami";
        const _56_38_ = document.getElementById("56-38"); _56_38_.className = "Scorigami";
        const _64_43_ = document.getElementById("64-43"); _64_43_.className = "Scorigami";
        const _72_43_ = document.getElementById("72-43"); _72_43_.className = "Scorigami";
        const _56_44_ = document.getElementById("56-44"); _56_44_.className = "Scorigami";
        const _58_50_ = document.getElementById("58-50"); _58_50_.className = "Scorigami";
        const _67_50_ = document.getElementById("67-50"); _67_50_.className = "Scorigami";
        const _71_68_ = document.getElementById("71-68"); _71_68_.className = "Scorigami";
    }
    if (output.innerHTML > "2017") {
        const _64_17_ = document.getElementById("64-17"); _64_17_.className = "PastScorigami";
        const _77_21_ = document.getElementById("77-21"); _77_21_.className = "PastScorigami";
        const _61_31_ = document.getElementById("61-31"); _61_31_.className = "PastScorigami";
        const _73_33_ = document.getElementById("73-33"); _73_33_.className = "PastScorigami";
        const _57_35_ = document.getElementById("57-35"); _57_35_.className = "PastScorigami";
        const _58_37_ = document.getElementById("58-37"); _58_37_.className = "PastScorigami";
        const _66_37_ = document.getElementById("66-37"); _66_37_.className = "PastScorigami";
        const _56_38_ = document.getElementById("56-38"); _56_38_.className = "PastScorigami";
        const _64_43_ = document.getElementById("64-43"); _64_43_.className = "PastScorigami";
        const _72_43_ = document.getElementById("72-43"); _72_43_.className = "PastScorigami";
        const _56_44_ = document.getElementById("56-44"); _56_44_.className = "PastScorigami";
        const _58_50_ = document.getElementById("58-50"); _58_50_.className = "PastScorigami";
        const _67_50_ = document.getElementById("67-50"); _67_50_.className = "PastScorigami";
        const _71_68_ = document.getElementById("71-68"); _71_68_.className = "PastScorigami";
    }
    if (output.innerHTML < "2017") {
        const _64_17_ = document.getElementById("64-17"); _64_17_.className = "Blank";
        const _77_21_ = document.getElementById("77-21"); _77_21_.className = "Blank";
        const _61_31_ = document.getElementById("61-31"); _61_31_.className = "Blank";
        const _73_33_ = document.getElementById("73-33"); _73_33_.className = "Blank";
        const _57_35_ = document.getElementById("57-35"); _57_35_.className = "Blank";
        const _58_37_ = document.getElementById("58-37"); _58_37_.className = "Blank";
        const _66_37_ = document.getElementById("66-37"); _66_37_.className = "Blank";
        const _56_38_ = document.getElementById("56-38"); _56_38_.className = "Blank";
        const _64_43_ = document.getElementById("64-43"); _64_43_.className = "Blank";
        const _72_43_ = document.getElementById("72-43"); _72_43_.className = "Blank";
        const _56_44_ = document.getElementById("56-44"); _56_44_.className = "Blank";
        const _58_50_ = document.getElementById("58-50"); _58_50_.className = "Blank";
        const _67_50_ = document.getElementById("67-50"); _67_50_.className = "Blank";
        const _71_68_ = document.getElementById("71-68"); _71_68_.className = "Blank";
    }

    //2018 Scorigami
    if (output.innerHTML == "2018") {
        const _77_16_ = document.getElementById("77-16"); _77_16_.className = "Scorigami";
        const _72_19_ = document.getElementById("72-19"); _72_19_.className = "Scorigami";
        const _59_22_ = document.getElementById("59-22"); _59_22_.className = "Scorigami";
        const _62_30_ = document.getElementById("62-30"); _62_30_.className = "Scorigami";
        const _77_31_ = document.getElementById("77-31"); _77_31_.className = "Scorigami";
        const _66_33_ = document.getElementById("66-33"); _66_33_.className = "Scorigami";
        const _57_36_ = document.getElementById("57-36"); _57_36_.className = "Scorigami";
        const _50_37_ = document.getElementById("50-37"); _50_37_.className = "Scorigami";
        const _61_37_ = document.getElementById("61-37"); _61_37_.className = "Scorigami";
        const _62_39_ = document.getElementById("62-39"); _62_39_.className = "Scorigami";
        const _76_41_ = document.getElementById("76-41"); _76_41_.className = "Scorigami";
        const _55_42_ = document.getElementById("55-42"); _55_42_.className = "Scorigami";
        const _54_45_ = document.getElementById("54-45"); _54_45_.className = "Scorigami";
        const _63_49_ = document.getElementById("63-49"); _63_49_.className = "Scorigami";
        const _62_50_ = document.getElementById("62-50"); _62_50_.className = "Scorigami";
        const _62_59_ = document.getElementById("62-59"); _62_59_.className = "Scorigami";
        const _74_72_ = document.getElementById("74-72"); _74_72_.className = "Scorigami";
    }
    if (output.innerHTML > "2018") {
        const _77_16_ = document.getElementById("77-16"); _77_16_.className = "PastScorigami";
        const _72_19_ = document.getElementById("72-19"); _72_19_.className = "PastScorigami";
        const _59_22_ = document.getElementById("59-22"); _59_22_.className = "PastScorigami";
        const _62_30_ = document.getElementById("62-30"); _62_30_.className = "PastScorigami";
        const _77_31_ = document.getElementById("77-31"); _77_31_.className = "PastScorigami";
        const _66_33_ = document.getElementById("66-33"); _66_33_.className = "PastScorigami";
        const _57_36_ = document.getElementById("57-36"); _57_36_.className = "PastScorigami";
        const _50_37_ = document.getElementById("50-37"); _50_37_.className = "PastScorigami";
        const _61_37_ = document.getElementById("61-37"); _61_37_.className = "PastScorigami";
        const _62_39_ = document.getElementById("62-39"); _62_39_.className = "PastScorigami";
        const _76_41_ = document.getElementById("76-41"); _76_41_.className = "PastScorigami";
        const _55_42_ = document.getElementById("55-42"); _55_42_.className = "PastScorigami";
        const _54_45_ = document.getElementById("54-45"); _54_45_.className = "PastScorigami";
        const _63_49_ = document.getElementById("63-49"); _63_49_.className = "PastScorigami";
        const _62_50_ = document.getElementById("62-50"); _62_50_.className = "PastScorigami";
        const _62_59_ = document.getElementById("62-59"); _62_59_.className = "PastScorigami";
        const _74_72_ = document.getElementById("74-72"); _74_72_.className = "PastScorigami";
    }
    if (output.innerHTML < "2018") {
        const _77_16_ = document.getElementById("77-16"); _77_16_.className = "Blank";
        const _72_19_ = document.getElementById("72-19"); _72_19_.className = "Blank";
        const _59_22_ = document.getElementById("59-22"); _59_22_.className = "Blank";
        const _62_30_ = document.getElementById("62-30"); _62_30_.className = "Blank";
        const _77_31_ = document.getElementById("77-31"); _77_31_.className = "Blank";
        const _66_33_ = document.getElementById("66-33"); _66_33_.className = "Blank";
        const _57_36_ = document.getElementById("57-36"); _57_36_.className = "Blank";
        const _50_37_ = document.getElementById("50-37"); _50_37_.className = "Blank";
        const _61_37_ = document.getElementById("61-37"); _61_37_.className = "Blank";
        const _62_39_ = document.getElementById("62-39"); _62_39_.className = "Blank";
        const _76_41_ = document.getElementById("76-41"); _76_41_.className = "Blank";
        const _55_42_ = document.getElementById("55-42"); _55_42_.className = "Blank";
        const _54_45_ = document.getElementById("54-45"); _54_45_.className = "Blank";
        const _63_49_ = document.getElementById("63-49"); _63_49_.className = "Blank";
        const _62_50_ = document.getElementById("62-50"); _62_50_.className = "Blank";
        const _62_59_ = document.getElementById("62-59"); _62_59_.className = "Blank";
        const _74_72_ = document.getElementById("74-72"); _74_72_.className = "Blank";
    }

    //2019 Scorigami
    if (output.innerHTML == "2019") {
        const _76_5_ = document.getElementById("76-5"); _76_5_.className = "Scorigami";
        const _57_29_ = document.getElementById("57-29"); _57_29_.className = "Scorigami";
        const _53_39_ = document.getElementById("53-39"); _53_39_.className = "Scorigami";
        const _65_41_ = document.getElementById("65-41"); _65_41_.className = "Scorigami";
        const _59_51_ = document.getElementById("59-51"); _59_51_.className = "Scorigami";
        const _54_53_ = document.getElementById("54-53"); _54_53_.className = "Scorigami";
        const _67_63_ = document.getElementById("67-63"); _67_63_.className = "Scorigami";
    }
    if (output.innerHTML > "2019") {
        const _76_5_ = document.getElementById("76-5"); _76_5_.className = "PastScorigami";
        const _57_29_ = document.getElementById("57-29"); _57_29_.className = "PastScorigami";
        const _53_39_ = document.getElementById("53-39"); _53_39_.className = "PastScorigami";
        const _65_41_ = document.getElementById("65-41"); _65_41_.className = "PastScorigami";
        const _59_51_ = document.getElementById("59-51"); _59_51_.className = "PastScorigami";
        const _54_53_ = document.getElementById("54-53"); _54_53_.className = "PastScorigami";
        const _67_63_ = document.getElementById("67-63"); _67_63_.className = "PastScorigami";
    }
    if (output.innerHTML < "2019") {
        const _76_5_ = document.getElementById("76-5"); _76_5_.className = "Blank";
        const _57_29_ = document.getElementById("57-29"); _57_29_.className = "Blank";
        const _53_39_ = document.getElementById("53-39"); _53_39_.className = "Blank";
        const _65_41_ = document.getElementById("65-41"); _65_41_.className = "Blank";
        const _59_51_ = document.getElementById("59-51"); _59_51_.className = "Blank";
        const _54_53_ = document.getElementById("54-53"); _54_53_.className = "Blank";
        const _67_63_ = document.getElementById("67-63"); _67_63_.className = "Blank";
    }

    //2020 Scorigami
    if (output.innerHTML == "2020") {
        const _70_20_ = document.getElementById("70-20"); _70_20_.className = "Scorigami";
        const _57_31_ = document.getElementById("57-31"); _57_31_.className = "Scorigami";
        const _43_32_ = document.getElementById("43-32"); _43_32_.className = "Scorigami";
        const _65_35_ = document.getElementById("65-35"); _65_35_.className = "Scorigami";
        const _69_35_ = document.getElementById("69-35"); _69_35_.className = "Scorigami";
        const _58_46_ = document.getElementById("58-46"); _58_46_.className = "Scorigami";
        const _53_48_ = document.getElementById("53-48"); _53_48_.className = "Scorigami";
        const _59_53_ = document.getElementById("59-53"); _59_53_.className = "Scorigami";
        const _63_56_ = document.getElementById("63-56"); _63_56_.className = "Scorigami";
    }
    if (output.innerHTML > "2020") {
        const _70_20_ = document.getElementById("70-20"); _70_20_.className = "PastScorigami";
        const _57_31_ = document.getElementById("57-31"); _57_31_.className = "PastScorigami";
        const _43_32_ = document.getElementById("43-32"); _43_32_.className = "PastScorigami";
        const _65_35_ = document.getElementById("65-35"); _65_35_.className = "PastScorigami";
        const _69_35_ = document.getElementById("69-35"); _69_35_.className = "PastScorigami";
        const _58_46_ = document.getElementById("58-46"); _58_46_.className = "PastScorigami";
        const _53_48_ = document.getElementById("53-48"); _53_48_.className = "PastScorigami";
        const _59_53_ = document.getElementById("59-53"); _59_53_.className = "PastScorigami";
        const _63_56_ = document.getElementById("63-56"); _63_56_.className = "PastScorigami";
    }
    if (output.innerHTML < "2020") {
        const _70_20_ = document.getElementById("70-20"); _70_20_.className = "Blank";
        const _57_31_ = document.getElementById("57-31"); _57_31_.className = "Blank";
        const _43_32_ = document.getElementById("43-32"); _43_32_.className = "Blank";
        const _65_35_ = document.getElementById("65-35"); _65_35_.className = "Blank";
        const _69_35_ = document.getElementById("69-35"); _69_35_.className = "Blank";
        const _58_46_ = document.getElementById("58-46"); _58_46_.className = "Blank";
        const _53_48_ = document.getElementById("53-48"); _53_48_.className = "Blank";
        const _59_53_ = document.getElementById("59-53"); _59_53_.className = "Blank";
        const _63_56_ = document.getElementById("63-56"); _63_56_.className = "Blank";
    }

    //2021 Scorigami
    if (output.innerHTML == "2021") {
        const _60_10_ = document.getElementById("60-10"); _60_10_.className = "Scorigami";
        const _59_18_ = document.getElementById("59-18"); _59_18_.className = "Scorigami";
        const _64_31_ = document.getElementById("64-31"); _64_31_.className = "Scorigami";
        const _47_32_ = document.getElementById("47-32"); _47_32_.className = "Scorigami";
        const _62_33_ = document.getElementById("62-33"); _62_33_.className = "Scorigami";
        const _59_39_ = document.getElementById("59-39"); _59_39_.className = "Scorigami";
        const _66_49_ = document.getElementById("66-49"); _66_49_.className = "Scorigami";
        const _55_50_ = document.getElementById("55-50"); _55_50_.className = "Scorigami";
        const _70_52_ = document.getElementById("70-52"); _70_52_.className = "Scorigami";
        const _57_56_ = document.getElementById("57-56"); _57_56_.className = "Scorigami";
        const _70_56_ = document.getElementById("70-56"); _70_56_.className = "Scorigami";
    }
    if (output.innerHTML > "2021") {
        const _60_10_ = document.getElementById("60-10"); _60_10_.className = "PastScorigami";
        const _59_18_ = document.getElementById("59-18"); _59_18_.className = "PastScorigami";
        const _64_31_ = document.getElementById("64-31"); _64_31_.className = "PastScorigami";
        const _47_32_ = document.getElementById("47-32"); _47_32_.className = "PastScorigami";
        const _62_33_ = document.getElementById("62-33"); _62_33_.className = "PastScorigami";
        const _59_39_ = document.getElementById("59-39"); _59_39_.className = "PastScorigami";
        const _66_49_ = document.getElementById("66-49"); _66_49_.className = "PastScorigami";
        const _55_50_ = document.getElementById("55-50"); _55_50_.className = "PastScorigami";
        const _70_52_ = document.getElementById("70-52"); _70_52_.className = "PastScorigami";
        const _57_56_ = document.getElementById("57-56"); _57_56_.className = "PastScorigami";
        const _70_56_ = document.getElementById("70-56"); _70_56_.className = "PastScorigami";
    }
    if (output.innerHTML < "2021") {
        const _60_10_ = document.getElementById("60-10"); _60_10_.className = "Blank";
        const _59_18_ = document.getElementById("59-18"); _59_18_.className = "Blank";
        const _64_31_ = document.getElementById("64-31"); _64_31_.className = "Blank";
        const _47_32_ = document.getElementById("47-32"); _47_32_.className = "Blank";
        const _62_33_ = document.getElementById("62-33"); _62_33_.className = "Blank";
        const _59_39_ = document.getElementById("59-39"); _59_39_.className = "Blank";
        const _66_49_ = document.getElementById("66-49"); _66_49_.className = "Blank";
        const _55_50_ = document.getElementById("55-50"); _55_50_.className = "Blank";
        const _70_52_ = document.getElementById("70-52"); _70_52_.className = "Blank";
        const _57_56_ = document.getElementById("57-56"); _57_56_.className = "Blank";
        const _70_56_ = document.getElementById("70-56"); _70_56_.className = "Blank";
    }

    //2022 Scorigami
    if (output.innerHTML == "2022") {
        const _52_32_ = document.getElementById("52-32"); _52_32_.className = "Scorigami";
        const _63_61_ = document.getElementById("63-61"); _63_61_.className = "Scorigami";
        const _77_63_ = document.getElementById("77-63"); _77_63_.className = "Scorigami";
    }
    if (output.innerHTML > "2022") {
        const _52_32_ = document.getElementById("52-32"); _52_32_.className = "PastScorigami";
        const _63_61_ = document.getElementById("63-61"); _63_61_.className = "PastScorigami";
        const _77_63_ = document.getElementById("77-63"); _77_63_.className = "PastScorigami";
    }
    if (output.innerHTML < "2022") {
        const _52_32_ = document.getElementById("52-32"); _52_32_.className = "Blank";
        const _63_61_ = document.getElementById("63-61"); _63_61_.className = "Blank";
        const _77_63_ = document.getElementById("77-63"); _77_63_.className = "Blank";
    }

    //2023 Scorigami
    if (output.innerHTML == "2023") {
        const _48_33_ = document.getElementById("48-33"); _48_33_.className = "Scorigami";
        const _55_49_ = document.getElementById("55-49"); _55_49_.className = "Scorigami";
        const _59_25_ = document.getElementById("59-25"); _59_25_.className = "Scorigami";
        const _59_50_ = document.getElementById("59-50"); _59_50_.className = "Scorigami";
        const _69_45_ = document.getElementById("69-45"); _69_45_.className = "Scorigami";
        const _77_34_ = document.getElementById("77-34"); _77_34_.className = "Scorigami";
        const _78_28_ = document.getElementById("78-28"); _78_28_.className = "Scorigami";
        const _81_7_ = document.getElementById("81-7"); _81_7_.className = "Scorigami";
    }
    if (output.innerHTML > "2023") {
        const _48_33_ = document.getElementById("48-33"); _48_33_.className = "PastScorigami";
        const _55_49_ = document.getElementById("55-49"); _55_49_.className = "PastScorigami";
        const _59_25_ = document.getElementById("59-25"); _59_25_.className = "PastScorigami";
        const _59_50_ = document.getElementById("59-50"); _59_50_.className = "PastScorigami";
        const _69_45_ = document.getElementById("69-45"); _69_45_.className = "PastScorigami";
        const _77_34_ = document.getElementById("77-34"); _77_34_.className = "PastScorigami";
        const _78_28_ = document.getElementById("78-28"); _78_28_.className = "PastScorigami";
        const _81_7_ = document.getElementById("81-7"); _81_7_.className = "PastScorigami";
    }
    if (output.innerHTML < "2023") {
        const _48_33_ = document.getElementById("48-33"); _48_33_.className = "Blank";
        const _55_49_ = document.getElementById("55-49"); _55_49_.className = "Blank";
        const _59_25_ = document.getElementById("59-25"); _59_25_.className = "Blank";
        const _59_50_ = document.getElementById("59-50"); _59_50_.className = "Blank";
        const _69_45_ = document.getElementById("69-45"); _69_45_.className = "Blank";
        const _77_34_ = document.getElementById("77-34"); _77_34_.className = "Blank";
        const _78_28_ = document.getElementById("78-28"); _78_28_.className = "Blank";
        const _81_7_ = document.getElementById("81-7"); _81_7_.className = "Blank";
    }

    //2024 Scorigami
    if (output.innerHTML == "2024") {
        const _61_39_ = document.getElementById("61-39"); _61_39_.className = "Scorigami";
        const _66_20_ = document.getElementById("66-20"); _66_20_.className = "Scorigami";
        const _87_10_ = document.getElementById("87-10"); _87_10_.className = "Scorigami";
        const _54_52_ = document.getElementById("54-52"); _54_52_.className = "Scorigami";
        const _70_50_ = document.getElementById("70-50"); _70_50_.className = "Scorigami";
        const _71_20_ = document.getElementById("71-20"); _71_20_.className = "Scorigami";
        const _50_34_ = document.getElementById("50-34"); _50_34_.className = "Scorigami";
    }
    if (output.innerHTML > "2024") {
        const _61_39_ = document.getElementById("61-39"); _61_39_.className = "PastScorigami";
        const _66_20_ = document.getElementById("66-20"); _66_20_.className = "PastScorigami";
        const _87_10_ = document.getElementById("87-10"); _87_10_.className = "PastScorigami";
        const _54_52_ = document.getElementById("54-52"); _54_52_.className = "PastScorigami";
        const _70_50_ = document.getElementById("70-50"); _70_50_.className = "PastScorigami";
        const _71_20_ = document.getElementById("71-20"); _71_20_.className = "PastScorigami";
        const _50_34_ = document.getElementById("50-34"); _50_34_.className = "PastScorigami";
    }
    if (output.innerHTML < "2024") {
        const _61_39_ = document.getElementById("61-39"); _61_39_.className = "Blank";
        const _66_20_ = document.getElementById("66-20"); _66_20_.className = "Blank";
        const _87_10_ = document.getElementById("87-10"); _87_10_.className = "Blank";
        const _54_52_ = document.getElementById("54-52"); _54_52_.className = "Blank";
        const _70_50_ = document.getElementById("70-50"); _70_50_.className = "Blank";
        const _71_20_ = document.getElementById("71-20"); _71_20_.className = "Blank";
        const _50_34_ = document.getElementById("50-34"); _50_34_.className = "Blank";
    }

    //20XX Scorigami
    // if (output.innerHTML == "20XX") {
        // const _X_X_ = document.getElementById("X-X"); _X_X_.className = "Scorigami";
    // }
    // if (output.innerHTML > "20XX") {
        // const _X_X_ = document.getElementById("X-X"); _X_X_.className = "PastScorigami";
    // }
    // if (output.innerHTML < "20XX") {
        // const _X_X_ = document.getElementById("X-X"); _X_X_.className = "Blank";
    // }

}

