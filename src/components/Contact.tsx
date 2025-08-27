import { ArrowRight, Facebook, Github, Linkedin } from "lucide-react";
import type { ReactNode, Ref } from "react";

export default function Contact({
  sectionRef,
}: Readonly<{ sectionRef: Ref<HTMLElement> }>) {
  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col gap-8 py-32 sm:px-24 lg:h-screen xl:px-64"
      id="contact"
    >
      <h2 className="text-4xl">Contact me</h2>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1/2 flex-col items-center gap-16 rounded-lg border border-white/20 bg-black/50 p-4 py-16">
          <div>
            <p className="text-center text-3xl text-white/80">
              Thank you for taking the time to go over my portfolio!
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <ul className="flex items-center justify-center gap-8 text-sm lg:gap-16">
              <AnchorListItem
                icon={<Linkedin size={42} />}
                text="Link to my LinkedIn"
                link="https://www.linkedin.com/in/andrebagalso/"
              />
              <AnchorListItem
                icon={<Github size={42} />}
                text="Link to my Github"
                link="https://www.github.com/andrebryant"
              />
              <AnchorListItem
                icon={<Facebook size={42} />}
                text="Link to my Facebook"
                link="https://m.me/andrebryant.bagalso"
              />
            </ul>
            <p className="text-sm text-white/70">
              You can connect with me through the following links or by
              answering the contact form.
            </p>
          </div>
        </div>
        <form
          action=""
          className="flex flex-1/2 flex-col gap-4 rounded-lg border border-white/20 bg-black/50 p-4"
        >
          <div className="flex flex-col gap-4 lg:flex-row">
            <label
              htmlFor="form-name"
              className="flex flex-1/2 flex-col-reverse gap-1 [&>div]:ml-2 [&>div]:translate-y-1/2 focus-within:[&>div]:ml-0 focus-within:[&>div]:translate-y-0"
            >
              <input
                type="text"
                name="name"
                id="form-name"
                className="peer h-12 rounded-md border border-white/20 px-2 py-1 text-slate-50/80"
              />
              <div className="">
                <span className="">Name of Company</span>
              </div>
            </label>
            <label
              htmlFor="form-email"
              className="flex flex-1/2 flex-col-reverse gap-1 [&>div]:ml-2 [&>div]:translate-y-1/2 focus-within:[&>div]:ml-0 focus-within:[&>div]:translate-y-0"
            >
              <input
                type="email"
                name="email"
                id="form-email"
                className="h-12 rounded-md border border-white/20 px-2 py-1 text-slate-50/80"
              />
              <div>
                <span>Email Address</span>
              </div>
            </label>
          </div>

          <label
            htmlFor="form-message"
            className="flex grow flex-col-reverse gap-1 [&>div]:ml-2 [&>div]:translate-y-1/2 focus-within:[&>div]:ml-0 focus-within:[&>div]:translate-y-0"
          >
            <textarea
              name="message"
              id="form-message"
              className="min-h-64 grow resize-none rounded-md border border-white/20 px-2 py-4 text-slate-50/80"
            ></textarea>
            <div>
              <span>Your Message</span>
            </div>
          </label>
          <div>
            <button
              type="submit"
              className="rounded-md border border-cyan-200/20 bg-cyan-800 px-4 py-2 text-white hover:cursor-pointer hover:bg-cyan-900"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function AnchorListItem({
  icon,
  text,
  link,
}: {
  icon: ReactNode;
  text: string;
  link: string;
}) {
  const onclick = (link: string) => window.open(link, "_blank");

  return (
    <li>
      <div
        className="group flex flex-col items-center text-white/70 hover:cursor-pointer hover:text-white"
        onClick={() => onclick(link)}
      >
        <span>{icon}</span>
        <span className="flex items-center justify-center gap-1 text-center text-cyan-800 underline underline-offset-4 group-hover:text-cyan-700">
          <ArrowRight size={16} />
          {text}
        </span>
      </div>
    </li>
  );
}
