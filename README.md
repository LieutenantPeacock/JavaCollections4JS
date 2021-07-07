# Java Collections For JavaScript

This repository contains implementations of some commonly-used Java collections in JavaScript.

## HashMap
Although JavaScript has a native <code>Map</code> object, key equality is determined by the <code>sameValueZero</code> algorithm, so objects with the exact same properties are not considered equal unless they are the same reference (<code>{a: 1, b: 2} !== {a: 1, b: 2}</code>). This cannot be customized. <br>
[HashMap.js](src/HashMap.js) provides fine-grained control over what objects are considered equal, so both primitives and user-defined objects may be used as keys.
It implements a [Hash Table/Map](https://en.wikipedia.org/wiki/Hash_table) with similar methods to [Java's HashMap](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html). 
All objects (except primitives) used as keys must implement a <code>hashCode</code> method to return an integer hash code as well as an <code>equals</code> method that accepts another object as a parameter and returns whether or not the value of the current object is equal to parameter. Objects that are considered equal must have the same hash code, but the converse is not true. <br>
Note that <code>HashMap</code> instances are iterable, so <code>[...myHashMap]</code> will return an array of arrays, where each inner array consists of the key and value for a mapping (in that order). <br>
An example of usage can be found [here](examples/HashMapExample.html).

### Usage
Include the script before code that uses <code>HashMap</code>. The script can be loaded via CDN or a local downloaded copy.

```
<script src="https://cdn.jsdelivr.net/gh/LieutenantPeacock/JavaCollections4JS@1.3.0/src/HashMap.js" integrity="sha384-AD+fe06BloScT8iK5vgKw2FW3imLYjVLP6P9OS+zKpI8vIaNrBTKnQ4TCa4poj2F" crossorigin="anonymous"></script>
```

### Constructor

The constructor accepts an optional <code>HashMap</code>, which will copy the contents. Alternately, it will create an empty <code>HashMap</code>.

```
const myMap = new HashMap(); // create empty HashMap
const myMap2 = new HashMap(myMap); // create HashMap from other HashMap
```

### Instance Methods

<table>
	<tr><th>Method Signature</th><th>Description</th></tr>
	<tr>
		<td><code>put(key, value)</code></td><td>Associates the given <code>key</code> with the <code>value</code>. Returns the previous value associated with the key, or <code>undefined</code> if there was no value before.</td>
	</tr>
	<tr>
		<td><code>putIfAbsent(key, value)</code></td><td>Associates the given <code>key</code> with the <code>value</code> only if there was no value previously associated with the key.</td>
	</tr>
	<tr>
		<td><code>get(key)</code></td><td>Returns the value associated with the given <code>key</code> or <code>undefined</code> if there was no value.</td>
	</tr>
	<tr>
		<td><code>getOrDefault(key, defaultValue)</code></td><td>Returns the value associated with the given <code>key</code> if there is one or <code>defaultValue</code> if not.</td>
	</tr>
	<tr>
		<td><code>containsKey(key)</code></td><td>Returns <code>true</code> if the <code>HashMap</code> contains a mapping for the given <code>key</code>.</td>
	</tr>
	<tr>
		<td><code>containsValue(value)</code></td><td>Returns <code>true</code> if there is at least one key mapped to the given <code>value</code>.</td>
	</tr>
	<tr>
		<td><code>clear()</code></td><td>Removes all mappings in the <code>HashMap</code>.</td>
	</tr>
	<tr>
		<td><code>remove(key)</code></td><td>Removes the mapping for the given <code>key</code> and returns its value.</td>
	</tr>
	<tr>
		<td><code>forEach(consumer)</code></td><td>Iterates over each key-value mapping in the <code>HashMap</code> and passes the key and value of each one as arguments to the <code>consumer</code> callback function.</td>
	</tr>
	<tr>
		<td><code>isEmpty()</code></td><td>Returns <code>true</code> if there are no mappings in the <code>HashMap</code></td>
	</tr>
	<tr>
		<td><code>size()</code></td><td>Returns the number of mappings in the <code>HashMap</code>.</td>
	</tr>
	<tr>
		<td><code>hashCode()</code></td><td>Returns an integer hash code for this instance.</td>
	</tr>
	<tr>
		<td><code>equals(obj)</code></td><td>Returns <code>true</code> if the value of <code>obj</code> is equal to the value of this instance.</td>
	</tr>
</table>

## HashSet
Although JavaScript has a native <code>Set</code> object, elements are considered equal only if they are primitives with the same value or the same reference of an object. Thus, objects with the same properties and values can be duplicated many times. <br>
[HashSet.js](src/HashSet.js) provides fine-grained control over what objects are considered equal, so both primitives and user-defined objects may be inserted with uniqueness guaranteed.
It implements an unordered collection with unique elements. Similar to <code>HashMap</code>, each element (except primitives) stored in a <code>HashSet</code> must implement a <code>hashCode</code> and <code>equals</code> method. To use <code>HashSet</code>, <code>HashMap</code> must be included first. <br>
Note that <code>HashSet</code> instances are iterable, so <code>[...myHashSet]</code> will return an array containing the elements in the <code>HashSet</code>.

### Usage
Include HashMap.js and HashSet.js before code that uses <code>HashSet</code>. The scripts can be loaded via CDN or local downloaded copies.

```
<script src="https://cdn.jsdelivr.net/gh/LieutenantPeacock/JavaCollections4JS@1.3.0/src/HashMap.js" integrity="sha384-AD+fe06BloScT8iK5vgKw2FW3imLYjVLP6P9OS+zKpI8vIaNrBTKnQ4TCa4poj2F" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/gh/LieutenantPeacock/JavaCollections4JS@1.3.0/src/HashSet.js" integrity="sha384-eEGZyLlAVNsmA+/PWbSLgZR1wO9z2AWkHyVtLzr1vCenlCZ2wb9wLxNKY7Ib5lK5" crossorigin="anonymous"></script>
```

### Constructor
The constructor accepts an optional iterable object, all elements of which will be initially added to the <code>HashSet</code>. If the first parameter is not provided, it constructs an empty <code>HashSet</code>.

```
const mySet = new HashSet(); // creates empty HashSet
const mySet2 = new HashSet([1, 2, 3]); // creates a HashSet containing the elements of the array
```

### Instance methods

<table>
	<tr><th>Method Signature</th><th>Description</th></tr>
	<tr><td><code>add(obj)</code></td><td>Adds <code>obj</code> to the <code>HashSet</code>, if it is not already present. Returns <code>true</code> if the object was added, i.e. it was not already present.</td></tr>
	<tr>
		<td><code>contains(obj)</code></td>
		<td>Returns <code>true</code> if the <code>HashSet</code> contains <code>obj</code>.</td>
	</tr>
	<tr>
		<td><code>remove(obj)</code></td><td>Removes <code>obj</code> from the <code>HashSet</code>.</td>
	</tr>
	<tr>
		<td><code>clear()</code></td><td>Removes all elements from the <code>HashSet</code>.</td>
	</tr>
	<tr>
		<td><code>size()</code></td><td>Returns the number of elements in the <code>HashSet</code>.</td>
	</tr>
	<tr>
		<td><code>isEmpty()</code></td><td>Returns <code>true</code> if there are no elements in the <code>HashSet</code></td>
	</tr>
	<tr>
		<td><code>hashCode()</code></td><td>Returns an integer hash code for this instance.</td>
	</tr>
	<tr>
		<td><code>equals(obj)</code></td><td>Returns <code>true</code> if the value of <code>obj</code> is equal to the value of this instance.</td>
	</tr>
</table>

## ArrayList

[ArrayList.js](src/ArrayList.js) implements an dynamically-sized list with a <code>hashCode</code> and <code>equals</code> method. <br>
Note that <code>ArrayList</code> instances are iterable, so <code>[...myArrayList]</code> will return an array containing the elements in the <code>ArrayList</code> (in order).

### Usage
Include the script before code that uses <code>ArrayList</code>. The script can be loaded via CDN or a local downloaded copy.

```
<script src="https://cdn.jsdelivr.net/gh/LieutenantPeacock/JavaCollections4JS@1.3.0/src/ArrayList.js" integrity="sha384-Uz+oGp/Q3Lfeq6ESB4bvbOAHw0hF1RjSBPHQqjpikrVrFjF6SDx6JMV9rI3mBBFr" crossorigin="anonymous"></script>
```

### Constructor
The constructor accepts an optional iterable object to use to fill the list initially. If not specified, an empty <code>ArrayList</code> is constructed.

```
const myList = new ArrayList(); // creates an empty ArrayList
const myList2 = new ArrayList([1, 2, 3]); // creates an ArrayList containing the numbers 1, 2, 3
```

### Instance Methods
<table>
	<tr>
		<th>Method Signature</th><th>Description</th>
	</tr>
	<tr>
		<td><code>add(...elems)</code></td><td>Adds all of the arguments passed in to the <code>ArrayList</code>.</td>
	</tr>
	<tr>
		<td><code>addAll(obj)</code></td><td>Adds all the elements of the iterable <code>obj</code> to the <code>ArrayList</code>.</td>
	</tr>
	<tr>
		<td><code>removeAtIndex(idx)</code></td><td>Removes the element at the specified index.</td>
	</tr>
	<tr>
		<td><code>get(idx)</code></td><td>Returns the element at the specified index.</td>
	</tr>
	<tr>
		<td><code>addAtIndex(idx, ...elems)</code></td>
		<td>Adds the given elements to the <code>ArrayList</code> starting at the specified index.</td>
	</tr>
	<tr>
		<td><code>set(idx, elem)</code></td><td>Sets the element at the specified index to be <code>elem</code>.</td>
	</tr>
	<tr>
		<td><code>removeIf(predicate)</code></td>
		<td>Removes all elements in the <code>ArrayList</code> that match a predicate (that accepts an element as the only parameter and returns <code>true</code> if it should be removed).</td>
	</tr>
	<tr>
		<td><code>remove(obj)</code></td>
		<td>Removes the first occurrence of <code>obj</code> from the <code>ArrayList</code>.</td>
	</tr>
	<tr>
		<td><code>indexOf(obj)</code></td>
		<td>Returns the first index at which <code>obj</code> is found in the <code>ArrayList</code>.</td>
	</tr>
	<tr>
		<td><code>size()</code></td>
		<td>Returns the number of elements in the <code>ArrayList</code>.</td>
	</tr>
	<tr>
		<td><code>isEmpty()</code></td>
		<td>Returns <code>true</code> if there are no elements in the <code>ArrayList</code>.</td>
	</tr>
	<tr>
		<td><code>hashCode()</code></td><td>Returns an integer hash code for this instance.</td>
	</tr>
	<tr>
		<td><code>equals(obj)</code></td><td>Returns <code>true</code> if the value of <code>obj</code> is equal to the value of this instance.</td>
	</tr>
</table>

## Equals and HashCode for Objects You Cannot Modify

[HashedObject.js](src/HashedObject.js) provides a wrapper for an object that allows specifying an <code>equals</code> and <code>hashCode</code> function. This wrapped object can then be used as a key in a <code>HashMap</code> or stored 
in a <code>HashSet</code>.<br>

### Usage
Include the script before code that uses <code>HashedObject</code>. The script can be loaded via CDN or a local downloaded copy.

```
<script src="https://cdn.jsdelivr.net/gh/LieutenantPeacock/JavaCollections4JS@1.3.0/src/HashedObject.js" integrity="sha384-RBqyEB5bCB2ci4e3ZKiBp4W87K7LYay1qXMFO/9cUq7TndRlQKLSZ4/iFN1bMbRl" crossorigin="anonymous"></script>
```

### Constructor
The constructor takes the object to wrap, the hash function, and the equals function as arguments. <br>
The <code>equals</code> function must take two objects as parameters and return a boolean indicating whether they are equal. If not equals function is specified, the default is strict equality comparison.<br>
The <code>hashCode</code> function must take one object as input and return its hash code.

```
let wrapped = new HashedObject(myObj, hashFn, equalsFn);
```

### Instance Methods

<table>
	<tr><th>Method Signature</th><th>Description</th></tr>
	<tr>
		<td><code>hashCode()</code></td><td>Returns the hash code of the wrapped object obtained with the hashCode function passed in through the constructor.</td>
	</tr>
	<tr>
		<td><code>equals(obj)</code></td><td>Returns the result of calling the equals function provided in the constructor, passing the underlying object and <code>obj</code> as arguments.</td>
	</tr>
	<tr>
		<td><code>getValue()</code></td><td>Returns the underlying object that was wrapped.</td>
	</tr>
</table>

### Static Methods and Properties

There are some static methods and properties provided for convenience that implement common equals or hash code functions.

<table>
	<tr><th>Name</th><th>Description</th></tr>
	<tr>
		<td><code>DEFAULT_EQUALS</code></td><td>A function implementing an equals function using strict equality.</td>
	</tr>
	<tr>
		<td><code>ITERABLE_HASHCODE</code></td><td>A function implementing a hash code function for an iterable object.</td>
	</tr>
	<tr>
		<td><code>STRING_HASHCODE</code></td><td>A function implementing a hash code function for a string.</td>
	</tr>
	<tr>
		<td><code>ITERABLE_EQUALS</code></td><td>A function implementing an equals function for iterable objects by comparing elements at corresponding indexes.</td>
	</tr>
	<tr>
		<td><code>factory(hashCodeFn, equalsFn)</code></td><td>Returns a factory function from the given hash code and equals functions. The factory function accepts a single object parameter and returns a <code>HashedObject</code> from the parameter and the hash code and equals functions (provided when creating the factory).</td>
	</tr>
</table>
