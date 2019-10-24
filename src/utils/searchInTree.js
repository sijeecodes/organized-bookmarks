const searchInTree = (tree, keyword) => {
  if(keyword === '') {
    return tree;
  } else {
    let tempResult = [];
    keyword = keyword.toLowerCase();

    for(let i = 0; i < tree.length; i++) {
      if(tree[i].title.toLowerCase().includes(keyword)) {
        tempResult.push(tree[i]);
      } else if(tree[i].url) {
        if(tree[i].url.toLowerCase().includes(keyword)) {
          tempResult.push(tree[i]);
        }
      }
    }
    return tempResult;
  }
};

export default searchInTree;
