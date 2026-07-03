import projectsEn from "@/lang/data-projects-en";
import ProjectDetailClient from "./project-detail-client";

export function generateStaticParams() {
  return projectsEn.map((project) => ({ id: String(project.id) }));
}

type Props = {
  params: Promise<{
    id: string;
  }>;
};

async function ProjectDetailPage({ params }: Props) {
  const { id: rawId } = await params;
  const id = Number(rawId);

  return <ProjectDetailClient id={id} />;
}

export default ProjectDetailPage;
