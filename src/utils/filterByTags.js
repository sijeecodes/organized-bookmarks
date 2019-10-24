const filterByTags = (tree, tags, tagFilter) => {
  let result = [];

  // const search = (subTree) => {
  //   for(let i = 0; i < subTree.length; i++) {
  //     if(subTree[i].id) {
  //
  //
  //       if(subTree[i].url.toLowerCase().includes(keyword)) {
  //         allLinks.push(subTree[i]);
  //       } else if(subTree[i].title.toLowerCase().includes(keyword)) {
  //         allLinks.push(subTree[i]);
  //       }
  //     } else {
  //       if(subTree[i].title.toLowerCase().includes(keyword)) {
  //         allFolders.push(subTree[i]);
  //       }
  //       if(subTree[i].children.length > 0) {
  //         search(subTree[i].children);
  //       }
  //     }
  //   }
  // };
  // search(tree);

  return result;
}

export default filterByTags;
