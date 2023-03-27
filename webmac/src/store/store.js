

const WinInfo = (text,show,left,top,w,h,zi) => {
  return (
    {
      text:text,
      show:show,
      left:left,
      top:top,
      width:w,
      height:h,
    }
  )
}



export default {
    state: {
      tabs: [],
      win:{
        About:WinInfo('About',false,25,30,500,300),
        Contact:WinInfo('Contact',false,25,20,700,500),
        APIs:WinInfo('APIs',false,25,20,700,500),
        Projects:WinInfo('Projects',false,25,20,700,500),
        Muzik:WinInfo('Muzik',false,25,20,700,500),
      },
      drag:{
        x:0,
        y:0,
      }
    },
    mutations: {
      close(state,payload) {
        state.win[payload].show = false ;
        console.log('CLOSING ',payload)
      },
      open(state,payload) {
        state.win[payload].show = true ;
        let max = 1
        for (const itm in state.win) {
          if (itm.zindex>max) max=zindex
        }
        state.win[payload].zindex = max+1 ;
        console.log('OPENING ',payload)
        const elem = document.getElementById('win'+payload)
        elem.remove()
        document.getElementById('windows').append(elem)
      },


      startdrag(state,payload) {
        const ev = payload[0]
        const elem = payload[1]
        console.log('DRAGIN',ev.clientX , ev.clientY)
        state.drag.x = ev.clientX
        state.drag.y = ev.clientY
      },
      dragover(state,payload){
        const ev = payload[0]
        const elem = payload[1]
        console.log('rrr',ev.clientY - state.drag.y)
        
        const lft = state.win[elem].left
        const rght = state.win[elem].top
        // state.win[elem].top += ev.clientY - state.drag.y
        // state.win[elem].left += ev.clientX - state.drag.x


      },
      dragend(state,payload){
        const ev = payload[0]
        const elem = payload[1]
        console.log('sala')
        console.log('SALA',ev.clientX , ev.clientY)

        const lft = state.win[elem].left
        const rght = state.win[elem].top
        state.win[elem].top += ev.clientY - state.drag.y
        state.win[elem].left += ev.clientX - state.drag.x

        
        state.win[elem].show = true
      },



    },
    actions: {
      closeWindow(context,payload) {
        context.commit('close',payload)
      },

      openWindow(context,payload) {
        context.commit('open',payload)
      },
      startDrag(context,payload) {
        console.log('payld',payload)
        context.commit('startdrag',payload)
      }
      ,
      dragOver(context,payload) {
        context.commit('dragover',payload)
      },
      dragEnd(context,payload) {
        context.commit('dragend',payload)
      },
    },
    getters: {
      getWins(state) {
        return state.win
      }
    }
  }