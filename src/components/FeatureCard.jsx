export default function FeatureCard({ icon, title, desc }) {
    return (
      <div className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-[#CDECE3] to-[#E9D5FA] mb-3">
          {icon}
        </div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-black/70 text-sm leading-relaxed">{desc}</p>
      </div>
    );
  }
  