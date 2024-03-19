import SlotCounter from "react-slot-counter";

const Counter = ({ text, count, ...rest }) => {
  return (
    <div className="sub-counter">
      <h3 {...rest}>
        <SlotCounter
          value={count}
          animateOnVisible={{
            triggerOnce: false,
            rootMargin: "0px 0px -100px 0px",
          }}
        />
      </h3>
      <p>{text}</p>
    </div>
  );
};

export default Counter;
