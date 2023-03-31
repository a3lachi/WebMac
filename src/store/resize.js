
const borderSize = 6 ;

export const bordersCondition = (x,y,width,height) => {
  const bol =  x-1 < borderSize ? "lef" :  y-1 < borderSize ? "top" :  x-1 > width - borderSize ? "rig" :  y-1 > height - borderSize ? "bot" : false 
  return {bol:bol}
}

export const resizeTop = (elem,delta,height) => {
  console.log(elem)
  const top = elem.style.top.split('px')[0]
  elem.style.bottom = top + height
  elem.style.removeProperty("top");
  elem.style.position = 'fixed' ;
  elem.style.height = delta + height + 'px'
}
