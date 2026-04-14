export const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`bg-white rounded-2xl border border-gray-100 ${className}`}>
    {children}
  </div>
);
