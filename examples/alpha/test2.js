#!/usr/bin/env node

var uc = new require('ugrid').Context();

var da0 = uc.parallelize([0, 1]);
var da1 = uc.parallelize([0, 1]);
var da2 = uc.parallelize([0, 1]);
var da3 = uc.parallelize([0, 1]);
var da4 = uc.parallelize([0, 1]);
var da5 = uc.parallelize([0, 1]);
var da6 = uc.parallelize([0, 1]);
var da7 = uc.parallelize([0, 1]);
var da8 = uc.parallelize([0, 1]);
var da9 = uc.parallelize([0, 1]);
var da10 = uc.parallelize([0, 1]);
var da11 = uc.parallelize([0, 1]);
var da12 = uc.parallelize([0, 1]);
var da13 = uc.parallelize([0, 1]);
var da14 = uc.parallelize([0, 1]);
var da15 = uc.parallelize([0, 1]);
var da16 = uc.parallelize([0, 1]);
var da17 = uc.parallelize([0, 1]);
function mapper2(data) {
	return [ data[0][0], data[0][1], data[1] ]
}
function mapper3(data) {
	return [ data[0][0], data[0][1], data[0][2], data[1] ]
}
function mapper4(data) {
	return [ data[0][0], data[0][1], data[0][2], data[0][3], data[1] ]
}
function mapper5(data) {
	return [ data[0][0], data[0][1], data[0][2], data[0][3],
		 data[0][4], data[1] ]
}
function mapper6(data) {
	return [ data[0][0], data[0][1], data[0][2], data[0][3],
		 data[0][4], data[0][5], data[1] ]
}
function mapper7(data) {
	return [ data[0][0], data[0][1], data[0][2], data[0][3],
		 data[0][4], data[0][5], data[0][6], data[1] ]
}
function mapper8(data) {
	return [ data[0][0], data[0][1], data[0][2], data[0][3],
		 data[0][4], data[0][5], data[0][6], data[0][7], data[1] ]
}
function mapper9(data) {
	return [ data[0][0], data[0][1], data[0][2], data[0][3],
		 data[0][4], data[0][5], data[0][6], data[0][7],
		 data[0][8], data[1] ]
}
function mapper10(data) {
	return [ data[0][0], data[0][1], data[0][2], data[0][3],
		 data[0][4], data[0][5], data[0][6], data[0][7],
		 data[0][8], data[0][9], data[1] ]
}
function mapper11(data) {
	return [ data[0][0], data[0][1], data[0][2], data[0][3],
		 data[0][4], data[0][5], data[0][6], data[0][7],
		 data[0][8], data[0][9], data[0][10], data[1] ]
}
function mapper12(data) {
	return [ data[0][0], data[0][1], data[0][2], data[0][3],
		 data[0][4], data[0][5], data[0][6], data[0][7],
		 data[0][8], data[0][9], data[0][10], data[0][11], data[1] ]
}
function mapper13(data) {
	return [ data[0][0], data[0][1], data[0][2], data[0][3],
		 data[0][4], data[0][5], data[0][6], data[0][7],
		 data[0][8], data[0][9], data[0][10], data[0][11],
		 data[0][12], data[1] ]
}
function mapper14(data) {
	return [ data[0][0], data[0][1], data[0][2], data[0][3],
		 data[0][4], data[0][5], data[0][6], data[0][7],
		 data[0][8], data[0][9], data[0][10], data[0][11],
		 data[0][12], data[0][13], data[1] ]
}
function mapper15(data) {
	return [ data[0][0], data[0][1], data[0][2], data[0][3],
		 data[0][4], data[0][5], data[0][6], data[0][7],
		 data[0][8], data[0][9], data[0][10], data[0][11],
		 data[0][12], data[0][13], data[0][14], data[1] ]
}
function mapper16(data) {
	return [ data[0][0], data[0][1], data[0][2], data[0][3],
		 data[0][4], data[0][5], data[0][6], data[0][7],
		 data[0][8], data[0][9], data[0][10], data[0][11],
		 data[0][12], data[0][13], data[0][14], data[0][15], data[1] ]
}
function mapper17(data) {
	return [ data[0][0], data[0][1], data[0][2], data[0][3],
		 data[0][4], data[0][5], data[0][6], data[0][7],
		 data[0][8], data[0][9], data[0][10], data[0][11],
		 data[0][12], data[0][13], data[0][14], data[0][15],
		 data[0][16], data[1] ]
}
// da0.cartesian(da1).cartesian(da2).map(mapper2).collect().toArray().then(function(res) {console.log(res); uc.end()});

da0.cartesian(da1).cartesian(da2).map(mapper2).count().then(function(res) {console.log(res); uc.end()});


