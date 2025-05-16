export const $ = (template, props) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = template;

  const domNode = wrapper.firstChild;

  for (const key in props) {
    domNode[key] = props[key];
  }

  return domNode;
};
