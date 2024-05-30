import SideBar from "./components/side-bar";
import WorkflowSection from "./components/workflow-section";

function App() {
  return (
    <div className="flex w-full h-dvh">
      <SideBar />
      <WorkflowSection />
    </div>
  );
}

export default App;
