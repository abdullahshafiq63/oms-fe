import SubActivities from "./subactivities";

const Activities = () => {
  return (
    <div className="w-full gap-[3px] mt-3">
    <p className="w-full h-[20px] font-sans text-[14px] font-normal leading-[20px] text-left ">
        Activities
      </p>
      
      <SubActivities icon="/Abstract03.png" notification={'Changed the style'} time={'just now'} /> 
      <SubActivities icon="/2.png" notification={'Released a new version of the page'} time={'59 minutes ago'} /> 
      <SubActivities icon="/3.png" notification={'Submitted a bug'} time={'12 hours ago'} /> 
      <SubActivities icon="/3D03.png" notification={'Modified a data in x page'} time={'Today, 11:59 AM'} /> 
      <SubActivities icon="/5.png" notification={'Delete a page in X project'} time={'feb 2, 2024'} />
    </div>
  );
};

export default Activities;