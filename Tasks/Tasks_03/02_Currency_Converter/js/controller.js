'use strict';

function Controller() {
	var self = this;

	model.observable.addObserver(self);

	function getCHF() {
		return window.document.getElementById("chfIN").value;
	}

	function processCHF() {
		var chfText = getCHF(),
		    chf = parseInt(chfText, 10);
		if (isNaN(chf)) {
			self.update("");
		} else {
			model.setCHF(chf);
		}
	}

	self.onLoaded = function() {
		window.document.getElementById("convertBN").addEventListener("click", processCHF, false);
	};

	self.update = function(euro) {
		window.document.getElementById("euroIN").value = euro;
	};
}
