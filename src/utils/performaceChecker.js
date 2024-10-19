// ComputerPerformanceChecker.js

import { useEffect, useState } from "react";

const ComputerPerformanceChecker = ({ children }) => {
  const [isPowerful, setIsPowerful] = useState(false);

  useEffect(() => {
    const checkComputerPerformance = () => {
      if (
        navigator.hardwareConcurrency >= 4 && // Check if the device has at least 4 logical processors
        navigator.deviceMemory >= 8 // Check if the device has at least 8 GB of memory
      ) {
        setIsPowerful(true);
      }
    };

    checkComputerPerformance();
  }, []);

  return children(isPowerful);
};

export default ComputerPerformanceChecker;
