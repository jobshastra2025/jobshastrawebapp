import JobSeekerEmployerButton from "@/components/JobSeekerEmployerButton";
import JobSeekerLoginBody from "./_components/JobSeekerLoginBody";
import MainLayout from "@/components/MainLayout";


export const metadata = {
  title: "login",
  description: "This is the description for my custom page.",
};
export default function JobSeekerLoginPage() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-start w-full gap-2">
        <JobSeekerEmployerButton />
        <JobSeekerLoginBody />
      </div>
    </MainLayout>
  );
}