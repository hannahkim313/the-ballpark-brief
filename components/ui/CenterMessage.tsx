const CenterMessage = ({ children }: { children: React.ReactNode }) => (
  <div className="flex size-full items-center justify-center">
    <p className="text-lg font-bold md:text-xl lg:text-2xl">{children}</p>
  </div>
);

export default CenterMessage;
