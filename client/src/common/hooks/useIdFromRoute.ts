import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { MatchParams } from '../types';

export const useIdFromRoute = () => {
  // Get the values of dynamic parameters from the current URL.
  const routerParams = useParams<MatchParams>();

  const selectedActivityId = useMemo(() => {
    return routerParams.id || undefined;
  }, [routerParams.id]);
  // const contractId = routerParams.contractId;

  return { selectedActivityId };
};
