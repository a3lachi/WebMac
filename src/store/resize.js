


export const resizeTop = (elem,delta) => {
  elem.style.bottom = elem.style.top + elem.style.height
  elem.style.removeProperty("top");
  elem.style.height += delta
}

