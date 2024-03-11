<script lang="ts">
  import { type Node } from "$lib/Dashboard/Node/Node";
  import { type Edge } from "$lib/Dashboard/Edge/Edge";
  import {
    Theme,
    Layout,
    type Configuration,
  } from "$lib/Dashboard/Configuration/Configuration";
  import Dashboard from "$lib/Dashboard/Dashboard.svelte";

  let nodes: Node[] = [];
  let edges: Edge[] = [];
  let configuration: Configuration = {
    theme: Theme.Dark,
    layout: Layout.Centered,
  };

  let testNode1: Node = {
    id: 1,
    name: "Interactive-DecInternet",
    size: 1,
    x: 100,
    y: 0,
    color: "white",
  };

  let testNode2: Node = {
    id: 2,
    name: "Peer-to-Peer Application",
    size: 2,
    x: 250,
    y: 300,
    color: "grey",
  };

  let testNode3: Node = {
    id: 3,
    name: "Jumio KYC",
    size: 1,
    x: 400,
    y: 100,
    color: "purple",
  };

  let testNode4: Node = {
    id: 4,
    name: "ZK-STARK Protocol",
    size: 2,
    x: 600,
    y: -200,
    color: "darkgrey",
  };

  let testNode5: Node = {
    id: 5,
    name: "Decentralized Identifiers (DID)",
    size: 1,
    x: 600,
    y: 250,
    color: "green",
  };

  let testNode6: Node = {
    id: 6,
    name: "Constellation (Blockchain Network)",
    size: 3,
    x: 600,
    y: 0,
    color: "black",
  };

  let testNode7: Node = {
    id: 7,
    name: "Standardized Decentralized Client",
    size: 1,
    x: 400,
    y: -225,
    color: "white",
  };

  let edgeNode1Node2: Edge = {
    source: testNode1,
    target: testNode2,
    name: `${testNode1.name} to ${testNode2.name}`,
    color: "blue",
  };

  let edgeNode1Node3: Edge = {
    source: testNode1,
    target: testNode3,
    name: `${testNode1.name} to ${testNode3.name}`,
    color: "blue",
  };

  let edgeNode1Node4: Edge = {
    source: testNode1,
    target: testNode4,
    name: `${testNode1.name} to ${testNode4.name}`,
    color: "blue",
  };

  let edgeNode1Node5: Edge = {
    source: testNode1,
    target: testNode5,
    name: `${testNode1.name} to ${testNode5.name}`,
    color: "blue",
  };

  let edgeNode1Node6: Edge = {
    source: testNode1,
    target: testNode6,
    name: `${testNode1.name} to ${testNode6.name}`,
    color: "blue",
  };

  let edgeNode1Node7: Edge = {
    source: testNode1,
    target: testNode7,
    name: `${testNode1.name} to ${testNode7.name}`,
    color: "blue",
  };

  let edgeNode6Node7: Edge = {
    source: testNode6,
    target: testNode7,
    name: `${testNode6.name} to ${testNode7.name}`,
    color: "black",
  };

  let edgeNode2Node7: Edge = {
    source: testNode2,
    target: testNode7,
    name: `${testNode2.name} to ${testNode7.name}`,
    color: "black",
  };

  let edgeNode4Node6: Edge = {
    source: testNode4,
    target: testNode6,
    name: `${testNode4.name} to ${testNode6.name}`,
    color: "black",
  };

  let edgeNode3Node5: Edge = {
    source: testNode3,
    target: testNode5,
    name: `${testNode3.name} to ${testNode5.name}`,
    color: "black",
  };

  let edgeNode5Node6: Edge = {
    source: testNode5,
    target: testNode6,
    name: `${testNode5.name} to ${testNode6.name}`,
    color: "black",
  };

  let edgeNode2Node6: Edge = {
    source: testNode2,
    target: testNode6,
    name: `${testNode2.name} to ${testNode6.name}`,
    color: "black",
  };

  nodes.push(testNode1);
  nodes.push(testNode2);
  nodes.push(testNode3);
  nodes.push(testNode4);
  nodes.push(testNode5);
  nodes.push(testNode6);
  nodes.push(testNode7);

  edges.push(edgeNode1Node2);
  edges.push(edgeNode1Node3);
  edges.push(edgeNode1Node4);
  edges.push(edgeNode1Node5);
  edges.push(edgeNode1Node6);
  edges.push(edgeNode1Node7);
  edges.push(edgeNode6Node7);
  edges.push(edgeNode2Node7);
  edges.push(edgeNode4Node6);
  edges.push(edgeNode3Node5);
  edges.push(edgeNode5Node6);
  edges.push(edgeNode2Node6);
</script>

<div class="test-dashboard">
  <Dashboard {nodes} {edges} dashboardConfigurations={configuration}
  ></Dashboard>
</div>

<style>
  .test-dashboard {
    width: 100%;
    height: 100%;
  }
</style>
