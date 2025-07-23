
import React, { useState } from "react";
import DashboardSelector from "./DashboardSelector";
import DashboardProfile from "./DashboardProfile";
import DashboardDetails from "./DashboardDetails";
import DashboardClaims from "./DashboardClaims";
import DashboardPolicies from "./DashboardPolicies";
import DashboardKyc from "./DashboardKyc";
import DashboardHelp from "./DashboardHelp";

import styles from "@/styles/components/dashboard/DashboardMain.module.css";

function DashboardMain() {
  const [componentToShow, setComponentToShow] = useState(0);

  return (
    <div className={styles.wrapper}>
      {/* Left: Sidebar */}
      <DashboardSelector
        selected={componentToShow}
        setSelected={setComponentToShow}
      />

      {/* Right: Main Content */}
      <div className={styles.mainContent}>
        {componentToShow === 0 && <DashboardDetails />}
        {componentToShow === 1 && <DashboardProfile />}
        {componentToShow === 2 && <DashboardPolicies />}
        {componentToShow === 3 && <DashboardClaims />}
        {componentToShow === 4 && <DashboardKyc />}
        {componentToShow === 5 && <DashboardHelp />}
      </div>
    </div>
  );
}

export default DashboardMain;
