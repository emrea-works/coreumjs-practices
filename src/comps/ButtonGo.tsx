import { buttonClass } from '@/styles/classNames'

//const buttonClass = "bg-teal-500 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-full transition duration-100 ease-in-out";

const ButtonGo = ({ onClick }: { onClick: any }) => {
  return (
    <button className={buttonClass} onClick={onClick}>
      Go
    </button>
  );
};

export default ButtonGo;
