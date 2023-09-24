import Header from "../components/Header";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";

export default function RestaurantMenu() {
  return (
    <>
      <title>Menu of Milestones Gril (Toronto) | OpenTable</title>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar />
        <Menu />
      </div>
    </>
  );
}
