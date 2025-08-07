import { memo } from "react";
import { Card, CardBody, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";

interface testimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export const TestimonialCard = memo(function TestimonialCard({
  name,
  role,
  content,
  avatar,
}: testimonialCardProps) {
  return (
    <Card className="border-none h-80 md:h-64 bg-white/90 dark:bg-black/40">
      <CardBody className="p-6 flex flex-col">
        <div>
          
          <p className="text-foreground-600 mb-5 text-4xl">
            {content}
          </p>
            <p className="text-lg text-foreground-500" >{role}</p>
        </div>
        <div className="flex items-center gap-4 mt-auto">
          <Avatar className="bg-white text-black ring-2 ring-primary-200 rounded-full shadow-sm" size="lg" src={avatar} />
          <div>
            <h1 className="font-semibold  text-2xl md:text-4xl">{name}</h1>
          </div>
        </div>
      </CardBody>
    </Card>
  );
});
