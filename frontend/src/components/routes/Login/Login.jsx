import Logo from "../../atomic/Logo";
import MainIntro from "./MainIntro";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <section className="w-screen h-screen flex flex-row">
      <article className="w-[50vw] relative flex items-center justify-center mt-14">
        <Logo isFixed={true} />
        <LoginForm />
      </article>
      <article className="w-[50vw] bg-gradient-to-b to-[#023e8a] from-[#7046fc] flex items-center justify-center">
        <MainIntro />
      </article>
    </section>
  );
};

export default Login;
