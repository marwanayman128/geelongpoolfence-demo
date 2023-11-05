const steps = [
  {
    stepNumber: 1,
    stepDescription: "Register your pool or spa with your local council",
  },
  {
    stepNumber: 2,
    stepDescription:
      "Have your pool or barrier inspected by our qualified registered inspectors",
  },
  {
    stepNumber: 3,
    stepDescription:
      "Ensure your barrier complies with the Building Regulations or applicable Australian Standards",
  },
  {
    stepNumber: 4,
    stepDescription:
      "Lodge your ‘Certificate of Compliance’ with your local council",
  },
];
type StepCardProps = {
  stepNumber: number;
  stepDescription: string;
};
function StepCard({ stepNumber, stepDescription }: StepCardProps) {
  return (
    <div className="col-md-3  h-40 max-[1000px]:w-[80%]">
      <div className="item text-center justify-center flex flex-col items-center group  ">
        <span className="icon">
          <h1 className="text-white text-5xl font-bold mt-4 group-hover:text-[#2FA8FD]">
            {stepNumber}
          </h1>
        </span>
        <p className="text-white text-xs leading-6 font-bold">
          {stepDescription}
        </p>
      </div>
    </div>
  );
}
export default function section4() {
  return (
    <>
      <section className="process">
        <div className="section-padding bg-img  section-padding OurProcess">
          <div className="flex flex-col m-auto w-full justify-center items-center ">
            <div className="row">
              <div className="col-md-6 offset-md-3 mb-45 text-center max-[900px]:ml-0 max-[900px]:w-full">
                <h5 style={{ color: "white", fontWeight: "bold" }}>
                  Four Simple Steps
                </h5>
                <div className="text-white relative mb-4">
                  <h2 className="text-5xl font-bold leading-tight">
                    Pool Compliance
                  </h2>
                </div>{" "}
                <p>
                  Our process is centered around listening to your needs and
                  desires, meticulous planning, and a steadfast commitment to
                  fulfilling your requests.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center z-40 container max-[1000px]:flex-col max-[1000px]:gap-20 ">
              {steps.map((step, index) => (
                <StepCard
                  key={index}
                  stepNumber={step.stepNumber}
                  stepDescription={step.stepDescription}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
