var chart_data;
document.addEventListener('DOMContentLoaded', () => {
    
    fetch ('https://my.api.mockaroo.com/edi_final.json?key=aac58000').then(function(response) {
    return response.json();
  }).then(function(data) {
    
    chart_data = data;
	bb.generate({
		data: {
		 json: data, keys: {value: ["Price"]},
		  type: "line", // for ESM specify as: line()
		},
		bindto: "#chart1"
	  });
	  bb.generate({
		data: {
			json: data, keys: {value: ["Price"]},
		  type: "bar", // for ESM specify as: bar()
		},
		bar: {
		  width: {
			ratio: 0.5
		  }
		},
		bindto: "#chart2"
	  });
  });
});



