import { Breadcrumb } from "@/components/Breadcrumb";
import { CommentsSection } from "@/components/CommentsSection";
import { CourseDetailsClient } from "@/components/CourseDetailsClient";
import { CourseMaterials } from "@/components/CourseMaterials";

export default function CourseDetailsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-6 flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8 lg:items-start">
        <div className="lg:col-span-3 flex flex-col gap-2">
          <Breadcrumb />
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 leading-tight">
            Starting SEO as your Home
          </h1>
        </div>

        <CourseDetailsClient
          courseMaterials={<CourseMaterials />}
          desktopComments={
            <div className="hidden lg:block mt-2">
              <CommentsSection id="comments-section-desktop" />
            </div>
          }
          mobileComments={
            <div className="block lg:hidden w-full">
              <CommentsSection id="comments-section-mobile" />
            </div>
          }
        />
      </div>
    </div>
  );
}
