import { H1Typo, LeadTypo } from "../typography/TypographyComponents";

interface PageHeaderProps {
  title: string;
  descritpion: string;
}

const PageHeader = ({ title, descritpion }: PageHeaderProps) => {
  return (
    <>
      <H1Typo>{title}</H1Typo>
      <LeadTypo className="text-lg text-pretty">{descritpion}</LeadTypo>
    </>
  );
};
export default PageHeader;
