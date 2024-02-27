const printNumbers = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
      (() => {
        console.log(numbers[i]);
      })();
    }
  };
  
  const numbers = [1, 2, 3, 4, 5];
  printNumbers(numbers);
