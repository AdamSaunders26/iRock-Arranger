import Section from "./Section";
import { iRockContextProvider } from "./Context";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-between w-screen border-2 border-blue-500">
      <Section />
    </main>
  );
}
