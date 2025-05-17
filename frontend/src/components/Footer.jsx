const Footer = () => {
  return (
    <footer className="bg-white py-4 shadow-inner dark:bg-gray-800 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} NPTEL Quiz App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
