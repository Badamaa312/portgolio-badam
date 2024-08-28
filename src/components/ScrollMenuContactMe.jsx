export const ScrollMenuContactMe = () => {
    const scrollToContactMe= () => {
      window.scroll({
        top: 5500,
        behavior: "smooth",
      });
    };
    return (
      <div className="bg-gray-900 dark:bg-gray-100 dark:text-gray-900 text-center rounded-md  text-gray-50">
        <button onClick={scrollToContactMe}>ContactMe</button>
      </div>
    );
  };
  