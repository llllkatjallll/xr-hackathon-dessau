<script lang="ts">
    import logo from "./images/PFCI18_minilogo_title_dark.png";
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
<needle-engine {src} skybox-image="{skyboxImage}" environment-image="{environmentImage}">
    <slot />


    
</needle-engine>

<div >
    <p> made by </p>
    <a href="https://prefrontalcortex.de" target="_blank"> <img src={logo} alt="logo prefronal cortex" width="auto" height="40" /></a>
   
</div>

<style>

div {
        position: absolute;
        z-index: 100000;
        bottom: 20px;
        font-size: 9px;
       pointer-events:all;
        right: 30px;
        text-align: center;
        pointer-events: all;
        opacity: 0.5;
    }
</style>
