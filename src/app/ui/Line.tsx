const Line = ({ number, text }: { number: string, text: string, }) => {
  return (
    <div className="flex">
      <div className="w-10 flex-none text-right mr-4 text-[#928374]">{number}</div>
      <div className="">{text}</div>
  </div>
  );
};

export default Line;