//initialize the world map
!function(){
	var x=[128,183,191,206,349,355,358,366,366,368,373,377,614],
    	y=[152,149,165,156,148,142,138,154,131,142,117,153,142];
	for (var i = 0; i < x.length; i++) {
	  var node=document.createElement("area");
	  node.setAttribute("id","mapsec_"+i);
	  node.setAttribute("class","mapsecs");
	  node.setAttribute("shape","rect");
	  node.setAttribute("coords",x[i]+","+y[i]+","+(x[i]+5)+","+(y[i]+5));

	  node.setAttribute("onmouseover","document.getElementById('location"+i+"').style.display='block';document.getElementById('hoverRec').style.background='#000';document.getElementById('hoverRec').style.display='block';document.getElementById('hoverRec').style.left='"+(x[i]-2)+"px';document.getElementById('hoverRec').style.top='"+(y[i]-2)+"px';showDetails("+i+")");
	  document.getElementById('worldmap').appendChild(node);
	}

	//unique configuration for red point
	var redPoint=document.getElementById('mapsec_5');
	redPoint.setAttribute("coords",x[5]+","+y[5]+","+(x[5]+8)+","+(y[5]+8));
	redPoint.setAttribute("onmouseover","document.getElementById('location5').style.display='block';document.getElementById('hoverRec').style.background='red';document.getElementById('hoverRec').style.display='block';document.getElementById('hoverRec').style.left='"+(x[5]-1)+"px';document.getElementById('hoverRec').style.top='"+(y[5]-1)+"px';showDetails(5)");

	//hide rec and text when mouseout
	document.getElementById('hoverRec').setAttribute("onmouseout","hideRecText()")

}();

