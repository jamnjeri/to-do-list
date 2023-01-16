import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ToDoList from "../components/ToDoList"
import UserInfo from "../components/UserInfo";

function Home(){
    return(
        <>
            <NavBar />
            <UserInfo />
            <ToDoList />
            <Footer />
        </>
    );
}

export default Home