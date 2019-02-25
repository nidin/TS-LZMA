(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lzma"] = factory();
	else
		root["lzma"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lzma/LZMA.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/MEMORY.ts":
/*!***********************!*\
  !*** ./src/MEMORY.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar MEMORY = /** @class */ (function () {\n    function MEMORY() {\n    }\n    MEMORY.allocateUint8 = function (len) {\n        MEMORY.u8 = new Uint8Array(len);\n    };\n    MEMORY.allocateUint16 = function (len) {\n        MEMORY.u16 = new Uint16Array(len);\n    };\n    MEMORY.allocateUint32 = function (len) {\n        MEMORY.u32 = new Uint32Array(len);\n    };\n    MEMORY.getUint8 = function () {\n        if (!MEMORY.u8) {\n            MEMORY.allocateUint8(10);\n        }\n        return MEMORY.u8Index++;\n    };\n    MEMORY.getUint16 = function () {\n        if (!MEMORY.u16) {\n            MEMORY.allocateUint16(24);\n        }\n        return MEMORY.u16Index++;\n    };\n    MEMORY.getUint32 = function () {\n        if (!MEMORY.u32) {\n            MEMORY.allocateUint32(10);\n        }\n        return MEMORY.u32Index++;\n    };\n    MEMORY.u8Index = 0;\n    MEMORY.u16Index = 0;\n    MEMORY.u32Index = 0;\n    return MEMORY;\n}());\nexports.MEMORY = MEMORY;\n\n\n//# sourceURL=webpack://lzma/./src/MEMORY.ts?");

/***/ }),

/***/ "./src/lzma/BitTreeDecoder.ts":
/*!************************************!*\
  !*** ./src/lzma/BitTreeDecoder.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar LZMA_1 = __webpack_require__(/*! ./LZMA */ \"./src/lzma/LZMA.ts\");\n/**\n * LZMA Decoder\n * @author Nidin Vinayakan | nidinthb@gmail.com\n */\nvar BitTreeDecoder = /** @class */ (function () {\n    function BitTreeDecoder(numBits) {\n        this.numBits = numBits;\n        this.probs = new Uint16Array(1 << this.numBits);\n    }\n    BitTreeDecoder.prototype.init = function () {\n        LZMA_1.LZMA.INIT_PROBS(this.probs);\n    };\n    BitTreeDecoder.prototype.decode = function (rc) {\n        var m = 1; //Uint16\n        for (var i = 0; i < this.numBits; i++)\n            m = (m << 1) + rc.decodeBit(this.probs, m);\n        return m - (1 << this.numBits);\n    };\n    BitTreeDecoder.prototype.reverseDecode = function (rc) {\n        return LZMA_1.LZMA.BitTreeReverseDecode(this.probs, this.numBits, rc);\n    };\n    BitTreeDecoder.constructArray = function (numBits, len) {\n        var vec = [];\n        for (var i = 0; i < len; i++) {\n            vec[i] = new BitTreeDecoder(numBits);\n        }\n        return vec;\n    };\n    return BitTreeDecoder;\n}());\nexports.BitTreeDecoder = BitTreeDecoder;\n\n\n//# sourceURL=webpack://lzma/./src/lzma/BitTreeDecoder.ts?");

/***/ }),

