var xmlhttp = new XMLHttpRequest();
var a_gruppenObjekte;

xmlhttp.onreadystatechange = function() {

    var a_gruppen = new Array();

    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.response); //Code parsen
        laenderNr = 0;
        gruppenNr = 0;
        a_gruppen[gruppenNr] = new Array();
        for(i = 0; i < myObj.length; i++){
            a_gruppen[gruppenNr][laenderNr] = myObj[i];
            if(laenderNr == 3) {
                laenderNr = 0;
                gruppenNr++;
                if (i != myObj.length - 1) {
                    a_gruppen[gruppenNr] = new Array();
                }
            }else {
                laenderNr++;
            }
        }

        //Ausgeben in Tabelle
        var outputString = "";
        a_gruppenObjekte = a_gruppen;

        for(i = 0; i < a_gruppenObjekte.length; i++){
            var a_laender = a_gruppenObjekte[i];

            outputString += "<h2>Gruppe " + (i+1) + "</h2> " +
                '<table class="table table-bordered">' +
                "<thead>" +
                "<tr>" +
                "<th width='50%'>Nummer</th>" +
                "<th width='50%'>Land</th>" +
                "</tr>" +
                "</thead>" +
                "<tbody>";

            for(j = 0; j < a_laender.length; j++){
                obj_land = a_gruppenObjekte[i][j];

                outputString += "<tr>" +
                    "<td width='50%'>" + (j+1) + "</td>" +
                    "<td width='50%'>" +
                    "<img border='0' alt='" +obj_land.flaggs+ "' src='Flags/" + obj_land.flaggs + ".png' width='25'> " + obj_land.name + "</td>" +
                    "</tr>";

            }
            outputString += "</tbody>" +
                "</table>";
        }

        document.getElementById("tabellen").innerHTML = outputString;

    }
};
xmlhttp.open("GET", "WM.php", true);
xmlhttp.send();


