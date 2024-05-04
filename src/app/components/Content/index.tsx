import { linksList } from "@/config/constants/content";
import { Footer } from "./Footer";
import { Header } from "./Header";

type ContentBaseProps = {
    children?: React.ReactNode
};

export const ContentBase: React.FC<ContentBaseProps> = ({ children }) => {

    return <>
        <Header linksList={ linksList }/>
            { children }
        <Footer />
    </>
}