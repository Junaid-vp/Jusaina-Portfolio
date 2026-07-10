import { HeroSection } from "@/components/home/hero-section";
import { ValuesSection } from "@/components/home/values-section";
import { AboutHero } from "@/components/about/about-hero";
import { ProfessionalStory } from "@/components/about/professional-story";
import { PhilosophySection } from "@/components/about/philosophy-section";
import { LanguageSection } from "@/components/about/language-section";
import { ExpertiseGrid } from "@/components/expertise/expertise-grid";
import { TherapyProcess } from "@/components/expertise/therapy-process";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { InternshipSection } from "@/components/experience/internship-section";
import { EducationSection } from "@/components/qualifications/education-section";
import { CertificationSection } from "@/components/qualifications/certification-section";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInformation } from "@/components/contact/contact-information";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";

export default function HomePage() {
  return (
    <>
      <section id="home">
        <HeroSection />
        <ValuesSection />
      </section>

      <section id="about" className="pt-20">
        <AboutHero />
        <ProfessionalStory />
        <LanguageSection />
        <PhilosophySection />
      </section>

      <section id="expertise" className="pt-20">
        <div className="pb-8 md:pb-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeading
                label="What I Do ♡"
                heading="Areas of Expertise"
                description="Providing comprehensive assessment and personalized support to help individuals communicate, connect, and thrive."
              />
            </AnimatedSection>
          </div>
        </div>
        <ExpertiseGrid />
        <TherapyProcess />
      </section>

      <section id="experience" className="pt-20">
        <div className="pb-8 md:pb-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeading
                label="My Experience ♡"
                heading="Professional Journey"
                description="Clinical experience across rehabilitation centres, special-needs settings, and multidisciplinary environments."
              />
            </AnimatedSection>
          </div>
        </div>
        <ExperienceTimeline />
        <InternshipSection />
      </section>

      <section id="qualifications" className="pt-20">
        <div className="pb-8 md:pb-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeading
                label="Qualifications ♡"
                heading="Education & Credentials"
                description="Academic background and professional certifications in speech-language pathology."
              />
            </AnimatedSection>
          </div>
        </div>

        <div className="pb-16 md:pb-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              <EducationSection />
              <CertificationSection />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="pt-20 pb-20">
        <div className="pb-8 md:pb-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeading
                label="Let's Talk ♡"
                heading="Let's Connect"
                description="Whether you are a parent, educator, healthcare professional, or recruiter, I would be happy to connect and explore how we can work together to support better communication."
              />
            </AnimatedSection>
          </div>
        </div>

        <div className="pb-16 md:pb-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-10 md:gap-12">
              <div className="md:col-span-2">
                <AnimatedSection>
                  <ContactInformation />
                </AnimatedSection>
              </div>
              <div className="md:col-span-3">
                <AnimatedSection delay={0.1}>
                  <ContactForm />
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
