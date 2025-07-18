import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function ProjectCard({
  title = "Project Title",
  description = "Project Description",
  className = "",
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
