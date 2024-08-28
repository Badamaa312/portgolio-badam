export const ScrollMenuSkills = () => {
    const scrollToMenuSkills = () => {
      window.scroll({
        top: 2800,
        behavior: "smooth",
      });
    };
    return (
      <div className="bg-gray-900 dark:bg-gray-100 dark:text-gray-900 text-center rounded-md  text-gray-50">
        <button onClick={scrollToMenuSkills}>Skills</button>
      </div>
    );
  };
  