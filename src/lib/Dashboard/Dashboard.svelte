<script lang="ts">
  import { Dashboard } from "$lib/Dashboard/Dashboard";
  import { type Node } from "$lib/Dashboard/Node/Node";
  import { type Edge } from "$lib/Dashboard/Edge/Edge";
  import {
    Theme,
    Layout,
    type Configuration,
  } from "$lib/Dashboard/Configuration/Configuration";
  import { onMount } from "svelte";
  import NodeComponent from "./Node/NodeComponent.svelte";
  import { zoom } from "$lib/zoom";

  export let nodes: Node[] = [];
  export let edges: Edge[] = [];
  export let dashboardConfigurations: Configuration;

  let dashboard: Dashboard = new Dashboard(
    nodes,
    edges,
    dashboardConfigurations
  );
  let xDisplacement: number = 0;
  let yDisplacement: number = 0;
  let activeNodeComponent: Node;

  onMount(() => {
    let theme = dashboard.configuration.theme;
    let layout = dashboard.configuration.layout;

    xDisplacement = layout === Layout.Centered ? 0 : 0;
    yDisplacement = layout === Layout.Centered ? window.innerHeight / 2 : 0;
  });
</script>

<svg class="ig-dashboard" xmlns="http://www.w3.org/2000/svg">
  <rect
    width="100%"
    height="100%"
    fill="lightgrey"
    class="ig-dashboard-background"
  />
  {#each edges as edge}
    <line
      x1={xDisplacement + edge.source.x}
      y1={yDisplacement + edge.source.y}
      x2={xDisplacement + edge.target.x}
      y2={yDisplacement + edge.target.y}
      stroke={edge.color}
      class={`ig-line ${edge.source}-${edge.target}`}
    />
  {/each}
  {#each nodes as node}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <circle
      class={`ig-circle ${node.name}-${node.id}`}
      cx={xDisplacement + node.x}
      cy={yDisplacement + node.y}
      transform-origin={`${xDisplacement + node.x} ${yDisplacement + node.y}`}
      r={node.size * 20}
      fill={node.color}
      on:mouseenter={(event) => {
        let element = event.currentTarget;
        element.style.cursor = "pointer";
        element.setAttribute("transform", `scale(1.25)`);
      }}
      on:mouseleave={(event) => {
        let element = event.currentTarget;
        element.style.cursor = "default";
        element.setAttribute("transform", `scale(1)`);
      }}
      on:click={() => {
        activeNodeComponent = node;
      }}
    >
    </circle>
    <text
      x={xDisplacement + node.x}
      y={yDisplacement + node.y}
      text-anchor="middle"
      dominant-baseline="middle"
      fill="white">{node.id}-{node.name}</text
    >
  {/each}
  {#if activeNodeComponent}
    <NodeComponent bind:activeNodeComponent {xDisplacement} {yDisplacement}
    ></NodeComponent>
  {/if}
</svg>

<style>
  .ig-dashboard {
    width: 100%;
    height: 100%;
  }

  .ig-circle {
    transition: 0.5s ease;
  }
</style>
