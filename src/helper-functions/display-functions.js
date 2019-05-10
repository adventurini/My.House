import { useState, useEffect } from 'react';

export const activeNavItemStyles = (path1, path2) => {
  return path1 !== path2 ? 'dashboard_sidebar_navitem' : 'dashboard_sidebar_active_navitem';
};

export const commaSeparator = num =>
  `$${Math.round(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

export const numberWithCommas = num => {
  // no dollar sign added
  return `${Math.round(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

export const sqFtToAcreConversion = sqFt => {
  return `${Math.round(sqFt * 0.0000229568 * 100) / 100}`;
};

export const acreToSqFtConversion = acre => {
  return Math.round(acre / 0.0000229568);
};

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };
  return width;
};

export const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) {
        return;
      }
      setIsFetching(true);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFetching]);

  useEffect(() => {
    if (!isFetching) {
      return;
    }
    callback();
  }, [callback, isFetching]);

  return [isFetching, setIsFetching];
};
