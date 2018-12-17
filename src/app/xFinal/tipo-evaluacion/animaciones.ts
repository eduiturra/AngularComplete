import { AnimationTriggerMetadata, trigger, transition, animate, keyframes, style } from "@angular/animations";

export class Animaciones {
    static createTrigger(triggerName:string,duracion:string):AnimationTriggerMetadata{
        return trigger(triggerName,[
     
            /*state('inactive', style({
              transform:'scale(1)'
            })),
            state('active', style({
              transform:'scale(1.1)'
            })),*/
            transition('inactive<=>active',animate(`${duracion} ease-in`,keyframes([style({ opacity:0,offset:0.5}),style({ opacity:1,offset:1})])))
          ]);
    }
}
