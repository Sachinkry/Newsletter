import { useRouter } from "next/router";

export default function Footer({newsletterData}) {
  const router = useRouter();

    return (
      <div className="min-h-[100px] font-roboto bg-stone-200  flex justify-between flex-col gap-1 text-xs py-8 text-stone-600 items-center px-10 border-t border-stone-600/30 ">
        <div className="text-xs">© 2023 {newsletterData?.name || "lol"}</div>
        <div className="space-x-1 ">
          <a href="#privacy" className="underline underline-offset-2">Privacy</a>
          <span>∙</span>
          <a href="#terms" className="underline underline-offset-2">Terms</a>
          <span>∙</span>
          <a href="#notice" className="underline underline-offset-2">Collection Notice</a>
        </div>
        <button className="mt-2 text-lg text-purple-700 underline decoration-purple-400 " onClick={() => router.push("/startNewsletter")}>Start writing on Substack.io</button>
      </div>
    );
  }
  