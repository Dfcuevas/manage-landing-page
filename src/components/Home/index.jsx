import HomeImg from "/illustration-intro.svg";
import { ButtonStarted } from "../ButtonStarted";

const Home = () => {
  return (
    <main className="px-6 text-center lg:flex lg:gap-40 lg:px-24 lg:items-center mb-32">
      <section className="lg:order-1 lg:w-[130%] mb-6">
        <img className="w-full" src={HomeImg} alt="Imagen del home" />
      </section>
      <section className="lg:text-left">
        <h1 className="text-darkBlue text-4xl xl:text-5xl font-bold leading-10 mb-8">
          Bring everyone together to build better products.
        </h1>
        <p className="text-justify text-darkGrayishBlue leading-7 mb-8 lg:text-sm lg:leading-6 xl:w-[300px]">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <ButtonStarted />
      </section>
    </main>
  );
};

export { Home };
