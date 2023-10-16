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
export default function Links({ styles }) {
  return (
    <ul className={styles}>
      {links.map((el) => (
        <LinkItem el={el} key={el.id} />
      ))}
    </ul>
  );
}

function LinkItem({ el }) {
  return (
    <li className="">
      <a href={el.link}>{el.item}</a>
    </li>
  );
}
