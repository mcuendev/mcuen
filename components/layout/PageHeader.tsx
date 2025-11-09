import Link from "next/link";
import { H1Typo, LeadTypo } from "../typography/TypographyComponents";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

interface PageHeaderProps {
  title: string;
  descritpion: string;
  note?: string;
  button?: {
    href: string;
    text: string;
  };
}

const PageHeader = ({ title, descritpion, note, button }: PageHeaderProps) => {
  return (
    <>
      <H1Typo>{title}</H1Typo>
      <LeadTypo className="text-lg text-pretty">{descritpion}</LeadTypo>
      {note && (
        <Card className="bg-accent">
          <CardContent className="flex flex-col lg:flex-row space-y-4 justify-between">
            <p>{note}</p>

            {button && (
              <Button asChild>
                <Link href={button.href}>{button.text}</Link>
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
};
export default PageHeader;
