const mySlice = (originalArray, startIdx, endIdx) => {
    var slicedArray = []

    if(startIdx===undefined) {  //handles instances of startIdx as
        startIdx = 0            // undefined or negative
    } else if(startIdx<0) {
        let absStartIdx = originalArray.length + startIdx
        startIdx = absStartIdx
    }

    if(endIdx===undefined) {              //handles instances of endIdx
        endIdx = originalArray.length     // as undefined or negative
    } else if(endIdx<0) {
        let absEndIdx = originalArray.length + endIdx
        endIdx = absEndIdx
    }

    for(let i=startIdx; i<endIdx; i++) {   //loops through original array to
        slicedArray.push(originalArray[i]) //create new array based on slice
    }                                      //indices

    return slicedArray;
}

console.log(mySlice([1, 2, 3], -3, -1))