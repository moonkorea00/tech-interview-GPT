const Heading = () => {
  return (
    <div className="flex flex-col items-center gap-7 mb-10 md:mb-6 sm:mb-2">
      <h1 className="sm:pl-4 text-6xl sm:text-5xl font-semibold">
        Tech Interview <span className="underline decoration-green">GPT</span>
      </h1>
      <p className="w-full px-5 text-2xl sm:text-xl font-light text-center">
        Start a<span className="underline decoration-sky"> speech to text</span>{' '}
        Tech Interview with a Senior AI Software Engineer and{' '}
        <span className="underline decoration-sky">get Instant Feedback</span>
      </p>
    </div>
  );
};

export default Heading;
