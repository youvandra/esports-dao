"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Terms() {
  return (
    <div className="relative mx-auto max-w-[1440px]">
      <h1 className="font-bold text-5xl md:text-6xl">Privacy Policy </h1>
      <Image
        src={"/t.png"}
        width={632}
        height={385}
        className="absolute top-0 right-0 max-[1535px]:hidden"
        alt=""
      />
      <motion.ul
        layout
        initial={"hidden"}
        whileInView={"show"}
        variants={container}
        className="pl-8 border-l border-dashed mt-12  text-xl font-light list-disc max-w-xl"
      >
        <motion.li variants={child}>
        Welcome to Esportsdao Cryptocurrency & NFT Project.
        This Privacy Policy outlines how we collect, use, disclose, and protect your personal 
        information in connection with our website, services, and products related to the Esportsdao 
        Cryptocurrency & NFT Project. By accessing or using our website or services, you consent to the 
        practices described in this Privacy Policy. Please read this document carefully to understand our 
        practices regarding your personal information.</motion.li>
      </motion.ul>
      <motion.ul
        layout
        initial={"hidden"}
        whileInView={"show"}
        variants={container}
        className="pl-8 border-l border-dashed mt-8 text-xl font-light list-disc max-w-xl sm:ml-32 lg:ml-72 xl:ml-[500px]"
      >
        <motion.li variants={child}>
        <b>1. Information We Collect</b>
        </motion.li>
        <motion.li variants={child}>
        <b>1.1. Personal Information: </b> 
        We may collect personal information that you provide to us voluntarily, such as your name, email address, and other contact details when you sign up for our services, subscribe to our newsletter, or participate in community forums.
        </motion.li>
        <motion.li variants={child}>
        <b>1.2. Usage Information:</b> We may automatically collect certain information about your usage of our website and services, including IP address, browser type, operating system, device information, access times, and pages visited. This information is used to improve our services and analyze user behavior.
        </motion.li>
        <motion.li variants={child}>
        <b>1.3. Financial Information:</b> For transactions involving our cryptocurrency or NFTs, we may collect financial information, such as wallet addresses and transaction history. Please note that we do not store sensitive financial information; transactions are conducted through secure third-party providers.
        </motion.li>
        <motion.li variants={child}>
        1.4. Cookies and Similar Technologies: We use cookies and similar technologies to track user interactions with our website and enhance your experience. These technologies allow us to remember your preferences, customize content, and analyze usage patterns. You can manage your cookie preferences through your browser settings.
        </motion.li>
        <motion.li variants={child}>
        2. How We Use Your Information
        </motion.li>
        <motion.li variants={child}>
        2.1. Provide Services: We use your personal information to provide, maintain, and improve our services, including facilitating transactions and ensuring the security of your account.
        </motion.li>
        <motion.li variants={child}>
        2.2. Communication: We may use your contact information to send you updates, newsletters, marketing communications, and respond to your inquiries.
        </motion.li>
        <motion.li variants={child}>
        2.3. Analyze and Improve: We use usage information and analytics to analyze trends, monitor user activity, and enhance the functionality and performance of our website and services.
        </motion.li>
        <motion.li variants={child}>
        2.4. Legal Compliance: We may use your information to comply with applicable laws, regulations, or legal processes, and respond to lawful requests from governmental authorities.
        </motion.li>
        <motion.li variants={child}>
        3. Information Sharing
        </motion.li>
        <motion.li variants={child}>
        3.1. Third-Party Service Providers: We may share your information with trusted third-party service providers who assist us in delivering our services, such as hosting providers, analytics providers, and payment processors. These providers are bound by confidentiality obligations and are not authorized to use your information for any other purpose.
        </motion.li>
        <motion.li variants={child}>
        3.2. Business Transfers: In the event of a merger, acquisition, or other corporate restructuring, we may transfer your information to the relevant third parties involved, subject to the same privacy obligations.
        </motion.li>
        <motion.li variants={child}>
        3.3. Legal Requirements: We may disclose your information if required to do so by law or in good faith belief that such action is necessary to comply with legal obligations, protect our rights, privacy, safety, or property, or investigate potential violations.
        </motion.li>
        <motion.li variants={child}>
        4. Data Security
        </motion.li>
        <motion.li variants={child}>
        We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, misuse, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.
        </motion.li>
        <motion.li variants={child}>
        5. Your Choices
        </motion.li>
        <motion.li variants={child}>
        You have the right to access, correct, update, or delete the personal information we hold about you. If you wish to exercise these rights, please contact us at esportsdao.ofc@gmail.com
        </motion.li>
        <motion.li variants={child}>
        6. Changes to this Privacy Policy
        </motion.li>
        <motion.li variants={child}>
        We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated policy will be posted on our website with the effective date, and your continued use of our services after such changes will constitute your consent to the updated policy.
        </motion.li>
        <motion.li variants={child}>
        7. Contact Us
        </motion.li>
        <motion.li variants={child}>
        If you have any questions, concerns, or inquiries regarding this Privacy Policy or our data practices, please contact us at esportsdao.ofc@gmail.com
        </motion.li>
        </motion.ul>
    </div>
  );
}

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const child = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
