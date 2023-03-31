

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

const borderSize = 6


const bordersCondition = (x,y,width,height) => {
  const bol =  x-1 < borderSize ? "lef" :  y-1 < borderSize ? "top" :  x-1 > width - borderSize ? "rig" :  y-1 > height - borderSize ? "bot" : false 
  return {bol:bol}
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
        const elemm = document.getElementById('win'+elem).childNodes[0]
        const height = elemm.style.height.split('px')[0]
        const x = ev.clientX - state.win[elem].left;
        const y = ev.clientY - state.win[elem].top;
        
        const border = bordersCondition(x,y,state.win[elem].width,height).bol
        if(border) {
          state.resize.status = true
          state.mouse.x = ev.clientX
          state.mouse.y = ev.clientY

          console.log('-----> ',border.bol)

          // var myDiv = document.getElementById("myDiv");
          // myDiv.style.removeProperty("background-color");

          state.resize.evw = state.win[elem].width
          state.resize.evh = state.win[elem].height
        }
        else {
          state.drag.view.pop()
          state.drag.view.push(elem)

          state.drag.status = true


          elemm.remove()
          document.getElementById('windows').append(elemm)

          state.mouse.x = ev.clientX
          state.mouse.y = ev.clientY
        }
      },
      mousemove(state,payload){
        
        const ev = payload[0]
        const elem = payload[1]
        const elemm = document.getElementById('win'+elem).childNodes[0]
        const x = ev.clientX - state.win[elem].left;
        const y = ev.clientY - state.win[elem].top;
        const height = elemm.style.height.split('px')[0]

        // change cursor around resizing place
        const border = bordersCondition(x,y,state.win[elem].width,height).bol
        if(border) {
          console.log('----> ',border)
          state.win[elem].cursor = 'cell'

          if (border === 'top') resizeTop(elemm)
          if (border === 'lef') resizeTop(elemm)
          if (border === 'rig') resizeTop(elemm)
          if (border === 'bot') resizeTop(elemm)
        }
        else {
          state.win[elem].cursor = 'default'
        }


        
        if(state.drag.status === true) {

          
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


        // else if ( state.resize.status === true ) {
        //   console.log('moving on border')
        //   const deltaX = ev.clientX - state.mouse.x;
        //   const deltaY = ev.clientY - state.mouse.y;

        //   state.win[elem].width = Math.max(
        //     state.minWidth,
        //     Math.min(state.maxWidth, state.resize.evw + deltaX)
        //   );
        //   state.win[elem].height = Math.max(
        //     state.minHeight,
        //     Math.min(state.maxHeight, state.resize.evh + deltaY)
        //   );
          
        // }
      },
      mouseup(state,payload){
        const ev = payload[0]
        const elem = payload[1]
        
        state.drag.status = false  
        state.resize.status = false        
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