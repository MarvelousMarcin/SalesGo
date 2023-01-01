import Logo from "../../atomic/Logo";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <section className="w-screen h-screen flex flex-row relative items-center justify-center">
      <Logo isFixed={true} />
      <RegisterForm />
    </section>
  );
};

export default Register;
