
const borderSize = 6 ;

export const bordersCondition = (elem,x,y,width,height,move) => {
  const bol =  x-1 < borderSize ? "lef" :  y-1 < borderSize ? "top" :  x-1 > width - borderSize ? "rig" :  y-1 > height - borderSize ? "bot" : false 
  console.log('bol in func bordr ',bol)
  if (move === true) return bol ;
  if (bol==='top') {
    var docHeight = document.documentElement.clientHeight;
    elem.style.bottom = ( Number(docHeight) - Number(elem.style.top.split('px')[0]) - Number(height)) + 'px'
    elem.style.position = 'fixed'
    elem.style.removeProperty("top");
  }
  return bol
}

export const resizeTop = (elem,delta,height) => {
  console.log( height - delta  + 'px' , elem)
  elem.style.height = height - delta  + 'px'

}


export const MouseCursor = (mouse) => {
  return mouse ==='top' ? 'n-resize	' : mouse === 'bot' ? 's-resize	' : mouse ==='rig' ? 'e-resize' : mouse === 'lef' ?  'w-resize' : 'default' 
}
