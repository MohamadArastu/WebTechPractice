type LinksProps = {
  links: {
    link: string;
    linkName: string;
  }[];
};

export const LearningLinks = (props: LinksProps) => {
  return (
    <div>
      {props.links.map((link) => {
        return (
          <p key={link.link}>
            <a href={link.link}>{link.linkName}</a>
          </p>
        );
      })}
    </div>
  );
};
