export default function Mitch() {
  return (
    <section className="mx-auto max-w-screen-2xl">
      <div className="hidden sm:block">
        <h2 className="my-7 text-center text-5xl font-semibold capitalize">
          about dr. mitch
        </h2>
        <div className="grid-rows-[auto_auto_auto m-auto grid w-[100%] space-y-5 lg:w-[90%]">
          <div className="mx-auto grid w-[95%] grid-cols-[auto_auto] items-start gap-10 px-3 py-5 lg:max-w-[60%]">
            <div>
              <div className="w-[300px]">
                <p className=" text-2xl text-blue-700">Entrepreneur:</p>
                <p>Started four businesses.</p>
                <p>The next one is ready for takeoff.</p>
              </div>
            </div>
            <div>
              <div className="w-[300px]">
                <p className="text-2xl text-blue-700">Investor:</p>
                <p>
                  Seed round personal investment in tech startups{" "}
                  <a
                    href="https://ashcreekadvisors.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    (https://ashcreekadvisors.com).
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="grid items-start lg:grid-cols-[30%_40%_30%]">
            <div className="px-10 py-8">
              <div>
                <p className="text-2xl text-blue-700">Social Scientist:</p>
                <p>
                  National research awards in emotional intelligence and
                  prevention.
                </p>
                <p>Youth mental health research.</p>
                <p>
                  President’s Task Force in the Division of Family Psychology,
                  APA{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="images/Mitch.jpg"
                alt="Dr.Mitch"
                className="h-[400px] rounded-lg"
              />
            </div>
            <div className="">
              <div className="px-10 py-8">
                <p className="text-2xl text-blue-700">Management Consultant:</p>
                <p>Can you execute on your strategy?</p>
                <p>
                  Longitudinal corporate assessment across 17 languages, 40+
                  offices and countries.
                </p>
                <p>What makes a great manager? Deep dive withing companies.</p>
                <p>
                  True Point case research.{" "}
                  <a
                    href="https://www.truepoint.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    https://www.truepoint.com/
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto grid w-[95%] grid-cols-[auto_auto] items-start gap-10 px-3 py-5 lg:max-w-[60%]">
            <div className="">
              <div>
                <p className="text-2xl text-blue-700">Education:</p>
                <p>Kenyon College, BA</p>
                <p>Yale University, PhD in Psychology</p>
                <p>Yale University, School of Management</p>
                <p>
                  Yale University, School of Medicine, Mental Health Research
                  Scientist
                </p>
              </div>
            </div>
            <div className="">
              <div>
                <p className="text-2xl text-blue-700">Behavioral Health:</p>
                <p>
                  State of Connecticut behavioral health Quality Assurance
                  subcommittee.
                </p>
                <p>Quality of care and managed care research study.</p>
                <p>
                  Taught in nations #1 program in Marriage and Family Therapy
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mb-20 text-center text-2xl text-blue-700">
          Man of Faith
        </h2>
      </div>
      <div className="sm:hidden">
        <h2 className=" my-7 text-center text-4xl font-semibold capitalize">
          about dr. mitch
        </h2>
        <div className="grid-row-7 grid space-y-4 px-4">
          <div className="flex justify-center">
            <img
              src="images/Mitch.jpg"
              alt="Dr.Mitch"
              className="h-[400px] rounded-lg"
            />
          </div>
          <div>
            <p className=" text-2xl text-blue-700">Entrepreneur:</p>
            <p>Started four businesses.</p>
            <p>The next one is ready for takeoff.</p>
          </div>
          <div className="">
            <p className="text-2xl text-blue-700">Social Scientist:</p>
            <p>
              National research awards in emotional intelligence and prevention.
            </p>
            <p>Youth mental health research.</p>
            <p>
              President’s Task Force in the Division of Family Psychology, APA{" "}
            </p>
          </div>
          <div className="">
            <p className="text-2xl text-blue-700">Education:</p>
            <p>Kenyon College, BA</p>
            <p>Yale University, PhD in Psychology</p>
            <p>Yale University, School of Management</p>
            <p>
              Yale University, School of Medicine, Mental Health Research
              Scientist
            </p>
          </div>
          <div className="">
            <p className="text-2xl text-blue-700">Management Consultant:</p>
            <p>Can you execute on your strategy?</p>
            <p>
              Longitudinal corporate assessment across 17 languages, 40+ offices
              and countries.
            </p>
            <p>What makes a great manager? Deep dive withing companies.</p>
            <p>
              True Point case research.{" "}
              <a
                href="https://www.truepoint.com/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                https://www.truepoint.com/
              </a>
            </p>
          </div>
          <div>
            <p className="text-2xl text-blue-700">Investor:</p>
            <p>
              {" "}
              Seed round personal investment in tech startups
              <a
                href="https://ashcreekadvisors.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                (https://ashcreekadvisors.com).
              </a>
            </p>
          </div>
          <div className="">
            <p className="text-2xl text-blue-700">Behavioral Health:</p>
            <p>
              State of Connecticut behavioral health Quality Assurance
              subcommittee.
            </p>
            <p>Quality of care and managed care research study.</p>
            <p>Taught in nations #1 program in Marriage and Family Therapy</p>
          </div>
        </div>

        <h2 className="my-5 text-center text-2xl text-blue-700">
          Man of Faith
        </h2>
      </div>
    </section>
  );
}
