/* eslint-disable react-refresh/only-export-components */
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

//template_ghejpo1
//service_d5lvjxh
//Hti6CWKGs8qiEcvw4

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    email: '',
    name: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({...form, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send('service_d5lvjxh', 'template_ghejpo1', {
      from_name: form.name,
      to_name: 'Gusna',
      from_email: form.email,
      to_email: 'dadangusna777@gmail.com',
      message: form.message
    }, 'Hti6CWKGs8qiEcvw4')
    .then(() => {
      setLoading(false)
      alert('Thanks, i will get back to you as soon as possible')
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false)
      console.log(error)
      alert('Something went wrong')
    })
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
       variants={slideIn('left', 'tween', 0.2, 1)}
       className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>get in touch</p>
        <p className={`${styles.sectionHeadText}`}>Contact.</p>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className='flex flex-col'>
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
             type='text'
             name='name'
             value={form.name}
             onChange={handleChange}
             placeholder="Whats your name?"
             className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none focus:outline-teal-400 border-[#4deed3] font-medium"
            />
          </label>
          <label className='flex flex-col'>
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
             type='email'
             name='email'
             value={form.email}
             onChange={handleChange}
             placeholder="Whats your email?"
             className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none focus:outline-teal-400 border-none font-medium"
            />
          </label>
          <label className='flex flex-col'>
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
             rows={7}
             type='text'
             name='message'
             value={form.message}
             onChange={handleChange}
             placeholder="Whats do you want to say?"
             className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none focus:outline-teal-400 border-none font-medium"
            />
          </label>
          <button
           type="submit"
           className="bg-[#4deed3] py-3 px-8 outline-none w-fit text-black font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
       variants={slideIn('right', 'tween', 0.2, 1)}
       className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')