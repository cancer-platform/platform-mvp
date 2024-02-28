import React from "react";
/* 
Подготовь разметку у меня layout 360 * 800 (уже готов), страницу будем рендерить в него, про него не беспокойся. Используй Next.js и tailwind
Идем сверху вниз слева направо.
Сначала элемент картинка со ссылкой квадртная на примерно 1/20 ширины, в той же строке черный жирный текст Sign In
Ниже - поле ввода Enter your email, вначале этого поля прямо в нем иконка конверта
Ниже-  поле ввода Enter your password вначале этого поля прямо в нем иконка замка, 
в конце этого поля, прямо в нем иконка перечеркнутого глаза, чтобы скрывать либо показывать пользователю, что он вводит
Сразу под полем ссылка, смещенная вправо Forgot password? Для перехода к форме восстановления пароля

Ниже закругленная кнопка Sign In
Сразу под ней - надпись Don`t have an account? И тут же ссылка Sign up

Ниже - разделительная полоса с надписью внутри OR

Под ней кнопка, оформленная как принято Sign in with Google


*/
const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <a href="#">
        <img src="square_image_url" alt="Square Image" className="w-1/20" />
      </a>
      <span className="font-bold mt-2">Sign In</span>
      <div className="mt-4">
        <div className="flex items-center">
          <img
            src="envelope_icon_url"
            alt="Envelope Icon"
            className="w-4 h-4"
          />
          <input type="text" placeholder="Enter your email" className="ml-2" />
        </div>
        <div className="flex items-center mt-2">
          <img src="lock_icon_url" alt="Lock Icon" className="w-4 h-4" />
          <input
            type="password"
            placeholder="Enter your password"
            className="ml-2"
          />
          <img src="eye_icon_url" alt="Eye Icon" className="w-4 h-4 ml-2" />
        </div>
        <a href="#" className="block text-right mt-2">
          Forgot password?
        </a>
      </div>
      <button className="mt-4 rounded-lg px-4 py-2">Sign In</button>
      <div className="mt-4 text-center">
        <span>Don't have an account? </span>
        <a href="#">Sign up</a>
      </div>
      <div className="mt-4 text-center">
        <hr className="border-t border-black w-full" />
        <span className="bg-white px-2">OR</span>
      </div>
      <button className="mt-4 rounded-lg px-4 py-2">Sign in with Google</button>
    </div>
  );
};

export default LoginPage;
