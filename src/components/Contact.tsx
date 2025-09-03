import { ArrowRight, Facebook, Github, Linkedin } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import type { ReactNode, Ref } from "react";

export default function Contact({
  sectionRef,
}: Readonly<{ sectionRef: Ref<HTMLElement> }>) {
  const [state, handleSubmit] = useForm("mkgvpwlw");

  return (
    <section
      ref={sectionRef}
      //  sm:px-24 md:px-32 xl:px-64 2xl:px-96
      className="relative flex flex-col gap-8 py-32 font-mono sm:px-24 md:px-32 lg:h-screen xl:px-64 2xl:px-96"
      id="contact"
    >
      <h2 className="text-4xl">Contact me</h2>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1/2 flex-col items-center gap-16 rounded-lg border border-white/20 bg-black/10 px-8 py-16 backdrop-blur-xs">
          <div>
            <p className="text-center text-3xl font-semibold text-white/80">
              Thank you for taking the time to go over my portfolio!
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <ul className="flex items-center justify-evenly gap-8 text-sm lg:gap-16">
              <AnchorListItem
                icon={<Linkedin size={42} />}
                text="LinkedIn"
                link="https://www.linkedin.com/in/andrebagalso/"
              />
              <AnchorListItem
                icon={<Github size={42} />}
                text="Github"
                link="https://www.github.com/andrebryant"
              />
              <AnchorListItem
                icon={<Facebook size={42} />}
                text="Facebook"
                link="https://m.me/andrebryant.bagalso"
              />
            </ul>
            <p className="text-sm text-white/70">
              You can connect with me through the following links or by
              answering the contact form.
            </p>
          </div>
        </div>
        {state.succeeded && (
          <div className="flex w-full items-center justify-center rounded-lg bg-black/20 outline outline-slate-50/20 backdrop-blur-lg">
            <p className="px-8 py-4 text-center text-2xl font-semibold tracking-widest">
              Thanks for reaching out!
            </p>
          </div>
        )}
        {!state.succeeded && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-1/2 flex-col gap-4 rounded-lg border border-white/20 bg-black/10 p-4 backdrop-blur-lg"
          >
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="flex flex-1/2 flex-col-reverse gap-1 [&>div]:ml-2 [&>div]:translate-y-1/2 focus-within:[&>div]:ml-0 focus-within:[&>div]:translate-y-0"
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="h-12 rounded-md border border-white/20 px-2 py-1 text-slate-50/80"
                />
                <div>
                  <span className="rounded-lg bg-violet-600/80 px-2">
                    Email Address
                  </span>
                </div>
              </label>
              <div className="text-red-700">
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            <label
              htmlFor="message"
              className="flex grow flex-col-reverse gap-1 [&>div]:ml-2 [&>div]:translate-y-1/2 focus-within:[&>div]:ml-0 focus-within:[&>div]:translate-y-0"
            >
              <textarea
                name="message"
                id="message"
                className="min-h-64 grow resize-none rounded-md border border-white/20 px-2 py-4 text-slate-50/80"
              ></textarea>
              <div>
                <span className="rounded-lg bg-violet-600/70 px-2">
                  Your Message
                </span>
              </div>
            </label>
            <div className="text-red-700">
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={state.submitting}
                className="rounded-md bg-gradient-to-bl from-violet-600/30 to-fuchsia-600/30 px-4 py-2 text-slate-50/80 transition hover:cursor-pointer hover:from-violet-600/40 hover:to-fuchsia-600/40 hover:text-slate-50"
              >
                Submit
              </button>
            </div>
          </form>
        )}
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
    <li className="group flex items-end gap-1 text-violet-400 underline underline-offset-4 hover:text-violet-500">
      <span>
        <ArrowRight size={16} />
      </span>
      <div
        className="flex flex-col items-center text-slate-50/70 hover:cursor-pointer hover:text-slate-50/80"
        onClick={() => onclick(link)}
      >
        <span>{icon}</span>
        <span className="text-violet-400 group-hover:text-violet-500">
          {text}
        </span>
      </div>
    </li>
  );
}
