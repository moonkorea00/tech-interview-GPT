export const initialResponse =
  'Before we start, tell me more about yourself by filling out the options above. Your OpenAI key wont be required until you submit your answer so feel free to start the interview!';

export const formatLineBreak = (str: string) => {
  return str.split('\n').map((text, i) => (
    <span key={i}>
      {text}
      <br />
    </span>
  ));
};
