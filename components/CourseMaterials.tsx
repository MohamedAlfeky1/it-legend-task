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
      <h2 className="text-[20px] font-semibold text-gray-900 mb-4">
        Course Materials
      </h2>

      <div className="border border-gray-100 rounded-2xl p-6 sm:p-8 bg-white shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 divide-y sm:divide-y sm:divide-x divide-gray-100">
          {cols.map((col, ci) => (
            <div
              key={ci}
              className={`flex flex-col ${ci > 0 ? "pt-5 sm:pt-0 sm:pl-8" : ""}`}
            >
              {col.items.map((item, ii) => (
                <div
                  key={ii}
                  className={`flex items-center justify-between py-3.5 ${
                    ii === col.items.length - 1
                      ? "pb-0"
                      : "border-b border-gray-100"
                  } ${ii === 0 ? "pt-0" : ""}`}
                >
                  <span className="flex items-center gap-2.5 text-gray-500 font-normal text-[15px]">
                    {item.icon}
                    {item.label}
                  </span>
                  <span className={`font-medium text-[15px] text-gray-600`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
