/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import MainLayout from "../components/MainLayout.tsx";
import GrowingImage from "../islands/GrowingImage.tsx";

export default function Home() {
  const languages = [
    { src: "/python.png", name: "Python" },
    { src: "/java.svg", name: "Java" },
    { src: "/cpp.svg", name: "C++" },
    { src: "/haskell-logo.svg", name: "Haskell" },
  ];
  return (
    <MainLayout>
      <div>
        <div class={tw`mb-10 text-gray-400 border px-5 py-4 rounded border-gray-700`}>
          <h1>Programming languages I use</h1>
          <div>Click on the logos below to see them grow</div>
        </div>

        <div class={tw`h-full flex items-center flex-wrap`}>
          {languages.map(({ src, name }, index) => (
            <GrowingImage key={index} src={src} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
