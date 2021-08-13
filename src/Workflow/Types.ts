import { Connection, Node } from '../Canvas/Models';

export type State = {
  id: string;
  active: boolean;
  workflowName: string;
  workflowDescription: string;
  nodes: Node[];
  connections: Connection[];
  selectedNode: Node | null;
  selectedConnection: Connection | null;
};

export type WorkflowProps = {
  workflow: any;
  workflowChanged?: (workflow) => any;
  scale?: number;
  snapToGrid?: boolean;
  showGrid?: boolean;
  render?: (add, save, updateNode, removeNode, selectedNode:Node|null) => void;
};

export type SerializedPoint = {
  x: number;
  y: number;
};
export type SerializedNode = {
  name: string;
  id: string;
  icon: string;
  app: string;
  nodetype: string;
  label: string;
  credential: string;
  action: string;
  formData: object;
  testData: object;
  metaData: object;
  position: SerializedPoint;
};
export type SerializedConnection = {
  from: string;
  to: string;
  id: string;
};
export type SerializedWorkflow = {
  id: string;
  active: boolean;
  name: string;
  description: string;
  nodes: SerializedNode[];
  connections: SerializedConnection[];
};
