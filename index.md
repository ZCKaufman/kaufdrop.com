---
layout: base.njk
#title: "Welcome to My Portfolio"
---

<div class="card">
    <div class="card-header">
        <img id="profile-pic" src="/images/profile1.jpg" alt="Profile Photo" class="profile-pic">
        <div class="card-header-content">
            <h2>Zachary Kaufman</h2>
            <p>Ph.D. student in Computer Science and Cognitive Neuroscience, researching robots and AI to support human health and well-being.</p>
        </div>
    </div>
    <!-- Links and Dynamic Content -->
    <div class="card-links">
        <a href="#" class="link-header" onclick="toggleSection('about')">About</a>
        <div class="section-content" id="about">
            <p>Hi! My name is Zachary Kaufman. Thanks for visiting my site.
            I am a first year Ph.D. student at the University of Colorado Boulder,
            triple majoring in Computer Science, Cognitive Science, and Neuroscience.
            I have a B.S. and M.S. from Indiana University (IU) in Intelligent Systems Engineering,
            in which I concentrated on Cyber-Physical Systems during my Bachelor's, and
            Neuroengineering during my Master's. Throughout my time at IU I was a research
            assistant in the R-House Human-Robot Interaction Lab where I studied how robots can be
            impactful in settings such as elementary schools, elderly care facilities, and at home. 
            My focus was on Socially Assistive Robots for people with Major Depressive Disorder.
            During my Master's I was also a research assistant in the Socioneural Physiology Lab where
            I studied human trust in AI systems and detecting that trust (or distrust) using physiological
            sensors. 
            <br></br>Now that I am at CU Boulder I am co-advised by Dr. Leanne Hirshfield in the System-Human
            Interaction with NIRS and EEG (SHINE) Lab, as well as Dr. Ellen Do in the ACME Creative Machine Environment
            (ACME) Lab. My current research is primarily focused on misinformation, and how it can affect people's
            decision making processes. We are doing this by using a wide range of physiological sensors, such as fNIRS,
            fMRI, EEG, and eye tracking. I am particularly interested in using machine/deep learning models to better understand
            our data and the links between misinformation susceptibility or resilience and mental or cognitive health.</p>
        </div>
        <a href="#" class="link-header" onclick="toggleSection('research')">Research</a>
        <div class="section-content" id="research">
        <!--RESEARCH GOALS-->
            <h3>Research Goals</h3>
            <p>My research sits at the intersection of <span class="highlight">Human-Computer/Robot Interaction</span> and <span class="highlight">Cognitive Neuroscience</span>, with a focus on developing <span class="highlight">robots</span> and <span class="highlight">AI</span> systems that support <span class="highlight">human well-being</span>. I am passionate about exploring how intelligent systems can improve <span class="highlight">mental health</span>, enhance <span class="highlight">human-computer interactions</span>, and contribute to a more <span class="highlight">empathetic</span>, <span class="highlight">connected</span>, and <span class="highlight">flourishing society</span>. By integrating technology with neuroscience, we can <span class="highlight">better understand</span> AI and cognition while ensuring these technologies are developed in ways that are <span class="highlight">fair</span>, <span class="highlight">inclusive</span>, and <span class="highlight">accessible to all</span>.</p>
        <!--CURRENT RESEARCH-->
            <h3>Current Research</h3>
            <h5>System-Human Interaction through NIRS and EEG (SHINE) Lab</h5>
                <p>In Spring 2025 I will be joining the Cognitive Security Multidisciplinary University Research Initiative project. We will be studying <span class="highlight">misinformation</span> and it's affects on <span class="highlight">decision making</span> processes in a variety of environments, including real world environments such as <span class="highlight">social media</span>, <span class="highlight">low information density</span> environments such as being an astronaut, or an Antarctic researcher, and <span class="highlight">high information density</span> environments such as being an airforce cadet in a command center. This project is in collaboration with the United States Airforce Academy and Texas A&M. It is sponsored by the Air Force Office of Scientific Research. 
            <h3>Previous Research</h3>
        <!--PREVIOUS RESEARCH-->
            <h5>Socioneural Physiology Lab (SPLab)</h5>
                <p>Towards the end of my undergraduate, and beginning my Master's I joined the TrustingAI Project. This large, multi-university project funded by the Department of Defense studied <span class="highlight">human trust</span> in <span class="highlight">Artificial Intelligence</span>. SPLab researched the detection of trust using <span class="highlight">physiological signals</span> such as micro-expressions and ECG signals. We did this through having participants play a computer game against another person which will force a player to <span class="highlight">deceive</span> the other player. By using <span class="highlight">computer vision</span>, <span class="highlight">ECG sensors</span>, and <span class="highlight">machine learning models</span> we were working towards <span class="highlight">detecting changes in trust</span> between players at this point of deception, and eventually <span class="highlight">applying that to interactions between humans and AI.</span></p>
            <h5>R-House Human-Robot Interaction Lab</h5>
                <p>Haru Project: Haru, a prototype desktop social robot being developed by Honda Research Institute of Japan, is designed to be an <span class="highlight">"Encouraging Mediator"</span> between groups of people who are disconnected by age, culture, language, or physical distance. The primary focus of R-House is on developing Haru for use with <span class="highlight">children</span>, focusing on <span class="highlight">engagement</span> and <span class="highlight">privacy</span>. One of the main studies I was a part of is creating <span class="highlight">perception models</span> for Haru that can help Haru dynamically adapt to children's changing levels of <span class="highlight">engagement</span> based on data from <span class="highlight">non-invasive sensors</span> such as RGB and thermal cameras. The other study I participated in was using UNICEF's guidelines for <span class="highlight">AI and children</span> which discussed nine requirements for child-centered AI that protects the child's rights during <span class="highlight">child-AI interactions</span>. We ran user based studies with <span class="highlight">children and their parents</span> to test how these <span class="highlight">guidelines</span<span class="highlight">digital privacy</span>, and <span class="highlight">Haru</span> can work effectively and safely in <span class="highlight">everyday scenarios</span>. </p>
                <p><br>Therabot™ Project: This project studied how we could design a <span class="highlight">Socially Assistive Robot (SAR)</span> for helping patients with <span class="highlight">Major Depressive Disorder</span> (MDD) <span class="highlight">manage</span> and <span class="highlight">monitor symptoms</span> using Mississippi State University's prototype SAR named Therabot™. Most of the studies I was involved in with this project had participants with MDD do a <span class="highlight">participatory design workshop</span> in which they would design an aspect of Therabot™, such as it's <span class="highlight">physical appearance</span>, it's <span class="highlight">programming</span>, or what <span class="highlight">sensors</span> it would use. This helped Mississippi State Univerisity make <span class="highlight">design decisions</span> as they <span class="highlight">further developed</span> Therabot™, but also helped inform <span class="highlight">future SAR researchers</span> about what aspects of any SAR would be helpful in the <span class="highlight">treatment</span>, <span class="highlight">monitoring</span>, and <span class="highlight">management</span> of MDD.</p>
        </div>
        <a href="#" class="link-header" onclick="toggleSection('socials')">Contact</a>
        <div class="section-content" id="socials">
            <h3>Contact Me</h3>
            <p>Feel free to connect with me through the following platforms:</p>
            <ul class="contact-list">
                <!-- Email -->
                <li>
                <a href="mailto:zkaufman@protonmail.com" class="contact-item">
                    <i class="fa-solid fa-envelope"></i>
                </a>
                <span>zkaufman@protonmail.com</span>
                </li>
                <!-- GitHub -->
                <li>
                <a href="https://github.com/ZCKaufman" target="_blank" class="contact-item">
                    <i class="fab fa-github"></i>
                </a>
                <span>GitHub @ZCKaufman</span>
                </li>
                <!-- LinkedIn -->
                <li>
                <a href="https://linkedin.com/in/zckaufman" target="_blank" class="contact-item">
                    <i class="fab fa-linkedin"></i>
                </a>
                <span>LinkedIn @ZCKaufman</span>
                </li>
                <!-- Google Scholar -->
                <li>
                <a href="https://scholar.google.com/citations?user=6U8Kpn8AAAAJ&hl=en&authuser=4" target="_blank" class="contact-item">
                    <i class="fa-brands fa-google-scholar"></i>
                </a>
                <span>Google Scholar</span>
                </li>
            </ul>
        </div>
    </div>
</div>