/***/ "./src/lzma/LZMA.ts":
/*!**************************!*\
  !*** ./src/lzma/LZMA.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar LzmaDecoder_1 = __webpack_require__(/*! ./LzmaDecoder */ \"./src/lzma/LzmaDecoder.ts\");\nvar LZMA = /** @class */ (function () {\n    function LZMA() {\n        this.decoder = new LzmaDecoder_1.LzmaDecoder();\n    }\n    LZMA.INIT_PROBS = function (p) {\n        for (var i = 0; i < p.length; i++) {\n            p[i] = this.PROB_INIT_VAL;\n        }\n    };\n    LZMA.BitTreeReverseDecode = function (probs, numBits, rc, offset) {\n        if (offset === void 0) { offset = 0; }\n        var m = 1;\n        var symbol = 0;\n        for (var i = 0; i < numBits; i++) {\n            var bit = rc.decodeBit(probs, offset + m);\n            m <<= 1;\n            m += bit;\n            symbol |= bit << i;\n        }\n        return symbol;\n    };\n    LZMA.prototype.unpackSize = function (data) {\n        var header = new Uint8Array(13);\n        var i; //int\n        for (i = 0; i < 13; i++) {\n            header[i] = data[i];\n        }\n        var unpackSize = 0; //UInt64\n        var unpackSizeDefined = false;\n        for (i = 0; i < 8; i++) {\n            var b = header[5 + i];\n            if (b != 0xff) {\n                unpackSizeDefined = true;\n            }\n            unpackSize |= b << (8 * i);\n        }\n        return unpackSize;\n    };\n    LZMA.prototype.decode = function (data) {\n        this.data = data;\n        //var header:Uint8Array = data.readUint8Array(13);\n        var header = new Uint8Array(13);\n        var i; //int\n        for (i = 0; i < 13; i++) {\n            header[i] = data[i];\n        }\n        this.decoder.decodeProperties(header);\n        //console.log(\"lc=\"+this.decoder.lc+\", lp=\"+this.decoder.lp+\", pb=\"+this.decoder.pb);\n        //console.log(\"Dictionary Size in properties = \"+this.decoder.dictSizeInProperties);\n        //console.log(\"Dictionary Size for decoding  = \"+this.decoder.dictSize);\n        //return this.ucdata;\n        var unpackSize = 0; //UInt64\n        var unpackSizeDefined = false;\n        for (i = 0; i < 8; i++) {\n            var b = header[5 + i];\n            if (b != 0xff) {\n                unpackSizeDefined = true;\n            }\n            unpackSize |= b << (8 * i);\n        }\n        this.decoder.markerIsMandatory = !unpackSizeDefined;\n        /*if (unpackSizeDefined){\n                    console.log(\"Uncompressed Size : \"+ unpackSize +\" bytes\");\n                }else{\n                    console.log(\"End marker is expected\");\n                }*/\n        this.decoder.rangeDec.inStream = data;\n        this.decoder.create();\n        // we support the streams that have uncompressed size and marker.\n        var res = this.decoder.decode(unpackSizeDefined, unpackSize); //int\n        //console.log(\"Read    \", this.decoder.rangeDec.in_pos);\n        //console.log(\"Written \", this.decoder.outWindow.out_pos);\n        if (res == LZMA.LZMA_RES_ERROR) {\n            throw 'LZMA decoding error';\n        }\n        else if (res == LZMA.LZMA_RES_FINISHED_WITHOUT_MARKER) {\n            //console.log(\"Finished without end marker\");\n        }\n        else if (res == LZMA.LZMA_RES_FINISHED_WITH_MARKER) {\n            if (unpackSizeDefined) {\n                if (this.decoder.outWindow.out_pos != unpackSize) {\n                    throw 'Finished with end marker before than specified size';\n                }\n                //console.log(\"Warning: \");\n            }\n            //console.log(\"Finished with end marker\");\n        }\n        else {\n            throw 'Internal Error';\n        }\n        if (this.decoder.rangeDec.corrupted) {\n            console.log('Warning: LZMA stream is corrupted');\n        }\n        return this.decoder.outWindow.trim();\n    };\n    LZMA.LZMA_DIC_MIN = 1 << 12;\n    LZMA.LZMA_RES_ERROR = 0;\n    LZMA.LZMA_RES_FINISHED_WITH_MARKER = 1;\n    LZMA.LZMA_RES_FINISHED_WITHOUT_MARKER = 2;\n    LZMA.kNumBitModelTotalBits = 11;\n    LZMA.kNumMoveBits = 5;\n    LZMA.PROB_INIT_VAL = (1 << LZMA.kNumBitModelTotalBits) / 2; //1024\n    LZMA.kNumPosBitsMax = 4;\n    LZMA.kNumStates = 12;\n    LZMA.kNumLenToPosStates = 4;\n    LZMA.kNumAlignBits = 4;\n    LZMA.kStartPosModelIndex = 4;\n    LZMA.kEndPosModelIndex = 14;\n    LZMA.kNumFullDistances = 1 << (LZMA.kEndPosModelIndex >>> 1);\n    LZMA.kMatchMinLen = 2;\n    return LZMA;\n}());\nexports.LZMA = LZMA;\n\n\n//# sourceURL=webpack://lzma/./src/lzma/LZMA.ts?");

