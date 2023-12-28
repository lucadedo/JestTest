

function analayzeArray(arr) {
    
    const res = {};  
    let min = arr[0];
    let max = arr[0];
    let average = arr[Math.floor((arr.length / 2))];

    for (let i = 1; i < arr.length; i++) {

      if (arr[i] < min) {
        min = arr[i];
      }else if(max < arr[i])
        max = arr[i];
    }
    res["average"] = average;
    res["min"] = min;
    res["max"] = max;
    res["length"] = arr.length;
    return res
}

module.exports = analayzeArray;