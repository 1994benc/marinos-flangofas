/** @jsx h */

import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

export default function GrowingImage({ src }: { src: string }) {
  const [numClicks, setNumClicks] = useState<number>(1);
  return (
    <div>
      <img
        onClick={() => setNumClicks(numClicks + 1)}
        src={src}
        class={tw`hover:scale-125 transition-all duration-200 ease-in-out`}
        style={{
          width: `${getWidthPx(numClicks)}px`,
          cursor: "pointer",
        }}
        alt="Python"
      />
    </div>
  );
}

function getWidthPx(numClicks: number) {
  const w = numClicks * 4 + 100;
  if (w > 600) {
    return 600;
  }
  return w;
}
