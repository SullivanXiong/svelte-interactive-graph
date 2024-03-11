import { type Node } from "./Node/Node";
import { type Edge } from "./Edge/Edge";
import {
  Theme,
  type Configuration,
  Layout,
} from "./Configuration/Configuration";

export class Dashboard {
  nodes: Node[];
  edges: Edge[];
  configuration: Configuration;

  constructor(nodes: Node[], edges: Edge[], configuration: Configuration) {
    this.nodes = [];
    this.edges = [];
    for (let node of nodes) {
      this.addNode(node);
    }
    for (let edge of edges) {
      this.addEdge(edge);
    }
    this.configuration = {
      theme: Theme.Default,
      layout: Layout.Centered,
    };
    this.updateConfiguration(configuration);
  }

  // Method to add a node
  addNode(node: Node) {
    this.nodes.push(node);
  }

  // Method to add an edge
  addEdge(edge: Edge) {
    this.edges.push(edge);
  }

  // Method to update configuration
  updateConfiguration(configuration: Configuration) {
    this.configuration = configuration;
  }

  // Add more methods as needed for manipulating nodes, edges, and configurations
}
