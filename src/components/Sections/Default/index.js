
export default function SectionDefault(props) {
  const sectionName = props.name.toString().toLowerCase();
  const componentRendering = `${props.component}`;

  return (
    <>
      <section id={sectionName}>
        <h3 className="text-center">{props.title}</h3>
        <props.component />
      </section>

    </>
  )
};