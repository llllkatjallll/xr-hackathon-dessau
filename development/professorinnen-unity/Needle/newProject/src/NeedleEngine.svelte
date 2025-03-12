<script lang="ts">
import logo from "./images/logo.png";
    /**
     * The src can be a remote url to a GLB (or local file)
    */
    export let src: string | undefined = undefined;

    /**
     * Skybox Image can be assigned via a URL e.g. https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/2k/tief_etz_2k.exr
    */
    export let skyboxImage: string | undefined = undefined;
    /**
     * Environment Image can be assigned via a URL e.g. https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/2k/tief_etz_2k.exr
    */
    export let environmentImage: string | undefined = undefined;
</script>

<!-- find all attributes in the documentation at https://engine.needle.tools/docs/reference/needle-engine-attributes.html-->
<needle-engine loading-logo-src={logo} loading-background-color="#FFFFFF" loading-text-color="#000" primary-color="#fffff" secondary-color="#ffffff">
    <slot />
</needle-engine>

<style>
</style>
