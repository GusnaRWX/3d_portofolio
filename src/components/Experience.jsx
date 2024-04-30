/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { SectionWrapper } from "../hoc"
import { styles } from "../styles"
import { experiences } from "../constants"
import { textVariant } from "../utils/motion"

const ExperienceCard = ({
  experince
}) => {
  return (
    <VerticalTimelineElement
     contentStyle={{ background: '#1d1836', color: '#fff', fontWeight: 800, borderColor: '#ffa500' }}
     contentArrowStyle={{ borderRight: '7px solid #1d1836' }}
     date={experince.date}
     iconStyle={{
      background: experince.iconBg

     }}
     icon={
      <div className="flex justify-center items-center w-full h-full border-[#ffa500]">
        <img
         src={experince.icon}
         alt={experince.company_name}
         className="w-[60%] h-[60%] object-contain"
        />
      </div>
     }
    >
      <div>
        <h3 className="text-[#4deed3] text-[24px] font-bold">{experince.title}</h3>
        <p className="text-[#ffa500] text-[18px] font-bold" style={{ margin: 0 }}>{experince.project}</p>
        <p className="text-white text-[16px] font-semibold" style={{ margin: 0 }}>{experince.company_name}</p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {
          experince.points.map((point, index) => (
            <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
              {point}
            </li>
          ))
        }
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
     <motion.div
      variants={textVariant()}
     >
      <p className={styles.sectionSubText}>What i have done so far</p>
      <h2 className={styles.sectionHeadText}>Work Experience.</h2>
     </motion.div>
     <div className="mt-20 flex flex-col">
      <VerticalTimeline lineColor="#ffa500">
        {
          experiences.map((experince, index) => (
            <ExperienceCard key={index} experince={experince}/>
          ))
        }
      </VerticalTimeline>
     </div>
    </>
  )
}

export default SectionWrapper(Experience, 'experience')