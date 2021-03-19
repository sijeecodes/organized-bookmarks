const findInTree = (tree, targetId) => {
  const findById = (tree, target) => {
    for(let i = 0; i < tree.length; i++) {
      if(tree[i].id === target) {
        return tree[i];
      } else if(tree[i].children) {
        if(findById(tree[i].children, target)) {
          return findById(tree[i].children, target);
        }
      }
    }
  }
  
  let result = 'inexest';
  if(tree.id === 0) {
    result = findById(tree[0].children, targetId);
  } else {
   result = findById(tree, targetId);
  }

  return result;
};

export default findInTree;
