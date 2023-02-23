function perfect() {

    var ori = document.getElementById('inp').value;
    var sum = 0;


    for (i = 1; i < ori; i++) {
        if (ori % i == 0) {

            sum = sum + i;
        }

    }
    if (ori == sum) {
        alert("THE ENTERED NUMBER IS A PERFECT NUMBER " + sum);
    } else {
        alert("THE ENTERED NUMBER IS NOT A PERFECT NUMBER " + sum);
    }
}

function facto() {
    var num = document.getElementById('inp').value;
    var factorial = 1;
    var i = 1;
    do {

        factorial = factorial * i;
        i++;


    } while (i <= num);


    alert("THE FACTORIAL VALUE OF " + factorial);


}

function fibo() {
    var range = document.getElementById('inp').value;
    var a, b, c;
    a = -1;
    b = 1;

    var i = 1;


    document.write("THE FIBONACCI SERIES OF THE GIVEN RANGE : ");
    while (i <= range) {
        c = a + b;
        a = b;
        b = c;
        i++;

        document.write(c + " ");

    }


}

function gcheck() {
    var g = document.getElementById('gender').value;

    if (g == 'M' || g == 'M' || g == 'male' || g == "MALE") {
        alert("ENTERED VALUE IS MALE , IT IS VALID ENTRY ");

    } else if (g == 'F' || g == 'f' || g == 'female' || g == "FEMALE") {
        alert("ENTERED VALUE IS MALE , IT IS VALID ENTRY ");

    }
    else {
        alert(" IT IS A INVALID DATA ENTRY ");
    }


}

function gswitch() {
    var g = document.getElementById('gender').value;

    switch (g) {
        case "male":
            alert("ENTERED VALUE IS MALE , IT IS VALID ENTRY");
            break;

        case "MALE":
            alert("ENTERED VALUE IS MALE , IT IS VALID ENTRY");
            break;


        case "female":
            alert("ENTERED VALUE IS FEMALE , IT IS VALID ENTRY ");
            break;

        case "FEMALE":
            alert("ENTERED VALUE IS FEMALE , IT IS VALID ENTRY ");
            break;


        default:
            alert(" IT IS A INVALID DATA ENTRY ");
    }



}

