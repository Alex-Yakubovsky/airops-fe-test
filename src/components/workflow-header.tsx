import { Button } from "./button";

export default function WorkflowHeader() {
  return (
    <div className="h-20 py-6 flex flex-row justify-between px-5 border-b border-b-[hsla(220,_9%,_93%,_1)]">
      <h1 className="text-3xl font-bold">Workflows</h1>
      <div className="flex gap-2">
        <Button>
          Sort
          <img width={10} height={5} src="/caret-down.svg" />
        </Button>
        <div className="relative">
          <input
            placeholder="Search workflows"
            className="pl-8 pr-3 h-8 border hsla(0,_0%,_0%,_0.16) rounded-md shadow-sm"
          />
          <img width={13} height={13} src="/search.svg" className="absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
}
