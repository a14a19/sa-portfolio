import Card from "./shared/Card"

function CardContainer() {
    return (
        <section className="flex gap-5">
            <Card type={"EXPERIENCE"} />
            <Card type={"TIMEMODE"} />
            <Card type={"PROJECT"} />
        </section>
    )
}

export default CardContainer