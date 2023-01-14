/*
Copyright (c) 2020 LieutenantPeacock

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
/*
	Wrapper for an object that allows specifying an equals and hashCode function.
	The equals function must take two objects as parameters and return a boolean indicating whether they are equal.
	The hashCode function must take one object as input and return its hash code.
*/
export default class HashedObject {
	#value
	#equalsFn
	#hashCode
	static DEFAULT_EQUALS = (a,b)=>a===b;
	static ITERABLE_HASHCODE = val => {
		let hashCode = 1;
	    for (const element of val)
	        hashCode = 31 * hashCode + 
	        (typeof element.hashCode === 'function' ? element.hashCode() : 
	        	!isNaN(+element) ? +element : 0);
	    return hashCode;
	}
	static STRING_HASHCODE = val => {
		return [...val].reduce((hash,char)=>hash*31 + char.codePointAt(0), 0);
	}
	static ITERABLE_EQUALS = (a,b)=>{
		if(a.constructor !== b.constructor) return false;
		const arr1 = [...a];
		const arr2 = [...b];
		if(arr1.length != arr2.length) return false;
		for(let i = 0, len = arr1.length; i < len; i++){
			if(arr1[i] !== arr2[i] && 
				(typeof arr1[i]?.equals !== 'function' || !arr1[i].equals(arr2[i]))){
				return false;
			}
		}
		return true;
	}
	
	constructor(value, hashCodeFn, equalsFn){
		this.#value = value;
		this.#hashCode = hashCodeFn(value);
		this.#equalsFn = equalsFn || HashedObject.DEFAULT_EQUALS;
	}
	
	static factory(hashCodeFn, equalsFn){
		return obj => new HashedObject(obj, hashCodeFn, equalsFn);
	}
	
	hashCode(){
		return this.#hashCode;
	}
	
	equals(obj){
		return this.#equalsFn(this.#value, obj instanceof HashedObject ? obj.#value : obj);
	}
	
	getValue(){
		return this.#value;
	}
}
