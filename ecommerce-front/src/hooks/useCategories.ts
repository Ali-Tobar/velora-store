import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
const useCategories = () => {
  const dispatch = useAppDispatch();
  // Get the categories and request status from Redux.
  const { records, loading, error } = useAppSelector(
    (state) => state.categories,
  );
  // Fetch categories when the list is empty.
  useEffect(() => {
    if (records.length > 0) return;

    const promise = dispatch(actGetCategories());

    return () => {
      promise.abort();
    };
  }, [dispatch, records.length]);

  return { loading, error, records };
};

export default useCategories;
