import data from "../../json/education.json";
import EducationComponent from "./EducationComponent";
import SectionTitle from "../SectionTitle/SectionTitle";

export interface IEducationProps {}

export default function Education(props: IEducationProps) {
  return (
    <div className="mb-5 flex scroll-m-14 flex-col items-start gap-3 p-3">
      <SectionTitle title="My Journey" />
      <div className="flex w-full justify-center self-center md:w-3/5">
        <div className="flex w-full justify-center bg-gray-800">
          <div className="rounded-ful flex w-2 flex-col items-center justify-evenly gap-12 py-8">
            {data.data.map((education) => (
              <EducationComponent key={education.id} {...education} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
