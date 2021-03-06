$(function () {
    $('#calculate').click( function() {	

	    var original = $("#original").val();
		var starts = original.indexOf('{');
		var ends = original.indexOf('}');
		var originalNubers = original.substring(starts + 1, ends).replace(/ /g,'').split(',');

		var realNumbers = Array();
		for (var i = 0; i < 4; i++) {
			realNumbers[i] = $('#real' + i).val();
		};

		var x = 100 / realNumbers[0] * originalNubers[0];
		var y = 100 / realNumbers[1] * originalNubers[1];
		var z = 50 / realNumbers[2] * originalNubers[2];
		var e = 100 / (200 - realNumbers[3]) * originalNubers[3];

		var precision = 3;

		if(!realNumbers[0] || !realNumbers[1] || !realNumbers[2] || !realNumbers[3] || ! original){
			alert('Fill in all inputs, please.');
		} else {
			var calculated = '#define DEFAULT_AXIS_STEPS_PER_UNIT {' 
				+ x.toFixed(precision) 
				+ ',' + y.toFixed(precision) 
				+ ',' + z.toFixed(precision) 
				+ ',' + e.toFixed(precision) 
				+ '}';
			$('#output').prepend('<li>' + calculated + '</li>');
		}		
    });

 });