/***/ }),

/***/ "./src/lzma/LenDecoder.ts":
/*!********************************!*\
  !*** ./src/lzma/LenDecoder.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar BitTreeDecoder_1 = __webpack_require__(/*! ./BitTreeDecoder */ \"./src/lzma/BitTreeDecoder.ts\");\nvar LZMA_1 = __webpack_require__(/*! ./LZMA */ \"./src/lzma/LZMA.ts\");\n/**\n * LZMA Decoder\n * @author Nidin Vinayakan | nidinthb@gmail.com\n */\nvar LenDecoder = /** @class */ (function () {\n    function LenDecoder() {\n        this.lowCoder = BitTreeDecoder_1.BitTreeDecoder.constructArray(3, 1 << LZMA_1.LZMA.kNumPosBitsMax);\n        this.midCoder = BitTreeDecoder_1.BitTreeDecoder.constructArray(3, 1 << LZMA_1.LZMA.kNumPosBitsMax);\n        this.highCoder = new BitTreeDecoder_1.BitTreeDecoder(8);\n    }\n    LenDecoder.prototype.init = function () {\n        this.choice = [LZMA_1.LZMA.PROB_INIT_VAL, LZMA_1.LZMA.PROB_INIT_VAL];\n        this.highCoder.init();\n        for (var i = 0; i < 1 << LZMA_1.LZMA.kNumPosBitsMax; i++) {\n            this.lowCoder[i].init();\n            this.midCoder[i].init();\n        }\n    };\n    LenDecoder.prototype.decode = function (rc, posState) {\n        if (rc.decodeBit(this.choice, 0) == 0) {\n            return this.lowCoder[posState].decode(rc);\n        }\n        if (rc.decodeBit(this.choice, 1) == 0) {\n            return 8 + this.midCoder[posState].decode(rc);\n        }\n        return 16 + this.highCoder.decode(rc);\n    };\n    return LenDecoder;\n}());\nexports.LenDecoder = LenDecoder;\n\n\n//# sourceURL=webpack://lzma/./src/lzma/LenDecoder.ts?");

/***/ }),

