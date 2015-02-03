'use strict';

var expect = require("chai").expect;
var hello = require('../lib/hello.js');

describe('hello function', function() { 
	it('should return hello world', function () {
		expect(hello.greet()).to.not.eql('goodbye');
		expect(hello.greet("Joshua")).to.eql("hello Joshua");
	});
});