import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative flex h-screen items-center justify-center select-none"
      id="hero"
    >
      <div className="absolute flex h-full w-full flex-col-reverse items-center justify-start gap-8 pb-16">
        <div className="flex animate-bounce items-center gap-2 text-white/20 peer-hover:text-white/30">
          <ChevronDown />
        </div>
      </div>

      <div className="flex h-full w-full items-center justify-center">
        <div className="uppercase">
          <p className="text-slate-50/70">Hello, I am</p>
          <h1 className="text-9xl font-bold">Andre</h1>
          <p className="text-right text-slate-50/70">
            I am a software developer
          </p>
        </div>
      </div>
    </section>
  );
}

// export default function Hero() {
//   return (
//     <section
//       className="relative flex h-screen items-center justify-center select-none"
//       id="hero"
//     >
//       <div className="absolute flex h-full w-full flex-col-reverse items-center justify-start gap-8 pb-16">
//         <div className="flex animate-bounce items-center gap-2 text-white/20 peer-hover:text-white/30">
//           <ChevronDown />
//         </div>
//       </div>

//       <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-16 md:flex-row lg:px-32 xl:px-24">
//         <div className="cursor-default md:flex-3/5">
//           <h1 className="text-4xl font-semibold">Hi! I'm Andre.</h1>
//           <p className="text-xl opacity-70 transition-opacity hover:opacity-90">
//             Welcome! I'm a software developer, and this is a{" "}
//             <strong>temporary</strong> version of my portfolio. A more complete
//             experience is on the way — stay tuned!
//           </p>
//         </div>

//         <div className="md:flex-2/5">
//           <div className="group flex aspect-square h-64 items-center justify-center rounded-lg border border-white/20 bg-black/10 backdrop-blur-xs">
//             <p className="text-3xl font-semibold opacity-70 transition-opacity group-hover:opacity-90">
//               ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
