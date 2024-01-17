import { useState } from "react";
import QueryBalance from "@/comps/QueryBalance";

export type MenuItem = {
	href: string,
	text: string,
}

export const menuItems = [
  // { href: "issueNFT", text: "Issue NFT" },
  // { href: "mintNFT", text: "Mint NFT" },
  { href: "wallet", text: "Wallet" },
  // { href: "queryNFTCollection", text: "NFTs" },
  // { href: "whitelistingNFT", text: "White Listing" },
];

export const Header = () => {

  const linkClasses = "text-white hover:text-gray-300 block";

  // State to track whether the mobile menu is open or closed
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
		console.log('toggleMobileMenu clicked');
		setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="bg-transparent p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo text on the left */}
          <a href={"/"} className="text-white text-lg font-semibold">
            Coreum App
          </a>

					<div style={{zoom:'.75'}}>
						<QueryBalance button={false} />
					</div>

          {/* Mobile menu button (visible on small screens) */}
          {isMobileMenuOpen ? (
						<ButtonCloseMenu onClick={toggleMobileMenu} />
          ) : (
						<ButtonOpenMenu onClick={toggleMobileMenu} />
          )}

          {/* Mobile menu items (hidden or visible based on the state) */}
          <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
            {menuItems.map((menuItem, index: number) => (
              <a key={index} href={menuItem.href} className={linkClasses}>
                {menuItem.text}
              </a>
            ))}
          </div>

          {/* Desktop menu items */}
          <div className="hidden lg:flex lg:space-x-4">
            {menuItems.map((menuItem, index: number) => (
              <a key={index} href={menuItem.href} className={linkClasses}>
                {menuItem.text}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

interface ButtonMenuProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

// const ButtonCloseMenu: React.FC<ButtonMenuProps> = ({ onClick }) => {
const ButtonCloseMenu = ({ onClick }: ButtonMenuProps) => {
  return (
		<button
      className="lg:hidden text-white focus:outline-none"
      onClick={onClick}
    >
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          data-stroke-linecap="round"
          data-stroke-linejoin="round"
          data-stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
  );
};


// const ButtonOpenMenu: React.FC<ButtonMenuProps> = ({ onClick }) => {
function ButtonOpenMenu({ onClick }: { onClick: any }) {
  return (
    <button
      className="lg:hidden text-white focus:outline-none"
      onClick={onClick}
    >
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          data-stroke-linecap="round"
          data-stroke-linejoin="round"
          data-stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
    </button>
  );
};
