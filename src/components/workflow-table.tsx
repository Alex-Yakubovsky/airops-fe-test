import type { WorkflowResults, Tag } from "../types";
import { toRelativeTime } from "../util";
import Pill from "../components/pill.tsx";
import { IconButton } from "../components/button.tsx";

interface WorkflowTableProps {
  workflowResults: WorkflowResults["data"];
}

export default function WorkflowTable({ workflowResults }: WorkflowTableProps) {
  return (
    <table className="table-auto w-full text-left border-b border-b-[]">
      <thead className="h-16 text-sm border-b">
        <tr className="[&>th]:font-semibold [&>th]:px-4">
          <th className="w-[108px] font-semibold">Type</th>
          <th>Name</th>
          <th className="w-[180px] font-semibold">Tags</th>
          <th className="w-[134px]">Last Updated</th>
          <th className="w-[88px]">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y text-sm">
        {workflowResults.map((workflowResult) => (
          <WorkflowRow key={workflowResult.id} workflowResult={workflowResult} />
        ))}
      </tbody>
    </table>
  );
}

interface WorkflowRowProps {
  workflowResult: WorkflowResults["data"][number];
}

function WorkflowRow({ workflowResult }: WorkflowRowProps) {
  return (
    <tr key={workflowResult.id} className="h-16 [&>td]:px-4">
      <td className="text-[hsl(0_0%_53%)] capitalize">{workflowResult.type}</td>
      <td>{workflowResult.name}</td>
      <td>
        <TagsPill tags={workflowResult.tags} />
      </td>
      <td className="text-[hsla(224,_8%,_54%,_1)]">{toRelativeTime(new Date(workflowResult.lastUpdated))}</td>
      <td>
        <div className="flex items-center gap-2">
          <IconButton>
            <img width={14} height={14} src="/pencil.svg" />
          </IconButton>
          <IconButton>
            <img width={16} height={16} src="/trash.svg" />
          </IconButton>
        </div>
      </td>
    </tr>
  );
}

interface TagsPillProps {
  tags: Tag[];
}

function TagsPill({ tags }: TagsPillProps) {
  const tagCount = tags.length;

  if (tagCount === 0) {
    return (
      <Pill>
        <img width={12} height={12} src="/plus.svg" />
        <span className="text-[hsla(224,_8%,_54%,_1)]">Add Tag</span>
      </Pill>
    );
  }

  if (tagCount === 1) {
    return (
      <Pill>
        <TagSquares tags={tags} />
        {tags[0].name}
      </Pill>
    );
  }

  return (
    <Pill>
      <TagSquares tags={tags} />
      {tagCount} tags
    </Pill>
  );
}

interface TagSquaresProps {
  tags: Tag[];
}

function TagSquares({ tags }: TagSquaresProps) {
  return (
    <div className="inline-flex flex-row gap-1">
      {tags.map((t) => (
        <div key={t.name} className="w-2 h-2 rounded-sm" style={{ backgroundColor: t.color }} />
      ))}
    </div>
  );
}
