
export const ScrollMenuAbout =()=> {

  
    const scrollToMenuAbout = () => {
      window.scroll({
        top: 1050,
        behavior: "smooth",
        
      });
    };
  
    return (
      <div className="bg-gray-900 dark:bg-gray-100 dark:text-gray-900 text-center rounded-md  text-gray-50">
        
          <button onClick={scrollToMenuAbout}>About me</button>
      
      </div>
    );
  }