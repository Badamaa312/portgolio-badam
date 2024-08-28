export const ScrollMenuWork = () => {
    const scrollToMenuWork= () => {
      window.scroll({
        top: 4350,
        behavior: "smooth",
      });
    };
    return (
      <div className="bg-gray-900 dark:bg-gray-100 dark:text-gray-900 text-center rounded-md  text-gray-50">
        <button onClick={scrollToMenuWork}>Work</button>
      </div>
    );
  };
  