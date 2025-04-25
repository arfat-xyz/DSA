# Accessing Methods in JavaScript

## What is Accessing?

Accessing means getting the value of a particular element at a specific index.

## Methods for Accessing:

1. **Direct Indexing (Array)**:

   - **Example**:
     ```javascript
     const data = [10, 20, 30];
     console.log(data[1]); // Outputs 20
     ```

2. **at()**:

   - **Example**:
     ```javascript
     const data = [10, 20, 30];
     console.log(data.at(-1)); // Outputs 30 (last element)
     ```

3. **find()**:

   - **Example**:
     ```javascript
     const data = [10, 20, 30];
     console.log(data.find((item) => item > 15)); // Outputs 20
     ```

4. **findIndex()**:

   - **Example**:
     ```javascript
     const data = [10, 20, 30];
     console.log(data.findIndex((item) => item > 15)); // Outputs 1 (index of 20)
     ```

5. **filter()**:

   - **Example**:
     ```javascript
     const data = [10, 20, 30];
     console.log(data.filter((item) => item > 15)); // Outputs [20, 30]
     ```

6. **map()**:

   - **Example**:
     ```javascript
     const data = [10, 20, 30];
     console.log(data.map((item) => item * 2)); // Outputs [20, 40, 60]
     ```

7. **Destructuring Assignment (Array)**:

   - **Example**:
     ```javascript
     const data = [10, 20, 30];
     const [first, second] = data;
     console.log(first); // Outputs 10
     ```

8. **Dot Notation (Object)**:

   - **Example**:
     ```javascript
     const person = { name: "John", age: 30 };
     console.log(person.name); // Outputs "John"
     ```

9. **Bracket Notation (Object)**:

   - **Example**:
     ```javascript
     const person = { name: "John", age: 30 };
     console.log(person["age"]); // Outputs 30
     ```

10. **Object.keys()**:

    - **Example**:
      ```javascript
      const person = { name: "John", age: 30 };
      console.log(Object.keys(person)); // Outputs ["name", "age"]
      ```

11. **Object.values()**:

    - **Example**:
      ```javascript
      const person = { name: "John", age: 30 };
      console.log(Object.values(person)); // Outputs ["John", 30]
      ```

12. **Object.entries()**:

    - **Example**:
      ```javascript
      const person = { name: "John", age: 30 };
      console.log(Object.entries(person)); // Outputs [["name", "John"], ["age", 30]]
      ```

13. **hasOwnProperty()**:

    - **Example**:
      ```javascript
      const person = { name: "John", age: 30 };
      console.log(person.hasOwnProperty("name")); // Outputs true
      ```

14. **Dot Notation for Nested Objects**:

    - **Example**:
      ```javascript
      const person = { name: "John", address: { city: "New York" } };
      console.log(person.address.city); // Outputs "New York"
      ```

15. **Bracket Notation for Nested Objects**:

    - **Example**:
      ```javascript
      const person = { name: "John", address: { "home city": "New York" } };
      console.log(person["address"]["home city"]); // Outputs "New York"
      ```

16. **Destructuring Nested Objects**:

    - **Example**:
      ```javascript
      const person = { name: "John", address: { city: "New York" } };
      const {
        address: { city },
      } = person;
      console.log(city); // Outputs "New York"
      ```

17. **Accessing Nested Arrays**:

    - **Example**:
      ```javascript
      const data = [
        [1, 2],
        [3, 4],
        [5, 6],
      ];
      console.log(data[1][0]); // Outputs 3
      ```

18. **String.charAt()**:

    - **Example**:
      ```javascript
      const str = "Hello";
      console.log(str.charAt(1)); // Outputs "e"
      ```

19. **String.at()**:

    - **Example**:
      ```javascript
      const str = "Hello";
      console.log(str.at(-1)); // Outputs "o" (last character)
      ```

20. **Array.slice()**:

    - **Example**:
      ```javascript
      const data = [10, 20, 30];
      console.log(data.slice(1, 3)); // Outputs [20, 30]
      ```

21. **Array.splice()**:
    - **Example**:
      ```javascript
      const data = [10, 20, 30];
      data.splice(1, 1, 25);
      console.log(data); // Outputs [10, 25, 30]
      ```

---

This document outlines the various methods available in JavaScript for accessing values from arrays, objects, and strings. These methods can help you retrieve or modify specific values based on your needs.
