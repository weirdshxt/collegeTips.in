import React from "react";
import bg from "../assets/images/bg.png";
import Card from "../component/Card";


const Impact = () => {
  return (
    <div
      id="impact"
      className="flex flex-col relative items-center justify-center bg-[#FEF4D1] min-h-screen overflow-hidden"
    >
      <div className="flex items-center justify-center gap-4">
        <div className="card absolute bottom-[8%] left-[10%] -rotate-12">
          <Card
            image={bg}
            title={"Street to Home"}
            name={"Bruno"}
            description={
              ", once a scared street pup, was rescued during our “Winter Shelter Drive.” Now he enjoys belly rubs and cozy naps with his new family in Patna. His journey reminds us that every stray deserves love and a second chance."
            }
          />
        </div>
        <div className="card absolute top-[10%] right-[10%] -rotate-4">
          <Card
            image={bg}
            title={"Street to Home"}
            name={"Bruno"}
            description={
              ", once a scared street pup, was rescued during our “Winter Shelter Drive.” Now he enjoys belly rubs and cozy naps with his new family in Patna. His journey reminds us that every stray deserves love and a second chance."
            }
          />
        </div>
        <div className="card absolute rotate-12">
          <Card
            image={bg}
            title={"Street to Home"}
            name={"Bruno"}
            description={
              ", once a scared street pup, was rescued during our “Winter Shelter Drive.” Now he enjoys belly rubs and cozy naps with his new family in Patna. His journey reminds us that every stray deserves love and a second chance."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Impact;
