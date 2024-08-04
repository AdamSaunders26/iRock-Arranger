import Section from "./Song/Section";

import MenuOverview from "./Menu/MenuOverview";
import Song from "./Song/Song";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-between w-dvh border-2 border-blue-500">
      <MenuOverview>
        <Song />
      </MenuOverview>
    </main>
  );
}
