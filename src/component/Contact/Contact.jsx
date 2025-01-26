import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3_FORM_API,
          ...formData,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="bg-[#ffffff] 2xl:container flex items-center justify-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-pink-500">
            Contact Us
          </h2>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-[150px] justify-center">
          <div className="flex flex-col space-y-5 text-lg md:text-xl font-semibold">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-pink-500" size={20} />
              <span>Tenkasi</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-pink-500" size={20} />
              <span>6385753647</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-pink-500" size={20} />
              <span>ramyadevit533@gmail.com</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-xl font-bold">Follow on</h2>
              <div className="flex gap-4">
                <a
                  href="https://github.com/AMOHAMMEDIMRAN"
                  className="hover:text-[#fe5617]"
                >
                  <FaGithub size={29} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammedimrana/"
                  className="hover:text-[#fe5617]"
                >
                  <FaLinkedin size={29} />
                </a>
                <a
                  href="https://www.instagram.com/immucoder/?__pwa=1"
                  className="hover:text-[#fe5617]"
                >
                  <FaInstagram size={29} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full max-w-md"
          >
            <h2 className="text-2xl font-bold text-pink-500 text-center">
              Send a Message
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-3"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-3 h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-pink-500 text-white py-3 rounded-md font-semibold hover:bg-[#581221] disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {success === true && (
              <p className="text-green-500 text-center">
                Message sent successfully!
              </p>
            )}
            {success === false && (
              <p className="text-green-500 text-center">
                                Message sent successfully!

              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


