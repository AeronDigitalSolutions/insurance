import React from "react";
import styles from "@/styles/components/dashboard/DashboardPolicies.module.css";
import Image from "next/image";
import { LuUser } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";

function DashboardPolicies() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userGreet}>
        <h3>Hi, Demo User</h3>
      </div>


      <div className={styles.card}>
        <div className={styles.imageCont}>
          <Image
            src={require("@/assets/dashboard/details/1.png")}
            alt="car"
            className={styles.image}
          />
        </div>

        <div className={styles.middle}>
          <p className={styles.top}>Car Insurance</p>
          <p className={styles.make}>Maruti Suzuki</p>
          <p className={styles.number}>TN08GH8767</p>
        </div>

        <div className={styles.right}>
          <div className={styles.expire}>
            <span className={styles.red}>Expire</span>
            <span> on 28 June 2025</span>
          </div>
          <button className={styles.button}>
            See More <FaChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardPolicies;
