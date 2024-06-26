import { SectionTitle } from "./SectionTitle"
import { skills } from "../data"
import { SkillCard } from "./SkillCard"

export const Skills = () => {
  return (
    <section className="py-20 mx-auto max-w-7xl px-8" id="skills">

        <SectionTitle text={'tech Stack'}/>
        <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill)=>{
            return<SkillCard  key={skill.id} text={skill.text} title={skill.title} icon={skill.icon}/>
        })}
        </div>
    </section>
  )
}
