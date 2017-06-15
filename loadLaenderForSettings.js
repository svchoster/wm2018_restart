/**
 * Created by jaik on 14.06.17.
 */

function showlaender() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            document.getElementById("testLaender").innerHTML = myObj[2];
        }
    };
    xmlhttp.open("GET", "WM.php", true);
    xmlhttp.send();
