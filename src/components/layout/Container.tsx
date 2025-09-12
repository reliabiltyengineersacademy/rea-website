import { cn } from '@/lib/utils';

const Container = ({
  children,
  className,
  as: Component = 'section',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) => {
  return (
    <Component className={cn('w-full xl:container px-4', className)} {...props}>
      {children}
    </Component>
  );
};

export default Container;
