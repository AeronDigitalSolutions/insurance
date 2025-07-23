"use client";
import Image from "next/image";
import React from "react";
import styles from "@/styles/components/dashboard/DashboardClaims.module.css";
import { LuUser } from "react-icons/lu";

function DashboardClaims() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userInfo}>
                <h3>Hi, Demo User</h3>
     </div>

      <div className={styles.inner}>
        {[1, 2, 3].map((_, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.imageCont}>
              <Image
                src={require("@/assets/dashboard/details/1.png")}
                alt="car"
                className={styles.image}
              />
            </div>
            <div className={styles.middle}>
              <p className={styles.top}>Car Insurance</p>
              <div>
                <p className={styles.make}>Maruti Suzuki</p>
                <p className={styles.number}>TN08GH8767</p>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.expire}>
                <p className={styles.grey}>Plan Type:</p>
                <p>Comprehensive Special Inspection</p>
              </div>
              <div className={styles.expire}>
                <p className={styles.grey}>IDV:</p>
                <p>₹2800</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardClaims;
