import { resizeTop , bordersCondition , MouseCursor } from './resize.js'




const WinInfo = (text,show,left,top,w,h,gp,paddingY,cursor) => {
  return (
    {
      text:text,
      show:show,
      left:left,
      top:top,
      width:w,
      height:h,
      gap:gp,
      paddingY:paddingY,
      cursor:cursor,
    }
  )
}

const HandleResize = (event,state) => { 
  state.mouse.x = event.clientX
  state.mouse.y = event.clientY
} 


export default {


    state: {
      win:{
        About:WinInfo('About',false,250,300,500,300,10,20,'default'),
        Contact:WinInfo('Contact',false,25,20,400,200,0,0),
        APIs:WinInfo('APIs',false,25,20,700,500,0,0),
        Projects:WinInfo('Projects',false,25,20,700,500,0,0),
        Muzik:WinInfo('Muzik',false,25,20,150,500,0,0),
      },
      minWidth: 50,
      minHeight: 50,
      maxWidth: 5000,
      maxHeight: 5000,
      mouse:{
        x:0,
        y:0,
      },
      drag:{
        status:false,
        view:[],
        evx:0,
        evy:0,
      },
      resize:{
        status:false,
        direction:"",
        evw:0,
        evh:0,
        x:0,
        y:0,
      },
    },




    mutations: {
      close(state,payload) {
        state.win[payload].show = false ;
      },
      open(state,payload) {
        state.win[payload].show = true ;
        let max = 1
        for (const itm in state.win) {
          if (itm.zindex>max) max=zindex
        }
        state.win[payload].zindex = max+1 ;
        const elem = document.getElementById('win'+payload)
        elem.remove()
        document.getElementById('windows').append(elem)
      },



      mousedown(state,payload){
        const ev = payload[0]
        const elem = payload[1]
        const elemm = document.getElementById('win'+elem)
        const height = elemm.childNodes[0].style.height.split('px')[0]
        const x = ev.clientX - state.win[elem].left;
        const y = ev.clientY - state.win[elem].top;
        elemm.remove()
        document.getElementById('windows').append(elemm)
        const border = bordersCondition(elemm.childNodes[0],x,y,state.win[elem].width,height,false)
        
        if(border != false ) {
          elemm.addEventListener('move', (event,state) => HandleResize(event,state) )
          state.resize.direction = border
          state.resize.status = true
          

          // var myDiv = document.getElementById("myDiv");
          // myDiv.style.removeProperty("background-color");

          state.resize.direction = border

          state.resize.evw = state.win[elem].width
          state.resize.evh = state.win[elem].height
        }
        else {
          state.drag.view.pop()
          state.drag.view.push(elem)

          state.drag.status = true
          

          state.mouse.x = ev.clientX
          state.mouse.y = ev.clientY
        }
      },





      mousemove(state,payload){
        
        const ev = payload[0]
        const elem = payload[1]
        const elemm = document.getElementById('win'+elem)
        const height = elemm.childNodes[0].style.height.split('px')[0]
        const x = ev.clientX - state.win[elem].left;
        const y = ev.clientY - state.win[elem].top;

        // change cursor around resizing place
        const border = bordersCondition(elemm.childNodes[0],x,y,state.win[elem].width,height,true)
        state.win[elem].cursor = MouseCursor(border)



        

        
        if(state.drag.status === true) {

          console.log('dragging')

          
          state.drag.evx = ev.clientX
          state.drag.evy = ev.clientY

          state.win[elem].top +=  state.drag.evy - state.mouse.y
          state.win[elem].left +=  state.drag.evx - state.mouse.x
          state.mouse.x = ev.clientX
          state.mouse.y = ev.clientY
          

          if (state.win[elem].top<0) 
            state.win[elem].top  = 0

          ev.preventDefault()

        }


        else if ( state.resize.status === true ) {
          
          console.log('Button clicked!');
          console.log('moving on border')
          const deltaX = event.clientX - state.mouse.x;
          const deltaY = event.clientY - state.mouse.y;
          console.log('----->h',border,deltaY)
          if (border === 'top') resizeTop(elemm.childNodes[0],deltaY,Number(height))
          if (border === 'lef') resizeTop(elemm,deltaX)
          if (border === 'rig') resizeTop(elemm,deltaX)
          if (border === 'bot') resizeTop(elemm,deltaY)
          state.mouse.x = event.clientX
          state.mouse.y = event.clientY
          event.preventDefault()
          




          
          
        }
      },






      mouseup(state,payload){
        const ev = payload[0]
        const elemm = payload[1]

        console.log('MOUSE UP ------------------------- ')

        const elemFather = document.getElementById('win'+elemm)
        const elem = elemFather.childNodes[0]

        if (state.resize.direction === 'top') {
          var docHeight = document.documentElement.clientHeight;
          elem.style.top = ( Number(docHeight) - Number(elem.style.bottom.split('px')[0]) - Number(elem.style.height.split('px')[0])) + 'px'
          elem.style.position = 'fixed'
          elem.style.removeProperty("bottom");
          try {
            elemFather.removeEventListener("move");
          } catch (err) {
            console.log('')
          }
        }
        

        // CLEANING
        state.drag.status = false  
        state.resize.status = false 
        state.resize.direction = ""     
        state.win[elemm].cursor = "default"   
        

      },
    },



    actions: {
      closeWindow(context,payload) {
        context.commit('close',payload)
      },

      openWindow(context,payload) {
        context.commit('open',payload)
      },
      mouseDown(context,payload) {
        context.commit('mousedown',payload)
      },
      mouseMove(context,payload) {
        context.commit('mousemove',payload)
      },
      mouseUp(context,payload) {
        context.commit('mouseup',payload)
      },
      
    },





    getters: {
      getWins(state) {
        return state.win
      }
    }
  }