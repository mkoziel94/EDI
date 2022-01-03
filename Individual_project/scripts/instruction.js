document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("xml_button").addEventListener("click", function(){
    console.log("xml");
    fetch("Dane_XML.xml").then(response => response.text())
    .then((text) => 
    {document.getElementById("CSVTable").innerText = text;
    document.getElementById("CSVTable").style.display="block";}
    )
      .catch((error) => { document.getElementById("content").setAttribute("src","dane_XML.xml");
      document.getElementById("content").style.display="block";});

  });
  document.getElementById("csv_button").addEventListener("click", function(){
    console.log("csv");
    fetch("Dane_CSV.csv").then(response => response.text())
    .then((text) => 
      {document.getElementById("CSVTable").innerText = text;
      document.getElementById("CSVTable").style.display="block";}
      )
      .catch((error) => { document.getElementById("content").setAttribute("src","dane_CSV.csv");
      document.getElementById("content").style.display="block";
      document.getElementById("CSVTable").innerHTML = "<p>Unable to view, save to drive</p>";
      document.getElementById("CSVTable").style.display="block";});
  });
  document.getElementById("json_button").addEventListener("click", function(){
    console.log("json");
    fetch("Dane_JSON.json").then(response => response.text())
    .then((text) => 
    {document.getElementById("CSVTable").innerText = text;
    document.getElementById("CSVTable").style.display="block";}
    )
      .catch((error) => { document.getElementById("content").setAttribute("src","dane_JSON.json");
      document.getElementById("content").style.display="block";});

  });
  document.getElementById("close").addEventListener("click", function(){
    console.log("close");
    document.getElementById("CSVTable").innerText = "";
    document.getElementById("CSVTable").style.display="none";
    document.getElementById("content").style.display = "none";
    document.getElementById("content").setAttribute("src","");
    
    });
});
