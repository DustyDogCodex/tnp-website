import type { StaffTNP } from "../../env";

const Staff: React.FC<{
  data: StaffTNP[];
}> = ({ data }) => {
  return <div className="md:flex grid grid-cols-2 md:justify-between pt-4 flex-wrap gap-2">{data.map(staff => <StaffPot {...staff}/>)}</div>;
};

export default Staff;

const StaffPot = (staffInfo: StaffTNP) => {
    return (
        <div className="border border-[#e2e2e2] bg-[#f9fafb] rounded-lg p-4 flex flex-col justify-center items-center gap-2">
            <img src={"../../../public/Testimonials/"+staffInfo.staffFoto} alt="staffFoto" className="w-52 bg-pink-400"/>
            <div className="font-semibold">{staffInfo.StaffName}</div>
            <div>{staffInfo.designation}</div>
            <div className="bg-[#E4E7EC] px-3 py-2 rounded-lg text-sm">{staffInfo.experties}</div>
        </div>
    )
}