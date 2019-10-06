# Java Collections For JavaScript

This repository contains implementations of some commonly-used Java collections in JavaScript.

## HashMap

[HashMap.js](src/HashMap.js) implements a [Hash Table/Map](https://en.wikipedia.org/wiki/Hash_table) with similar methods to [Java's HashMap](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html). 
All objects (except primitives) used as keys must implement a <code>hashCode</code> method to return an integer hash code as well as an <code>equals</code> method that accepts another object as a parameter and returns whether or not the value of the current object is equal to parameter. Objects that are considered equal must have the same hash code, but the converse is not true. <br>
Note that <code>HashMap</code> instances are iterable, so <code>[...myHashMap]</code> will return an array of arrays, where each inner array consists of the key and value for a mapping (in that order).

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
		<td><code>clear()<code></td><td>Removes all mappings in the <code>HashMap</code>.</td>
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

[HashSet.js](src/HashSet.js) implements an unordered collection with unique elements. Similar to <code>HashMap</code>, each element (except primitives) stored in a <code>HashSet</code> must implement a <code>hashCode</code> and <code>equals</code> method. To use <code>HashSet</code>, <code>HashMap</code> must be included first. <br>
Note that <code>HashSet</code> instances are iterable, so <code>[...myHashSet]</code> will return an array containing the elements in the <code>HashSet</code>.

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
