import { buttonClass } from "@/styles/classNames";

//const buttonClass = "bg-teal-500 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-full transition duration-100 ease-in-out";

const ButtonGo = ({
  onClick,
  moreClasses,
  text,
  isDisabled
}: {
  onClick: any;
  moreClasses: string | null;
  text: string;
  isDisabled: boolean
}) => {
  return (
    <button
      type="button"
      className={`${buttonClass} ${moreClasses} ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text ? text : "Go"}
    </button>
  );
};

export default ButtonGo;
