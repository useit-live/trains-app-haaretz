import RadioButtons from "@/components/radiobuttons/RadioButtons";

const Layout = ({children}) => {
    return (
        <section>
            <RadioButtons/>
            {children}
        </section>
    );
};

export default Layout;