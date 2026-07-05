import {
  ClockIcon,
  BookIcon,
  UsersIcon,
  GlobeIcon,
} from "@/components/common/Icons";

export function CourseMaterials() {
  const cols = [
    {
      items: [
        { icon: <ClockIcon />, label: "Duration:", value: "3 weeks" },
        { icon: <BookIcon />, label: "Lessons:", value: "8" },
        { icon: <UsersIcon />, label: "Enrolled:", value: "65 students" },
        {
          icon: <GlobeIcon />,
          label: "Language:",
          value: "English",
          valueColor: "text-rose-500",
        },
      ],
    },
    {
      items: [
        { icon: <ClockIcon />, label: "Duration:", value: "3 weeks" },
        { icon: <BookIcon />, label: "Lessons:", value: "0" },
        { icon: <UsersIcon />, label: "Enrolled:", value: "65 students" },
        { icon: <GlobeIcon />, label: "Language:", value: "English" },
      ],
    },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Course Materials</h2>

      <div className="grid grid-cols-1 gap-4">
        {cols.map((col, ci) => (
          <div
            key={ci}
            className="border border-gray-200 rounded-xl p-5 space-y-3 bg-white"
          >
            {col.items.map((item, ii) => (
              <div
                key={ii}
                className="flex items-center justify-between text-sm"
              >
                <span className="flex items-center gap-2 text-gray-700 font-medium">
                  {item.icon}
                  {item.label}
                </span>
                <span
                  className={`font-semibold ${"valueColor" in item && item.valueColor ? item.valueColor : "text-gray-900"}`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
