

const WinInfo = (text,show,left,top,w,h,gp,paddingY) => {
  return (
    {
      text:text,
      show:show,
      left:left,
      top:top,
      width:w,
      height:h,
      gap:gp,
      paddingY:paddingY
    }
  )
}



export default {


    state: {
      win:{
        About:WinInfo('About',false,250,300,500,300,10,20),
        Contact:WinInfo('Contact',false,25,20,400,200,0,0),
        APIs:WinInfo('APIs',false,25,20,700,500,0,0),
        Projects:WinInfo('Projects',false,25,20,700,500,0,0),
        Muzik:WinInfo('Muzik',false,25,20,150,500,0,0),
      },
      drag:{
        view:[],
        status:false,
        x:0,
        y:0,
        evx:0,
        evy:0,
      },
      borderSize:6
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
        if (isOnBorder(this.borderSize,ev,elem)) {
          console.log('on border')
        }
        else {
          state.drag.view.pop()
          state.drag.view.push(elem)

          state.drag.status = true


          const elemer = document.getElementById('win'+elem)
          elemer.remove()
          document.getElementById('windows').append(elemer)

          
          state.drag.x = ev.clientX
          state.drag.y = ev.clientY
        }
      },
      mousemove(state,payload){
        if(state.drag.status === true) {

          const ev = payload[0]
          const elem = state.drag.view[0]
          state.drag.evx = ev.clientX
          state.drag.evy = ev.clientY

          state.win[elem].top +=  state.drag.evy - state.drag.y
          state.win[elem].left +=  state.drag.evx - state.drag.x
          state.drag.x = ev.clientX
          state.drag.y = ev.clientY
          

          if (state.win[elem].top<0) 
            state.win[elem].top  = 0

          ev.preventDefault()

        },
        isOnBorder(state,payload){
          const ev = payload[0]
          const elem = state.drag.view[0]
  
          const elemm = document.getElementById('win'+elem)
          const rect = elemm.getBoundingClientRect();
          const x = event.clientX - left;
          const y = event.clientY - top;
          console.log('hdatyat',rect.left,rect.left)
          return (
            x < borderSize ||
            y < borderSize ||
            x > rect.width - borderSize ||
            y > rect.height - borderSize
          );
        },
        
        
      },
      mouseup(state,payload){
        const ev = payload[0]
        const elem = payload[1]
        
        state.drag.status = false        
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