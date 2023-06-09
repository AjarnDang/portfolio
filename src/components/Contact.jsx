import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitch } from "react-icons/fa";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Cantact message from my Portfolio",
          from_email: form.email,
          to_email: "torntan.j@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 xl:mb-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden xl:h-[400px] md:h-auto`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form> */}
        <p className="mt-4"><span className={styles.sectionSubText}>Tel :</span> 061-026-6997</p>
        <p className="mt-2"><span className={styles.sectionSubText}>Email : </span>torntan.j@gmail.com</p>
        <p className="mt-2"><span className={styles.sectionSubText}>Address : </span>Khon Kaen, 40000 Thailand</p>
        <span className="inline-flex mt-12">
          <a href="https://web.facebook.com/profile.php?id=100044497928864" target="__blank">
        <FaFacebook
          style={{
            width:"40px",
            height:"40px",
          }}  
          className="mr-4"     
         />
         </a>
         <a href="https://www.instagram.com/Brandthron/?fbclid=IwAR1clbvt7e6XAcCD6anSxfVrrwyKLWs5_NkN96dVBZNdsc-0ki7UBwirXwc" target="__blank">
         <FaInstagram
          style={{
            width:"40px",
            height:"40px",
          }} 
          className="mr-4"     
         />
         </a>
         <a href="https://www.twitch.tv/l34nny" target="__blank">
         <FaTwitch
          style={{
            width:"40px",
            height:"40px",
          }} 
          className="mr-4"     
         />
         </a>
         <a href="https://www.youtube.com/channel/UC8T4F0fNvCg7nKxSbnPKBSg" target="__blank">
         <FaYoutube
          style={{
            width:"40px",
            height:"40px",
          }} 
          className="mr-4"     
         />
         </a>        
         </span>
        
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
