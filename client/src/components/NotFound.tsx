import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-200 dark:bg-orange-900 rounded-full opacity-30 blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-300 dark:bg-orange-800 rounded-full opacity-20 blur-3xl animate-pulse" />
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-8xl font-extrabold text-orange drop-shadow-lg mb-4 animate-bounce">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2 tracking-wide">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md text-center">
          Sorry, the page you are looking for does not exist or has been moved. Please check the URL or return to the homepage.
        </p>
        <Link to="/">
          <Button className="bg-orange hover:bg-hoverOrange px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:scale-105">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;