console.log("hello word");

function myFunction(a, b) {
       return a + b;
    }
     
    console.log(myFunction(1, 2))
    console.log(myFunction(1, 10))
    console.log(myFunction(99, 1))

    function myStrickComparison(a, b) {
           return a === b ;
        }
         
        console.log(myStrickComparison(2, 3))
        // expected: false 
        console.log(myStrickComparison(1, '1'))
        // expected: false 
        console.log(myStrickComparison('10', '10'))
        // expected: true 