import React from 'react';
import Icon from '@economist/component-icon';

export default class Library extends React.Component {

  static get propTypes() {
    return {
      children: React.PropTypes.arrayOf(React.PropTypes.element),
    };
  }

  static get defaultProps() {
    return {
      children: [],
    };
  }

  /* eslint-disable no-undef */
  scrollTo(event) {
    document.location = event.target.selectedOptions[0].value;
  }

  render() {
    return (
      <div className="library--wrapper">
        <div className="library--sidebar">
          <Icon icon="economist" size="60px" uri="assets/icons.svg"
            className="library--economist-logo"
          />
          <select
            className="library__component-list"
            onChange={this.scrollTo.bind(this)}
          >
            <option value="#goToTop">Please select a component</option>
          {this.props.children ? this.props.children.map((child) => {
            return (
              <option value={`#${child.props.metadata.name}`}
                className="library--sidebar-link"
                key={`${child.props.metadata.name}-menu`}
              >{child.props.metadata.name.replace('@economist\/component-', '')}</option>
            );
          }) : null}
          </select>
          <a name="goToTop"></a>
        </div>
        <div className="library--main" role="main">{this.props.children}</div>
      </div>
    );
  }
}
