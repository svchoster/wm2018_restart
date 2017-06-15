/**
 * Created by jaik on 14.06.17.
 */

function showlaender() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        var s = "";
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.response);
            for (i = 0; i < myObj.length; i++) {
                s += myObj[i].id + ' ' + myObj[i].name + "</br>";
            }
            document.getElementById("demo").innerHTML = s;
        }
    };
    xmlhttp.open("GET", "WM.php", true);
    xmlhttp.send();
}