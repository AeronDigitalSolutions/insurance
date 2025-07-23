import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaClipboard,
  FaShieldAlt,
  FaQuestionCircle,
  FaChevronRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import styles from "@/styles/components/dashboard/DashboardSelector.module.css";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

const MENU_GROUPS = [
  {
    title: "Menu",
    items: [{ id: 0, name: "Dashboard", icon: <FaHome /> }],
  },
  {
    title: "Account",
    items: [
      { id: 1, name: "Profile", icon: <FaUser /> },
      { id: 2, name: "My Policy", icon: <FaFileAlt /> },
    ],
  },
  {
    title: "Policy",
    items: [
      { id: 3, name: "Claims", icon: <FaClipboard /> },
      { id: 4, name: "KYC", icon: <FaShieldAlt /> },
    ],
  },
  {
    title: "Security",
    items: [{ id: 5, name: "Get Help", icon: <FaQuestionCircle /> }],
  },
];

function DashboardSelector({
  selected,
  setSelected,
}: {
  selected: number;
  setSelected: (id: number) => void;
}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLinkClick = (id: number) => {
    setSelected(id);
    setIsMobileOpen(false); // close sidebar on mobile after selection
  };

  return (
    <>
      {/* Mobile toggle button */}
      <div className={styles.mobileToggle}>
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={styles.toggleButton}
        >
          {isMobileOpen ? <IoIosArrowDropleft /> : <IoIosArrowDropright />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${styles.sidebar} ${
          isMobileOpen ? styles.mobileOpen : styles.mobileClosed
        }`}
      >
        {MENU_GROUPS.map((group, index) => (
          <div key={index} className={styles.section}>
            <div className={styles.sectionTitle}>{group.title}</div>
            <div className={styles.links}>
              {group.items.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.linkItem} ${
                    selected === item.id ? styles.active : ""
                  }`}
                  onClick={() => handleLinkClick(item.id)}
                >
                  <span className={styles.icon}>{item.icon}</span>
                  <span className={styles.linkText}>{item.name}</span>
                  {[
                    "Project",
                    "Auth Pages",
                    "Extra Pages",
                    "Components",
                    "Extended UI",
                    "Forms",
                  ].includes(item.name) && (
                    <span className={styles.arrow}>
                      <FaChevronRight />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DashboardSelector;
