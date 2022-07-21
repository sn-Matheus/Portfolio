import {
	DiHtml5,
	DiCss3,
	DiJsBadge,
	DiMysql,
	DiReact,
	DiPython,
	DiPhp,
  } from "react-icons/di";
  
  import "../styles/components/technologiescontainer.sass";
  
  const technologies = [
	{ id: "html", name: "HTML5", icon: <DiHtml5 /> },
	{ id: "css", name: "CSS3", icon: <DiCss3 /> },
	{ id: "js", name: "JavaScript", icon: <DiJsBadge /> },
	{ id: "php", name: "PHP", icon: <DiPhp /> },
	{ id: "mysql", name: "MySQL", icon: <DiMysql /> },
	{ id: "react", name: "React", icon: <DiReact /> },
  ];
  
  const TechnologiesContainer = () => {
	return (
	  <section className="technologies-container">
		<h2>Tecnologias</h2>
		<div className="technologies-grid">
		  {technologies.map((tech) => (
			<div className="technology-card" id={tech.id} key={tech.id}>
			  {tech.icon}
			  <div className="technology-info">
				<h3>{tech.name}</h3>
				<p>Conhecimentos e conceitos estruturais básicos.</p>
			  </div>
			</div>
		  ))};
		</div>
	  </section>
	);
  };
  
  export default TechnologiesContainer;
  