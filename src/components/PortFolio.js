import React, { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function PortFolio() {
  const [selectedId, setSelectedId] = useState(null);
  const items = [
    { id: 1, title: "dapp", subtitle: "made with react" },
    { id: 2, title: "clapp", subtitle: "made with react" },
    { id: 3, title: "papp", subtitle: "made with react" },
  ];
  return (
    <div>
      <AnimateSharedLayout type="crossfade">
        {items.map((item) => (
          <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={items.id}>
              <motion.h5>{items.subtitle}</motion.h5>
              <motion.h2>{items.title}</motion.h2>
              <motion.button onClick={() => setSelectedId(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
}
