const SidebarItem = ({ Icon, label, active }) => {
  return (
    <div
      className={`flex items-center space-x-3 px-4 py-2 rounded cursor-pointer ${
        active
          ? "bg-gray-200 text-gray-900"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
      }`}
    >
      <Icon className="w-6 h-6" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

export default SidebarItem;