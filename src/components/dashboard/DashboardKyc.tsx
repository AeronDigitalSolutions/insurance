"use client";
import React, { useState } from "react";
import { LuUser } from "react-icons/lu";
import { RiBarChartBoxLine } from "react-icons/ri";
import { FiInfo } from "react-icons/fi";

import styles from "@/styles/components/dashboard/DashboardKyc.module.css";

function DashboardKyc() {
  const [aadhar, setAadhar] = useState("");

  const handleAadharChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, ""); 
    input = input.slice(0, 12); // Limit to 12 digits
    const formatted = input.replace(/(.{4})/g, "$1 ").trim(); // Add space after every 4 digits
    setAadhar(formatted);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.userGreeting}>
                <h3>Hi, Demo User</h3>

      </div>

      <div className={styles.cont}>
        <div className={styles.inner}>
          <div>
            <div className={styles.head1}>
              <RiBarChartBoxLine />
              Aadhaar Verification
            </div>
            <h2 className={styles.title}>Enter Aadhaar Number</h2>
            <p className={styles.subtitle}>
              Please enter your 12-digit Aadhaar number to begin the
              verification process.
            </p>
          </div>

          <div className={styles.middle}>
            <input
              className={styles.input}
              type="text"
              inputMode="numeric"
              pattern="\d*"
              value={aadhar}
              onChange={handleAadharChange}
              placeholder="XXXX XXXX XXXX"
              maxLength={14}
            />
            <div className={styles.info}>
              <FiInfo />
              <span>Your Aadhaar data is securely encrypted and protected</span>
            </div>
          </div>

          <div className={styles.bottom}>
            <button className={styles.button}>Proceed To Verification</button>
            <p className={styles.agreement}>
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardKyc;
