import {Lottie} from "lottie-react";

export default function CodingAnimation() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-10 rounded-full bg-brand/20 blur-3xl"
      />

      {/* Animation */}
      <div className="relative min-h-[400px] overflow-hidden rounded-3xl border border-slate-800 bg-panel/40 p-4 shadow-glow sm:min-h-[480px] sm:p-8">
        <Lottie
          src="/animations/coding-person.json.json"
          loop={true}
          autoplay={true}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid meet",
          }}
          className="h-[380px] w-full sm:h-[440px]"
          aria-label="Developer coding on a computer"
        />
      </div>

      {/* Bottom label */}
      <div className="absolute -bottom-5 left-1/2 flex w-[90%] -translate-x-1/2 items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-panel/95 px-5 py-4 shadow-xl backdrop-blur">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan" />

        <p className="text-center text-sm font-medium text-slate-300">
          Building modern digital solutions
        </p>
      </div>
    </div>
  );
}