import { buttonClass } from '@/styles/classNames'

//const buttonClass = "bg-teal-500 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-full transition duration-100 ease-in-out";

const ButtonGo = (
  { onClick, moreClasses, text }: { onClick: any, moreClasses: string | null, text: string }
) => {
  return (
    <button className={`${buttonClass} ${moreClasses}`} onClick={onClick}>
      {text ? text : "Go"}
    </button>
  );
};

export default ButtonGo;
