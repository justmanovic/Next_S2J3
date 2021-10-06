const fileName = process.argv[2];
const fs = require('fs');

const merge = (arr1, arr2) => {
  let sortedMerge = []
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] > arr2[0]) {
      sortedMerge.push(arr2[0])
      arr2.shift()
    } else {
      sortedMerge.push(arr1[0])
      arr1.shift()
    }
  }
  return [...sortedMerge, ...arr1, ...arr2]
}

function mergeSort(unsortedArray) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  const middle = Math.floor(unsortedArray.length / 2);
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}



let tab = [8, 1, 2, 0, 12, 10, 3, 21, Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]


// console.log(merge([1], [2]))

// lecture et création du tableau à partir du fichier text
fs.readFile(fileName, text => {
  var text = fs.readFileSync(fileName).toString('utf-8');
  let arr = text.split(' ').map(el => parseInt(el))
  // console.log(arr)
  // bubbleSort(arr)
  // insertionSortIt(arr)
  // placePivot(arr)
  console.log(mergeSort(arr))

});


const exo1 = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++)
      if (arr[i] + arr[j] === k)
        return true
  }
}

// console.log(exo1([10, 15, 3, 6], 16))
const sujet2A = [3, 7, 8, 3, 6, 1]
const sujet2B = [1, 4, 5, 8]

const exo2 = (arr) => {
  let sunnyBuildings = []
  for (let i = 0; i < arr.length - 1; i++) {
    let j = i + 1
    let higher = true
    while (j <= arr.length - 1) {
      if (arr[i] <= arr[j]) {
        higher = false
      }
      j++
    }
    if (higher === true) {
      sunnyBuildings.push(arr[i])
    }
  }
  return sunnyBuildings.length + 1
}
// console.log(exo2(sujet2B))



const exo6 = arr => {
  let nb = 1
  let max = arr[arr.length - 1]
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i]
      nb += 1
    }
  }
  return nb
}
// console.log(exo6(sujet2A))

const exo4 = arr => {
  let sunnyBuildings = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < sunnyBuildings[sunnyBuildings.length - 1])
      sunnyBuildings.push(arr[i])
    else {
      sunnyBuildings.pop()
      sunnyBuildings.push(arr[i])
    }
  }
  return sunnyBuildings.length
}


// console.log(exo4(sujet2A))


