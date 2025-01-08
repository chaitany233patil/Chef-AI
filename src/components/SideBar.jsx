/* eslint-disable react/prop-types */
export default function SideBar({ toggle }) {
  return (
    <div className="sidebar" style={{ left: toggle }}>
      <h3>Upcoming Features</h3>
      <ul className="sidebar-ul">
        <li className="sidebar-options">Enable Dark Mode</li>
        <li className="sidebar-options">Ask AI for Recipe Suggestions</li>
        <li className="sidebar-options">Save Your Favorite Recipes</li>
        <li className="sidebar-options">Create Custom Meal Plans</li>
        <li className="sidebar-options">Generate AI-Powered Grocery List</li>
      </ul>
    </div>
  );
}
