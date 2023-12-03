import React from 'react'
import { CgSpinnerTwoAlt } from "react-icons/cg";

const LoadingSpinner = () => {
  return (
    <p className="flex h-screen items-center justify-center text-lg italic">
      <CgSpinnerTwoAlt className="h-20 w-20 animate-spin text-emerald-400" />
    </p>
  );
}

export default LoadingSpinner