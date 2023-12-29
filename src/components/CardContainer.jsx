import Card from "./shared/Card";

function CardContainer() {
   return (
      <section className="flex gap-5">
         <Card type={"EXPERIENCE"} />
         <Card type={"TIMEMODE"} />
         <Card type={"PROJECT"} />
         
         <Card type={"KINDWORDS"} />
         <Card type={"YEARSPRO"} />
         <Card type={"CTAS"} />
         <Card type={"EDUCATION"} />
      </section>
   );
}

export default CardContainer;
