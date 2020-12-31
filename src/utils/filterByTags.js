const filterByTags = (tree, tags, tagFilter) => {
  let result = [];
  let tagIds = Object.keys(tags);

  tree.forEach(el => {
    if(tagIds.indexOf(el.id) !== -1) {
      for(let i = 0; i < tagFilter.length; i++) {
        if(tags[el.id].indexOf(tagFilter[i]) !== -1) {
          result.push(el);
          return null;
        }
      }
    }
  });

  return result;
}

export default filterByTags;
