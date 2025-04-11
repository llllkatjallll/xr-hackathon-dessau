import { Behaviour, serializable, Animator } from "@needle-tools/engine";

class PostcardControl extends Behaviour {

    @serializable(Animator)
    private animator?: Animator;

    @serializable()
    private scrollThreshold: number = 100;

    @serializable()
    private triggerName: string = "FlipBack";

    private scrollValue: number = 0;

    awake() {
        window.addEventListener("wheel", this.onScroll.bind(this));
    }

    private onScroll(event: WheelEvent) {
        this.scrollValue += event.deltaY;

        if (this.scrollValue > this.scrollThreshold) {
            this.setAnimatorTrigger();
            this.scrollValue = 0; // Reset scroll value after triggering
        }
    }

    private setAnimatorTrigger() {
        if (this.animator) {
            this.animator.setTrigger(this.triggerName);
            console.log(`Triggered animator with ${this.triggerName}`);
        }
    }
}
