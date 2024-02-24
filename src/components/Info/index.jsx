import { ButtonStarted } from "../ButtonStarted";

const Info = () => {
  return (
    <section className="bg-brightRed text-veryPaleRed px-12 py-20  text-center lg:flex lg:justify-around lg:items-center">
      <h1 className="text-6xl font-bold lg:mb-0 mb-12 lg:text-4xl lg:max-w-md lg:text-left">
        Simplify how your team works today.
      </h1>
      <ButtonStarted bgChange={true} />
    </section>
  );
};

export { Info };
