<script lang="ts">
  import { type Node } from "$lib/Dashboard/Node/Node";
  import { onMount } from "svelte";
  export let activeNodeComponent: Node;
  export let xDisplacement: number;
  export let yDisplacement: number;

  let backgroundX: number = activeNodeComponent.x + xDisplacement;
  let backgroundY: number = activeNodeComponent.y + yDisplacement;
</script>

<g>
  <rect class="zoom-effect" width="100%" height="100%" fill="blue"> </rect>
  <g
    class="ig-node-circle"
    transform-origin="15 15"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    on:mouseenter={(event) => {
      let element = event.currentTarget;
      element.style.cursor = "pointer";
      element.setAttribute("transform", "scale(1.25)");
    }}
    on:mouseleave={(event) => {
      let element = event.currentTarget;
      element.style.cursor = "default";
      element.setAttribute("transform", "scale(1)");
    }}
    on:click={() => {
      activeNodeComponent = null;
    }}
  >
    <g transform="translate(-416.71429-520.79074)">
      <circle cx="432.71429" cy="536.79071" r="6" style="fill:#fff" />
      <path
        d="m432.71429 528.79074a8 8.00001 0 0 0 -8 8 8 8.00001 0 0 0 8 8 8 8.00001 0 0 0 8 -8 8 8.00001 0 0 0 -8 -8m-3.29297 4l3.29297 3.29297 3.29297-3.29297.70703.70703-3.29297 3.29297 3.29297 3.29297-.70703.70703-3.29297-3.29297-3.29297 3.29297-.70703-.70703 3.29297-3.29297-3.29297-3.29297.70703-.70703"
        style="fill:#da4453"
      />
    </g>
  </g>
</g>

<style>
  @keyframes zoomIn {
    from {
      transform: scale(0);
      transform-origin: var(--backgroundX) var(--backgroundY);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes zoomOut {
    from {
      transform: scale(2);
      transform-origin: var(--backgroundX) var(--backgroundY);
    }
    to {
      transform: scale(0);
    }
  }

  .zoom-effect {
    animation: zoomIn 0.5s ease-in-out forwards;
  }

  .ig-node-circle {
    transition: 0.5s ease;
  }
</style>
