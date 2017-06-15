/**
 * Created by jaik on 14.06.17.
 */

function showProposal() {
    if (str.length == 0) {
        document.getElementById("txtProposal").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("testLaender").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "WM.php, true);
        xmlhttp.send();
    }
};
