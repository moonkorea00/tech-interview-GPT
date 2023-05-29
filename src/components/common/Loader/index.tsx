import { loaderElements } from './constants';

type LoaderProps = {
  count: number;
};

const Loader = ({ count }: LoaderProps) => {
  
  return (
    <div className="w-full animate-pulse">
      {loaderElements.slice(0, count).map(({ id, className }) => (
        <div key={id} className={className}></div>
      ))}
    </div>
  );
};

export default Loader;
