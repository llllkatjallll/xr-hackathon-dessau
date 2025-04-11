import { Behaviour, serializable, Animator } from "@needle-tools/engine";


// Documentation → https://docs.needle.tools/scripting

export class Card extends Behaviour {

     @serializable(Animator)
         animator?: Animator;
    
        @serializable()
         scrollThreshold: number = 100;
    
        @serializable()
         triggerName: string = "FlipBack";
    
         scrollValue: number = 0;

         backVisible: boolean = false;
    
    
         awake() {
            window.addEventListener("wheel", this.onScroll.bind(this));
        }

        private onScroll(event: WheelEvent) {
            this.scrollValue += event.deltaY;
           
    
            if (this.scrollValue > this.scrollThreshold) {
                if (this.backVisible) {
                    this.setAnimatorTrigger();
                    this.backVisible = false; // Reset backVisible after triggering
                   
                }
                
                //this.scrollValue = 0; // Reset scroll value after triggering
            }

            if( this.scrollValue < 100){
                this.scrollValue = 100; // Reset scroll value after triggering
               
            }
        }
    
        private setAnimatorTrigger() {
            if (this.animator) {
                this.animator.setTrigger(this.triggerName);
                
            }
        }

        setBoolCard(){
            this.backVisible = !this.backVisible;
        }

        goToWebsite() {
            window.open("https://www.leipzig.travel/", "_blank");
        }
}