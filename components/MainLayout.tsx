/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NavBar from "./NavBar.tsx";

export default function MainLayout({ children }: { children: h.JSX.Element }) {
  return (
    <div class={tw`bg-black text-white h-screen overflow-auto`}>
      <NavBar />
      <div class={tw`p-8 mx-auto mt-10 max-w-screen-md `}>{children}</div>
    </div>
  );
}
