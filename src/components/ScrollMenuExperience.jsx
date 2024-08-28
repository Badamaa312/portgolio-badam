export const ScrollMenuExperience = () => {
    const scrollToExperience= () => {
      window.scroll({
        top: 1930,
        behavior: "smooth",
      });
    };
    return (
      <div className="bg-gray-900 dark:bg-gray-100 dark:text-gray-900 text-center rounded-md  text-gray-50">
        <button onClick={scrollToExperience}>Experience</button>
      </div>
    );
  };
  