const Heading = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-7 mt-10"
      // border border-black border-solid
    >
      <h1 className="text-5xl font-semibold">
        Tech Interview{' '}
        <span className="underline decoration-green-600">GPT</span>
      </h1>
      <p className="w-[800px] text-xl font-light">
        Start a{' '}
        <span className="underline decoration-sky-500">speech to text</span>{' '}
        Tech Interview with an AI Senior Developer and{' '}
        <span className="underline decoration-sky-500">
          get Instant Feedback
        </span>
      </p>
    </div>
  );
};

export default Heading;
