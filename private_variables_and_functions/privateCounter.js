const Counter = (() => { // Counter is an Immediately Invoked Function Expression (IIFE) that creates a closure.
    // Private variable
    let count = 0;
  
    // Private function
    const incrementCounter = () => {
      count++;
    };
  
    // Public methods (accessible from outside)
    const increment = () => {
      incrementCounter();
    };
  
    const getCount = () => {
      return count;
    };
  
    return {
      increment,
      getCount
    };
  })();
  
  // Attempting to access the count directly will not work
  console.log(Counter.count); // Output: undefined
  
  // Accessing the counter via its public methods
  Counter.increment();
  Counter.increment();
  console.log(Counter.getCount()); // Output: 2
  
  // The count variable remains private and inaccessible from outside
  console.log(Counter.count); // Output: undefined
  