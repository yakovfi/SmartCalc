//yakov finkelshtein project
let jq = 'init';
let flagInit = false;
jqry(jq);
let flagEnglish = true;
let exp = '';
let str = '';
let strr = '';
let omegaFlaf = false;
let subSymbol = ''; //משתנה ששומר את הסימן(מוכל/שווה
let comma = false; //פסיק
let initMode = true; //מצב איתחול
let calcMode = false; //מצב חישוב
let relatMode = false; //מצב מכיל/מוכל/שייך/לא שייך
let statisticMode = false;
let flag = false;
let saveGrop;
let index_of_org;
let flagComma = false; //למנוע כפל פסיקים
let flagFirstComma = false; //למנוע פסיק לפני איבר הראשון
let temp = 0;
let flagSameName = false;
let preArr = []; //המערך הקודם
let isPre = false; // דגל השומר האם הוקלד לפני הפעולה קבוצה
let arr = [];
let res; //תוצאה
let flagRes = false; // דגל המסמן האם נכנסנו לפונקציה של התוצאה
let flagAction = false; //דגל המסמן האם נכנסנו לפונקציה של הפעולה
let typeOfAct = ''; //סוג הפעולה: איחוד, חיתוך וכו
let flagYes = false; //דגל ששומר אם לפחות פעם אחת האיבר מופיע
let flagNo = false; // דגל ששומר אם לפחות פעם אחת האיבר לא מופיע
let flagIn = false;
let countOfNotExist = 0;
let firstTimeOfRes = true;
let emptyOr = false;
let index_jq;
let isEmpty = true;
//-------סטטיסטיקה משתנים-------------------------------------
let p = ''; //שומר איזה סוג של הסתברות לחצנו במחשבון.
let flagStatistic = false;
let preArrStatistic = [];
let preOr;
statFlag = false;
//------------------------------------------------
//________________________
let nameArr = new Array(); //מערך השומר את כל שמות הקבוצות שהוקלדו
let indexNameArr = 0;
//________________________
let subArr = new Array(); // מערך הקבוצה
let indexSubArr = 0;
//________________________
let exists = new Array(); // מערך השומר את שמות הקבוצות שאיבר מסויים שייך אליהם
let indexExists = 0;
//________________________
let isSubArr = new Array(); // מערך המכיל בתוכו את הקוצות אליו הקבוצה שבודקים מוכלת/שווה אליהם
let isSubArrSymble = new Array(); //יצירת מערך של סימני מוכל,שווה
let indexIsSubArr = 0;
let arrEqual = []; //יצירת מערך של סימני-שווה
let arrSub = []; //יצירת מערך של סימני-מוכל
let arrEqualFlag = false;
let arrSubFlag = false;
let printStrEqual = '';
let printStrSub = '';
let orJqPre = '';

