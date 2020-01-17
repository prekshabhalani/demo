//localStorage.clear();
var lastIndex = new Array();
//object to store value
var studentDetail =
{
    names: "",
    mathsMarks: "",
    englishMarks: "",
    passingYear: "",
    average: "",
    thisYear: ""

}
function validateData() {
    //for validation
    firstName = document.getElementById("name").value;
    mathsMarks = document.getElementById("mathsMarks").value;
    englishMarks = document.getElementById("englishMarks").value;
    passingYear = document.getElementById("passingYear").value;
    if (firstName == "" || mathsMarks == "" || englishMarks == "") {
        alert("no empty string allow");
    }
    else if ((Number(mathsMarks) < 0 || Number(mathsMarks) > 100) && (Number(englishMarks) < 0 || Number(englishMarks) > 100)) {
        alert("Please enter valid marks both Marks Invalide:must enter between 0 to 100");
    }
    else if (Number(mathsMarks) < 0 || Number(mathsMarks) > 100) {
        alert("math's Marks Invalide:must enter between 0 to 100");
    }
    else if (Number(englishMarks) < 0 || Number(englishMarks) > 100) {
        alert("english' Marks Invalide:must enter between 0 to 100");
    }
    else {
        //store value into object
        studentDetail.names = firstName;
        studentDetail.mathsMarks = mathsMarks;
        studentDetail.englishMarks = englishMarks;
        studentDetail.passingYear = passingYear;
        studentDetail.average = average();
        studentDetail.thisYear = thisYear();
        saveData1();

    }
}
function saveData1() {

    if (localStorage.getItem("studentDetail") == null) {
        lastIndex.push(studentDetail);
        localStorage.setItem("studentDetail", JSON.stringify(lastIndex));
        lastIndex = JSON.parse(localStorage.getItem("studentDetail"));

    }
    else {
        lastIndex = JSON.parse(localStorage.getItem("studentDetail"));
        lastIndex.push(studentDetail);
        localStorage.setItem("studentDetail", JSON.stringify(lastIndex));
        display();
    }
}
function display() {
    var table1 = ("<table border=1><tr><th>Index</th><th>Name</th><th>maths</th><th>english</th><th>passing year</th><th>average</th><th>Passing year</th></tr>");

    for (var i = 0; i < lastIndex.length; i++) {

        table1 += "<tr> <td>"+(i+1) +"</td><td>"+ lastIndex[i].names + "</td><td>" + lastIndex[i].mathsMarks + "</td><td>" + lastIndex[i].englishMarks +
            "</td><td>" + lastIndex[i].passingYear + "</td><td>" + lastIndex[i].average + "</td><td>" + lastIndex[i].thisYear + "</td></tr>";
    }
    table1+="</table>";
    document.getElementById("display").innerHTML = table1;
}

function average() {
    return (Number(studentDetail.mathsMarks) + Number(studentDetail.englishMarks)) / 2;
};
function thisYear() {
    return (new Date().getFullYear());
}