import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdPersonAddAlt } from "react-icons/md";
import { PiCarProfileFill } from "react-icons/pi";
import Image from "next/image";

import styles from "@/styles/components/dashboard/DashboardDetails.module.css";

const LIST = [
  {
    id: 0,
    name: "Secure what you love",
    desc: "Ensure your family's safety with reliable coverage and seamless renewals.",
    icon: <MdPersonAddAlt />,
  },
  {
    id: 1,
    name: "Add Your Vehicle",
    desc: "Easily manage your vehicle's insurance and updates in one place.",
    icon: <PiCarProfileFill />,
  },
];

function DashboardDetails() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Hi, Demo User</h2>
        <div className={styles.policyInfo}>
          <span className={styles.policyText}>Active Policy</span>
          <div className={styles.policyCount}>1</div>
          <IoIosArrowForward />
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardTop}>
          <Image
            src={require("@/assets/dashboard/details/1.png")}
            alt="Car"
            className={styles.carImage}
          />
          <div className={styles.cardText}>
            <h3>Car Insurance</h3>
            <p className={styles.expireText}>Your Policy will expire on 25 June 2025</p>
          </div>
        </div>
        <div className={styles.cardBottom}>
          <div className={styles.infoGroup}>
            <span className={styles.label}>Expire Date:</span> 28 June 2025
          </div>
          <div className={styles.infoGroup}>
            <span className={styles.label}>Registration Number:</span> TN08DF5678
          </div>
          <button className={styles.renewBtn}>
            Renew Now <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div className={styles.optionsList}>
        {LIST.map((item) => (
          <div key={item.id} className={styles.optionCard}>
            <div className={styles.optionIcon}>{item.icon}</div>
            <div className={styles.optionDetails}>
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
            </div>
            <div className={styles.optionArrow}>
              <FaArrowRightLong />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardDetails;
