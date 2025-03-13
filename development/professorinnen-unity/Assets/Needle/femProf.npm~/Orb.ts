import { Behaviour, serializable, Animator, AudioSource, GameObject } from "@needle-tools/engine";

// Documentation → https://docs.needle.tools/scripting

export class Orb extends Behaviour {

    @serializable()
    myStringField: string = "Hello World";

    @serializable(AudioSource)
    audioSource?: AudioSource;

    @serializable(Animator)
    animator?: Animator;


    awake() {
        this.audioSource?.addEventListener("ended", this.onAudioEnded.bind(this));
    }

    checkAndPlay() {
        // Stop all AudioOrbs
        const audioOrbs = GameObject.findObjectsOfType(Orb);



        for (const orb of audioOrbs) {
            if (orb.audioSource) {
                if (orb.audioSource !== this.audioSource) {
                    orb.audioSource.stop();   
                }

                if (orb.animator) {
                    orb.animator.setTrigger("Stop");
                    console.log("Triggering animator to stop other orbs", orb.animator);
                }
            }/*  */
        }

        // Play this object's audio
        if (this.audioSource) {
            // wait 1 second
            setTimeout(() => {
                this.audioSource.play();
            }, 1000);

          

            if (this.animator) {
               
                this.animator.setTrigger("Start");
            }
        }
    }

    stopAll() {
        const audioOrbs = GameObject.findObjectsOfType(Orb);    
        for (const orb of audioOrbs) {
            if (orb.audioSource) {
                orb.audioSource.stop();
            }

            if (orb.animator) {
                orb.animator.setTrigger("Stop");
            }
        }

    }

    private onAudioEnded() {
        // Trigger animator
        console.log("Audio ended");
        if (this.animator) {
            console.log("Triggering animator to stop");
            this.animator.setTrigger("Stop");
        }
    }
}