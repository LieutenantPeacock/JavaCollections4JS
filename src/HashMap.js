/*
Copyright (c) 2019 LieutenantPeacock

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
class HashMap {
	#map
	#size = 0
	
	constructor(map){
		this.#map = map instanceof HashMap ? new Map(map.#map) : new Map;
	}
	
	put(key, value){
		let arr = this.#getBucket(key);
		if(!arr) this.#map.set(HashMap.#hash(key), arr = []);
		const idx = this.#findKeyIndex(key);
		let prev;
		if(idx !== -1){
			prev = arr[idx].value;
			arr[idx].value = value;
		} else {
			arr.push({key,value});
			this.#size++;
		}
		return prev;
	}
	
	putIfAbsent(key, value){
		if(!this.containsKey(key)){
			return this.put(key, value);
		}
	}
	
	get(key){
		const idx = this.#findKeyIndex(key);
		if(idx !== -1) return this.#getBucket(key)[idx].value;
	}
	
	getOrDefault(key, defaultValue){
		return containsKey(key) ? get(key) : defaultValue;
	}
	
	containsKey(key){
		return this.#findKeyIndex(key) !== -1;
	}
	
	containsValue(value){
		for(const arr of this.#map.values()){
			if(arr.some(entry => HashMap.#equals(entry.value, value))){
				return true;
			}
		}
		return false;
	}
	
	clear(){
		this.#size = 0;
		this.#map.clear();
	}
	
	remove(key){
		const idx = this.#findKeyIndex(key);
		if(idx !== -1){
			this.#size--;
			return this.#getBucket(key).splice(idx, 1)[0].value;
		}
	}
	
	forEach(consumer){
		[...this].forEach(arr => consumer(arr[0], arr[1]));
	}
	
	isEmpty(){
		return this.#size === 0;
	}
	
	size(){
		return this.#size;
	}
	
	hashCode(){
		let h = 0;
		for(const [hash, vals] of this.#map){
			if(arr.length) h += hash * vals.length;
		}
		return h;
	}
	
	equals(obj){
		if(!(obj instanceof HashMap) || this.size() != obj.size()) return false;
		for(const val of this.#map.values()){
			if(val.some(({key, value})=>!obj.containsKey(key) || !HashMap.#equals(value, obj.get(key)))) return false;
		}
		return true;
	}
	
	[Symbol.iterator]() {
		return [...this.#map.values()].flatMap(arr => arr.map(({key,value})=>[key,value])).values();
	}
		
	#findKeyIndex(key){
		const arr = this.#getBucket(key);
		return arr ? arr.findIndex(entry => HashMap.#equals(entry.key, key)): -1;
	}
	
	#getBucket(key){
		return this.#map.get(HashMap.#hash(key));
	}
	
	static #hash(key){
		return typeof key?.hashCode !== 'function' ? key: key.hashCode();
	}
	
	static #equals(a, b){
		return a === b || typeof a?.equals === 'function' && a.equals(b);
	}
}