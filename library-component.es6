import React from 'react';

export default class LibraryComponent extends React.Component {

  static get propTypes() {
    return {
      metadata: React.PropTypes.shape({
        name: React.PropTypes.string,
        version: React.PropTypes.string,
        description: React.PropTypes.string,
        homepage: React.PropTypes.string,
      }).isRequired,
      children: React.PropTypes.arrayOf(React.PropTypes.element),
    };
  }

  render() {
    const componentName = this.props.metadata.name.replace('@economist\/component-', '');
    return (
      <div
        className={`library  library__${componentName}`}
      ><a className="anchor" name={this.props.metadata.name} />
        <a className="library--heading"
          href={this.props.metadata.homepage}
        >
          <h1 className="library--title">{componentName}</h1>
          <h2 className="library--package-details">
            ({this.props.metadata.name}@{this.props.metadata.version})
          </h2>
        </a>
        <div className="library--example-wrapper">
          <div className="library--description">
            {this.props.metadata.description}
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