/***/ "./src/lzma/LzmaDecoder.ts":
/*!*********************************!*\
  !*** ./src/lzma/LzmaDecoder.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\n/**\n * LZMA Decoder\n * @author Nidin Vinayakan | nidinthb@gmail.com\n */\nvar LZMA_1 = __webpack_require__(/*! ./LZMA */ \"./src/lzma/LZMA.ts\");\nvar RangeDecoder_1 = __webpack_require__(/*! ./RangeDecoder */ \"./src/lzma/RangeDecoder.ts\");\nvar OutWindow_1 = __webpack_require__(/*! ./OutWindow */ \"./src/lzma/OutWindow.ts\");\nvar BitTreeDecoder_1 = __webpack_require__(/*! ./BitTreeDecoder */ \"./src/lzma/BitTreeDecoder.ts\");\nvar LenDecoder_1 = __webpack_require__(/*! ./LenDecoder */ \"./src/lzma/LenDecoder.ts\");\nvar MEMORY_1 = __webpack_require__(/*! ../MEMORY */ \"./src/MEMORY.ts\");\nvar LzmaDecoder = /** @class */ (function () {\n    function LzmaDecoder() {\n        this.posSlotDecoder = BitTreeDecoder_1.BitTreeDecoder.constructArray(6, LZMA_1.LZMA.kNumLenToPosStates); //6\n        this.alignDecoder = new BitTreeDecoder_1.BitTreeDecoder(LZMA_1.LZMA.kNumAlignBits);\n        this.posDecoders = new Uint16Array(1 + LZMA_1.LZMA.kNumFullDistances - LZMA_1.LZMA.kEndPosModelIndex);\n        this.isMatch = new Uint16Array(LZMA_1.LZMA.kNumStates << LZMA_1.LZMA.kNumPosBitsMax);\n        this.isRep = new Uint16Array(LZMA_1.LZMA.kNumStates);\n        this.isRepG0 = new Uint16Array(LZMA_1.LZMA.kNumStates);\n        this.isRepG1 = new Uint16Array(LZMA_1.LZMA.kNumStates);\n        this.isRepG2 = new Uint16Array(LZMA_1.LZMA.kNumStates);\n        this.isRep0Long = new Uint16Array(LZMA_1.LZMA.kNumStates << LZMA_1.LZMA.kNumPosBitsMax);\n        this.lenDecoder = new LenDecoder_1.LenDecoder();\n        this.repLenDecoder = new LenDecoder_1.LenDecoder();\n        this.rangeDec = new RangeDecoder_1.RangeDecoder();\n        this.outWindow = new OutWindow_1.OutWindow();\n    }\n    LzmaDecoder.prototype.init = function () {\n        this.loc1 = MEMORY_1.MEMORY.getUint32() | 0;\n        this.loc2 = MEMORY_1.MEMORY.getUint32() | 0;\n        this.matchBitI = MEMORY_1.MEMORY.getUint16() | 0;\n        this.matchByteI = MEMORY_1.MEMORY.getUint16() | 0;\n        this.bitI = MEMORY_1.MEMORY.getUint16() | 0;\n        this.symbolI = MEMORY_1.MEMORY.getUint16() | 0;\n        this.prevByteI = MEMORY_1.MEMORY.getUint16() | 0;\n        this.litStateI = MEMORY_1.MEMORY.getUint16() | 0;\n        this.initLiterals();\n        this.initDist();\n        LZMA_1.LZMA.INIT_PROBS(this.isMatch);\n        LZMA_1.LZMA.INIT_PROBS(this.isRep);\n        LZMA_1.LZMA.INIT_PROBS(this.isRepG0);\n        LZMA_1.LZMA.INIT_PROBS(this.isRepG1);\n        LZMA_1.LZMA.INIT_PROBS(this.isRepG2);\n        LZMA_1.LZMA.INIT_PROBS(this.isRep0Long);\n        this.lenDecoder.init();\n        this.repLenDecoder.init();\n    };\n    LzmaDecoder.prototype.create = function () {\n        this.outWindow.create(this.dictSize);\n        this.createLiterals();\n    };\n    //Private\n    LzmaDecoder.prototype.createLiterals = function () {\n        this.litProbs = new Uint16Array(0x300 << (this.lc + this.lp));\n    };\n    LzmaDecoder.prototype.initLiterals = function () {\n        var num = 0x300 << (this.lc + this.lp); //UInt32\n        for (var i = 0; i < num; i++) {\n            this.litProbs[i] = LZMA_1.LZMA.PROB_INIT_VAL;\n        }\n    };\n    LzmaDecoder.prototype.decodeLiteral = function (state, rep0) {\n        //unsigned , UInt32\n        MEMORY_1.MEMORY.u16[this.prevByteI] = 0; //unsigned byte\n        if (!this.outWindow.isEmpty())\n            MEMORY_1.MEMORY.u16[this.prevByteI] = this.outWindow.getByte(1);\n        MEMORY_1.MEMORY.u16[this.symbolI] = 1;\n        MEMORY_1.MEMORY.u16[this.litStateI] =\n            ((this.outWindow.totalPos & ((1 << this.lp) - 1)) << this.lc) +\n                (MEMORY_1.MEMORY.u16[this.prevByteI] >>> (8 - this.lc));\n        var probsOffset = (0x300 * MEMORY_1.MEMORY.u16[this.litStateI]) | 0;\n        if (state >= 7) {\n            MEMORY_1.MEMORY.u16[this.matchByteI] = this.outWindow.getByte(rep0 + 1);\n            do {\n                MEMORY_1.MEMORY.u16[this.matchBitI] = (MEMORY_1.MEMORY.u16[this.matchByteI] >>> 7) & 1;\n                MEMORY_1.MEMORY.u16[this.matchByteI] <<= 1;\n                MEMORY_1.MEMORY.u16[this.bitI] = this.rangeDec.decodeBit(this.litProbs, probsOffset +\n                    ((1 + MEMORY_1.MEMORY.u16[this.matchBitI]) << 8) +\n                    MEMORY_1.MEMORY.u16[this.symbolI]);\n                MEMORY_1.MEMORY.u16[this.symbolI] =\n                    (MEMORY_1.MEMORY.u16[this.symbolI] << 1) | MEMORY_1.MEMORY.u16[this.bitI];\n                if (MEMORY_1.MEMORY.u16[this.matchBitI] != MEMORY_1.MEMORY.u16[this.bitI])\n                    break;\n            } while (MEMORY_1.MEMORY.u16[this.symbolI] < 0x100);\n        }\n        while (MEMORY_1.MEMORY.u16[this.symbolI] < 0x100) {\n            MEMORY_1.MEMORY.u16[this.symbolI] =\n                (MEMORY_1.MEMORY.u16[this.symbolI] << 1) |\n                    this.rangeDec.decodeBit(this.litProbs, probsOffset + MEMORY_1.MEMORY.u16[this.symbolI]);\n        }\n        this.outWindow.putByte(MEMORY_1.MEMORY.u16[this.symbolI] - 0x100);\n    };\n    LzmaDecoder.prototype.decodeDistance = function (len) {\n        //unsigned byte\n        var lenState = len; //unsigned byte\n        if (lenState > LZMA_1.LZMA.kNumLenToPosStates - 1)\n            lenState = LZMA_1.LZMA.kNumLenToPosStates - 1;\n        var posSlot = this.posSlotDecoder[lenState].decode(this.rangeDec); //unsigned byte\n        if (posSlot < 4)\n            return posSlot;\n        var numDirectBits = (posSlot >>> 1) - 1; //unsigned byte\n        MEMORY_1.MEMORY.u32[this.loc1] = (2 | (posSlot & 1)) << numDirectBits; //UInt32\n        if (posSlot < LZMA_1.LZMA.kEndPosModelIndex) {\n            MEMORY_1.MEMORY.u32[this.loc1] += LZMA_1.LZMA.BitTreeReverseDecode(this.posDecoders, numDirectBits, this.rangeDec, MEMORY_1.MEMORY.u32[this.loc1] - posSlot);\n        }\n        else {\n            MEMORY_1.MEMORY.u32[this.loc1] +=\n                this.rangeDec.decodeDirectBits(numDirectBits - LZMA_1.LZMA.kNumAlignBits) <<\n                    LZMA_1.LZMA.kNumAlignBits;\n            MEMORY_1.MEMORY.u32[this.loc1] += this.alignDecoder.reverseDecode(this.rangeDec);\n        }\n        return MEMORY_1.MEMORY.u32[this.loc1];\n    };\n    LzmaDecoder.prototype.initDist = function () {\n        for (var i = 0; i < LZMA_1.LZMA.kNumLenToPosStates; i++) {\n            this.posSlotDecoder[i].init();\n        }\n        this.alignDecoder.init();\n        LZMA_1.LZMA.INIT_PROBS(this.posDecoders);\n    };\n    LzmaDecoder.prototype.decodeProperties = function (properties) {\n        var prop = new Uint8Array(4);\n        prop[0] = properties[0];\n        if (prop[0] >= 9 * 5 * 5) {\n            throw 'Incorrect LZMA properties';\n        }\n        prop[1] = prop[0] % 9;\n        prop[0] /= 9;\n        prop[2] = prop[0] / 5;\n        prop[3] = prop[0] % 5;\n        this.lc = prop[1];\n        this.pb = prop[2];\n        this.lp = prop[3];\n        this.dictSizeInProperties = 0;\n        for (var i = 0; i < 4; i++) {\n            this.dictSizeInProperties |= properties[i + 1] << (8 * i);\n        }\n        this.dictSize = this.dictSizeInProperties;\n        if (this.dictSize < LZMA_1.LZMA.LZMA_DIC_MIN) {\n            this.dictSize = LZMA_1.LZMA.LZMA_DIC_MIN;\n        }\n    };\n    LzmaDecoder.prototype.updateState_Literal = function (state) {\n        if (state < 4)\n            return 0;\n        else if (state < 10)\n            return state - 3;\n        else\n            return state - 6;\n    };\n    LzmaDecoder.prototype.updateState_ShortRep = function (state) {\n        return state < 7 ? 9 : 11;\n    };\n    LzmaDecoder.prototype.updateState_Rep = function (state) {\n        return state < 7 ? 8 : 11;\n    };\n    LzmaDecoder.prototype.updateState_Match = function (state) {\n        return state < 7 ? 7 : 10;\n    };\n    LzmaDecoder.prototype.decode = function (unpackSizeDefined, unpackSize) {\n        //UInt64\n        this.init();\n        this.rangeDec.init();\n        if (unpackSizeDefined) {\n            this.outWindow.outStream = new Uint8Array(new ArrayBuffer(unpackSize));\n        }\n        else {\n            this.outWindow.outStream = new Uint8Array(4);\n        }\n        var rep0 = 0, rep1 = 0, rep2 = 0, rep3 = 0; //UInt32\n        var state = 0; //unsigned byte\n        for (;;) {\n            if (unpackSizeDefined && unpackSize == 0 && !this.markerIsMandatory) {\n                if (this.rangeDec.isFinishedOK()) {\n                    return LZMA_1.LZMA.LZMA_RES_FINISHED_WITHOUT_MARKER;\n                }\n            }\n            var posState = this.outWindow.totalPos & ((1 << this.pb) - 1);\n            if (this.rangeDec.decodeBit(this.isMatch, (state << LZMA_1.LZMA.kNumPosBitsMax) + posState) == 0) {\n                if (unpackSizeDefined && unpackSize == 0) {\n                    return LZMA_1.LZMA.LZMA_RES_ERROR;\n                }\n                this.decodeLiteral(state, rep0);\n                state = this.updateState_Literal(state);\n                unpackSize--;\n                continue;\n            }\n            var len;\n            if (this.rangeDec.decodeBit(this.isRep, state) != 0) {\n                if (unpackSizeDefined && unpackSize == 0) {\n                    return LZMA_1.LZMA.LZMA_RES_ERROR;\n                }\n                if (this.outWindow.isEmpty()) {\n                    return LZMA_1.LZMA.LZMA_RES_ERROR;\n                }\n                if (this.rangeDec.decodeBit(this.isRepG0, state) == 0) {\n                    if (this.rangeDec.decodeBit(this.isRep0Long, (state << LZMA_1.LZMA.kNumPosBitsMax) + posState) == 0) {\n                        state = this.updateState_ShortRep(state);\n                        this.outWindow.putByte(this.outWindow.getByte(rep0 + 1));\n                        unpackSize--;\n                        continue;\n                    }\n                }\n                else {\n                    var dist;\n                    if (this.rangeDec.decodeBit(this.isRepG1, state) == 0) {\n                        dist = rep1;\n                    }\n                    else {\n                        if (this.rangeDec.decodeBit(this.isRepG2, state) == 0) {\n                            dist = rep2;\n                        }\n                        else {\n                            dist = rep3;\n                            rep3 = rep2;\n                        }\n                        rep2 = rep1;\n                    }\n                    rep1 = rep0;\n                    rep0 = dist;\n                }\n                len = this.repLenDecoder.decode(this.rangeDec, posState);\n                state = this.updateState_Rep(state);\n            }\n            else {\n                rep3 = rep2;\n                rep2 = rep1;\n                rep1 = rep0;\n                len = this.lenDecoder.decode(this.rangeDec, posState);\n                state = this.updateState_Match(state);\n                // console.log('-----');\n                rep0 = this.decodeDistance(len);\n                // console.log('rep0:', rep0);\n                if (rep0 == 0xffffffff) {\n                    return this.rangeDec.isFinishedOK()\n                        ? LZMA_1.LZMA.LZMA_RES_FINISHED_WITH_MARKER\n                        : LZMA_1.LZMA.LZMA_RES_ERROR;\n                }\n                if (unpackSizeDefined && unpackSize == 0) {\n                    return LZMA_1.LZMA.LZMA_RES_ERROR;\n                }\n                if (rep0 >= this.dictSize || !this.outWindow.checkDistance(rep0)) {\n                    return LZMA_1.LZMA.LZMA_RES_ERROR;\n                }\n            }\n            len += LZMA_1.LZMA.kMatchMinLen;\n            var isError = false;\n            if (unpackSizeDefined && unpackSize < len) {\n                len = unpackSize;\n                isError = true;\n            }\n            this.outWindow.copyMatch(rep0 + 1, len);\n            unpackSize -= len;\n            if (isError) {\n                return LZMA_1.LZMA.LZMA_RES_ERROR;\n            }\n        }\n    };\n    return LzmaDecoder;\n}());\nexports.LzmaDecoder = LzmaDecoder;\n\n\n//# sourceURL=webpack://lzma/./src/lzma/LzmaDecoder.ts?");

