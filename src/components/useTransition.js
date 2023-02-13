import { useEffect } from "react";

function useTransition(x, setShow, setTran) {
  useEffect(() => {
    if (x.current === 2) {
      setTran(true);
    } else if (x.current === 3) {
      setTimeout(() => setShow(false), 300);
    }
  });
}

export default useTransition;
