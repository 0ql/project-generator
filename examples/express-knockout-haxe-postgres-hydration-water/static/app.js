(function ($global) { "use strict";
class AppViewModel {
	constructor() {
		this.check1 = ko.observable(false);
		this.check2 = ko.observable(false);
		this.check3 = ko.observable(false);
		this.check4 = ko.observable(false);
		let _gthis = this;
		this.ml = ko.computed(function() {
			let total = 0;
			if(_gthis.check1()) {
				++total;
			}
			if(_gthis.check2()) {
				++total;
			}
			if(_gthis.check3()) {
				++total;
			}
			if(_gthis.check4()) {
				++total;
			}
			return total * 250;
		},this);
	}
}
class Main {
	static main() {
		ko.applyBindings(new AppViewModel());
	}
}
class haxe_iterators_ArrayIterator {
	constructor(array) {
		this.current = 0;
		this.array = array;
	}
	hasNext() {
		return this.current < this.array.length;
	}
	next() {
		return this.array[this.current++];
	}
}
{
}
Main.main();
})({});
