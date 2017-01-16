(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Disi"] = factory();
	else
		root["Disi"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	let checkLength = function(A,B) {
	    if(A.length === B.length){
	        return true
	    } else {
	        throw "Vectors of different lengths";
	    }
	}


	class Disi {

	    static euclidian(A,B) {
	        checkLength(A,B);

	        let sum = 0;

	        for(let i=0; i<A.length; i++){
	            sum += Math.pow(A[i] - B[i], 2);
	        }
	        return Math.sqrt(sum);
	    }

	    static manhattan(A,B) {
	        checkLength(A,B);

	        let sum = 0;

	        for(let i=0; i<A.length; i++){
	            sum += Math.abs(A[i] - B[i]);
	        }
	        return sum;
	    }

	    static supremum(A,B) {
	        checkLength(A,B);

	        let result = 0;

	        for(let i=0; i<A.length; i++){
	            let current = Math.abs(A[i] - B[i]);
	            result = current > result ? current : result;
	        }
	        return result;
	    }

	    static mikowski(A,B, r) {
	        checkLength(A,B);

	        let sum = 0;

	        for(let i=0; i<A.length; i++){
	            sum += Math.abs(Math.pow(A[i] - B[i], r));
	        }
	        return Math.pow(sum, 1/r);
	    }

	    static chi(A,B){
	        checkLength(A,B);


	    }

	}

	module.exports = Disi;

/***/ }
/******/ ])
});
;