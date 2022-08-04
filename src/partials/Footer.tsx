import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    <hr className="h-4" />
    <div>
      <p>{'\u00A9'} Copyright 2022 by Underscore Software, LLC</p>
    </div>
  </Section>
);

export { Footer };
