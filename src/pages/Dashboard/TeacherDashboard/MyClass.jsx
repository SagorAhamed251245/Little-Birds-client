import { useEffect, useState } from "react";
import MyAllClass from "../../../api/MyAllClass";
import DataNotFound from "../../../component/DataNotFound/DataNotFound";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import MyClassTable from "./MyClassTable";
import FindClassByEmail from "../../../api/FindClassByEmail";



const MyClass = () => {
  const [myAllClass, refetch] = MyAllClass();
  const [findClassByEmail] = FindClassByEmail();
  const [allMyClass, setAllMyClass] = useState([]);

  useEffect(() => {
    const approvedClasses = findClassByEmail.filter(
      (item) => item?.Status === "approved"
    );
  
    const deniedClasses = myAllClass.filter(
      (item) => item?.Status !== "approved"
    );
  
    const allClasses = [...approvedClasses, ...deniedClasses];
    setAllMyClass(allClasses);
  }, [findClassByEmail, myAllClass]);

  console.log(allMyClass);

  return (
    <>
      <div className="overflow-x-auto w-full">
        <SectionTitle heading={"My Classes"}></SectionTitle>
        {allMyClass.length > 0 ? (
          <>
            <table className="table w-[90%] mx-auto text-center font-bold">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th></th>
                  <th>Name</th>
                  <th>Instructor Name</th>
                  <th>Instructor Email</th>
                  <th>Seats</th>
                  <th>Enrolled Students</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {allMyClass.map((item, index) => (
                  <MyClassTable
                    key={item._id}
                    item={item}
                    index={index}
                    refetch={refetch}
                  ></MyClassTable>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <>
            <DataNotFound
              title={"No One Haven't Added any Class"}
            ></DataNotFound>
          </>
        )}
      </div>
    </>
  );
};

export default MyClass;
