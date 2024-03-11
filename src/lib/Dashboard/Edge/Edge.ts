import { type Node } from "../Node/Node";

export interface Edge {
  source: Node;
  target: Node;
  name?: string; // Optional
  color: string;
}
