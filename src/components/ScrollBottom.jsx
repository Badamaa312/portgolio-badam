export const ScrollBottom = () => {
  const scrollToBottom = () => {
    window.scroll({
      top: 600,
      behavior: "smooth",
    });
  };
  return (
    <div className="h-[200vh]">
      <button onClick={scrollToBottom}></button>
    </div>
  );
};
