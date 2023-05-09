const Heading = () => {
  return (
    <div className="flex flex-col items-center gap-7 mb-10">
      <h1 className="text-6xl font-semibold">
        Tech Interview <span className="underline decoration-green">GPT</span>
      </h1>
      <p className="w-full text-2xl font-light">
        Start a<span className="underline decoration-sky"> speech to text</span>{' '}
        Tech Interview with an Senior AI Web Developer and{' '}
        <span className="underline decoration-sky">get Instant Feedback</span>
      </p>
    </div>
  );
};

export default Heading;
