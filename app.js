// const fileName = process.argv[2];
// const fs = require('fs');

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

// console.log(merge([10], [1]))
var nbImbrications = 0

const mergeSort = (arr, lengthSort = arr.length) => {
  console.log("nb imbrications = ", nbImbrications += 1)
  console.log("tableau de départ :", arr)
  let sortedArray = []
  let remainingArray = arr
  console.log(remainingArray)
  if (remainingArray.length == 0) {
    // console.log("remaining array est vide")
    return sortedArray
  }
  while (remainingArray.length > 0 && sortedArray.length < lengthSort) {
    // console.log("je refais un tour")
    // console.log("remaining array debut de boucle :", remainingArray)
    // console.log("sorted array debut de boucle :", sortedArray)
    if (sortedArray.length > 0) {
      // console.log("le sorted Array est de longueur", sortedArray.length, sortedArray)
      let nextSortedArray = mergeSort(remainingArray, sortedArray.length)
      console.log("nb imbrications = ", nbImbrications -= 1)
      console.log("le sorted Array est de longueur", nextSortedArray.length, sortedArray)
      console.log("le next sorted Array est de longueur", nextSortedArray.length, nextSortedArray)
      // remainingArray.splice(0, sortedArray.length)
      sortedArray = merge(sortedArray, nextSortedArray)
      console.log("le sorted Array mergé est de longueur", sortedArray.length, sortedArray)
    }
    else if (remainingArray.length > 1) {
      // console.log("le remaining Array est de longueur", remainingArray.length, remainingArray)
      sortedArray = merge(remainingArray.splice(0, 1), remainingArray.splice(0, 1))
      // console.log("remaining array post merge :", remainingArray)
      // console.log("sorted array post merge :", sortedArray)
    }
    else {
      // console.log("le remaining Array est de longueur", remainingArray.length, remainingArray)
      sortedArray = remainingArray
      // console.log("remaining array :", remainingArray)
      // console.log("sorted array :", sortedArray)
    }
  }
  return sortedArray
}

let tab = [8, 1, 2, 0, 12, 10, 3, 21, Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]


// console.log(merge([1], [2]))

// // lecture et création du tableau à partir du fichier text
// fs.readFile(fileName, text => {
//   var text = fs.readFileSync(fileName).toString('utf-8');
//   let arr = text.split(' ').map(el => parseInt(el))
//   // console.log(arr)
//   // bubbleSort(arr)
//   // insertionSortIt(arr)
//   // placePivot(arr)

// });


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
console.log(exo2(sujet2B))



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
console.log(exo6(sujet2A))

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


console.log(exo4(sujet2A))


