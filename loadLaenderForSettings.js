var a_gruppenObjekte;

var arraySpielmuster = [[0,1],[2,3],[0,2],[1,3],[1,2],[0,3]];

function showlaender() {
    var xmlhttp = new XMLHttpRequest();


    xmlhttp.onreadystatechange = function () {
        var a_gruppen = new Array();

        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.response); //Code parsen
            laenderNr = 0;
            gruppenNr = 0;
            a_gruppen[gruppenNr] = new Array();
            for (i = 0; i < myObj.length; i++) {
                a_gruppen[gruppenNr][laenderNr] = myObj[i];
                if (laenderNr == 3) {
                    laenderNr = 0;
                    gruppenNr++;
                    if (i != myObj.length - 1) {
                        a_gruppen[gruppenNr] = new Array();
                    }
                } else {
                    laenderNr++;
                }
            }

            //Ausgeben in Tabelle
            var outputString = "";
            a_gruppenObjekte = a_gruppen;

            for (i = 0; i < a_gruppenObjekte.length; i++) {
                var a_laender = a_gruppenObjekte[i];

                outputString += "<h2>Gruppe " + (i + 1) + "</h2> " +
                    '<table class="table table-hover">' +
                    "<thead>" +
                    "<tr>" +
                    "<th width='40%'>Nummer</th>" +
                    "<th width='40%'>Land</th>" +
                    "<th width='20'>Punkte </th>" +
                    "</tr>" +
                    "</thead>" +
                    "<tbody>";

                for (j = 0; j < a_laender.length; j++) {
                    obj_land = a_gruppenObjekte[i][j];

                    outputString += "<tr>" +
                        "<td width='40%'>" + (j + 1) + "</td>" +
                        "<td width='40%'>" +
                        "<img border='0' alt='" + obj_land.flaggs + "' src='Flags/" + obj_land.flaggs + ".png' width='25'> " + obj_land.name + "</td>" +
                        "<td width='20%'>" +
                        "</tr>";

                }
                outputString += "</tbody>" +
                    "</table>";
            }

            document.getElementById("tabellen").innerHTML = outputString;


           var outputStringGruppe ="";


            for(i=0; i < a_gruppenObjekte.length; i++){
                var a_laender2 = a_gruppenObjekte[i];



                outputStringGruppe += "<h2>Gruppe" + (i + 1) + " </h2> " +
                    '<table class="table table-hover">' +
                    "<thead>" +
                    "<tr>" +
                    "<th width='20%'>Heim</th>" +
                    "<th width='20%'>Spielstand</th>" +
                    "<th width='20%'>Gast</th>" +
                    "<th width='20%'>Spielen</th>" +
                    "</tr>" +
                    "</thead>" +
                    "<tbody>";

                for(j =0 ; j < arraySpielmuster.length ; j++)
                {
                    outputStringGruppe += "<tr>" +
                        "<td width='20%'>" +
                        "<img border='0' alt='" + a_laender2[arraySpielmuster[j][0]].flaggs + "' src='Flags/" + a_laender2[arraySpielmuster[j][0]].flaggs + ".png' width='25'> " + a_laender2[arraySpielmuster[j][0]].name + "</td>" +
                        "<td width='20%' id='g" + (i + 1) + "s" + j+ "' > noch nicht gespielt </td>" +
                        "<td width='20%'>" +
                        "<img border='0' alt='" + a_laender2[arraySpielmuster[j][1]].flaggs + "' src='Flags/" + a_laender2[arraySpielmuster[j][1]].flaggs + ".png' width='25'> " + a_laender2[arraySpielmuster[j][1]].name + "</td>" +
                        "<td width='20%'>" +
                        '<button onclick="functionSpielen('+(i+1)+','+j+')">Spielen</button>' + "</td>" +
                        "</tr>";
                }

                outputStringGruppe += "<tbody></table>";
            }

            document.getElementById("tabellenGruppe").innerHTML = outputStringGruppe;
        }
    };
    xmlhttp.open("GET", "WM.php", true);
    xmlhttp.send();

}

function functionSpielen(gruppenNummer,spieltagNummer) {
   var heim = a_gruppenObjekte[gruppenNummer-1][arraySpielmuster[spieltagNummer][0]];
   var gast = a_gruppenObjekte[gruppenNummer-1][arraySpielmuster[spieltagNummer][1]];

   var heimStrength = getRandm(7,9)* heim.strength
    var gastStrength = getRandm(7,9)* gast.strength

    var ergebniss = heimStrength - gastStrength;
    var toreHeim = 0;
    var toreGast = 0;

   if(ergebniss < 0  ) {
        toreGast = getRandm(1,4);
        toreHeim = getRandm(0,2);
   } else {
       toreGast = getRandm(0,2);
       toreHeim = getRandm(1,4);
   }

    console.log(ergebniss);

document.getElementById("g" + gruppenNummer + "s" + spieltagNummer ).innerHTML =  toreHeim + ":" + toreGast ;
}

function getRandm(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min ;

}

