var sales1 = $('.sales1');
var sales2 = $('.sales2');
var sales__details1 = $('.sales__details1');
var sales__details2 = $('.sales__details2');

var buttonClickHandler1 = function () {
	var currentState = sales__details1.attr('data-state');

	if(currentState == 'active'){
 sales__details1.attr('data-state', 'inactive');
	} else {
 sales__details1.attr('data-state', 'active');
	}

};

var buttonClickHandler2 = function () {
	var currentState = sales__details2.attr('data-state');

	if(currentState == 'active'){
 sales__details2.attr('data-state', 'inactive');
	} else {
 sales__details2.attr('data-state', 'active');
	}

};

sales1.on('click', buttonClickHandler1);
sales2.on('click', buttonClickHandler2);
