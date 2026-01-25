import { Layout } from "@/components/layout";
import {
  HeroSection,
  FeaturesSection,
  CoursesSection,
  TestimonialsSection,
  CTASection,
} from "@/components/home";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { FAQSection } from "@/components/home/FAQSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
