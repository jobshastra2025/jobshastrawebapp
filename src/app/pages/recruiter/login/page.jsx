import React from "react";
import JobSeekerEmployerButton from "@/components/JobSeekerEmployerButton";
import RecruiterLoginBody from "./_components/RecruiterLoginBody";
import MainLayout from "@/components/MainLayout";

export const metadata = {
      title: 'login',
      description: 'This is the description for my custom page.',
    };

export default function RecruiterLoginPage(){
     return (
        <MainLayout>
          <div className="flex flex-col items-center justify-start gap-2">
            <JobSeekerEmployerButton/>
            <RecruiterLoginBody/>
          </div>
        </MainLayout>
      );
}
