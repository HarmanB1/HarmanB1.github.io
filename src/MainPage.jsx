import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { GitHubCalendar } from 'react-github-calendar';

export const MainPage = ({ darkMode }) => {
  useEffect(() => {
    document.title = "HB | Overview";
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="space-y-24 pb-20"
    >
      <motion.section variants={sectionVariants} className="space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Harman Bhogal
        </h1>
        <h2 className="text-xl sm:text-2xl text-zinc-500 font-medium">
          Computing Science Student @ SFU
        </h2>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
          I'm a 3rd year computer science student at Simon Fraser university. I'm passionate about create and developing new projects that develop my skills and solve real world problems. Experienced in tutoring and customer service, with strong organizational abilities.
        </p>

        <div className="flex gap-4">
          <SocialLink href="https://github.com/HarmanB1" icon={<FaGithub />} label="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/harman-bhogal-b2b532350" icon={<FaLinkedin />} label="LinkedIn" />
          <SocialLink href="mailto:hba58@sfu.ca" icon={<FaEnvelope />} label="Email" />
        </div>
      </motion.section>

      <motion.section variants={sectionVariants}>
        <SectionTitle>Technical Arsenal</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCard title="Languages & Frameworks">
            <div className="flex flex-wrap gap-2">
              <Badge>C</Badge> <Badge>C++</Badge> <Badge>Python</Badge> <Badge>HTML</Badge> <Badge>CSS</Badge> <Badge>JavaScript</Badge> <Badge>SQL</Badge> <Badge>React</Badge> <Badge>CMake</Badge> <Badge>Express.js</Badge> <Badge>Tailwind</Badge> <Badge>Bash</Badge>
            </div>
          </SkillCard>
          <SkillCard title="Tools & Technologies">
            <div className="flex flex-wrap gap-2">
              <Badge>Git</Badge> <Badge>npm</Badge> <Badge>Markdown</Badge> <Badge>CLI Commands</Badge> <Badge>REST APIs</Badge> <Badge>JSON</Badge> <Badge>Microsoft Word</Badge> <Badge>Excel</Badge> <Badge>Agile Frameworks</Badge>
            </div>
          </SkillCard>
        </div>
      </motion.section>

      <motion.section variants={sectionVariants}>
        <SectionTitle>Activity</SectionTitle>
        <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-900/50">
          <GitHubCalendar
            username="HarmanB1"
            year={2025}
            colorScheme={darkMode ? "dark" : "light"}
            fontSize={12}
            blockSize={12}
          />
        </div>
      </motion.section>

      <motion.section variants={sectionVariants}>
        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-8 border-l-2 border-zinc-200 dark:border-zinc-800 pl-8 ml-2">
          <TimelineItem
            role="Tutor"
            company="Math4Me"
            date="Sep 2024 - Present"
            descList={[
              "Simplified complex coding and math problems into small steps for students.",
              "Utilized strong communication skills to explain difficult topics and ensure student understanding.",
              "Maintained detailed records of student progress to tailor lessons effectively."
            ]}
          />
          <TimelineItem
            role="Sales Associate"
            company="Mark's"
            date="Aug 2023 - Jul 2024"
            descList={[
              "Resolved customer concerns by actively listening to needs and analyzing issues to recommend appropriate solutions.",
              "Managed inventory and organized store displays, contributing to efficient operations.",
              "Collaborated closely with fellow sales team members to organize daily tasks, ensuring smooth store operations"
            ]}
          />
        </div>
      </motion.section>

      <motion.section variants={sectionVariants}>
        <div className="bg-zinc-100 dark:bg-zinc-900 p-8 rounded-2xl text-center space-y-4">
          <h3 className="text-2xl font-bold">Let's Connect</h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Currently open for internships and collaborative projects.
          </p>
          <p>hba58@sfu.ca</p>
          <p>bhogalharman7@gmail.com</p>
        </div>
      </motion.section>
    </motion.div>
  );
};

const SectionTitle = ({ children }) => (
  <h3 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-zinc-100">{children}</h3>
);

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
  >
    {icon} <span className="text-sm font-medium">{label}</span>
  </a>
);

const SkillCard = ({ title, children }) => (
  <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900/50">
    <h4 className="font-semibold mb-4 text-zinc-900 dark:text-white">{title}</h4>
    {children}
  </div>
);

const Badge = ({ children }) => (
  <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm rounded-md border border-zinc-200 dark:border-zinc-700">
    {children}
  </span>
);

const TimelineItem = ({ role, company, date, descList }) => (
  <div className="relative">
    <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-zinc-950 bg-zinc-300 dark:bg-zinc-700" />
    <h4 className="text-lg font-bold text-zinc-900 dark:text-white">{role}</h4>
    <div className="flex justify-between items-center mb-2 text-sm text-zinc-500">
      <span>{company}</span>
      <span>{date}</span>
    </div>
    <ul className="list-disc space-y-1 pl-5 text-zinc-600 dark:text-zinc-400 max-w-lg">
      {descList.map((desc, index) => (
        <li key={index}>{desc}</li>
      ))}
    </ul>
  </div>
);;
