import Section from "./Section";

import MenuOverview from "./Menu/MenuOverview";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-between w-screen border-2 border-blue-500">
      <MenuOverview>
        <Section />
      </MenuOverview>
    </main>
  );
}