//_________________________
let noExists = new Array(); // מערך השומר את שמות הקבוצות שאיבר מסויים שייך אליהם
let indexNoExists = 0;
//________________________
let textview = document.forms['myForm']['textview'];
textview.value = 'Init mode'; // ברירת מחדל
//--------------------/מצב אתחול/------------------------------------------------
function init() {
    if (!initMode) {
        jq = 'init';
        jqry(jq);
        initMode = true;
        calcMode = false;
        relatMode = false;
        statisticMode = false;
        textview.value = 'Init mode';
        resetModes();
    }
}
//--------------------/מצב חישוב/------------------------------------------------
function calc() {
    if (!calcMode) {
        jq = 'calc';
        jqry(jq);
        initMode = false;
        calcMode = true;
        relatMode = false;
        statisticMode = false;
        textview.value = 'Calc mode';
        resetModes();
    }
}
//-------------------/מצב יחסים/--------------------------------------------------
function relations() {
    if (!relatMode) {
        jq = 'rela';
        jqry(jq);
        initMode = false;
        calcMode = false;
        statisticMode = false;
        relatMode = true;
        textview.value = ' Relations mode';
        resetModes();

    }
}
//-------------------/מצב הסתברות/--------------------------------------------------
function statistic() {
    if (omegaFlaf) {
        if (!statisticMode) {
            jq = 'stat';
            jqry(jq);
            statisticMode = true;
            initMode = false;
            calcMode = false;
            relatMode = false;
            textview.value = ' Statistic mode';
            resetModes();

        }
    }
    else {
        alert("you are need omega group");
    }
}
//---------------------------------------------------------------------------------------
function resetModes() {
    flagRes = false;
    firstTimeOfRes = true;
    exp = '';
    str = '';
    strr = '';
    subSymbol = '';
    JqGrop(exp);
}
//--------------------------/jqury/-----------------------------------------------------
function jqry(strJq) {
    if (strJq === 'init') {
        // if (!flagInit) {
        //     // $(".groups").fadeTo("slow", 0.3);
        // }
        flagInit = true;
        $(".omega").fadeTo("slow", 1);
        $(".symbol").fadeTo("slow", 0.3);
        $(".empty").fadeTo("slow", 0.3);
        $(".ex").fadeTo("slow", 0.3);
        $(".orangeIn").fadeTo("slow", 1);
        $(".comma").fadeTo("slow", 1);
        $(".organs").fadeTo("slow", 1);
        $(".calcM").fadeTo("slow", 1); // מחזיר את רמת האטימות לכפתור
        $(".initM").fadeTo("slow", 0.3); // רמת אטימות לכפתור
        $(".ratioM").fadeTo("slow", 1); // מחזיר את רמת האטימות לכפתור
        $(".statisticM").fadeTo("slow", 1);

    } else if (strJq === 'calc') {
        $(".omega").fadeTo("slow", 1);
        $(".ex").fadeTo("slow", 0.3);
        $(".orangeIn").fadeTo("slow", 0.3);
        $(".comma").fadeTo("slow", 0.3);
        $(".organs").fadeTo("slow", 0.3);
        $(".symbol").fadeTo("slow", 1);
        $(".empty").fadeTo("slow", 1);
        $(".initM").fadeTo("slow", 1);
        $(".calcM").fadeTo("slow", 0.3);
        $(".ratioM").fadeTo("slow", 1);
        $(".statisticM").fadeTo("slow", 1);
    } else if (strJq === "rela") {
        $(".omega").fadeTo("slow", 1);
        $(".symbol").fadeTo("slow", 0.3);
        $(".orangeIn").fadeTo("slow", 0.3);
        $(".comma").fadeTo("slow", 0.3);
        $(".ex").fadeTo("slow", 1);
        $(".organs").fadeTo("slow", 1);
        $(".empty").fadeTo("slow", 1);
        $(".initM").fadeTo("slow", 1);
        $(".calcM").fadeTo("slow", 1);
        $(".ratioM").fadeTo("slow", 0.3);
        $(".statisticM").fadeTo("slow", 1);
    }
    else if (strJq === "stat") {
        $(".omega").fadeTo("slow", 1);
        $(".symbol").fadeTo("slow", 0.3);
        $(".symbolP").fadeTo("slow", 1);
        $(".orangeIn").fadeTo("slow", 0.3);
        $(".comma").fadeTo("slow", 0.3);
        $(".ex").fadeTo("slow", 1);
        $(".organs").fadeTo("slow", 0.3);
        $(".empty").fadeTo("slow", 1);
        $(".initM").fadeTo("slow", 1);
        $(".calcM").fadeTo("slow", 1);
        $(".ratioM").fadeTo("slow", 1);
        $(".statisticM").fadeTo("slow", 0.3);

    }
    else if (strJq === "Ω") {
        $(".groups").fadeTo("slow", 1);
        $(".omega").fadeTo("slow", 0.3);
    }
}
//-------------------------------------------------------
function JqGrop(orJq) {

    let txt = $(".textview").val();
    index_jq = findIndex(orJq); // מוצא היכן נמצא הקבוצה במערך
    let name = 'arr' + index_jq;

    $(name).css({
        "background-color": "rgb(114, 114, 100)",

        // "margin": "40px",
        // "border-radius": "70px",
        // "padding": "40px"
    });
    if (orJqPre != '')
        JqGropPre(orJqPre)
    orJqPre = orJq;
}
//-----------------------------------------------------------------------------------
function JqGropPre(orJqPre) {
    let txt = $(".textview").val();
    index_jq = findIndex(orJqPre); // מוצא היכן נמצא הקבוצה במערך
    let name = 'arr' + index_jq;

    $(name).css({
        "font-weight": "bold",
        "height": "20px",
        "border-radius": "20px",
        "width": "107px",
        "background-color": "#C7C7B0",
        "font-size": "24px",
        "margin": "10px",
        "padding": "10px",
        "box-shadow": "10px 10px 15px 5px #111"
    });
}
//-------------------------/הקלדת שם הקבוצה/-------------------------------------------
function organ(or) {
    // initMode{(

    flagSameName = false;
    let flagOr = false;
    if (initMode) {
        exp = or;
        if (or != 'Ø') {
            str = '';
            let index;
            for (let i = 0; i < nameArr.length; i++) {
                if (nameArr[i] === or) {
                    flagOr = true;
                    index = i;
                }
            }
            if (flagOr === false) { //אם לא קים שם זהה לשם הקבוצה
                nameArr[indexNameArr] = or;
            } else { //אם כבר הוקלד שם הקבוצה אז נדרוס
                flagSameName = true;
                nameArr[index] = or;
                indexNameArr--;
            }
            index_of_org = findIndex(or); //שומר את מיקום האיבר במערך
            textview.value = or + '=' + '{';
            flag = true;
            saveGrop = textview.value;
        }
    } else if (calcMode && arr.length > 0 && isTyped(or)) { // } calcMode{
        JqGrop(or);
        flagAction = false;
        index_of_org = findIndex(or);
        exp = or;
        if (!isPre) { // אם לא נלחץ כפתור פעולה
            if (or === 'Ø') {
                emptyOr = true;
            } else {
                emptyOr = false;
            }
            textview.value = exp;
            if (flagRes) { //אם נרשום במחשבון פעמיים אז נדרוס את התוצאה
                resetModes();
                flagRes = false;
                organ(or);
            }
        } else { // אם נלחץ כפתור פעולה
            let arrTemp = new Array(); //יצירת מערך ריק
            if (emptyOr) { // אם נלחץ קבוצה ריקה לפני לחיצת הפעולה
                if (or === 'Ø') //אם נלחץ בנוסף גם לאחר בפעולה קבוצה ריקה
                {
                    res = result(arrTemp, arrTemp);
                } else {
                    index_of_org = findIndex(or);
                    res = result(arrTemp, arr[index_of_org]);
                }
            } else if (or === 'Ø') { // אחרת אם נלחץ רק לאחר הפעולה קבוצה ריקה
                res = result(preArr, arrTemp);
            } else {
                index_of_org = findIndex(or);
                res = result(preArr, arr[index_of_org]);
            }
            textview.value = 'result = {' + res + '}';
            firstTimeOfRes = false;
        }
        if (textview.value === "result = {}")
            textview.value = 'result = Ø';
        isPre = false;
        // JqGrop(or);
    } else if (relatMode) { // } relatMode{
        exp = or;
        if (or === 'Ø') { // הקבוצה הריקה מוכלת בכל הקבוצות
            textview.value = or + '⊆' + nameArr;
        } else {
            isSubFunc(or);
            if (countOfNotExist === arr.length) {
                textview.value = or + ' is not subgroup';
                countOfNotExist = 0;
            } else {
                countOfNotExist = 0;
                let ind = findIndex(or);
                let space = '';
                if (arrEqualFlag) {
                    printStrEqual = or + '=';
                }
                if (arrSubFlag) {
                    printStrSub = or + '⊆';
                }
                if (arrSubFlag && arrEqualFlag) {
                    printStrSub = or + '⊆';
                    printStrEqual = or + '=';
                    space = '|';
                }
                textview.value = printStrSub + arrSub + space + printStrEqual + arrEqual;
                arrSubFlag = false;
                arrEqualFlag = false;
                subSymbolFlag = false;
                printStrEqual = '';
                printStrSub = '';
                arrSub = [];
                arrEqual = [];
            }
            isSubArrSymble = new Array();
            isSubArr = new Array();
            indexIsSubArr = 0; //}
            JqGrop(or);
        }
    }
    //-------------סטטיסטיקה--------------------
    else if (statisticMode) {// 
        if (statFlag) {
            if (p === 'P(A)') {
                let tempIndex = findIndex(or);//מאורע --------------------------כפל קוד :צריך לטפל (שלושת השורות)!!!!!!!!!!!!!!!!!!!!!1                
                let array1 = newArr(arr[0]);// איברי האומגה
                let array2 = newArr(arr[tempIndex]);

                textview.value += or + ") = ";
                let isSub = isSubFuncOfOmega(or);
                //alert(isSub);
                if (isSub === false) {
                    textview.value += '0';
                }
                else {
                    let num1 = array1.length;
                    // alert(num1);
                    let num2 = array2.length;
                    // alert(num2);
                    let resultP = num2 / num1;
                    //  alert(resultP);
                    textview.value += resultP;
                }
                statFlag = false;
            }
            else {
                if (flagStatistic) {
                    let tempIndex = findIndex(or);//מאורע --------------------------כפל קוד :צריך לטפל (2 השורות)!!!!!!!!!!!!!!!!!!!!!1  
                    let array2 = newArr(arr[tempIndex]);
                    textview.value += or + ") = P(" + preOr + ")∩P(" + or + ")/P(" + or + ") = ";
                    let cutting = cuttingGroups(array2, preArrStatistic);
                    let sizeCuting = cutting.length;
                    let sizeB = array2.length;
                    let resultP = sizeCuting / sizeB;
                    if (isSubFuncOfOmega(preOr) === false || isSubFuncOfOmega(or) === false) {
                        textview.value += '0';
                    }
                    else {
                        textview.value += resultP;
                    }
                    statFlag = false;
                    flagStatistic = false;
                }
                else {
                    textview.value += or + "|";
                    flagStatistic = true;
                    index_of_org = findIndex(or);
                    preArrStatistic = arr[index_of_org];
                    preOr = or;
                    // alert(preArrStatistic);
                }
            }
        }
    }
}
//----------------------------/הקלדת איברי הקבוצה/--------------------------------------------
function addingOrgan(org) {
    //  if (org === 'Ø')
    if (!flagEnglish) {// אם עברנו לעיברית
        let templer = printLang(org);
        org = templer;
    }
    if (!relatMode) {
        isEmpty = false; //הוקלד איבר לקבוצה
        flagComma = false;
        if (flag) {
            if (comma) {
                subArr[indexSubArr] = str;
                indexSubArr++;
                str = '';
                comma = false;
            }
            str = str + org;
            flagFirstComma = true;
            textview.value = saveGrop + str;
        }
    } else if (relatMode && arr.length > 0) {
        strr += org;
        flagIn = true;
        textview.value = strr;
    }
}
//------------פונקציה המקבלת קלט ובודקת האם הוא ספרה בין 0-9---------------------
function isNum(o) {
    for (let i = 0; i < 10; i++) {
        if (i === o) {
            return true
        }
    }
    return false;
}
// //--------------------------------תת קבוצה של קבוצה -----------------------------------------------
function isSubFunc(or) {
    let tempIndex = findIndex(or);
    let array1 = newArr(arr[tempIndex]);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count = 0;
        if (i != tempIndex) {
            let size = arr[i].length;
            for (let j = 0; j < size; j++) {
                for (let k = 0; k < array1.length; k++) {
                    if (arr[i][j] === array1[k]) {
                        count++;
                    }
                }
            }
            if (count === array1.length) { //אם כל איברי המערך מוכלים בקבוצה במיקום ה-איי
                if (count === size) {
                    subSymbol = '=';
                    arrEqualFlag = true;
                } else {
                    subSymbol = '⊆';
                    arrSubFlag = true;
                }
                isSubArr[indexIsSubArr] = nameArr[i];
                isSubArrSymble[indexIsSubArr] = subSymbol;
                indexIsSubArr++;
            } else {
                countOfNotExist++;
            }
        } else {
            countOfNotExist++;
        }
    }
    for (let i = 0; i < isSubArrSymble.length; i++) {
        if (isSubArrSymble[i] === '=') {
            arrEqual.push(isSubArr[i]);
        } else {
            arrSub.push(isSubArr[i]);
        }
    }
}
//-------------/ פונקציה הבודקת האם מאורע הוא תת קבוצה של מרחב המדגם/------------/
function isSubFuncOfOmega(or) {
    let isSub = true;
    let count = 0;
    let tempIndex = findIndex(or);//מאורע
    let array1 = newArr(arr[0]);// איברי האומגה
    // alert(array1);
    // alert(array1.length);
    let array2 = newArr(arr[tempIndex]);
    // alert(array2);
    // alert(array2.length);
    if (array1.length >= array2.length) {
        for (let i = 0; i < array2.length; i++) {
            for (let j = 0; j < array1.length; j++) {
                if (array1[j] === array2[i]) {
                    count++;
                }
            }
            if (count === 0) {
                isSub = false;
                break;
            }
            count = 0;
        }
    }
    else {
        isSub = false;
    }

    return isSub;
}
//--------------------------------------
function statisticAction(s) {

    if (statisticMode) {
        statFlag = true;
        if (s === 'P(A)') {
            p = 'P(A)';
        }
        else if (s === 'P(A|B)') {
            p = 'P(A|B)';
        }
        textview.value = "P("
    }
}
//-------------------------/ כפתור המחזיר האם האיבר קיים/לא קיים ומציגה על מסך המחשבון/--------
function isExist() {
    if (relatMode && flagIn) {
        flagIn = false;
        belongs(strr);
        let yesStr = '';
        let noStr = '';
        let commaStr = '';
        if (flagYes) {
            yesStr = strr + '∈';
        }
        if (flagNo) {
            noStr = strr + '∉';
        }
        if (flagYes && flagNo) {
            commaStr = '|';
        }
        textview.value = yesStr + exists + commaStr + noStr + noExists;
        flagYes = false;
        flagNo = false;
        exists = new Array(); // מערך השומר את שמות הקבוצות שאיבר מסויים שייך אליהם
        indexExists = 0;
        noExists = new Array(); // מערך השומר את שמות הקבוצות שאיבר מסויים שייך אליהם
        indexNoExists = 0;
        strr = '';
    }
}
//-------------------/פונקציה הבודקת האם האיבר קיים או לא קים בקבוצות אשר הוקלדו במחשבון/-----------------------------------------
function belongs(stri) {
    for (let i = 0; i < arr.length; i++) {
        let size = arr[i].length;
        let flagExist = false;
        for (let j = 0; j < size; j++) {
            if (arr[i][j] === stri) {
                flagExist = true;
                exists[indexExists] = nameArr[i];
                indexExists++;
                flagYes = true;
            }
        }
        if (flagExist === false) {
            noExists[indexNoExists] = nameArr[i];
            indexNoExists++;
            flagNo = true;
        }
    }
}
//----------------------------/הקלדת פסיק/----------------------------------------
function iSComma(comm) {
    if (!flagComma && flagFirstComma) {
        comma = true;
        textview.value += ',';
        saveGrop = textview.value;
        flagComma = true;
    }
}
//------------------------------------------------------------------------
function result(arr1, arr2) {
    flagRes = true;
    if (typeOfAct === '∩') {
        return cuttingGroups(arr1, arr2);
    } else if (typeOfAct === '∪') {
        return groupUnification(arr1, arr2);
    } else if (typeOfAct === '-') {
        return subtractionOfGroups(arr1, arr2);
    } else if (typeOfAct === '⨁') { //הפרש סימטרי :A⨁B = (A\B) ∪ (B\A)
        return symmetricDifference(arr1, arr2);
    } else if (typeOfAct === '×') { //מכפלה קרטזית
        return cartesianProduct(arr1, arr2);
    }
}
//-----------------------------/מכפלה קרטזית/----------------------------
function cartesianProduct(arr1, arr2) {
    let strCartesArr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            strCartesArr.push('(' + arr1[i] + ',' + arr2[j] + ')');
        }
    }
    return strCartesArr;
}
//-----------------------------/הפרש סימטרי/-----------------------------
function symmetricDifference(arr1, arr2) {
    let temp1SymmetricArray = subtractionOfGroups(arr1, arr2);
    let temp2SymmetricArray = subtractionOfGroups(arr2, arr1);
    let symmetricArray = groupUnification(temp1SymmetricArray, temp2SymmetricArray);
    return symmetricArray;
}
//-----------------------------/פעולת חיסור/-----------------------------
function subtractionOfGroups(arr1, arr2) {
    let resu = [];
    let newArr1 = newArr(arr1); //להוריד כפילויות
    let newArr2 = newArr(arr2); //להוריד כפילויות
    let k = 0;
    let flaging = false;
    for (let i = 0; i < newArr1.length; i++) {
        flaging = false;
        for (let j = 0; j < newArr2.length; j++) {
            if (newArr2[j] === newArr1[i]) {
                flaging = true;
            }
        }
        if (!flaging) {
            resu[k] = newArr1[i];
            k++;
        }
    }
    return resu;
}
//-----------------------------/פעולת חיתוך/-----------------------------
function cuttingGroups(arr1, arr2) {
    let resu = [];
    let newArr1 = newArr(arr1);
    let newArr2 = newArr(arr2);
    let isLonger = longer(newArr1, newArr2); //האם אורך המערך הראשון גדול מבין ה2
    let k = 0;
    if (isLonger) {
        for (let i = 0; i < newArr1.length; i++) {
            for (let j = 0; j < newArr2.length; j++) {
                if (newArr1[i] === newArr2[j]) {
                    resu[k] = newArr2[j];
                    k++;
                }
            }
        }
    } else {
        for (let i = 0; i < newArr2.length; i++) {
            for (let j = 0; j < newArr1.length; j++) {
                if (newArr2[i] === newArr1[j]) {
                    resu[k] = newArr1[j];
                    k++;
                }
            }
        }
    }
    newArr(resu); //לאחר החיתוך נרצה למחוק כפילויות
    return resu;
}
//------------------------------/פעולת איחוד/-------------------------------------------------
function groupUnification(arr1, arr2) {
    let resu = [];
    let tempResu = [];
    let isLonger = longer(arr1, arr2); //האם אורך המערך הראשון גדול מבין ה2
    let k = 0;
    for (let i = 0; i < arr1.length; i++) {
        tempResu[k] = arr1[i];
        k++;
    }
    for (let i = 0; i < arr2.length; i++) {
        tempResu[k] = arr2[i];
        k++;
    }
    resu = newArr(tempResu);
    return resu;
}
//-------------/מחזיר האם אורך המערך הראשון גדול מבין ה2/--------------------------
function longer(arr1, arr2) {
    if (arr1.length >= arr2.length) {
        return true;
    } else {
        return false;
    }
}
//---------------------------/הקלדת פעולה/---------------------------------------------
function action(act) {
    if (calcMode && !flagAction) {
        typeOfAct = act; // משתנה השומר את סוג הפעולה
        if (!firstTimeOfRes) {
            exp = 'result' + act;
        } else {
            exp += act;
        }
        textview.value = exp;
        preArr = arr[index_of_org];
        if (flagRes) { //אם כבר היה חישוב ראשון אז חישוב הבא יהיה עם התוצאה הקודמת
            preArr = res;
        }
        isPre = true;
        flagAction = true;
    }
}
//--------------------------------------------------------------------
function findIndex(or) { //פונקציה שמוצאת את אינדקס תא האיבר

    for (let i = 0; i < nameArr.length; i++) {
        if (nameArr[i] === or) {
            return i;
        }
    }
}
//---------------------/פונקציה המקבלת קבוצה ובודקת האם היא הוקלדה/--------------------
function isTyped(or) {
    if (or === 'Ø') {
        return true;
    }
    for (let i = 0; i < nameArr.length; i++) {
        if (nameArr[i] === or) {
            return true;
        }
    }
    return false;
}
//-------------------/  פונקציה המקבלת מערך ומוחקת כפל איברים ומחזירה מערך חדש/------------------
function newArr(a) {
    let resu = [];
    let flagIsSame = false;
    let k = 0;
    let size = a.length - 1;
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                flagIsSame = true;
            }
        }
        if (!flagIsSame) {
            resu[k] = a[i];
            k++;
        }
        flagIsSame = false;
    }
    return resu;
}
//------------------------------------------------------------
function initParameters() {

    exp = '';
    str = '';
    initMode = true;
    calcMode = false;
    relatMode = false;
    statisticMode = false;
    textview.value = 'Init mode';
    flag = false;
    indexSubArr = 0;
    flagComma = false;
    flagFirstComma = false;
    comma = false;
    isEmpty = true; //קבוצה מוגדרת בהתחלה גקבוצה ריקה מאיברים
}
//----------------------------/לחיצה על in/----------------------------------------
function add() {
    if (initMode && flag) {
        if (!isEmpty) //אם הוקלדו לקבוצה איברים-לפחות אחד
            subArr[indexSubArr] = str; //הוספת התא האחרון 

        let txt = $(".textview").val();
        index_jq = findIndex(exp);
        if (exp === "Ω") {
            jqry(exp);
            omegaFlaf = true;
        }
        // מוצא היכן נמצא הקבוצה במערך
        let name = 'arr' + index_jq;
        $(name).css({
            "font-weight": "bold",
            "height": "50px",
            "border-radius": "20px",
            "width": "107px",
            "background-color": "#C7C7B0",
            "font-size": "18px",
            "margin": "10px",
            "padding": "10px",
            "box-shadow": "10px 10px 15px 5px #111"
        });

        $(name).text(txt + '}');
        $(name).hide();
        $(name).fadeIn("slow");
        if (flagSameName) {
            arr[index_of_org] = subArr;
        } else {
            let arrN = newArr(subArr);
            arr.push(arrN);
        }
        temp++;
        str = '';
        indexNameArr++;
        initParameters();
        subArr = new Array();
    }
}
//--------------------------------------------------------------------
function c() {
    for (let i = 0; i < nameArr.length; i++) { //מוחק את כל מה שנכתב בטקסט
        let name = 'arr' + i;
        $(name).hide();
    }
    $(".name").fadeOut("slow");
    $("body").fadeOut("slow"); //מסתיר בקצב משתנה
    initParameters();
    nameArr = new Array(); //מאפס את המערך
    indexNameArr = 0;
    subArr = new Array(); // מערך הקבוצה
    indexSubArr = 0;
    exists = new Array(); // מערך השומר את שמות הקבוצות שאיבר מסויי
    indexExists = 0;
    strr = '';
    subSymbol = '';
    flagRes = false;
    saveGrop;
    index_of_org;
    temp = 0;
    omegaFlaf = false;
    flagSameName = false;
    preArr = []; //המערך הקודם
    isPre = false;
    arr = [];
    res; //תוצאה
    typeOfAct = ''; //סוג הפעולה: איחוד, חי
    flagAction = false;
    flagYes = false; //דגל ששומר אם לפחות פעם אחת האיבר מופיע
    flagNo = false; // דגל ששומר אם לפחות פעם אחת האיבר לא מופיע
    flagIn = false;
    countOfNotExist = 0;
    isSubArr = new Array(); // מערך המכיל בתוכו את הקוצות אליו הקבו
    isSubArrSymble = new Array(); //יצירת מערך של סימני מוכל,שווה
    indexIsSubArr = 0;
    arrEqual = []; //יצירת מערך של סימני-שווה
    arrSub = []; //יצירת מערך של סימני-מוכל
    arrEqualFlag = false;
    arrSubFlag = false;
    printStrEqual = '';
    printStrSub = '';
    noExists = new Array(); // מערך השומר את שמות הקבוצות שאיבר מסו
    indexNoExists = 0;
    firstTimeOfRes = true;
    //------- אתחול סטטיסטיקה משתנים-------------------------------------
    p = ''; //שומר איזה סוג של הסתברות לחצנו במחשבון.
    flagStatistic = false;
    preArrStatistic = [];
    preOr;
    statFlag = false;
    //----------------------------------------------------
    $("body").fadeIn("slow"); //משיב למסך לאט
    jq = 'init';
    index_jq;
    jqry(jq);
}
function language() {
    $(document).ready(function () {
        // Change text of input button
        if (!flagEnglish) {
            $("#lang").prop("value", "עברית");
            //----------------------------------
            $("#calc").prop("value", "calc");
            $("#calc").css({
                "width": "70px"
            });
            //----------------------------------
            $("#init").prop("value", "init");
            $("#init").css({
                "width": "75px"
            });
            //----------------------------------
            $("#statistic").prop("value", "statistic");

            //----------------------------------
            $("#ratio").prop("value", "ratio");
            $("#ratio").css({
                "width": "75px"
            });
            $("#Exist").prop("value", "Exist");
            //----------------------------------
            $("#W").fadeIn();//משיב למסך 
            $("#X").fadeIn();//משיב למסך 
            $("#Y").fadeIn();//משיב למסך 
            $("#Z").fadeIn();//משיב למסך 
            $("#A").prop("value", "A");
            $("#B").prop("value", "B");
            $("#C").prop("value", "C");
            $("#D").prop("value", "D");
            $("#E").prop("value", "E");
            $("#F").prop("value", "F");
            $("#G").prop("value", "G");
            $("#H").prop("value", "H");
            $("#I").prop("value", "I");
            $("#J").prop("value", "J");
            $("#K").prop("value", "K");
            $("#L").prop("value", "L");
            $("#M").prop("value", "M");
            $("#N").prop("value", "N");
            $("#O").prop("value", "O");
            $("#P").prop("value", "P");
            $("#Q").prop("value", "Q");
            $("#R").prop("value", "R");
            $("#S").prop("value", "S");
            $("#T").prop("value", "T");
            $("#U").prop("value", "U");
            $("#V").prop("value", "V");
            $("#W").prop("value", "W");
            $("#X").prop("value", "X");
            $("#Y").prop("value", "Y");
            $("#Z").prop("value", "Z");
            flagEnglish = true;
        }
        else {
            $("#lang").prop("value", "English");
            //----------------------------------
            $("#calc").prop("value", "חישוב");
            $("#calc").css({
                "width": "70px"
            });
            //----------------------------------
            $("#init").prop("value", "אתחול");
            $("#init").css({
                "width": "75px"
            });
            //----------------------------------
            $("#statistic").prop("value", "הסתברות");

            //----------------------------------
            $("#ratio").prop("value", "יחסים");
            $("#ratio").css({
                "width": "75px"
            });
            $("#Exist").prop("value", "שייך");

            //----------------------------------
            $("#A").prop("value", "א");
            $("#B").prop("value", "ב");
            $("#C").prop("value", "ג");
            $("#D").prop("value", "ד");
            $("#E").prop("value", "ה");
            $("#F").prop("value", "ו");
            $("#G").prop("value", "ז");
            $("#H").prop("value", "ח");
            $("#I").prop("value", "ט");
            $("#J").prop("value", "י");
            $("#K").prop("value", "כ");
            $("#L").prop("value", "ל");
            $("#M").prop("value", "מ");
            $("#N").prop("value", "נ");
            $("#O").prop("value", "ס");
            $("#P").prop("value", "ע");
            $("#Q").prop("value", "פ");
            $("#R").prop("value", "צ");
            $("#S").prop("value", "ק");
            $("#T").prop("value", "ר");
            $("#U").prop("value", "ש");
            $("#V").prop("value", "ת");
            $("#W").fadeOut();
            $("#X").fadeOut();
            $("#Y").fadeOut();
            $("#Z").fadeOut();
            // $("#W").prop("value", "");
            // $("#X").prop("value", "");
            // $("#Y").prop("value", "");
            // $("#Z").prop("value", "");
            flagEnglish = false;
        }
    });
}
//---------פונקציה הדואגת לעדכן(להמיר) באיזה שפה מדובר כדי שיוצג על המסך-------------
function printLang(s) {
    let resultLang;
    if (s === "a") {
        resultLang = "א";
    }
    if (s === "b") {
        resultLang = "ב";
    }
    if (s === "c") {
        resultLang = "ג";
    }
    if (s === "d") {
        resultLang = "ד";
    }
    if (s === "e") {
        resultLang = "ה";
    }
    if (s === "f") {
        resultLang = "ו";
    }
    if (s === "g") {
        resultLang = "ז";
    }
    if (s === "h") {
        resultLang = "ח";
    }
    if (s === "i") {
        resultLang = "ט";
    }
    if (s === "j") {
        resultLang = "י";
    }
    if (s === "k") {
        resultLang = "כ";
    }
    if (s === "l") {
        resultLang = "ל";
    }
    if (s === "m") {
        resultLang = "מ";
    }
    if (s === "n") {
        resultLang = "נ";

    }
    if (s === "o") {
        resultLang = "ס";
    }
    if (s === "p") {
        resultLang = "ע";
    }
    if (s === "q") {
        resultLang = "פ";
    }
    if (s === "r") {
        resultLang = "צ";
    }
    if (s === "s") {
        resultLang = "ק";
    }
    if (s === "t") {
        resultLang = "ר";
    }
    if (s === "u") {
        resultLang = "ש";
    }
    if (s === "v") {
        resultLang = "ת";
    }
    if (s === "0") {
        resultLang = "0";
    } if (s === "1") {
        resultLang = "1";
    } if (s === "2") {
        resultLang = "2";
    } if (s === "3") {
        resultLang = "3";
    } if (s === "4") {
        resultLang = "4";
    } if (s === "5") {
        resultLang = "5";
    } if (s === "6") {
        resultLang = "6";
    } if (s === "7") {
        resultLang = "7";
    } if (s === "8") {
        resultLang = "8";
    } if (s === "9") {
        resultLang = "9";
    }
    return resultLang;
}
// function backSpace() {
//     flagComma = false;
//     if (flag) {

