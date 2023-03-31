function numbers (n, m) {
    let result = n + m;
          if (result >= 0) {
          console.log('Wynik dodawania wynosi ' + result);
        } else {
          console.log('Wynik jest nieprawidłowy');
        }let result2 = n - m;
          if (result2 >= 0) {
          console.log('Wynik odejmowania wynosi ' + result2); 
        } else {
          console.log('Wynik jest nieprawidłowy');
        }
      let result3 = n * m;
          if (result3 >= 0) {
          console.log('Wynik mnożenia wynosi ' + result3);    
        } else {
          console.log('Wynik jest nieprawidłowy');
        }
      }
      
     console.log(numbers(15,35));