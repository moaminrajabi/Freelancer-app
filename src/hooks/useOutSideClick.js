import { useEffect, useRef } from "react";

export default function useOutSideClick(handler, lisenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target.value)) {
        handler();
      }
    }

    document.addEventListener("click", handleClick, lisenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, lisenCapturing);
  }, [handler, lisenCapturing]);
  return ref;
}
