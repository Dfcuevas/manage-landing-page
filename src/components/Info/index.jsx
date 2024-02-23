import { ButtonStarted } from "../ButtonStarted";

const Info = () => {
  return (
    <section className="bg-brightRed text-veryPaleRed px-12 py-20  text-center">
      <h1 className="text-6xl font-bold mb-12">
        Simplify how your team works today.
      </h1>
      <ButtonStarted bgChange={true} />
    </section>
  );
};

export { Info };
