import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import sequelize from "../assets/sequelize.png";
import react from "../assets/react.png";
import postgresql from "../assets/postgresql.png";
import node from "../assets/node.png";
import mongoDb from "../assets/mongoDb.png";
import boostrap from "../assets/boostrap.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
    {
      id: 4,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: sequelize,
      title: "SEQUELIZE",
      style: "shadow-blue-400",
    },
    {
      id: 7,
      src: react,
      title: "REACT",
      style: "shadow-sky-600",
    },
    {
      id: 8,
      src: postgresql,
      title: "POSTGRESQL",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: node,
      title: "NODE",
      style: "shadow-green-500",
    },
    {
      id: 10,
      src: mongoDb,
      title: "MONGODB",
      style: "shadow-green-400",
    },
    {
      id: 11,
      src: boostrap,
      title: "BOOSTRAP",
      style: "shadow-violet-500",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from bg-gray-800  to-black w-full min-h-screen overflow-auto p-4 mx-auto"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
