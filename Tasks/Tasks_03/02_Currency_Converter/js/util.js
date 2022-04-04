'use strict';

function Observable() {
	var observers = [];

	this.addObserver = function(observer) {
		observers.push(observer);
	};

	this.removeObserver = function(observer) {
		observers = observers.filter(function(item) {
			return item !== observer;
		});
	};

	this.notifyObservers = function(data) {
		var i;
		for ( i = 0; i < observers.length; i = i + 1) {
			observers[i].update(data);
		}
	};
}

