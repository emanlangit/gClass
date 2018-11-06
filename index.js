let isOdd = (number) => {
    return (number % 2 != 0 ) ? true : false;
};

// console.log(isOdd(4));
// console.log(isOdd(3));


let factorial = (number) => {
    if (number > 0)
        return number * factorial(number - 1);
    else    
        return 1;
}

// console.log(factorial(5));

let hasDuplicates = (string) => {

    let hash = {};

    for(let s of string){
        if(!(s in hash)){
            hash[s] = 1;
        }else{
            return true;
        }
    }
    return false; 
}

// console.log(hasDuplicates("racecar"));
// console.log(hasDuplicates("boeing"));

let testArr = [];

for(let i = 0; i < 100; i++){
    testArr.push(i);
}

// console.log(testArr);

let fizzbuzz = (arr) => {
    for(let num in arr){
        let temp = ""
        if(num % 5 == 0 && num % 3 == 0)
            temp = "fizzbuzz"
        else if(num % 5 == 0)
            temp = "fizz"
        else if( num % 3 == 0)
            temp = "buzz"
        else
            temp = num
        console.log(num + ": " + temp);    
    }
    return null;
}

// fizzbuzz(testArr);

testData = [2, 2, 22, 3, 4, 5, 35, 5, 5, 45, 5, 11, 15, 5];


class Math {

    constructor(data){
        this.testArr = data;
    };

    mode () {
        let hash = {};

        for(let num of this.testArr){
            if(!(num in hash)){
                hash[num] = 1;
            }else{
                hash[num] += 1;
            }
        }

        return Object.keys(hash).reduce((x, y) => hash[x] > hash[y] ? x: y);
    }

    mean () {
        let total = 0
        for(let num of this.testArr){
            total += num;
        }
        return total/this.testArr.length
    }

    median (arrOfNums) {
        let result = 0
        // modify to sort numerically
        this.testArr.sort((a, b) => a - b);

        return this.testArr[this.testArr.length/2];
    }
}

let mathObject = new Math(testData);
console.log("mean: " + mathObject.mean());
console.log("mode: " + mathObject.mode());
console.log("median: " + mathObject.median());
