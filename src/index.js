import {range,timer,interval,of,from,fromEvent} from 'rxjs'

// const stream$=of(1,2,3,4)
// stream$.subscribe(val=>{

// })

// const arr$=from([1,2,3,4]).pipe(
//     scan((acc,v)=>acc.concat(v),[])
// )
// arr$.subscribe(val=>console.log(val))
// const stream$=new Observable(observer=>{
//     observer.next('first value')
//     setTimeout(()=>observer.next('after 1000ms'),1000)
//     setTimeout(()=>observer.complete('after 1000ms'),1500)
//     setTimeout(()=>observer.error('after 2000ms'),2000)
//     setTimeout(()=>observer.next('after 3000ms'),3000)
// })
// stream$.subscribe((val)=>console.log(val),
// (err)=>console.log(err),
// ()=>console.log("complete"),)

// stream$.subscribe({
//     next(val){
//         console.log(val)
//     },
//     complete(){
//         console.log(val)
//     },
//     error(err){
//         console.log(val)
//     },
// })

// fromEvent(document.querySelector('canvas'),'mousemove').pipe(map(e=>({
//     x:e.offsetX,
//     y:e.offsetY,
//     ctx:e.target.getContext('2d')
// }))).subscribe(pos=>{
//     pos.ctx.fillRect(pos.x,pos.y,2,2)
// })

// const clear$=fromEvent(document.getElementById('clear'),'click')
// clear$.subscribe(()=>{
//     const canvas=document.querySelector('canvas')
//     canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height)
// })

// const sub=interval(500).subscribe(v=>console.log(v))
// setTimeout(()=>{
//     sub.unsubscribe()
// },4000)

// timer(2500).subscribe(v=>console.log(v))

// range(42,10).subscribe(v=>console.log(v))
