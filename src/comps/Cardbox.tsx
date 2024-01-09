import { ReactNode } from "react";
const Cardbox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
      {/*<img className="w-full h-48 object-cover" src="your-image-url.jpg" alt="Card Image" />*/}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Title</h2>
        {/*<p className="text-gray-600 mt-2">Card content goes here.</p>*/}
        {children}
        {/* <div className="mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Read More
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Cardbox;
