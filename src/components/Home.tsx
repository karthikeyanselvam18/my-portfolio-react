import ContactComponent from "./ContactComponent";
import data from "../json/contacts.json"

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div
      className="mt-14 flex h-[calc(100dvh-3.5rem)] scroll-m-14 flex-col-reverse justify-center gap-5 p-10 text-gray-800 md:flex-row md:justify-between"
      id="home"
    >
      <div className="md:7/12 flex flex-col items-center justify-center gap-4 text-center md:items-start md:gap-5 md:text-left">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold md:text-4xl">
            Hello, I'm <span className="text-purple-500">Karthikeyan</span>
          </h1>
          <p className="text-lg md:text-xl">
            Passionate Web Developer Crafting digital wonders with code.
            <br />
            Let's build something extraordinary together!
          </p>
        </div>
        <div className="flex gap-5">
          {data.data.map(contact => <ContactComponent key={contact.id} {...contact} />)}
        </div>
      </div>
      <div className="flex w-full items-center justify-center md:w-5/12">
        <img src="/assets/hero.png" className="full md:w-full" alt="" />
      </div>
    </div>
  );
}
