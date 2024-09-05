import { useState } from "react";
export default function useToggle() {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return { toggle, onToggle };
}
