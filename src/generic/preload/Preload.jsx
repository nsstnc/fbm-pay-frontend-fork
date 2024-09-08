import { useEffect, useState } from "react";

const Preload = (e) => {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    e.preventDefault();
    setIsToggled(true);
    if (isToggled) {
      const timer = setTimeout(() => {
        setIsToggled(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [e]);
  console.log(isToggled);
  return isToggled;
};

export default Preload;
