import { HelloWorldText } from "@/components/HelloWorldText";
import { ModeToggle } from "@/components/ModeToggle";
import { RootPage } from "@/components/pages/RootPage";

export const App: React.FC = () => {
  return (
    <>
      <header className="bg-background sticky top-0 z-10 flex h-14 items-center justify-between px-4">
        <HelloWorldText />
        <ModeToggle />
      </header>
      <RootPage />
    </>
  );
};
