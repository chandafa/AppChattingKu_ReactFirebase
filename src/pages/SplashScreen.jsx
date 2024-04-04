import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SplashScreen() {
  const navigate = useNavigate();

  // to login
  const toLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    let user = localStorage.getItem("chattingku_chat_user");
    if (user) {
      return navigate("/chat");
    }
  }, []);

  return (
    <main className="w-screen h-screen p-8 bg-gradient-to-t from-blue-700 to-blue-500 flex flex-col">
      <h1 className="text-[54px] text-white font-bold leading-11 z-[99]">ChattingKu</h1>
      <h1 className="text-[49px] text-white font-bold leading-11 z-[99]">Chat App</h1>

      <p className="text-[16px] text-white font-semibold mt-4 z-[99]">Chat apapun yang kamu mau ke orang bosan yang ada di seluruh dunia..</p>

      <button className="w-full h-10 bg-black text-white mt-auto rounded-lg z-[100]" onClick={toLogin}>
        Login Now
      </button>

      <img src="https://images.pexels.com/photos/5053739/pexels-photo-5053739.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1" alt="" className="w-screen h-screen object-cover absolute opacity-25 top-0 left-0" />
      <p className="mx-auto mt-5 text-white">By Chandra</p>
    </main>
  );
}
