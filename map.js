
/*
Get total orders

    Return the total amount of orders.*/
    const orders = [
        { amount: 250 },
        { amount: 400 },
        { amount: 100 },
        { amount: 325 }
      ];
        
      function total(acc,val){
        return ((parseInt(acc)+parseInt(val.amount)));
      }
      const ord=orders.reduce(total,0);
      console.log(ord)
      //increment by 1
  
      const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
        const ar=arrayOfNumbers.map(incr)
  
        function incr(item){
          return item+1
        }
  
        console.log(ar)
  
  
        /*
        . Filter Evens
  
      Create a function called filterEvens that filters an array and only 
      return even numbers. The function should take an array of numbers as an
       argument, and should not use a loop.
  
      Examples:*/
  
      const ar1=[1,2,3,11,12,13]; //returns [2,12]
      const ar2=[22,2,31,110,6,13]; //returns [22,2,110,6]
  
      function filteve(item){
        if((item%2)==0){
          return item;
        }
      }
      const ar3=ar1.filter(filteve)
      console.log(ar3)
  
      /*. Filter Friends
  
      Given an array, create a function which filters array based on a search query.
  
      Examples*/
  /*
      (filterItems(friends, 'ka')); // ["Rika"];
      console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
  */
      const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
      let ars=[];
      function filterfriends(str,str2){
         for(a=0;a<str.length;a++){
          if(friends[a].includes(str2)){
            //console.log(friends[a])
            ars.push(friends[a])
          }
         }
         console.log(ars)
      }
      filterfriends(friends,'e')
      
      /*5. Sum Up
  
      Write a function called sum that uses the reduce method to sum up an array of numbers.
  
      Examples:
      sum([1,2,3,4,5]); //returns 15
      sum([6,7,7]); //returns 20*/
      arsd=[1,2,3,4,5]
      arsd2=[6,7,7]
      function sum(acc,val){
        return (parseInt(acc)+parseInt(val))
      }
  
      const totals2=arsd.reduce(sum,0)
      console.log(totals2)
  
      const totals3=arsd2.reduce(sum,0)
      console.log(totals3)