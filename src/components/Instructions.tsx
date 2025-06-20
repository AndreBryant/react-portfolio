import { ArrowDown, ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import type { KeyStates } from "../types";
import { useState } from "react";

export default function Instructions({ keystates }: { keystates: KeyStates }) {
  const [toggled, setToggled] = useState(true);
  return (
    // Main Position
    <div className="fixed top-0 flex h-screen w-screen items-end">
      {/* Main Card */}
      <div
        className={`relative flex flex-col gap-2 rounded-lg border border-black/60 bg-amber-50/10 px-4 py-2 text-slate-950/75 backdrop-blur-sm transition-transform ${toggled ? "-translate-x-full" : "translate-x-0"}`}
      >
        <p className="">Navigation</p>
        <div
          className={`flex items-center gap-2 ${keystates.ArrowUp && "text-slate-950/50"}`}
        >
          <span className="rounded-sm border-2 p-1">
            <ArrowUp />
          </span>
          <span> : to previous section</span>
        </div>
        <div
          className={`flex items-center gap-2 ${keystates.ArrowDown && "text-slate-950/50"}`}
        >
          <span className="rounded-sm border-2 p-1">
            <ArrowDown />
          </span>
          <span> : to next section</span>
        </div>
        <Toggler toggled={toggled} toggler={setToggled} />
      </div>
    </div>
  );
}

function Toggler({
  toggled,
  toggler,
}: {
  toggled: boolean;
  toggler: (toggled: boolean) => void;
}) {
  return (
    <div className={`absolute top-1/2 ${toggled ? "-right-64" : "-right-8"}`}>
      <button onClick={() => toggler(!toggled)} className="border">
        {toggled && (
          <div className="flex">
            <ChevronLeft />
            <p>
              Click here or press{" "}
              <span className="border p-1 font-mono">M</span> to open
            </p>
          </div>
        )}
        {!toggled && <ChevronRight />}
      </button>
      {/* {toggled && (

      )} */}
    </div>
  );
}
