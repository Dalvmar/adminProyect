import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Observable,Subscriber, Subscription } from 'rxjs';
import { retry,map,filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit , OnDestroy{

  subscripcion:Subscription;

  constructor() {

    

// this.regresaObservable().pipe(
//   //reintentos infinitos, si se loe coloca un parametro
//   retry(2))


this.subscripcion=this.regresaObservable()
    .subscribe (
      numero => console.log('subs', numero),
      error => console.log("error en obs", error),
      () => console.log("el osbservador terminó")
    );

  }
    

   

  ngOnInit() {
  }
  ngOnDestroy(){//cuando salga de se cierra se dejaremos de ejecutar el contador
    console.log('la pagina se va cerrar')
    this.subscripcion.unsubscribe();
  }

  regresaObservable(): Observable <any> {

    // return new Observable(observer=> {
   
   return new Observable((observer:Subscriber<number> )=> {
      let contador = 0;
      let intervalo = setInterval(() => {

        contador += 1;

        // observer.next(contador);

        const salida = {
        valor:contador
        };

        observer.next(salida);

        // if(contador === 3){
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        //if( contador === 2){ 
         // clearInterval(intervalo);
         // observer.error('auxilio')
        //}
      }, 1000);
    }).pipe(
       map(resp => resp.valor ),
       filter (( valor, index) =>{
         // console.log( 'filter', valor,index) 

        if( (valor % 2) === 1 ){
        //impar true
        return true
        } else {
          //par
          return false;
        }
        
       })
    );

  }
}

