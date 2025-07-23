"use client";
import React, { useState } from "react";
import { LuUser } from "react-icons/lu";
import styles from "@/styles/components/dashboard/DashboardProfile.module.css";

const DashboardProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [DOB, setDOB] = useState("");
  const [income, setIncome] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [city, setCity] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Personal Deatails</h2>

      <div className={styles.formGrid}>
        <div className={styles.inputDiv}>
          <label className={styles.label}>First Name</label>
          <input
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.inputDiv}>
          <label className={styles.label}>Last Name</label>
          <input
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.inputDiv}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.inputDiv}>
          <label className={styles.label}>Mobile Number</label>
          <input
            type="text"
            placeholder="Enter mobile number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.inputDiv}>
          <label className={styles.label}>Date of Birth</label>
          <input
            type="date"
            value={DOB}
            onChange={(e) => setDOB(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.inputDiv}>
          <label className={styles.label}>Annual Income</label>
          <input
            type="number"
            placeholder="Enter income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.inputDiv}>
          <label className={styles.label}>Marital Status</label>
          <input
            type="text"
            placeholder="Enter status"
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.inputDiv}>
          <label className={styles.label}>City</label>
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.inputDiv}>
          <label className={styles.label}>Annual Income</label>
          <input
            type="number"
            placeholder="Enter annual income"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(e.target.value)}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button}>Save Details</button>
      </div>
    </div>
  );
};

export default DashboardProfile;
