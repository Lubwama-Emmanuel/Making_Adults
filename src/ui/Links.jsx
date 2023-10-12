const links = [
  {
    id: 1,
    item: "Get these right",
    link: "#get_these",
  },
  {
    id: 2,
    item: "Opportunities",
    link: "#opportunities",
  },
  {
    id: 3,
    item: "Connect",
    link: "#contact",
  },
  {
    id: 4,
    item: "About Dr.Mitch",
    link: "#about",
  },
];

// Separator component
export default function Links({ styles, setClicked }) {
  return (
    <ul className={styles}>
      {links.map((el) => (
        <LinkItem el={el} key={el.id} setClicked={setClicked} />
      ))}
    </ul>
  );
}

function LinkItem({ el, setClicked }) {
  return (
    <li className="" onClick={() => setClicked((value) => !value)}>
      <a href={el.link}>{el.item}</a>
    </li>
  );
}
