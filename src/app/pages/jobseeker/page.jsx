import { permanentRedirect } from "next/navigation";

export default function JobSeekerPage() {
  permanentRedirect("/pages/jobseeker/login");
}