import MainLayout from "@/components/MainLayout";
import JobSeekerEmployerButton from "@/components/JobSeekerEmployerButton";
import JobSeekerSignUpBody from "./_components/JobSeekerSignUpBody";

export const metadata = {
  title: "signup",
  description: "This is the description for my custom page.",
};

export default function JobSeekerSignUpPage() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-start w-full gap-2">
        <JobSeekerEmployerButton />
        <JobSeekerSignUpBody />
      </div>
    </MainLayout>
  );
}
