import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMatomo } from '@datapunt/matomo-tracker-react';

export const MatomoTracker = () => {
  const location = useLocation();
  const { trackPageView } = useMatomo();

  useEffect(() => {
    console.log("Matomo: Tracking page view pour", window.location.hash); // Ajoutez ce log !
    trackPageView({
      href: window.location.href,
    });
  }, [location, trackPageView]);

  return null;
};