export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="w-full p-8 md:flex  md:justify-between">
        <span className="text-center text-yellow-200">
          © {`${new Date().getFullYear()} `}
          Warner Hurtado
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0">
          <li>
            <a
              href="https://warner-hurtado-laguna.vercel.app/en"
              className="hover:underline me-4 md:me-6"
            >
              More about Warner
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/warner-hurtado/"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:warnerhurtadolagu@gmail.com"
              className="hover:underline me-4 md:me-6"
            >
                Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
