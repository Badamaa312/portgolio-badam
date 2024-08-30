export const ScrollMenuExperience = () => {
    const scrollToExperience= () => {
      window.scroll({
        top: 1930,
        behavior: "smooth",
      });
    };
    return (
      <span className="dark:bg-gray-900 bg-gray-100 text-gray-900  rounded-md pl-1 pr-1 dark:text-gray-50">
        <span onClick={scrollToExperience}>Experience</span>
      </span>
    );
  };
  