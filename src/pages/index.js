import React from "react";
import '../App.css';
import Header from "../navigation/header.js";
import Footer from "../navigation/footer.js";
import ItemCard from "../components/ItemCard.js";
import MetricBadge from "../components/MetricBadge.js";
import { getPortfolioItemsBySection } from "../data/portfolioData.js";
import AsimProfilePic from "../assets/Asim2.png";

export default function Home() {
  const experienceItems = getPortfolioItemsBySection('experience');
  const projectItems = getPortfolioItemsBySection('project');
  const extracurricularItems = getPortfolioItemsBySection('extracurricular');

  const contactUser = "asim.rahman321";
  const contactDomain = "gmail.com";
  const emailAddress = `${contactUser}@${contactDomain}`;

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const subject = form.elements.subject ? form.elements.subject.value : "";
    const body = form.elements.body ? form.elements.body.value : "";
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const skillsCategories = [
    {
      category: "Languages & Core Tools",
      skills: ["C/C++", "Python", "CUDA", "Linux", "Git", "GDB", "GProf & GCov", "Docker"]
    },
    {
      category: "Machine Learning & AI",
      skills: [
        "Deep Learning",
        "CNNs",
        "CV/Image Processing",
        "GANs",
        "RNNs",
        "Transformer Architectures",
        "LLMs",
        "RAG",
        "Self-supervised Learning",
        "Agentic AI",
        "MCP",
        "Agent Skills",
        "Model Evaluation"
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["PyTorch", "TensorFlow", "OpenGL", "Scikit-learn", "NumPy", "Pandas"]
    },
    {
      category: "Systems Programming",
      skills: [
        "Memory-Mapped I/O",
        "Bare-Metal Programming",
        "Multi-Threading",
        "Synchronization Primitives",
        "Shared Memory",
        "Device Drivers",
        "Cache-Aware Programming",
        "Virtual Memory"
      ]
    }
  ];

  const relevantCourses = [
    "Intro to Machine Learning",
    "Deep Learning",
    "Operating Systems",
    "Computer Systems Programming",
    "Computer Organization",
    "Software Communication & Design",
    "Algorithms & Data Structures",
    "Computer Security",
    "Computer Networks"
  ];

  return (
    <div className="bg-wave bg-bg text-txt min-h-screen">
      <Header />

      {/* Hero Section */}
      <section id="home" className="scroll-mt-24" />
      <div className="isolate pt-14">
        <div className="mx-auto max-w-4xl py-36 sm:py-48 lg:py-52">
          <div className="md:gap-12 md:flex items-center">
            {/* Profile Picture + Links */}
            <div className="fadedown lg:mx-0 md:mx-6 mx-10 flex flex-col items-center flex-shrink-0">
              <img
                src={AsimProfilePic}
                alt="Asim Rahman"
                className="object-scale-down h-80 w-80 sm:h-96 sm:w-96 rounded-t-[24px] shadow-2xl"
              />

              <div className="bg-gradient-to-b from-elevation to-elevation2 rounded-b-[24px] h-18 w-80 sm:w-96 shadow-lg">
                <div className="flex space-x-10 justify-center items-center py-5">
                  <a
                    href="https://www.github.com/Asim-108/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all ease-in-out duration-200 text-txt hover:text-bright hover:-translate-y-1"
                  >
                    <svg
                      className="w-9 h-9"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099C.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647c.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091a2.026 2.026 0 0 1-.872-.39a1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156a.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15c.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813c.282.186.566.28.852.28c.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234a5.314 5.314 0 0 1-1.223-.507a3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365c-.177-.564-.266-1.215-.266-1.952c0-1.049.342-1.942 1.027-2.68c-.32-.788-.29-1.673.091-2.652c.252-.079.625-.02 1.119.175c.494.195.856.362 1.086.5c.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143c.39.98.424 1.864.103 2.653c.685.737 1.028 1.63 1.028 2.68c0 .737-.089 1.39-.267 1.957c-.177.568-.407 1.023-.689 1.366a3.65 3.65 0 0 1-1.053.865c-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064c.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099c.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z"
                      />
                    </svg>
                    <span className="sr-only">Github page</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/asim-rahman/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all ease-in-out duration-200 text-txt hover:text-bright hover:-translate-y-1"
                  >
                    <svg
                      className="w-9 h-9"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm1.102 4.297a1.195 1.195 0 1 0 0-2.39a1.195 1.195 0 0 0 0 2.39Zm1 7.516V6.234h-2v6.579h2ZM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084c1.438 0 2.219.953 2.219 2.766c0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438c-1.079 0-1.17 1.198-1.195 1.982v2.986h-2V6.234Z"
                      />
                    </svg>
                    <span className="sr-only">Linkedin page</span>
                  </a>

                  <a
                    href={`mailto:${emailAddress}`}
                    onClick={handleEmailClick}
                    className="transition-all ease-in-out duration-200 text-txt hover:text-bright hover:-translate-y-1 mt-0.5"
                  >
                    <svg
                      className="w-9 h-9"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M3 7.511a3.247 3.247 0 0 0-1.5 2.739v6c0 2.9 2.35 5.25 5.25 5.25h9c1.15 0 2.161-.598 2.739-1.5H6.75A3.75 3.75 0 0 1 3 16.25V7.511Zm1 .599v7.64a3.25 3.25 0 0 0 3.066 3.245L7.25 19h11.5a3.25 3.25 0 0 0 3.245-3.066L22 15.75V8.11l-8.65 4.554a.75.75 0 0 1-.7 0L4 8.11ZM18.75 4H7.25a3.251 3.251 0 0 0-3.155 2.466L13 11.152l8.905-4.686a3.252 3.252 0 0 0-2.966-2.46L18.75 4Z"
                      />
                    </svg>
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="md:text-left text-center mx-10 md:py-0 py-16">
              <h1 className="md:text-8xl text-5xl font-bold text-primary fadein title tracking-wider">
                ASIM
              </h1>
              <h1 className="md:text-8xl text-5xl font-bold text-primary fadein title tracking-wider">
                RAHMAN
              </h1>
              <h2 className="mt-4 md:text-3xl text-2xl font-bold text-secondary fadein paragraph">
                Computer Engineer
              </h2>
              <p className="mt-1 md:text-2xl text-lg font-medium text-txt fadein paragraph">
                AI Systems & Low-Level Infrastructure
              </p>
              <p className="mt-6 text-lg sm:text-xl text-txt fadein paragraph leading-relaxed">
                Computer Engineering graduate from the University of Toronto combining expertise in AI systems, machine learning, and low-level systems programming to build scalable, high-performance software.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="scroll-mt-24" />
      <div className="relative isolate pt-4">
        <div className="mx-auto max-w-5xl py-24 sm:py-32 px-6">
          <div className="md:text-left text-center">
            <h2 className="text-4xl sm:text-6xl font-bold text-primary fadein title">
              ABOUT
            </h2>

            <p className="mt-8 text-lg sm:text-xl text-txt fadein paragraph leading-relaxed">
              I am a Computer Engineering graduate from the University of Toronto with a Minor in Artificial Intelligence. My passion and area of interest sits between
              machine learning, AI architecture, and systems-level engineering. Building high-throughput GPU inference pipelines, optimizing deep
              learning infrastructure, and engineering agentic workflows.
            </p>
            <p className="mt-4 text-lg sm:text-xl text-txt fadein paragraph leading-relaxed">
              In industry, I've redesigned production object detection pipelines to deliver 21x CPU inference speedups and deployed self-supervised autoencoder clustering pipelines. In systems engineering, I've architected zero-copy GPU video upscaling pipelines in CUDA/TensorRT and engineered middleware platforms for system-level agentic AI. I thrive in challenging environments that require deep technical rigor, performance optimization, and scalable engineering.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <section id="skills" className="scroll-mt-24" />
      <div className="relative isolate pt-4">
        <div className="mx-auto max-w-5xl py-24 sm:py-32 px-6">
          <div className="md:text-left text-center">
            <h2 className="text-4xl sm:text-6xl font-bold text-primary fadein title mb-12">
              TECHNICAL SKILLS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillsCategories.map((group, idx) => (
                <div
                  key={idx}
                  className="bg-[#141414] bg-gradient-to-b from-elevation2 to-elevation rounded-[20px] p-6 sm:p-8 ring-1 ring-white/10 shadow-lg hover:ring-primary/40 transition-all duration-200"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary paragraph mb-4">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <MetricBadge key={sIdx} label={skill} variant="tech" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <section id="education" className="scroll-mt-24" />
      <div className="relative isolate pt-4">
        <div className="mx-auto max-w-5xl py-24 sm:py-32 px-6">
          <div className="md:text-left text-center">
            <h2 className="text-4xl sm:text-6xl font-bold text-primary fadein title">
              EDUCATION
            </h2>

            <div className="mt-10 bg-[#141414] bg-gradient-to-b from-elevation2 to-elevation rounded-[24px] p-8 sm:p-10 ring-1 ring-white/10 shadow-xl transition-all ease-in-out duration-200 hover:ring-primary/40 hover:bg-elevation">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="font-bold text-2xl sm:text-3xl text-secondary paragraph">
                  University of Toronto
                </h3>
                <span className="text-base sm:text-lg text-txt paragraph font-medium whitespace-nowrap">
                  September 2021 - June 2026
                </span>
              </div>

              <p className="mt-3 text-xl sm:text-2xl text-bright paragraph font-semibold">
                Bachelors of Applied Science in Computer Engineering
              </p>

              <div className="mt-2.5">
                <span className="inline-flex items-center text-secondary bg-elevation2 px-3 py-1 rounded-full text-sm sm:text-base font-medium ring-1 ring-primary/40 paragraph">
                  Minor in Artificial Intelligence
                </span>
              </div>

              <div className="h-px my-6 bg-txt/30" />

              <h4 className="text-xl font-bold text-bright paragraph mb-4">
                Relevant Coursework:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {relevantCourses.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-txt paragraph text-base sm:text-lg"
                  >
                    <span className="text-primary mr-2 select-none">•</span>
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <section id="experience" className="scroll-mt-24" />
      <div className="relative isolate pt-4">
        <div className="mx-auto max-w-5xl py-24 sm:py-32 px-6">
          <div className="md:text-left text-center">
            <h2 className="text-4xl sm:text-6xl font-bold text-primary fadein title mb-4">
              EXPERIENCE
            </h2>
            {/* <p className="text-txt paragraph text-base sm:text-lg mb-10">
              Select an experience card to view full responsibilities, metrics, and engineering breakdowns.
            </p> */}

            <div className="grid grid-cols-1 gap-6">
              {experienceItems.map((item) => (
                <ItemCard
                  key={item.id}
                  cardName={item.cardName}
                  slug={item.slug}
                  isClickable={item.isClickable !== false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-24" />
      <div className="relative isolate pt-4">
        <div className="mx-auto max-w-5xl py-24 sm:py-32 px-6">
          <div className="md:text-left text-center">
            <h2 className="text-4xl sm:text-6xl font-bold text-primary fadein title mb-4">
              PROJECTS
            </h2>
            <p className="text-txt paragraph text-base sm:text-lg mb-10">
              Click any project to explore its architecture, highlights, and technical deep dive.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectItems.map((project) => (
                <ItemCard
                  key={project.id}
                  cardName={project.cardName}
                  slug={project.slug}
                  isClickable={project.isClickable !== false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Extra Curriculars Section */}
      <section id="extracurriculars" className="scroll-mt-24" />
      <div className="relative isolate pt-4">
        <div className="mx-auto max-w-5xl py-24 sm:py-32 px-6">
          <div className="md:text-left text-center">
            <h2 className="text-4xl sm:text-6xl font-bold text-primary fadein title mb-4">
              EXTRA CURRICULARS
            </h2>
            <p className="text-txt paragraph text-base sm:text-lg mb-10">
              Student leadership, engineering teams, and campus community engagement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {extracurricularItems.map((extra) => (
                <ItemCard
                  key={extra.id}
                  cardName={extra.cardName}
                  slug={extra.slug}
                  isClickable={extra.isClickable !== false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24" />
      <div className="relative isolate pt-4">
        <div className="mx-auto max-w-5xl py-24 sm:py-32 px-6">
          <div className="md:text-left text-center">
            <h2 className="text-4xl sm:text-6xl font-bold text-primary fadein title">
              CONTACT
            </h2>
            <p className="mt-4 text-lg text-txt paragraph">
              Feel free to reach out directly at{" "}
              <a
                href={`mailto:${emailAddress}`}
                onClick={handleEmailClick}
                className="text-primary hover:text-bright underline transition-colors"
              >
                {emailAddress}
              </a>{" "}
              or send a message below.
            </p>

            <div className="flex items-center justify-center p-6 sm:p-12 fadedown">
              <div className="mx-auto w-full max-w-[550px]">
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-5">
                    <label
                      htmlFor="subject"
                      className="mb-3 block font-bold text-secondary text-left"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Enter your subject"
                      className="transition-all ease-in-out duration-200 w-full rounded-md bg-elevation py-3 px-6 text-txt font-medium outline-none focus:shadow-md focus:bg-elevation2 ring-1 ring-white/10 focus:ring-primary/50"
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="body"
                      className="mb-3 block font-bold text-secondary text-left"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      name="body"
                      id="body"
                      placeholder="Type your message"
                      className="transition-all ease-in-out duration-200 w-full resize-none rounded-md bg-elevation py-3 px-6 text-txt font-medium outline-none focus:shadow-md focus:bg-elevation2 ring-1 ring-white/10 focus:ring-primary/50"
                    />
                  </div>

                  <div className="text-left">
                    <button
                      type="submit"
                      className="transition-all ease-in-out duration-200 text-sm font-semibold leading-6 text-txt hover:text-bright paragraph rounded-lg px-6 py-2.5 ring-1 ring-txt hover-ring-bright hover:bg-elevation"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
