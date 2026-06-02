import Curve from '@/public/curve.svg';

export const CurveWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-primary-50 relative">
      <Curve className="absolute" />
      <div className="pb-12 lg:pb-16" />
      {children}
    </div>
  );
};
