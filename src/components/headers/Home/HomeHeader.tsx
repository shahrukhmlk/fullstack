export interface IHomeHeader {}

const HomeHeader: React.FC<IHomeHeader> = () => {
  return (
    <header className="flex flex-col p-8">
      <h1>Shahrukh Malik</h1>
      <p>Software Developer</p>
      <hr />
      <p>
        A versatile software developer specializing in ReactJS and JavaScript.
        With expertise in building responsive frontends and managing
        multilingual e-commerce platforms, fluent in English, Arabic, Urdu, and
        Hindi, I bring a diverse perspective to projects.
      </p>
    </header>
  )
}

export default HomeHeader
