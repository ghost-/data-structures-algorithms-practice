// Selection Sort

function selectionSort(arr) {
    for (let i=0; i < arr.length; i++) {
        indexOfMin = i
        
        for (let j=i+1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j
            }
        }

        if (indexOfMin !== i) {
            let temp = arr[i]
            arr[i] = arr[indexOfMin]
            arr[indexOfMin] = temp
        }
    }

    return arr
}

module.exports = selectionSort
