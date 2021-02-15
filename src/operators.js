import {,map,take,takeLast,takeWhile,scan,reduce,filter,tap} from 'rxjs/operators'
import {fromEvent,interval} from 'rxjs'
fromEvent(document,'click').pipe(
    switchMap((event)=>{
        return interval(1000).pipe(
            tap(v=>console.log(v))
            stream$.subscribe({
                next:v=>console.log(v),
                complete:()=>console.log("complete")
                
            })
        )
    })
).subscribe(()=>{
    const stream$=interval(1000).pipe(
        tap(v=>console.log(v))
        stream$.subscribe({
            next:v=>console.log(v),
            complete:()=>console.log("complete")
            
        })
    )
const stream$=interval(1000).pipe(
    tap(v=>console.log(v)),
    map((v)=>v*2),
    filter(v=>v %2 ===0),
    take(10),
    reduce((acc,v)=>acc+v,[])
    // scan((acc,v)=>acc+v,[])
    // takeWhile(v=>v < 7)
    // takeLast(5)
)
stream$.subscribe({
    next:v=>console.log(v),
    complete:()=>console.log("complete")
    
})