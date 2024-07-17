import SectionTitle from "../../components/SectionTitle"

const About = () => {
  const Skills = [
    "JavaScript",
          "React",
          "Node",
          "Express",
          "MongoDB",
          "Flutter",
  ]
  return (
    <div>
      <SectionTitle title="About"/>
      <div className="flex w-full items-center">
        <div className=" h-[70] w-1/2">
        <lottie-player
            src="https://lottie.host/6c6bc216-33a9-4915-9067-6116d81cde88/I5c2zXAZ9h.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            mode="normal"
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <p className= "text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias tempore et dolor esse reprehenderit voluptatem eius consequuntur nesciunt. Delectus quam quasi aliquam saepe itaque molestiae voluptatum porro eaque quis nulla?</p>
          <p className="text-tertiary" >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam eaque veritatis fugit cum! Quo ab nihil nobis, minus maiores, libero iure quae, aliquam officiis voluptates quia facere facilis recusandae quam!
          </p>

        </div>
      </div>
      <div className = "py-5">
        <h1 className="text-tertiary text-xl">
        Technical Skills
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
        {Skills.map((Skill, index) => (
          <div className = "border border-tertiary py-3 px-10">
            <h1 className = "text-tertiary">{Skill}</h1>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}
export default About