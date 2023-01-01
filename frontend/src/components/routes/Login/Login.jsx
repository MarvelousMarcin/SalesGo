import Logo from "../../atomic/Logo";
import MainIntro from "./MainIntro";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <section className="w-screen h-screen flex flex-row">
      <article className="w-[50vw] relative flex items-center justify-center">
        <Logo />
        <LoginForm />
      </article>
      <article className="w-[50vw] bg-[#023E8A] flex items-center justify-center">
        <MainIntro />
      </article>
    </section>
  );
};

export default Login;
