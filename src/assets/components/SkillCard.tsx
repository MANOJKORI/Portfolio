import { ReactElement } from "react"
interface SkillProps {
    text:string,
    title:string,
    icon:ReactElement
}
export const SkillCard = ({text, title, icon}:SkillProps) => {
  return (
    <article>
        <span>{icon}</span>
        <h4 className="mt-6 font-bold">
           {title} 
        </h4>
        <p className="mt-2 text-slate-500">
            {text}
        </p>
    </article>
  )
}
