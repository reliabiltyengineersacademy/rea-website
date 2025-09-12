export default function Loading() {
  return (
    <div className='absolute z-40 inset-0 h-dvh w-dvw flex items-center justify-center bg-background'>
      <div className='size-12 border-t-2 border-b-2 border-primary rounded-full animate-spin' />
    </div>
  );
}
