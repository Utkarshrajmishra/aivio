type LineProps = {
  className?: string;
  variant?: "one" | "two" | "three";
};

const Line = ({ className, variant = "one" }: LineProps) => {
  const paths = {
    one: "M 58,18C 58,18 33,24 33,33C 33,42 46,41 46,45C 46,49 22,55 18,56L 19,59C 19,59 49,53 49,45C 49,37 36,40 36,33C 36,26 59,21 59,21L 58,18 Z",
    two: "M20,10 C40,30 60,20 55,40 C50,60 25,55 20,40 Z",
    three: "M10,60 C30,30 50,30 65,10"
  };

  return (
    <svg
      className={className}
      viewBox="0 0 76 76"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d={paths[variant]}
        fill="#FFE4BF"
        fillOpacity="0.6"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Line;


// #d6d6d6