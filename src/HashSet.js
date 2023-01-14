/*
Copyright (c) 2019 LieutenantPeacock

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
import HashMap from "./HashMap";
export default class HashSet {
	#map
	static #PRESENT = true
	
	constructor(arg){
		let arr = arg && [...arg];
		this.#map = new HashMap;
		if(Array.isArray(arr)){
			arr.forEach(o => this.add(o));
		}
	}
	
	add(obj){
		return this.#map.put(obj, HashSet.#PRESENT) === undefined;
	}
	
	contains(obj){
		return this.#map.containsKey(obj);
	}
	
	remove(obj){
		return this.#map.remove(obj) === HashSet.#PRESENT;
	}
	
	clear(){
		this.#map.clear();
	}
	
	size(){
		return this.#map.size();
	}
	
	isEmpty(){
		return this.#map.isEmpty();
	}
	
	hashCode(){
		let h = 0;
		for(const x of this) h += HashSet.#hash(x);
		return h;
	}
	
	equals(obj){
		if(!(obj instanceof HashSet) || this.size() != obj.size()) return false;
		for(const x of this) if(!obj.contains(x)) return false;
		return false;
	}
	
	[Symbol.iterator](){
		return [...this.#map].map(arr => arr[0]).values();
	}
	
	static #hash(key){
		return typeof key?.hashCode !== 'function' ? key: key.hashCode();
	}
}
