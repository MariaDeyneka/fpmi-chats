import dynamic from "next/dynamic";

const ChatList = dynamic(() => import("./components/Main/MainComponent"), {
  ssr: true,
});

export default function Home() {
  return (
    <div>
      <ChatList></ChatList>
    </div>
  );
}
