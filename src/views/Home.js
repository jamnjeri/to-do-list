import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ToDoList from "../components/ToDoList"

function Home(){
    return(
        <>
            <NavBar />
            <ToDoList />
            <Footer />
        </>
    );
}

export default Home