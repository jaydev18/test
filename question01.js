// Create a custom sorting function which sorts an array of numbers in ascending order.
let num = [2, 1, 6, 18, 9, 0]


function sortAscendingOrder(num){
    let arrayLength = num.length
    let swapp = false;
    for(let i = 0; i < arrayLength; i++){
      for(let j=0; j < arrayLength - i - 1 ; j++){
        if (num[j] > num[j + 1]) {
            [num[j], num[j + 1]] = [num[j + 1], num[j]];
            swapp = true;
          }
      }
    }
    return num
}
console.log(sortAscendingOrder(num))