function hideRecText(){
	document.getElementById('hoverRec').style.display='none';
	for (var i = 0; i < 13; i++) {
		document.getElementById('location'+i).style.display='none';

	}
}
function showDetails(num){

//1st step: remove all the details
document.getElementById('CntText').innerHTML="";
document.getElementById("CntImg").innerHTML="";
document.getElementById("CntPro").innerHTML="Produktfokus: ";

var cntDetail=[
	["Werk Montrose / CO /USA",{"Marktfokus:":"Öl&Gas","Schleifscheiben für Schneidwerkzeuge:":"Wendeschneidplatten / Rotierende Werkzeuge Keramik / Holzbearbeitung"},["Montrose/01-Montrose.jpg"],"Kunstharzgebundene Schleifscheiben, Polyimide Wheels, Hybridgebundene Schleifscheiben Wheels, EC Blades – Electro Chemical Grinding, Durchmesser: ½” to 14” / Dicke: 1/16”-10”+"],
	["Werk Wixom / MI / USA",{"Marktfokus:":"Schneidwerkzeuge, Spezialwerkzeuge, Glasindustrie"},["Montrose/01-Montrose.jpg","Wixom/01-Wixom.jpg"],"Keramisch- und Kunstharzbindungen, Abrichtwerkzeuge, Pencil Edge Wheels"],
	["Werk Royersford /PA/ Chester Springs / USA",{"Werksgründung: ":"1969 (Dunnington Company)<br />Seit 1977 Herstellung von galvanischen Abrichtrollen<br />Seit 1987 Teil der Wendt-Group","Marktfokus: ":"Automotive (Turbinenindustrie, Getriebe/Motorenbau, Lager, Verzahnung, Stahlwerke, Walzenindustrie Metallografie & Halbleiterindustrie"},["Royersford/01-Royersford.jpg"],"Keramisch gebundene CBN Werkzeuge, Galvanische Abrichtwerkzeuge, Direct Plated Tools  / Compound and Slurries, Konventionelle Schleifwerkzeuge, Großtrennscheiben / Finishing Film"],
	["Werk Whippany / NJ / USA",{"Marktfokus: ":"Öl & Gas, Rotierende Schenidwerkzeuge, Dentalbohrer, Holzindustrie / Keramik / PCD & PCBN"},["Whippany/01-Whippany.jpg"],"Produktfokus, Diverse Bindungen, Kunstharz, Keramisch, Metall& Hybrid, Diamantabrichtrollen"],
	["Wendt GmbH, Nivelle",{"Gründung Diamant Boart: ":"1939","Übernahme durch Wendt GmbH: ":"1997","Werkseröffnung in Nivelle: ":"2004","Werksfläche: ":"16.400 qm","Anzahl der Mitarbeiter: ":"129"},["Nivelle/01-Nivelle.jpg","Nivelle/02-Nivelle.jpg"],"Schleif-und Bohrwerkzeuge für die Glasindustrie, Galvanisch gebundene Werkzeuge"],
	["Wendt GmbH, Standort Meerbusch",{"Gründungsjahr der Wendt GmbH: ":"1920","Werkseröffnung in Meerbusch: ":"1961","Anzahl Werke: ":"5","Werksfläche: ":"21.120 qm","Anzahl der Mitarbeiter (Wendt GmbH): ":"243 in Meerbusch / Gesamt: 394"},["Meerbusch/01-Meerbusch.jpg","Meerbusch/02-Meerbusch.jpg"],"Wendt Präzisionsschleifmaschinen, Keramische CBN und Diamantwerkzeuge"],
	["Wendt GmbH, Standort Hameln",{"Werkseröffnung in Hameln: ":"1995 (seit 2004 Teil der Wendt GmbH)","Werksfläche: ":"4.300 qm","Anzahl der Mitarbeiter: ":"25"},["Meerbusch/01-Meerbusch.jpg","Meerbusch/02-Meerbusch.jpg"],"Segmentierte Diamond & CBN Doppelplanschleifscheiben, Segmentierte  Diamond & CBN Feinschleifscheiben"],
	["Wendt GmbH, Standort Egnach",{"Werkseröffnung: ":"1979","Werksfläche: ":"3.385 qm","Anzahl der Mitarbeiter: ":"20"},,"Schleifschnecken, Schleifscheiben, Profilschleifscheiben, Abrichtscheiben, Einstechschleifen"],
	["Wendt GmbH, Werk Jena",{"Gründung: ":"1991"},,],
	["Wendt GmbH, Standort Niederstetten",{"Werkseröffnung in Niederstetten: ":"1973","Werksfläche: ":"19.000 qm","Anzahl der Mitarbeiter: ":"102"},["Niederstetten/01-Niederstetten.jpg","Niederstetten/02-Niederstetten.jpg"],"Kunstharz-, metallgebundene und galvanische CBN- und Diamant-Schleifscheiben, Diamant-Form- und Profilabrichtrollen, Wendt-Maschinen-Zubehörteile"],
	["Västervik, Schweden",{"Ein Werk in Schweden mit Tradition, welches 1895 gegründet wurde.":"","Wir sind diejenigen, die mit dem Standort Västervik in Schweden weltweit den größten Produktionsstandort für HP-Schleifscheiben haben und Weltmarktführer sind beim Schleifen von Brammen und Knüppeln Innovative Diamant- und CBN Schleifscheiben für die Schneidwerkzeugindustrie liefern besonders große konventionelle Schleifscheiben fertigen können für z.B. die Stahl- und Automobilindustrie":"","Kam ……zu Wendt":""},["Vaestervik/Vaestervik.jpg"],],
	["Rappold-Winterthur GmbH, Villach",{"Werkseröffnung in Villach: ":"1954","Werksfläche: ":"40.000 qm","Anzahl der Mitarbeiter (Wendt GmbH): ":"360","Produktfokus: ":"Keramische und Kunstharzgebundene Schleifscheiben"},["Villach/01-Villach.jpg","Villach/02-Villach.jpg"],],
	["Werk Taicang / China (Winterthur Technology Co.,Ltd)",{"Werksgründung: ":"2007","Produktfokus":"","CBN & Diamantwerkzeuge in diversen Bindungen: ":"Keramik, Kunstharz, Metallbindung","Konventionelle Schleifscheiben in keramischer Bindung für die Verzahnung":""},["Taicang/01-Taicang.jpg"],]
	];

//set position of the detail box
if(num<7){hideCntDetails();document.getElementById("mapCnt").style.right="10px";}
else{hideCntDetails();document.getElementById("mapCnt").style.left="0px";}

//add title
document.getElementById("CntTitle").innerHTML=cntDetail[num][0];
//add text
for(arg in cntDetail[num][1]){
	var nodeTR=document.createElement("tr"),
		nodeTD1=document.createElement("td"),
		nodeTD2=document.createElement("td")
		;
	nodeTD1.innerHTML=arg;
	nodeTD2.innerHTML=cntDetail[num][1][arg];
	nodeTR.appendChild(nodeTD1);
	nodeTR.appendChild(nodeTD2);
	document.getElementById('CntText').appendChild(nodeTR);
	}
//add images
if(cntDetail[num][2]){
	for (var imgNum = 0; imgNum < cntDetail[num][2].length; imgNum++) {
		//imgNum%2?document.getElementById("CntImg").innerHTML+='<img src="_CSEMBEDTYPE_=image&amp;_univid_='+cntDetail[num][2][imgNum]+'&amp;_assettype_=MMM_Image&amp;blobcol=ThumbnailImage" width="260" />':document.getElementById("CntImg").innerHTML+='<img src="_CSEMBEDTYPE_=image&amp;_univid_='+cntDetail[num][2][imgNum]+'&amp;_assettype_=MMM_Image&amp;blobcol=ImageFile" width="260" />';
		document.getElementById("CntImg").innerHTML+='<img src="'+cntDetail[num][2][imgNum]+'" width="260" />';;
	};
}
//add products
if(cntDetail[num][3]){
	document.getElementById("CntPro").innerHTML+=cntDetail[num][3];
	}
	else{document.getElementById("CntPro").innerHTML=""}
}
function hideCntDetails(){
	document.getElementById("mapCnt").style.left="";
	document.getElementById("mapCnt").style.right="";
}
function showCntDetails(){
	document.getElementById("mapCnt").style.display="block";
}
function setMapsecH(){
	if(document.getElementById("mapCnt").style.display!="none"){
		if(document.getElementById("mapsec").offsetHeight<=document.getElementById("mapCnt").offsetHeight){
		document.getElementById("mapsec").style.height=document.getElementById("mapCnt").offsetHeight+40+"px";}
		else document.getElementById("mapsec").style.height="auto";
	}
}
function recoverMapSec(){
	document.getElementById("mapCnt").style.display="none";
	document.getElementById("mapsec").style.height="auto";
}
