import { resizeTop , bordersCondition , MouseCursor , HandleResize } from './resize.js'




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


const pwd = ""


export default {


    state: {
      showStart: true,
      showMsg : false ,
      Msg:"Your Password "+pwd,
      win:{
        About:WinInfo('About',false,250,300,500,300,10,20,'default'),
        Contact:WinInfo('Contact',false,25,20,400,200,0,0),
        APIs:WinInfo('APIs',false,25,20,700,500,0,0),
        Projects:WinInfo('Projects',false,25,20,700,500,0,0),
        Muzik:WinInfo('Muzik',false,205,20,250,500,0,0),
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
        mouse: {
          x:0,
          y:0,
        },
      },
    },




    mutations: {
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

      login(state,payload) {
        console.log(state.Msg)
        if(payload.clientX-document.body.clientWidth/2>=55 || payload.keyCode === 13 ) {
          if (payload.target?.value === pwd) {
            state.showStart = false
            const WebMacView = document.getElementById('webmak')
            WebMacView.style.display = 'block'
          }
          else {
            state.showMsg = true
          }
        }

        
      },



      mousedown(state,payload){
        const ev = payload[0]        
        const elem = payload[1]

        //  CLOSE WINDOW
        if (ev.target.id === '99') {
          state.win[elem].show = false ;
          return 0 
        }


        const elemm = document.getElementById('win'+elem)

        const height = elemm.childNodes[0].style.height.split('px')[0]

        const x = ev.clientX - state.win[elem].left;
        const y = ev.clientY - state.win[elem].top;


        elemm.remove()
        document.getElementById('windows').append(elemm)


        const border = bordersCondition(elemm.childNodes[0],x,y,state.win[elem].width,height,false)
        
        if(border === true ) {
          elemm.addEventListener('move', (event,state) => HandleResize(event,state) )
          state.resize.direction = border
          state.resize.status = true
          state.resize.evw = state.win[elem].width
          state.resize.evh = state.win[elem].height
          state.mouse.x = ev.clientX
          state.mouse.y = ev.clientY
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
        const elemFather = document.getElementById('win'+elem)
        const x = ev.clientX - state.win[elem].left;
        const y = ev.clientY - state.win[elem].top;

        

        const height = elemFather.childNodes[0].style.height.split('px')[0]
        // change cursor around resizing place
        const border = bordersCondition(elemFather.childNodes[0],x,y,state.win[elem].width, height  ,true)
        state.win[elem].cursor = MouseCursor(border)

        if( border === true ){
          state.drag.status = false
          console.log('border')
        }


        

        
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
          
          console.log('moving on border')
          const deltaX = state.resize.mouse.x - state.mouse.x;
          const deltaY = state.resize.mouse.y - state.mouse.y;
          console.log('----->h',border,deltaY)
          if (border === 'top') resizeTop(elemm.childNodes[0],deltaY,Number(height))
          state.mouse.x = state.resize.mouse.x
          state.mouse.y = state.resize.mouse.y
          ev.preventDefault()
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
      Login(context,payload) {
        context.commit('login',payload)
      },
      
    },





    getters: {
      getWins(state) {
        return state.win
      },
      getStart(state) {
        return state.showStart
      },
      getStartMsg(state) {
        return state.showMsg
      },
      getMsg(state) {
        return state.Msg
      },
    }
  }