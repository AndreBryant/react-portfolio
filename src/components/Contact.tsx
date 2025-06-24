import { Facebook, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="flex flex-col gap-8 py-32 lg:h-screen" id="contact">
      <h2 className="text-4xl">Contact Me</h2>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1/2 flex-col items-center gap-16 rounded-lg border border-white/20 bg-black/50 p-4 pt-16">
          <div>
            <p className="text-center text-3xl text-white/80">
              Thank you for taking the time to go over my portfolio!
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <ul className="flex items-center justify-center gap-8 text-sm lg:gap-16">
              <li>
                <div className="flex flex-col items-center">
                  <span className="">
                    <Linkedin size={42} />
                  </span>
                  <span>LinkedIn </span>
                </div>
              </li>
              <li>
                <div className="flex flex-col items-center">
                  <span>
                    <Github size={42} />
                  </span>
                  <span>Github</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col items-center">
                  <span>
                    <Facebook size={42} />
                  </span>
                  <span>Facebook</span>
                </div>
              </li>
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
              className="rounded-md border border-amber-200/20 bg-amber-900 px-2 py-1 text-white hover:bg-amber-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
