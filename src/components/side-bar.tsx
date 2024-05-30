import { Button } from "./button";

export default function SideBar() {
  return (
    <section className="flex-none basis-[240px] pt-2 px-2 border-r border-r-[hsla(0,_0%,_90%,_1)]">
      <div className="flex text-sm font-semibold items-center gap-2 ml-2">
        <div className="w-9 h-9 bg-[hsla(241,_100%,_84%,_1)] rounded-md" />
        AirOps
      </div>
      <div className="my-2">
        <Button fluid={true}>
          New
          <img width={12} height={12} className="" src="/plus.svg" />
        </Button>
      </div>
      <SideBarItem iconUrl="/database.svg">Data Name</SideBarItem>
      <SideBarItem iconUrl="/analytics.svg">Monitoring</SideBarItem>
      <SideBarItem iconUrl="/gear.svg">Settings</SideBarItem>
    </section>
  );
}

interface SideBarItemProps {
  iconUrl: string;
  children: React.ReactNode;
}

function SideBarItem({ iconUrl, children }: SideBarItemProps) {
  return (
    <a href="#" className="h-8 flex items-center gap-1 text-xs">
      <img src={iconUrl} width={12} height={12} />
      {children}
    </a>
  );
}
