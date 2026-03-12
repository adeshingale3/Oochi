import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';

/**
 * FAQ Component
 * Great for SEO, GEO, and especially AEO (Answer Engine Optimization)
 * AI models use FAQ schema to understand and cite your content
 * 
 * Usage:
 * <FAQ faqs={faqData} />
 */

const defaultFAQs = [
  {
    id: 1,
    question: "What services does Oochi provide?",
    answer: "Oochi is a strategic partner for tech companies that provides presentation design, brand strategy, and creative services. We help you create compelling presentations for fundraising, product launches, explaining complex ideas, and recruitment efforts."
  },
  {
    id: 2,
    question: "Who is Oochi ideal for?",
    answer: "Oochi works with fast-growing tech businesses including startups, scale-ups, and established companies. We specialize in SaaS, Fintech, Deeptech, and enterprise software companies that need to communicate effectively with investors, customers, or employees."
  },
  {
    id: 3,
    question: "What's your typical project timeline?",
    answer: "Project timelines vary based on complexity and scope. Most pitch deck projects take 3-6 weeks from discovery to final delivery. Complex strategy projects might take 8-12 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    id: 4,
    question: "How much does it cost to work with Oochi?",
    answer: "Pricing depends on project scope, complexity, and deliverables. We offer customized packages ranging from $5K to $50K+. Contact us for a free consultation and detailed quote based on your specific needs."
  },
  {
    id: 5,
    question: "Do you work with startups and early-stage companies?",
    answer: "Yes! We specialize in working with startups and early-stage companies. We understand the unique challenges of fundraising and growth, and we've helped hundreds of startups raise capital with compelling presentations."
  },
  {
    id: 6,
    question: "Can you help with investor relations and pitch decks?",
    answer: "Absolutely. Pitch deck design is one of our core services. We've helped companies raise millions in funding. We focus on storytelling, design, and data visualization to create presentations that resonate with investors."
  },
  {
    id: 7,
    question: "What's your design process?",
    answer: "Our process includes: 1) Discovery & Strategy - understanding your goals and audience, 2) Concept - developing key messages and visual direction, 3) Design - creating compelling visuals and layouts, 4) Feedback & Iteration - refining based on your input, 5) Delivery - final files and guidelines."
  },
  {
    id: 8,
    question: "Do you handle revisions?",
    answer: "Yes! Each project includes revision rounds. We work collaboratively with you to ensure the final output exceeds your expectations. The number of revision rounds depends on your package, which we'll discuss upfront."
  },
  {
    id: 9,
    question: "Can you work with distributed or remote teams?",
    answer: "Definitely! We work with clients worldwide. We use video calls, shared documents, and cloud-based tools to collaborate seamlessly. Time zone differences are no problem - we're experienced working across different regions."
  },
  {
    id: 10,
    question: "What deliverables do I get?",
    answer: "Deliverables vary by project but typically include: Final presentation files (PowerPoint, Keynote, PDF), design guidelines, brand standards, high-resolution images, speaker notes, and sometimes custom animations or video integration."
  }
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <motion.div
      className='border-b border-zinc-300 py-6'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <button
        className='w-full flex items-start justify-between gap-4 text-left hover:opacity-70 transition-opacity'
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h3 className='text-lg md:text-xl font-semibold flex-1 text-zinc-900'>
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className='flex-shrink-0 mt-1'
        >
          <RiAddLine className='w-6 h-6 text-zinc-600' />
        </motion.div>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className='overflow-hidden'
      >
        <p className='text-base md:text-lg text-zinc-700 mt-4 leading-relaxed'>
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

function FAQ({ faqs = defaultFAQs, title = "Frequently Asked Questions" }) {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div 
      data-scroll 
      data-scroll-section 
      className='w-full bg-white py-16 md:py-24 px-4 md:px-20 font-montserrat'
    >
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6'>
            {title}
          </h2>
          <p className='text-lg md:text-xl text-zinc-600'>
            Find answers to common questions about our services and process
          </p>
        </div>

        {/* FAQ Items */}
        <div className='space-y-0'>
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => toggleFAQ(faq.id)}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className='mt-12 md:mt-16 pt-8 md:pt-12 border-t border-zinc-300 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className='text-2xl md:text-3xl font-bold mb-4'>
            Didn't find your answer?
          </h3>
          <p className='text-lg text-zinc-600 mb-6'>
            Get in touch with our team for personalized support
          </p>
          <button className='px-8 py-3 md:px-10 md:py-4 bg-zinc-900 text-white text-lg font-semibold rounded-full hover:bg-zinc-800 transition-colors'>
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default FAQ;

/**
 * CUSTOM FAQ DATA EXAMPLE:
 * 
 * const customFAQs = [
 *   {
 *     id: 1,
 *     question: "Your custom question?",
 *     answer: "Your detailed answer here..."
 *   },
 *   // More items...
 * ];
 * 
 * <FAQ faqs={customFAQs} title="Your Custom Title" />
 */
