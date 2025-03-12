import { Behaviour, serializable, GameObject, AudioSource } from "@needle-tools/engine";


class AudioOrb extends Behaviour {

    @serializable(AudioSource)
    private audioSource?: AudioSource;

    onPointerClick(): void {
        // Stop all AudioOrbs
        const audioOrbs = GameObject.findObjectsOfType(AudioOrb);
        for (const orb of audioOrbs) {
            if (orb.audioSource !== this.audioSource && orb.audioSource?.isPlaying) {
                orb.audioSource.stop();
            }
        }

        // Play this object's audio
        if (this.audioSource) {
            this.audioSource.play();
        }
    }
}

export default AudioOrb;