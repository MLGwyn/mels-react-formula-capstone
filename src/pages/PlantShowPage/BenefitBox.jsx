import clsx from "clsx";

const BenefitBox = ({icon,title,description}) =>{
  return <div className=" flex flex-col items-center flex-1 px-2 py-4">
    <i className={clsx("text-3xl", icon)}/>
    <div className="text-slate-800 my-1">{title}</div>
    <div className="text-sm text-slate-700 text-center">{description}</div>
  </div>
}

export default BenefitBox;