import React from "react";
import useRefCallback from "use-callback-but-better";

const MemoTextField = React.memo(
  (props: { text: string; onChange: (s: string) => void }) => {
    console.log("render");
    return (
      <input
        value={props.text}
        onChange={(e) => props.onChange(e.target.value)}
      />
    );
  }
);

const TextFieldWithCasing: React.FC = () => {
  const [text, setText] = React.useState("");
  const [upperCase, setUpperCase] = React.useState(false);

  const handleTyping = useRefCallback(
    (upperCase) => (newText: string) => {
      setText(upperCase ? newText.toUpperCase() : newText.toLowerCase());
    },
    [upperCase]
  );

  return (
    <div>
      <MemoTextField text={text} onChange={handleTyping} />
      <button onClick={() => setUpperCase((bool) => !bool)}>
        Toggle Letter Case
      </button>
    </div>
  );
};

export default function App() {
  return <TextFieldWithCasing />;
}
