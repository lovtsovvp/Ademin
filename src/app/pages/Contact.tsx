import { motion } from "motion/react";
import { MetroTile } from "../components/MetroTile";
import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";

import {
  VKIcon,
  TelegramIcon,
  InstagramIcon,
} from "../icons";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-9b54e9f0/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.error("Server error:", result);
        alert("Ошибка отправки сообщения. Попробуйте позже.");
        return;
      }

      alert("Спасибо! Сообщение успешно отправлено.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Ошибка отправки сообщения. Проверьте подключение к интернету.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary/20 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Контакты
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Свяжитесь со мной для обсуждения сотрудничества
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-8">
              Форма обратной связи
            </h2>

            <MetroTile>
              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 bg-input border border-border focus:border-primary outline-none"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ademinproduction@gmail.com"
                  className="w-full px-4 py-3 bg-input border border-border focus:border-primary outline-none"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (000) 000-00-00"
                  className="w-full px-4 py-3 bg-input border border-border focus:border-primary outline-none"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Расскажите о вашем проекте..."
                  className="w-full px-4 py-3 bg-input border border-border focus:border-primary outline-none resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-4 flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  {isSubmitting ? "Отправка..." : "Отправить сообщение"}
                </button>

              </form>
            </MetroTile>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-8">
              Контактная информация
            </h2>

            <div className="space-y-6">

              <MetroTile>
                <div className="flex gap-4">
                  <div className="bg-primary text-white p-3">
                    <Mail size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold">Email</h3>
                    <a
                      href="mailto:ademinproduction@gmail.com"
                      className="text-primary hover:underline"
                    >
                      ademinproduction@gmail.com
                    </a>
                  </div>
                </div>
              </MetroTile>

              <MetroTile>
                <div className="flex gap-4">
                  <div className="bg-primary text-white p-3">
                    <Phone size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold">Телефон</h3>
                    <a
                      href="tel:+79952345240"
                      className="text-primary hover:underline"
                    >
                      +7 (995) 234-52-40
                    </a>
                  </div>
                </div>
              </MetroTile>

              {/* Socials */}
              <MetroTile className="bg-primary text-primary-foreground">
                <h3 className="font-bold mb-4">Социальные сети</h3>

                <div className="flex gap-4">

                  <a
                    href="https://t.me/"
                    target="_blank"
                    className="bg-white text-primary p-3 hover:scale-110 transition-all"
                  >
                    <TelegramIcon size={24} />
                  </a>

                  <a
                    href="https://vk.com/id1103359210"
                    target="_blank"
                    className="bg-white text-primary p-3 hover:scale-110 transition-all"
                  >
                    <VKIcon size={24} />
                  </a>

                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    className="bg-white text-primary p-3 hover:scale-110 transition-all"
                  >
                    <InstagramIcon size={24} />
                  </a>

                </div>
              </MetroTile>

            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
