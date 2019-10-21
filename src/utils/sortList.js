const sortList = (originalList, criteriaName) => {
  let criteria;
  switch(criteriaName) {
    case 'alphabetical': {
      criteria = 'title';
      break;
    }
    case 'recentlyAdded': {
      criteria = 'dateAdded';
      break;
    }
    default:
      return originalList;
  }

  let folders = [];
  let links = [];
  for(let i = 0; i < originalList.length; i++) {
    if(originalList[i].url) {
      links.push([originalList[i]]);
    } else {
      folders.push([originalList[i]]);
    }
  }

  const merge = (arrOne, arrTwo) => {
    let iOne = 0, iTwo = 0;
    let tempResult = [];

    while(iOne < arrOne.length || iTwo < arrTwo.length) {
      if(iOne === arrOne.length) {
        tempResult.push(arrTwo[iTwo]);
        iTwo++;
      } else if(iTwo === arrTwo.length) {
        tempResult.push(arrOne[iOne]);
        iOne++;

      } else if(criteria === 'title'){
        if(arrOne[iOne][criteria].toLowerCase() <= arrTwo[iTwo][criteria].toLowerCase()) {
          tempResult.push(arrOne[iOne]);
          iOne++;
        } else {
          tempResult.push(arrTwo[iTwo]);
          iTwo++;
        }

      } else {
        if(arrOne[iOne][criteria] <= arrTwo[iTwo][criteria]) {
          tempResult.push(arrOne[iOne]);
          iOne++;
        } else {
          tempResult.push(arrTwo[iTwo]);
          iTwo++;
        }
      }
    }

    return tempResult;
  }

  const mergeSort = (arr) => {
    const reqTimes = Math.ceil(Math.log2(arr.length));
    for(let i = 0; i < reqTimes; i++) {
      let merged = [];
      for(let j = 0; j < arr.length; j++) {
        if(j === arr.length - 1) {
          merged.push(arr[j]);
        } else {
          merged.push(merge(arr[j], arr[j+1]));
          j++;
        }
      }
      arr = merged;
    }
    return arr[0];
  }

  return [...mergeSort(folders), ...mergeSort(links)];
};

export default sortList;
