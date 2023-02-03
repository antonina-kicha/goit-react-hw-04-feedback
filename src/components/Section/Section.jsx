import PropTypes from 'prop-types';
import {SectionWithTitle} from '../Section/Section.styled'

export const Section = ({ title, children }) => (
  <SectionWithTitle>
    <h2>{title}</h2>
    {children}
  </SectionWithTitle>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}