export const ScrollMenuContactMe = () => {
    const scrollToContactMe= () => {
      window.scroll({
        top: 5500,
        behavior: "smooth",
      });
    };
    return (
      <span className="dark:bg-gray-900 bg-gray-100 text-gray-900  rounded-md pl-1 pr-1 dark:text-gray-50">
        <span onClick={scrollToContactMe}>ContactMe</span>
      </span>
    );
  };
  