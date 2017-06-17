/**
 * Created by jaik on 14.06.17.
 */

function showlaender() {
    var a_gruppenGlobal;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {

        var a_gruppen = new Array(); // test

        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.response); //Code parsen
            laenderNr = 0;
            gruppenNr = 0;
            a_gruppen[gruppenNr] = new Array();
            for(i = 0; i < myObj.length; i++){
                a_gruppen[gruppenNr][laenderNr] = myObj[i];
                if(laenderNr == 3){
                    laenderNr = 0;
                    gruppenNr++;
                    a_gruppen[gruppenNr] = new Array();
                }else {
                    laenderNr++;
                }
            }
            a_gruppenGlobal = a_gruppen;

            //Ausgeben in Tabelle
            var s2 = "";

            for(i = 0; i < a_gruppen.length; i++){
                var a_laender = a_gruppen[i];

                s2 += "<h2>Gruppe " + (i+1) + "</h2> " +
                    '<table class="table table-hover">' +
                    "<thead>" +
                    "<tr>" +
                    "<th>Nummer</th>" +
                    "<th>Land</th>" +
                    "</tr>" +
                    "</thead>";

                for(j = 0; j < a_laender.length; j++){
                    obj_land = a_gruppen[i][j];

                    s2 += "<tr>" +
                        "<td>" + (j+1) + "</td>" +
                        "<td>" + obj_land.name + "</td>" +
                        "</tr>";

                }
                s2 += "<tbody>" +
                    "</tbody>" +
                    "</table>";
            }

            document.getElementById("tabellen").innerHTML = s2;

        }
    };
    xmlhttp.open("GET", "WM.php", true);
    xmlhttp.send();
}