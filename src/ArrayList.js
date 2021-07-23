/*
Copyright (c) 2020 LieutenantPeacock

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
class ArrayList {
	#arr

	constructor(arg) {
		this.#arr = arg && [...arg] || [];
	}

	add(...elems) {
		this.#arr.push(...elems);
	}

	addAll(obj) {
		this.add(...obj);
	}

	removeAtIndex(idx) {
		if (idx >= 0 && idx < this.#arr.length) {
			this.#arr.splice(idx, 1);
		}
	}

	get(idx) {
		return this.#arr[idx];
	}

	addAtIndex(idx, ...elems) {
		this.#arr.splice(idx, 0, ...elems);
	}

	set(idx, elem) {
		this.#arr[idx] = elem;
	}

	removeIf(predicate) {
		this.#arr = this.#arr.filter((elem, idx) => !predicate(elem, idx));
	}

	remove(obj) {
		const idx = indexOf(obj);
		if (idx !== -1) this.#arr.splice(idx, 1);
	}

	indexOf(obj) {
		for (let i = 0; i < this.#arr.length; i++) {
			if (this.#arr[i] === obj || typeof this.#arr[i]?.equals === 'function' && this.#arr[i].equals(obj))
				return i;
		}
		return -1;
	}

	size() {
		return this.#arr.length;
	}

	isEmpty() {
		return this.#arr.length === 0;
	}

	hashCode() {
		let hashCode = 1;
		for (const element of this)
			hashCode = 31 * hashCode +
				(typeof element.hashCode === 'function' ? element.hashCode() :
					!isNaN(+element) ? +element : 0);
		return hashCode;
	}

	equals(obj) {
		if (obj.constructor !== ArrayList || this.size() != obj.size()) return false;
		for (let i = 0, size = this.size(); i < size; i++) {
			const a = this.get(i), b = obj.get(i);
			if (a !== b &&
				(typeof a?.equals !== 'function' || !a.equals(b))) {
				return false;
			}
		}
		return true;
	}

	[Symbol.iterator]() {
		return this.#arr.values();
	}
}