//         alert('subArr.l: ' + subArr.length);
//         subArr.length--;
//         alert('subArr.l: ' + subArr.length);
//         indexSubArr--;

//         str = '';
//         comma = false;
//         flagFirstComma = true;

//         alert('subArr:' + subArr);
//         textview.value = + '={' + subArr;

//     }
// }

//---------------------------------------------------------
// $("body").hide(); //מסתיר
//$("body").fadeTo("slow");
// $("p:first").append("<h1>hi</h1>");
// $("p:last").before("<h2>bye</h2>");
//$("p:last").remove(); //מוחק אתהטקסט איפה שמופיעP
//$("body").remove();//מוחק את את הגוף
//$("body").css("background-color", "yellow");
// $("body").hide(); //מסתיר
//$("body").fadeIn("slow");//משיב למסך לאט
// $("body").show();// משיב למסך
//---------------------------------------------------------
//var r = parseInt(Math.random() * 255); //צבעים
// var g = parseInt(Math.random() * 255); //צבעים
// var b = parseInt(Math.random() * 255); //צבעים
// var w = $("body").width();
// var h = $("body").height();

// var d = $("<div></div>");
// var css = {
//     "border-radius": parseInt(100),
//     "left": parseInt(Math.random()),
//     "top": parseInt(Math.random()),
//     "width": parseInt(100), //אורך
//     "height": parseInt(100), //רוחב
//     "background-color": "rgb(51, 51, 51)"
//         //"background-color": "rgb(" + r + ", " + g + ", " + b + ")"// יוצא צבע רנדומלי
// };

// // function changeHeader() {

// //     var txt = $("#txtInput").val();
// //     $("h1").text(txt);
// // }
// d.css(css);
// $("body").append(d).fadeIn("slow");
//------------------------------------------------------------------------------------------------
// function powerGroup(arr1) { //קבוצת חזקה
//     resuls_power.push('Ø');
//     let resuls_power = [];
//     var j = 0;
//     var index_Of_for = 0;
//     for (index_Of_for; index_Of_for < arr.length;) {
//         if (oneTime) {

//             oneTime = false;
//         } else {
//             powerGroup(arr1)
//         }
//     }
// }



