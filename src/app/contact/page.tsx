import ContactForm from "@/components/feature/contact-form";

export const metadata = {
  title: "Contact | Quick Recipe",
};

export default async function ContactPage() {
  return (
    <main className="fade-In">
      <div className="flex flex-col-reverse items-center lg:flex-row justify-evenly">
        <ContactForm />
        <div className="flex items-center lg:justify-start justify-center">
          <h2 className="p-4 lg:text-7xl text-4xl font-bold text-primary">
            Contact <br className="hidden lg:flex" /> Us.
          </h2>
        </div>
      </div>
    </main>
  );
}
