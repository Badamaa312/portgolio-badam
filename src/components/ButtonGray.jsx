export const ButtonGray = (props) => {
  const { title } = props;
  return (
    <div className="flex">
      <span className=" bg-gray-200 dark:bg-gray-600 dark:text-gray-300 text-center rounded-md  text-gray-600  px-5 py-1 text-sm">
        {title}
      </span>
    </div>
  );
};
