# JavaScript Revision Notes

Topics Covered
- Sync vs Async Execution
- Callbacks, Promises, Async/Await
- Arrays and Array Methods
- Objects and Object Methods

---

# 1. Synchronous vs Asynchronous Execution

## Synchronous Execution

Synchronous code runs **line by line**.  
Each statement waits for the previous one to complete.

Example

```javascript
console.log("Start");
console.log("Middle");
console.log("End");
```

Output

```
Start
Middle
End
```

---

## Asynchronous Execution

Asynchronous code allows tasks to run **without blocking the main thread**.

Example

```javascript
console.log("Start");

setTimeout(()=>{
  console.log("Async Task");
},2000);

console.log("End");
```

Output

```
Start
End
Async Task
```

JavaScript uses an **Event Loop** to handle asynchronous tasks.

---

## Practice Questions

### Easy

1. What is synchronous execution?
2. What is asynchronous execution?
3. Predict the output

```javascript
console.log("A");
setTimeout(()=>console.log("B"),0);
console.log("C");
```

### Medium

4. Why is JavaScript asynchronous even though it is single-threaded?
5. What is the event loop?
6. Difference between synchronous code and setTimeout?

### Hard

7. Explain call stack, web APIs, callback queue, and event loop.
8. Difference between microtask queue and macrotask queue.
9. Predict output

```javascript
console.log(1);

setTimeout(()=>console.log(2),0);

Promise.resolve().then(()=>console.log(3));

console.log(4);
```

---

## Video

JavaScript Event Loop Explained  
https://www.youtube.com/watch?v=8aGhZQkoFbQ

---

## Documentation

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous

---

# 2. Callbacks, Promises, Async/Await

---

# 2.1 Callbacks

A **callback function** is a function passed as an argument to another function.

Example

```javascript
function greet(name, callback){
  console.log("Hello " + name);
  callback();
}

function bye(){
  console.log("Bye");
}

greet("Kaushik", bye);
```

Problem: **Callback Hell**

```
login()
  ↓
getUser()
  ↓
getPosts()
  ↓
getComments()
```

---

## Callback Questions

### Easy

1. What is a callback function?
2. Why are callbacks used?

### Medium

3. What is callback hell?
4. How can callback hell be avoided?

### Hard

5. Convert callback-based code into promises.

---

# 2.2 Promises

A **Promise** represents a value that may be available now, later, or never.

Promise States

- Pending
- Fulfilled
- Rejected

Example

```javascript
const promise = new Promise((resolve, reject) => {

  let success = true;

  if(success){
    resolve("Task completed");
  }
  else{
    reject("Task failed");
  }

});

promise
.then(res => console.log(res))
.catch(err => console.log(err));
```

---

## Promise Questions

### Easy

1. What is a Promise?
2. What are the states of a Promise?

### Medium

3. What does `.then()` do?
4. What does `.catch()` do?
5. What does `.finally()` do?

### Hard

6. Explain promise chaining.
7. Difference between Promise.all and Promise.race.
8. Write a promise that resolves after 3 seconds.

---

# 2.3 Async / Await

`async` and `await` make asynchronous code easier to read.

Example

```javascript
async function fetchData(){

  try{
    const res = await fetch("https://api.example.com");
    const data = await res.json();

    console.log(data);
  }
  catch(err){
    console.log(err);
  }

}
```

---

## Async Await Questions

### Easy

1. What does `async` keyword do?
2. What does `await` keyword do?

### Medium

3. Difference between `.then()` and `await`.
4. Can we use await without async?

### Hard

5. Convert promise code to async-await.
6. What happens if await is used outside async?
7. Explain error handling in async-await.

---

## Video

Promises and Async Await  
https://www.youtube.com/watch?v=spvYqO_Kp9Q

---

## Documentation

Promises  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

Async Await  
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await

---

# 3. Arrays

Arrays store **multiple values in a single variable**.

Example

```javascript
let arr = [1,2,3,4];
```

---

## Important Array Methods

### splice()

Adds or removes elements from an array.

```javascript
let arr = [1,2,3,4];

arr.splice(1,2);

console.log(arr);
```

Output

```
[1,4]
```

---

### join()

Converts array to string.

```javascript
let arr = ["a","b","c"];

console.log(arr.join("-"));
```

Output

```
a-b-c
```

---

### forEach()

Executes a function for each element.

```javascript
arr.forEach(num => console.log(num));
```

---

### map()

Creates a new array after transformation.

```javascript
let result = arr.map(num => num * 2);
```

---

### filter()

Returns elements that satisfy a condition.

```javascript
let even = arr.filter(num => num % 2 === 0);
```

---

### reduce()

Reduces array to a single value.

```javascript
let sum = arr.reduce((acc,val)=>acc+val,0);
```

---

## Array Questions

### Easy

1. What is an array?
2. Difference between map and forEach.

### Medium

3. What does splice() do?
4. Difference between slice and splice.

### Hard

5. Find sum of array using reduce.
6. Remove duplicates from an array.

---

## Documentation

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

---

# 4. Objects

Objects store **key-value pairs**.

Example

```javascript
const user = {
  name: "Kaushik",
  age: 25
};
```

---

## Object Methods

### Object.keys()

Returns object keys.

```javascript
Object.keys(user);
```

Output

```
["name","age"]
```

---

### Object.values()

Returns object values.

```javascript
Object.values(user);
```

Output

```
["Kaushik",25]
```

---

### Object.entries()

Returns key-value pairs.

```javascript
Object.entries(user);
```

Output

```
[
 ["name","Kaushik"],
 ["age",25]
]
```

---

## Object Questions

### Easy

1. What is an object?
2. Difference between array and object.

### Medium

3. What does Object.keys() return?
4. What does Object.entries() return?

### Hard

5. Convert object to array using Object.entries().
6. Loop through object properties.

---

## Documentation

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

---

# Final Mixed Practice

Predict output

```javascript
const arr = [1,2,3];

const res = arr
  .map(x=>x*2)
  .filter(x=>x>2);

console.log(res);
```

---

Convert this to async/await

```javascript
fetch(url)
.then(res=>res.json())
.then(data=>console.log(data));
```

---

Write a promise that resolves after 2 seconds.

---

Explain difference between

- map
- filter
- reduce