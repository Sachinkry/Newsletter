import { signIn } from "next-auth/react";

const SignInModal = ({ show, onClose }) => {

    
    return show ? (
      <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <div className="flex flex-col justify-center p-4 rounded bg-stone-100  w-[300px] gap-5 ">
          <h2 className="text-xs font-bold text-center text-stone-700">Please Sign In</h2>
          <button className="px-3 py-2 bg-purple-400 rounded-md" onClick={() => signIn('google')}>Sign In with Google</button>
          <button className="text-sm text-red-500 underline" onClick={onClose}>Close</button>
        </div>
      </div>
    ) : null;
};

export default SignInModal;


  