import { footerLinksList } from "@/config/constants/content";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="w-full p-8 md:flex  md:justify-between">
        <span className="text-center text-yellow-200">
          © {`${new Date().getFullYear()} `}
          Warner Hurtado
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0">
          {footerLinksList.map((link) => (
            <li key={link.id}>
              <a href={link.url} className="hover:underline me-4 md:me-6">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
