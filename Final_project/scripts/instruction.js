// document.addEventListener('DOMContentLoaded', () => {
  
//   document.getElementById("show_button").addEventListener("click", function(){
    
//     fetch ('https://my.api.mockaroo.com/edi_final.json?key=aac58000').then(function(response) {
//     return response.json();
//   }).then(function(data) {
    
//     chart_data = data;
//   }
//     )
//     .then((text) => 
//     {document.getElementById("CSVTable").innerText = text;
//     document.getElementById("CSVTable").style.display="block";}
//     )
//   });
  
// });
// import "billboard.js/dist/theme/insight.css";
import bb from "billboard.js";



function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://my.api.mockaroo.com/edi_final.json?key=aac58000");
oReq.send();

// pierwszy wykres
var chart = bb.generate({
  data: {
    columns: [
	["data1", 30, 200, 100, 400, 150, 250],
	["data2", 50, 20, 10, 40, 15, 25]
    ],
    type: "line", // for ESM specify as: line()
  },
  bindto: "#lineChart"
});

setTimeout(function() {
	chart.load({
		columns: [
			["data1", 230, 190, 300, 500, 300, 400]
		]
	});
}, 1000);

setTimeout(function() {
	chart.load({
		columns: [
			["data3", 130, 150, 200, 300, 200, 100]
		]
	});
}, 1500);

setTimeout(function() {
	chart.unload({
		ids: "data1"
	});
}, 2000);

// drugi wykres
// var chart2 = bb.generate({
//   data: {
//     columns: [
// 	["data1", 30, 200, 100, 400, 150, 250],
// 	["data2", 130, 100, 140, 200, 150, 50]
//     ],
//     type: "bar", // for ESM specify as: bar()
//   },
//   bar: {
//     width: {
//       ratio: 0.5
//     }
//   },
//   bindto: "#barChart"
// });

// setTimeout(function() {
// 	chart2.load({
// 		columns: [
// 			["data3", 130, -150, 200, 300, -200, 100]
// 		]
// 	});
// }, 1000);