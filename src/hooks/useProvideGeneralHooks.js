
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
const useProvideGeneralHooks = () => {
    const dispatch = useDispatch()
  const navigate = useNavigate();
  return {
    navigate,
    dispatch
  };
};

export default useProvideGeneralHooks;
