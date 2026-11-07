import { features } from "@/assets/assets";
import Item from "./Item";

function Features() {
  return (
    <div className="relative">
      <div
        className="
          pointer-events-none absolute inset-0 z-40
          bg-[linear-gradient(to_right,white_10%,transparent_15%,transparent_85%,white_100%),linear-gradient(to_bottom,white_0%,transparent_15%,transparent_85%,white_100%)]
          sm:bg-[linear-gradient(to_right,white_0%,transparent_18%,transparent_82%,white_100%),linear-gradient(to_bottom,white_0%,transparent_18%,transparent_82%,white_100%)]
          md:bg-[linear-gradient(to_right,white_0%,transparent_20%,transparent_80%,white_100%),linear-gradient(to_bottom,white_0%,transparent_20%,transparent_80%,white_100%)]
          lg:bg-[linear-gradient(to_right,white_0%,transparent_25%,transparent_75%,white_100%),linear-gradient(to_bottom,white_0%,transparent_25%,transparent_75%,white_100%)]
        "
      />

      <div className="grid w-212.5 grid-cols-10 auto-rows-21.25 gap-px sm:w-225 sm:auto-rows-22.5 md:w-250 md:auto-rows-25 lg:w-306 lg:auto-rows-31">
        {features.map((f, index) => (
          <Item key={`${f.name}-${index}`} f={f} />
        ))}
      </div>
    </div>
  );
}

export default Features;