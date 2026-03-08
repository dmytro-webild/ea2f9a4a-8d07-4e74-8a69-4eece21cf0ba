"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboardRotatedCarousel from "@/components/sections/hero/HeroBillboardRotatedCarousel";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import AboutMetric from "@/components/sections/about/AboutMetric";
import TestimonialCardSixteen from "@/components/sections/testimonial/TestimonialCardSixteen";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { Award, CheckCircle, Monitor, Phone, Power, Shield, Stethoscope, Star, Volume2, Wifi, Wrench } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="small"
      sizing="largeSizeMediumTitles"
      background="circleGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Yireh Service"
          navItems={[
            { name: "Inicio", id: "hero" },
            { name: "Servicios", id: "services" },
            { name: "Por Qué Nosotros", id: "about" },
            { name: "Contacto", id: "contact" },
          ]}
          button={{ text: "Llamar Ahora", href: "tel:+34615652022" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Servicio técnico de electrodomésticos en Madrid"
          description="Especialistas en reparación de televisores LG con diagnóstico profesional, piezas originales y garantía en todas nuestras reparaciones. Atendemos Madrid y alrededores."
          tag="4.7 ⭐ 209 reseñas"
          tagIcon={Star}
          tagAnimation="slide-up"
          buttons={[
            { text: "Llamar Ahora", href: "tel:+34615652022" },
            { text: "WhatsApp", href: "https://wa.me/34615652022" },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          carouselItems={[
            {
              id: "1",              imageSrc: "http://img.b2bpic.net/free-photo/diligent-cobbler-glasses-is-working-with-pair-leather-shoes-his-workplace_613910-12914.jpg",              imageAlt: "Reparación profesional de televisor LG"},
            {
              id: "2",              imageSrc: "http://img.b2bpic.net/free-photo/mechanic-holding-digital-tablet_107420-95942.jpg",              imageAlt: "Técnico reparando pantalla LG"},
            {
              id: "3",              imageSrc: "http://img.b2bpic.net/free-photo/mechanic-getting-rid-hvac-system-dirt_482257-91994.jpg",              imageAlt: "Reemplazo de pantalla profesional"},
            {
              id: "4",              imageSrc: "http://img.b2bpic.net/free-photo/male-technician-hand-wearing-gloves-holding-computer-parts_23-2147922310.jpg",              imageAlt: "Reparación de placa base electrónica"},
            {
              id: "5",              imageSrc: "http://img.b2bpic.net/free-photo/couple-with-tablet-sofa_23-2147744826.jpg",              imageAlt: "Configuración Smart TV"},
            {
              id: "6",              imageSrc: "http://img.b2bpic.net/free-photo/young-female-inventor-creating-her-workshop_23-2149067227.jpg",              imageAlt: "Diagnóstico técnico profesional"},
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentySix
          title="Nuestros Servicios de Reparación"
          description="Contamos con experiencia en reparación integral de televisores LG, con diagnóstico rápido y soluciones profesionales."
          features={[
            {
              title: "Reparación de Televisores LG",              description: "Especialistas en televisores LED, OLED y Smart TV con técnicos certificados",              imageSrc: "http://img.b2bpic.net/free-photo/mechanic-holding-digital-tablet_107420-95942.jpg",              imageAlt: "Reparación LG TV",              buttonIcon: Wrench,
              buttonHref: "tel:+34615652022"},
            {
              title: "Reparación de Pantallas",              description: "Reemplazo de pantallas dañadas con piezas originales y garantía",              imageSrc: "http://img.b2bpic.net/free-photo/mechanic-getting-rid-hvac-system-dirt_482257-91994.jpg",              imageAlt: "Reparación pantalla",              buttonIcon: Monitor,
              buttonHref: "tel:+34615652022"},
            {
              title: "Problemas de Sonido",              description: "Diagnóstico y reparación de sistemas de audio y altavoces",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-artist-making-music_23-2149199987.jpg",              imageAlt: "Reparación audio",              buttonIcon: Volume2,
              buttonHref: "tel:+34615652022"},
            {
              title: "Fallos de Encendido",              description: "Reparación de problemas de alimentación y placas base",              imageSrc: "http://img.b2bpic.net/free-photo/male-technician-hand-wearing-gloves-holding-computer-parts_23-2147922310.jpg",              imageAlt: "Reparación encendido",              buttonIcon: Power,
              buttonHref: "tel:+34615652022"},
            {
              title: "Conectividad Smart TV",              description: "Resolución de problemas de Wi-Fi y conectividad en Smart TV",              imageSrc: "http://img.b2bpic.net/free-photo/couple-with-tablet-sofa_23-2147744826.jpg",              imageAlt: "Smart TV conectividad",              buttonIcon: Wifi,
              buttonHref: "tel:+34615652022"},
            {
              title: "Diagnóstico Técnico",              description: "Diagnóstico profesional sin costo para evaluar el problema",              imageSrc: "http://img.b2bpic.net/free-photo/young-female-inventor-creating-her-workshop_23-2149067227.jpg",              imageAlt: "Diagnóstico técnico",              buttonIcon: CheckCircle,
              buttonHref: "tel:+34615652022"},
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          tagAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Por qué elegir Multiservicios Electrodomésticos Yireh Service para tu televisor LG"
          metrics={[
            { icon: Shield, label: "Garantía en Reparaciones", value: "12 meses" },
            { icon: Award, label: "Respuesta Rápida", value: "<24h" },
            { icon: Award, label: "Experiencia", value: "10+ años" },
            { icon: CheckCircle, label: "Técnicos Certificados", value: "100%" },
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="process" data-section="process">
        <FeatureCardTwentySix
          title="Nuestro Proceso de Reparación"
          description="Seguimos un proceso profesional para garantizar la mejor reparación de tu televisor LG"
          features={[
            {
              title: "Contacto y Consulta",              description: "Llama o escribe por WhatsApp para describir el problema de tu televisor",              imageSrc: "http://img.b2bpic.net/free-photo/customer-service-operator-talking-phone-office_1301-7543.jpg",              imageAlt: "Contacto inicial",              buttonIcon: Phone,
              buttonHref: "tel:+34615652022"},
            {
              title: "Diagnóstico Profesional",              description: "Evaluamos el problema con equipos profesionales y presupuesto sin compromiso",              imageSrc: "http://img.b2bpic.net/free-photo/people-create-new-project_1157-45634.jpg",              imageAlt: "Diagnóstico",              buttonIcon: Stethoscope,
              buttonHref: "tel:+34615652022"},
            {
              title: "Reparación Experta",              description: "Nuestros técnicos certificados reparan con piezas originales LG",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-jeweler-making-jewellery_23-2150931439.jpg",              imageAlt: "Reparación",              buttonIcon: Wrench,
              buttonHref: "tel:+34615652022"},
            {
              title: "Garantía y Pruebas",              description: "Probamos completamente y ofrecemos 12 meses de garantía en la reparación",              imageSrc: "http://img.b2bpic.net/free-photo/female-mechanic-preparing-check-list_1170-1440.jpg",              imageAlt: "Garantía",              buttonIcon: Award,
              buttonHref: "tel:+34615652022"},
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="Lo que Dicen Nuestros Clientes"
          description="Más de 200 clientes satisfechos en Madrid confían en nuestro servicio de reparación"
          testimonials={[
            {
              id: "1",              name: "Carlos Martín",              role: "Cliente Particular",              company: "Madrid",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-discussing-with-man_23-2149332960.jpg"},
            {
              id: "2",              name: "María García",              role: "Propietaria",              company: "Tienda Electrónica",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiley-older-woman-holding-smartphone-while-working_23-2148661189.jpg"},
            {
              id: "3",              name: "Juan López",              role: "Gerente",              company: "Hotel Boutique",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-man-showing-double-thumbs-up-shirt-vest-looking-happy_176474-28317.jpg"},
            {
              id: "4",              name: "Elena Rodríguez",              role: "Propietaria",              company: "Restaurante",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-smiling-kitchen_107420-12357.jpg"},
            {
              id: "5",              name: "Fernando Díaz",              role: "Cliente",              company: "Colonia Jardín",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-cute-supportive-girl-showing-thumbs-up-smiling-proud-praising-you-showing-well-done-excellent-gesture-standing-satisfied-white-wall_176420-34127.jpg"},
            {
              id: "6",              name: "Rosa Fernández",              role: "Cliente Frecuente",              company: "Madrid Centro",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-attractive-woman-showing-thumb-up-outdoors_1262-12526.jpg"},
          ]}
          kpiItems={[
            { value: "209+", label: "Clientes Satisfechos" },
            { value: "4.7★", label: "Calificación Promedio" },
            { value: "99%", label: "Tasa de Éxito" },
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Preguntas Frecuentes"
          sideDescription="Resuelve tus dudas sobre nuestros servicios de reparación de televisores LG"
          faqs={[
            {
              id: "1",              title: "¿Cuánto cuesta la reparación de un televisor LG?",              content: "El costo depende del problema específico. Ofrecemos diagnóstico gratuito y presupuesto sin compromiso. Generalmente las reparaciones oscilan entre €80 y €350 según la complejidad."},
            {
              id: "2",              title: "¿Cuál es el tiempo de reparación?",              content: "La mayoría de reparaciones se completan en 48-72 horas. Algunas reparaciones simples pueden realizarse el mismo día. Reparaciones complejas pueden tomar hasta 2 semanas."},
            {
              id: "3",              title: "¿Ofrecen garantía en las reparaciones?",              content: "Sí, ofrecemos garantía de 12 meses en todas nuestras reparaciones. Si el problema vuelve a ocurrir dentro de este período, lo solucionamos sin costo adicional."},
            {
              id: "4",              title: "¿Utilizan piezas originales LG?",              content: "Sí, utilizamos únicamente piezas originales LG verificadas para garantizar la calidad y durabilidad de nuestras reparaciones."},
            {
              id: "5",              title: "¿Atienden fuera de Madrid centro?",              content: "Sí, atendemos en toda la zona de Madrid incluyendo Colonia Jardín, Latina y alrededores. Consulta sobre disponibilidad en tu zona."},
            {
              id: "6",              title: "¿Hacen reparaciones a domicilio?",              content: "Sí, ofrecemos servicio a domicilio para reparaciones que no requieran traslado del televisor al taller. Consulta disponibilidad."},
          ]}
          useInvertedBackground={false}
          textPosition="left"
          faqsAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Contacto"
          tagIcon={Phone}
          title="¿Tu televisor LG necesita reparación? Contacta con nosotros hoy"
          description="Solicita tu diagnóstico gratuito ahora. Llámanos, escríbenos por WhatsApp o completa el formulario para una consulta sin compromiso."
          background={{ variant: "rotated-rays-animated-grid" }}
          useInvertedBackground={false}
          inputPlaceholder="Tu correo electrónico"
          buttonText="Contactar"
          termsText="Al contactarnos, aceptas nuestra política de privacidad. Nos pondremos en contacto en el menor tiempo posible."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Yireh Service"
          columns={[
            {
              items: [
                { label: "Inicio", href: "#hero" },
                { label: "Servicios", href: "#services" },
                { label: "Por Qué Nosotros", href: "#about" },
              ],
            },
            {
              items: [
                { label: "Proceso", href: "#process" },
                { label: "Reseñas", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
              ],
            },
            {
              items: [
                { label: "Llamar", href: "tel:+34615652022" },
                { label: "WhatsApp", href: "https://wa.me/34615652022" },
                { label: "Email", href: "mailto:info@yirehservice.es" },
              ],
            },
            {
              items: [
                { label: "Ubicación", href: "https://maps.google.com/?q=C.+de+Galicia,+44,+Madrid" },
                { label: "Horarios", href: "#" },
                { label: "Privacidad", href: "#" },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
