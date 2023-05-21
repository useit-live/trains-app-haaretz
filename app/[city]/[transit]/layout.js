import RadioBar from "@/app/components/radiobar/RadioBar";

const Layout = ({children}) => {
    return (
        <div>
            <RadioBar/>
            {children}
        </div>
    );
};

export default Layout;