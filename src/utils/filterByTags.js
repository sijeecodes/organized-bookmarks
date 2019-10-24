const filterByTags = (tree, tags, tagFilter) => {
  let result = [];
  // tags = {1: ['purple','red'], 2:[]}
  // tagFilter = ['red', 'orange']
  // get ids, then find in tree

  let tagIds = Object.keys(tags);
  // [1, 2];

  for(let i = 0; i < tagIds.length; i++) {
    let matched = 0;

    tagFilter.map(el => {
      if(tags[tagIds[i]].indexOf(el) !== -1) {
        matched++;
      }
      return null;
    });

    if(matched === tagFilter.length){
      for(let j = 0; j < tree.length; j++) {
        if(tree[j].id === tagIds[i]) {
          result.push(tree[j]);
        }
      }
    }
  }

  return result;
}

export default filterByTags;
