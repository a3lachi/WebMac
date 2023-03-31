
const borderSize = 6 ;

export const bordersCondition = (elem,x,y,width,height) => {
  const bol =  x-1 < borderSize ? "lef" :  y-1 < borderSize ? "top" :  x-1 > width - borderSize ? "rig" :  y-1 > height - borderSize ? "bot" : false 
  
  if (bol==='top') {
    elem.style.bottom = elem.style.top.split('px')[0] + height + 'px'
    elem.style.position = 'fixed'
    elem.style.removeProperty("top");
    

  }
  return {bol:bol}
}

export const resizeTop = (elem,delta,height) => {
  // elem.style.height = delta + height + 'px'

}
