var MyClass = function(MyParam) {
	if (arguments.length == 0) {
		alert('No Args');
	} else {
		alert('Args Length = '+arguments.length);
	}
};


MyClass.prototype.someMethod =function() {
	alert('Some Method');
};

var instance1 = new MyClass();
instance1.someMethod();

var instance2 = new MyClass('test');
instance2.someMethod();