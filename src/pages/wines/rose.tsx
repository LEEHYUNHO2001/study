import type { NextPage } from "next";
import { WineContainer } from "../../conponents";

const RosePage: NextPage = () => {
  const name = "rose";

  return (
    <div>
      <WineContainer name={name} />
    </div>
  );
};

export default RosePage;
