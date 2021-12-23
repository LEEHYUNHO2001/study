import type { NextPage } from "next";
import { WineContainer } from "../../conponents";

const PortPage: NextPage = () => {
  const name = "port";

  return (
    <div>
      <WineContainer name={name} />
    </div>
  );
};

export default PortPage;
