import Header from "../components/Header"
import Card from "../components/Card"
import ToDoContainer from "../components/ToDoContainer"
import { useLocation } from "react-router-dom"

function Landing() 
{
    const data = useLocation()

    return (
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                {/* HEADER */}
                <Header username={data.state.user}/>

                {/* THREE CARDS IN ONE ROW */}
                <div className="flex gap-7 my-5">
                    <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Kerala"} />
                    <Card bgcolor={"#FD6663"} title={"October 10"} subtitle={"11:03:46"} />
                    <Card bgcolor={"#FCA201"} title={"Built using"} subtitle={"React"} />
                </div>

                {/* TODO SECTION IN NEXT ROW */}
                <ToDoContainer />
            </div>
        </div>
    );
}

export default Landing