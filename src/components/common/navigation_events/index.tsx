import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const NavigationEvents = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {}, [pathname, searchParams]);

  return null;
};

export default NavigationEvents;
