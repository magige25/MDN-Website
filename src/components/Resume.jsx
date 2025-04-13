import React from 'react';

const Resume = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Magige David Magacha</h1>
        <p className="text-center mb-4">
          Nairobi, Kenya |{' '}
          <a
            href="tel:+254746771924"
            className="text-[#601eef] hover:text-[#3a12c3] hover:underline"
          >
            +254 746 771 924
          </a>{' '}
          |{' '}
          <a
            href="mailto:davidmagige1998@gmail.com"
            className="text-[#601eef] hover:text-[#3a12c3] hover:underline"
          >
            davidmagige1998@gmail.com
          </a>
        </p>

        {/* Academic Qualifications */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Academic Qualifications</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">2018 – 2023</h3>
              <p className="font-semibold">Bachelor of Science in Statistics and Information Technology</p>
              <p>The Cooperative University of Kenya</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Graduated with a strong academic foundation in statistical modeling, data analysis, and IT systems.</li>
                <li>Completed a capstone project integrating Python and SQL for real-time data analysis in a simulated business environment.</li>
                <li>Participated in workshops on machine learning, data visualization, and web development.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">2014 – 2017</h3>
              <p className="font-semibold">Kenya Certificate of Secondary Education (KCSE)</p>
              <p>Komotobo Mixed Secondary School</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Achieved a strong academic record with a focus on mathematics and sciences.</li>
                <li>Served as a class representative, honing leadership and organizational skills.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">2006 – 2013</h3>
              <p className="font-semibold">Kenya Certificate of Primary Education (KCPE)</p>
              <p>Nyamanche Primary School</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Excelled in foundational subjects, demonstrating early aptitude in problem-solving and analytical thinking.</li>
                <li>Recognized for discipline and teamwork in extracurricular activities.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Summary</h2>
          <p>
            Highly motivated and analytically-driven professional with a Bachelor of Science in Statistics and Information Technology from The Cooperative University of Kenya. Proficient in leveraging advanced programming languages (Python, R, JavaScript, SQL) and statistical tools to deliver data-driven insights and solutions. Experienced in network administration, data visualization, machine learning applications, and web development. Adept at collaborating in team settings and working independently to achieve organizational goals, with a passion for continuous learning in both technology and data science.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">January 2025 – Present</h3>
              <p className="font-semibold">Front-End Developer</p>
              <p>Tiger Soft Systems</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Working on the Dairy Production and Supply Management System, primarily focusing on the front-end development using React, JavaScript, CSS, and HTML.</li>
                <li>Acquired skills in integrating with endpoints and handling state management using React and other modern libraries.</li>
                <li>Collaborated with the back-end team to ensure seamless interaction between the front-end and API endpoints.</li>
                <li>Gaining hands-on experience with application architecture, user interface design, and responsive design principles.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">8th May 2023 – 11th August 2023</h3>
              <p className="font-semibold">IT and Network Administration Intern</p>
              <p>Stake Kenya SACCO</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Contributed to the installation, configuration, and maintenance of network infrastructure, including firewall setup and management.</li>
                <li>Fitted Ethernet cables and established reliable network connections, improving system uptime and connectivity across departments.</li>
                <li>Conducted troubleshooting and diagnostics on network issues, reducing downtime by 20% through proactive problem resolution.</li>
                <li>Assisted in documenting network configurations and procedures, enhancing the SACCO’s IT operational manual for future reference.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">2022</h3>
              <p className="font-semibold">Capstone Project</p>
              <p>The Cooperative University of Kenya</p>
              <p>Project Title: Beekeeping Management System Using Python</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Designed and developed a Python-based application to monitor and manage beekeeping activities, integrating data collection, analysis, and visualization features.</li>
                <li>Utilized libraries such as Pandas and Matplotlib to process data and generate actionable insights for beekeepers.</li>
                <li>Presented the project to faculty and peers, earning commendation for its practical utility and technical execution.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Skills and Competencies */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Key Skills and Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Programming and Development</h3>
              <ul className="list-disc pl-5">
                <li>JavaScript (React, Next.js)</li>
                <li>HTML/CSS (Tailwind CSS)</li>
                <li>Python (Pandas, NumPy, Matplotlib)</li>
                <li>MySQL</li>
                <li>Web Development (React, Express.js)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Data Science & Analytics</h3>
              <ul className="list-disc pl-5">
                <li>Data Analysis (Python, R)</li>
                <li>Machine Learning (Scikit-learn, TensorFlow, Keras)</li>
                <li>Data Visualization (Matplotlib, Seaborn, Power BI)</li>
                <li>Excel Proficiency</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Core Values</h2>
          <ul className="list-disc pl-5">
            <li>Self-Motivated</li>
            <li>Work Ethic</li>
            <li>Interpersonal Skills</li>
            <li>Adaptability</li>
          </ul>
        </section>

        {/* Referees */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Referees</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold">Nyamohanga Stephen</h3>
              <p>Position: IT Supervisor, Stake Kenya SACCO</p>
              <p>Phone: <a href="tel:+254719479183" className="text-[#601eef] hover:text-[#3a12c3] hover:underline">0719 479 183</a></p>
              <p>Relationship: Internship Supervisor</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Jonah Marwa</h3>
              <p>Position: Lecturer, The Cooperative University of Kenya</p>
              <p>Phone: <a href="tel:+254796290219" className="text-[#601eef] hover:text-[#3a12c3] hover:underline">0796 290 219</a></p>
              <p>Relationship: Academic Advisor</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Wes Kibagendi</h3>
              <p>Position: Manager, Tigersoft Systems</p>
              <p>Phone: <a href="tel:+254718360158" className="text-[#601eef] hover:text-[#3a12c3] hover:underline">0718 360 158</a></p>
              <p>Relationship: Project Manager</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;