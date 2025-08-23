import clsx from 'clsx';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, className }: SectionProps) => (
  <section className={clsx('px-content py-content bg-neutral-100', className)}>
    {children}
  </section>
);

export default Section;
