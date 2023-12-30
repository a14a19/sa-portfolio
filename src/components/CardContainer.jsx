import Card from "./shared/Card";

function CardContainer() {
   return (
      <section className="flex w-full gap-5">
         {/* First Column */}
         <div className="flex-1 w-64">
            <div className="flex flex-col items-center gap-5">
               <Card type={"EXPERIENCE"} />
               <Card type={"KINDWORDS"} />
            </div>
         </div>

         {/* Second Column */}
         <div className="flex-1">
            <div className="flex flex-col items-center gap-5">
               <Card type={"TIMEMODE"} />
               <Card type={"YEARSPROCTAS"} />
            </div>
         </div>

         {/* Third Column */}
         <div className="flex-1">
            <div className="flex flex-col items-center gap-5">
               <Card type={"PROJECT"} />
               <Card type={"EDUCATION"} />
            </div>
         </div>
      </section>
   );
}

export default CardContainer;
