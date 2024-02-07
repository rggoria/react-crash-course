import { useEffect, useState } from "react";

const ConditionalRenderingBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // done fetching data
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return <h1>Multiple Returns Basics</h1>;
};

export default ConditionalRenderingBasics;