/***/ }),

/***/ "./src/lzma/OutWindow.ts":
/*!*******************************!*\
  !*** ./src/lzma/OutWindow.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * LZMA Decoder\n * @author Nidin Vinayakan | nidinthb@gmail.com\n */\nexports.__esModule = true;\nvar OutWindow = /** @class */ (function () {\n    function OutWindow() {\n        this.out_pos = 0;\n    }\n    OutWindow.prototype.create = function (dictSize) {\n        this.buf = new Uint8Array(dictSize);\n        this.pos = 0;\n        this.size = dictSize;\n        this.isFull = false;\n        this.totalPos = 0;\n    };\n    OutWindow.prototype.putByte = function (b) {\n        this.totalPos++;\n        this.buf[this.pos++] = b;\n        if (this.pos == this.size) {\n            this.pos = 0;\n            this.isFull = true;\n        }\n        if (this.outStream.length === this.out_pos) {\n            var tmp = this.outStream;\n            this.outStream = new Uint8Array(tmp.length * 2);\n            this.outStream.set(tmp);\n        }\n        this.outStream[this.out_pos++] = b;\n    };\n    OutWindow.prototype.trim = function () {\n        var out = this.outStream.subarray(0, this.out_pos);\n        return out;\n    };\n    OutWindow.prototype.getByte = function (dist) {\n        return this.buf[dist <= this.pos ? this.pos - dist : this.size - dist + this.pos];\n    };\n    OutWindow.prototype.copyMatch = function (dist, len) {\n        for (; len > 0; len--) {\n            this.putByte(this.getByte(dist));\n        }\n    };\n    OutWindow.prototype.checkDistance = function (dist) {\n        //UInt32\n        return dist <= this.pos || this.isFull;\n    };\n    OutWindow.prototype.isEmpty = function () {\n        return this.pos == 0 && !this.isFull;\n    };\n    return OutWindow;\n}());\nexports.OutWindow = OutWindow;\n\n\n//# sourceURL=webpack://lzma/./src/lzma/OutWindow.ts?");

/***/ }),

/***/ "./src/lzma/RangeDecoder.ts":
/*!**********************************!*\
  !*** ./src/lzma/RangeDecoder.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\n/**\n * LZMA Decoder\n * @author Nidin Vinayakan | nidinthb@gmail.com\n */\nvar RangeDecoder = /** @class */ (function () {\n    function RangeDecoder() {\n        this.rangeI = 0;\n        this.codeI = 1;\n        this.loc1 = 2;\n        this.loc2 = 3;\n        this.in_pos = 13;\n    }\n    RangeDecoder.prototype.isFinishedOK = function () {\n        return this.U32[this.codeI] == 0;\n    };\n    RangeDecoder.prototype.init = function () {\n        this.U32 = new Uint32Array(4);\n        this.U16 = new Uint16Array(4);\n        this.corrupted = false;\n        if (this.inStream[this.in_pos++] != 0) {\n            this.corrupted = true;\n        }\n        this.U32[this.rangeI] = 0xffffffff;\n        this.U32[this.codeI] = 0;\n        for (var i = 0; i < 4; i++) {\n            this.U32[this.codeI] =\n                (this.U32[this.codeI] << 8) | this.inStream[this.in_pos++];\n        }\n        if (this.U32[this.codeI] == this.U32[this.rangeI]) {\n            this.corrupted = true;\n        }\n    };\n    RangeDecoder.prototype.normalize = function () {\n        if (this.U32[this.rangeI] < RangeDecoder.kTopValue) {\n            this.U32[this.rangeI] <<= 8;\n            this.U32[this.codeI] =\n                (this.U32[this.codeI] << 8) | this.inStream[this.in_pos++];\n        }\n    };\n    RangeDecoder.prototype.decodeDirectBits = function (numBits) {\n        this.U32[this.loc1] = 0; //UInt32\n        do {\n            this.U32[this.rangeI] >>>= 1;\n            this.U32[this.codeI] -= this.U32[this.rangeI];\n            this.U32[this.loc2] = 0 - (this.U32[this.codeI] >>> 31);\n            this.U32[this.codeI] += this.U32[this.rangeI] & this.U32[this.loc2];\n            if (this.U32[this.codeI] == this.U32[this.rangeI]) {\n                this.corrupted = true;\n            }\n            this.normalize();\n            this.U32[this.loc1] <<= 1;\n            this.U32[this.loc1] += this.U32[this.loc2] + 1;\n        } while (--numBits);\n        return this.U32[this.loc1];\n    };\n    RangeDecoder.prototype.decodeBit = function (prob, index) {\n        this.U16[0] = prob[index];\n        //bound\n        this.U32[2] = (this.U32[0] >>> 11) * this.U16[0];\n        //var symbol:number;\n        if (this.U32[1] < this.U32[2]) {\n            this.U16[0] += ((1 << 11) - this.U16[0]) >>> 5;\n            this.U32[0] = this.U32[2];\n            this.U16[1] = 0;\n        }\n        else {\n            //v -= v >>> LZMA.kNumMoveBits;\n            this.U16[0] -= this.U16[0] >>> 5;\n            this.U32[1] -= this.U32[2];\n            this.U32[0] -= this.U32[2];\n            this.U16[1] = 1;\n        }\n        prob[index] = this.U16[0];\n        //this.normalize();\n        if (this.U32[0] < 16777216) {\n            this.U32[0] <<= 8;\n            this.U32[1] = (this.U32[1] << 8) | this.inStream[this.in_pos++];\n        }\n        return this.U16[1];\n    };\n    RangeDecoder.kTopValue = 1 << 24;\n    return RangeDecoder;\n}());\nexports.RangeDecoder = RangeDecoder;\n\n\n//# sourceURL=webpack://lzma/./src/lzma/RangeDecoder.ts?");

/***/ })

/******/ });
});