import Card from "./shared/Card";

function CardContainer() {
   return (
      <section className="grid md:grid-cols-6 grid-cols-4 sm-screen:grid-cols-2 grid-rows-5 gap-5">
         <Card type={"TIMESM"} />
         <Card type={"MODESM"} />
         <Card type={"EXPERIENCE"} />
         <Card type={"TIMEMD"} />
         <Card type={"MODEMD"} />
         <Card type={"STARTUPS"} />
         <Card type={"WHATIDO"} />
         <Card type={"INVESTMENTS"} />
         <Card type={"YEARPRO"} />
         <Card type={"CTAS"} />
         <Card type={"JOBS"} />
         <Card type={"KINDWORDS"} />
         <Card type={"COHORT"} />
         {/* <Card type={"TIMEMODE"} /> */}
         {/* <Card type={"KINDWORDS-YEARSPROCTAS"} /> */}
         {/* <Card type={"JOB-COHORT"} /> */}
         <Card type={"EDUCATION"} />
      </section>
   );
}

export default CardContainer;
