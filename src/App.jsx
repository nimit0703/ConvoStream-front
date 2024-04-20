import DefaultLoader from "./components/common/loader/DefaultLoader"
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "./store/slices/LoaderSlice";

function App() {
  const isLoading = useSelector((state) => state.LoaderSliceReducer.isLoading);
  const dispatch = useDispatch();
  const toggleLoader = () => {
    dispatch(setLoader(!isLoading));
    setTimeout(() => {
      dispatch(setLoader(false));
    }, 2000);
  };

  return (
    <>
      {isLoading && <DefaultLoader />}
      <h1 className="text-orange-700">ConvoStream-Frontend</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleLoader}
      >
        {isLoading ? "Hide Loader" : "Show Loader"}
      </button>
    </>
  )
}

export default App
