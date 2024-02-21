export function Tile({ content: Content, flip, state }) {
  
  switch (state) {
    case "start":
      return (
        <Back
          className="inline-block h-24 w-24 rounded m-2 bg-indigo-300 text-center hover:bg-indigo-400"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="inline-block h-24 m-2 w-24 bg-indigo-400 text-white rounded shadow-xl">
          <Content
            style={{
              display: "inline-block",
              width: "60%",
              height: "60%",
              margin: "20px",
            }}
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className="inline-block h-24 w-24 m-2 bg-indigo-50 text-indigo-200">
          <Content
            style={{
              display: "inline-block",
              width: "60%",
              height: "60%",
              margin: "20px",
            }}
          />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
 
}

function Back({ className, flip }) {
  return (
    <div onClick={flip} className={className}>
      
    </div>
  );
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
