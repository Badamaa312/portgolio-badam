export const ExperienceMap = () => {
    const experiencies = [
      {
        role: "Sr. Frontend Developer",
        lists: [" Loreem fgdshjfg fgdshfjgdshjf fdshfgdsjhfgds fgdshjfgdsh " , " Loreem fgdshjfg fgdshfjgdshjf fdshfgdsjhfgds fgdshjfgdsh " , " Loreem fgdshjfg fgdshfjgdshjf fdshfgdsjhfgds fgdshjfgdsh " ," Loreem fgdshjfg fgdshfjgdshjf fdshfgdsjhfgds fgdshjfgdsh " ,],
        date: "Nov 2021 - Present",
      },
      {
        role: "Team Lead",
        lists: [" Loreem fgdshjfg fgdshfjgdshjf fdshfgdsjhfgds fgdshjfgdsh " , " Loreem fgdshjfg fgdshfjgdshjf fdshfgdsjhfgds fgdshjfgdsh " , " Loreem fgdshjfg fgdshfjgdshjf fdshfgdsjhfgds fgdshjfgdsh " ," Loreem fgdshjfg fgdshfjgdshjf fdshfgdsjhfgds fgdshjfgdsh " ,],
        date: "Jul 2017 - Oct 2021",
      }, {
        role: "Full Stack Developer",
        lists: [" Loreem fgdshjfg fgdshfjgdshjf fdshfgdsjhfgds fgdshjfgdsh " , " Loreem fgdshjfg fgdshfjgdshjf fdshfgdsjhfgds fgdshjfgdsh " , " Loreem fgdshjfg fgdshfjgdshjf fdshfgdsjhfgds fgdshjfgdsh " ," Loreem fgdshjfg fgdshfjgdshjf fdshfgdsjhfgds fgdshjfgdsh " ,],
        date: "Dec 2015 - May 2017",
      },];
  
    const elements = experiencies.map((element) => {
      return (
        <main>
          <div>{element.role}</div>
          <div>{element.lists}</div>
          <div>{element.date}</div>
        </main>
      );
    });
  
    return (
      <main className="flex gap-12 flex-wrap  items-center justify-center">
        {elements}
      </main>
    );
  };
  