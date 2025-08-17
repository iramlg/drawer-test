export interface textProps {
  children: React.ReactNode;
}

export const Title = ({ children }: textProps): JSX.Element => {
  return <h2 className="text-xl font-bold">{children}</h2>;
};

export const SubTitle = ({ children }: textProps): JSX.Element => {
  return <h3 className="font-normal text-foreground-50 mb-8">{children}</h3>;
};

export const CardTitle = ({ children }: textProps): JSX.Element => {
  return (
    <h4 className="text-base font-semibold text-foreground mb-3">{children}</h4>
  );
};
