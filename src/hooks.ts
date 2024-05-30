import { useEffect, useState } from "react";
import { WorkflowResults } from "./types";
import { prepareAirOpsClient } from "./util";

export function useWorkflowResults() {
  const [workflowResults, setData] = useState<WorkflowResults | null>(null);

  useEffect(() => {
    let unmounted = false;

    prepareAirOpsClient({
      apiKey: import.meta.env.VITE_API_KEY,
      userId: import.meta.env.VITE_USER_ID,
      workspaceId: parseInt(import.meta.env.VITE_WORKSPACE_ID),
    }).then(async (client) => {
      if (unmounted) {
        return;
      }

      const result = await client.apps.getResults({ executionId: import.meta.env.VITE_EXECUTION_ID });

      if (unmounted) {
        return;
      }

      setData(result.output as WorkflowResults);
    });

    return () => {
      unmounted = true;
    };
  }, []);

  return workflowResults;
}
