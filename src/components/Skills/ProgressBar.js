import React from "react";
import { motion } from "framer-motion";

export default function ProgressBar(props) {
  const { completed, custom } = props;

  const containerStyles = {
    width: "89%",
    backgroundColor: "#eee",
  };

  const fillerStyles = {
    width: `${completed}%`,
    backgroundColor: "black",
    textAlign: "right",
    marginRight: "auto",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  };

  const labelStyles = {
    color: "white",
    fontWeight: "bold",
  };
  const variants = {
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.2 },
      width: `${completed}%`,
    }),
  };

  return (
    <div style={containerStyles}>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate="visible"
        custom={custom}
        variants={variants}
        style={fillerStyles}
      >
        <span style={labelStyles}>{`${completed}%`}</span>
      </motion.div>
    </div>
  );
}
