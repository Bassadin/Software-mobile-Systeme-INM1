'use strict';

function Model() {
	var self = this,
	    rate = 0.95,
	    chf;

	self.observable = new Observable();

	function getEUR() {
		var euro = chf * rate;
		self.observable.notifyObservers(euro);
	}

	self.setCHF = function(amount) {
		chf = amount;
		getEUR();
	};

}
