
export const borderSize = 6 ;

export const resizeTop = (elem,delta) => {
  elem.style.bottom = elem.style.top + elem.style.height
  elem.style.removeProperty("top");
  elem.style.height += delta
}

export const bordersCondition = (x,y,width,height) => {
  const bol =  x-1 < borderSize ? "lef" :  y-1 < borderSize ? "top" :  x-1 > width - borderSize ? "rig" :  y-1 > height - borderSize ? "bot" : false 
  return {bol:bol}
}

