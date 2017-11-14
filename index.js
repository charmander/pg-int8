'use strict';

// selected so (BASE - 1) * 0x100000000 + 0xffffffff is a safe integer
const BASE = 1000000;

const readInt8 = buffer => {
	let high = buffer.readInt32BE(0);
	let low = buffer.readUInt32BE(4);
	let sign = '';

	if (high < 0) {
		high = ~high + (low === 0);
		low = (~low + 1) >>> 0;
		sign = '-';
	}

	let result = '';

	{
		const carry = high % BASE;
		high = high / BASE >>> 0;

		const t = 0x100000000 * carry + low;
		low = t / BASE >>> 0;
		const digits = '' + (t - BASE * low);

		if (low === 0 && high === 0) {
			return sign + digits + result;
		}

		let pad = '';
		const l = 6 - digits.length;

		for (let i = 0; i < l; i++) {
			pad += '0';
		}

		result = pad + digits + result;
	}

	{
		const carry = high % BASE;
		high = high / BASE >>> 0;

		const t = 0x100000000 * carry + low;
		low = t / BASE >>> 0;
		const digits = '' + (t - BASE * low);

		if (low === 0 && high === 0) {
			return sign + digits + result;
		}

		let pad = '';
		const l = 6 - digits.length;

		for (let i = 0; i < l; i++) {
			pad += '0';
		}

		result = pad + digits + result;
	}

	{
		const carry = high % BASE;
		high = high / BASE >>> 0;

		const t = 0x100000000 * carry + low;
		low = t / BASE >>> 0;
		const digits = '' + (t - BASE * low);

		if (low === 0 && high === 0) {
			return sign + digits + result;
		}

		let pad = '';
		const l = 6 - digits.length;

		for (let i = 0; i < l; i++) {
			pad += '0';
		}

		result = pad + digits + result;
	}

	{
		const carry = high % BASE;
		const t = 0x100000000 * carry + low;
		const digits = '' + t % BASE;

		return sign + digits + result;
	}
};

module.exports = readInt8;
