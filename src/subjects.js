import {Subject,BehaviorSubject,ReplaySubject} from 'rxjs'
document.addEventListener('click',()=>{
    // const stream$=new Subject()
    // stream$.subscribe(v=>console.log(v))
    // stream$.next()

    
    // const stream$=new BehaviorSubject('First')
    // stream$.subscribe(v=>console.log(v))
    // stream$.next()

    
    const stream$=new ReplaySubject(1)
    stream$.subscribe(v=>console.log(v))
    stream$.next()
})