import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl">
        <div className="sm:max-w-sm flex justify-center pt-10">
          <div>
            <h1 className="text-xl font-bold text-secondary-700 mb-8">
              صفحه ای که دنبالش بودید، پیدا نشد
            </h1>
            <button onClick={moveBack} className="flex items-center gap-x-2">
              <HiArrowRight className="w-6 h-6 text-primary-900" />
              <span> برگشت</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
