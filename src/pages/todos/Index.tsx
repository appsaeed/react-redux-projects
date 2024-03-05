import useHead from "../../hooks/useHead";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

export default function TodosPages() {

    useHead({
        title: "Todos",
        description: 'todo application is easy to use and maintained to work properly',
        keywords: "todos, application, appsaeed, react, redux, javascript."
    })

    return (
        <div className="bg-gray-700 w-full h-screen pb-16">

            <Navbar />

            <div className="shadow-lg rounded-lg p-6 bg-white my-10 max-w-xl mx-auto">

                <Header />

                <hr className="mt-4" />

                <Todos />

                <hr className="mt-4" />

                <Footer />
            </div>
        </div>

    )
}
