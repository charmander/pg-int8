'use strict';

const fs = require('fs');
const path = require('path');

const binary = fs.readFileSync(path.join(__dirname, 'parseint8.wasm'));
const {parseLow, parseHigh} = new WebAssembly.Instance(new WebAssembly.Module(binary)).exports;

module.exports = buffer => {
	const high = buffer.readInt32BE(0);
	const low = buffer.readUInt32BE(4);

	if (high === 0 || high === -1) {
		return '' + (low | 0);
	}

	const lowDecimal = '' + parseLow(high, low);
	const highDecimal = parseHigh(high, low);

	let pad = '';
	const l = 9 - lowDecimal.length;

	for (let i = 0; i < l; i++) {
		pad += '0';
	}

	return '' + highDecimal + pad + lowDecimal;
};
