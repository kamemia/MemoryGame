export function Tile({ content: Content, flip, state }) {
  
  switch (state) {
    case "start":
      return (
        <Back
          className="inline-block h-20 w-20 rounded-md m-2 bg-indigo-300 text-center hover:bg-indigo-400"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="inline-block h-20 m-2 w-20 bg-indigo-400 text-white rounded-md shadow-xl">
          <Content
            style={{
              display: "inline-block",
              width: "60%",
              height: "60%",
              margin: "18px",
            }}
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className="inline-block h-20 w-20 m-2 bg-indigo-50 text-indigo-200">
          <Content
            style={{
              display: "inline-block",
              width: "60%",
              height: "60%",
              margin: "18px",
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
