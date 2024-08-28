
export const ScrollAbout =()=> {

  
    const scrollToAbout = () => {
      window.scroll({
        top: 500,
        behavior: "smooth",
      });
    };
  
    return (
      <div className="dark:bg-gray-900 bg-gray-100 text-gray-900 text-center rounded-md  dark:text-gray-50 pl-2 pr-2">
        
         
          <button onClick={scrollToAbout}>About</button>
      
        
      </div>
    );
  }