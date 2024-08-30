
export const ScrollMenuAbout =()=> {

  
    const scrollToMenuAbout = () => {
      window.scroll({
        top: 1050,
        behavior: "smooth",
        
      });
    };
  
    return (
      <span className="dark:bg-gray-900 bg-gray-100 text-gray-900  rounded-md pl-1 pr-1 dark:text-gray-50">
        
          <span onClick={scrollToMenuAbout}>About me</span>
      
      </span>
    );
  }