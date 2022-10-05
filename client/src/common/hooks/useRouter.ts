import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import { MatchParams } from '../../types';

export const useRouter = () => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  // Get the values of dynamic parameters from the current URL.
  const routerParams = useParams<MatchParams>();
  // Get the values of query parameters from the current URL.
  const searchParams = new URLSearchParams(location.search);
  // navigate to a passed URL via history.
  function navigate(path: string) {
    history.push(path);
  }

  return { history, location, match, navigate, routerParams, searchParams };
};
