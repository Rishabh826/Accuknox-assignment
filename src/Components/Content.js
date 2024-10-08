import Headers from "./Headers";
import Category from "./Category";
import { useContext } from "react";
import WidgetContext from "../Context/WidgetContext";
const Content = () => {
  const { fetchedData } = useContext(WidgetContext);
  return (
    <div className="bg-grey-50 py-5 px-10">
      <Headers />
      {fetchedData.categories.map((category) => (
        <Category key={category.id} title={category.title} id={category.id} />
      ))}
    </div>
  );
};

export default Content;