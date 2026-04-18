import {
  awards,
  education,
  experiences,
  metrics,
  profile,
  signatureWork,
  skillGroups,
} from "./data.js";

const experienceTimeline = document.querySelector("#experience-timeline");
const signatureWorkGrid = document.querySelector("#signature-work-grid");
const skillsGroups = document.querySelector("#skills-groups");
const impactMetrics = document.querySelector("#impact-metrics");
const educationCard = document.querySelector("#education-card");
const awardsCard = document.querySelector("#awards-card");
const heroSocials = document.querySelector("#hero-socials");

function createExperienceCard(item) {
  const article = document.createElement("article");
  article.className = "timeline-card reveal";
  article.innerHTML = `
    <div class="timeline-card__header">
      <div>
        <span class="timeline-card__company">${item.company} | ${item.location}</span>
        <h3 class="timeline-card__role">${item.role}</h3>
      </div>
      <span class="timeline-card__duration">${item.duration}</span>
    </div>
    <p>${item.description}</p>
    <ul>
      ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
    </ul>
  `;
  return article;
}

function createWorkCard(item) {
  const article = document.createElement("article");
  article.className = "work-card tilt-card reveal";
  article.setAttribute("data-tilt-card", "");
  article.innerHTML = `
    <span class="work-card__tag">${item.tag}</span>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    <ul>
      ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
    </ul>
  `;
  return article;
}

function createSkillGroup(group) {
  const article = document.createElement("article");
  article.className = "skills-group reveal";
  article.innerHTML = `
    <h3>${group.title}</h3>
    <p>${group.description}</p>
    <div class="chip-list">
      ${group.items.map((item) => `<span class="chip">${item}</span>`).join("")}
    </div>
  `;
  return article;
}

function createMetricCard(metric) {
  const article = document.createElement("article");
  article.className = "metric-card reveal";
  article.innerHTML = `
    <p class="metric-card__value">${metric.value}</p>
    <p>${metric.label}</p>
  `;
  return article;
}

function populateStaticContent() {
  document.title = `${profile.name} | 3D ML Profile`;

  const socialEntries = Object.entries(profile.links).filter(([, url]) => url);
  if (heroSocials && socialEntries.length) {
    heroSocials.innerHTML = socialEntries
      .map(
        ([label, url]) =>
          `<a class="chip chip--link" href="${url}" target="_blank" rel="noreferrer">${label}</a>`
      )
      .join("");
  }

  experiences.forEach((item) => experienceTimeline.append(createExperienceCard(item)));
  signatureWork.forEach((item) => signatureWorkGrid.append(createWorkCard(item)));
  skillGroups.forEach((group) => skillsGroups.append(createSkillGroup(group)));
  metrics.forEach((metric) => impactMetrics.append(createMetricCard(metric)));

  educationCard.innerHTML += `
    <div class="education-row">
      <strong>${education.school}</strong>
      <span>${education.duration}</span>
    </div>
    <p>${education.degree}</p>
    <p>${education.score}</p>
  `;

  awardsCard.innerHTML += `
    <div class="award-row">
      <strong>${awards.title}</strong>
      <span>${awards.duration}</span>
    </div>
    <p>${awards.description}</p>
  `;
}

function setupRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupTiltCards() {
  const cards = document.querySelectorAll("[data-tilt-card]");

  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      if (window.innerWidth < 800) return;
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 10;
      const rotateX = (0.5 - py) * 10;
      card.style.transform = `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function setupBackgroundNetwork() {
  const canvas = document.querySelector("#network-canvas");
  if (!canvas) return;

  const context = canvas.getContext("2d");
  const particles = [];
  let animationFrameId = 0;

  function resizeCanvas() {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function createParticles() {
    particles.length = 0;
    const count = Math.min(70, Math.floor(window.innerWidth / 22));

    for (let index = 0; index < count; index += 1) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.8 + 0.5,
      });
    }
  }

  function drawNetwork() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x <= 0 || particle.x >= window.innerWidth) particle.vx *= -1;
      if (particle.y <= 0 || particle.y >= window.innerHeight) particle.vy *= -1;

      context.beginPath();
      context.fillStyle = "rgba(124, 246, 216, 0.45)";
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fill();
    });

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.hypot(dx, dy);

        if (distance < 120) {
          context.beginPath();
          context.strokeStyle = `rgba(108, 169, 255, ${0.18 - distance / 900})`;
          context.moveTo(particles[i].x, particles[i].y);
          context.lineTo(particles[j].x, particles[j].y);
          context.stroke();
        }
      }
    }

    animationFrameId = window.requestAnimationFrame(drawNetwork);
  }

  resizeCanvas();
  createParticles();
  drawNetwork();

  window.addEventListener("resize", () => {
    window.cancelAnimationFrame(animationFrameId);
    resizeCanvas();
    createParticles();
    drawNetwork();
  });
}

populateStaticContent();
setupRevealObserver();
setupTiltCards();
setupBackgroundNetwork();
