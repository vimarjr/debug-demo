
function getEvenFibonacciNumbers(size) {
    const allFiboList = [0, 1];
    const evenFiboList = [0];
    if(size < 3) {
        return evenFiboList.slice(0, size);
    }

    while(evenFiboList.size < size) {
        const nextFiboNumber = allFiboList[allFiboList.length - 1] + allFiboList[allFiboList.length - 2];
        allFiboList.push(nextFiboNumber);

        if(nextFiboNumber % 3 == 0) {
            evenFiboList.push(nextFiboNumber)
        }
    }

    return allFiboList;
}

function tester() {
    const testA = getEvenFibonacciNumbers(1);
    console.log("testA 1 even fibo", testA);
    if(JSON.stringify(testA) !== JSON.stringify([0])) {
        console.log("testA is wrong");
    } else {
        console.log("testA is correct");
    }

    console.log("\n")

    const testB = getEvenFibonacciNumbers(3);
    console.log("testB, 3 even fibo", testB);
    if(JSON.stringify(testB) !== JSON.stringify([0, 2, 8])) {
        console.log("testB is wrong");
    } else {
        console.log("testB is correct");
    }

    console.log("\n")

    const testC = getEvenFibonacciNumbers(5);
    console.log("testC, 5 even fibo", testC);
    if(JSON.stringify(testC) !== JSON.stringify([0, 2, 8, 34, 144])) {
        console.log("testC is wrong");
    } else {
        console.log("testC is correct");
    }

    console.log("\n")

    const testD = getEvenFibonacciNumbers(0);
    console.log("testD, 0 even fibo", testD);
    if(JSON.stringify(testD) !== JSON.stringify([])) {
        console.log("testD is wrong");
    } else {
        console.log("testD is correct");
    }
}

tester();

