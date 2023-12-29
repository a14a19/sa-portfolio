import Card from "./shared/Card";

function CardContainer() {
   return (
      <section className="flex flex-col gap-5">
         <div className="flex gap-5">
            <Card type={"EXPERIENCE"} />
            <Card type={"TIMEMODE"} />
            <Card type={"PROJECT"} />
         </div>
         <div className="flex gap-5">
            <Card type={"KINDWORDS"} />
            <Card type={"YEARSPROCTAS"} />
            <Card type={"EDUCATION"} />
         </div>
      </section>
   );
}

export default CardContainer;
