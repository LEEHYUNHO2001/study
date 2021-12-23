import type { NextPage } from "next";
import { WineContainer } from "../../conponents";

const SparklingPage: NextPage = () => {
  const name = "sparkling";

  return (
    <div>
      <WineContainer name={name} />
    </div>
  );
};

export default SparklingPage;
