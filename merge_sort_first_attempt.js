
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