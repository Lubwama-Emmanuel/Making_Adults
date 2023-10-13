import AppSection from "../ui/AppSection";
import Separator from "../ui/Separator";

export default function Hero() {
  return (
    <AppSection>
      <div className="mt-24">
        <div className="relative">
          <div className="absolute">
            <img
              src="images/vector-2.png"
              alt="vector"
              className="h-[580px] sm:h-auto"
            />
          </div>
          <div className="grid sm:grid sm:grid-rows-[700px_1fr]">
            <div className="mb-14 w-min justify-self-end text-right sm:flex sm:h-[600px] sm:w-auto sm:items-center sm:justify-center sm:text-left">
              <h2 className="text-4xl font-light leading-[1.9] sm:ml-32 sm:w-[50%] md:text-7xl md:leading-[1.2]">
                Untangling the transition from{" "}
                <span className="font-medium">student</span> to{" "}
                <span className="font-medium text-red-600 underline">
                  adult
                </span>
              </h2>
            </div>
            <div id="get_these" className="mx-auto max-w-[100%] sm:w-[83%]">
              <h2 className="mb-5 ml-12 text-3xl">
                <span className="mr-4 text-5xl text-blue-700 underline">
                  01.
                </span>{" "}
                Get these things right in your 20s and life goes well.
              </h2>

              <div
                style={{
                  backgroundImage: `url(images/Chart_3.png)`,
                }}
                className="hidden bg-contain bg-bottom bg-no-repeat sm:block sm:h-[800px]"
              ></div>

              <div
                style={{
                  backgroundImage: `url(images/chart_3_sm.png)`,
                }}
                className="bg-large-screen h-[300px] bg-contain bg-no-repeat sm:hidden"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <Separator />
    </AppSection>
  );
}
