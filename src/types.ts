export interface Tag {
  name: string;
  color: string;
}

export interface WorkflowResults {
  count: number;
  data: Array<{
    type: "workflow" | "data";
    name: string;
    tags: Array<Tag>;
    lastUpdated: number;
    id: number;
  }>;
}
