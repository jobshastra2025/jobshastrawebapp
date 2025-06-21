import MainLayout from "@/components/MainLayout";
import RecruiterSignUpBody from "./_components/RecruiterSignUpBody";
import JobSeekerEmployerButton from "@/components/JobSeekerEmployerButton";
export const metadata = {
  title: "signup",
  description: "This is the description for my custom page.",
};

export default function RecruiterSignUpPage() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-start w-full gap-2">
        <JobSeekerEmployerButton />
        <RecruiterSignUpBody />
      </div>
    </MainLayout>
  );
}
