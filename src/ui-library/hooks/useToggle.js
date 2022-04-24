import { useCallback, useState } from 'react';

const useToggle = (defaultState = false) => {
  const [value, setValue] = useState(defaultState);

  const toggle = useCallback(() => setValue((prev) => !prev), [setValue]);

  return [value, toggle];
};

export default useToggle;
