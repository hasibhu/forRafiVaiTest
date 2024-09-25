import ConsoleLog from "@/utils/ConsoleLog";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";


const DashboardPage = async () => {
  const session = await getServerSession(authOptions)
  // const accessToken = localStorage.getItem("accessToken")
  return (
    <div>
      <ConsoleLog consoleLog={session} ></ConsoleLog>
      <h1 className="text-4xl text-center mt-10">Welcome, {session?.user?.name}</h1>
      

      {
        (session?.user)  && 
        <>
          <Image
            width={100}
            height={100}
            src={session?.user?.image || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }
            alt="image"
            className="rounded-full mx-auto mt-6"
          />
        </>
      }
    </div>
  );
};

export default DashboardPage;
