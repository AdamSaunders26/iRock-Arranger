import Section from "./Song/Section";

import MenuOverview from "./Menu/MenuOverview";
import Song from "./Song/Song";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col  items-center justify-between w-dvh ">
      <MenuOverview>
        <Song />
      </MenuOverview>
    </main>
  );
}
