import type { NextPage } from "next";
import { WineContainer } from "../../conponents";

const WhitesPage: NextPage = () => {
  const name = "whites";

  return (
    <div>
      <WineContainer name={name} />
    </div>
  );
};

export default WhitesPage;
