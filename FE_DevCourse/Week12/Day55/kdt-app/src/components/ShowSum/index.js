import { useMemo } from "react";

const sum = (n) => {
  console.log("Start");
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += n;
  }
  console.log("Finish");
  return result;
};

const ShowSum = ({ label, n }) => {
  const result = useMemo(() => sum(n), [n]);

  return (
    <div>
      {label} : {result}
    </div>
  );
};

export default ShowSum;
