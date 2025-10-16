export default function Brushstroke() {
  return (
    <div className="relative w-40 h-3 mx-auto mb-12">
      <div
        className="absolute inset-0 rounded-full blur-[8px] opacity-90 paint-stroke"
        style={{
          background:
            "linear-gradient(90deg, #ffb86c, #ff6fb1, #ff61d2, #ff9a3c)",
          filter: "saturate(150%) brightness(110%)",
        }}
      ></div>

      <div
        className="absolute inset-0 rounded-full mix-blend-overlay opacity-40"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
        }}
      ></div>
    </div>
  );
}
