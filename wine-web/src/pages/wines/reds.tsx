import type { NextPage } from "next";
import { WineContainer } from "../../conponents";

const RedsPage: NextPage = () => {
  const name = "reds";

  return (
    <div>
      <WineContainer name={name} />
    </div>
  );
};

export default RedsPage;
