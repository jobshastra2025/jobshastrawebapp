import { permanentRedirect } from "next/navigation";

export default function Home() {
  permanentRedirect("/pages/jobseeker/login");
}
