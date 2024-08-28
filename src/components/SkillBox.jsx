
export const SkillBox = ({ iconComponent, text }) => {
  return (
    <div className="=h-[100px] w-[88px] flex flex-col items-center gap-2">
      {iconComponent}
      <p className="dark:text-white">{text}</p>
    </div>
  );
};
