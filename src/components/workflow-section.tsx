import WorkflowHeader from "./workflow-header";
import WorkflowTable from "./workflow-table.tsx";
import { useWorkflowResults } from "../hooks.ts";

export default function WorkflowSection() {
  const workflowResults = useWorkflowResults();

  if (!workflowResults) {
    return null;
  }

  return (
    <section className="flex-1">
      <WorkflowHeader />
      <div className="px-5">
        <WorkflowTable workflowResults={workflowResults.data} />
      </div>
    </section>
  );
}
