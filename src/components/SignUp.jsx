export default function SignUp() {
  return (
    <div className="flex flex-row flex-wrap justify-between gap-10 w-[70vw] m-auto my-10">
      <p className="text-[#5C6874] md:text-3xl sm:text-2xl">
        Sign up and get exclusive special deals
      </p>
      <span className="flex flex-row flex-nowrap rounded-xl">
        <input type="text" className="p-4 rounded-s-xl outline-sky-600" />
        <button className="text-white bg-[#1B88F4] p-4 rounded-e-xl">
          Signup
        </button>
      </span>
    </div>
  );
}
