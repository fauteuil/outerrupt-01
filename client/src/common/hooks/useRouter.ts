import {
  redirect,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { MatchParams } from '../types';
// import { MatchParams } from '../../types';

export const useRouter = () => {
  // const history = useHistory();
  const location = useLocation();
  const navigate = useNavigate();
  // const match = useMatch();

  // Get the values of dynamic parameters from the current URL.
  const routerParams = useParams<MatchParams>();
  // Get the values of query parameters from the current URL.
  const searchParams = new URLSearchParams(location.search);
  // navigate to a passed URL via history.
  // function navigate(path: string) {
  //   // history.push(path);
  //   // location.pathname = path;
  //   navigation = path;
  //   redirect(path);
  // }

  return { location, navigate, routerParams, searchParams };
};
