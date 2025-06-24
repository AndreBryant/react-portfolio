export default function Contact() {
  return (
    <section className="flex h-screen flex-col gap-8 py-32" id="contact">
      <h2 className="text-4xl">Contact Me</h2>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex-1/2 rounded-lg border p-4">
          <p className="text-white/90">Here are some of my message</p>
          <p className="text-white/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at
            facilis veniam porro laboriosam, beatae quam nulla non sed! Ipsa,
            culpa vel! Voluptatem quasi a aliquam expedita fugiat rem. Sunt?
          </p>
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
                className="peer h-12 rounded-md border border-white/20 px-2 py-1 text-slate-50/90"
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
                className="h-12 rounded-md border border-white/20 px-2 py-1 text-slate-50/90"
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
              className="min-h-32 grow resize-none rounded-md border border-white/20 px-2 py-4 text-slate-50/90"
            ></textarea>
            <div>
              <span>Your Message</span>
            </div>
          </label>
          <div>
            <button
              type="submit"
              className="rounded-md border border-white/20 px-2 py-1 text-white/80 hover:bg-white/10"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
