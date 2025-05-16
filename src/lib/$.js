export const $ = (template, props) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = template;
  const dom = wrapper.firstChild;

  for (const k in props) {
    dom[k] = props[k];
  }

  return dom;
};
