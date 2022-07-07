import js.Browser;

class AppViewModel {
	var check1: () -> Any;
	var check2: () -> Any;
	var check3: () -> Any;
	var check4: () -> Any;
	var ml: Any;
	public function new() {
		this.check1 = Ko.observable(false);
		this.check2 = Ko.observable(false);
		this.check3 = Ko.observable(false);
		this.check4 = Ko.observable(false);
		this.ml = Ko.computed(function () {
			var total = 0;
			if (this.check1()) total += 1;
			if (this.check2()) total += 1;
			if (this.check3()) total += 1;
			if (this.check4()) total += 1;
			return total * 250;
		}, this);
	}
}

@:native("ko") extern class Ko {
	public static function applyBindings(arg: AppViewModel): Void;
	public static function observable(arg: Any): () -> Any;
	public static function computed(arg1: Any, arg2: Any): Any;
}

class Main {
	static function main() {
		Ko.applyBindings(new AppViewModel());
	}
}
