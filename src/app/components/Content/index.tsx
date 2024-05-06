import { headerLinksList } from "@/config/constants/content";
import { Footer } from "./Footer";
import { Header } from "./Header";

type ContentBaseProps = {
  children?: React.ReactNode;
};

export const ContentBase: React.FC<ContentBaseProps> = ({ children }) => {
  return (
    <>
      <Header linksList={headerLinksList} />
      <main className="min-h-screen mt-12 justify-between p-10 md:p-20">
        {children}
      </main>
      <Footer />
    </>
  );
};
