const setFavicon = (tree) => {
  return tree.map(el => {
    if(el.url) {
      let source = el.url.split('/');
      el.favicon = source[0] + '//' + source[2];
    } else if(el.children) {
      setFavicon(el.children);
    }
    
    return el;
  });
}

export default setFavicon;
