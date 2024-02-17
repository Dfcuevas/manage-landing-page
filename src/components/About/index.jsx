import { ButtonStarted } from "../ButtonStarted";

const About = () => {
  return (
    <section className="lg:flex lg:gap-20">
      <div className="text-center px-6 mb-10 lg:px-0">
        <h2 className="text-darkBlue text-4xl lg:text-4xl font-bold leading-[3rem] mb-8 lg:text-left">
          What`s different about Manage?
        </h2>
        <p className=" text-darkGrayishBlue leading-7  lg:text-sm lg:leading-6 text-sm lg:text-left">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="px-3">
        <div className="mb-6">
          <h3 className="text-sm font-bold mb-4 bg-veryPaleRed lg:bg-transparent">
            <ButtonStarted text="01" />
            Track company-wide progress
          </h3>
          <p className="text-darkGrayishBlue leading-7  lg:text-sm lg:leading-6 text-sm lg:ml-[5.2rem]">
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-sm font-bold mb-4 bg-veryPaleRed lg:bg-transparent">
            <ButtonStarted text="02" />
            Advanced built-in reports
          </h3>
          <p className="text-darkGrayishBlue leading-7  lg:text-sm lg:leading-6 text-sm lg:ml-[5.2rem]">
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-sm font-bold mb-4 bg-veryPaleRed lg:bg-transparent">
            <ButtonStarted text="03" />
            Everything you need in one place
          </h3>
          <p className="text-darkGrayishBlue leading-7  lg:text-sm lg:leading-6 text-sm lg:ml-[5.2rem]">
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export { About };
