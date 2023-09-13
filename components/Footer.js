

export default function Footer() {
    return (
      <div className="h-[100px] font-roboto bg-white  flex justify-between flex-col gap-1 text-xs py-8 text-blue-900 items-center px-10 border-t border-blue-600 ">
        <div className="text-xs">© 2023 Sachin Yadav</div>
        <div className="space-x-1 ">
          <a href="#privacy" className="underline underline-offset-2">Privacy</a>
          <span>∙</span>
          <a href="#terms" className="underline underline-offset-2">Terms</a>
          <span>∙</span>
          <a href="#notice" className="underline underline-offset-2">Collection Notice</a>
        </div>
      </div>
    );
  }
  